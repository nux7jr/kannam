<template>
  <div class="profile">
    <h2>Profile</h2>
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
</style>