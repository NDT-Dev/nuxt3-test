import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/duytan/duytan/test4/nuxt3-test/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}