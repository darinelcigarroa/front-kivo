<template>
  <q-page class="q-pa-xs">
    <div class="grid-container">
      <div class="title">
        <span class="text-h6 ">Completar solicitud</span>
      </div>
      <q-card class="addresses q-my-md" style="border-radius: 15px">
        <q-card-section class="addresses__content row">
          <div class="addresses__content__location col-10">
            <div class="general-location q-mt-sm">
              <div class="location">
                <q-avatar
                  size="38px"
                  font-size="18px"
                  color="primary"
                  text-color="white"
                  icon="fa-solid fa-location-dot"
                />
                <span class="q-mx-md" style="font-size: 1.2em">Origen:</span>
              </div>
              <div class="location-text">
                <span class="text-justify text-weight-bold"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor</span
                >
              </div>
            </div>
            <div class="general-location q-mt-sm">
              <div class="location">
                <q-avatar
                  size="38px"
                  font-size="18px"
                  color="primary"
                  text-color="white"
                  icon="fa-solid fa-location-crosshairs"
                />
                <span class="q-mx-md" style="font-size: 1.2em">Destino:</span>
              </div>
              <div class="location-text">
                <span class="text-justify text-weight-bold"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor</span
                >
              </div>
            </div>
          </div>
          <div class="location-icon col-2">
            <q-img
              color="primary"
              :src="logo"
              style="height: 4.5em; max-width: 3em"
            />
          </div>
        </q-card-section>
      </q-card>

      <q-card class="type-transport no-shadow">
        <q-card-section>
          <span class="text-h6">Tamaño del vehículo</span>
          <div class="type-transport__content q-mt-md">
            <q-img :src="url" spinner-color="white" style="height: 140px" />
            <q-img :src="url" spinner-color="white" style="height: 140px" />
            <q-img :src="url" spinner-color="white" style="height: 140px" />
            <q-img :src="url" spinner-color="white" style="height: 140px" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import logo from "@/assets/logo-primary.svg";

import { ref } from "vue";
const url = ref("https://picsum.photos/500/300");
</script>

<style scoped>
/* Soluciona el tamaño de las tarjetas */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: 10px;
}

.title {
  margin-top: 15px;
}

.q-card {
  width: 100%;
  /* Hace que el q-card ocupe el 100% del ancho de su contenedor */
  height: auto;
  /* Asegura que la altura se ajuste automáticamente */
}

/* Ajustes de las ubicaciones */
.addresses__content {
  /* background: red; */
  padding: 5px;
}
.addresses__content__location {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.location {
  display: flex;
  align-items: center;
}
.location-text {
  padding-left: 50px;
}
.location-icon {
  display: flex;
  flex-direction: row-reverse;
  padding: 10px;
}
.type-transport__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Siempre dos imágenes por fila */
  gap: 10px; /* Espacio entre las imágenes */
}

.type-transport {
  background: var(--general) !important;
}
</style>
