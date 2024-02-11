<template>
  <section
    class="w-[1342px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[23px] max-w-full text-left text-6xl text-black font-inter"
  >
    <div
      class="self-stretch rounded-[90.42px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden flex flex-row items-center justify-between pt-2.5 pb-[15px] pr-[30px] pl-[39px] gap-[20px] max-w-full text-24xl-2 text-bleu-nuit font-montserrat border-[5px] border-solid border-bleu-nuit mq450:flex-wrap"
    >
      <div
        class="h-[78.7px] w-[1302px] relative rounded-[90.42px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[5px] border-solid border-bleu-nuit"
      />
      <div class="w-[264px] flex flex-row items-end justify-start gap-[11px]">
        <div
          class="h-[53px] w-3.5 relative font-semibold inline-block z-[1] mq450:text-7xl mq975:text-16xl"
        >
          |
        </div>
        <div
          class="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1 text-11xl-6 text-darkgray-100"
        >
          <div
            class="h-[37px] relative font-light inline-block z-[1] mq450:text-lg mq975:text-5xl"
          >
            Nom, Prénom,...
          </div>
        </div>
      </div>
      <img
        class="h-[43px] w-[59.1px] relative z-[1]"
        alt=""
        src="/vector-21.svg"
      />
    </div>
    <div
      class="w-[529px] flex flex-row items-start justify-start py-0 px-[39px] box-border max-w-full"
    >
      <div
        class="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border gap-[27px] max-w-full"
      >
        <div class="flex-1 relative inline-block min-w-[90px] mq450:text-xl">
          <span class="font-medium">Chats </span>
          <span class="font-light">(134) </span>
        </div>
        <div class="flex-1 relative inline-block min-w-[90px] mq450:text-xl">
          <span class="font-medium">Chiens </span>
          <span class="font-light">(98) </span>
        </div>
        <div class="relative mq450:text-xl">
          <span class="font-medium">NACs </span>
          <span class="font-light">(57) </span>
        </div>
      </div>
    </div>
    <div
      class="w-[1302px] overflow-x-auto flex flex-col items-start justify-start gap-[5px] max-w-full"
    >
      <Frame1
        jULIEMARTINEAU="JULIE MARTINEAU "
        hrouvilleSaintClair="- 14200 Hérouville Saint Clair "
      /><frame sARAHOSMONT="SARAH OSMONT " caen="- 14000 Caen" /><frame
        sARAHOSMONT="SARAH OSMONT "
        caen="- 14123 Mondeville "
      /><frame
        sARAHOSMONT="CHRISTOPHER ROBIN "
        caen="- 14200 Hérouville Saint Clair "
      /><Frame1
        jULIEMARTINEAU="NOEMIE DESCHAMPS "
        hrouvilleSaintClair="- 14200 Hérouville Saint Clair "
        propHeight="30px"
      /><Frame1
        jULIEMARTINEAU="NAÏA PHILIPPOT "
        hrouvilleSaintClair="- 14123 Mondeville"
        propHeight="unset"
      /><frame
        sARAHOSMONT="JULIE MARTINEAU "
        caen="- 14123 Mondeville"
      /><Frame1
        jULIEMARTINEAU="SARAH OSMONT "
        hrouvilleSaintClair="- 14000 Caen"
        propHeight="30px"
      />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Frame1 from "./Frame1.vue";
  import Frame from "./Frame.vue";

  export default defineComponent({
    name: "FrameChatDogsNacs",
    components: { Frame1, Frame },
  });
</script>
