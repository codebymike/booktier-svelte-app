<script lang="ts">
    import { page } from "$app/stores";
    import SortableList from "$lib/components/SortableList.svelte";
    import UserBook from "$lib/components/UserBook.svelte";
    import { db, userData, user } from "$lib/firebase";
    import {
      arrayRemove,
      arrayUnion,
      doc,
      setDoc,
      updateDoc,
    } from "firebase/firestore";
    import { writable } from "svelte/store";

    
    const formDefaults = {
      title: "",
      author: "",
    };

    const formData = writable(formDefaults);
  
    let showForm = false;

    $: titleIsValid = $formData.title.length < 20 && $formData.title.length > 0;
    $: authorIsValid = $formData.title.length < 20 && $formData.title.length > 0;
    $: formIsValid = titleIsValid && authorIsValid;

    async function addLink(e: SubmitEvent) {
      const userRef = doc(db, "users", $user!.uid);
  
      await updateDoc(userRef, {
        links: arrayUnion({
          ...$formData,
          id: Date.now().toString(),
        }),
      });
  
      formData.set({
        title: "",
        author: "",
      });
  
      showForm = false;
    }

    function sortList(e: CustomEvent) {
      const newList = e.detail;
      const userRef = doc(db, "users", $user!.uid);
      setDoc(userRef, { links: newList }, { merge: true });
    }

    async function deleteLink(item: any) {
      const userRef = doc(db, "users", $user!.uid);
      await updateDoc(userRef, {
        links: arrayRemove(item),
      });
    }

    function cancelLink() {
      formData.set(formDefaults);
      showForm = false;
    }

</script>

<main class="max-w-xl mx-auto">
    {#if $userData?.username == $page.params.username}
        <h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center">
            Edit your BookTier
        </h1>

        <SortableList list={$userData?.links} on:sort={sortList} let:item let:index>
          <div class="group relative">
            <UserBook {...item} />
            <button
              on:click={() => deleteLink(item)}
              class="btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10"
              >Delete</button
            >
          </div>
        </SortableList>

        {#if showForm}
            <form
                on:submit|preventDefault={addLink}
                class="bg-base-200 p-6 w-full mx-auto rounded-xl"
            >
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    class="input input-sm"
                    bind:value={$formData.title}
                />
                <input
                    name="author"
                    type="text"
                    placeholder="Author"
                    class="input input-sm"
                    bind:value={$formData.author}
                />
                <div class="my-4">
                    {#if !titleIsValid}
                    <p class="text-error text-xs">Must have valid title</p>
                    {/if}
                    {#if !authorIsValid}
                    <p class="text-error text-xs">Must have a valid author</p>
                    {/if}
                    {#if formIsValid}
                    <p class="text-success text-xs">Looks good!</p>
                    {/if}
                </div>

                <button
                    disabled={!formIsValid}
                    type="submit"
                    class="btn btn-success block">Add Book</button
                >
    
                <button type="button" class="btn btn-xs my-4" on:click={cancelLink}>Cancel</button>
            </form>
            
        {:else}
            <button
                on:click={() => (showForm = true)}
                class="btn btn-outline btn-info block mx-auto my-4"
            >
                Add a Book
            </button>
        {/if}
    {/if}
</main>

