<template>
  <div>
    <div class="qust__heading">
      <h2>Проверки</h2>
      <button class="gobackBtn" @click="goBack()">X</button>
    </div>
    <div>
      <input class="search" type="search" name="" id="" placeholder="Поиск..">
    </div>
    <div>
      <button class="addfilther" @click="this.toggle">Добавить фильтр</button>
    </div>
    <div class="filther Fmodal">
      <div>
        <div @click="removeFilter()" class="closedArea"></div>
        <div class="menuArea">
          <p class="filter__text">Добавить фильтр</p>
        <div>
          <input class="search" type="search" name="" id="" placeholder="ФИО">
        </div>
        <div>
          <input class="search" type="search" name="" id="" placeholder="Город">
        </div>
        <div>
          <input class="search" type="search" name="" id="" placeholder="Телефон">
        </div>
        <div>
          <input class="search" type="search" name="" id="" placeholder="Адресс">
        </div>
        <button @click="removeFilter()" class="addfilther">Добавить фильтр</button>
        </div>
      </div>
    </div>
    <div class="users">
      <div class="usersinfo">
        <div class="userPic">
        </div>
        <div class="userText">
          <p>Город</p>
          <p>Заведение</p>
          <p>Что проверяет</p>
        </div>
      </div>
      <div class="usersinfo">
        <div class="userPic">
        </div>
        <div class="userText">
          <p>Город</p>
          <p>Заведение</p>
          <p>Что проверяет</p>
        </div>
      </div>
      <div class="usersinfo">
        <div class="userPic">
        </div>
        <div class="userText">
          <p>Город</p>
          <p>Заведение</p>
          <p>Что проверяет</p>
        </div>
      </div>
      <div class="usersinfo">
        <div class="userPic">
        </div>
        <div class="userText">
          <p>Город</p>
          <p>Заведение</p>
          <p>Что проверяет</p>
        </div>
      </div>
      <div class="usersinfo">
        <div class="userPic">
        </div>
        <div class="userText">
          <p>Город</p>
          <p>Заведение</p>
          <p>Что проверяет</p>
        </div>
      </div>
      <div class="usersinfo">
        <div class="userPic">
        </div>
        <div class="userText">
          <p>Город</p>
          <p>Заведение</p>
          <p>Что проверяет</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstitutionsView',

  data() {
    return {
      filtherIsActive: false
    };
  },

  mounted() {
    
  },

  methods: {
    goBack() {
        this.$router.go(-1)
      },
    toggle: function() {
      const filterModal = document.querySelector(".Fmodal") 
      filterModal.classList.toggle("filther-open")
    },
    removeFilter: function() {
      const filterModal = document.querySelector(".Fmodal") 
      filterModal.classList.remove("filther-open")
    },
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
.qust__heading {
  display: flex;
  justify-content: space-between;
}
.search {
  padding: 5px;
  border-radius: 5px;
  width: calc(100vw - 20px);
  border-color: transparent;
  margin: 10px
}
.addfilther {
  background: #989898;
  border-color: transparent;
  border-radius: 15px;
  height: 40px;
  padding: 5px;
  width: calc(100vw - 20px);
  border-color: transparent;
  margin: 10px;
  color: white;
}
.userPic {
  width: 76px;
  height: 76px;
  background-color: white;
  border-radius: 15px;
  margin-left: 15px;
}
.users {
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  margin: 0 15px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-x: scroll;
  height: calc(100vh - 250px);
  margin-bottom: 60px;
}
.usersinfo {
  display: flex;
  justify-content: left;
  align-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #ada8a8;
}
.filther {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}
.filther-open {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.closedArea {
  height: 60px;
}
.menuArea {
  background-color: #F2F2F2;
  height: calc(100vh - 115px);
}
.filter__text {
  margin: 0;
  padding: 15px;
}
</style>