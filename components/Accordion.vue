<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h2>
      {{ title }}
    </h2>
    <div>
      <slot />
    </div>
  </div>
</template>
