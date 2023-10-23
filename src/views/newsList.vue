<template>
  <div 
    class="container p-3 my-3 border d-flex justify-content-between align-items-center rounded" 
    v-for="article in articles" :key="article.created_at">
    <div>
      <h2>{{article.title}}</h2>
      <p>{{article.small_description}}</p>
    </div>
    <div class="d-flex flex-column align-items-center">
      <span>Created at: {{article.created_at}}</span>
      <span>{{article.status}}</span>
      <router-link class="btn btn-primary my-3" :to="{ name: 'article', params: { id: article.id }}">Read more</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'newlist',
  data(){
    return {
      articles:Array,
    }
  },
  mounted(){
    fetch(`http://127.0.0.1:5173/cars`)
      .then(res => res.json())
      .then(data=> this.articles = data.data)
      .catch(() => this.articles = [
        {id:1, title:"Lorem", small_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit", status:"Unread", created_at:"xx/xx/xx"},
        {id:2, title:"Lorem", small_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit", status:"Unread", created_at:"xx/xx/xx"}
      ])
  },
}
</script>

<style>

</style>