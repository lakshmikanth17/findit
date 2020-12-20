import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID s5dGsAT4pnzGlrjSNEW3nsKRNfbuHTqR8_W-ICLso9Y'
    }
})