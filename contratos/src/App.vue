<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <RouterLink class="navbar-brand" to="/">Contratos</RouterLink>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/">Início</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/listagem">Pedidos</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/buscar-artista">Buscar Artista</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/buscar-endereco">Buscar CEP</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<style scoped></style>
