import { adminAuth } from "$lib/server/admin";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {  
    return resolve(event);
}) satisfies Handle;