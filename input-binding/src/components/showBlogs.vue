<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs"/>
        <div v-for="blog in filteredBlogs" :key="blog.title" class="single-blog">
          <router-link v-bind:to="'/blog/' + blog.id"><h2>{{blog.title | to-uppercase}}</h2></router-link>
          <article>{{blog.content | snippet}}</article>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {
    },
    created() {
        this.$http.get('https://blog-project-131c4-default-rtdb.firebaseio.com/posts.json').then(function(data){

             return data.json();
            // console.log(data.json());
            // this.blogs = data.body.slice(0,10); 
        }).then(function(data){
            var blogsArray = [];
            for(let key in data){
                // console.log(data[key]);
                data[key].id = key
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
            // console.log(blogsArray);
        })
    },
    computed: {
        filteredBlogs:function(){
          return this.blogs.filter((blog) =>{
            return blog.title.match(this.search);
          });
        }
    }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
