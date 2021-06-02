import { readable } from 'svelte/store'

import type Apps from '.'

const apps = readable<Apps | null>(null, set => {
	console.log('apps')
})

export default apps
