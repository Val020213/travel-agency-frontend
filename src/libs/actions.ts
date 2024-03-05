//define all actions here
'use server';
import { z } from 'zod';
// import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { stat } from 'fs';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';


import { Search } from './actions/search';
import { SearchSubmit } from './actions/search';
import { createUser } from './actions/signUp';