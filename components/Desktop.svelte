<script lang="ts">
	import background from '../lib/desktop/background/store'
</script>

<section
	{...$$restProps}
	style="background-image: {$background ? `url(${$background})` : 'none'};"
/>

<style lang="scss">
	section {
		background-size: cover;
		background-position: center;
	}
</style>
