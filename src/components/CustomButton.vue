<template>
  <button
    class="bg-myGreen rounded text-white w-full py-3 text-base font-bold"
    @click="nextQuestion"
  >
    {{ buttonContent }}
  </button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CustomButton",
  computed: {
    ...mapGetters(["questions", "currentIndex", "answers"]),
  },
  props: {
    buttonContent: {
      type: String,
      default: "",
    },
  },
  methods: {
    nextQuestion() {
      if (
        this.questions[this.currentIndex].required &&
        this.answers.filter(
          (el) => el.questionId == this.questions[this.currentIndex].id
        ) == 0
      ) {
        this.$store.commit("TOGGLE_ERROR_STATUS");
        return;
      }
      if (this.buttonContent == "TALEP GÖNDER") {
        this.$router.push({ name: "success" });
      } else {
        this.$store.commit("INCREMENT_CURRENT_INDEX");
      }
    },
  },
};
</script>