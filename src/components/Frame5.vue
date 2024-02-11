<template>
  <div
    class="flex-1 flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border gap-[15px] min-w-[195px] text-center text-lg-6 text-darkslateblue-100 font-montserrat"
  >
    <div
      class="self-stretch rounded-81xl flex flex-row items-center justify-center p-[11px] whitespace-nowrap text-lg text-orange border-[1px] border-solid border-orange"
    >
      <div
        class="h-11 w-[286px] relative rounded-81xl box-border hidden border-[1px] border-solid border-orange"
      />
      <div class="w-[204px] relative font-medium inline-block shrink-0 z-[1]">
        Lundi 20 novembre
      </div>
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pr-px pl-0"
    >
      <div
        class="flex-1 bg-lavender overflow-hidden flex flex-row items-end justify-start py-1.5 pr-1.5 pl-[21px] gap-[22px]"
      >
        <div class="h-[38px] w-[286px] relative bg-lavender hidden" />
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
          >
            CHIEN
          </div>
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pr-px pl-0"
    >
      <div
        class="h-[38px] flex-1 bg-lavender overflow-hidden flex flex-row items-end justify-start pt-[5px] pb-1.5 pr-1.5 pl-[21px] box-border gap-[29px]"
      >
        <div class="h-[38px] w-[286px] relative bg-lavender hidden" />
        <div class="h-6 flex-1 relative font-light inline-block z-[1]">
          Marie DUPONT
        </div>
        <div
          class="h-7 w-[68px] rounded-[81.04px] bg-khaki flex flex-row items-center justify-center pt-1 pb-[5px] pr-2.5 pl-[11px] box-border z-[1] text-mini-3 text-bleu-nuit"
        >
          <div
            class="h-[27.9px] w-[67.7px] relative rounded-[81.04px] bg-khaki hidden"
          />
          <div class="flex-1 relative font-medium shrink-0 z-[1]">CHAT</div>
        </div>
      </div>
    </div>
    <MarieDupontImage />
    <div
      class="self-stretch h-[71px] flex flex-row items-start justify-start pt-0 pb-[7px] pr-px pl-0 box-border"
    >
      <div class="self-stretch flex-1 relative bg-ivoire" />
    </div>
    <Frame7 /><Frame6 />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import MarieDupontImage from "./MarieDupontImage.vue";
  import Frame7 from "./Frame7.vue";
  import Frame6 from "./Frame6.vue";

  export default defineComponent({
    name: "Frame5",
    components: { MarieDupontImage, Frame7, Frame6 },
  });
</script>
