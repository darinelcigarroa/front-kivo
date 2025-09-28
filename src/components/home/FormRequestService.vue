<template>
  <div class="container">
    <q-form
      id="signupForm"
      @submit="onSubmit"
      @reset="onReset"
      class="form q-pa-lg text-center shadow-box"
    >
      <span class="text-h5">Quiero un servicio</span>
      <q-select
        class="inputBox col-12"
        label="¿Lugar de origen?"
        v-model="placeOrigin"
        :options="locationOptions"
        use-input
        @filter="filterDestinations"
        :placeholder="originPlaceholder"
        :dense="dense"
        transition-show="scale"
        transition-hide="scale"
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
        <template v-if="placeOrigin" v-slot:append>
          <q-icon
            color="accent"
            name="cancel"
            @click.stop.prevent="placeOrigin = null"
            class="cursor-pointer"
          ></q-icon>
        </template>
      </q-select>
      <q-select
        class="inputBox col-12"
        label="¿Lugar de destino?"
        v-model="placeDestination"
        :options="locationOptions"
        use-input
        @filter="filterDestinations"
        :placeholder="destinationPlaceholder"
        :dense="dense"
        transition-show="scale"
        transition-hide="scale"
      >
        <template v-slot:prepend>
          <div class="icon-container">
            <q-icon
              color="accent"
              class="q-px-sm iconForm"
              name="place"
            ></q-icon>
          </div>
        </template>
        <template v-if="placeDestination" v-slot:append>
          <q-icon
            color="accent"
            name="cancel"
            @click.stop.prevent="placeDestination = null"
            class="cursor-pointer"
          ></q-icon>
        </template>
      </q-select>
      <q-input
        v-model="serviceDate"
        class="inputBox col-12"
        label="Fecha"
        placeholder="Ingresa la fecha del servicio"
        @click="$refs.qstartDateProxy.show()"
      >
        <template v-slot:prepend>
          <div class="icon-container">
            <q-icon color="accent" name="event" class="q-px-sm iconForm">
              <q-popup-proxy
                ref="qstartDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  color="primary"
                  text-color="white"
                  v-model="serviceDate"
                  mask="YYYY-MM-DD"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Cerrar"
                      color="accent"
                      flat
                    ></q-btn>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </div>
        </template>
      </q-input>
      <q-input
        v-model="time"
        class="inputBox col-12"
        mask="time"
        label="Hora"
        placeholder="Ingresa la hora del servicio"
        @click="$refs.qstartTimeProxy.show()"
      >
        <template v-slot:prepend>
          <div class="icon-container">
            <q-icon
              color="accent"
              name="access_time"
              class="q-px-sm iconForm cursor-pointer"
            >
              <q-popup-proxy
                ref="qstartTimeProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time color="primary" v-model="time" :format24h="true">
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Cerrar"
                      color="accent"
                      flat
                    ></q-btn>
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </div>
        </template>
      </q-input>
      <q-input
        class="inputBox col-12"
        v-model="phone"
        mask="(52) ### - ### - ####"
        unmasked-value
        label="Tu número de teléfono"
        placeholder="Número de telefono personal"
        :dense="dense"
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
        <input class="submit text-white" type="submit" value="Continuar" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import * as HomeService from "src/services/home/HomePageServices.js";

const serviceDate = ref(null);
const placeOrigin = ref(null);
const placeDestination = ref("");
const originPlaceholder = ref("Calle, ciudad, estado");
const destinationPlaceholder = ref("Calle, ciudad, estado");
const locationOptions = ref([]);
const phone = ref("");
const dense = ref(false);
const time = ref("");

const emit = defineEmits(["codeValidation"]);

const onReset = () => {
  serviceDate.value = null;
};

const filterDestinations = (val, update) => {
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
};

const onSubmit = () => {
  console.log("onSubmit");
  emit("codeValidation");
};

watch(placeDestination, (newValue) => {
  if (newValue === null) {
    destinationPlaceholder.value = "Ciudad, colonia, calle, número de casa";
  } else {
    destinationPlaceholder.value = "";
  }
});

watch(placeOrigin, (newValue) => {
  if (newValue === null) {
    originPlaceholder.value = "Ciudad, colonia, calle, número de casa";
  } else {
    originPlaceholder.value = "";
  }
});
</script>

<style scoped>
.container[data-v-ac55b90c] {
  /* background: violet; */
  width: 95%;
  padding: 0px;
  display: flex;
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
