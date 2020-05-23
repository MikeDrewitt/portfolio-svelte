<script>
  export let type = "primary";

  const buttonTypes = {
    primary: "#4e87bd",
    secondary: "#4ebd96",
    error: "#bd644e"
  };

  $: color = buttonTypes[type] || "default";
</script>

<style>
  button {
    margin: 5px;
    padding: 10px;

    background: var(--button-color);
    color: white;

    border-radius: 2px;
    border-width: 0;
  }
</style>

<button class="button" style="--button-color: {color}" type="button" on:click>
  <slot />
</button>
