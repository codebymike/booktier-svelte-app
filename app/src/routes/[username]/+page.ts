import { db } from '$lib/firebase';
import { collection, limit, query, where } from 'firebase/firestore';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    
    const collectionRef = collection(db, "users");

    const q = query(
        collectionRef,
        where("username", "==", params.username),
        limit(1)
    );

    return {};
}) satisfies PageLoad;