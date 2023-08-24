import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
    return new Response();
};