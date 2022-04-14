import CloudService from '../../../services/cloud.service';

export default {
    loadCategories({commit, state}){
        CloudService.getCategories()
          .then(response => {
            commit('setCategories', response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    loadAllFiles({commit, state}){
      CloudService.getAllFiles(state.page)
        .then(response => {
          commit('setFiles', response.data);
        })
        .catch(e => {
          commit('setFilesAsEmpty');
          console.log(e);
        });
    },
    
    loadFilesByCategory({commit, state}){
      CloudService.getFilesByCategory(state.activeCategoryId, state.page)
        .then(response => {
          commit('setFiles', response.data);
        })
        .catch(e => {
          commit('setFilesAsEmpty');
          console.log(e);
        });
    },
    
}