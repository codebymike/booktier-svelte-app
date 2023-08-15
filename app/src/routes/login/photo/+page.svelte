<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte";
    import { user, userData, storage, db } from "$lib/firebase";
    import { doc, updateDoc } from "firebase/firestore";
    import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

    let previewURL: string;
    let uploading = false;
    $: href = `/${$userData?.username}/edit`;

    async function upload(e: any) {
        uploading = true;
        const file = e.target.files[0];
        previewURL = URL.createObjectURL(file);
        const storageRef = ref(storage, `users/${$user!.uid}/profile.png`);
        const result = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(result.ref);

        await updateDoc(doc(db, "users", $user!.uid), { photoURL: url });
        uploading = false;
    }

</script>

<AuthCheck>
    <h2 class="card-title">Upload a Profile Photo</h2>

    <form class="max-w-screen-md w-full">
    </form>

    <a {href} class="btn btn-primary"> Finish </a>
</AuthCheck>