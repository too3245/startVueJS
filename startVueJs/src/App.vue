<template>
  <div>
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header.vue'


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>

</style>
