<template>
	<div class="container">
		<div class="column is-12">
			<div class="input-group mb-3">
				<input type="text" class="form-control" v-model="cep" placeholder="Digite o seu CEP (sem traço ou símbolos)"
					aria-label="Recipient's username" aria-describedby="button-addon2" maxlength="8">
				<button class="btn btn-dark" type="button" id="button-addon2" @click="getAddress()">Buscar</button>
			</div>
			<div class="input-group mb-3">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th><input type="text" class="form-control" aria-label="Recipient's username" placeholder="Rua"
									aria-describedby="button-addon2"></th>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Número" aria-describedby="button-addon2"></th>
						</tr>
						<tr>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Complemento" aria-describedby="button-addon2"></th>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Bairro" aria-describedby="button-addon2"></th>
						</tr>
						<tr>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Cidade" aria-describedby="button-addon2"></th>
							<th><input type="text" class="form-control" aria-label="Recipient's username"
									placeholder="Estado" aria-describedby="button-addon2"></th>
						</tr>
					</thead>
				</table>

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
			if (maxlength < 8) {
				alert('Está faltando número')
			} else {
				axios.get(`https://viacep.com.br/ws/${cep}/json/`)
					.then(result => {
						this.result = result.data
						console.log(this.result)
					})
			}

		}
	}
}
</script>