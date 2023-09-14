<template>
	<div class="container">
		<div class="column is-12">
			<div class="input-group mb-3">
				<!-- getAddress function to get data from ViaCEP API. -->
				<input type="text" class="form-control" v-model="cep" placeholder="Digite o seu CEP (sem traço ou símbolos)"
					aria-label="Recipient's username" aria-describedby="button-addon2" :maxlength="maxLength"
					v-on:keyup="getAddress()">
			</div>
			<div class="input-group mb-3" v-if="continueAddress> 1">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th><input type="text" class="form-control" aria-label="Recipient's username" placeholder="Rua"
									aria-describedby="button-addon2" v-model="street"></th>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Número" aria-describedby="button-addon2" v-model="number"></th>
						</tr>
						<tr>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Complemento" aria-describedby="button-addon2" v-model="compl"></th>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Bairro" aria-describedby="button-addon2" v-model="neigh"></th>
						</tr>
						<tr>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Cidade" aria-describedby="button-addon2" v-model="city"></th>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Estado" aria-describedby="button-addon2" v-model="uf" ></th>
						</tr>
					</thead>
				</table>
				<RouterLink to="/listagem">
					<!-- sendInfoArray to send data to ListView. -->
					<button class="btn btn-success" @click="sendInfoArray()">
						Finalizar contrato
					</button>
				</RouterLink>
			</div>

		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'ResultAddress',
	data: () => ({
		cep: '',
		result: {},
		maxLength: 8,
		continueAddress: 1,
		street: null,
		number: null,
		compl: null,
		neigh: null,
		city: null,
		uf: null,
		hirer_address: []
	}),
	methods: {
		// Get ViaCEP information.
		getAddress() {
			const cep = this.cep
			if (this.maxLength == 0) {
				alert('Está faltando número')
			} else {
				axios.get(`https://viacep.com.br/ws/${cep}/json/`)
					.then(result => {
						this.result = result.data
						this.street = result.data.logradouro
						this.compl = result.data.complemento
						this.neigh = result.data.bairro
						this.city = result.data.localidade
						this.uf = result.data.uf
						this.continueAddress += 1
						console.log(this.result.data)
					})
			}

		},
		// Send information to ListView.
		sendInfoArray() {
			this.$swal("Contrato enviado", "Recebemos a sua solicitação de contrato", "success")
			this.hirer_address.push(this.cep, this.street, this.compl, this.neigh, this.number, this.city, this.uf)
			localStorage.setItem('hirerAddress', this.hirer_address)
			console.log(this.hirer_address)
		}
	}
}
</script>