<template>
  <a-layout-content :style="{ padding: '0 50px', marginBottom: '50px' }">
    <FilesPageHeader :totalResults="files.totalResults"/>
    <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
      <div :style="{ marginBottom: '30px' }" class="gutter-example">
        <a-row :gutter="16">
          <template v-if="files.totalResults > 0">
            <template v-for="item in files.files">
              <a-col :key="item.id" class="gutter-row" :span="6">
                <div class="gutter-box">
                  <ImageCard :item="item"/>
                </div>
              </a-col>
            </template>
          </template>
          <template v-else>
            <a-empty />
          </template>
        </a-row>
      </div>
      <Pagination :currentPage="files.page" @onChange="onPageChange" :total="files.totalResults" />
    </div>
  </a-layout-content>
</template>

<script>
import FilesPageHeader from "./FilesPageHeader.vue";
import ImageCard from "./ImageCard.vue";
import Pagination from "./Pagination.vue";
import ImagePreviewModal from "./ImagePreviewModal.vue";
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  name: "files-grid",
  components: {
    FilesPageHeader,
    ImageCard,
    Pagination,
    ImagePreviewModal,
  },
  props: {
    listData: {
      type: Object,
      default(){
        return {
          items:[],
          totalResults: 0
        }
        
      }
    },
  },
  methods: {
    ...mapActions(['loadAllFiles', 'loadFilesByCategory']),
    ...mapMutations(['setFilesPageNumber']),
    
    onPageChange(page){
      this.setFilesPageNumber({page});
      if(this.activeCategoryId === 0){
        this.loadAllFiles();
      }else{
        this.loadFilesByCategory();
      }
    },
  },
  computed: {
    ...mapGetters(['files', 'activeCategoryId'])
  },
  created(){
    this.loadAllFiles();
  }
};
</script>
