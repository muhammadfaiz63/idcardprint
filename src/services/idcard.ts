import { fetchApi } from '@/utils/api';
import axios from 'axios';
export const getIdcardDetail = async (id: string) => {
    try {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url:'https://idcardapi.mnindonesia.com/idcard?id='+id
      }
     const response = await axios.request(config)
     return response.data[0]
    } catch (error) {
        console.log(error)
    }
};