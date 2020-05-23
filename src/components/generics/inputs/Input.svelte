<script>
  export let type = "text";
  export let placeholder;
  export let value;

  const handleChange = event => (value = event.target.value);
</script>

<style>
  input {
    padding: 10px;
    margin: 5px;

    width: 100%;

    border-radius: 2px;
    border-width: 1px;
  }
</style>

<input {type} {placeholder} on:change={handleChange} />
