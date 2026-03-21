/**
 * A Svelte action that triggers an 'intersect' event when the node enters the viewport.
 */
export function inview(node: HTMLElement, options: { threshold?: number, once?: boolean, onEnter?: () => void } = { threshold: 0.1, once: true }) {
	let observer: IntersectionObserver;

	function setup() {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (options.onEnter) options.onEnter();
						if (options.once) {
							observer.unobserve(node);
						}
					}
				});
			},
			{ threshold: options.threshold || 0.1 }
		);

		observer.observe(node);
	}

	setup();

	return {
		update(newOptions: typeof options) {
			options = newOptions;
			observer.disconnect();
			setup();
		},
		destroy() {
			observer.disconnect();
		}
	};
}
