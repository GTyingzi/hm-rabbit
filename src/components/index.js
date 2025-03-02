/**
 * @author 影子
 * @date 2025/3/1 15:24
 */
// 把components中的所有组件都进行全局化注册
import ImageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
    install (app) {
        app.component('XtxImageView', ImageView)
        app.component('XtxSku', Sku)
    }
}