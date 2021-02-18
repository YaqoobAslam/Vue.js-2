<template>
  <div>
      <!-- ACTIONS -->
  <section id="actions" class="py-4 mb-4 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <router-link to="#" class="btn btn-primary btn-block" data-toggle="modal" data-target="#addPostModal">
            <i class="fas fa-plus"></i> Add Post
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="#" class="btn btn-success btn-block" data-toggle="modal" data-target="#addCategoryModal">
            <i class="fas fa-plus"></i> Add Category
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="#" class="btn btn-warning btn-block" data-toggle="modal" data-target="#addUserModal">
            <i class="fas fa-plus"></i> Add User
          </router-link>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
<script>
export default {
  name: "Action"
}
</script>

