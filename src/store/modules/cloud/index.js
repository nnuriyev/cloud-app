import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
    categories: [],
    activeCategoryId: 0,
    files: [],
    page: 1,
    totalResults: 0,
    orderBy: null,
};

export default {
    state,
    getters,
    actions,
    mutations
}
