import { NextRequest, NextResponse } from 'next/server';
import { defaultProjects, ProjectItem } from '@/data/defaultProjects';
import fs from 'fs';
import path from 'path';

const ADMIN_PASS = 'N!rw1k4r@Build#2026';
const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'customProjects.json');

// Global in-memory cache for serverless container lifecycle
let globalProjects: ProjectItem[] | null = null;

function loadProjects(): ProjectItem[] {
  if (globalProjects && globalProjects.length > 0) {
    return globalProjects;
  }

  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        globalProjects = parsed;
        return globalProjects;
      }
    }
  } catch (err) {
    console.error('API load error:', err);
  }

  globalProjects = [...defaultProjects];
  return globalProjects;
}

function persistProjects(projects: ProjectItem[]): void {
  globalProjects = projects;
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2), 'utf8');
  } catch (err) {
    // Vercel serverless has read-only fs at root, but in-memory global cache keeps state
    console.log('File persist note (serverless in-memory active):', err);
  }
}

export async function GET() {
  const list = loadProjects();
  return NextResponse.json({ success: true, count: list.length, data: list });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = req.headers.get('x-admin-token');

    if (token !== ADMIN_PASS) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    if (body.action === 'reset') {
      persistProjects([...defaultProjects]);
      return NextResponse.json({ success: true, message: 'Reset to default exhibits', data: defaultProjects });
    }

    if (body.action === 'bulk_sync' && Array.isArray(body.projects)) {
      persistProjects(body.projects);
      return NextResponse.json({ success: true, count: body.projects.length, data: body.projects });
    }

    const current = loadProjects();
    const nextId = current.length > 0 ? Math.max(...current.map((p) => p.id)) + 1 : 1;

    const newProject: ProjectItem = {
      id: body.id || nextId,
      title: body.title || 'Untitled Project',
      category: body.category || 'Residential Architecture',
      projectGroup: body.projectGroup || 'Bali',
      type: body.type || body.category || 'Residential Architecture',
      tag: body.tag || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      desc: body.desc || 'Modern architectural exhibit by NIRWIKARA.',
      image: body.image,
      specs: body.specs || 'Premium Architectural Finish',
      isCustom: true,
    };

    const updated = [newProject, ...current];
    persistProjects(updated);

    return NextResponse.json({ success: true, message: 'Project created', data: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const token = req.headers.get('x-admin-token');

    if (token !== ADMIN_PASS) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const current = loadProjects();
    const updated = current.map((p) => (p.id === body.id ? { ...p, ...body } : p));
    persistProjects(updated);

    return NextResponse.json({ success: true, message: 'Project updated', data: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '0', 10);
    const token = req.headers.get('x-admin-token');

    if (token !== ADMIN_PASS) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const current = loadProjects();
    const updated = current.filter((p) => p.id !== id);
    persistProjects(updated);

    return NextResponse.json({ success: true, message: 'Project deleted', data: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}
