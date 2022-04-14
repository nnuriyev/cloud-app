<template>
  <a-card hoverable>
    <template #cover>
      <img :alt="item.name" :src="item.url" />
    </template>
    <a-card-meta :title="item.name">
      <template #description>{{item.created_at | formatDate}}</template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default{
  props: {
    item: Object,
  },
  filters: {
  formatDate: function (value) {
    return new Date(value).toLocaleString()
  }
}
  
}
</script>

<style scoped>
  .image-preview{
    width: 100%;
  }
</style>

