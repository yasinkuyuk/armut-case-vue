<template>
  <div class="bg-myGray">
    <div class="py-3">
      <img :src="option.valueImageUrl" class="text-center mx-auto" />
    </div>
    <div class="py-3 px-2">
      <input
        type="radio"
        class="accent-myGreen mr-1"
        :checked="checked"
        @click="test"
        aria-label="dasdas"
      />
      <label class="text-sm">{{ option.value }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageRadioInput",
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
};
</script>