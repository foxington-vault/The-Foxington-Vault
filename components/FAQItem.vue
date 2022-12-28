<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

const expanded = ref(false)
const ansRef = ref<HTMLDivElement | null>(null)
</script>

<template>
  <div class="faq-item" :data-expanded="expanded">
    <div class="heading" role="tab" @click="expanded = !expanded">
      <h2>{{ props.title }}</h2>
      <i class="fas fa-chevron-down fa-xs fa-fw"></i>
    </div>
    <div
      ref="ansRef"
      class="faq-contents"
      :aria-expanded="expanded"
      :style="{ height: !expanded ? 0 : ansRef?.scrollHeight + 'px' }"
    >
      <article class="flex flex-col gap-2.5">
        <slot />
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.faq-item {
  @apply overflow-hidden mx-auto w-full border border-orange-400 xl:w-9/12  rounded-md transition-[margin] duration-300;

  &[data-expanded="true"] {
    &:first-child {
      @apply mb-2.5;
    }

		&:not(:first-child, :last-child) {
			@apply my-2.5;
		}

		&:last-child {
			@apply mt-2.5;
		}
  }
}

.heading {
  @apply flex px-6 justify-between items-center w-full pt-4 pb-0 font-lucky-body text-3xl select-none cursor-pointer;
	
	h2 {
		@apply translate-y-0.5;
	}
}

.faq-contents {
  @apply relative z-[10] px-6 pb-4 transition-all duration-300 my-3.5;

  &[aria-expanded="false"] {
    @apply my-0 opacity-0 pointer-events-none;
  }
}
</style>
