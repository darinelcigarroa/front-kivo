<template>
  <q-card class="card" flat bordered>
    <q-card-section class="col-12 q-pt-none q-px-md flex justify-between">
      <span class="text-h5 q-ml-xs q-my-sm">Perfil del vehiculo</span>
      <q-icon
        @click="openForm"
        class="card__icon flex align-center"
        color="primary"
        size="1.2em"
        name="fa-solid fa-pen"
      ></q-icon>
    </q-card-section>
    <q-card-section class="row q-pa-none">
      <div class="col-md-6 col-xs-12">
        <q-carousel
          height="100%"
          swipeable
          animated
          arrows
          navigation
          infinite
          autoplay
          v-model="slide"
          v-model:fullscreen="fullscreen"
          :class="{ 'card--fullscreen-carousel': fullscreen }"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://images.unsplash.com/photo-1529369627985-112c94382yg"
          ></q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="https://images.unsplash.com/photo-1518368273159-87a4efdc654f?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></q-carousel-slide>
          <q-carousel-slide
            :name="3"
            img-src="https://images.unsplash.com/photo-1518560998531-087edcb36c13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></q-carousel-slide>
          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                color="primary"
                text-color="white"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              ></q-btn>
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
      <div class="col-md-6 col-xs-12 q-pa-lg rounded-borders">
        <div class="card__data">
          <div class="card__data-title">
            <span class="text-weight-bold">Tipo de Vehículo:</span>
          </div>
          <div class="card__data-value">
            <span>Camioneta doble cabina alv</span>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="card__data">
          <div class="card__data-title">
            <span class="text-weight-bold">Marca:</span>
          </div>
          <div class="card__data-value">
            <span>Cigarroa de Los Santos</span>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="card__data">
          <div class="card__data-title">
            <span class="text-weight-bold">Modelo:</span>
          </div>
          <div class="card__data-value"><span>Corolla</span></div>
        </div>
        <q-separator></q-separator>
        <div class="card__data">
          <div class="card__data-title">
            <span class="text-weight-bold">Licencia:</span>
          </div>
          <div class="card__data-value">
            <span>XTR-9074</span>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="card__data">
          <div class="card__data-title">
            <span class="text-weight-bold">Número de placa:</span>
          </div>
          <div class="card__data-value">
            <span>3C3C3C3C4FG567891</span>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { ref } from "vue";

const slide = ref(1);
const fullscreen = ref(false);

const emit = defineEmits(["openForm"]);

const openForm = () => {
  emit("openForm");
};
</script>
<style scoped>
.card__data {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3px;
}

.card__data .card__data-title {
  display: flex;
  align-items: center;
  min-width: 25%;
}

.card__icon {
  cursor: pointer;
}

.card__header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__data-value {
  display: flex;
  align-items: center;
  min-width: 65%;
}

@media (max-width: 1024px) {
  .q-carousel {
    height: 30vh !important;
  }
}

@media (max-width: 1024px) {
  .card--fullscreen-carousel {
    height: 100vh !important;
  }
}
</style>
