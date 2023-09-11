<template>
    <div>{{ answer }}</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SearchArtist",
    data() {
        return {
            answer: {},
        };
    },
    methods: {
        async getAnswer() {
            const { data } = await axios.get('https://api.spotify.com/v1/search?query=the+doors&type=artist', {
                headers: {
                    
                }
            });
            this.answer = data;
            console.log (this.answer)
        },
    },
    beforeMount() {
        this.getAnswer();
    },
};
</script>