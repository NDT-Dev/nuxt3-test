<template>
  <!-- full này -->
  <div class="flex flex-row">
    <!-- màn hình bên trái -->
    <div class="flex flex-col w-1/6 h-screen bg-slate-100">
      <slidebar />
    </div>
    <!-- màn hình bên phải -->
    <div class="container">
      <div><dynamic /></div>
      <div class="flex flex-col w-full p-2">
        <request />
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineComponent } from "vue";
import { ref } from "vue";
import dynamic from "./dynamic.vue";
import request from "./request.vue";
import slidebar from "./slidebar.vue";

// import { CashOutline as CashIcon } from "@vicons/ionicons5";

let id = 0;
const newTodo = ref("This collection is empty ");
const todos = ref([
  { id: id++, text: "This collection is empty" },
  { id: id++, text: "This collection is empty" },
  { id: id++, text: "This collection is empty" },
]);

function addTodo() {
  todos.value.push({ text: newTodo.value });
  newTodo.value = "";
}
</script>
