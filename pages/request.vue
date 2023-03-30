<template>
  <div class="flex flex-row justify-center text-center mx-auto">
    <div class="w-full">
      <n-select
        v-model:value="selectedValue"
        filterable
        placeholder="POST"
        :options="options"
      />
    </div>
    <div>
      <input
        type="text"
        id="simple-search"
        class="flex flex-row h-7 w-200 border border-slate-300 hover:border-indigo-300"
        placeholder="Search"
        required
      />
    </div>
    <div>
      <button @click="send()">send</button>
    </div>
  </div>
  <div class="flex flex-row w-1/2">
    <div>
      <n-card>
        <n-tabs
          class="card-tabs"
          default-value="signin"
          size="large"
          animated
          style="margin: 0 -4px"
          pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <n-tab-pane name="Headers" tab="Headers">
            <n-table :single-line="false">
              <thead>
                <tr>
                  <th></th>
                  <th>Key</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><n-checkbox /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" name="" id="" /></td>
                </tr>
              </tbody>
            </n-table>
          </n-tab-pane>
          <n-tab-pane name="Body" tab="Body">
            <n-form> </n-form>
          </n-tab-pane>

          <n-tab-pane name="hehe" tab="Pre-request Script">
            <n-form>
              <n-form-item-row label="Username">
                <n-input />
              </n-form-item-row>
              <n-form-item-row label="Password">
                <n-input />
              </n-form-item-row>
              <n-form-item-row label="Reenter Password">
                <n-input />
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong> Sign up </n-button>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
    <div class="flex flex-row w-1/2">
      <n-form
        ><h1 v-if="hihi"></h1>
        <p v-else>
          <hel /></p
      ></n-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NButton, useMessage, DataTableColumns } from "naive-ui";

import Hel from "./hel.vue";

export default defineComponent({
  setup() {
    return {
      selectedValue: ref(null),
      selectedValues: ref(null),
      options: [
        {
          label: "POST",
          value: "POST",
        },
        {
          label: "REQUEST",
          value: "REQUEST",
        },
        {
          label: "DELETE",
          value: "DELETE",
        },
        {
          label: "GET",
          value: "GET",
        },
      ],
    };
  },
  components: { Hel },
});

const hihi = ref(true);
function send() {
  hihi.value = !hihi.value;
}
</script>
