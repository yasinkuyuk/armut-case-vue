<template>
  <button class="bg-myGreen rounded text-white w-full py-3 text-base font-bold">
    {{ buttonContent }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    buttonContent: {
      type: String,
      default: "",
    },
  },
};
</script>