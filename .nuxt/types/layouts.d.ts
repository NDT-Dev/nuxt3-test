import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/duytan/duytan/test4/nuxt3-test/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}