import { defaultProjects, ProjectItem } from '@/data/defaultProjects';

const STORAGE_KEY = 'nirwikara_portfolio_projects_v1';
export const PORTFOLIO_UPDATED_EVENT = 'nirwikara_portfolio_updated';

export function getStoredProjects(): ProjectItem[] {
  if (typeof window === 'undefined') {
    return defaultProjects;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultProjects;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error('Error loading portfolio from storage:', err);
  }

  return defaultProjects;
}

export function saveProjects(projects: ProjectItem[]): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    window.dispatchEvent(new CustomEvent(PORTFOLIO_UPDATED_EVENT, { detail: projects }));
  } catch (err) {
    console.error('Error saving portfolio to storage:', err);
  }
}

export function addProject(project: Omit<ProjectItem, 'id'> & { id?: number }): ProjectItem[] {
  const current = getStoredProjects();
  const nextId = current.length > 0 ? Math.max(...current.map((p) => p.id)) + 1 : 1;
  const newProject: ProjectItem = {
    ...project,
    id: project.id || nextId,
    isCustom: true,
  };

  // Put new projects right at the beginning for immediate highlight
  const updated = [newProject, ...current];
  saveProjects(updated);
  return updated;
}

export function updateProject(id: number, updatedData: Partial<ProjectItem>): ProjectItem[] {
  const current = getStoredProjects();
  const updated = current.map((p) => (p.id === id ? { ...p, ...updatedData } : p));
  saveProjects(updated);
  return updated;
}

export function deleteProject(id: number): ProjectItem[] {
  const current = getStoredProjects();
  const updated = current.filter((p) => p.id !== id);
  saveProjects(updated);
  return updated;
}

export function resetToDefaultProjects(): ProjectItem[] {
  saveProjects(defaultProjects);
  return defaultProjects;
}
