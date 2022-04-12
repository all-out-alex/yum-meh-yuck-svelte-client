<script lang="ts">
	export let name: string;
	import { Accordion, AccordionItem } from "carbon-components-svelte";
	import {
    Theme,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";

  let theme = "g10";
</script>

<main>
	<Theme bind:theme />
	<RadioButtonGroup legendText="Carbon theme" bind:selected={theme}>
		{#each ["white", "g10", "g80", "g90", "g100"] as value}
			<RadioButton labelText={value} {value} />
		{/each}
	</RadioButtonGroup>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>