<template>
  <div>
    <!-- POSTS -->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-9" id="postParent">
          <div class="card" id="postContainer">
            <div class="card-header">
              <h4>Latest Posts</h4>
            </div>
            <table class="table table-striped" id="postTable">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="latestPosts">
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center bg-primary text-white mb-3">
            <div class="card-body">
              <h3>Posts</h3>
              <!-- Added ID for JS -->
              <h4 class="display-4" id="postCount">
                <i class="fas fa-pencil-alt"></i> 5
              </h4>
             <router-link to="/posts" class="btn btn-outline-light btn-sm">View</router-link>
            </div>

          </div>
          <div class="card text-center bg-success text-white mb-3">
            <div class="card-body">
              <h3>Categories</h3>
              <h4 class="display-4">
                <i class="fas fa-folder"></i> 4
              </h4>
              <router-link to="/categories" class="btn btn-outline-light btn-sm">
              View
              </router-link>
            </div>
          </div>
          <div class="card text-center bg-warning text-white mb-3">
            <div class="card-body">
              <h3>Users</h3>
              <h4 class="display-4">
                <i class="fas fa-users"></i> 4
              </h4>
              <router-link to="/users" class="btn btn-outline-light btn-sm">View</router-link>
            </div>

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
