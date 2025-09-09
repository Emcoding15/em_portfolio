import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      title: 'Project One',
      description: 'Description for project one.',
      url: 'https://example.com/project-one'
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      url: 'https://example.com/project-two'
    }
  ]);
}
