import type Message from '.'

const getValue = <Data>({ data }: MessageEvent<Data>, key: string) =>
	typeof data === 'object' && data && (data as unknown as Message).key === key
		? (data as unknown as Message).value
		: undefined

export default getValue
