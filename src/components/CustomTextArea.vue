<template>
  <textarea
    class="
      border border-[#C5C6CD]
      rounded
      placeholder:text-[#9C9DA9]
      w-full
      h-36
      p-2
      text-[#9C9DA9]
      font-medium
      text-sm
      placeholder:font-normal
      focus:ring-0
      focus-visible:border-none
    "
    style="resize: none"
    :placeholder="question.placeHolder"
    v-model="content"
    @change="setAnswer"
  />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CustomTextArea",
  data() {
    return {
      content: null,
    };
  },
  computed: {
    ...mapGetters(["answers"]),
  },
  methods: {
    setAnswer() {
      if (this.content == "") {
        this.$store.commit("REMOVE_TEXT_FROM_ANSWERS", this.question.id);
      }

      if (
        this.answers.filter((answer) => answer.questionId == this.question.id)
          .length == 0
      ) {
        this.$store.commit("APPEND_TO_ANSWERS", {
          questionId: this.question.id,
          value: this.content,
        });
      } else {
        this.$store.commit("UPDATE_ANSWER", {
          questionId: this.question.id,
          value: this.content,
        });
      }
    },
  },
  props: {
    question: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.answers.forEach((answer) => {
      if (answer.value) {
        if (answer.questionId == this.question.id) {
          this.content = answer.value;
        }
      }
    });
  },
};
</script>
