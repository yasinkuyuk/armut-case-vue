<template>
  <div class="shadow-md rounded-lg border-gray-300 bg-white m-6 h-96">
    <h2 class="bg-myGray px-4 py-2 rounded-t-lg">Servisler</h2>
    <div class="" v-for="service in services" :key="service.serviceId">
      <router-link :to="`/service/${service.serviceId}`" class="w-full h-full">
        <div class="px-4 py-2 hover:bg-myGray">
          {{ service.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ServicePage",
  computed: {
    ...mapGetters(["services"]),
  },
  data() {
    return {
      increment: 0,
    };
  },
  async mounted() {
    await this.$store.dispatch("getServices");
  },
};
</script>