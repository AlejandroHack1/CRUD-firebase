<template>
  <div>
    <nav
      class="
        navbar navbar-dark
        bg-dark
        justify-content-between
        flex-nowrap flex-row
      "
    >
      <div class="container">
        <a class="navbar-brand float-left">Firebase Vue CRUD</a>
        <ul class="nav navbar-nav flex-nowrap flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/"
              >Agregar Usuario</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">Ver Usuarios</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>