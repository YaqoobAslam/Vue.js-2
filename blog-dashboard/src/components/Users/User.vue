<template>
  <div>
      <!-- USERS -->
  <section id="users">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4>Latest Users</h4>
            </div>
            <table class="table table-striped">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>john.doe@example.com</td>
                  <td>
                    <router-link to="/details" class="btn btn-secondary">
                      <i class="fas fa-angle-double-right"></i> Details
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Harry White</td>
                  <td>harry@email.com</td>
                  <td>
                    <router-link to="/details" class="btn btn-secondary">
                      <i class="fas fa-angle-double-right"></i> Details
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mary Johnson</td>
                  <td>mary@website.com</td>
                  <td>
                    <router-link to="/details" class="btn btn-secondary">
                      <i class="fas fa-angle-double-right"></i> Details
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>
