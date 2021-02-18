<template>
  <div>
    <!-- DETAILS -->
  <section id="details">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4>Edit Post</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" class="form-control" value="Post One">
                </div>
                <div class="form-group">
                  <label for="category">Category</label>
                  <select class="form-control">
                    <option selected>Web Development</option>
                    <option>Tech Gadgets</option>
                    <option>Business</option>
                    <option>Health & Wellness</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="image">Upload Image</label>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="image">
                    <label for="image" class="custom-file-label">Choose File</label>
                    <small class="form-text text-muted">Max Size 3Mb</small>
                  </div>
                  <div class="form-group">
                    <label for="body">Body</label>
                    <textarea name="editor1"
                      class="form-control">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusamus maiores dolorum magni eveniet inventore? Inventore, provident odit. Facilis quas quidem sed ut dolor iusto soluta officia non quibusdam numquam magnam est sapiente quam accusamus dolore blanditiis debitis cupiditate optio error, molestias enim illo suscipit? Alias optio id modi quas.</textarea>
                  </div>
                </div>
              </form>
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
  name: "Details"
}
</script>

<style scoped>

</style>