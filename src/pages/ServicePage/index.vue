<template>
  <div class="shadow-md rounded-lg border-gray-300 bg-white m-6 h-96">
    <h2 class="bg-myGray px-4 py-2 rounded-t-lg">Servisler</h2>
    <ul>
      <div
        v-for="service in services"
        :key="service.serviceId"
        class="px-4 py-2 hover:bg-myGray"
      >
        <router-link :to="`/questions/${service.serviceId}`">
          {{ service.name }}
        </router-link>
      </div>
    </ul>
  </div>
</template>

<script>
import services from "../../data/services.json";
export default {
  name: "ServicePage",
  data() {
    return {
      services: services,
    };
  },
};
</script>