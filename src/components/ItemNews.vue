<template>
  <div class="item">
      <router-link class="card" :to="{ name: 'DetailNewsView', params: { title: news.title } }">
        <div class="d-flex">
          <img :src="news.urlToImage" />
          <div class="text-card">
            <div class="author font-weight-bold">{{ news.author }}</div>
            <div class="title font-weight-bold" style="font-size: 18px;">{{ news.title }}</div>
            <div class="desc">{{ news.description }}</div>
            <div class="date-time">{{ news.publishedAt }}</div>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: "ItemNews",
  props: {
    news: Object,
  },
  mounted () {
        this.$store.dispatch('fetchNewsList');
    },
};
</script>

<style>
  img {
    width: 350px;
  }
  .item {
    margin-bottom: 30px;
    align-content: center ;
  }
  .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #e3eee8;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    color: #2c3e50;
    text-decoration: none !important;
    padding: 10px 5px 10px 5px;
    margin: 0 18% 0 18%;
  }
  .d-flex {
    display: flex;
  }
  .font-weight-bold {
    font-weight: 700 !important;
  }
  .text-center {
    text-align: center;
  }
  .card .text-card {
    margin-left: 20px;
  }
  .card .author {
    padding: 25px 0 20px 0;
  }
  .card .date-time {
    padding: 20px 0 25px 0;
  }
</style>
