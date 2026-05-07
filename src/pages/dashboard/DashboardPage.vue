<script setup lang="ts">
import { Users, DollarSign, CreditCard, Activity } from 'lucide-vue-next'

// Statistics Data
const stats = [
  { title: "Total Revenue", value: "$45,231.89", icon: DollarSign, description: "+20.1% from last month" },
  { title: "Subscriptions", value: "+2,350", icon: Users, description: "+180.1% from last month" },
  { title: "Sales", value: "+12,234", icon: CreditCard, description: "+19% from last month" },
  { title: "Active Now", value: "+573", icon: Activity, description: "+201 since last hour" },
]

// ApexCharts Configuration to mirror Recharts AreaChart
const chartOptions = {
  chart: {
    type: 'area',
    toolbar: { show: false },
    fontFamily: 'inherit',
    zoom: { enabled: false }
  },
  colors: ['hsl(var(--primary))'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.3,
      opacityTo: 0.0,
      stops: [5, 95]
    }
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: { colors: 'hsl(var(--muted-foreground))', fontSize: '12px' }
    }
  },
  yaxis: {
    labels: {
      formatter: (value: number) => `$${value}`,
      style: { colors: 'hsl(var(--muted-foreground))', fontSize: '12px' }
    }
  },
  grid: {
    borderColor: 'hsl(var(--muted))',
    strokeDashArray: 3,
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } }
  },
  tooltip: {
    theme: 'dark' // Use dark theme for tooltip to match React version roughly
  }
}

const chartSeries = [{
  name: 'Total',
  data: [1200, 2100, 1800, 2400, 1700, 2800, 3200]
}]
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold tracking-tight">Dashboard</h1>
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.title" class="rounded-xl border bg-card p-6 shadow-sm">
        <div class="flex items-center justify-between space-y-0 pb-2">
          <h3 class="text-sm font-medium tracking-tight">{{ stat.title }}</h3>
          <component :is="stat.icon" class="h-4 w-4 text-muted-foreground" />
        </div>
        <div class="pt-2">
          <div class="text-2xl font-bold">{{ stat.value }}</div>
          <p class="text-xs text-muted-foreground">{{ stat.description }}</p>
        </div>
      </div>
    </div>
    
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div class="col-span-4 rounded-xl border bg-card p-6 shadow-sm">
        <div class="pb-4">
          <h3 class="font-semibold text-lg">Revenue Overview</h3>
          <p class="text-sm text-muted-foreground">Monthly revenue performance for the current year.</p>
        </div>
        <div class="h-[300px]">
          <apexchart type="area" height="100%" :options="chartOptions" :series="chartSeries"></apexchart>
        </div>
      </div>

      <div class="col-span-3 rounded-xl border bg-card p-6 shadow-sm">
        <div class="pb-4">
          <h3 class="font-semibold text-lg">Recent Activities</h3>
          <p class="text-sm text-muted-foreground">You made 265 sales this month.</p>
        </div>
        <div class="space-y-8 pt-4">
          <div v-for="i in 5" :key="i" class="flex items-center gap-4">
            <div class="h-9 w-9 rounded-full bg-accent" />
            <div class="flex-1 space-y-1">
              <p class="text-sm font-medium leading-none">Olivia Martin</p>
              <p class="text-xs text-muted-foreground">olivia.martin@email.com</p>
            </div>
            <div class="ml-auto font-medium">+$1,999.00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
