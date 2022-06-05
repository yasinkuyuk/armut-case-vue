<template>
  <div class="bg-myGray px-2 my-2 py-3 rounded">
    <input type="radio" class="accent-[green] mr-2" />
    <label class="text-sm font-medium">{{ value.value }}</label>
  </div>
</template>
<script>
export default {
  name: "RadioInput",
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  methods: {},
};
</script>