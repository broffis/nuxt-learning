<template>
  <div>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
            
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
            
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
            
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.previewText">Preview Text</AppControlInput>
    
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content</AppControlInput>
            
    <AppButton type="submit">Save</AppButton>
            
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminPostForm',
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    const defaultPost = {
      author: '',
      title: '',
      thumbnail: '',
      content: '',
      editedPost: ''
    }
    return {
      editedPost: this.post ? { ...this.post } : defaultPost
    }
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin')
    }
  },
}
</script>

<style lang="css" scoped>
  
</style>