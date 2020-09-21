import { get } from './helpers'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
//const getRating = get('/api/rating')

export {
    getSeller,
    getGoods
    //getRating
}

