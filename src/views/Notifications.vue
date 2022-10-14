<template>
  <div>
    <h2>Notifications</h2>
    <button class="gobackBtn" @click="goBack()">X</button>
  </div>
</template>

<script>
export default {
  name: 'KannamprototypeNotifications',

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
div {
  display: flex;
  justify-content: space-between;
}
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
</style>