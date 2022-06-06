<template>
  <div class="bg-success" id="success-bg">
    <img class="absolute" src="/images/confeti.png" alt="" />
    <span class="absolute text-lg font-bold">Talebini aldık!</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SuccessPage",
  computed: {
    ...mapGetters(["answers"]),
  },
  mounted() {
    this.$store.dispatch("getServices");
    this.answers.forEach((element) => {
      if (element.value.value) {
        console.log(element.value.value);
      } else {
        console.log(element.value);
      }
    });
    this.$store.commit("CLEAR");
  },
};
</script>
