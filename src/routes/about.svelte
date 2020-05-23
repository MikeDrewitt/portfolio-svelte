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
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container">
  <h1 class="title">Awesome new about page</h1>

  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </ul>
</div>
