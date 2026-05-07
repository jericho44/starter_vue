<template>
  <div class="min-h-screen grid lg:grid-cols-2">
    <!-- Left Split -->
    <div class="hidden lg:flex flex-col justify-between bg-zinc-900 p-12 text-white">
      <div class="flex items-center gap-2 text-lg font-medium">
        <div class="h-8 w-8 rounded-md bg-white text-black flex items-center justify-center font-bold">A</div>
        Boilerplate Project
      </div>
      
      <div class="space-y-4">
        <blockquote class="space-y-2">
          <p class="text-lg">
            "This boilerplate has saved us countless hours of setup. The structure is perfect and the code is clean."
          </p>
          <footer class="text-sm">Sofia Davis, CTO at Acme Inc</footer>
        </blockquote>
      </div>
    </div>
    
    <!-- Right Split / Content -->
    <div class="flex items-center justify-center p-8 bg-background">
      <div class="w-full max-w-sm space-y-6">
        <router-view />
      </div>
    </div>
  </div>
</template>
