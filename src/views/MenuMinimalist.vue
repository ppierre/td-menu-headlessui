<template>
  <article>
    <h1 class="text-2xl">Test de menu minimalist</h1>
    <Menu>
      <MenuButton> <MenuIcon class="inline-block h-4 w-4" /><span class="sr-only">Menu</span> </MenuButton>
      <MenuItems class="flex flex-col gap-1">
        <MenuItem v-slot="{ active }">
          <router-link to="/" :class="{ 'bg-blue-500': active }"> Accueil </router-link>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <router-link to="/menu-minimalist" :class="{ 'bg-blue-500 ring-2': active }">Menu minimalist </router-link>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <router-link to="/menu-minimalist-transition" :class="{ 'bg-blue-500 ring-2': active }"
            >Menu minimalist avec transition</router-link
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <router-link to="/menu-minimalist-animation" :class="{ 'bg-blue-500 ring-2': active }"
            >Menu minimalist avec animation</router-link
          >
        </MenuItem>
      </MenuItems>
    </Menu>
  </article>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { MenuIcon } from "@heroicons/vue/outline";
export default {
  components: { MenuIcon, Menu, MenuButton, MenuItems, MenuItem },
};
</script>