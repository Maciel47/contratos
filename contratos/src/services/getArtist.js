import axios from 'axios';
import token from './token';

export default async function getArtist(artist) {
    const url = `https://api.spotify.com/v1/search?query=${artist}&type=artist`
    try {
        let resp = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return resp.data;
    } catch (e) {

    } finally {

    }
}