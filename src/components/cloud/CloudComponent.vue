<template>
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff">
        <Folders/>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <FilesGrid/>
        </a-layout-content>
      </a-layout>
    </a-layout-content> 
</template>

<script>
import Folders from "./components/Folders.vue"
import FilesGrid from "./components/FilesGrid.vue"
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  name: "cloud-component",
  components: {
    Folders,
    FilesGrid,
  },
  data(){
    return {
      
    }
  },
};
</script>
