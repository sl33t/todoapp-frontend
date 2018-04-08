<template>
  <div id="app">
    <base-header></base-header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    'base-header': Header
  }
}
</script>

<style>

</style>
