<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
[v-cloak] {
  display: none;
}
#app {
  font-size: 16px;
  font-family: var(--sizeTtf);
}
</style>
