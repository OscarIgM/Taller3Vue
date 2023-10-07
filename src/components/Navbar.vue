<template>
  <nav class="navbar bg-blue navbar-expand-lg" data-bs-target="blue">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://www.ufro.cl">
        <img
          src="https://www.ufro.cl/index.php/normas-corporativas/31-logo-ufro-azul-vertical/file"
          alt=""
          style="width: 3rem"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: nombreActivo === 'ListadoNoticias' }"
              @click="navegar('ListadoNoticias')"
              >Noticias</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: nombreActivo === 'Eventos' }"
              @click="navegar('Eventos')"
              >Eventos</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["nombreActivo"],
  methods: {
    navegar(nombre) {
      if (nombre === "ListadoNoticias") {
        this.$router.push("/");
      } else if (nombre === "Eventos") {
        this.$router.push("/Eventos");
      }
    },
  },
};
</script>
