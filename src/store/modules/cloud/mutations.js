export default {
    setCategories(state, payload){
        state.categories = payload.results;
        state.page = 1;
    },
    
    setFiles(state, payload){
        state.files = payload.results;
        state.page = payload.page;
        state.totalResults = payload.total_results;
    },

    setFilesAsEmpty(state){
        state.files = [];
        state.page = 1;
        state.totalResults = 0;
    },

    setFilesPageNumber(state, payload){
        state.page = payload.page;
    },

    setActiveCategory(state, payload){
        state.page = 1;
        state.activeCategoryId = payload.activeCategoryId;
    },

    setOrderBy(state, payload){
        state.orderBy = payload.orderBy;
    },
}