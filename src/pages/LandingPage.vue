<script setup lang="ts">
import { ArrowRight, CheckCircle2, Rocket, Shield, Zap } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const features = [
  {
    title: 'Fast Performance',
    description: 'Optimized with Vite and modern Vue 3 patterns for lightning-fast load times.',
    icon: Zap,
  },
  {
    title: 'Secure by Default',
    description: 'JWT authentication, route guards, and XSS prevention built-in.',
    icon: Shield,
  },
  {
    title: 'Scalable Architecture',
    description: 'Feature-based structure that grows with your team and complexity.',
    icon: Rocket,
  },
  {
    title: 'Ready to Deploy',
    description: 'Dockerized and CI/CD ready with GitHub Actions.',
    icon: CheckCircle2,
  },
]
</script>

<template>
  <div class="flex flex-col">
    <!-- Hero Section -->
    <section class="py-20 px-6 bg-gradient-to-b from-background to-accent/20">
      <div class="container max-w-5xl mx-auto text-center space-y-8">
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
          The Ultimate Vue Boilerplate for <span class="text-primary">Production</span>
        </h1>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Build scalable, high-performance web applications faster with our pre-configured stack: 
          Vue 3, TypeScript, Tailwind, Pinia, and Vue Query.
        </p>
        <div class="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" as="router-link" to="/auth/register" class="inline-flex items-center">
            Get Started <ArrowRight class="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" as="a" href="https://github.com" target="_blank" rel="noreferrer" class="inline-flex items-center">
            View on GitHub
          </Button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-3xl font-bold">Everything you need</h2>
          <p class="text-muted-foreground max-w-xl mx-auto">
            We've included all the tools and best practices required to ship production-ready apps today.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="p-6 border rounded-xl bg-card hover:shadow-md transition-shadow">
            <div class="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <component :is="feature.icon" :size="24" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 bg-primary text-primary-foreground">
      <div class="container mx-auto text-center space-y-6">
        <h2 class="text-3xl font-bold">Ready to start building?</h2>
        <p class="text-primary-foreground/80 max-w-xl mx-auto">
          Join thousands of developers using our boilerplate to launch their projects in record time.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <router-link to="/auth/register">Start for Free</router-link>
        </Button>
      </div>
    </section>
  </div>
</template>
