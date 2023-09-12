<template>
	<div class="container">
		<div class="column is-12">
			<div class="input-group mb-3">
				<input type="text" class="form-control" v-model="artist"
					placeholder="Digite o nome do artista (cantor ou banda)" aria-label="Recipient's username"
					aria-describedby="button-addon2" v-on:keyup="getArtist()">
			</div>
		</div>
		<div class="container">
			<select class="form-select" size="10" id="ResultArtist" v-if="artist">
				<option v-for="(item, index) in result" @click="changeClick(selected_artist = item.name)">
					{{ index + 1 }} - {{ item.name }}
				</option>
			</select>
		</div>
		<div class="container">
			<RouterLink to="/infofrm">
				<button class="btn btn-dark" v-if="selected_artist!=null">
					Prosseguir com a contratação
				</button>
			</RouterLink>
		</div>
	</div>
</template>


<script>
import axios from 'axios'

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
		changeClick() {
			this.$emit('changeClick', this.selected_artist)
		}
	}
}
</script>