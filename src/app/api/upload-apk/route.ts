import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Set your API token here or use an environment variable
const API_TOKEN = process.env.APK_UPLOAD_TOKEN || 'your-secret-token';

export async function POST(req: NextRequest) {
  // Check Authorization header
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const token = authHeader.replace('Bearer ', '').trim();
  if (token !== API_TOKEN) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }

  // Parse multipart form data
  const contentType = req.headers.get('content-type') || '';
  if (!contentType.startsWith('multipart/form-data')) {
    return NextResponse.json({ error: 'Content-Type must be multipart/form-data' }, { status: 400 });
  }

  // Use the experimental formData API
  const formData = await req.formData();
  const file = formData.get('file');
  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  // Save file to /public/ai-diary-apk/app-release.apk
  const apkDir = path.join(process.cwd(), 'public', 'ai-diary-apk');
  await mkdir(apkDir, { recursive: true });
  const filePath = path.join(apkDir, 'app-release.apk');
  const arrayBuffer = await file.arrayBuffer();
  await writeFile(filePath, Buffer.from(arrayBuffer));

  return NextResponse.json({ success: true, path: '/ai-diary-apk/app-release.apk' });
}