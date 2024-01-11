import { fetchApi } from '@/utils/api';
export const getIdcardDetail = async (id: string) => {
    try {
        const res = await fetchApi({
            baseUrl: 'https://idcardapi.mnindonesia.com',
            url: `/idcard?id=${id}`,
            method: 'GET',
        });
        return res;
    } catch (error) {
        throw error;
    }
};