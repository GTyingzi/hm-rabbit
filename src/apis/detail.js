/**
 * @author 影子
 * @date 2025/3/1 13:22
 */
import httpInstance from '@/utils/http.js'

export const getDetailAPI = (id) => {
    return httpInstance({
        url:'/goods',
        params:{
            id
        }
    })
}

export const getHotGoodsAPI = ({id,type,limit = 3}) => {
    return httpInstance({
        url:'/goods/hot',
        params:{
            id,
            type,
            limit
        }
    })
}