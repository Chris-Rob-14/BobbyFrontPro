<template>
  <div
    class="self-stretch bg-lavender overflow-hidden flex flex-row items-end justify-start pt-[11px] pb-[65px] pr-1.5 pl-5 gap-[22px] text-center text-lg-6 text-darkslateblue-100 font-montserrat"
  >
    <div class="h-[102px] w-[286px] relative bg-lavender hidden" />
    <div class="h-[25px] flex-1 relative font-light inline-block z-[1]">
      Marie DUPONT
    </div>
    <div
      class="w-[75px] rounded-[76.32px] bg-darkkhaki flex flex-row items-center justify-center py-1 pr-[9px] pl-2.5 box-border z-[1] text-mini-3 text-bleu-nuit"
    >
      <div
        class="h-[26.3px] w-[75.1px] relative rounded-[76.32px] bg-darkkhaki hidden"
      />
      <div class="flex-1 relative font-medium z-[1]" :style="cHIEN1Style">
        CHIEN
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Frame4",
    props: {
      propFlex: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propDisplay: { type: String },
    },
    computed: {
      cHIEN1Style(): CSS.Properties {
        return {
          flex: this.propFlex,
          width: this.propWidth,
          display: this.propDisplay,
        };
      },
    },
  });
</script>
