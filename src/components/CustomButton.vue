<template>
  <div class="flex items-center justify-center">
    <button
      class="bg-myGreen rounded text-white w-11/12 my-2 py-3 text-base font-bold fixed bottom-0 md:static"
      @click="nextQuestion"
    >
      {{ buttonContent }}
    </button>
  </div>
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
        this.$store.commit("SET_ERROR_STATUS", true);
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
