<template>
  <div class="h-full">
    <n-dynamic-tags @create="handleCreate" />
    <n-tabs type="line" animated>
      <n-tab-pane name="oasis" tab="Oasis" class="h-full">
        <request.vue />
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles"> <request.vue /> </n-tab-pane>
      <n-tab-pane name="jay chou" tab="Jay Chou"> Qilixiang </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import request from "./request.vue";

export default defineComponent({
  setup() {
    return {
      handleCreate: (label: string) => {
        return (
          {
            0: "GET ",
          }[Math.floor(Math.random() * 1)] + label
        );
      },
    };
  },
});
</script>
