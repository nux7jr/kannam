<template>
  <div id="app">
    <div v-show="!admin">
      <KannamNavMenu />
    </div>
    <router-view/>
  </div>
</template>
<script>
import KannamNavMenu from "@/components/NavMenu.vue"
export default {
  name: 'KannamApp',
  components: {
    KannamNavMenu,
  },
  data() {
    return {
      admin: false
    };
  },

  mounted() {
    
  },

  methods: {
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #636363;
}
p {
  margin: 15px;
}
h3 {
  margin: 15px;
}
body {
  background-color: #dbd7d7;
  margin: 0;
  padding: 0;
}
</style>
