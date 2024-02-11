<template>
  <div
    class="self-stretch flex flex-row items-start justify-start pt-0 pb-[7px] pr-px pl-0 text-center text-lg-6 text-darkslateblue-100 font-montserrat"
  >
    <div
      class="flex-1 bg-lavender overflow-hidden flex flex-row items-end justify-start pt-[11px] pb-[65px] pr-1.5 pl-[21px] gap-[22px]"
    >
      <div class="h-[102px] w-[286px] relative bg-lavender hidden" />
      <div class="h-[25px] flex-1 relative font-light inline-block z-[1]">
        Marie DUPONT
      </div>
      <div
        class="w-[75px] rounded-[76.32px] bg-darkkhaki flex flex-row items-center justify-center p-1 box-border z-[1] text-mini-3 text-bleu-nuit"
      >
        <div
          class="h-[26.3px] w-[75.1px] relative rounded-[76.32px] bg-darkkhaki hidden"
        />
        <div
          class="w-[55px] relative font-medium inline-block shrink-0 z-[1]"
          :style="cHIENStyle"
        >
          CHIEN
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "MarieDupontImage",
    props: {
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propDisplay: { type: String },
      propFlex: { type: String },
    },
    computed: {
      cHIENStyle(): CSS.Properties {
        return {
          width: this.propWidth,
          display: this.propDisplay,
          flex: this.propFlex,
        };
      },
    },
  });
</script>
