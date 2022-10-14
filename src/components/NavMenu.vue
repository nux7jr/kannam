<template>
  <nav>
    <div class="nav__profile">
      <div class="nav__item">
        <router-link to="/profile"><img class="nav__img"  src="@/assets/Group 29.png" alt=""></router-link>
      </div>
      <div class="nav__item chek">
        <small>Твой счет</small>
        <router-link to="/">500р</router-link> 
      </div>
    </div>
    <div class="nav__menu">
      <div class="nav__item">
        <router-link to="/notifications"><img class="nav__img" src="@/assets/Group 28.png" alt="" srcset=""></router-link> 
      </div>
      <div class="nav__item">
        <div class="nav__btn" v-on:click="toggleMenu">
          <img class="nav__img"  src="@/assets/Group 2.png" alt="" srcset=""> 
        </div>
      </div>
      <div v-show="isMenuOpen"  class="menu">
        <div v-on:click="menuClose" class="menu_close">
          close area
        </div>
        <div class="user__menu">
          <div class="user__logo">
            <router-link to="/">LOGO</router-link>
          </div>
          <ul>
            <li>
              <router-link class="user__menu-link" to="/">Запись на проверку</router-link>
            </li>
            <li>
              <router-link class="user__menu-link" to="/">Мои проверки</router-link>
            </li>
            <li>
              <router-link class="user__menu-link" to="/">Частые вопросы</router-link>
            </li>
            <li>
              <router-link class="user__menu-link" to="/">Профиль</router-link>
            </li>
          </ul>
          <button class="exitBtn">Выход</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'KannamNavMenu',

  data() {
    return {
      isMenuOpen: false
    };
  },

  mounted() {
    
  },
  watch: {
    "$route.path"() {
      this.isMenuOpen = false;
    },
  }, 
  methods: {
    toggleMenu: function() {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = true;
      }
    },
    menuClose: function() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
p {
  margin: 15px;
}
h3 {
  margin: 15px;
}
nav {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 56px;

  background-color: rgb(255, 255, 255);
}

nav a {
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #101110;
}
.chek {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav__profile, .nav__menu {
  display: flex;
  justify-self: center;
  justify-items: center;
  justify-content: center;
}
.nav__img {
  padding: 5px;
}
.nav__btn {
  background-color: 0;
  border: 0;
  width: 57px;
  height: 57px;
}
.menu {
  position: fixed;
  bottom: 57px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 30px);
  background-color: #3130302a;
}
.menu_close {
  height: calc(100vh - 284px);
}
.user__menu {
  background-color: rgb(233, 236, 240);
  border-radius: 15px;
  margin: 15px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 16px;
}
ul {
  list-style-type: none;
  padding: 0;
  text-decoration: none;
}
li {
  margin: 15px;
}
a {
  text-decoration: none;
}
.exitBtn {
  border-radius: 5px;
  padding: 7px;
  background-color: #555555;
  margin-left: 15px;
  margin-bottom: 15px;
  color: white;
}
.user__logo {
  margin-left: 15px;
  padding-top: 15px;
}
</style>