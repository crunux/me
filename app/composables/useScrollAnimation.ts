import { onMounted, onUnmounted } from 'vue'

export const useScrollAnimation = () => {
  let observer: IntersectionObserver | null = null

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const animatedElements = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-children'
    )
    animatedElements.forEach((el) => observer!.observe(el))
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { initObserver }
}