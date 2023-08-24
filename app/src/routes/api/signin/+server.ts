import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {

    const { idToken } = await request.json();

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    
};