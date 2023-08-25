import type { PageServerLoad } from './$types';
import { error } from "@sveltejs/kit";

export const load = (async ({ cookies }) => {

    const sessionCookie = cookies.get('__session');

    try {

    } catch (e) {
        console.log(e)
        // redirect(301, '/login');
        throw error(401, 'Unauthorized request!')
    }


}) satisfies PageServerLoad;