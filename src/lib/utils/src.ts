import { site } from '$lib/config/site'
import { prefix } from '$lib/config/img'
/**
 * Image Src Validator
 * @param src - image src.
 * @param options - options.
 * @param options.absolute - set mandatory use of absolute links.
 * @returns - validated src.
 */
export const validate = (src: string, options?: { absolute?: boolean }): string => {
  if (src.includes('://')) return src
  if (!src.startsWith('/')) src = `/${src}`
  return src
}
