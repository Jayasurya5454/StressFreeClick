import axios from 'axios';
const base=axios.create({
    baseURL:'https://likeme-backend-fxrs.onrender.com/api',
    headers:{
        'Content-Type':'application/json',
    },
});
export default base;