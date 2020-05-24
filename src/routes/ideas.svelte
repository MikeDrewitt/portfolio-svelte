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
  <title>Portfolio - Ideas</title>
</svelte:head>

<div class="container">
  <h1 class="title">Ideas</h1>

  <div class="content">
    <p>
      A list that saves is going to require some kind of data base and
      authentication. Maybe this is a good time to whip up some kind of auth/
      use an auth system? Regardless, for now why don't we just hard code some
      ideas such that we don't lose them in out sleep.
    </p>

    <div class="content">
      <h2>Svelte Ideas</h2>
      <ul>
        <li>Theming Engine</li>
        <li>Recreate a game</li>
        <li>Ideas List</li>
        <li>Draw a path on a map</li>
      </ul>

      <h2>Api Ideas</h2>
      <ul>
        <li>OAuth</li>
        <li>Ideas API</li>
      </ul>
    </div>
  </div>
</div>
