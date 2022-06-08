<template>
  <div id="success-bg" class="h-44">
    <div class="flex items-end font-bold text-bgBlack text-lg pt-14 px-4">
      <div>
        <img
          src="/images/confeti.png"
          height="45"
          width="45"
          alt=""
          class="ml-2"
        />
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

<style scoped>
#success-bg {
  background-image: url("../../../public/images/confeti-background.svg");
}
</style>