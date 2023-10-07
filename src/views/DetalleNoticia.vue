<template>
  <div>
    <Navbar :nombreActivo="'ListadoNoticias'" />
    <div v-if="noticia">
      <div class="container mt-4">
        <div class="card justify-content-center">
          <div class="card-body d-flex align-content-center">
            <h2 class="card-title justify-content-center">
              {{ noticia.title }}
            </h2>
            <img
              :src="noticia.imageUrl"
              style="width: 30rem; align-items: center"
            />
          </div>
        </div>

        <div class="card mt-3">
          <div class="card-body">
            <p v-html="noticia.details.body"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import axios from "axios";
import Navbar from "../components/Navbar.vue";

const { newsId } = defineProps(["newsId"]);

const noticia = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/news/${newsId}`);
    noticia.value = response.data.news;
  } catch (error) {
    console.error(error);
  }
});
</script>
