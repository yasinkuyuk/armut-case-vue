<template>
  <div class="bg-myGray cursor-pointer truncate" @click="toggle">
    <div class="py-3">
      <img :src="option.valueImageUrl" class="text-center mx-auto" />
    </div>
    <div class="py-3 px-2 overflow-x-auto">
      <input
        type="radio"
        class="accent-[green] mr-1"
        :checked="checked"
        :value="option.id"
      />
      <label :title="option.value" class="text-sm text-bgBlack">{{
        option.value
      }}</label>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { eventBus } from "../event";

export default {
  name: "ImageRadioInput",
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
          value: this.option,
          questionId: this.questionId,
        });
        eventBus.$emit("option selected", this.option.id, this.questionId);
      } else {
        this.$store.commit("REMOVE_FROM_ANSWERS", this.option);
      }
    },
    uncheck(answerId, questionId) {
      if (
        this.questionId == questionId &&
        this.checked &&
        this.option.id != answerId
      ) {
        this.$store.commit("REMOVE_FROM_ANSWERS", this.option);
        this.checked = false;
      }
    },
  },
  props: {
    option: {
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
      if (typeof answer.value == "object") {
        if (answer.value.id == this.option.id) {
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