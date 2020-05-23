<script>
  // Components
  import TopBar from "../components/navigation/TopBar.svelte";
  import SideBar from "../components/navigation/SideBar.svelte";
</script>

<nav>
  <TopBar />
  <SideBar />
</nav>

<main>
  <slot />
</main>
