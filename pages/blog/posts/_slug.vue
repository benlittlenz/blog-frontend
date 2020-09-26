<template>
    <div v-if="post.length > 0">
      <main
        v-for="post in post"
        :key="post.id"
        class="flex-auto w-full container max-w-4xl mx-auto py-16 px-6">
      <div class="text-lg max-w-prose mx-auto mb-6">
        <p class="text-xl text-gray-500 leading-8">{{post.title}}</p>
      </div>
      <div
      v-html="post.content"
      class="prose prose-lg text-gray-500 mx-auto">
        {{post.content}}
      </div>
    </main>
  </div>
  <div v-else>
    <div class="flex-auto w-full container">
      <p class="text-xl text-gray-500 leading-8">Post does not exist..</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // post: [],
        // error: []
      }
    },

    asyncData({$axios, route}) {
      const slug = route.params.slug

      return $axios.get(`/posts/${slug}`)
        .then((res) => {
          console.log(res)
          return {
            post: res.data.data
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }

}
</script>