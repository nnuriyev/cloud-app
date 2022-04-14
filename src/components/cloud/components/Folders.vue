<template>
    <a-layout-sider width="200" style="background: #fff">
        <a-menu
        mode="inline"
        style="height: 100%"
        :defaultSelectedKeys="[activeCategoryId]"
        @click="handleClick"
        >
        <a-menu-item :key="0">
          <a-icon type="folder"></a-icon>
          All files
        </a-menu-item>
        <template v-for="category in categories">
            <a-menu-item :key="category.id">
              <a-icon type="folder"></a-icon>
              {{category.name}}
            </a-menu-item>
        </template>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  name: "folders",
  components: {
  },
  data(){
    return {
      
    }
  },
  methods: {
    ...mapActions(['loadCategories', 'loadFilesByCategory', 'loadAllFiles']),
    ...mapMutations(['setActiveCategory']),

    handleClick(folder){
      this.setActiveCategory({activeCategoryId: folder.key})

      if(folder.key === 0){
        this.loadAllFiles();
      } else{
        this.loadFilesByCategory();
      }
      
    }
  },
  computed: {
    ...mapGetters(['categories', 'activeCategoryId'])
  },
  created(){
    this.loadCategories();
  }
};
</script>