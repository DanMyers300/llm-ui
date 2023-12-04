import { useLocalStorage } from '@vueuse/core'
import gravatarUrl from 'gravatar-url'
import { computed } from 'vue'

export const gravatarEmail = useLocalStorage('gravatarEmail', 'contact@danmyers.net')
export const avatarUrl = computed(() => gravatarUrl(gravatarEmail.value, { size: 200 }))
export const debugMode = useLocalStorage('debug', false)
export const baseUrl = useLocalStorage('baseUrl', 'https://dce02dedf2e934a45865bb473662f41d4.clg07azjl.paperspacegradient.com/')
export const isDarkMode = useLocalStorage('darkMode', true)
export const isSettingsOpen = useLocalStorage('settingsPanelOpen', true)
export const toggleSettingsPanel = () => (isSettingsOpen.value = !isSettingsOpen.value)