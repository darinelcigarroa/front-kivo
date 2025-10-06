<template>
  <q-page class="flex flex-center main-home row col-12">
    <transition
      appear
      enter-active-class="animated zoomIn slower"
      leave-active-class="animated fadeInDown slower"
    >
      <div ref="scrollArea" class="data-client-detail col-12">
        <q-infinite-scroll
          @load="onLoad"
          :offset="40"
          :scroll-target="scrollArea"
        >
          <div
            :class="['content-card', { 'content-card-mini': !isMiniDrawer }]"
          >
            <DetailClient
              v-for="client in clients"
              :key="client.id"
              :client="client"
            >
            </DetailClient>
          </div>
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots color="primary" size="2.5em"></q-spinner-dots>
            </div>
          </template>
        </q-infinite-scroll>
      </div>
    </transition>
  </q-page>
</template>

<script setup>
import DetailClient from "@/components/movingService/DetailClient.vue";
import { useDrawerStore } from "@/stores/mainStore/global-navbar-store.js";
import { ref, computed, onMounted } from "vue";

defineOptions({
  name: "HomeSearchService",
});
const store = useDrawerStore();
const clients = ref([
  {
    id: 1,
    name: "Lorenzo Cigarroa de los Santos",
    price: "850",
    transport_type: "Van",
    avatar: "Lorenzo Cigarroa",
    placeOrigin: "Madrid, España",
    placeDestination: "Barcelona, España",
    detailsArticles: [
      { name: "Cajas de libros", number: 10 },
      { name: "Bicicleta", number: 2 },
      { name: "Equipo de camping", number: 3 },
      { name: "Cajas de cocina", number: 4 },
      { name: "Lámparas", number: 2 },
      { name: "Ropa de temporada", number: 8 },
      { name: "Televisor", number: 1 },
      { name: "Equipo de sonido", number: 1 },
      { name: "Cajas de decoración", number: 5 },
      { name: "Juguetes", number: 3 },
      { name: "Muebles pequeños", number: 3 },
      { name: "Cajas de herramientas", number: 2 },
      { name: "Artículos deportivos", number: 4 },
      { name: "Ropa de cama", number: 3 },
      { name: "Calzado", number: 5 },
      { name: "Libros", number: 20 },
      { name: "Electrodomésticos pequeños", number: 3 },
      { name: "Artículos de baño", number: 4 },
      { name: "Maletas", number: 3 },
      { name: "Mochilas", number: 2 },
    ],
  },
  {
    id: 2,
    name: "Mirta Ocaña Lopez",
    price: "1300",
    transport_type: "Truck",
    avatar: "Mirta Ocaña",
    placeOrigin: "Buenos Aires, Argentina",
    placeDestination: "Mendoza, Argentina",
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({
      name: `Artículo ${i + 1}`,
      number: i + 1,
    })),
  },
  {
    id: 3,
    name: "Felipe Gutierrez Nola",
    price: "1100",
    transport_type: "MiniVan",
    avatar: "Felipe Gutierrez",
    placeOrigin: "Lima, Perú",
    placeDestination: "Cuzco, Perú",
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({
      name: `Producto ${i + 1}`,
      number: 2,
    })),
  },
  {
    id: 4,
    name: "Carla Karian Mendez Agrup",
    price: "1600",
    transport_type: "Flatbed",
    avatar: "Carla Karian",
    placeOrigin: "México D.F., México",
    placeDestination: "Guadalajara, México",
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({
      name: `Ítem ${i + 1}`,
      number: 3,
    })),
  },
  {
    id: 5,
    name: "Sergio Ramos Verllin",
    price: "1800",
    transport_type: "RefrigeratedTruck",
    avatar: "Sergio Ramos",
    placeOrigin: "Santiago, Chile",
    placeDestination: "Valparaíso, Chile",
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({
      name: `Carga ${i + 1}`,
      number: 4,
    })),
  },
  {
    id: 6,
    name: "Ana Perez Lopez",
    price: "1400",
    transport_type: "BoxTruck",
    avatar: "Ana Perez",
    placeOrigin: "Bogotá, Colombia",
    placeDestination: "Medellín, Colombia",
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({
      name: `Equipo ${i + 1}`,
      number: 5,
    })),
  },
  {
    id: 7,
    name: "Jorge Ortega Paez",
    price: "950",
    transport_type: "SUV",
    avatar: "Jorge Ortega",
    placeOrigin: "Quito, Ecuador",
    placeDestination: "Guayaquil, Ecuador",
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({
      name: `Material ${i + 1}`,
      number: 6,
    })),
  },
  {
    id: 8,
    name: "Lucía Vargas",
    price: "2000",
    transport_type: "Cargo Plane",
    avatar: "Lucía Vargas",
    placeOrigin: "Caracas, Venezuela",
    placeDestination: "Maracaibo, Venezuela",
    detailsArticles: Array.from({ length: 20 }, (_, i) => ({
      name: `Paquete ${i + 1}`,
      number: 7,
    })),
  },
]);
const scrollArea = ref(null);

const isMiniDrawer = computed(() => {
  return store.isMiniDrawer;
});

onMounted(() => {
  scrollArea.value = document.querySelector(".data-client-detail");
});

const onLoad = (index, done) => {
  setTimeout(() => {
    clients.value.push(
      {
        id: 1,
        name: "Lorenzo Cigarroa de los Santos",
        price: "850",
        transport_type: "Van",
        avatar: "Lorenzo Cigarroa",
        placeOrigin: "Madrid, España",
        placeDestination: "Barcelona, España",
        detailsArticles: ["Cajas de libros", "Bicicleta"],
      },
      {
        id: 1,
        name: "Lorenzo Cigarroa de los Santos",
        price: "850",
        transport_type: "Van",
        avatar: "Lorenzo Cigarroa",
        placeOrigin: "Madrid, España",
        placeDestination: "Barcelona, España",
        detailsArticles: ["Cajas de libros", "Bicicleta"],
      },
      {
        id: 2,
        name: "María Rodríguez",
        price: "750",
        transport_type: "Carro",
        avatar: "María Rodrígue",
        placeOrigin: "Sevilla, España",
        placeDestination: "Valencia, España",
        detailsArticles: ["Ropa", "Electrónicos"],
      },
      {
        id: 3,
        name: "Carlos Pérez",
        price: "950",
        transport_type: "Camión",
        avatar: "Carlos Pérez",
        placeOrigin: "Barcelona, España",
        placeDestination: "Madrid, España",
        detailsArticles: ["Muebles", "Electrodomésticos"],
      }
    );

    done();
  }, 2000);
};
</script>

<style scoped>
.data-client-detail {
  max-height: 90vh;
  width: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--primary) white;
}

.content-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 16px;
  padding: 16px;
  /* He añadido un relleno inferior más generoso */
  padding-bottom: 100px;
  place-items: center;
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(100%);
  font-size: 24px;
  color: var(--letter);
  background: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: scrollIndicator 1.5s infinite;
  z-index: 1000;
}

@media ((min-width: 0px) and (max-width: 575px)) {
  .content-card {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 576px) {
  .content-card-mini {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 0px) and (max-width: 1300px) {
  .content-card {
    gap: 20px !important;
  }
}
</style>
