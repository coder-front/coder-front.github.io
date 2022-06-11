<script>

	import { Router, Route, Link } from 'svelte-navigator';

	import Home from './views/Home.svelte';
	import MainLayout from './views/MainLayout.svelte';

</script>


<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="main-layout">Main Layout</Link>
	</nav>
	<div>
		<Route path="/" component={Home} />
		<Route path="/main-layout" component={MainLayout} />
	</div>
</Router>
