<template>
    <a-page-header
      :ghost="false"
      :title="activeCategory.name || 'All files'"
      :sub-title="`Total files: ${totalResults}`"
    >
      <template slot="extra">
        <a-button @click="setOrder('id_desc')" :type="orderBy === 'id_desc' ? 'primary' :'default'">
          Order by date
        </a-button>
        <a-button @click="setOrder('name_asc')" :type="orderBy === 'name_asc' ? 'primary' :'default'">
          Order by name(A...Z)
        </a-button>
        <a-button @click="setOrder('name_desc')" :type="orderBy === 'name_desc' ? 'primary' :'default'">
          Order by name(Z...A)
        </a-button>
      </template>
    </a-page-header>
</template>


<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: "files-page-header",
  props: {
    totalResults: Number
  },
  methods: {
    ...mapMutations(['setOrderBy']),
    setOrder(orderBy){
      if(this.orderBy === orderBy){
        orderBy = null;
      }
      this.setOrderBy({orderBy})
    }
  },
  computed: {
    ...mapGetters(['orderBy', 'activeCategory'])
  }
};
</script>