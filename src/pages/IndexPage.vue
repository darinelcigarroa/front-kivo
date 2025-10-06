<template>
  <q-page
    class="main-home"
    :class="{ active: isActive, 'color-dinamic': isActive }"
  >
    <div class="text-center q-pt-xl">
      <div>
        <span class="text-h6" style="font-size: 1.8em"
          >Encuentra el <span class="text-primary t">mejor servicio</span> de
          fletes y mudanzas fácilmente</span
        >
      </div>
      <div class="q-mt-sm">
        <span
          class="text-primary cursor-pointer underline text-weight-bolder attention-animate"
          @click="toggleMove"
          >{{ labelButton }}</span
        >
      </div>
    </div>
    <div class="grid-container">
      <div class="left-section" :class="{ 'move-right': isActive }">
        <!-- <img
          src="@/assets/video/global-home-2.gif"
          alt="Animación de logística global"
          style="width: 90%; height: 90%; object-fit: cover"
        /> -->
        <video
          src="@/assets/video/global-home-3.mp4"
          autoplay
          muted
          loop
          playsinline
          style="width: 90%; height: 90%; object-fit: cover"
        ></video>
      </div>
      <div class="right-section" :class="{ 'move-left': isActive }">
        <FormRequestRegister v-if="isActive" />
        <FormRequestService v-else @code-validation="codeValidation" />
      </div>
    </div>
    <q-dialog v-model="showCodeVerification">
      <CodeVerification />
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import FormRequestRegister from "../components/home/FormRequestRegister.vue";
import FormRequestService from "../components/home/FormRequestService.vue";
import CodeVerification from "../components/home/CodeVerification.vue";

let labelButton = "¿Eres un conductor?";
// Estado para controlar la animación IsActive false = cliente, contrario conductor
const isActive = ref(false);
const showCodeVerification = ref(false);
// Función para alternar el estado
const toggleMove = () => {
  isActive.value = !isActive.value;
  if (isActive.value) {
    labelButton = "Quiero un servicio";
  } else {
    labelButton = "¿Eres un conductor?";
  }
};

const codeValidation = () => {
  console.log("codeValidation");
  showCodeVerification.value = true;
};
</script>

<style scoped>
.main-home {
  /* Gradiente por defecto (lado derecho) */
  background: linear-gradient(
    149deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 72%,
    rgba(224, 184, 204, 0.92) 100%
  );
  transition: background 1s ease-in-out;
}

.color-dinamic {
  /* Gradiente cuando está activo (abajo a la izquierda) */
  background: linear-gradient(
    225deg,
    /* Ángulo hacia abajo a la izquierda */ rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 72%,
    rgba(224, 184, 204, 0.92) 100%
  );
}

.underline {
  text-decoration: underline;
  font-size: 1.2em;
}

.grid-container {
  display: grid;
  grid-template-columns: 3fr 2fr;
  height: calc(85vh - 48px);
  position: relative;
  overflow: hidden;
}

.submit {
  font-weight: 400;
  cursor: pointer;
  font-size: 1em;
  background-color: var(--primary);
  border-radius: 10px;
  padding: 10px;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.left-section {
  padding: 20px 60px 0 60px; /* Menos padding arriba */
  display: flex;
  justify-content: center; /* <--- MODIFICADO */
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
  transition: transform 0.8s ease-in-out, clip-path 0.8s ease-in-out;
  height: 100%;
}

.right-section {
  padding: 20px 95px 0 0px; /* Menos padding arriba */
  display: flex;
  justify-content: center; /* <--- MODIFICADO */
  align-items: center;
  flex-direction: column;
  z-index: 2;
  position: relative;
  transition: transform 0.8s ease-in-out, clip-path 0.8s ease-in-out;
  height: 100%;
  margin-left: -70px;
  overflow: hidden;
}

/* El resto de tu CSS permanece igual... */

/* Efecto cuando se activa la clase 'move-right' */
.move-right {
  transform: translateX(40vw);
}

/* Cambios cuando la clase 'move-left' está activa */
.move-left {
  transform: translateX(-45vw);
}

.button-container {
  position: absolute;
  bottom: 4.2%;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.button-container span {
  font-size: 20px;
}

/* Para pantallas más pequeñas */
@media (max-width: 600px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .left-section,
  .right-section {
    width: 100%;
    height: auto;
    margin-left: 0;
    border-radius: 0;
    box-shadow: none;
  }
}

@media (min-width: 601px) and (max-width: 899px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
    .left-section,
    .right-section {
      width: 100%;
      margin-left: 0;
      border-radius: 0;
      box-shadow: none;
    }
  }
}
</style>
