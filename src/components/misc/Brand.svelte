<script>
  // Components
  import Icon from "../generics/icons/Icon.svelte";
  import IconButton from "../generics/icons/IconButton.svelte";
</script>

<style>
  .site-title {
    padding: 5px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    color: white;

    text-decoration: none;
  }

  .site-title h1 {
    margin: 0;
    margin-left: 10px;
  }
</style>

<a href="." class="site-title">
  <Icon icon="anchor" size="2" />
  <h1>Svelte Site</h1>
</a>
