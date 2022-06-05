<template>
  <div class="bg-bgBlack text-white px-4 py-3 text-center text-sm">
    <div class="font-bold">
      Bu hizmet Şubat ayında <span class="text-myGreen">%17</span> indirimli!
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