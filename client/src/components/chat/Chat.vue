<template>
  <div>
    <div class="holder" v-for="message in messages" v-bind:key="message">
      <chat-message
        :message="message.message"
        :sender="message.sender"
        :dateSend="message.dateSend"
        :key="message.sender"
        class="message"
        v-bind:class="{ self: message.sender === 'Eduardo', other: message.sender !== 'Eduardo' }"
      ></chat-message>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ChatMessage from "./Message.vue";

@Component({
  components: {
    "chat-message": ChatMessage
  }
})
export default class Chat extends Vue {
  messages: any = [
    {
      sender: "Eduardo",
      message: "Hello",
      dateSend: new Date()
    },
    {
      sender: "Sid",
      message: "Hi",
      dateSend: new Date()
    }
  ];
}
</script>

<style>
.holder {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.self {
  align-self: flex-end;
}

.other {
  align-self: flex-start;
}
</style>
