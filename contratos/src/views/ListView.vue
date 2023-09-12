<template>
  <div class="listagem">
    <h1>Contratos solicitados / encerrados</h1>
    <div>
        <div class="card">
            <div class="card-header">
                <h4>Informações do contrato</h4>
                <!-- <RouterLink to="/infofrm/create" class="btn btn-primary float-end">
                    Finalizar pedido
                </RouterLink> -->
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Nome Completo</th>
                                <th>Atista Selecionado</th>
                            </tr>
                            <tr>
                                <th>Cachê</th>
                                <th>Data do evento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div class="card-header">
                <h4>Endereço</h4>
                <!-- <RouterLink to="/infofrm/create" class="btn btn-primary float-end">
                    Finalizar pedido
                </RouterLink> -->
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>CEP</th>
                                <th>Rua</th>
                                <th>Número</th>
                                <th>Complemento</th>
                            </tr>
                            <tr>
                                <th>Bairro</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>