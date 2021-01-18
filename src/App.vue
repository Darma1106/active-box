<template>
  <div class="app">
    <LogCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogCard from './components/logCard.vue'

export default defineComponent({
  name: 'App',
  components: { LogCard },
  setup() {}
})
</script>

<style>
.app{
  height: 95vh;
  border: 2px solid indianred;
}
</style>
