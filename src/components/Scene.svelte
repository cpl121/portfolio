<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, useDraco, useGltf, Environment } from '@threlte/extras';

	const dracoLoader = useDraco()
    const gltf = useGltf('/keyboard.glb', { dracoLoader })
</script>

  <T.PerspectiveCamera makeDefault position={[0, 3, 2.5]}>
    <OrbitControls
      autoRotate
      autoRotateSpeed={0.4}
      minAzimuthAngle={-Math.PI / 5}
      maxAzimuthAngle={Math.PI / 5}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 3}
      enableDamping
      target={[0, 0, 0]}
    />
  </T.PerspectiveCamera>
  <Environment url="/environment.hdr" />

  {#await gltf then { scene }}
    <T is={scene} scale={[0.8, 0.8, 0.8]} position={[0, 0, 0]} rotation={[0.1, 0, 0]} />
  {/await}
