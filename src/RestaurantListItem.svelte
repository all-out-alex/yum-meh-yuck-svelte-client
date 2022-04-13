<script lang="ts">
	import {
    AccordionItem
  } from "carbon-components-svelte";
  export let restaurant: Restaurant;
</script>

<AccordionItem open={false} title={restaurant.name}/>