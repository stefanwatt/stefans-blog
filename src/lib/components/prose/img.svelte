<script lang="ts">
  import { validate } from '$lib/utils/src'
  let className = undefined
  export { className as class }
  export let src: string
  export let alt: string
  src = validate(src)
</script>
<svelte:head>
   <script src="https://scripts.sirv.com/sirv.nospin.js"></script>
</svelte:head>
<div class="p-4">
  <img data-src={src} {alt} class:Sirv={true} class={className ?? 'rounded-lg my-2'} loading="lazy" decoding="async" />
</div>
