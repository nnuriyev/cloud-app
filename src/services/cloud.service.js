import service from "../utils/service"

class CloudService{
    getCategories(page = 1){
        return service.get('mock-api/categories.json');
    }
    getFilesByCategory(categoryId, page = 1){
        return service.get(`mock-api/images-by-category-id-${categoryId}-page-${page}.json`);
    }
    getAllFiles(page = 1){
        return service.get(`mock-api/images-all-page-${page}.json`);
    }

    
}

export default new CloudService;