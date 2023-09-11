<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4>Formulário de contratação</h4>
                <!-- <RouterLink to="/infofrm/create" class="btn btn-primary float-end">
                    Finalizar pedido
                </RouterLink> -->
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Nome Completo</th>
                                <th>Artista selecionado</th>
                            </tr>
                        </thead>
                    </table>
                    <SearchAddress/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import SearchAddress from '../components/SearchAddress.vue';
</script>