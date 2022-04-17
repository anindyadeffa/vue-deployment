<template>
  <div class="news-wrapper">
    <h1 class="text-center">Berita Terkini</h1>
    <ItemNews
      v-for="(data, index) in getNewsFromState"
      :key="index"
      :news="data"
    />
  </div>
</template>

<script>
import ItemNews from "@/components/ItemNews.vue";

export default {
  name: "NewsView",
  components: {
    ItemNews,
  },
  mounted() {
    this.getNews();
  },
  computed: {
    getNewsFromState() {
      return this.$store.state.news.lists;
    },
  },
  methods: {
    getNews() {
      // news/fetchListNews
      this.$store.dispatch("news/fetchListNews");
    },
  },
};
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
