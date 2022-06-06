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
import services from "../../data/services.json";
export default {
  name: "ServicePage",
  data() {
    return {
      services: services,
      increment: 0,
    };
  },
};
</script>