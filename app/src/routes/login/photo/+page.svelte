<script lang="ts">

    import { user, userData, storage, db } from "$lib/firebase";

    let previewURL: string;
    let uploading = false;
    $: href = `/${$userData?.username}/edit`;

    async function upload(e: any) {
        uploading = true;
        const file = e.target.files[0];
    }

</script>

<h2>Photo</h2>