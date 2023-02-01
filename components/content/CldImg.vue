<template>
  <img class="h-full" :src="urlParse" loading="lazy" />
</template>

<script setup lang="ts">
const BASE_URL = "https://res.cloudinary.com/"
const cloudName = "kuroji-fusky-s3"

const BASE = [BASE_URL, cloudName, "/image/upload/"]

interface CldImgProps {
  directory?: string
  width?: number
  fileName?: string
}

const props = withDefaults(defineProps<CldImgProps>(), {
  width: 500,
})

const widthModifier = `c_scale,w_${props.width}`
const dirModifier = `/tfv-archive${props.directory ? props.directory : "/"}`

const urlParse = [
  ...BASE,
  ...widthModifier,
  ...dirModifier,
  props.fileName,
].join("")
</script>
