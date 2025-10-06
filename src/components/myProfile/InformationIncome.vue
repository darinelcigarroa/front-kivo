<template>
  <q-card class="card card--direction-column" flat bordered>
    <q-card-section
      class="col-12 q-pt-none q-px-md flex justify-between items-center"
    >
      <span class="text-h5">Últimos dos meses</span>
    </q-card-section>
    <q-card-section class="card__summary col-12 q-py-none q-px-none">
      <q-item>
        <q-item-section side>
          <q-avatar
            size="2.5em"
            color="primary"
            text-color="white"
            icon="fa-solid fa-wallet"
          >
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Ingresos este mes</q-item-label>
          <q-item-label caption>$3,423.00</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <div class="card__content-chart col-12"></div>
  </q-card>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ApexCharts from "apexcharts";
import { colors } from "quasar";

let chart = null;
const chartOptions = ref({
  chart: {
    type: "area",
    width: "100%",
    height: "80%",
    tollbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 360,
        options: {
          chart: {
            width: 100,
            height: 500,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
  colors: [
    colors.getPaletteColor("matching-gradient-2"),
    colors.getPaletteColor("matching-gradient-3"),
  ],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
    curve: "smooth",
  },
  markers: {
    size: 5,
    colors: ["#000"],
    strokeWidth: 1,
    hover: {
      size: 8,
    },
  },
  xaxis: {
    categories: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  series: [
    {
      name: "Mayo",
      data: [1000, 1200, 900, 1600],
    },
    {
      name: "Junio",
      data: [1100, 1400, 1300, 0],
    },
  ],
});

onMounted(() => {
  const chartContainer = document.querySelector(".card__content-chart");

  const observer = new ResizeObserver(() => {
    if (chart) {
      chart.destroy();
      chart = new ApexCharts(chartContainer, chartOptions.value);
      chart.render();
    }
  });

  observer.observe(chartContainer);

  // Inicializamos el gráfico
  chart = new ApexCharts(chartContainer, chartOptions.value);
  chart.render();
});

// Destruimos el gráfico al desmontar el componente
onBeforeUnmount(() => {
  if (chart) {
    chart.destroy();
    chart = null;
  }
});
</script>

<style scoped>
.card--direction-column {
  flex-direction: column;
}

@media (max-width: 600px) {
  .card__content-chart {
    height: 300px;
  }
}

@media (min-width: 601px) and (max-width: 899px) {
  .card__content-chart {
    height: 400px;
  }
}
</style>
