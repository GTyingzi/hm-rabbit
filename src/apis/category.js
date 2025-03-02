/**
 * @author 影子
 * @date 2025/2/28 17:09
 */
import httpInstance from '@/utils/http.js'

export function getCategoryAPI (id) {
    return httpInstance({
        url: 'category',
        params: {
            id
        }
    })
}

export const getCategoryFilterAPI = (id) => {
    return httpInstance({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}

export const getSubCategoryAPI = (data) => {
    return httpInstance({
        url:'/category/goods/temporary',
        method:'POST',
        data
    })
}