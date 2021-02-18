<template>
  <div>
    <!--Navbar -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
    <div class="container">
      <router-link to="/" class="navbar-brand">Admin Panel</router-link>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse"><span
          class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav">
          <li class="nav-item px-2">
            <router-link to="/" class="nav-link active">Dashboard</router-link>
          </li>
          <li class="nav-item px-2">
          
            <router-link to="/posts" class="nav-link">Posts</router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/categories" class="nav-link">Categories</router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/users" class="nav-link">Users</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown mr-3">
            <router-link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
              <i class="fas fa-user"></i> Welcome Chris
            </router-link>
            <div class="dropdown-menu">
              <router-link to="/profile" class="dropdown-item">
                <i class="fas fa-user-circle"></i> Profile
              </router-link>
              <router-link to="/settings" class="dropdown-item">
                <i class="fas fa-cog"></i> Settings
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <i class="fas fa-user-times"></i> Logout
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
  </div>
</template>


<script>
export default {
  name: "Navbar"
}
</script>
