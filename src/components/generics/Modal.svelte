<script>
  import { fade } from "svelte/transition";

  export let open = false;

  function handleKeydown(event) {
    if (event.key === "Escape") open = false;
  }
</script>

<style>
  .modal {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    border: 1px solid #888;
    width: 80%;
  }
</style>

<svelte:window on:keydown={handleKeydown} />

{#if open}
  <div class="modal" on:click|self={() => (open = false)}>
    <div class="modal-content" transition:fade={{ delay: 0, duration: 100 }}>
      <slot />
    </div>
  </div>
{/if}
