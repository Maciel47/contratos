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
		<div class="container">
			<ul class="list-group list-group-flush">
					<li class="list-group-item">{{ result }}</li>
				</ul>
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
					Authorization: `Bearer BQCy6u-YImaWLKl8Bs8wbtekueNlfyt8u1vP631sDW-vVxnoDl43T3TXRpfWOIDTzCV6xVhmMMXKhpqArErS_x1R-r76GWayFf8n95hlZbsQVOljpxW26mwlQtGNaPcUK0cxjhFsZFwNbNX2mr5yuR3K46ibjFdS3NCUEDb2yMKfQoz2eS8rbA_CcqoY460QVQTqUw`
				}
			})
				.then(result => {
					this.result = result.data.artists.items
					console.log(this.result)
				})
		}
	}
}
</script>