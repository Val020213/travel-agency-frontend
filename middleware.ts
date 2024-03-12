import { NextRequest } from 'next/server';
import { updateSession } from '@/libs/actions/updateSession';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
