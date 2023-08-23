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

    function onDragStart(e: DragEvent) {
        const dragged = getDraggedParent(e.target);
        e.dataTransfer?.setData("source", dragged?.index.toString());
    }

    function onDragOver(e: DragEvent) {
        // @ts-ignore
        const id = e.target.dataset?.id;
        const dragged = getDraggedParent(e.target);
        isOver = dragged?.id ?? false;
    }

    function onDragLeave(e: DragEvent) {
        const dragged = getDraggedParent(e.target);
        isOver === dragged.id && (isOver = false);
    }

    function onDrop(e: DragEvent) {
        isOver = false;
        const dragged = getDraggedParent(e.target);
        reorder({
            from: e.dataTransfer?.getData("source"),
            to: dragged.index,
        });
    }

</script>