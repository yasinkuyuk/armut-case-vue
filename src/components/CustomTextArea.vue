<template>
  <textarea
    class="
      border border-[#C5C6CD]
      rounded
      placeholder:text-[#9C9DA9]
      w-full
      h-36
      p-2
      text-[#9C9DA9]
      font-medium
      text-sm
      placeholder:font-normal
      focus:ring-0
      focus-visible:border-none
    "
    style="resize: none"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "CustomTextArea",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>
