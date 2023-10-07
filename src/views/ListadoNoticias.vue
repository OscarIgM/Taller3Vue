<template>
  <div>
    <Navbar :nombreActivo="'ListadoNoticias'" />
    <div class="card-container">
      <div v-if="news.length">
        <div class="text-center">
          <div class="row col-md-5 d-flex mx-auto">
            <div
              v-for="noticia in news"
              :key="noticia.newsId"
              class="col-md-6 d-flex mb-4"
            >
              <Cards
                :title="noticia.title"
                :imageUrl="noticia.imageUrl"
                :content="noticia.content"
                :newsId="noticia.newsId"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Cards from "../components/Cards.vue";
import Navbar from "../components/Navbar.vue";
const news = ref([]);
const getNews = async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/news`);
    news.value = response.data.news;
  } catch (err) {
    console.log(err);
    console.log("Error ;(");
  }
};

onMounted(() => {
  getNews();
});
</script>
