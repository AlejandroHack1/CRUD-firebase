<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Agregar Usuario</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="user.name"
            required
          />
        </div>
        <div class="form-group">
          <label>Correo</label>
          <input
            type="email"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>
        <div class="form-group">
          <label>Celular</label>
          <input
            type="text"
            class="form-control"
            v-model="user.phone"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-primary btn-block">Agregar Usuario</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { db } from "../firebaseDb";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("users")
        .add(this.user)
        .then(() => {
          alert("User successfully created!");
          this.user.name = "";
          this.user.email = "";
          this.user.phone = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>