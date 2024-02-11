<template>
  <div
    class="w-[1302px] rounded-81xl bg-lavender overflow-hidden flex flex-row items-center justify-between pt-4 pb-[17px] pr-[30px] pl-[39px] box-border gap-[20px] text-left text-6xl text-black font-inter"
  >
    <div
      class="h-[65px] w-[1302px] relative rounded-81xl bg-lavender hidden max-w-full"
    />
    <div
      class="h-[30px] relative inline-block shrink-0 z-[1] mq450:text-xl"
      :style="jULIEMARTINEAUContainerStyle"
    >
      <span class="font-medium">{{jULIEMARTINEAU}}</span>
      <span class="font-light">{{hrouvilleSaintClair}}</span>
    </div>
    <div
      class="rounded-[101.82px] bg-khaki flex flex-row items-center justify-center pt-1.5 pb-1 pr-[11px] pl-3 z-[1] text-center text-mid-9 text-bleu-nuit font-montserrat"
    >
      <div
        class="h-[32.6px] w-[74.3px] relative rounded-[101.82px] bg-khaki hidden"
      />
      <div class="relative font-medium z-[1]">CHAT</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Frame1",
    props: {
      jULIEMARTINEAU: { type: String },
      hrouvilleSaintClair: { type: String },
      propHeight: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      jULIEMARTINEAUContainerStyle(): CSS.Properties {
        return {
          height: this.propHeight,
        };
      },
    },
  });
</script>
