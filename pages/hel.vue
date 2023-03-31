<script setup>
import { ref } from "vue";
const qweq = ref("");
const handleGet = async () => {
  const { data: test } = await useFetch("https://fakestoreapi.com/products", {});
  qweq.value = test.value;
  console.log(test.value);
};

const handlePost = async () => {
  const { data, error, pending, refresh } = await useFetch(
    "https://fakestoreapi.com/products",
    {
      method: "POST",
      headers: {
        Authorization: "",
        "x-amz-acl": acl || "public-read",
        "Content-Encoding": encoding,
        "Content-Type": content_type,
      },
      body: {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      },
});
</script>
<template>
  <button @click="handleGet">aaa</button>
  <div>{{ qweq }}</div>
</template>
