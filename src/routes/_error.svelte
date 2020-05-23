<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    width: 100%;
    height: 200px;
  }
  .status {
    width: 100%;
    text-align: center;
  }
</style>

<svelte:head>
  <title>Page Error - {status}</title>
</svelte:head>

<div class="container">
  <h1 class="status">{status}</h1>
  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>
