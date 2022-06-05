<template>
  <button
    class="bg-myGreen rounded text-white w-full py-3 text-base font-bold"
    @click="nextQuestion"
  >
    {{ buttonContent }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    buttonContent: {
      type: String,
      default: "",
    },
  },
  methods: {
    nextQuestion() {
      if (this.buttonContent == "TALEP GÖNDER") {
        this.$store.commit("clear");
        this.$router.push({ name: "success" });
      }
      this.$store.commit("INCREMENT_CURRENT_INDEX");
    },
  },
};
</script>