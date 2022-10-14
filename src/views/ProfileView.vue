<template>
  <div class="profile">
    <div class="porf__wrapper">
      <h2>Profile</h2>
      <button class="gobackBtn" @click="goBack()">X</button>
    </div>

    <div class="profile__form">
      <small>Фимилия и Имя</small>
      <input class="input_form" type="text">
    </div>
    <div class="profile__form">
      <small>Город</small>
      <input class="input_form" type="text">
    </div>
    <div class="profile__form">
      <small>Телефон</small>
      <input class="input_form" type="text">
    </div>
    <div>
      <button class="saveBtn">Сохранить</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KannamProfileView',

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
<style>
h2 {
  margin: 15px;
}
.profile__form {
  display: flex;
  flex-direction: column;
  padding: 18px;
}
.input_form {
  padding: 5px;
  border-radius: 5px;
  border-color: transparent;
}
.saveBtn {
  border-color: transparent;
  margin: 15px;
  margin-bottom: 60px;
  border-radius: 5px;
}
.gobackBtn {
  height: 40px;
  width: 40px;
  background-color: rgb(255, 252, 252);
  border: none;
  align-self: center;
  margin-right: 10px;
}
.porf__wrapper {
  display: flex;
  justify-content: space-between;
}
</style>