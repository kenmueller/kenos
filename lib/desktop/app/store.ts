import { readable } from 'svelte/store'

import type { Apps } from '.'

const apps = readable<Apps | null | undefined>(undefined, set => {
	console.log('apps')
})

export default apps
