<template>
	<div class="container">
		<div class="column is-12">
			<div class="input-group mb-3">
				<input type="text" class="form-control" v-model="artist"
					placeholder="Digite o nome do artista (cantor ou banda)" aria-label="Recipient's username"
					aria-describedby="button-addon2">
				<button class="btn btn-dark" type="button" id="button-addon2" @click="getArtist()">Buscar</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'ResultAddress',
	data: () => ({
		artist: '',
		result: {}
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
					this.result = result.data
					console.log(this.result)
				})
		}
	}
}
</script>