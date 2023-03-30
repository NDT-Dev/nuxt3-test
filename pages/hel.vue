<script setup>
const { data } = await useAsyncData("count", () =>
  $fetch("https://fakestoreapi.com/products")
);
</script>
<template>
  {{ data }}

  <!-- <li v-for="item in data">
    {{ item.id }}
    {{ item.title }}
    {{ item.price }}
    {{ item.description }}
    {{ item.category }}
    {{ item.image }}
    {{ item.rating }}
  </li> -->
  <!-- <div>
    {{ data[0].id }}
  </div>

  <div>
    {{ data[0].title }}
  </div>
</template>

  <div>
    {{ data[0].price }}
  </div>

  <div>
    {{ data[0].description }}
  </div>

  <div>
    {{ data[0].category }}
  </div>

  <div>
    {{ data[0].image }}
  </div>

  <div>
    {{ data[0].rating }}
  </div> -->
</template>
