<template>
  <div>
    <section class="post-list">
      <PostPreview
        v-for="(post, index) in posts"
        :id="post.id"
        :key="post.id"
        :is-admin="isAdmin"
        :thumbnail="post.thumbnail"
        :title="post.title"
        :previewText="post.previewText"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '~/components/posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="css" scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>