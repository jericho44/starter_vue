<script setup lang="ts">
import { useDark } from '@vueuse/core'

// Initialize dark mode based on user preference or local storage
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})
</script>

<template>
  <router-view />
</template>
