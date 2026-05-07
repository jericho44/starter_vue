<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useAuthStore } from '@/stores/auth'

import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'

const router = useRouter()
const authStore = useAuthStore()

const isSubmitting = ref(false)

const loginSchema = toTypedSchema(
  z.object({
    email: z.string().min(1, 'Email is required').email('Must be a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  })
)

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: loginSchema,
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    authStore.setToken('mock-jwt-token-123')
    authStore.setUser({ email: values.email, name: 'Admin User' })
    router.push('/dashboard')
  } catch (error) {
    console.error(error)
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-2 text-center lg:text-left">
      <h1 class="text-3xl font-bold">Welcome Back</h1>
      <p class="text-muted-foreground">Enter your credentials to access your account</p>
    </div>

    <form @submit.prevent="onSubmit" class="space-y-4">
      <div class="space-y-2">
        <Label class="text-sm font-medium" for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" v-model="email" v-bind="emailAttrs" :disabled="isSubmitting" />
        <span v-if="errors.email" class="text-sm text-destructive font-medium">{{ errors.email }}</span>
      </div>

      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <Label class="text-sm font-medium" for="password">Password</Label>
          <router-link to="/auth/forgot-password" class="text-xs text-primary hover:underline">
            Forgot password?
          </router-link>
        </div>
        <Input id="password" type="password" v-model="password" v-bind="passwordAttrs" :disabled="isSubmitting" />
        <span v-if="errors.password" class="text-sm text-destructive font-medium">{{ errors.password }}</span>
      </div>

      <Button class="w-full" type="submit" :disabled="isSubmitting">
        <span v-if="isSubmitting">Logging in...</span>
        <span v-else>Login</span>
      </Button>
    </form>
    
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">Or continue with</span>
      </div>
    </div>

    <Button variant="outline" class="w-full" type="button" :disabled="isSubmitting">
      Github
    </Button>

    <p class="text-center text-sm text-muted-foreground">
      Don't have an account?
      <router-link to="/auth/register" class="text-primary hover:underline font-medium">
        Sign up
      </router-link>
    </p>
  </div>
</template>
