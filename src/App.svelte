<script lang="ts">
	export let name: string;
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
		Theme
  } from "carbon-components-svelte";
  let isSideNavOpen = false;
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

	<Header company="aoalex.dev" platformName="Yum Meh Yuck" bind:isSideNavOpen>
		<svelte:fragment slot="skip-to-content">
			<SkipToContent />
		</svelte:fragment>
		<!-- <HeaderNav>
			<HeaderNavItem href="/" text="Link 1" />
			<HeaderNavItem href="/" text="Link 2" />
			<HeaderNavItem href="/" text="Link 3" />
			<HeaderNavMenu text="Menu">
				<HeaderNavItem href="/" text="Link 1" />
				<HeaderNavItem href="/" text="Link 2" />
				<HeaderNavItem href="/" text="Link 3" />
			</HeaderNavMenu>
		</HeaderNav> -->
	</Header>
	
	<Content>
		<Grid>
			<Row>
				<Column>
					<h1>Welcome to Yum Meh Yuck {name}!</h1>
					<p>
						let's get you started!
					</p>
				</Column>
			</Row>
		</Grid>
	</Content>
</main>