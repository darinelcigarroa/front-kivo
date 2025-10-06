<template>
  <q-card class="card" flat bordered>
    <q-card-section
      class="col-12 q-py-sm q-px-sm flex justify-between items-center"
    >
      <span class="text-h5">Información básica</span>
      <q-icon
        @click="openForm"
        class="card__icon"
        color="primary"
        size="1.2em"
        name="fa-solid fa-pen"
      ></q-icon>
    </q-card-section>
    <q-card-section class="row items-stretch q-py-none q-px-sm">
      <div class="col-md-5 col-xs-12">
        <q-img
          class="card__img"
          src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"
        ></q-img>
      </div>
      <div class="col-md-7 col-xs-12 column q-pa-md">
        <div class="card__data">
          <div class="card__data-title">
            <span class="text-weight-bold">Nombre:</span>
          </div>
          <div class="card__data-value"><span>Darinel</span></div>
        </div>
        <q-separator class="q-my-sm" />
        <div class="card__data">
          <div class="card__data-title">
            <span class="text-weight-bold">Apellidos:</span>
          </div>
          <div class="card__data-value">
            <span>Cigarroa de Los Santos</span>
          </div>
        </div>
        <q-separator class="q-my-sm" />
        <div class="card__data">
          <div class="card__data-title">
            <span class="text-weight-bold">Número:</span>
          </div>
          <div class="card__data-value"><span>9612365046</span></div>
        </div>
        <q-separator class="q-my-sm" />
        <div class="card__data">
          <div class="card__data-title">
            <span class="text-weight-bold">Dirección:</span>
          </div>
          <div class="card__data-value">
            <span
              >San Victorio 13, Pedregal de Sta Úrsula, Coyoacán, 04600 Ciudad
              de México, CDMX</span
            >
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
const emit = defineEmits(["openForm"]);

const openForm = () => {
  emit("openForm");
};
</script>
<style scoped>
.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.card__data {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px; /* Añade espacio entre título y valor */
}

.card__icon {
  cursor: pointer;
  background-color: var(--skip-shade-2-light);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__data .card__data-title {
  display: flex;
  align-items: center;
}

.card__data-value {
  display: flex;
  align-items: center;
}
</style>
