import axios from 'axios';

export default async function getAddress(zip) {
    const url = `https://viacep.com.br/ws/${zip}/json/`
    try {
        let resp = await axios.get(url);
        return resp.data;
    } catch (e) {

    } finally {

    }
}

