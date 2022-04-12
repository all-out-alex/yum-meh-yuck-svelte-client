<script lang="ts">
	import {
    Theme,
  } from "carbon-components-svelte";
</script>
<Theme
  render="toggle"
  toggle={{
    themes: ["g80", "g10"],
    labelA: "Enable light mode",
    labelB: "Enable dark mode",
    hideLabel: true,
    size: "sm",
  }}
  theme="g100"
/>