<template>
  <div>
      <!-- ADD POST MODAL -->
  <div class="modal fade" id="addPostModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">Add Post</h5>
          <button class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="postForm">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="postTitle">
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <select class="form-control" id="postCategory">
                <option selected="selected">Choose One...</option>
                <option>Web Development</option>
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
                <textarea name="editor1" class="form-control" id="postBody"></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <!-- Added id for JS -->
          <button class="btn btn-primary" data-dismiss="modal" id="addPostBtn">Add Post</button>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>


<script>
export default {
  name: "AddPostModal"
}
</script>


<style scoped>

</style>