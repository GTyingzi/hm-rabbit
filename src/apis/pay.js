/**
 * @author 影子
 * @date 2025/3/2 13:45
 */
import httpInstance from '@/utils/http.js'

export const getOrderAPI = (id) => {
    return httpInstance({
        url: `/member/order/${id}`
    })
}