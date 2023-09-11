<template>
    <div>{{ answer }}</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SearchAddress",
    data() {
        return {
            answer: {},
        };
    },
    methods: {
        async getAnswer() {
            const { data } = await axios.get('https://viacep.com.br/ws/15706076/json/');
            this.answer = data;
            console.log (this.answer)
        },
    },
    beforeMount() {
        this.getAnswer();
    },
};
</script>

