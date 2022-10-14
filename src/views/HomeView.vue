<template>
  <div class="home">
    <div>
      <h2 class="home__heading">Запись на проверку</h2>
      <p class="heading__text">Выбери заведение, тип проверки и удобную дату. Ты можешь выбрать только одну проверку.</p>
    </div>
    <div class="adress">
        <div class="adress__info">
          <p class="adress__text">Выбранный адрес</p>
          <h3>Красноярск, ул. Молокова, 1 стр. 1</h3>
        </div>
      <div class="adress__accessible">
        <p class="adress__accessible-text">Доступных проверок: 1</p>
        <router-link to="/examination-info">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </router-link>
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, illum obcaecati voluptate nisi quae beatae nobis, sapiente distinctio mollitia at iusto minus eum hic possimus voluptatum perspiciatis, laboriosam maxime neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet, aperiam sit voluptates fugiat provident commodi recusandae eum soluta? Necessitatibus cumque, fugit tempore quo sit reprehenderit! Consequuntur hic quam iure?</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>
<style>
p {
  margin: 15px;
}
h3 {
  margin: 15px;
}
.home:last-child {
  margin-bottom: 50px;
}
.home__heading {
  margin: 15px ;
}
.adress {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.adress__info {
  background-color: aliceblue;
  border-radius: 15px;
  margin: 0 10px;
  padding: 8px;
}
.adress__accessible {
  height: 100%;
  background-color: aliceblue;
  border-radius: 15px;
  margin: 0 10px;
  padding: 8px;
}
.adress__accessible-text {
  margin: 15px;
}
</style>