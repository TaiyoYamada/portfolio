import { spring } from 'svelte/motion';

/**
 * A Svelte action that makes an element draggable with spring physics returning to its origin.
 */
export function draggable(node: HTMLElement) {
	let x = 0;
	let y = 0;
	let isDragging = false;

	const coords = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.25 });

	const unsub = coords.subscribe(($coords) => {
		node.style.transform = `translate3d(${$coords.x}px, ${$coords.y}px, 0)`;
	});

	// --- Mouse Events ---
	function handleMousedown(event: MouseEvent) {
		x = event.clientX;
		y = event.clientY;
		isDragging = true;

		document.body.style.cursor = 'grabbing';

		window.addEventListener('mousemove', handleMousemove);
		window.addEventListener('mouseup', handleMouseup);
	}

	function handleMousemove(event: MouseEvent) {
		if (!isDragging) return;
		const dx = event.clientX - x;
		const dy = event.clientY - y;
		coords.set({ x: dx, y: dy });
	}

	function handleMouseup() {
		isDragging = false;
		coords.set({ x: 0, y: 0 }); // snap back to original position
		document.body.style.cursor = 'default';

		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
	}

	// --- Touch Events ---
	function handleTouchstart(event: TouchEvent) {
		x = event.touches[0].clientX;
		y = event.touches[0].clientY;
		isDragging = true;

		window.addEventListener('touchmove', handleTouchmove, { passive: false });
		window.addEventListener('touchend', handleTouchend);
	}

	function handleTouchmove(event: TouchEvent) {
		if (!isDragging) return;
		event.preventDefault(); // Prevent scrolling while dragging

		const dx = event.touches[0].clientX - x;
		const dy = event.touches[0].clientY - y;
		coords.set({ x: dx, y: dy });
	}

	function handleTouchend() {
		isDragging = false;
		coords.set({ x: 0, y: 0 }); // snap back

		window.removeEventListener('touchmove', handleTouchmove);
		window.removeEventListener('touchend', handleTouchend);
	}

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('touchstart', handleTouchstart, { passive: true });

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('touchstart', handleTouchstart);
			window.removeEventListener('mousemove', handleMousemove);
			window.removeEventListener('mouseup', handleMouseup);
			window.removeEventListener('touchmove', handleTouchmove);
			window.removeEventListener('touchend', handleTouchend);
			unsub();
		}
	};
}
