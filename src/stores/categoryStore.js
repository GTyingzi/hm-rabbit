/**
 * @author 影子
 * @date 2025/2/27 22:15
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航列表数据
    const categoryList = ref([])

    // action 获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }

    return {
        categoryList,
        getCategory
    }
})
     