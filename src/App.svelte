<script lang="ts">
	export let name: string;
	import RestaurantList from './RestaurantList.svelte'
	import { writable } from 'svelte/store'
  import {
    Header,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
		Theme,
  } from "carbon-components-svelte";
  let isSideNavOpen = false;

	$: restaurants = [];
	const restaurantStore = writable(restaurants)
	
	restaurantStore.subscribe((restaurantList) => {
		restaurants = restaurantList;
	});

	const addRestaurant = (restaurant) => {
		restaurantStore.update(() => [...restaurants, restaurant]);
	};

	const restaurantsBaseList = [{name: 'Street 360'}, {name: 'Franklin Oyster House'}];
	
	const id = setInterval(() => {
		if (restaurantsBaseList.length === 0) {
			clearInterval(id);
			console.log('cleared interval');
		}
		const restaurant = restaurantsBaseList.pop();
		console.log('adding restaurant', restaurant);
		if (restaurant) {
			addRestaurant(restaurant);
		}
	}, 1000);
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

	<Header company="aoalex.dev" platformName="&#128523; &#128528; &#128533;" bind:isSideNavOpen>
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
					<h1>Welcome to &#128523; &#128528; &#128533; {name}!</h1>
					<p>
						Here's a list of all your restaurants!
					</p>
				</Column>
			</Row>
			<Row>
				<Column>
					<RestaurantList restaurants={restaurants}/>
				</Column>
			</Row>
		</Grid>
	</Content>
</main>