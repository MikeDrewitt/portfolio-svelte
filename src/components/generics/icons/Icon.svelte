<script>
  // Libraries
  import Icon from "../../../../node_modules/svelte-awesome/components/Icon.svelte";

  // Icons
  import { anchor, bars, close, userCircle } from "svelte-awesome/icons";

  export let icon;
  export let size = 1;

  const faIcons = {
    anchor,
    bars,
    close,
    "user-circle": userCircle
  };

  $: data = faIcons[icon];
</script>

<Icon {data} scale={size} />
