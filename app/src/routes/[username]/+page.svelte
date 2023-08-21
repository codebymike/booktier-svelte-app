<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<svelte:head>
    <title>@{data.username} Links</title>
    <meta name="description" content={data.bio} />
</svelte:head>

<main class="prose text-center mx-auto mt-8">

    <h1 class="text-7xl text-purple-500">
        @{data.username}
    </h1>

</main>