/**
 * @author 影子
 * @date 2025/2/27 20:22
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore.js'
import router from "@/router/index.js";

// 创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 15000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1. 从pinia获取tokne数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    // 401token失效处理
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        // 跳转到登录页
        router.push('/login')
    }

    return Promise.reject(e)
})

export default httpInstance