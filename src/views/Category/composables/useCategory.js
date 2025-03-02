/**
 * @author 影子
 * @date 2025/2/28 18:07
 */
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getCategoryAPI } from "@/apis/category.js";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
    const categoryData = ref({})
    const router = useRoute()

    const getCategory = async (id = router.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(() => {
        getCategory()
    })

    // 目标：路由参数变换时，可把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    return {
        categoryData,
    }
}