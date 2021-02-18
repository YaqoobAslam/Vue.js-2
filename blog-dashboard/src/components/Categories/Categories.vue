<template>
  <div>
     <!-- CATEGORIES -->
  <section id="categories">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4>Latest Categories</h4>
            </div>
            <table class="table table-striped">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Web Development</td>
                  <td>Nov 12 2019</td>
                  <td>
                   <router-link to="/details" class="btn btn-secondary">
                      <i class="fas fa-angle-double-right"></i> Details
                   </router-link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Tech Gadgets</td>
                  <td>Nov 13 2019</td>
                  <td>
                    <router-link to="/details" class="btn btn-secondary">
                      <i class="fas fa-angle-double-right"></i> Details
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Business</td>
                  <td>Nov 15 2019</td>
                  <td>
                    <router-link to="/details" class="btn btn-secondary">
                      <i class="fas fa-angle-double-right"></i> Details
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Health & Wellness</td>
                  <td>Nov 19 2019</td>
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
  name: "Categories"
}
</script>

<style scoped>

</style>