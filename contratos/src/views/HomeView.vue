<template>
  <main>
    <div class="d-flex p-2 flex-column">
      <h1>Página principal</h1>
      <SearchArtist />
      <div class="container">
        <RouterLink to="/infofrm" class="btn btn-dark">
          Prosseguir com a contratação
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import SearchArtist from '../components/SearchArtist.vue';
</script>
