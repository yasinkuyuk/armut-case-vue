<template>
  <div class="w-full bg-white rounded-full h-1">
    <div
      class="bg-myGreen h-1 rounded-r-full"
      :style="`width: ${percentage}%`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    percentage: {
      type: Number,
      default: 0.0,
    },
  },
};
</script>