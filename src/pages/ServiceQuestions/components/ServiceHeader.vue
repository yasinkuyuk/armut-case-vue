<template>
  <div>
    <div class="flex w-full h-11 px-4 pt-3 pb-4">
      <div class="w-1/3 justify-start">
        <span class="cursor-pointer">
          <font-awesome-icon
            icon="fa-solid fa-chevron-left text-base cursor-pointer"
        /></span>
      </div>
      <div class="w-1/3 text-center font-semibold">{{ serviceName }}</div>
      <div class="w-1/3 text-right">
        <router-link class="cursor-pointer" to="/"
          ><font-awesome-icon icon="fa-solid fa-xmark cursor-pointer"
        /></router-link>
      </div>
    </div>
    <ProgressBar />
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
export default {
  name: "ServiceHeader",
  components: {
    ProgressBar,
  },
  props: {
    serviceName: {
      type: String,
      default: "",
    },
  },
};
</script>