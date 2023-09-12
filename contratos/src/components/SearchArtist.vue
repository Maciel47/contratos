<template>
	<div class="container">
		<h2>Buscar artista ou banda:</h2>
		<div class="input-group mb-3">
			<input type="text" class="form-control" v-model="artist"
				placeholder="Digite o nome do artista (cantor ou banda)" aria-label="Recipient's username"
				aria-describedby="button-addon2" v-on:keyup="getArtist()">
		</div>
		<select class="form-select" size="10" id="ResultArtist" v-if="artist">
			<option v-for="(item) in result" @click="selected_artist = item.name"  style="cursor: pointer;">
				{{ item.name }}
			</option>
		</select>
		<p v-if="selected_artist != null">Escolhido: {{ selected_artist }}</p>
		<RouterLink to="/infofrm">
			<button class="btn btn-dark" v-if="selected_artist != null" @click="sendArtistName()">
				Prosseguir com a contratação
			</button>
		</RouterLink>
	</div>
</template>


<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'

export default {
	name: 'ResultArtist',
	data: () => ({
		artist: '',
		result: {},
		selected_artist: null
	}),
	methods: {
		getArtist() {
			const artist = this.artist
			axios.get(`https://api.spotify.com/v1/search?query=${artist}&type=artist`, {
				headers: {
					Authorization: `Bearer `
				}
			})
				.then(result => {
					this.result = result.data.artists.items
					console.log(this.result)
				})
		},
		sendArtistName(){
			const artistName = this.selected_artist;
			localStorage.setItem(artistName, 'value');
		}
	}
}
</script>