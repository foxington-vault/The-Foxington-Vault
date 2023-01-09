<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

const expanded = ref(false)
const ansRef = ref<HTMLDivElement | null>(null)
</script>

<template>
  <div class="faq-item" :data-expanded="expanded">
    <div class="faq-heading" role="tab" @click="expanded = !expanded">
      <div class="fa-icon">
        <i class="fas fa-chevron-down" />
      </div>
      <h2>{{ props.title }}</h2>
    </div>
    <div
      ref="ansRef"
      class="faq-contents"
      :style="{ height: !expanded ? 0 : ansRef?.scrollHeight + 'px' }"
    >
      <article class="flex flex-col gap-2.5">
        <slot />
      </article>
    </div>
  </div>
</template>

<style lang="scss">
.faq-item {
  @apply overflow-hidden mx-auto w-full border border-orange-400 xl:w-9/12 rounded-md transition-[margin] duration-300;

  &[data-expanded="true"] {
    &:first-child {
      @apply mb-1;
    }

    &:not(:first-child, :last-child) {
      @apply my-1;
    }

    &:last-child {
      @apply mt-1;
    }

    .fa-icon {
      @apply rotate-0;
    }
  }
}

.faq-heading {
  @apply flex px-6 gap-x-3.5 items-center w-full pt-4 pb-0 font-lucky-body text-3xl select-none cursor-pointer;

  h2 {
    @apply translate-y-0.5;
  }

  .fa-icon {
    @apply text-xl transition-transform duration-300 -rotate-90;
  }
}

.faq-contents {
  @apply relative z-[10] px-6 pb-4 transition-all duration-300 my-3.5;
}

[data-expanded="false"] .faq-contents {
  @apply my-0 opacity-0 pointer-events-none;
}
</style>
