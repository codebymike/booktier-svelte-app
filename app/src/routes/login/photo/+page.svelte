<script lang="ts">

    import { user, userData, storage, db } from "$lib/firebase";

    let previewURL: string;
    let uploading = false;
    $: href = `/${$userData?.username}/edit`;

</script>

<h2>Photo</h2>