<script>
  export let id;
  export let firstName;
  export let lastName;
  export let phoneNumber;
  export let address;
  export let email;

  export let removeContact;
</script>

<style>
  .remove-button {
    background-color: lightcoral;
    cursor: pointer;
  }
</style>

<div>
  <ul>
    {#if firstName}
      <li>Name: {firstName} {lastName}</li>
    {/if}
    {#if phoneNumber}
      <li>Phone: {phoneNumber}</li>
    {/if}
    {#if address}
      <li>Address: {address}</li>
    {/if}
    {#if email}
      <li>Email: {email}</li>
    {/if}
  </ul>
</div>

<button class="remove-button" on:click={() => removeContact(id)}>
  Remove Contact
</button>
