<template>
  <div
    class="flex-1 flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border gap-[23px] min-w-[195px] text-center text-lg-6 text-darkslateblue-100 font-montserrat"
  >
    <div
      class="self-stretch flex flex-col items-end justify-start gap-[14px] text-lg text-orange"
    >
      <div
        class="self-stretch rounded-81xl flex flex-row items-center justify-center p-[11px] whitespace-nowrap border-[1px] border-solid border-orange"
      >
        <div
          class="h-11 w-[286px] relative rounded-81xl box-border hidden border-[1px] border-solid border-orange"
        />
        <div class="w-[236px] relative font-medium inline-block shrink-0 z-[1]">
          Mercredi 22 novembre
        </div>
      </div>
      <Frame4
        propFlex="1"
        propWidth="unset"
        propDisplay="inline-block"
      /><Frame4 propFlex="unset" propWidth="55px" propDisplay="inline-block" />
    </div>
    <div
      class="self-stretch h-[182px] flex flex-col items-end justify-start py-0 pr-0 pl-px box-border gap-[21px]"
    >
      <div class="self-stretch flex-1 relative bg-ivoire" />
      <div
        class="self-stretch bg-lavender overflow-hidden flex flex-row items-center justify-start py-1.5 pr-1.5 pl-[22px] gap-[21px]"
      >
        <div class="h-[38px] w-[286px] relative bg-lavender hidden" />
        <div class="h-6 flex-1 relative font-light inline-block z-[1]">
          Marie DUPONT
        </div>
        <div
          class="w-[75px] rounded-[76.32px] bg-darkkhaki flex flex-row items-center justify-center pt-[3px] pb-[5px] pr-[9px] pl-2.5 box-border z-[1] text-mini-3 text-bleu-nuit"
        >
          <div
            class="h-[26.3px] w-[75.1px] relative rounded-[76.32px] bg-darkkhaki hidden"
          />
          <div class="flex-1 relative font-medium z-[1]">CHIEN</div>
        </div>
      </div>
      <div
        class="self-stretch h-[37px] bg-lavender overflow-hidden shrink-0 flex flex-row items-end justify-start pt-1 pb-1.5 pr-1.5 pl-[22px] box-border gap-[28px]"
      >
        <div class="h-[37px] w-[286px] relative bg-lavender hidden" />
        <div class="h-[25px] flex-1 relative font-light inline-block z-[1]">
          Marie DUPONT
        </div>
        <div
          class="h-7 w-[68px] rounded-[81.04px] bg-khaki flex flex-row items-center justify-center pt-[5px] pb-1 pr-[9px] pl-[11px] box-border z-[1] text-mini-3 text-bleu-nuit"
        >
          <div
            class="h-[27.9px] w-[67.7px] relative rounded-[81.04px] bg-khaki hidden"
          />
          <div class="flex-1 relative font-medium z-[1]">CHAT</div>
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-col items-start justify-start gap-[20px]"
    >
      <div
        class="self-stretch bg-lavender overflow-hidden flex flex-row items-center justify-start py-1.5 pr-1.5 pl-[21px] gap-[21px]"
      >
        <div class="h-[38px] w-[286px] relative bg-lavender hidden" />
        <div class="h-6 flex-1 relative font-light inline-block z-[1]">
          Marie DUPONT
        </div>
        <div
          class="w-[75px] rounded-[76.32px] bg-darkkhaki flex flex-row items-center justify-center pt-[3px] px-[3px] pb-[5px] box-border z-[1] text-mini-3 text-bleu-nuit"
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
      <div
        class="self-stretch h-[37px] bg-lavender overflow-hidden shrink-0 flex flex-row items-end justify-start pt-1 pb-1.5 pr-1.5 pl-[21px] box-border gap-[28px]"
      >
        <div class="h-[37px] w-[286px] relative bg-lavender hidden" />
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
      <div
        class="self-stretch bg-lavender overflow-hidden flex flex-row items-end justify-start pt-[11px] pb-16 pr-1.5 pl-[21px] gap-[28px]"
      >
        <div class="h-[102px] w-[286px] relative bg-lavender hidden" />
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
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Frame4 from "./Frame4.vue";

  export default defineComponent({
    name: "FrameMarieDupontChatChien",
    components: { Frame4 },
  });
</script>
