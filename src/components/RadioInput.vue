<template>
  <div class="bg-myGray px-2 my-2 py-3 rounded">
    <input
      type="radio"
      class="accent-myGreen mr-2"
      :checked="checked"
      @click="test"
      aria-label="dasdas"
    />
    <label>Option 1</label>
  </div>
</template>
<script>
export default {
  name: "RadioInput",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    test() {
      this.checked = !this.checked;
    },
  },
};
</script>