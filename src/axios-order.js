import axios from 'axios';

const instance =axios.create({
    baseURL: 'https://react-burger-app-5086d.firebaseio.com/'
})

export default instance;
   
