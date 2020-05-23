<script>
  // Libraries
  import { fly } from "svelte/transition";

  // Components
  import IconButton from "../generics/icons/IconButton.svelte";

  import { sidebar } from "../../stores/active.store";

  const options = [
    { href: "/", label: "Home" },
    { href: "ideas", label: "Ideas" },
    { href: "account", label: "Account" },
    { href: "about", label: "About" }
  ];

  const showSidebar = () => sidebar.set(true);
  const hideSidebar = () => sidebar.set(false);
</script>

<style>
  .outside {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .sidebar {
    background: #3f61a0;

    width: 300px;
    height: 100%;

    position: absolute;
    top: 0;
  }

  .close-controls {
    display: flex;
    justify-content: flex-end;
  }

  .padding {
    padding: 10px;
  }

  .nav-options {
    list-style: none;

    color: white;

    font-size: 24px;
  }
</style>

<IconButton on:click={showSidebar} icon="bars" size="2" />

{#if $sidebar}
  <div class="outside" on:click|self={hideSidebar}>
    <div class="sidebar" transition:fly>
      <div class="close-controls">
        <span class="padding">
          <IconButton
            on:click={hideSidebar}
            icon="close"
            color="white"
            size="1.5">
            Hide
          </IconButton>
        </span>
      </div>
      <ul class="nav-options">
        {#each options as option}
          <li>
            <a on:click={() => sidebar.set(false)} href={option.href}>
              {option.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/if}
