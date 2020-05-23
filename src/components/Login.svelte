<script>
  // Libraries
  import faker from "faker";

  // Components
  import Modal from "./generics/Modal.svelte";
  import IconButton from "./generics/icons/IconButton.svelte";
  import Input from "./generics/inputs/Input.svelte";
  import Button from "./generics/buttons/Button.svelte";

  // Store
  import user, { username } from "../stores/user.store";

  let loginModal = false;
  let email = null;
  let password = null;

  function handleLogin() {
    // Let's pretend like a promise is happening here to check login credentials
    user.username.set(faker.internet.userName());
    user.avatar.set(faker.internet.avatar());
    user.joinDate.set(faker.date.past());
    user.authToken.set(faker.random.uuid());

    loginModal = false;
  }

  function openModal() {
    loginModal = true;
  }
</script>

<style>
  .title-box {
    display: flex;
    align-items: center;

    height: 70px;
    width: 100%;

    background: #3f61a0;
    color: white;
  }

  .title {
    margin: 0 20px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    padding: 20px;

    height: 200px;
  }

  .row {
    display: flex;
    justify-content: space-around;

    width: 100%;

    flex-wrap: wrap;
  }

  .inputs {
    width: 300px;
  }

  .buttons {
    justify-content: center;
  }

  .user {
    margin-right: 5px;
    color: white;
  }
</style>

{#if !$username}
  <IconButton on:click={openModal} icon="user-circle" size="2" color="white">
    Login
  </IconButton>

  <Modal bind:open={loginModal}>
    <div class="title-box">
      <h2 class="title">Login</h2>
    </div>

    <form class="content">

      <div class="row inputs">
        <Input type="email" placeholder="Email" bind:value={email} />
        <Input type="password" placeholder="Password" bind:value={password} />
      </div>

      <div class="row buttons">
        <Button on:click={handleLogin}>Login</Button>
        <Button type="secondary">Sign Up</Button>
      </div>
    </form>
  </Modal>
{:else}
  <div class="user">{$username}</div>
{/if}
