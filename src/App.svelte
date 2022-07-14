<script>
	
	import { onMount } from 'svelte'

	import { page } from './stores/page'

	import MainLayout from './views/MainLayout.svelte'
	import Home from './views/Home.svelte'
	import NotFound from './views/NotFound.svelte'

	const routingMap = {
		'#main-layout': MainLayout
	}

	function routeChange() {
		if (location.hash === '' && location.pathname === '/') {
			page.set(Home)
		} else {
			page.set(routingMap[location.hash] || NotFound)
		}
	}

	onMount(() => {
		routeChange()
	})

</script>


<svelte:window on:hashchange={routeChange} />

<section>
	<svelte:component this={$page} />
</section>
