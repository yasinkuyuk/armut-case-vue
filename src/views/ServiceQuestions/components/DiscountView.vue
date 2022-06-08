<template>
  <div class="bg-bgBlack text-white px-4 py-3 text-center text-sm">
    <div class="font-bold" v-html="messageHTML"></div>
  </div>
</template>

<script>
export default {
  name: "DiscountView",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  computed: {
    messageHTML() {
      let indexOfPercentage = this.message.indexOf("%");
      let text = `<p>${this.message.slice(
        0,
        indexOfPercentage
      )}<span class="text-myGreen">%`;

      for (let i = indexOfPercentage + 1; i < this.message.length; i++) {
        if (this.message[i] == " ") {
          text += `</span>${this.message.slice(i, this.message.length)}</p>`;
          break;
        }
        text += this.message[i];
      }
      return text;
    },
  },
};
</script>