import { defaultProjects, ProjectItem } from '@/data/defaultProjects';

const STORAGE_KEY = 'nirwikara_portfolio_projects_v3';
export const PORTFOLIO_UPDATED_EVENT = 'nirwikara_portfolio_updated';
const ADMIN_PASS = 'N!rw1k4r@Build#2026';

/**
 * Compresses an image file on the client before saving/uploading.
 * Converts heavy multi-megabyte camera photos into optimized crisp WebP/JPEG (~150-250KB).
 */
export function compressImageFile(file: File, maxWidth = 1600, maxHeight = 1200, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(event.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // Try WebP first with quality, fallback to JPEG
        try {
          const webpData = canvas.toDataURL('image/webp', quality);
          if (webpData.startsWith('data:image/webp')) {
            resolve(webpData);
            return;
          }
        } catch {
          // fallback
        }
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

export function getStoredProjects(): ProjectItem[] {
  if (typeof window === 'undefined') {
    return defaultProjects;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error loading portfolio from localStorage:', err);
  }

  return defaultProjects;
}

export async function fetchLiveProjects(): Promise<ProjectItem[]> {
  try {
    const res = await fetch('/api/portfolio', { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        saveLocalProjects(json.data, false);
        return json.data;
      }
    }
  } catch (err) {
    console.log('Fetching live projects note:', err);
  }
  return getStoredProjects();
}

export function saveLocalProjects(projects: ProjectItem[], notifyEvent = true): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    if (notifyEvent) {
      window.dispatchEvent(new CustomEvent(PORTFOLIO_UPDATED_EVENT, { detail: projects }));
    }
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }
}

export async function addProject(project: Omit<ProjectItem, 'id'> & { id?: number }): Promise<ProjectItem[]> {
  const current = getStoredProjects();
  const nextId = current.length > 0 ? Math.max(...current.map((p) => p.id)) + 1 : 1;
  const newProject: ProjectItem = {
    ...project,
    id: project.id || nextId,
    isCustom: true,
  };

  const updated = [newProject, ...current];
  saveLocalProjects(updated);

  // Sync to API
  try {
    await fetch('/api/portfolio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': ADMIN_PASS,
      },
      body: JSON.stringify(newProject),
    });
  } catch (err) {
    console.log('API sync note:', err);
  }

  return updated;
}

export async function updateProject(id: number, updatedData: Partial<ProjectItem>): Promise<ProjectItem[]> {
  const current = getStoredProjects();
  const updated = current.map((p) => (p.id === id ? { ...p, ...updatedData } : p));
  saveLocalProjects(updated);

  // Sync to API
  try {
    await fetch('/api/portfolio', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': ADMIN_PASS,
      },
      body: JSON.stringify({ id, ...updatedData }),
    });
  } catch (err) {
    console.log('API update sync note:', err);
  }

  return updated;
}

export async function deleteProject(id: number): Promise<ProjectItem[]> {
  const current = getStoredProjects();
  const updated = current.filter((p) => p.id !== id);
  saveLocalProjects(updated);

  // Sync to API
  try {
    await fetch(`/api/portfolio?id=${id}`, {
      method: 'DELETE',
      headers: {
        'x-admin-token': ADMIN_PASS,
      },
    });
  } catch (err) {
    console.log('API delete sync note:', err);
  }

  return updated;
}

export async function resetToDefaultProjects(): Promise<ProjectItem[]> {
  saveLocalProjects(defaultProjects);

  // Sync to API
  try {
    await fetch('/api/portfolio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': ADMIN_PASS,
      },
      body: JSON.stringify({ action: 'reset' }),
    });
  } catch (err) {
    console.log('API reset sync note:', err);
  }

  return defaultProjects;
}
