import { NextResponse } from 'next/server';
import { data } from '@/lib/dlabs_teval';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const submission = data.find(s => s.id === params.id);
  if (!submission) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(submission.currentState);
}