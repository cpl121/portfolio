<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	onMount(() => {
		let disposed = false;
		let cleanup = () => {};

		// Three.js is loaded only in the browser and code-split out of the initial
		// bundle, so it never runs during prerender and doesn't block first paint.
		(async () => {
			const THREE = await import('three');
			if (disposed || !container) return;

			const width = container.clientWidth;
			const height = container.clientHeight;
			if (width === 0 || height === 0) return;

			let renderer: import('three').WebGLRenderer;
			try {
				renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			} catch {
				return; // No WebGL available — the hero still works without the canvas.
			}
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setSize(width, height);
			// The container is an empty leaf Svelte doesn't render children into,
			// so appending the WebGL canvas here is safe.
			// eslint-disable-next-line svelte/no-dom-manipulating
			container.appendChild(renderer.domElement);

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
			camera.position.z = 4.2;

			const teal = new THREE.Color('#2dd4bf');
			const emerald = new THREE.Color('#34d399');

			const group = new THREE.Group();
			scene.add(group);

			// Wireframe icosahedron — the "world" at the center.
			const geometry = new THREE.IcosahedronGeometry(1.15, 1);
			const material = new THREE.MeshBasicMaterial({
				color: teal,
				wireframe: true,
				transparent: true,
				opacity: 0.85
			});
			const mesh = new THREE.Mesh(geometry, material);
			group.add(mesh);

			// Orbiting particle field around it.
			const particleCount = 500;
			const positions = new Float32Array(particleCount * 3);
			for (let i = 0; i < particleCount; i++) {
				const r = 2.2 + Math.random() * 1.6;
				const theta = Math.random() * Math.PI * 2;
				const phi = Math.acos(2 * Math.random() - 1);
				positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
				positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
				positions[i * 3 + 2] = r * Math.cos(phi);
			}
			const pGeometry = new THREE.BufferGeometry();
			pGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
			const pMaterial = new THREE.PointsMaterial({
				color: emerald,
				size: 0.03,
				transparent: true,
				opacity: 0.6,
				sizeAttenuation: true
			});
			const points = new THREE.Points(pGeometry, pMaterial);
			group.add(points);

			// Pointer parallax — the whole group leans toward the cursor.
			let targetX = 0;
			let targetY = 0;
			const onPointerMove = (event: PointerEvent) => {
				const rect = container.getBoundingClientRect();
				targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.8;
				targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.8;
			};

			const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			let raf = 0;

			const resizeObserver = new ResizeObserver(() => {
				const w = container.clientWidth;
				const h = container.clientHeight;
				if (w === 0 || h === 0) return;
				camera.aspect = w / h;
				camera.updateProjectionMatrix();
				renderer.setSize(w, h);
				// With reduced motion there is no animation loop repainting the
				// canvas, so a resize would otherwise leave it blank.
				if (prefersReducedMotion) renderFrame();
			});
			resizeObserver.observe(container);

			const renderFrame = () => {
				mesh.rotation.x += 0.002;
				mesh.rotation.y += 0.003;
				points.rotation.y -= 0.0009;
				group.rotation.y += (targetX - group.rotation.y) * 0.05;
				group.rotation.x += (-targetY - group.rotation.x) * 0.05;
				renderer.render(scene, camera);
			};

			const animate = () => {
				renderFrame();
				raf = requestAnimationFrame(animate);
			};

			if (prefersReducedMotion) {
				renderFrame();
			} else {
				window.addEventListener('pointermove', onPointerMove);
				animate();
			}

			cleanup = () => {
				cancelAnimationFrame(raf);
				window.removeEventListener('pointermove', onPointerMove);
				resizeObserver.disconnect();
				geometry.dispose();
				material.dispose();
				pGeometry.dispose();
				pMaterial.dispose();
				renderer.dispose();
				renderer.domElement.remove();
			};
		})();

		return () => {
			disposed = true;
			cleanup();
		};
	});
</script>

<div bind:this={container} class="scene" aria-hidden="true"></div>

<style>
	.scene {
		@apply w-full h-full;
	}

	.scene :global(canvas) {
		@apply block w-full h-full;
	}
</style>
