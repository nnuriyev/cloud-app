<template>
  <div>
    <a-button
      :style="{ marginBottom: '40px' }"
      type="link"
      @click="onOpenModal"
    >
      Preview
      <a-icon type="plus" />
    </a-button>

    <a-modal
      :visible="isModalVisible"
      title="Create list"
      okText="Create"
      @cancel="handleCancel"
    >
      
    </a-modal>
  </div>
</template>

<script>



export default {
  data() {
    return {
    };
  },
  
  methods: {
    onOpenModal() {
      this.$store.commit('setModalVisible', true);
    },
    
    handleCancel() {
      this.$store.commit('setModalVisible', false);
    },
  },
  computed:{
    isModalVisible(){
      return this.$store.state.isModalVisible;
    }
  }
};
</script>
