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

const registerSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Must be a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
)

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: registerSchema,
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword')

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    authStore.setToken('mock-jwt-token-123')
    authStore.setUser({ email: values.email, name: values.name })
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
      <h1 class="text-3xl font-bold">Create an account</h1>
      <p class="text-muted-foreground">Enter your information to get started</p>
    </div>

    <form @submit.prevent="onSubmit" class="space-y-4">
      <div class="space-y-2">
        <Label class="text-sm font-medium" for="name">Name</Label>
        <Input id="name" type="text" placeholder="John Doe" v-model="name" v-bind="nameAttrs" :disabled="isSubmitting" />
        <span v-if="errors.name" class="text-sm text-destructive font-medium">{{ errors.name }}</span>
      </div>

      <div class="space-y-2">
        <Label class="text-sm font-medium" for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" v-model="email" v-bind="emailAttrs" :disabled="isSubmitting" />
        <span v-if="errors.email" class="text-sm text-destructive font-medium">{{ errors.email }}</span>
      </div>

      <div class="space-y-2">
        <Label class="text-sm font-medium" for="password">Password</Label>
        <Input id="password" type="password" v-model="password" v-bind="passwordAttrs" :disabled="isSubmitting" />
        <span v-if="errors.password" class="text-sm text-destructive font-medium">{{ errors.password }}</span>
      </div>

      <div class="space-y-2">
        <Label class="text-sm font-medium" for="confirmPassword">Confirm Password</Label>
        <Input id="confirmPassword" type="password" v-model="confirmPassword" v-bind="confirmPasswordAttrs" :disabled="isSubmitting" />
        <span v-if="errors.confirmPassword" class="text-sm text-destructive font-medium">{{ errors.confirmPassword }}</span>
      </div>

      <Button class="w-full" type="submit" :disabled="isSubmitting">
        <span v-if="isSubmitting">Creating account...</span>
        <span v-else>Register</span>
      </Button>
    </form>
    
    <div class="mt-4 text-center text-sm text-muted-foreground">
      Already have an account?
      <router-link to="/auth/login" class="text-primary hover:underline font-medium">Login</router-link>
    </div>
  </div>
</template>
