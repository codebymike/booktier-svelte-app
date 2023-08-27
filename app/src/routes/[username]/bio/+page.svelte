<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main class="max-w-lg prose text-center mx-auto my-6">
    <p>Current Bio: <span class="text-info">{data.bio}</span></p>
</main>