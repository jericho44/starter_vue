<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter, useRoute } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { LayoutDashboard, Users, Settings, LogOut, Moon, Sun, Bell, Search } from 'lucide-vue-next'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const handleLogout = () => {
  authStore.logout()
  router.push('/auth/login')
}

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { to: "/users", icon: Users, label: "Users" },
  { to: "/settings", icon: Settings, label: "Settings" },
]
</script>

<template>
  <div class="min-h-screen flex bg-background">
    <!-- Sidebar -->
    <aside class="w-64 border-r hidden md:flex flex-col">
      <div class="p-6 border-b">
        <router-link to="/" class="flex items-center gap-2 font-bold text-xl">
          <span>Boilerplate</span>
        </router-link>
      </div>
      
      <nav class="flex-1 p-4 space-y-1">
        <router-link 
          v-for="item in navItems" 
          :key="item.to" 
          :to="item.to"
          :class="[
            'flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium',
            route.path === item.to || (route.path.startsWith(item.to) && item.to !== '/dashboard')
              ? 'bg-primary text-primary-foreground' 
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          ]"
        >
          <component :is="item.icon" :size="18" />
          {{ item.label }}
        </router-link>
      </nav>

      <div class="p-4 border-t space-y-2">
        <button
          @click="toggleDark()"
          class="flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Sun v-if="isDark" :size="18" />
          <Moon v-else :size="18" />
          {{ isDark ? "Light Mode" : "Dark Mode" }}
        </button>
        <button
          @click="handleLogout"
          class="flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut :size="18" />
          Logout
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-w-0">
      <header class="h-16 border-b flex items-center justify-between px-6 bg-card">
        <div class="flex items-center gap-4 flex-1">
          <div class="relative max-w-md w-full hidden sm:block">
            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              class="w-full bg-background border rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button class="p-2 rounded-full hover:bg-accent relative">
            <Bell :size="20" />
            <span class="absolute top-1.5 right-1.5 h-2 w-2 bg-destructive rounded-full" />
          </button>
          <div class="flex items-center gap-3">
            <div class="text-right hidden sm:block">
              <p class="text-sm font-medium">{{ authStore.user?.name || "User" }}</p>
              <p class="text-xs text-muted-foreground">{{ authStore.user?.email || "user@example.com" }}</p>
            </div>
            <div class="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold uppercase">
              {{ authStore.user?.name?.[0] || "U" }}
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 p-6 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>
