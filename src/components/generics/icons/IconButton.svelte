<script>
  // Libraries
  import Icon from "./Icon.svelte";

  export let icon;
  export let size;
  export let color = "default";
</script>

<style>
  .styleless {
    border-width: 0;
    background: transparent;

    display: flex;
    align-items: center;

    margin: 0;
  }

  .label {
    margin-left: 5px;
  }
</style>

<button style="color: {color}" class="styleless" on:click>
  <Icon {icon} {size} />
  <span class="label">
    <slot />
  </span>
</button>
