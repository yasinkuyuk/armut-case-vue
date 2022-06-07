<template>
  <div v-if="service != {}">
    <ServiceHeader :serviceName="service.name" />
    <PriceHeader :price="service.price" />

    <DiscountView
      :message="service.discountRateText"
      v-if="service.discountRateText != '' && currentIndex == 0"
    />
    <QuestionView :question="questions[currentIndex]" />

    <div class="fixed bottom-0 w-full">
      <CustomButton :buttonContent="buttonText" class="text-white" />
    </div>
  </div>
</template>

<script>
import ServiceHeader from "./components/ServiceHeader.vue";
import PriceHeader from "./components/PriceHeader.vue";
import DiscountView from "./components/DiscountView.vue";
import QuestionView from "./components/QuestionView.vue";
import CustomButton from "../../components/CustomButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "ServiceQuestions",
  components: {
    ServiceHeader,
    PriceHeader,
    DiscountView,
    QuestionView,
    CustomButton,
  },
  computed: {
    ...mapGetters(["service", "questions", "currentIndex", "services"]),
    buttonText() {
      if (this.questions.length == this.currentIndex + 1) {
        return "TALEP GÖNDER";
      } else {
        return "DEVAM";
      }
    },
  },
  async created() {
    this.$store.commit(
      "SET_SERVICE",
      this.services.filter(
        (service) => service.serviceId == this.$route.params.id
      )[0]
    );

    await this.$store.dispatch("getQuestions", this.$route.params.id);
  },
};
</script>