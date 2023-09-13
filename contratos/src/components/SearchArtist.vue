<template>
	<div class="container">
		<h2>Buscar artista ou banda:</h2>
		<div class="input-group mb-3">
			<input type="text" class="form-control" v-model="artist"
				placeholder="Digite o nome do artista (cantor ou banda)" aria-label="Recipient's username"
				aria-describedby="button-addon2" v-on:keyup="getArtist()">
		</div>
		<select class="form-select" size="10" id="ResultArtist" v-if="artist">
			<option v-for="(item) in result" @click="selected_artist = item.name" style="cursor: pointer;">
				{{ item.name }}
			</option>
		</select>
		<div v-if="selected_artist != null">
			<div class="card">
				<div class="card-header">
					<div class="card-body">
						<h4>Formulário de contratação</h4>
						<table class="table table-bordered">
							<thead>
								<tr>
									<th><input type="text" class="form-control" v-model="hirer_name"
											placeholder="Digite o seu nome completo" aria-label="Recipient's username"
											aria-describedby="button-addon2"></th>
									<th><input type="text" class="form-control" v-model="selected_artist"
											placeholder="Digite o seu nome completo" aria-label="Recipient's username"
											aria-describedby="button-addon2" disabled></th>
								</tr>
								<tr>
									<th><input type="text" class="form-control" v-model="artist_fee"
											placeholder="Digite o valor do cachê" aria-label="Recipient's username"
											aria-describedby="button-addon2"></th>
									<th><input type="text" class="form-control" v-model="event_date"
											placeholder="Digite a data do evento" aria-label="Recipient's username"
											aria-describedby="button-addon2"></th>
								</tr>
							</thead>
						</table>
						<button class="btn btn-dark" v-if="selected_artist != null" @click="sendInfoArray()">
							Prosseguir
						</button>
					</div>
					<div class="card-header" v-if="continueForm > 1" >
						<div class="card-body">
							<div class="container">
								<h4>Endereço</h4>
								<SearchAddress/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import SearchAddress from './SearchAddress.vue';

export default {
	name: 'ResultArtist',
	data: () => ({
		artist: '',
		selected_artist: null,
		result: {},
		continueForm: 1,
		hirer_info: []
	}),
	methods: {
		getArtist() {
			const artist = this.artist;
			axios.get(`https://api.spotify.com/v1/search?query=${artist}&type=artist`, {
				headers: {
					Authorization: `Bearer `
				}
			})
				.then(result => {
					this.result = result.data.artists.items;
					console.log(this.result);
				});
		},
		sendInfoArray() {
			if (this.hirer_name != "" && this.artist_fee != "" && this.event_date != "") {
				this.continueForm += 1
				console.log(this.continueForm)
				this.hirer_info.push(this.hirer_name, this.selected_artist, this.artist_fee, this.event_date)
				console.log(this.hirer_info)
				localStorage.setItem(this.hirer_info, 'hirerInfo')
			} else {
				alert('Preencha todos os campos para prosseguir')
			}
		},
	},
	components: { SearchAddress }
}
</script>