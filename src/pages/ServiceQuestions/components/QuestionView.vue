<template>
  <div class="mx-6" v-if="question">
    <div class="p-6 font-bold text-lg text-center">
      {{ question.label }}
    </div>

    <template>
      <div class="grid grid-cols-2 mb-12" v-if="question.typeId == 5">
        <div
          class="col-span-1"
          v-for="option in question.values"
          :key="option.id"
        >
          <ImageRadioInput
            class="mb-4 mx-2"
            :option="option"
            :questionId="question.id"
          />
        </div>
      </div>

      <div v-else-if="question.typeId == 6">
        <RadioInput
          v-for="value in question.values"
          :key="value.id"
          :value="value"
          :questionId="question.id"
        />
      </div>

      <div v-else-if="question.typeId == 8">
        <CustomTextArea :question="question" />
      </div>
      <div class="text-[#EE401D] mt-1 text-[10px]" v-if="errorStatus">
        Bu alan zorunlu
      </div>
    </template>
  </div>
</template>

<script>
import ImageRadioInput from "../../../components/ImageRadioInput.vue";
import CustomTextArea from "../../../components/CustomTextArea.vue";
import RadioInput from "../../../components/RadioInput.vue";
import { mapGetters } from "vuex";
export default {
  name: "QuestionView",
  computed: {
    ...mapGetters(["errorStatus"]),
  },
  components: {
    ImageRadioInput,
    CustomTextArea,
    RadioInput,
  },
  props: {
    question: {
      type: Object,
      default: () => {},
    },
  },
};
</script>