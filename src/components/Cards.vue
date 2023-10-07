<template>
  <div class="card">
    <img :src="imageUrl" class="card-img-top" alt="Imagen de la tarjeta" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ content }}</p>
      <router-link :to="'/DetalleNoticia/' + newsId" class="btn btn-primary"
        >Ir a Noticia</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    imageUrl: String,
    newsId: String,
  },
};
</script>

<style scoped>
.card {
  max-width: 18rem;
  margin: 20px;
}
</style>
