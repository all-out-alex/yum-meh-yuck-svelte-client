<script lang="ts">
  interface Restaurant {
    name: string;
  }
	import {
    Accordion
  } from "carbon-components-svelte";
  import RestaurantListItem from "./RestaurantListItem.svelte";
  export let restaurants: Restaurant[];
</script>

<Accordion open={false}>
  {#each restaurants as restaurant}
    <RestaurantListItem restaurant={restaurant} />
  {/each}
</Accordion>