<template>
  <div class="container d-flex justify-content-between align-items-center">
    <span>Created at: {{article.created_at}}</span>
    <button class="btn btn-primary my-3">Finish</button>
  </div>
  <div class="container p-3 my-3 d-flex justify-content-between align-items-center">
    <div>
      <h2>{{article.title}}</h2>
      <p>{{article.description}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "article",
  data(){
    return {
      article:{},
      id: this.$route.params.id,
    }
  },
  mounted(){
    fetch(`http://127.0.0.1:5173/cars${this.id}`)
      .then(res => res.json())
      .then(data=> this.article = data.data)
      .catch(() => this.article = {
        id:1, 
        created_at:"xx/xx/xx",
        title:"Lorem", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      })
  },
}
</script>

<style>

</style>