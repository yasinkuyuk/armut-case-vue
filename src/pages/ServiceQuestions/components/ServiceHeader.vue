<template>
  <div>
    <div class="flex w-full h-11 px-4 pt-3 pb-4">
      <div class="w-1/3 justify-start">
        <span class="cursor-pointer" @click="previousQuestion">
          <font-awesome-icon
            v-if="currentIndex != 0"
            icon="fa-solid fa-chevron-left text-base cursor-pointer"
        /></span>
      </div>
      <div class="w-1/3 text-center font-semibold">{{ serviceName }}</div>
      <div class="w-1/3 text-right">
        <span @click="clearStore">
          <router-link class="cursor-pointer" to="/"
            ><font-awesome-icon
              icon="fa-solid fa-xmark cursor-pointer" /></router-link
        ></span>
      </div>
    </div>
    <ProgressBar />
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
    ...mapGetters(["currentIndex"]),
  },
  props: {
    serviceName: {
      type: String,
      default: "",
    },
  },
  methods: {
    clearStore() {
      console.log("cleared");
      this.$store.commit("CLEAR");
    },
    previousQuestion() {
      this.$store.commit("DECREMENT_CURRENT_INDEX");
    },
  },
};
</script>