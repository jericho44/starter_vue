<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center text-center p-4">
    <h1 class="text-6xl font-bold tracking-tight text-primary">404</h1>
    <h2 class="mt-4 text-2xl font-semibold">Page Not Found</h2>
    <p class="mt-2 text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
    <Button class="mt-6" @click="$router.push('/')">Go Home</Button>
  </div>
</template>
