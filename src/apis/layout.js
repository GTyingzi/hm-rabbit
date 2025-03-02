/**
 * @author 影子
 * @date 2025/2/27 21:37
 */

import httpInstance from '@/utils/http.js'

export function getCategoryAPI () {
    return httpInstance({
        url: 'home/category/head'
    })
}
     