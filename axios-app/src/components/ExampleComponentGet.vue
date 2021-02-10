
<template>
  <div>
    <ul v-if="posts && posts.length">
      <li v-for="post in posts" :key="post">
        <p>Title: {{post.title}}</p>
        <p>Body: {{post.body}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error in errors" :key="error">
        <p>{{error.message}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      posts: [],
      errors: []
    }
  },
  //Fetches posts when the compoent is created
  created(){
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response =>{
      //JSON responses are automatically parsed.
      this.posts = response.data;

    })
    .catch(e =>{
      this.errors.push(e)
    })
  }

}
</script>


<style scoped>

</style>
