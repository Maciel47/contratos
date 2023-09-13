<template>
  <div class="container">
    <h2>Contratos solicitados / encerrados</h2>
    <div>
        <div class="card">
            <div class="card-header" v-if="hirerInfoList">
                <h4>Informações do contrato</h4>
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

<script>
    export default {
        name: 'ListResult',
        data: () => ({
            hirerInfoList: [],
            hirerAddressList: []
        }),
        methods: {
            listInfo(){
                localStorage.getItem('hirerInfo')
                localStorage.getItem('hirerAddress')
                this.hirerInfoList.push(hirerInfo)
                this.hirerAddressList.push(hirerAddress)
                console.log(this.hirerAddressList[0], this.hirerInfoList)
            }
        }
    }
</script>