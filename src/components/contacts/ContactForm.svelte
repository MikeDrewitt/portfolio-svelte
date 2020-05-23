<script>
  import faker from "faker";

  export let onAddContact;

  let firstName;
  let lastName;
  let phoneNumber;
  let email;
  let address;

  function handleAddContact() {
    onAddContact({
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      id: faker.random.uuid()
    });
  }
</script>

<div>
  <input type="text" placeholder="First Name" bind:value={firstName} />
  <input type="text" placeholder="Last Name" bind:value={lastName} />
  <input type="text" placeholder="Phone Number" bind:value={phoneNumber} />
  <input type="text" placeholder="Email" bind:value={email} />
  <input type="text" placeholder="Address" bind:value={address} />

  <button type="button" on:click={handleAddContact}>Create Contact</button>
</div>
