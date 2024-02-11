<template>
  <div
    class="self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-lg-6 text-darkslateblue-100 font-montserrat"
    :style="frameDivStyle"
  >
    <div
      class="self-stretch bg-lavender overflow-hidden flex flex-row items-start justify-start pt-[13px] pb-[63px] pr-1.5 pl-[21px] gap-[22px]"
      :style="frameStyle"
    >
      <div
        class="h-[102px] w-[286px] relative bg-lavender hidden"
        :style="rectangleDivStyle"
      />
      <div class="h-6 flex-1 relative font-light inline-block z-[1]">
        Marie DUPONT
      </div>
      <div
        class="w-[75px] rounded-[76.32px] bg-darkkhaki flex flex-row items-center justify-center pt-[3px] px-[3px] pb-[5px] box-border z-[1] text-mini-3 text-bleu-nuit"
      >
        <div
          class="h-[26.3px] w-[75.1px] relative rounded-[76.32px] bg-darkkhaki hidden"
        />
        <div class="w-[55px] relative font-medium inline-block shrink-0 z-[1]">
          CHIEN
        </div>
      </div>
    </div>
    <div
      class="self-stretch bg-lavender overflow-hidden flex flex-row items-end justify-start pt-[11px] pb-16 pr-1.5 pl-[21px] gap-[29px]"
      :style="frame1Style"
    >
      <div
        class="h-[102px] w-[286px] relative bg-lavender hidden"
        :style="rectangleDiv1Style"
      />
      <div class="h-[25px] flex-1 relative font-light inline-block z-[1]">
        Marie DUPONT
      </div>
      <div
        class="h-7 w-[68px] rounded-[81.04px] bg-khaki flex flex-row items-center justify-center pt-[5px] pb-1 pr-2.5 pl-[11px] box-border z-[1] text-mini-3 text-bleu-nuit"
      >
        <div
          class="h-[27.9px] w-[67.7px] relative rounded-[81.04px] bg-khaki hidden"
        />
        <div class="flex-1 relative font-medium shrink-0 z-[1]">CHAT</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Frame7",
    props: {
      propGap: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propHeight: { type: [Object, Array, String, Number, Boolean] },
      propPadding1: { type: [Object, Array, String, Number, Boolean] },
      propHeight1: { type: [Object, Array, String, Number, Boolean] },
      propHeight2: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      frameDivStyle(): CSS.Properties {
        return {
          gap: this.propGap,
        };
      },
      frameStyle(): CSS.Properties {
        return {
          padding: this.propPadding,
        };
      },
      rectangleDivStyle(): CSS.Properties {
        return {
          height: this.propHeight,
        };
      },
      frame1Style(): CSS.Properties {
        return {
          padding: this.propPadding1,
          height: this.propHeight1,
        };
      },
      rectangleDiv1Style(): CSS.Properties {
        return {
          height: this.propHeight2,
        };
      },
    },
  });
</script>
