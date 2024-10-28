<template>
  <q-page class="q-pa-xs">
    <div class="grid-container">
      <div class="title">
        <span class="text-h6">Completar solicitud</span>
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
              style="height: 4em; max-width: 2.3em"
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
        <q-card-section>
          <div class="row justify-between">
            <span class="text-h6">Lista de articulos</span>
            <q-icon size="sm" name="fa-solid fa-ellipsis" />
          </div>
          <q-list bordered>
            <q-item
              v-for="article in articles"
              :key="article.id"
              class="q-my-sm"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-avatar rounded color="primary" text-color="white">
                  <img :src="box" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ article.name }}</q-item-label>
                <q-item-label caption lines="1">
                  Cantidad: {{ article.number }}</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-btn
                  round
                  size="sm"
                  color="primary"
                  @click="deleteArticle"
                  icon="fa-solid fa-trash"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import logo from "@/assets/logo-primary.svg";
import box from "@/assets/box.svg";

import { ref } from "vue";
const url = ref("https://picsum.photos/500/300");

const articles = Array.from({ length: 20 }, (_, i) => ({
  name: `Artículo ${i + 1}`,
  number: i + 1,
}));
const deleteArticle = () => {
  console.log("deleteArticle");
};
</script>

<style scoped>
/* Soluciona el tamaño de las tarjetas */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
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
.location .q-avatar:hover {
  background: aqua;
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
