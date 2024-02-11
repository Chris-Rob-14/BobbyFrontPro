<template>
  <div
    class="flex-1 flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border gap-[20px] min-w-[195px] text-center text-lg-6 text-darkslateblue-100 font-montserrat"
  >
    <div
      class="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[15px] text-lg text-orange"
    >
      <div
        class="self-stretch rounded-81xl flex flex-row items-center justify-center py-[11px] pr-[42px] pl-11 whitespace-nowrap border-[1px] border-solid border-orange mq450:pl-5 mq450:pr-5 mq450:box-border"
      >
        <div
          class="h-11 w-[286.2px] relative rounded-81xl box-border hidden border-[1px] border-solid border-orange"
        />
        <div class="flex-1 relative font-medium z-[1]">Mardi 21 novembre</div>
      </div>
      <div
        class="self-stretch bg-lavender overflow-hidden flex flex-row items-end justify-start py-1.5 pr-1.5 pl-5 gap-[22px] text-lg-6 text-darkslateblue-100"
      >
        <div class="h-[38px] w-[286px] relative bg-lavender hidden" />
        <div class="h-[25px] flex-1 relative font-light inline-block z-[1]">
          Marie DUPONT
        </div>
        <div
          class="w-[75px] rounded-[76.32px] bg-darkkhaki flex flex-row items-center justify-center py-1 pr-[9px] pl-2.5 box-border z-[1] text-mini-3 text-bleu-nuit"
        >
          <div
            class="h-[26.3px] w-[75.1px] relative rounded-[76.32px] bg-darkkhaki hidden"
          />
          <div class="flex-1 relative font-medium z-[1]">CHIEN</div>
        </div>
      </div>
    </div>
    <div
      class="self-stretch h-[38px] bg-lavender overflow-hidden shrink-0 flex flex-row items-end justify-start pt-[5px] pb-1.5 pr-1.5 pl-5 box-border gap-[29px]"
    >
      <div class="h-[38px] w-[286px] relative bg-lavender hidden" />
      <div class="h-6 flex-1 relative font-light inline-block z-[1]">
        Marie DUPONT
      </div>
      <div
        class="h-7 w-[68px] rounded-[81.04px] bg-khaki flex flex-row items-center justify-center pt-1 pb-[5px] pr-[9px] pl-[11px] box-border z-[1] text-mini-3 text-bleu-nuit"
      >
        <div
          class="h-[27.9px] w-[67.7px] relative rounded-[81.04px] bg-khaki hidden"
        />
        <div class="flex-1 relative font-medium z-[1]">CHAT</div>
      </div>
    </div>
    <Frame4 />
    <div class="self-stretch h-16 relative bg-ivoire" />
    <div
      class="self-stretch flex flex-col items-start justify-start gap-[17px] text-12xl-7 text-white"
    >
      <Frame4 propFlex="1" propWidth="unset" propDisplay="inline-block" />
      <div
        class="self-stretch bg-lavender overflow-hidden flex flex-row items-center justify-center py-0 pr-1.5 pl-1"
      >
        <div class="h-[38px] w-[287px] relative bg-lavender hidden" />
        <div class="flex-1 flex flex-row items-center justify-start">
          <div
            class="h-[26px] w-[275.9px] relative rounded-[76.32px] bg-orange z-[1]"
          />
          <div
            class="h-[39px] w-[21.8px] relative font-medium inline-block shrink-0 z-[2] ml-[-149px] mq450:text-lgi mq800:text-6xl"
          >
            +
          </div>
        </div>
      </div>
    </div>
    <div
      class="self-stretch bg-lavender overflow-hidden flex flex-row items-center justify-center py-0 pr-1.5 pl-1 text-12xl-7 text-white"
    >
      <div class="h-[38px] w-[287px] relative bg-lavender hidden" />
      <div class="flex-1 flex flex-row items-center justify-start">
        <div
          class="h-[26px] w-[275.9px] relative rounded-[76.32px] bg-orange z-[1]"
        />
        <div
          class="h-[39px] w-[21.8px] relative font-medium inline-block shrink-0 z-[2] ml-[-149px] mq450:text-lgi mq800:text-6xl"
        >
          +
        </div>
      </div>
    </div>
    <Frame6 />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Frame4 from "./Frame4.vue";
  import Frame6 from "./Frame6.vue";

  export default defineComponent({
    name: "MarieFrame",
    components: { Frame4, Frame6 },
  });
</script>
