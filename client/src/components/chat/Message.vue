<template>
  <div class="message-container">
    <div class="message-header">{{ sender }}</div>
    <div class="message-data">
      <div class="message-body">{{ message }}</div>
      <div class="message-footer">{{ dateSend | moment("HH:mm") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import * as moment from "moment";

@Component
export default class ChatMessage extends Vue {
  @Prop({ required: true }) readonly message: undefined | string;

  @Prop({ required: true }) readonly sender: undefined | string;

  @Prop({ required: true }) readonly dateSend: undefined | Date;
}
</script>

<style>
.message-container {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border-style: solid;
  box-shadow: 5px 10px 8px #eeeeee;
  max-width: 50%;
  min-width: 25%;
  background-color: rgb(75, 75, 192);
  color: white;
  padding: 5px;
  font-size: 2ex;
}

.message-header {
  font-weight: bold;
  align-self: flex-start;
}

.message-data {
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
}

.message-body {
  align-self: flex-start;
}

.message-footer {
  align-self: flex-end;
  font-weight: lighter;
  font-size: 1ex;
}
</style>
