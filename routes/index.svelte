<script lang="ts">
	import Desktop from '../components/Desktop.svelte'
</script>

<svelte:head>
	<title>kenOS</title>
</svelte:head>

<main>
	<Desktop class="desktop" />
</main>

<style lang="scss">
	main {
		position: relative;
		height: 100%;
	}

	main > :global(.desktop) {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
