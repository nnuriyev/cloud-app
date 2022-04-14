export default {
    categories: state => {
        return state.categories;
    },
    activeCategoryId: state => {
        return state.activeCategoryId;
    },
    files: state => {
        const {files, totalResults, page} = state;

        switch (state.orderBy) {
            case 'id_desc':
                files.sort((a, b) => {
                    return b.id - a.id; 
                })
                break;
            case 'name_asc':
                files.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                break;
            case 'name_desc':
                files.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                })
                break;
            default:
                files.sort((a, b) => {
                    return a.id - b.id; 
                })
                break;
        }

        return {files, totalResults, page};
    },
    orderBy: state => {
        return state.orderBy;
    },
    activeCategory: state => {
        return state.categories.find(category => category.id === state.activeCategoryId) || {};
    }
}