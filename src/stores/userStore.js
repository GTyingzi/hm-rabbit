/**
 * @author 影子
 * @date 2025/3/1 19:25
 */
// 管理用户数据相关
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user.js'
import { ref } from 'vue'
import { mergeCartAPI } from '@/apis/cart'
import { useCartStore } from './cateStore'

export const useUserStore = defineStore('user', ()=>{
    const cartStore = useCartStore()
    // 1. 定义数据state
    const userInfo = ref({})
    // 2. 定义修改state的方法action
    const getUserInfo = async ({account, password}) => {
        const res = await loginAPI({
            account: account,
            password: password
        })
        userInfo.value = res.result
        // 合并购物车的操作
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateNewList()
    }
    // 3. 以对象的格式返回state、action

    // 退出时清空用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        // 执行清楚购物车的action
        cartStore.clearCart()
    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})

