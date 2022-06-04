<template>
  <div class="bg-bgBlack text-white px-4 py-3 text-center text-sm">
    <div class="font-bold">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscountView",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>