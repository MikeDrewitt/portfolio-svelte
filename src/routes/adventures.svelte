<script>
  import RequestService from "../services/request.service";

  let promise = RequestService.get("/adventures");
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

  .title {
    width: 100%;
    text-align: center;
  }

  .content {
    width: 100%;
    margin: 30px;
  }
</style>

<svelte:head>
  <title>Portfolio - Adventures</title>
</svelte:head>

<div class="container">
  <h1 class="title">Adventures</h1>

  <div class="content">
    {#await promise}
      ...loading
    {:then adventures}
      <div>
        {#each adventures as adventure}
          <ul>
            <li>Name: {adventure.name}</li>
            <li>Description: {adventure.description || 'N/A'}</li>
            <li>Address: {adventure.addressLine1 || 'N/A'}</li>
          </ul>
        {/each}
      </div>
    {/await}
  </div>
</div>
