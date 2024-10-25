<template>
  <q-card class="my-card-service-details">
    <q-card-section
      style="display: flex; justify-content: center; align-items: center"
    >
      <div class="my-card-service-details__content-img">
        <q-img
          class="my-card-service-details__img"
          :src="`https://ui-avatars.com/api/?name=${client.avatar}&size=128&background=8B3B62&color=fff`"
        />
      </div>
    </q-card-section>
    <q-card-section class="q-mt-sm">
      <q-expansion-item v-model="expandedDetails">
        <template v-slot:header>
          <q-item-section avatar>
            <q-icon color="accent" name="fa-solid fa-layer-group" />
          </q-item-section>

          <q-item-section style="font-size: 1rem; padding: 0px">
            Detalles del servicio
          </q-item-section>
        </template>
        <q-card>
          <q-card-section style="padding-left: 35px">
            <q-item-label class="row">
              <q-icon
                class="q-px-xs icon-detail-service"
                size="xs"
                name="my_location"
              ></q-icon>
              <div class="info">
                <span class="info-span">Origen: </span>
                <span class="q-ml-xs data-span">{{ client.placeOrigin }}</span>
              </div>
            </q-item-label>
            <q-item-label class="row">
              <q-icon
                class="q-px-xs icon-detail-service"
                size="xs"
                name="place"
              ></q-icon>
              <div class="info">
                <span class="info-span">Destino: </span>
                <span class="q-ml-xs data-span">{{
                  client.placeDestination
                }}</span>
              </div>
            </q-item-label>
            <q-item-label class="row">
              <q-icon
                class="q-px-xs icon-detail-service"
                size="xs"
                name="fa-solid fa-car"
              />
              <div class="info">
                <span class="info-span">Tipo de Transporte: </span>
                <span class="q-ml-xs data-span">{{
                  client.transport_type
                }}</span>
              </div>
            </q-item-label>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <q-expansion-item v-model="expandedArticles">
        <template v-slot:header>
          <q-item-section avatar>
            <q-icon color="accent" name="fa-solid fa-list-check" />
          </q-item-section>

          <q-item-section style="font-size: 1rem; padding: 0px">
            Lista de los artículos
          </q-item-section>
        </template>

        <q-card>
          <q-card-section style="padding-left: 35px">
            <q-chip
              v-for="(article, index) in client.detailsArticles"
              :key="index"
              color="grey-4"
              text-color="dark"
            >
              <q-avatar color="primary" text-color="white"
                ><span>{{ article.number }}</span></q-avatar
              >
              <div class="ellipsis">
                <span>{{ article.name }}</span>
              </div>
            </q-chip>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card-section>
    <q-card-actions class="justify-around">
      <q-btn
        @click="showMapService"
        round
        padding="7px 7px"
        icon="place"
        color="primary"
      >
        <q-tooltip class="bg-accent">Ver ruta del servicio</q-tooltip>
      </q-btn>
      <q-btn
        style="background: var(--gold); color: var(--letter)"
        flat
        rounded
        label="Confirmar servicio"
      />
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { ref } from "vue";
import { useMapStore } from "@/stores/google-map/map-store";

const mapStore = useMapStore();
const props = defineProps(["client"]);
const expandedDetails = ref(true);
const expandedArticles = ref(false);
const client = props.client;

const showMapService = () => {
  mapStore.showMap();
};
</script>

<style scoped>
.my-card-service-details {
  border-radius: 10px;
  min-width: 35%;
  padding: 15px;
}
.my-card-service-details__content-img {
  width: 50%;
}
.my-card-service-details__img {
  height: 15em;
  border-radius: 15px;
}
.icon-detail-service {
  color: var(--primary);
}
.info-span {
  font-size: 15px;
  font-weight: bold;
  color: var(--dark);
}
.q-item__label {
  display: flex;
  align-items: center;
}
.data-span {
  font-size: 15px;
}
</style>
