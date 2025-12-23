import { NextResponse } from 'next/server';
import { data } from '@/lib/dlabs_teval';


export async function GET() {
  const summary = data.map(s => ({
    id: s.id,
    studentName: s.studentName,
    lastUpdated: s.currentState.lastUpdated,
    assignmentTitle: s.assignmentTitle
  }));
  return NextResponse.json(summary);
}