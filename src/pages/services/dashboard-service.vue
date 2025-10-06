<template>
  <q-page class="q-pa-md" style="background-color: #f8f9fa">
    <div class="row q-col-gutter-lg q-mb-lg">
      <div class="col-12 col-sm-6 col-md-3">
        <q-card flat bordered class="full-height">
          <q-card-section>
            <div class="row justify-between items-start">
              <div class="text-grey-10">Customers</div>
              <q-avatar
                size="40px"
                font-size="24px"
                color="skip-shade-1-light"
                text-color="skip-shade-1"
                icon="people_alt"
              />
            </div>
            <div class="text-h4 text-weight-bolder q-mt-sm">1.456</div>
            <div class="text-positive row items-center q-mt-sm">
              <q-icon name="arrow_upward" size="xs" />
              <span class="text-body2 q-ml-xs">+6.5% Since last week</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <q-card flat bordered class="full-height">
          <q-card-section>
            <div class="row justify-between items-start">
              <div class="text-grey-10">Revenue</div>
              <q-avatar
                size="40px"
                font-size="24px"
                color="spot-6-light"
                text-color="spot-6"
                icon="monetization_on"
              />
            </div>
            <div class="text-h4 text-weight-bolder q-mt-sm">$3.345</div>
            <div class="text-negative row items-center q-mt-sm">
              <q-icon name="arrow_downward" size="xs" />
              <span class="text-body2 q-ml-xs">-0.10% Since last week</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <q-card flat bordered class="full-height">
          <q-card-section>
            <div class="row justify-between items-start">
              <div class="text-grey-10">Profit</div>
              <q-avatar
                size="40px"
                font-size="24px"
                color="gradient-3-light"
                text-color="gradient-3"
                icon="inventory"
              />
            </div>
            <div class="text-h4 text-weight-bolder q-mt-sm">60%</div>
            <div class="text-negative row items-center q-mt-sm">
              <q-icon name="arrow_downward" size="xs" />
              <span class="text-body2 q-ml-xs">-0.2% Since last week</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <q-card flat bordered class="full-height">
          <q-card-section>
            <div class="row justify-between items-start">
              <div class="text-grey-10">Invoices</div>
              <q-avatar
                size="40px"
                font-size="24px"
                color="indigo-1"
                text-color="indigo-5"
                icon="receipt_long"
              />
            </div>
            <div class="text-h4 text-weight-bolder q-mt-sm">1.135</div>
            <div class="row items-center q-mt-sm" style="color: #6366f1">
              <q-icon name="arrow_upward" size="xs" />
              <span class="text-body2 q-ml-xs">+11.5% Since last week</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-col-gutter-lg q-mb-lg">
      <div class="col-12 col-lg-5">
        <q-card flat bordered>
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="text-h6">Invoice Statistics</div>
              <q-btn flat round icon="more_horiz" color="grey-7" />
            </div>
          </q-card-section>
          <q-card-section class="row items-center justify-around">
            <div class="col-6 q-gutter-y-md">
              <div>
                <div class="row items-center">
                  <q-badge rounded color="gradient-1" class="q-mr-sm" />
                  <span class="text-grey-7">Total Paid</span>
                </div>
                <div class="text-h6 text-weight-bold q-ml-md">234</div>
              </div>
              <div>
                <div class="row items-center">
                  <q-badge rounded color="gradient-2" class="q-mr-sm" />
                  <span class="text-grey-7">Total Overdue</span>
                </div>
                <div class="text-h6 text-weight-bold q-ml-md">514</div>
              </div>
              <div>
                <div class="row items-center">
                  <q-badge rounded color="gradient-3" class="q-mr-sm" />
                  <span class="text-grey-7">Total Unpaid</span>
                </div>
                <div class="text-h6 text-weight-bold q-ml-md">345</div>
              </div>
            </div>
            <div class="col-6 flex justify-center q-mb-md">
              <apexchart
                type="donut"
                height="215"
                :options="invoiceChart.options"
                :series="invoiceChart.series"
              ></apexchart>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-lg-7">
        <q-card flat bordered>
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="text-h6">Sales Analytics</div>
              <q-btn flat round icon="more_horiz" color="grey-7" />
            </div>
          </q-card-section>
          <q-card-section>
            <apexchart
              type="area"
              height="215"
              :options="salesChart.options"
              :series="salesChart.series"
            ></apexchart>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <q-card flat bordered>
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="text-h6">Recent Invoices</div>
              <!-- Reemplazado el botón por un campo de búsqueda -->
              <q-input
                outlined
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
                style="width: 300px"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <q-table
              :rows="rows"
              :columns="columns"
              row-key="id"
              flat
              :rows-per-page-options="[10, 50, 100]"
              :filter="filter"
            >
              <!-- Plantilla para la columna 'name' -->
              <template v-slot:body-cell-name="props">
                <q-td :props="props">
                  <div class="row items-center no-wrap">
                    <q-avatar size="32px" class="q-mr-md">
                      <!-- Corregido: ahora es props.row.avatar -->
                      <img :src="props.row.avatar" />
                    </q-avatar>
                    <!-- Corregido: ahora es props.row.name -->
                    <span>{{ props.row.name }}</span>
                  </div>
                </q-td>
              </template>

              <!-- Plantilla para la columna 'contact' -->
              <template v-slot:body-cell-contact="props">
                <q-td :props="props">
                  <!-- Corregido: ahora es props.row.contact -->
                  <span>{{ props.row.contact }}</span>
                </q-td>
              </template>

              <!-- Plantilla para la columna 'vehicle' -->
              <template v-slot:body-cell-vehicle="props">
                <q-td :props="props">
                  <!-- Corregido: ahora es props.row.vehicle -->
                  <span>{{ props.row.vehicle }}</span>
                </q-td>
              </template>

              <template v-slot:body-cell-status="props">
                <q-td :props="props">
                  <q-chip
                    :color="getStatusColor(props.value).bg"
                    :text-color="getStatusColor(props.value).text"
                    size="sm"
                    class="text-weight-bold"
                  >
                    {{ props.value }}
                  </q-chip>
                </q-td>
              </template>
              <template v-slot:body-cell-price="props">
                <q-td :props="props" class="text-weight-bold">
                  ${{ props.value }}
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { colors } from "quasar";

const filter = ref("");

// --- DATOS Y CONFIGURACIÓN DE LA GRÁFICA DE VENTAS (LINEA) ---
const salesChart = {
  series: [
    {
      name: "Sales",
      data: [
        4000, 3000, 5000, 4500, 6000, 8500, 7000, 6000, 5500, 6500, 7500, 8000,
      ],
    },
  ],
  options: {
    chart: {
      height: 250,
      type: "area",
      toolbar: { show: false },
    },
    colors: ["#7a1b4a"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Des",
      ],
      labels: { style: { colors: "#A0AEC0" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { colors: "#A0AEC0" },
        formatter: (val) => `${val / 1000}k`,
      },
    },
    grid: {
      borderColor: "#E2E8F0",
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
    },
    tooltip: { enabled: true },
    markers: {
      size: 5,
      colors: "#fff",
      strokeColors: colors.getPaletteColor("spot-2"),
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
  },
};

// --- DATOS Y CONFIGURACIÓN DE LA GRÁFICA DE FACTURAS (DONA) ---
const invoiceChart = ref({
  series: [234, 514, 345], // Paid, Overdue, Unpaid
  options: {
    chart: { type: "donut" },
    labels: ["Total Paid", "Total Overdue", "Total Unpaid"],
    colors: [
      colors.getPaletteColor("gradient-1"),
      colors.getPaletteColor("gradient-2"),
      colors.getPaletteColor("gradient-3"),
    ],
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              fontSize: "22px",
              fontWeight: 600,
              color: "#373d3f",
            },
            value: {
              show: true,
              fontSize: "16px",
              color: "#A0AEC0",
              offsetY: 8,
              formatter: function (val) {
                return val;
              },
            },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
  },
});

// --- DATOS Y CONFIGURACIÓN DE LA TABLA ---
const columns = [
  {
    name: "name",
    label: "Nombre",
    field: "name",
    align: "left",
    sortable: true,
  },
  {
    name: "contact",
    label: "Contacto",
    field: "contact",
    align: "left",
    sortable: true,
  },
  {
    name: "vehicle",
    label: "Vehiculo",
    field: "vehicle",
    align: "left",
    sortable: true,
  },
  {
    name: "orderDate",
    label: "Order Date",
    field: "orderDate",
    align: "left",
    sortable: true,
  },
  {
    name: "status",
    label: "Status",
    field: "status",
    align: "center",
    sortable: true,
  },
  {
    name: "price",
    label: "Price",
    field: "price",
    align: "left",
    sortable: true,
  },
];

const rows = ref([
  {
    id: 1,
    name: "Eren Yaeger",
    avatar: "https://cdn.quasar.dev/img/avatar1.jpg",
    contact: "eren.y@example.com",
    vehicle: "Van",
    orderDate: "21/07/2022 08:21",
    status: "Paid",
    price: 101,
  },
  {
    id: 2,
    name: "Levi Ackerman",
    avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
    contact: "levi.a@example.com",
    vehicle: "Truck",
    orderDate: "21/07/2022 08:21",
    status: "Pending",
    price: 144,
  },
  {
    id: 3,
    name: "Rainer Brown",
    avatar: "https://cdn.quasar.dev/img/avatar3.jpg",
    contact: "rainer.b@example.com",
    vehicle: "Car",
    orderDate: "21/07/2022 08:21",
    status: "Paid",
    price: 121,
  },
  {
    id: 4,
    name: "Historia Reiss",
    avatar: "https://cdn.quasar.dev/img/avatar4.jpg",
    contact: "historia.r@example.com",
    vehicle: "MiniVan",
    orderDate: "21/07/2022 08:21",
    status: "Overdue",
    price: 300,
  },
]);

// --- FUNCIÓN AUXILIAR PARA LOS COLORES DEL ESTADO ---
const getStatusColor = (status) => {
  switch (status) {
    case "Paid":
      return { bg: "green-1", text: "green-8" };
    case "Pending":
      return { bg: "yellow-1", text: "yellow-8" };
    case "Overdue":
      return { bg: "red-1", text: "red-8" };
    default:
      return { bg: "grey-2", text: "grey-8" };
  }
};
</script>

<style scoped>
.q-card {
  border-radius: 8px;
}

.charts-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  margin: 0 auto;
  align-items: stretch;
}

/* Media query para pantallas pequeñas (móviles) */
@media (max-width: 768px) {
  .charts-container {
    /* En pantallas pequeñas, los gráficos se apilan uno sobre otro */
    grid-template-columns: 1fr;
  }
}

/* Nuevo estilo para el contenedor del gráfico de dona */
.donut-chart-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Estilo para la leyenda del gráfico de dona */
.legend-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Estilo para cada ítem de la leyenda */
.legend-item {
  display: flex;
  align-items: center;
}

/* Estilo para el contenedor del gráfico dentro de la tarjeta */
.chart-wrapper {
  flex-grow: 1;
  min-width: 0; /* Necesario para que flexbox no se desborde */
}
</style>
