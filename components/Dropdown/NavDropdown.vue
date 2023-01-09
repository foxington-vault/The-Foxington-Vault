<template>
  <div id="nav-dropdown">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface NavDropdownProps {
  readonly contents: Array<{
    heading: string
    link: { link: string; text: string } | unknown[]
  }>
  bypassDefault?: boolean
}

const props = withDefaults(defineProps<NavDropdownProps>(), {
  bypassDefault: false,
})
</script>
