<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="(val) => emit('update:modelValue', val)"
    persistent
  >
    <q-card class="form-card scroll">
      <q-btn
        style="z-index: 1"
        icon="close"
        color="grey-2"
        size="sm"
        text-color="black"
        class="absolute-top-right q-mr-md q-mt-md cursor-pointer"
        round
        dense
        @click="emit('update:modelValue', false)"
      >
      </q-btn>
      <q-card-section class="text-center q-pt-lg">
        <div class="text-h5 text-weight-bold q-mb-sm">Registrar Vehículo</div>
        <div class="text-subtitle1 text-grey-8">
          Completa los datos para añadir un nuevo vehículo.
        </div>
      </q-card-section>

      <!-- Image Carousel and Upload -->
      <q-card-section class="q-px-lg">
        <q-carousel
          ref="carouselRef"
          v-model="slide"
          animated
          navigation
          infinite
          height="220px"
          class="bg-white rounded-borders"
        >
          <q-carousel-slide
            v-for="(photo, index) in vehiclePhotos"
            :key="index"
            :name="index"
            class="q-pa-sm"
          >
            <q-img
              :src="photo.src"
              :ratio="16 / 9"
              fit="contain"
              class="bg-grey-2 rounded-borders full-height"
              loading="lazy"
              decoding="async"
            ></q-img>
            <div class="absolute-bottom text-center">
              <q-btn
                icon="delete"
                color="accent"
                text-color="white"
                round
                dense
                size="0.80em"
                class="q-mt-md"
                @click="removeImage(index)"
              />
            </div>
          </q-carousel-slide>

          <!-- Diapositiva para añadir más fotos, siempre visible -->
          <q-carousel-slide
            name="add"
            class="column flex-center cursor-pointer bg-grey-2"
            @click="triggerFileUpload"
          >
            <q-icon name="add_a_photo" size="xl" color="grey-7" />
            <div class="text-grey-8 q-mt-sm">Añadir más fotos</div>
          </q-carousel-slide>

          <!-- Controles -->
          <template #control>
            <q-carousel-control
              position="left"
              :offset="[12, 12]"
              class="column justify-center"
            >
              <q-btn
                round
                dense
                color="grey-3"
                text-color="dark"
                icon="arrow_left"
                @click="carouselRef?.previous()"
              />
            </q-carousel-control>
            <q-carousel-control
              position="right"
              :offset="[12, 12]"
              class="column justify-center"
            >
              <q-btn
                round
                dense
                color="grey-3"
                text-color="dark"
                icon="arrow_right"
                @click="carouselRef?.next()"
              />
            </q-carousel-control>
          </template>
        </q-carousel>

        <q-file
          v-model="files"
          class="hidden"
          multiple
          accept="image/*"
          @update:model-value="handleFileChange"
          ref="fileInput"
        />

        <q-file
          v-model="files"
          class="hidden"
          multiple
          accept="image/*"
          @update:model-value="handleFileChange"
          ref="fileInput"
        />
      </q-card-section>

      <!-- Formulario -->
      <q-card-section class="q-px-lg">
        <q-form @submit="onSubmit">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-lg-6">
              <q-select
                outlined
                v-model="vehicle.type"
                :options="vehicleTypeOptions"
                label="Tipo de vehículo"
                class="custom-input small-select"
              >
                <template #prepend>
                  <q-icon name="directions_car" color="grey-7" />
                </template>
              </q-select>
            </div>

            <div class="col-12 col-lg-6">
              <q-input
                outlined
                v-model="vehicle.brand"
                label="Marca"
                class="custom-input small-select"
              >
                <template #prepend>
                  <q-icon name="local_offer" color="grey-7" />
                </template>
              </q-input>
            </div>

            <div class="col-12 col-lg-6">
              <q-input
                outlined
                v-model="vehicle.model"
                label="Modelo"
                class="custom-input small-select"
              >
                <template #prepend>
                  <q-icon name="rv_hookup" color="grey-7" />
                </template>
              </q-input>
            </div>

            <div class="col-12 col-lg-6">
              <q-input
                outlined
                v-model="vehicle.license"
                label="Licencia"
                class="custom-input small-select"
              >
                <template #prepend>
                  <q-icon name="badge" color="grey-7" />
                </template>
              </q-input>
            </div>

            <div class="col-12 col-lg-6">
              <q-file
                outlined
                v-model="licensePhoto"
                label="Foto de la licencia"
                class="custom-input small-select"
                accept="image/*"
              >
                <template #prepend>
                  <q-icon name="photo_camera" color="grey-7" />
                </template>
              </q-file>
            </div>

            <div class="col-12 col-lg-6">
              <q-input
                outlined
                v-model="vehicle.plateNumber"
                label="Número de placa"
                class="custom-input small-select"
              >
                <template #prepend>
                  <q-icon name="pin" color="grey-7" />
                </template>
              </q-input>
            </div>
          </div>
        </q-form>
      </q-card-section>

      <!-- Acciones -->
      <q-card-actions class="q-px-lg q-py-md">
        <q-btn
          label="Guardar"
          type="submit"
          color="primary"
          class="text-weight-medium full-width"
          size="lg"
          dense
          unelevated
          style="background-color: #7a1b4a !important; border-radius: 8px"
          @click="onSubmit"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";

// --- Props y Emits para el v-model ---
defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const carouselRef = ref(null);
const slide = ref("add");
const fileInput = ref(null);
const files = ref(null);
const vehiclePhotos = ref([]); // CORREGIDO: Debe ser un array
const licensePhoto = ref(null); // AÑADIDO: Para la foto de la licencia

// --- AÑADIDO: Datos del formulario y opciones ---
const vehicle = ref({
  type: null,
  brand: "",
  model: "",
  license: "",
  plateNumber: "",
});

const vehicleTypeOptions = ref([
  "Coche",
  "Motocicleta",
  "Camioneta",
  "Furgoneta",
]);
// --- FIN DE LO AÑADIDO ---

const triggerFileUpload = () => fileInput.value?.pickFiles();

const handleFileChange = (newFiles) => {
  for (const file of newFiles) {
    const url = URL.createObjectURL(file);
    vehiclePhotos.value.push({ src: url, _url: url });
  }
  files.value = null;
  if (vehiclePhotos.value.length > 0)
    slide.value = vehiclePhotos.value.length - 1;
};

const removeImage = (index) => {
  const item = vehiclePhotos.value[index];
  if (item?._url) URL.revokeObjectURL(item._url);
  vehiclePhotos.value.splice(index, 1);
  if (vehiclePhotos.value.length === 0) slide.value = "add";
  else if (Number(slide.value) >= vehiclePhotos.value.length) {
    slide.value = vehiclePhotos.value.length - 1;
  }
};
</script>

<style scoped>
.form-card {
  width: 100%;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.custom-input .q-field__control {
  border-radius: 8px;
}
.custom-input .q-field__control:before {
  border: none !important;
}

.hidden {
  display: none;
}

/* Imagen del carrusel: con QImg, el ratio fija el alto y evita CLS */
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Select compacto */
.small-select :deep(.q-field__control) {
  height: 48px;
  min-height: 48px;
}
.small-select :deep(.q-field__native),
.small-select :deep(.q-field__prepend) {
  align-self: center;
}
</style>
