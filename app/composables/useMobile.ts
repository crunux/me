const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const isMobile = ref(false)

  onMounted(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
    }
    mql.addEventListener('change', onChange)
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
    return () => mql.removeEventListener('change', onChange)
  })

  return isMobile
}