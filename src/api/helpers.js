import axios from 'axios' //http库

/**  
 * 错误码
 */
const ERR_OK = 0

/**
 * 针对数据结构基于axios进行二次封装
 *
 * @export
 * @param {*} url
 * @returns
 */
export function get(url) { 
    return function(params) { 
        return axios.get(url, {
            params
        }).then(function(res) { 
            const {errno, data} = res.data
            if (errno === ERR_OK) { 
                return data
            } 
        })
    }
}