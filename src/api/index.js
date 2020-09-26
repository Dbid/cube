import { get } from './helpers'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
// const getRatingS = get('/api/ratings')

export {
    getSeller,
    getGoods
    // getRatings
}

