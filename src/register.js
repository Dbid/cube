import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'
import { createAPI } from 'cube-ui'

/**    
 * 组件通过createAPI模块化后可通过API形式调用
 */
createAPI(Vue, HeaderDetail)