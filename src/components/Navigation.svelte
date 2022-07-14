<script>

	import { page } from '../stores/page'

	import MainLayout from '../views/MainLayout.svelte'
	import Home from '../views/Home.svelte'

</script>

<nav>
	<a href="/#" class:active={$page === Home}>Home</a> &nbsp; &nbsp;
	<a href="/#main-layout" class:active={$page === MainLayout}>Main Layout</a> &nbsp; &nbsp;
</nav>

<style>
	nav a.active {
		color: red;
	}
</style>