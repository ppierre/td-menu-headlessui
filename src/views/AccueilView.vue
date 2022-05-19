<template>
  <main>
    <h1 class="text-2xl">Accueil pages de test de menus</h1>
    <nav>
      <h4><MenuIcon class="inline-block h-4 w-4" /><span>Menu</span></h4>
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/menu-minimalist">Menu minimalist</router-link>
        </li>
        <li>
          <router-link to="/menu-minimalist-transition">Menu minimalist avec transition</router-link>
        </li>
        <li>
          <router-link to="/menu-minimalist-animation">Menu minimalist avec animation</router-link>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/outline";
export default {
  components: { MenuIcon },
};
</script>