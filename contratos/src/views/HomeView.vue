<template>
  <main>
    <h1>Página principal</h1>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Digite o nome do artista (cantor ou banda)" aria-label="Recipient's username"
        aria-describedby="button-addon2">
      <button class="btn btn-dark" type="button" id="button-addon2">search</button>
    </div>
    <RouterLink to="/infofrm" class="btn btn-dark">
        Prosseguir com a contratação
    </RouterLink>
  </main>
</template>
