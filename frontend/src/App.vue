<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->


<template>
  <div id="app">
    <h1>Vue + Flask</h1>
    <p v-if="msg">API says: "{{ msg }}"</p>
    <p v-else>Loading…</p>
  </div>
</template>

<script>
export default {
  data() {
    return { msg: "" };
  },
  async mounted() {
    try {
      const res = await fetch("/api/hello");
      const json = await res.json();
      this.msg = json.message;
    } catch (e) {
      this.msg = "Error fetching API.";
      console.error(e);
    }
  }
};
</script>
