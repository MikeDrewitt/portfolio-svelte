<script>
  // Components
  import Icon from "../generics/icons/Icon.svelte";
  import IconButton from "../generics/icons/IconButton.svelte";
  import Login from "../Login.svelte";

  let loginModal = false;
</script>

<style>
  .top-bar {
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: space-between;

    background: #3f61a0;
  }

  .site-title {
    padding: 5px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    color: white;
  }

  .site-title h1 {
    margin: 0;
    margin-left: 10px;
  }
</style>

<div class="top-bar">
  <div class="site-title">
    <Icon icon="anchor" size="2" />
    <h1>Svelte Site</h1>
  </div>
  <Login />
</div>
