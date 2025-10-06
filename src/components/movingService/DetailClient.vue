<template>
  <q-card class="my-card shadow-2" bordered>
    <q-card-section class="card-section-top">
      <q-avatar
        icon="fa-solid fa-lock"
        color="gradient-2"
        text-color="white"
        size="lg"
        class="floating-avatar"
      />
      <div class="header-content">
        <div class="text-h6 text-weight-bold">{{ client.name }}</div>
        <q-chip
          color="teal-1"
          text-color="teal"
          class="price-service"
          square
          :label="formatMoney(client.price)"
        />
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-item-label class="row items-center q-mb-sm">
        <q-icon color="accent" class="q-mr-sm" size="xs" name="my_location" />
        <div>
          <span class="text-weight-bold">Origen: </span>
          <span>{{ client.placeOrigin }}</span>
        </div>
      </q-item-label>
      <q-item-label class="row items-center q-mb-sm">
        <q-icon color="accent" class="q-mr-sm" size="xs" name="place" />
        <div>
          <span class="text-weight-bold">Destino: </span>
          <span>{{ client.placeDestination }}</span>
        </div>
      </q-item-label>
      <q-item-label class="row items-center">
        <q-icon
          color="accent"
          class="q-mr-sm"
          size="xs"
          name="fa-solid fa-truck"
        />
        <div>
          <span class="text-weight-bold">Transporte: </span>
          <span>{{ client.transport_type }}</span>
        </div>
      </q-item-label>
    </q-card-section>

    <q-card-actions class="q-py-md">
      <q-btn
        class="text-weight-medium"
        flat
        color="gradient-2"
        label="Ver detalles"
        @click="serviceDetail"
        icon-right="arrow_forward"
      />
    </q-card-actions>

    <q-dialog v-model="showServiceDetail">
      <ServiceDetailsComponent :client="client"></ServiceDetailsComponent>
    </q-dialog>
  </q-card>
</template>

<script setup>
import { ref, toRef } from "vue";
import { Money } from "@/utils/utils.js";
import ServiceDetailsComponent from "@/components/movingService/ServiceDetails.vue";

const props = defineProps(["client"]);

const client = toRef(props.client);
const showServiceDetail = ref(false);

const formatMoney = (money) => {
  const newMoney = Money(money);
  const symbol = newMoney[0];
  const value = newMoney.slice(1).trim();
  return `${symbol} ${value}`;
};
const serviceDetail = () => {
  showServiceDetail.value = true;
};
</script>

<style scoped>
.my-card {
  width: 100%;
  border-radius: 20px;
  margin: 10px;
  position: relative;
  overflow: visible;
  padding-top: 30px;
}

.floating-avatar {
  position: absolute;
  top: -48px;
  left: 20px;
  z-index: 1; /* Correcto, como lo teníamos */
}

.card-section-top {
  position: relative;
  padding-top: 30px; /* Espacio para el avatar flotante */
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Cambiado de 'center' a 'flex-start' */
  width: 100%;
}

.price-service {
  /* Ya no necesita position: absolute */
  position: absolute;
  background: var(--gold);
  color: var(--dark);
  font-weight: 700;
  top: -15px;
  right: 10px;
}
.q-chip--square {
  border-radius: 6px !important;
}
</style>
