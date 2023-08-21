import { db } from '$lib/firebase';
import { collection } from 'firebase/firestore';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    
    const collectionRef = collection(db, "users");

    return {};
}) satisfies PageLoad;