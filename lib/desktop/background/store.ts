import { readable } from 'svelte/store'
import { browser } from '$app/env'

import { get as fromStorage, set as toStorage } from '../../storage'
import isSelf from '../../message/self'
import getValue from '../../message/value'

const KEY = 'desktop.background'

const background = readable<string | null | undefined>(undefined, set => {
	if (!browser) return

	const value = fromStorage(KEY)
	set(typeof value === 'string' ? value : null)

	const onMessage = (event: MessageEvent<unknown>) => {
		if (!isSelf(event)) return

		const value = getValue(event, KEY)
		if (!(typeof value === 'string' || value === null)) return

		set(value)
		toStorage(KEY, value)
	}

	window.addEventListener('message', onMessage)

	return () => {
		window.removeEventListener('message', onMessage)
	}
})

export default background
