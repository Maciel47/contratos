<template>
    <div class="container">
        <h2>Último contrato solicitado / finalizado</h2>
        <div>
            <div class="card">
                <!-- Decision structure to decide what to display according to the information in localstorage. -->
                <div class="card-header" v-if="hirerInfoList.length > 0">
                    <h4>Informações do contrato</h4>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th><input type="text" class="form-control" v-model="hirer_name"
                                            placeholder="Digite o seu nome completo" aria-label="Recipient's username"
                                            aria-describedby="button-addon2" disabled></th>
                                    <th><input type="text" class="form-control" v-model="selected_artist"
                                            placeholder="Digite o seu nome completo" aria-label="Recipient's username"
                                            aria-describedby="button-addon2" disabled></th>
                                </tr>
                                <tr>
                                    <th><input type="text" class="form-control" v-model="artist_fee"
                                            placeholder="Digite o valor do cachê" aria-label="Recipient's username"
                                            aria-describedby="button-addon2" disabled></th>
                                    <th><input type="text" class="form-control" v-model="event_date"
                                            placeholder="Digite a data do evento" aria-label="Recipient's username"
                                            aria-describedby="button-addon2" disabled></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div v-else class="card-header"><h3>Não há nenhum contrato realizado. Para verificar, realize a solicitação do contrato.</h3></div>
                <!-- Decision structure to decide when to display the information. -->
                <div class="card-header" v-if="hirerAddressList.length > 0">
                    <h4>Endereço</h4>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th><input type="text" class="form-control" aria-label="Recipient's username"
                                            placeholder="CEP" aria-describedby="button-addon2" v-model="cep" disabled></th>
                                    <th><input type="text" class="form-control" aria-label="Recipient's username"
                                            placeholder="Rua" aria-describedby="button-addon2" v-model="street" disabled>
                                    </th>
                                    <th><input type="text" class="form-control" aria-label="Recipient's username"
                                            placeholder="Número" aria-describedby="button-addon2" v-model="number" disabled>
                                    </th>
                                    <th><input type="text" class="form-control" aria-label="Recipient's username"
                                            placeholder="Complemento" aria-describedby="button-addon2" v-model="compl"
                                            disabled></th>
                                </tr>
                                <tr>
                                    <th><input type="text" class="form-control" aria-label="Recipient's username"
                                            placeholder="Bairro" aria-describedby="button-addon2" v-model="neigh" disabled>
                                    </th>
                                    <th><input type="text" class="form-control" aria-label="Recipient's username"
                                            placeholder="Cidade" aria-describedby="button-addon2" v-model="city" disabled>
                                    </th>
                                    <th><input type="text" class="form-control" aria-label="Recipient's username"
                                            placeholder="Estado" aria-describedby="button-addon2" v-model="uf" disabled>
                                    </th>
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
        strInfo: '',
        strAddress: '',
        hirerInfoList: [],
        hirerAddressList: [],
        hirer_name: null,
        selected_artist: null,
        artist_fee: null,
        event_date: null,
        cep: null,
        street: null,
        number: null,
        compl: null,
        neigh: null,
        city: null,
        uf: null,
    }),
    methods: {
        // get information from the SearchArtist wich is located in localStorage.
        listInfo() {
            if (localStorage.getItem('hirerInfo')) {
                this.strInfo = localStorage.getItem('hirerInfo')
                this.hirerInfoList = this.strInfo.split(',')
                this.hirer_name = this.hirerInfoList[0]
                this.selected_artist = this.hirerInfoList[1]
                this.artist_fee = this.hirerInfoList[2]
                let eventDay = new Date(this.hirerInfoList[3])
                var day = eventDay.getDate();
                var month = eventDay.getMonth() + 1;
                var year = eventDay.getFullYear();
                this.event_date = day + '/' + month + '/' + year;
            }
            // get information from the SearchAddress wich is located in localStorage.
            if (localStorage.getItem('hirerAddress')) {
                this.strAddress = localStorage.getItem('hirerAddress')
                this.hirerAddressList = this.strAddress.split(',')
                this.cep = this.hirerAddressList[0]
                this.street = this.hirerAddressList[1]
                this.compl = this.hirerAddressList[2]
                this.neigh = this.hirerAddressList[3]
                this.number = this.hirerAddressList[4]
                this.city = this.hirerAddressList[5]
                this.uf = this.hirerAddressList[6]
            }
        }
    },
    // For execution autonomy: verify localStorage for information.
    beforeMount() {
        this.listInfo()
    }
}
</script>