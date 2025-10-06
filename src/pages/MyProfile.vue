<template>
  <q-page class="row col-12">
    <div
      :class="[
        'profile-container',
        { 'profile-container-mini': !isMiniDrawer },
      ]"
    >
      <div class="profile__container__section basic-information">
        <BasicInformation @open-form="openFormDataBasic"></BasicInformation>
      </div>
      <div class="profile__container__section aditional-iformation">
        <AditionalInformation></AditionalInformation>
      </div>
      <div class="profile__container__section vehicle-information">
        <VehicleInformation @open-form="openFormVehicle"></VehicleInformation>
      </div>
      <div class="profile__container__section information-income">
        <CustomCardProfile :directionColumn="true">
          <InformationIncome></InformationIncome>
        </CustomCardProfile>
      </div>
    </div>

    <FormBasicInformation v-model="showFormDataBasic"></FormBasicInformation>

    <FormVehicleInformation
      v-model="showFormVehicleInformation"
    ></FormVehicleInformation>
  </q-page>
</template>

<script setup>
import BasicInformation from "@/components/myProfile/BasicInformation.vue";
import AditionalInformation from "@/components/myProfile/AditionalInformation.vue";
import VehicleInformation from "@/components/myProfile/VehicleInformation.vue";
import InformationIncome from "@/components/myProfile/InformationIncome.vue";
import CustomCardProfile from "@/components/myProfile/utils/CustomCardProfile.vue";
import FormBasicInformation from "@/components/myProfile/utils/FormBasicInformation.vue";
import FormVehicleInformation from "@/components/myProfile/utils/FormVehicleInformation.vue";
import { useDrawerStore } from "@/stores/mainStore/global-navbar-store.js";
import { ref, computed } from "vue";

const showFormDataBasic = ref(false);
const showFormVehicleInformation = ref(false);
const store = useDrawerStore();

const isMiniDrawer = computed(() => {
  return store.isMiniDrawer;
});

const openFormDataBasic = () => {
  showFormDataBasic.value = true;
};

const openFormVehicle = () => {
  console.log("ok");
  showFormVehicleInformation.value = true;
};
</script>

<style scoped>
.profile-container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    "basicInformation"
    "aditionalInformation"
    "vehicleInformation"
    "informationIncome";
  gap: 0px;
  padding: 0px;
}
.card {
  height: 100%;
  min-width: 100%;
  padding: 10px;
  border-radius: 20px;
  background: var(--card);
  border: 0.1px solid #d6d6d6e1;
  /* display: flex; */
}

.profile__container__section {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.basic-information {
  grid-area: basicInformation;
}

.aditional-iformation {
  grid-area: aditionalInformation;
}

.vehicle-information {
  grid-area: vehicleInformation;
}

.information-income {
  grid-area: informationIncome;
}

@media (min-width: 576px) {
  .profile-container {
    grid-template-areas:
      "basicInformation"
      "aditionalInformation"
      "vehicleInformation"
      "informationIncome";
  }
  .card {
    padding: 0px;
  }
}
/* Estilo para pantallas grandes */
@media (min-width: 768px) {
  .profile-container {
    grid-template-columns: 1fr 1fr; /* Dos columnas, cada una ocupando el 50% del ancho */
    grid-template-rows: auto auto; /* Dos filas automáticas */
    grid-template-areas:
      "basicInformation aditionalInformation"
      "vehicleInformation informationIncome";
  }
  .card {
    padding: 10px;
  }
}
@media (min-width: 768px) and (max-width: 1360px) {
  .profile-container-mini {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
      "basicInformation"
      "aditionalInformation"
      "vehicleInformation"
      "informationIncome";
  }
}
</style>
