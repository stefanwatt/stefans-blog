<script lang="ts">
  import { validate } from '$lib/utils/src'
  let className = undefined
  export { className as class }
  export let src: string
  export let alt: string
  src = validate(src)
</script>
<div class="p-4">
  <img {src} {alt} class={className ?? 'rounded-lg my-2'} loading="lazy" decoding="async" />
</div>
