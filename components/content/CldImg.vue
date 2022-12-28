<script lang="ts" setup>
const BASE_URL = "https://res.cloudinary.com/"
const cloudName = "skepfusky-dookie"

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

const urlParse = [...BASE, ...widthModifier, ...dirModifier, props.fileName]
</script>

<template>
  <img class="h-full" :src="urlParse.join('')" />
</template>
