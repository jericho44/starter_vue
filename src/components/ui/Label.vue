<script setup lang="ts">
import { computed } from 'vue'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const props = defineProps<{
  class?: string
}>()

const computedClass = computed(() => {
  return cn(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    props.class
  )
})
</script>

<template>
  <label :class="computedClass">
    <slot />
  </label>
</template>
