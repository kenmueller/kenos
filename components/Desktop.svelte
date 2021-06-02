<script lang="ts">
	import background from '../lib/desktop/background/store'
</script>

<section
	{...$$restProps}
	style="background: {$background
		? `url(${JSON.stringify($background)})`
		: 'none'};"
/>
