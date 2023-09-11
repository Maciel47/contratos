<template>
	<div class="container">
		<div class="column is-12">
			<div class="input-group mb-3">
				<input type="text" class="form-control" v-model="cep" 
					placeholder="Digite o seu CEP aqui" aria-label="Recipient's username"
					aria-describedby="button-addon2">
				<button class="btn btn-dark" type="button" id="button-addon2" @click="getAddress()">Buscar</button>
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
			result: {}
		}),
		methods: {
			getAddress() {
				const cep = this.cep
				axios.get(`https://viacep.com.br/ws/${cep}/json/`)
				.then(result => {
					this.result = result.data
					console.log(this.result)
				})
			}
		}
	}
</script>