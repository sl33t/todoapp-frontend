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
:root {
  --DARK-PRIMARY-COLOR: #0097A7;
  --LIGHT-PRIMARY-COLOR: #B2EBF2;
  --PRIMARY-COLOR: #00BCD4;
  --WHITE-COLOR: #FFFFFF;
  --ACCENT-COLOR: #536DFE;
  --DARKER-ACCENT-COLOR: #455bd3;
  --PRIMARY-TEXT-COLOR: #212121;
  --SECONDARY-TEXT-COLOR: #757575;
  --DIVIDER-COLOR: #BDBDBD;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
