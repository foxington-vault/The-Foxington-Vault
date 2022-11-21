<script setup>
import menu from "./Menu"
</script>

<template>
  <div id="navbar-container" class="mx-auto max-w-screen-2xl">
    <header class="flex justify-between px-10 py-5">
      <NuxtLink href="/" class="relative flex items-center gap-x-1">
        <FoxingtonVaultLogo horizontal class="w-[20rem]" />
				<span class="text-sm flex items-center font-lucky-body pt-0.5 px-1 rounded-sm text-white bg-orange-400">WIP</span>
      </NuxtLink>
      <nav class="flex gap-9">
        <ul v-for="menus in menu.root" :key="menus">
          <li class="font-lucky-body text-xl">
            <NuxtLink :href="menus.link">{{ menus.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
