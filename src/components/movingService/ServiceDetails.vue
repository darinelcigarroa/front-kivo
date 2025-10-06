<template>
  <q-card class="service-details-card">
    <!-- Botón de cierre añadido -->
    <q-btn
      unelevated
      icon="close"
      color="grey-3"
      text-color="black"
      round
      dense
      v-close-popup
      class="close-btn"
    />

    <q-card-section class="text-center q-pt-lg">
      <div style="position: relative; display: inline-block">
        <q-avatar
          size="72px"
          color="primary"
          text-color="white"
          font-size="32px"
        >
          {{ getInitials(client.name) }}
        </q-avatar>
        <q-btn
          round
          color="white"
          text-color="primary"
          icon="fa-solid fa-location-dot"
          size="sm"
          style="position: absolute; bottom: -5px; right: -5px"
          @click="showOnMap"
        >
          <q-tooltip>Ver ruta en el mapa</q-tooltip>
        </q-btn>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-list separator>
        <q-expansion-item
          default-opened
          header-class="text-weight-medium text-primary"
          class="q-mb-sm"
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-icon color="primary" name="fa-solid fa-layer-group" />
            </q-item-section>

            <q-item-section class="text-black text-weight-medium">
              Detalles del servicio
            </q-item-section>
          </template>

          <div class="q-pa-md q-gutter-y-sm">
            <div class="row items-center text-grey-8">
              <q-icon
                color="primary"
                name="my_location"
                class="q-mr-md"
                size="sm"
              />
              <div>
                <span class="text-weight-bold">Origen:</span>
                {{ client.placeOrigin }}
              </div>
            </div>
            <div class="row items-center text-grey-8">
              <q-icon color="primary" name="place" class="q-mr-md" size="sm" />
              <div>
                <span class="text-weight-bold">Destino:</span>
                {{ client.placeDestination }}
              </div>
            </div>
            <div class="row items-center text-grey-8">
              <q-icon
                color="primary"
                name="local_shipping"
                class="q-mr-md"
                size="sm"
              />
              <div>
                <span class="text-weight-bold">Tipo de Transporte:</span>
                {{ client.transport_type }}
              </div>
            </div>
          </div>
        </q-expansion-item>

        <q-expansion-item header-class="text-weight-medium text-primary">
          <template v-slot:header>
            <q-item-section avatar>
              <q-icon color="primary" name="fa-regular fa-rectangle-list" />
            </q-item-section>

            <q-item-section class="text-black text-weight-medium">
              Lista de los artículos
            </q-item-section>
          </template>
          <div class="q-pa-md">
            <q-chip
              v-for="(article, index) in client.detailsArticles"
              :key="index"
              color="grey-3"
              text-color="dark"
              class="q-ma-xs"
            >
              <q-avatar color="primary" text-color="white" size="28px">
                {{ article.number }}
              </q-avatar>
              <div class="ellipsis">{{ article.name }}</div>
            </q-chip>
          </div>
        </q-expansion-item>
      </q-list>
    </q-card-section>

    <q-card-actions class="flex justify-center">
      <q-btn
        unelevated
        rounded
        color="primary"
        label="Confirmar Servicio"
        class="text-weight-medium"
        icon="check_circle"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { toRef } from "vue";

const props = defineProps({
  client: {
    type: Object,
    required: true,
  },
});

const client = toRef(props, "client");

const getInitials = (name) => {
  if (!name) return "";
  const nameParts = name.split(" ");
  if (nameParts.length > 1) {
    return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const showOnMap = () => {
  if (!client.value.placeOrigin || !client.value.placeDestination) {
    // Opcional: manejar el caso en que no haya origen o destino
    return;
  }
  const origin = encodeURIComponent(client.value.placeOrigin);
  const destination = encodeURIComponent(client.value.placeDestination);
  const url = `https://www.google.com/maps/dir/${origin}/${destination}`;
  window.open(url, "_blank");
};
</script>

<style scoped>
.service-details-card {
  width: 100%;
  border-radius: 16px;
  background-color: #f8f9fa;
}

.q-expansion-item {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
.service-details-card {
  width: 100%;
  border-radius: 16px;
  background-color: #f8f9fa;
  position: relative; /* Necesario para posicionar el botón de cierre */
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 15px;
  z-index: 1;
}
</style>
