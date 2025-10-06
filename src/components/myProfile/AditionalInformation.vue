<template>
  <q-card class="card row card--direction-column" flat bordered>
    <span class="text-h5 q-mx-md">Evaluaciones</span>

    <div class="card__ultimate-comments q-mt-xs">
      <q-item class="q-mb-xs">
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon color="gradient-2" name="star"></q-icon>
            <q-icon color="gradient-2" name="star"></q-icon>
            <q-icon color="gradient-2" name="star"></q-icon>
          </div>
        </q-item-section>
      </q-item>
      <q-separator class="custom-separator" />

      <q-item class="q-mb-xs">
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon color="gradient-2" name="star"></q-icon>
            <q-icon color="gradient-2" name="star"></q-icon>
            <q-icon color="gradient-2" name="star"></q-icon>
          </div>
        </q-item-section>
      </q-item>
      <q-separator class="custom-separator" />

      <q-item class="q-mb-xs">
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon color="primary" name="star"></q-icon>
            <q-icon color="primary" name="star"></q-icon>
            <q-icon color="primary" name="star"></q-icon>
          </div>
        </q-item-section>
      </q-item>
      <q-separator class="custom-separator" />

      <q-item class="q-mb-xs">
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon color="gradient-2" name="star"></q-icon>
            <q-icon color="gradient-2" name="star"></q-icon>
            <q-icon color="gradient-2" name="star"></q-icon>
          </div>
        </q-item-section>
      </q-item>
      <q-separator class="custom-separator" />

      <div class="card__content-counts q-mt-md">
        <!-- Item 1: Me gusta -->
        <div class="column items-center q-mx-md">
          <q-avatar
            size="2.5em"
            square
            color="gradient-2"
            text-color="white"
            icon="fa-solid fa-heart"
          />
          <div class="text-center q-mt-xs">
            <q-item-label>Me gusta</q-item-label>
            <q-item-label caption>1203</q-item-label>
          </div>
        </div>

        <!-- Item 2: Comentarios -->
        <div class="column items-center q-mx-md">
          <q-avatar
            size="2.5em"
            square
            color="gradient-2"
            text-color="white"
            icon="fa-solid fa-comment"
          />
          <div class="text-center q-mt-xs">
            <q-item-label>Comentarios</q-item-label>
            <q-item-label caption>600</q-item-label>
          </div>
        </div>

        <!-- Item 3: Evaluación -->
        <div class="column items-center q-mx-md">
          <q-avatar
            size="2.5em"
            square
            color="gradient-2"
            text-color="white"
            icon="fa-solid fa-star"
          />
          <div class="text-center q-mt-xs">
            <q-item-label>Evaluación</q-item-label>
            <q-item-label caption>3.5</q-item-label>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<style scoped>
.card--direction-column {
  flex-direction: column;
}

.custom-separator {
  margin: 0px 16px;
}

.card__content-counts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Cambiado para mejor espaciado */
  align-items: center;
  width: 100%;
}

.card__ultimate-comments {
  width: 100%;
  height: 30%;
}

@media (max-width: 1024px) {
  .card__content-counts {
    justify-content: space-between;
  }
}
</style>
