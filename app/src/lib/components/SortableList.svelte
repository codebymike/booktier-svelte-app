<script lang="ts">
    import { flip } from "svelte/animate";
    import { createEventDispatcher } from "svelte";

    export let list: any[];
    let isOver: string | boolean = false;
    const dispatch = createEventDispatcher();

    
</script>