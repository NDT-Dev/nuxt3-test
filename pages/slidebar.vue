<template>
  <div class="flex">
    <div class="flex-1 h-10">
      <form @submit.prevent="addTodo()">
        <button class="border-zinc-50 w-10 h-10 border-none hover:bg-slate-300" @click="">
          <n-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-width="32"
                d="M256 112v288"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-width="32"
                d="M400 256H112"
              ></path>
            </svg>
          </n-icon>
        </button>
      </form>
    </div>
    <div class="shrink-0 h-10 w-57">
      <div class="flex justify-center">
        <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
          <input
            type="search"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 shadow"
            id="exampleSearch2"
            placeholder="Tìm Kiếm"
          />
          <label
            for="exampleSearch2"
            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 hover:bg-slate-300"
            >
              <path
                d="M4.464 3.162A2 2 0 016.28 2h7.44a2 2 0 011.816 1.162l1.154 2.5c.067.145.115.291.145.438A3.508 3.508 0 0016 6H4c-.288 0-.568.035-.835.1.03-.147.078-.293.145-.438l1.154-2.5z"
              />
              <path
                fill-rule="evenodd"
                d="M2 9.5a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm13.24 0a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V9.5zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V9.5a.75.75 0 00-.75-.75h-.01zM2 15a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm13.24 0a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
    <div class="flex-1 h-10">
      <n-dropdown
        :options="options"
        placement="bottom-start"
        trigger="click"
        @select="handleSelect"
      >
        <n-button>
          <n-icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <circle cx="256" cy="256" r="48" fill="currentColor"></circle>
              <circle cx="416" cy="256" r="48" fill="currentColor"></circle>
              <circle cx="96" cy="256" r="48" fill="currentColor"></circle></svg
          ></n-icon>
        </n-button>
      </n-dropdown>
    </div>
  </div>
  <!-- list collection   -->
  <ul class="list-none">
    <li v-for="todo in todos" :key="todo.id" class="list-none px-0 list-outside">
      <button class="w-full boder-none border-slate-300 hover:border-indigo-300">
        <n-collapse>
          <template #header-extra>
            <button class="border-none hover:bg-slate-200 rounded-full bg-none"></button
            ><n-icon size="20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
              >
                <circle cx="256" cy="256" r="48" fill="currentColor"></circle>
                <circle cx="416" cy="256" r="48" fill="currentColor"></circle>
                <circle cx="96" cy="256" r="48" fill="currentColor"></circle>
              </svg>
            </n-icon>
          </template>
          <n-collapse-item title="Collection" name="2">
            <div class="">
              {{ todo.text }}
            </div>
          </n-collapse-item>
        </n-collapse>
      </button>
    </li>
  </ul>
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
