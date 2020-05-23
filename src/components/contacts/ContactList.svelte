<script>
  // Libraries
  import faker from "faker";

  // Components
  import Contact from "./Contact.svelte";
  import ContactForm from "./ContactForm.svelte";

  let contacts = [];
  let addingContact = false;

  $: contactCount = contacts.length;

  function handleAddContact(contact) {
    contacts.push(contact);

    addingContact = false;
    contacts = contacts;
  }

  function addRandomContact() {
    contacts.push({
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      address: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
      phoneNumber: faker.phone.phoneNumber()
    });

    contacts = contacts;
  }

  function removeContact(contactId) {
    contacts = contacts.filter(contact => contact.id !== contactId);
  }
</script>

<style>
  .add-button {
    background-color: lightgreen;
  }
</style>

<h2>{contactCount} contacts</h2>
<div>
  <button on:click={() => (addingContact = true)}>Add Contact</button>
  <button class="add-button" on:click={addRandomContact}>
    Add Random Contact
  </button>
</div>
{#if addingContact}
  <ContactForm onAddContact={handleAddContact} />
{/if}
<div>
  {#each contacts as contact}
    <Contact {...contact} {removeContact} />
  {/each}
</div>
