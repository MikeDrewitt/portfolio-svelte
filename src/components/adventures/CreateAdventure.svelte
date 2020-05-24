<script>
  import Input from "../generics/inputs/Input.svelte";

  let name;
  let description;
  let addressLine1;
</script>

<style>
  .container {
    display: flex;
  }
</style>

<div class="container">
  <form>
    <Input bind:value={name} placeholder="Name" />
    <Input bind:value={description} placeholder="Description" />
    <Input bind:value={addressLine1} placeholder="Address" />
  </form>
</div>
