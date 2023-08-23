<script lang="ts">
    import { flip } from "svelte/animate";
    import { createEventDispatcher } from "svelte";

    export let list: any[];
    let isOver: string | boolean = false;
    const dispatch = createEventDispatcher();

    function getDraggedParent(node: any) {
        if (!node.dataset.index) {
            return getDraggedParent(node.parentNode);
        } else {
            return { ...node.dataset };
        }
    }

</script>