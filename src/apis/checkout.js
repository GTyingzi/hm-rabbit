/**
 * @author 影子
 * @date 2025/3/2 13:05
 */
import httpInstance from '@/utils/http.js'

// 获取详情接口
export const getCheckoutInfoAPI = () => {
    return httpInstance({
        url:'/member/order/pre'
    })
}

// 创建订单
export const createOrderAPI = (data) => {
    return httpInstance({
        url:'/member/order',
        method:'POST',
        data
    })
}