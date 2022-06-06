<template>
  <div class="w-full bg-white rounded-full h-1">
    <div
      class="bg-myGreen h-1 rounded-r-full"
      :style="`width: ${progressValue}%`"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProgressBar",
  computed: {
    ...mapGetters(["questions", "currentIndex"]),
    progressValue() {
      return ((this.currentIndex + 1) * 100) / this.questions.length;
    },
  },
};
</script>