/**
 * 
 * This tells TypeScript that we're defining types for files ending in .vue.
 * with DefineComponnet type from Vue.
 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component 
}