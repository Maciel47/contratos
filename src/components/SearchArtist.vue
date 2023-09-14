<template>
	<div class="container">
		<h2>Buscar artista ou banda:</h2>
		<div class="input-group mb-3">
			<!-- getArtist function to get data from Spotify API. -->
			<input type="text" class="form-control" v-model="artist"
				placeholder="Digite o nome do artista (cantor ou banda)" aria-label="Recipient's username"
				aria-describedby="button-addon2" v-on:keyup="getArtist()">
		</div>
		<!-- Loop to fetch information from the vector received in the artist and band query. -->
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
											placeholder="Digite o valor do cachê (R$xxxx,xx)" aria-label="Recipient's username"
											aria-describedby="button-addon2"></th>
									<th><input type="date" class="form-control" v-model="event_date"
											placeholder="Digite a data do evento" aria-label="Recipient's username"
											aria-describedby="button-addon2"></th>
								</tr>
							</thead>
						</table>
						<!-- sendInfoArray to send data to ListView. -->
						<button class="btn btn-dark" v-if="selected_artist != null" @click="sendInfoArray()">
							Prosseguir
						</button>
					</div>
					<div class="card-header" v-if="continueForm > 1">
						<div class="card-body">
							<div class="container">
								<h4>Endereço</h4>
								<SearchAddress />
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
import {client_id, client_secret} from '../services/clientServices'

export default {
	name: 'ResultArtist',
	data: () => ({
		token: '',
		artist: '',
		selected_artist: null,
		result: {},
		resultToken: {},
		continueForm: 1,
		hirer_info: []
	}),
	methods: {
		// The Spotify API token only lasts for one hour, so this function (generateToken) fetches the token and stores it.
		async generateToken() {
			try {
				const data = await axios.post('https://accounts.spotify.com/api/token', null, {
					params: {
						grant_type: 'client_credentials',
					},
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					auth: {
						username: client_id,
						password: client_secret,
					}
				})
				if (data.status == 200) {
					this.token = data.data.access_token
					setTimeout(this.generateToken, 3600000)
				}
			}
			catch (error) {
				
			}
		},
		// get Spotify information.
		getArtist() {
			const artist = this.artist;
			axios.get(`https://api.spotify.com/v1/search?query=${artist}&type=artist`, {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
				.then(result => {
					this.result = result.data.artists.items;
				
				});
		},
		// send information to ListView.
		sendInfoArray() {
			if (this.hirer_name != "" && this.artist_fee != "" && this.event_date != "") {
				this.continueForm += 1
				let fee = this.artist_fee.replace(',', '.')
				this.hirer_info.push(this.hirer_name, this.selected_artist, fee, this.event_date)
				localStorage.setItem('hirerInfo', this.hirer_info)
			} 
		},
	},
	// For execution autonomy: get token process before adding the component to the page.
	beforeMount() {
		this.generateToken()
	},
	components: { SearchAddress }
}
</script>