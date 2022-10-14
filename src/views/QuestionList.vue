<template>
  <div>
    <div class="qust__heading">
      <h2>Частые вопросы</h2>
      <button class="gobackBtn" @click="goBack()">X</button>
    </div>
    <div>
      <details>
        <summary>Details</summary>
        Something small enough to escape casual notice.
      </details>
      <details>
        <summary>Details</summary>
        Something small enough to escape casual notice.
      </details>
      <details>
        <summary>Details</summary>
        Something small enough to escape casual notice.
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KannamprototypeQuestionList',

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
.qust__heading {
  display: flex;
  justify-content: space-between;
}
details {
  margin: 15px;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: .5em .5em 0;
}

summary {
  font-weight: bold;
  margin: -.5em -.5em 0;
  padding: .5em;
}

details[open] {
  padding: .5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: .5em;
}
</style>