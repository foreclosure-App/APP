import { useScrollPosition as originalUseScrollPosition } from '@n8tb1t/use-scroll-position';



export function useScrollPosition(
  props,
  deps,
  element,
  useWindow,
  wait,
  boundingElement,
) {
  return originalUseScrollPosition(deps, element, useWindow, wait, boundingElement);
}
