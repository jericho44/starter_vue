<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sun, Menu, X } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const authStore = useAuthStore()
const router = useRouter()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isMenuOpen = ref(false)

const handleLogout = () => {
  authStore.logout()
  router.push('/auth/login')
  isMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-16 items-center justify-between">
        <div class="flex items-center gap-2">
          <router-link to="/" class="flex items-center space-x-2">
            <span class="inline-block font-bold text-xl px-4 lg:px-0">Boilerplate</span>
          </router-link>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
          <router-link to="/" class="transition-colors hover:text-primary">Home</router-link>
          <router-link to="/" class="transition-colors hover:text-primary">Features</router-link>
          <router-link to="/" class="transition-colors hover:text-primary">Pricing</router-link>
        </nav>

        <div class="flex items-center gap-4 pr-4 lg:pr-0">
          <button
            @click="toggleDark()"
            class="p-2 rounded-md hover:bg-accent transition-colors"
          >
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
          </button>

          <template v-if="authStore.isAuthenticated">
            <div class="hidden md:flex items-center gap-4">
              <router-link to="/dashboard" class="text-sm font-medium hover:text-primary">Dashboard</router-link>
              <button 
                @click="handleLogout"
                class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Logout
              </button>
            </div>
          </template>
          <template v-else>
            <div class="hidden md:flex items-center gap-4">
              <router-link to="/auth/login" class="text-sm font-medium hover:text-primary">Login</router-link>
              <router-link 
                to="/auth/register" 
                class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Sign Up
              </router-link>
            </div>
          </template>

          <button 
            class="md:hidden p-2"
            @click="isMenuOpen = !isMenuOpen"
          >
            <X v-if="isMenuOpen" :size="24" />
            <Menu v-else :size="24" />
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden border-b bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
      <router-link to="/" @click="isMenuOpen = false">Home</router-link>
      <router-link to="/" @click="isMenuOpen = false">Features</router-link>
      <router-link to="/" @click="isMenuOpen = false">Pricing</router-link>
      <hr />
      <template v-if="!authStore.isAuthenticated">
        <router-link to="/auth/login" @click="isMenuOpen = false">Login</router-link>
        <router-link to="/auth/register" @click="isMenuOpen = false">Sign Up</router-link>
      </template>
      <template v-else>
        <router-link to="/dashboard" @click="isMenuOpen = false">Dashboard</router-link>
        <button @click="handleLogout" class="text-left w-full">Logout</button>
      </template>
    </div>

    <main class="flex-1">
      <router-view />
    </main>

    <footer class="border-t py-6 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p class="text-center text-sm leading-loose text-muted-foreground md:text-left px-4 lg:px-0">
          Built as a Boilerplate. The source code is available on GitHub.
        </p>
      </div>
    </footer>
  </div>
</template>
