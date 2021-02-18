<template>
  <div>
    <!-- PROFILE -->
  <section id="profile">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="card">
            <div class="card-header">
              <h4>Edit Profile</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" value="Chris Mabey">
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" value="chris@email.com">
                </div>
                <!-- <div class="form-group">
                  <label for="bio">Bio</label>
                  <textarea
                    name="editor1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit libero illum voluptatibus similique laboriosam nesciunt, saepe optio sed amet facilis quis sit ab omnis error eligendi ad aspernatur officiis sequi nisi facere earum. Asperiores voluptas ut magni consectetur quibusdam quia!</textarea>
                </div> -->
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <h3>Your Avatar</h3>
          <img src="img/Image.jpeg" alt="avatar" class="d-block img-fluid mb-3">
          <button class="btn btn-primary btn-block">Edit Image</button>
          <button class="btn btn-danger btn-block">Delete Image</button>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>


