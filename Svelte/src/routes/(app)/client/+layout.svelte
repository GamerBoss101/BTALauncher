<script>
	import "$lib/css/client.css";
	import NavBar from "$lib/components/client/NavBar.svelte";
</script>


<main>
	<NavBar />
	<slot></slot>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
</style>