const isSelf = <Data>({ origin }: MessageEvent<Data>) =>
	origin === window.location.origin

export default isSelf
