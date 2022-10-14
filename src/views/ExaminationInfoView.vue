<template>
  <div>
    <div class="examinationInfo">
      <h2>
        Информация о проверке
      </h2>
      <button class="gobackBtn" @click="goBack()">X</button>
    </div>
    <div class="section__info">
      <p class="section__info__city">Город</p>
      <p class="section__info__thisCity">Красноярск</p>
    </div>
    <div class="section__info">
      <p class="section__info__city">Город</p>
      <p class="section__info__thisCity">Красноярск</p>
    </div>
    <div class="section__info">
      <p class="section__info__city">Город</p>
      <p class="section__info__thisCity">Красноярск</p>
    </div>
    <div class="section__info">
      <p class="section__info__city">Город</p>
      <p class="section__info__thisCity">Красноярск</p>
    </div>
    <div class="section__info">
      <p class="section__info__city">Город</p>
      <p class="section__info__thisCity">Красноярск</p>
    </div>
    <div class="city_option">
      <p>Option</p>
      <div class="input_option">
        <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes">
        <label for="happy">Happy</label>
      </div>
    </div>
    <button class="enter_exam">Принять задание</button>
  </div>
</template>

<script>
export default {
  name: 'KannamprototypeExaminationInfoView',

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

.input_option {
  margin: 15px;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox:checked+label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.custom-checkbox+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
h2 {
  margin: 15px;
}
.examinationInfo {
  display: flex;
  justify-content: space-between;
}
.gobackBtn {
  height: 40px;
  width: 40px;
  background-color: rgb(255, 252, 252);
  border: none;
  align-self: center;
  margin-right: 10px;
}
.section__info__thisCity {
  background-color: aliceblue;
  padding: 10px;
  border-radius: 5px;
}
.enter_exam {
  border-color: transparent;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 60px;
  margin-left: 15px;
}
</style>