<script lang="ts">
	import defaultBackground from '../lib/desktop/background/default'
	import background from '../lib/desktop/background/store'
</script>

<section
	{...$$restProps}
	style="background-image: {$background === undefined
		? 'none'
		: `url(${$background ?? defaultBackground})`};"
/>

<style lang="scss">
	section {
		background-size: cover;
		background-position: center;
	}
</style>
