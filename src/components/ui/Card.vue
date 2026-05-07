<script setup lang="ts">
import { computed } from 'vue'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const props = defineProps<{ class?: string }>()

const computedClass = computed(() => cn('rounded-lg border bg-card text-card-foreground shadow-sm', props.class))
</script>

<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>
