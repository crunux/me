export const useTypingEffect = (options: {
  text: string | string[]
  speed?: number
  delay?: number
  loop?: boolean
  cursor?: boolean
}) => {
  const {
    text,
    speed = 50,
    delay = 1000,
    loop = false,
    cursor = true,
  } = options

  const displayedText = ref('')
  const isTyping = ref(false)
  const currentIndex = ref(0)
  
  const texts = Array.isArray(text) ? text : [text]
  
  const typeText = async () => {
    isTyping.value = true
    const currentText = texts[currentIndex.value]
    
    // Escribir
    for (let i = 0; i <= currentText.length; i++) {
      displayedText.value = currentText.substring(0, i)
      await new Promise(resolve => setTimeout(resolve, speed))
    }
    
    isTyping.value = false
    
    if (loop) {
      await new Promise(resolve => setTimeout(resolve, delay))
      
      // Borrar
      for (let i = currentText.length; i >= 0; i--) {
        displayedText.value = currentText.substring(0, i)
        await new Promise(resolve => setTimeout(resolve, speed / 2))
      }
      
      currentIndex.value = (currentIndex.value + 1) % texts.length
      typeText()
    }
  }
  
  onMounted(() => {
    typeText()
  })
  
  return {
    displayedText,
    isTyping,
    cursor,
  }
}