<template>
  <div class="bg-myGray px-2 my-2 py-3 rounded cursor-pointer" @click="toggle">
    <input type="radio" class="accent-[green] mr-2" :checked="checked" />
    <label class="text-sm font-medium text-bgBlack">{{ value.value }}</label>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { eventBus } from "../event";
export default {
  name: "RadioInput",
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    ...mapGetters(["answers"]),
  },
  methods: {
    toggle() {
      this.checked = !this.checked;
      if (this.checked) {
        this.$store.commit("APPEND_TO_ANSWERS", {
          value: this.value,
          questionId: this.questionId,
        });
        eventBus.$emit("option selected", this.value.id, this.questionId);
      } else {
        this.$store.commit("REMOVE_FROM_ANSWERS", this.value);
      }
    },
    uncheck(answerId, questionId) {
      if (
        this.questionId == questionId &&
        this.checked &&
        this.value.id != answerId
      ) {
        this.$store.commit("REMOVE_FROM_ANSWERS", this.value);
        this.checked = false;
      }
    },
  },
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    questionId: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    eventBus.$on("option selected", this.uncheck);

    this.answers.forEach((answer) => {
      if (answer.value) {
        if (answer.value.id == this.value.id) {
          this.checked = true;
        }
      }
    });
  },
  destroyed() {
    eventBus.$off("option selected");
  },
};
</script>