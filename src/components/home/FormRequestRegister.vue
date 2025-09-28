<template>
  <div class="container">
    <q-form
      id="signupForm"
      @submit="onSubmit"
      @reset="onReset"
      class="form text-center"
    >
      <span class="text-h5">Quiero ser Conductor</span>

      <q-input class="inputBox col-12" v-model="name" label="Nombre">
        <template v-slot:prepend>
          <div class="icon-container">
            <q-icon
              color="accent"
              class="q-px-sm iconForm"
              name="fa-solid fa-user"
            ></q-icon>
          </div>
        </template>
      </q-input>

      <q-input
        class="inputBox col-12"
        v-model="lastname"
        label="Apellido paterno"
      >
        <template v-slot:prepend>
          <div class="icon-container">
            <q-icon
              color="accent"
              class="q-px-sm iconForm"
              name="fas fa-user-tie"
            ></q-icon>
          </div>
        </template>
      </q-input>

      <q-input
        class="inputBox col-12"
        v-model="lastname2"
        label="Apellido materno"
      >
        <template v-slot:prepend>
          <div class="icon-container">
            <q-icon
              color="accent"
              class="q-px-sm iconForm"
              name="fas fa-user-friends"
            ></q-icon>
          </div>
        </template>
      </q-input>

      <q-select
        class="inputBox col-12"
        label="Mi ubicación"
        v-model="location"
        :options="locationOptions"
        use-input
        @filter="filterDestinations"
      >
        <template v-slot:prepend>
          <div class="icon-container">
            <q-icon
              color="accent"
              class="q-px-sm iconForm"
              name="my_location"
            ></q-icon>
          </div>
        </template>
      </q-select>

      <q-input
        class="inputBox col-12"
        v-model="phone"
        label="Número de teléfono"
      >
        <template v-slot:prepend>
          <div class="icon-container">
            <q-icon
              color="accent"
              class="q-px-sm iconForm"
              name="smartphone"
            ></q-icon>
          </div>
        </template>
      </q-input>

      <div class="col-12 flex justify-center q-pa-xs">
        <input class="submit text-white" type="submit" value="Registrarme" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import * as HomeService from "src/services/home/HomePageServices.js";

const serviceDate = ref(null);
const location = ref("");
const originPlaceholder = ref("Ciudad, colonia, calle, número de casa");
const phone = ref("");
const locationOptions = ref([]);

function onReset() {
  serviceDate.value = null;
}

function filterDestinations(val, update) {
  update(async () => {
    if (val === "") {
      locationOptions.value = [];
      return;
    }
    try {
      locationOptions.value = await HomeService.getPlacePredictions(val);
    } catch (error) {
      console.log(error);
    }
  });
}

watch(location, (newValue) => {
  if (newValue === null) {
    originPlaceholder.value = "Ciudad, colonia, calle, número de casa";
  } else {
    originPlaceholder.value = "";
  }
});
</script>

<style scoped>
.container {
  /* background: #666666; */
  width: 95%;
  padding: 0px;
  display: flex;
  justify-content: end;
  align-items: center;
}

.form {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.q-field__control {
  font-size: 1.2em;
}

.inputBox {
  display: flex;
  align-items: center;
  position: relative;
}

.icon-container {
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 8px;
}

.icon-container::after {
  content: "";
  height: 30px;
  /* Ajusta el tamaño según el diseño */
  width: 2px;
  background-color: var(--primary);
  /* Color de la línea separadora */
  position: absolute;
  right: 0;
}

.q-field__input {
  font-size: 1.1em;
  color: #666666;
  padding-left: 12px;
}

.q-field__control {
  padding-left: 20px;
}

.q-field__label {
  font-size: 1.1em;
  color: #b9b9b9;
  /* Placeholder gris suave */
}

.submit {
  font-weight: 400;
  cursor: pointer;
  min-width: 70%;
  font-size: 1.2em;
  background-color: var(--primary);
  border-radius: 10px;
  padding: 10px;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

@media only screen and (min-width: 300px) and (max-width: 600px) {
  .form h4 {
    font-size: 1.4em;
  }

  .inputBox .q-field__label {
    font-size: 0.7em !important;
  }
}
</style>
