import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '2409ac7a77msh2cb928c66a4223dp1b80ccjsne4437e74fac6' ,
    },
  });
    
  return data;
}