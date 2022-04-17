<template>
  <div class="news-wrapper">
    <DetailItemNews :news="detailNews"/>
  </div>
</template>

<script>
import DetailItemNews from "@/components/DetailItemNews.vue";

export default {
  name: "DetailNewsView",
  components: {
    DetailItemNews,
  },
  data() {
    return {
      data: {
        title: "test",
      }
    }
  },
  mounted() {},
  computed: {
    detailNews() {
      const detail = this.$store.state.news.lists.filter(
        (value) => value.title === this.$route.params.title
      )
      console.log("detail: ", detail)
      return detail[0];
    }
  },
  methods: {},
};
</script>
