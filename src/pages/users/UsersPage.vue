<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
// import api from '@/services/api'
import Card from '@/components/ui/Card.vue'

// Mock fetching data to demonstrate TanStack Query without a real backend
import { ref } from 'vue'
import { ArrowUpDown, MoreHorizontal, Plus, Search } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'

type User = {
  id: string
  name: string
  email: string
  role: "Admin" | "User" | "Editor"
  status: "Active" | "Inactive"
  lastLogin: string
}

const users = ref<User[]>([
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", lastLogin: "2024-03-20" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", lastLogin: "2024-03-21" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Inactive", lastLogin: "2024-03-15" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active", lastLogin: "2024-03-22" },
  { id: "5", name: "Charlie Davis", email: "charlie@example.com", role: "User", status: "Inactive", lastLogin: "2024-03-10" },
  { id: "6", name: "Diana Prince", email: "diana@example.com", role: "Admin", status: "Active", lastLogin: "2024-03-23" },
  { id: "7", name: "Ethan Hunt", email: "ethan@example.com", role: "Editor", status: "Active", lastLogin: "2024-03-24" },
])

const globalFilter = ref('')
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">Users</h1>
        <p class="text-muted-foreground text-sm">Manage your team members and their roles.</p>
      </div>
      <Button>
        <Plus class="mr-2 h-4 w-4" /> Add User
      </Button>
    </div>

    <div class="flex items-center justify-between gap-4">
      <div class="relative max-w-sm flex-1">
        <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          class="pl-9"
          v-model="globalFilter"
        />
      </div>
    </div>

    <div class="rounded-md border">
      <table class="w-full caption-bottom text-sm">
        <thead class="[&_tr]:border-b">
          <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              <Button variant="ghost" class="-ml-4 h-8 data-[state=open]:bg-accent">
                Name <ArrowUpDown class="ml-2 h-4 w-4" />
              </Button>
            </th>
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Email</th>
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Role</th>
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Last Login</th>
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[50px]"></th>
          </tr>
        </thead>
        <tbody class="[&_tr:last-child]:border-0">
          <tr v-for="user in users" :key="user.id" class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td class="p-4 align-middle font-medium">{{ user.name }}</td>
            <td class="p-4 align-middle">{{ user.email }}</td>
            <td class="p-4 align-middle">
              <span class="px-2 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                {{ user.role }}
              </span>
            </td>
            <td class="p-4 align-middle">
              <span :class="[
                'px-2 py-1 rounded-full text-xs font-semibold',
                user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              ]">
                {{ user.status }}
              </span>
            </td>
            <td class="p-4 align-middle">{{ user.lastLogin }}</td>
            <td class="p-4 align-middle">
              <Button variant="ghost" size="icon">
                <MoreHorizontal class="h-4 w-4" />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex items-center justify-end space-x-2 py-4">
      <Button variant="outline" size="sm" disabled>Previous</Button>
      <Button variant="outline" size="sm" disabled>Next</Button>
    </div>
  </div>
</template>
