<template>
  <q-card class="my-card shadow-7">
    <transition appear enter-active-class="animated zoomIn delay-1s">
      <div v-if="showMainINformation" class="content-img">
        <q-img
          :src="`https://ui-avatars.com/api/?name=${client.avatar}&size=128&background=8B3B62&color=fff`"
          class="card-image"
        />
      </div>
    </transition>
    <transition appear enter-active-class="animated zoomIn delay-1s">
      <div v-if="showMainINformation" class="text-content">
        <div class="text-date">26 December 2019</div>
        <div class="text-title" style="color: var(--primary)">
          {{ client.name }}
        </div>
        <q-item-section class="text-description">
          <q-item-label class="row">
            <q-icon
              color="accent"
              class="q-px-xs"
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
              color="accent"
              class="q-px-xs"
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
              color="accent"
              class="q-px-xs"
              size="xs"
              name="fa-solid fa-car"
            />
            <div class="info">
              <span class="info-span">Tipo de Transporte: </span>
              <span class="q-ml-xs data-span">{{ client.transport_type }}</span>
            </div>
          </q-item-label>
          <div class="changes-tab"></div>
        </q-item-section>
        <q-item-section class="content-action">
          <div>
            <q-btn
              class="price-service"
              rounded
              :label="formatMoney(client.price)"
            />
          </div>
          <div>
            <q-btn
              style="font-size: 14px"
              class="confirm-service"
              color="primary"
              rounded
              label="Detalles"
              @click="serviceDetail"
            />
          </div>
        </q-item-section>
      </div>
    </transition>
    <transition appear enter-active-class="animated zoomIn delay-1s">
      <div v-if="!showMainINformation" class="text-content-details">
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
      </div>
    </transition>
    <div class="changes-section">
      <div
        @click="peopleInformation('mainInformation')"
        :class="{ active: showMainINformation }"
      ></div>
      <div
        @click="peopleInformation('')"
        :class="{ active: showSecondaryInformation }"
      >
        <q-tooltip
          class="bg-grey-4 text-black text-weight-medium"
          transition-show="scale"
          transition-hide="scale"
        >
          <span>Lista de articulos</span>
        </q-tooltip>
      </div>
    </div>
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
const showMainINformation = ref(true);
const showSecondaryInformation = ref(false);
const showServiceDetail = ref(false);

const formatMoney = (money) => {
  const newMoney = Money(money);
  const symbol = newMoney[0];
  const value = newMoney.slice(1).trim();
  return `${symbol} ${value}`;
};
const peopleInformation = (section) => {
  if (section == "mainInformation") {
    showMainINformation.value = true;
    showSecondaryInformation.value = false;
    return;
  }
  showMainINformation.value = false;
  showSecondaryInformation.value = true;
  return;
};
const serviceDetail = () => {
  showServiceDetail.value = true;
};
</script>

<style scoped>
.my-card {
  display: flex;
  width: 80%;
  padding: 20px 0px 20px 0px;
  margin: 15px 10px 17px 112px;
  border-radius: 20px;
  height: 19em;
}

.content-img {
  position: relative;
  width: 29%;
  height: auto;
  flex-shrink: 0;
  /* background: palegreen; */
  transform: translateX(-80px);
}

.content-img:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.8;
  -webkit-box-shadow: 10px 10px 21px -1px rgba(122, 27, 74, 0.6);
  -moz-box-shadow: 10px 10px 21px -1px rgba(122, 27, 74, 0.6);
  box-shadow: 10px 10px 21px -1px rgba(122, 27, 74, 0.6);
}

.content-img .q-img {
  width: 120%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  transition: all 0.3s;
}

.text-content {
  text-align: justify;
  padding: 5px;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  flex-direction: column;
  /* background: bisque; */
}

.text-content-details {
  padding: 5px;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--primary) white;
}

.text-date {
  font-size: 0.8rem;
  color: rgba(22, 22, 22, 0.7);
  margin-bottom: 5px;
}

.text-title {
  font-size: 1.2rem;
  /* font-weight: bold; */
  margin-bottom: 10px;
}

.text-description {
  font-size: 0.9rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.q-item__label {
  margin: 3px;
}

.read-more-button {
  background: var(--primary);
  color: white;
  border-radius: 50px;
}

.info-span {
  font-size: 15px;
  font-weight: bold;
  color: var(--dark);
}

.price-service {
  cursor: default;
  background: var(--gold);
  font-weight: 700;
  transition: transform 0.3s ease, background-color 0.3s ease;
  color: var(--letter);
}
.price-service:hover {
  transform: scale(1.05);
}

.changes-section {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.changes-section div {
  background: #a3a2a2;
  margin: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.7s ease;
}

.changes-section .active {
  /* border-radius: 5px !important; */
  width: 17px;
  height: 17px;
  background: var(--primary) !important;
  /* transition: 5s ease; */
}

.q-chip span {
  font-size: 13px;
}
.confirm-service {
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.confirm-service:hover {
  transform: scale(1.08);
}
.content-action {
  /* background: #0f8021; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
}
.price-service {
  margin: 1px;
}
.confirm-service {
  margin: 1px;
}

@media ((min-width: 0px) and (max-width: 884px)) {
  .content-action {
    /* background: saddlebrown; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content-action {
    /* background: saddlebrown; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .my-card {
    padding: 10px !important;
  }
  .price-service {
    margin: 5px;
  }
  .confirm-service {
    margin: 5px;
  }
}
@media (max-width: 1300px) {
  .q-item__label .info {
    display: flex;
    flex-direction: column;
  }

  .info-span {
    margin: 3px;
  }

  .data-span {
    margin: 3px;
  }

  .content-img {
    width: 40%;
    transform: translateX(0px);
  }

  .text-content {
    padding: 18px;
  }

  .my-card {
    height: 100%;
    width: 95%;
    margin: 5px;
    padding: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .text-title {
    font-size: 1.1rem;
  }

  .changes-section {
    flex-direction: initial;
  }
}
</style>
