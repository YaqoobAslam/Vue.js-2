<template>
  <div>
    
  <!-- ACTIONS -->
  <section id="actions" class="py-4 mb-4 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <router-link to="/" class="btn btn-light btn-block">
            <i class="fas fa-arrow-left"></i> Back To Dashboard
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/" class="btn btn-success btn-block">
            <i class="fas fa-check"></i> Save Changes
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/" class="btn btn-danger btn-block">
            <i class="fas fa-trash"></i> Delete Post
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

