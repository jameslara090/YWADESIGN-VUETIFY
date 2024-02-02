<template>
  <v-app>
    <TopNav/>
    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import TopNav from './components/Navigation.vue'
export default {
  name: 'HomeVue',
  components: {
    TopNav, 
  }
}
</script>

