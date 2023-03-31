<template>
  <div class="flex flex-row justify-center text-center mx-auto">
    <div class="lex-none w-20 h-14">
      <NSelect
        v-model:value="selectedValue"
        filterable
        :options="options"
        :on-update:value="handleSelect"
      />
    </div>
    <div class="flex-initial">
      <input
        v-model.value="test"
        type="text"
        id="simple-search"
        class="flex flex-row h-7 w-200 border border-slate-300 hover:border-indigo-300"
        placeholder="Search"
        required
      />
    </div>
    <div class="flex-initial w-32">
      <NButton type="info" @click="send()">send</NButton>
    </div>
  </div>
  <div class="flex flex-row">
    <div class="basis-1/2">
      <NCard>
        <NTabs
          class="card-tabs"
          default-value="signin"
          size="large"
          animated
          style="margin: 0 -4px"
          pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <NTabPane name="Headers" tab="Headers">
            <NTable :single-line="false">
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
                  <td><NCheckbox /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" name="" id="" /></td>
                </tr>
              </tbody>
            </NTable>
          </NTabPane>
          <NTabPane name="Body" tab="Body">
            <NForm>
              <!-- quan he cha con  -->
              <!-- <hel /> -->
              <input type="text" v-model="inputBody" />
              <div>{{ inputBody }}</div>
              <!-- aaaaaaaaaaaaaaaa -->
            </NForm>
          </NTabPane>

          <NTabPane name="hehe" tab="Pre-request Script">
            <NForm>
              <NFormItemRow label="Username">
                <NInput />
              </NFormItemRow>
              <NFormItemRow label="Password">
                <NInput />
              </NFormItemRow>
              <NFormItemRow label="Reenter Password">
                <NInput />
              </NFormItemRow>
            </NForm>
            <NButton type="primary" block secondary strong> Sign up </NButton>
          </NTabPane>
        </NTabs>
      </NCard>
    </div>
    <div class="basis-1/2">
      <NForm
        ><div v-if="hihi"></div>
        <p v-else></p>
        <NTabs type="segment">
          <NTabPane name="Pretty" tab="Pretty"></NTabPane>
          <NTabPane name="Raw" tab="Raw">{{ data }}</NTabPane>
          <NTabPane name="Preview" tab="Preview"> Qilixiang </NTabPane>
        </NTabs>
      </NForm>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { NButton, useMessage } from "naive-ui";
import { method } from "lodash";

const test = ref("https://64265537d24d7e0de46e03cc.mockapi.io/tan");
const data = ref(null);
const selectedValue = ref("POST");
const inputBody = ref("");
const options = [
  {
    label: "POST",
    value: "POST",
  },
  {
    label: "PUT",
    value: "PUT",
  },
  {
    label: "DELETE",
    value: "DELETE",
  },
  {
    label: "GET",
    value: "GET",
  },
];
const hihi = ref(true);
const send = async () => {
  if (selectedValue.value === "GET") {
    selectedValue.value = method;
    const { data: datas, pending, error, refresh } = await useFetch(test.value, method);
    data.value = datas.value;
    console.log(data.value);
  } else if (selectedValue.value === "POST") {
    const { data, error, pending, refresh } = await useFetch(test.value, {
      method: "POST",
      headers: {},
      // {
      //   Name: "duy tan",
      //   Phone: 466,
      //   Address: "Address10",
      // }
      body: JSON.parse(inputBody.value.trim()),
    });
    console.log("🚀 ~ file: detail.vue:373 ~ handlePost ~ data:", data.value);
    // console.log(typeof JSON.parse(inputBody.value), "sduffuweufuwefgug");
  } else if (selectedValue.value === "DELETE") {
    const { data, pending, error, refresh } = await useFetch(test.value, {
      method: "DELETE",
      body: {},
    });
    console.log(data.value);
  } else if (selectedValue.value === "PUT") {
    const { data, pending, error, refresh } = await useFetch(test.value, {
      method: "PUT",
      body: {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      },
    });
    console.log(data.value);
  }
};

const handleSelect = (item) => {
  selectedValue.value = item;
  console.log(selectedValue.value);
};
</script>
