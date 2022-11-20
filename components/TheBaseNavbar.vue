<script setup>
import menu from "./Menu"
</script>

<template>
  <div id="navbar-container" class="mx-auto max-w-screen-2xl">
    <header class="flex justify-between px-10 py-5">
      <div>logo</div>
      <nav class="flex gap-9">
        <ul v-for="menus in menu.root" :key="menus">
          <li>
            <NuxtLink :href="menus.link">{{ menus.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
