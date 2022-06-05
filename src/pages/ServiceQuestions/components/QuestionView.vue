<template>
  <div class="mx-6">
    <div class="p-6 font-bold text-lg text-center">
      İhtiyacın detayları neler?
    </div>
    <div class="grid grid-cols-2 mb-12">
      <ImageRadioInput
        class="mx-2 mb-4"
        v-for="option in question.values"
        :key="option.id"
        :option="option"
      />
      <ImageRadioInput />
    </div>
  </div>
</template>

<script>
import ImageRadioInput from "../../../components/ImageRadioInput.vue";
import questions from "../../../data/399-questions.json";

export default {
  name: "QuestionView",

  components: {
    ImageRadioInput,
  },
  data() {
    return {
      question: questions[0],
    };
  },
};
</script>