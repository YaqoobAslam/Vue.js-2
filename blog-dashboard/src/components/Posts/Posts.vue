<template>
  <div>
    
  <!-- POSTS -->
  <section id="posts">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4>All Posts</h4>
            </div>
            <!-- Added ID for JS -->
            <table class="table table-striped">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="allPosts">
              </tbody>
            </table>
            <!-- PAGINATION -->
            <nav class="ml-4">
              <ul class="pagination">
                <li class="page-item disabled">
                  <router-link to="#" class="page-link">Previous</router-link>
                </li>
                <li class="page-item active">
                  <router-link to="#" class="page-link">1</router-link>
                </li>
                <li class="page-item">
                  <router-link to="#" class="page-link">2</router-link>
                </li>
                <li class="page-item">
                  <router-link to="#" class="page-link">3</router-link>
                </li>
                <li class="page-item">
                  <router-link to="#" class="page-link">Next</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>

  </div>
</template>

<script>
export default {
  name: "Posts"
}
</script>
