<script lang="ts">
	export let name: string;
	// import type { CarbonTheme } from "carbon-components-svelte/types/Theme/Theme.svelte";
	import {
    Theme,
    // RadioButtonGroup,
    // RadioButton,
  } from "carbon-components-svelte";
  // import { ExpandableTile } from "carbon-components-svelte";
  // let theme: CarbonTheme = 'g100';
</script>

<main>
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
	<h1>Welcome to Yum Meh Yuck {name}!</h1>
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