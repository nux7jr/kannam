<template>
  <div id="app">
    <div v-if="!admin">
      <KannamNavMenu />
    </div>
    <div v-else>
      <NavMenuAdmin />
    </div>
    <button class="changeBtn" @click="changeAdm()"></button> 
    <router-view/>
  </div>
</template>
<script>
import KannamNavMenu from "@/components/NavMenu.vue"
import NavMenuAdmin from "@/components/NavMenuAdmin.vue"

export default {
  name: 'KannamApp',
  components: {
    KannamNavMenu,
    NavMenuAdmin,
  },
  data() {
    return {
      admin: false
    };
  },

  mounted() {
    
  },

  methods: {
    changeAdm() {
      if (this.admin) {
        this.admin = false;
      } else {
        this.admin = true;
      }
    }
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
.changeBtn {
  position: fixed;
  bottom: 46px;
  left: 8px;
  width: 4px;
  height: 15px;
  border-color: transparent;
  border-radius: 5px;
  background-color: red;
}
</style>
