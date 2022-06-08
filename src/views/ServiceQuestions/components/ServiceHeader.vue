<template>
  <div>
    <div class="flex w-full h-11 px-4 pt-3 pb-4">
      <div class="w-1/6 justify-start">
        <span class="cursor-pointer" @click="previousQuestion">
          <font-awesome-icon
            v-if="currentIndex != 0"
            size="lg"
            icon="fa-solid fa-chevron-left text-base cursor-pointer"
        /></span>
      </div>
      <div
        class="w-4/6 text-center font-semibold"
        v-if="currentIndex + 1 / questions.length > 0.5"
      >
        {{ `%${Math.round(percentage)} TAMAMLANDI` }}
      </div>
      <div class="w-4/6 text-center font-semibold" v-else>
        {{ serviceName }}
      </div>
      <div class="w-1/6 text-right">
        <span @click="clearStore">
          <router-link class="cursor-pointer" to="/"
            ><font-awesome-icon
              icon="fa-solid fa-xmark cursor-pointer"
              size="lg" /></router-link
        ></span>
      </div>
    </div>
    <ProgressBar :percentage="percentage" />
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "ServiceHeader",
  components: {
    ProgressBar,
  },
  computed: {
    ...mapGetters(["currentIndex", "questions"]),
    percentage() {
      return ((this.currentIndex + 1) * 100) / this.questions.length;
    },
  },
  props: {
    serviceName: {
      type: String,
      default: "",
    },
  },
  methods: {
    clearStore() {
      this.$store.commit("CLEAR");
    },
    previousQuestion() {
      this.$store.commit("SET_ERROR_STATUS", false);
      this.$store.commit("DECREMENT_CURRENT_INDEX");
    },
  },
};
</script>