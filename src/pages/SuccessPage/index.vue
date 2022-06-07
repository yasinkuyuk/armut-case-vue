<template>
  <div class="bg-success" id="success-bg">
    <div class="flex items-end font-bold text-bgBlack text-lg pt-14 px-4">
      <div>
        <img src="/images/confeti.png" alt="" />
      </div>
      <div class="ml-6">
        <span>Talebini aldık!</span>
      </div>
    </div>
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

z