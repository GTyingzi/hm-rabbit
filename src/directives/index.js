/**
 * @author 影子
 * @date 2025/2/28 16:41
 */

// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin ={
    install (app) {
        app.directive('img-lazy', {
            // 懒加载指令逻辑
            mounted (el, binding) {
                // 创建一个观察对象，来观察当前使用懒加载的元素
                // el: 指令绑定的那个元素 img
                // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
                console.log(el, binding.value)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    },)
            }
        })
    }
}