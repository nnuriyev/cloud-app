<template>
  <div v-if="total > 0" :style="{ display: 'flex', justifyContent: 'center', width: '100%'}">
    <a-pagination @change="onChange" v-model="current" :defaultPageSize="4" :total="total" :disabled="disabled" show-less-items />
  </div>
</template>
<script>
export default {
  props: {
    currentPage: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    total: Number
  },
  data() {
    return {
      current: this.currentPage
    };
  },
  methods: {
    onChange(page) {
      this.$emit('onChange', page)
    }
  },
  watch: {
    currentPage(newVal){
      this.current = newVal;
    }
  }
};
</script>
