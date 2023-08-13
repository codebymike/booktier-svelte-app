<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte";

    let username = "";
    let loading = false;
    let isAvailable = false;

    let debounceTimer: NodeJS.Timeout;

    async function checkAvailability() {
    }

    async function confirmUsername() {
    // TODO
    }

</script>



<AuthCheck>
    <h2>Username</h2>
    <form class="w-2/5" on:submit|preventDefault={confirmUsername}>

        <input
          type="text"
          placeholder="Username"
          class="input w-full"
          bind:value={username}
          on:input={checkAvailability}
        />

        <p>Is available? {isAvailable}</p>

        <button class="btn btn-success">Confirm username @{username} </button>

    </form>
</AuthCheck>