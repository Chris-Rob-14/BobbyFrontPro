<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[43px] box-border gap-[22px] tracking-[normal]"
  >
    <FrameMarie /><RectangleContainer />
    <main
      class="self-stretch flex flex-row items-start justify-center py-0 pr-16 pl-5 box-border max-w-full mq1350:pr-8 mq1350:box-border"
    >
      <form
        class="m-0 w-[1580px] flex flex-row items-start justify-center gap-[8px] max-w-full mq1350:flex-wrap"
      >
        <div
          class="w-[55px] flex flex-col items-start justify-start pt-[59px] px-0 pb-0 box-border mq800:pt-[38px] mq800:box-border"
        >
          <div
            class="self-stretch flex flex-col items-center justify-start gap-[41px]"
          >
            <div
              class="w-[45.8px] relative text-sm font-light font-montserrat text-bleu-nuit text-center inline-block"
            >
              9H00
            </div>
            <div
              class="w-[52.8px] relative text-sm font-light font-montserrat text-bleu-nuit text-center inline-block"
            >
              10H00
            </div>
            <div
              class="self-stretch flex flex-col items-end justify-start gap-[42px]"
            >
              <div
                class="self-stretch h-[18px] flex flex-row items-start justify-start py-0 pr-1 pl-[3px] box-border"
              >
                <div
                  class="flex-1 relative text-sm font-light font-montserrat text-bleu-nuit text-center"
                >
                  11H00
                </div>
              </div>
              <div
                class="self-stretch flex flex-row items-start justify-start pt-0 pb-5 pr-[3px] pl-0"
              >
                <div
                  class="flex-1 relative text-sm font-light font-montserrat text-bleu-nuit text-center"
                >
                  12H00
                </div>
              </div>
              <div
                class="w-[50px] flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border"
              >
                <div
                  class="flex-1 relative text-sm font-light font-montserrat text-bleu-nuit text-center shrink-0"
                >
                  13H00
                </div>
              </div>
              <div
                class="w-[52.8px] relative text-sm font-light font-montserrat text-bleu-nuit text-center inline-block"
              >
                14H00
              </div>
              <div
                class="w-[52.8px] relative text-sm font-light font-montserrat text-bleu-nuit text-center inline-block"
              >
                15H00
              </div>
              <div
                class="w-[51.6px] relative text-sm font-light font-montserrat text-bleu-nuit text-center inline-block"
              >
                16H00
              </div>
              <div
                class="w-[51.6px] relative text-sm font-light font-montserrat text-bleu-nuit text-center inline-block"
              >
                17H00
              </div>
              <div
                class="w-[51.6px] relative text-sm font-light font-montserrat text-bleu-nuit text-center inline-block"
              >
                18H00
              </div>
              <div
                class="w-[51.6px] relative text-sm font-light font-montserrat text-bleu-nuit text-center inline-block"
              >
                19H00
              </div>
            </div>
          </div>
        </div>
        <Frame5 /><MarieFrame /><FrameMarieDupontChatChien /><Frame3 /><Frame2 />
      </form>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameMarie from "../components/FrameMarie.vue";
  import RectangleContainer from "../components/RectangleContainer.vue";
  import Frame5 from "../components/Frame5.vue";
  import MarieFrame from "../components/MarieFrame.vue";
  import FrameMarieDupontChatChien from "../components/FrameMarieDupontChatChien.vue";
  import Frame3 from "../components/Frame3.vue";
  import Frame2 from "../components/Frame2.vue";

  export default defineComponent({
    name: "AgendaHebdoPro",
    components: {
      FrameMarie,
      RectangleContainer,
      Frame5,
      MarieFrame,
      FrameMarieDupontChatChien,
      Frame3,
      Frame2,
    },
  });
</script>
