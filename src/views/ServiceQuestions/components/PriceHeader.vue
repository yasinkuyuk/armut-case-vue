<template>
  <div
    class="border-borderGray border-y-2 h-14 px-6 py-3 font-semibold shadow-sm"
  >
    <div class="flex items-center">
      <div class="w-1/2 justify-start text-xs">Ortalama fiyat aralığı:</div>
      <div class="w-1/2 justify-right justify-end text-right text-base">
        {{ price.min }} - {{ price.max }} {{ price.currency }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceHeader",
  props: {
    price: {
      type: Object,
      default: () => {},
    },
  },
};
</script>