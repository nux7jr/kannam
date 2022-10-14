<template>
  <div>
    <div class="chack__heading">
      <h2>Мои проверки</h2>
      <button class="gobackBtn" @click="goBack()">X</button>
    </div>
    <div class="adress__accessible">
      <p class="adress__accessible-text">Доступных проверок: 1</p>
      <router-link to="/examination-info">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KannamprototypeMyHecks',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    goBack() {
        this.$router.go(-1)
      }
  },
};
</script>

<style scoped>
h2 {
  margin: 15px;
}
.gobackBtn {
  height: 40px;
  width: 40px;
  background-color: rgb(255, 252, 252);
  border: none;
  align-self: center;
  margin-right: 10px;
}
.chack__heading {
  display: flex;
  justify-content: space-between;
}
</style>