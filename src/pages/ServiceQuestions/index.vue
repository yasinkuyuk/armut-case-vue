<template>
  <div v-if="service">
    <ServiceHeader :serviceName="service.name" />
    <PriceHeader :price="service.price" />

    <DiscountView
      :message="service.discountRateText"
      v-if="service.discountRateText != ''"
    />
    <QuestionView />

    <div class="mx-4 my-2 fixed bottom-0 flex w-11/12">
      <CustomButton :buttonContent="'DEVAM'" class="text-white" />
    </div>
  </div>
</template>

<script>
import ServiceHeader from "./components/ServiceHeader.vue";
import PriceHeader from "./components/PriceHeader.vue";
import DiscountView from "./components/DiscountView.vue";
import QuestionView from "./components/QuestionView.vue";
import CustomButton from "../../components/CustomButton.vue";
import services from "../../data/services.json";

export default {
  name: "ServiceQuestions",
  data() {
    return {
      service: null,
      questions: null,
    };
  },
  components: {
    ServiceHeader,
    PriceHeader,
    DiscountView,
    QuestionView,
    CustomButton,
  },
  created() {
    this.service = services.filter(
      (service) => service.serviceId == this.$route.params.id
    )[0];
  },
};
</script>