import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {

    const sessionCookie = cookies.get('__session');

}) satisfies PageServerLoad;