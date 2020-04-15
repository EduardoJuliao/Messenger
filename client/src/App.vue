<template>
  <div id="app">
    <chat></chat>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Chat from "./components/chat/Chat.vue";

@Component({
  components: {
    chat: Chat
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Consolas, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
