<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte";

    let username = "";
    let loading = false;
    let isAvailable = false;

    async function confirmUsername() {
    // TODO
    }

</script>



<AuthCheck>
    <h2>Username</h2>
    <form class="w-2/5" on:submit|preventDefault={confirmUsername}>


      </form>
</AuthCheck>