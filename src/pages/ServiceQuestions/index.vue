<template>
  <div v-if="service">
    <ServiceHeader :serviceName="service.name" />
    <PriceHeader :price="service.price" />

    <DiscountView
      :message="service.discountRateText"
      v-if="service.discountRateText != '' && currentIndex == 0"
    />
    <QuestionView :question="questions[currentIndex]" />

    <div class="mx-4 my-2 fixed bottom-0 flex w-11/12">
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
import services from "../../data/services.json";
import { mapGetters } from "vuex";
import QUESTIONS_399 from "../../data/399-questions.json";
import QUESTIONS_262 from "../../data/262-questions.json";

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
    ...mapGetters(["service", "questions", "currentIndex"]),
    buttonText() {
      if (this.questions.length == this.currentIndex + 1) {
        return "TALEP GÖNDER";
      } else {
        return "DEVAM";
      }
    },
  },
  created() {
    this.$store.commit(
      "SET_SERVICE",
      services.filter(
        (service) => service.serviceId == this.$route.params.id
      )[0]
    );
    let questions = [];
    if (this.service.serviceId == 262) {
      questions = QUESTIONS_262;
    } else {
      questions = QUESTIONS_399;
    }

    this.$store.commit("SET_QUESTIONS", questions);
  },
};
</script>