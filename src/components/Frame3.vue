<template>
  <div
    class="flex-1 flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border gap-[15px] min-w-[195px] text-center text-lg-6 text-darkslateblue-100 font-montserrat"
  >
    <div
      class="self-stretch rounded-81xl flex flex-row items-center justify-center py-[11px] pr-[43px] pl-[42px] whitespace-nowrap text-lg text-orange border-[1px] border-solid border-orange mq450:pl-5 mq450:pr-5 mq450:box-border"
    >
      <div
        class="h-11 w-[286px] relative rounded-81xl box-border hidden border-[1px] border-solid border-orange"
      />
      <div class="flex-1 relative font-medium z-[1]">Jeudi 23 novembre</div>
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pr-px pl-0"
    >
      <div
        class="flex-1 bg-lavender overflow-hidden flex flex-row items-end justify-start py-1.5 pr-[7px] pl-[21px] gap-[21px]"
      >
        <div class="h-[38px] w-[287px] relative bg-lavender hidden" />
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
      class="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pr-px pl-0 text-12xl-7 text-white"
    >
      <div
        class="flex-1 bg-lavender overflow-hidden flex flex-row items-center justify-center py-0 pr-[7px] pl-1"
      >
        <div class="h-[38px] w-[287px] relative bg-lavender hidden" />
        <div class="flex-1 flex flex-row items-center justify-start">
          <div
            class="h-[26px] w-[275.9px] relative rounded-[76.32px] bg-orange cursor-pointer z-[1]"
            @click="onMarieDupontGroupCHIENMClick"
          />
          <div
            class="h-[39px] w-[21.8px] relative font-medium inline-block shrink-0 z-[2] ml-[-150px] mq450:text-lgi mq800:text-6xl"
          >
            +
          </div>
        </div>
      </div>
    </div>
    <MarieDupontImage
      propWidth="unset"
      propDisplay="inline-block"
      propFlex="1"
    />
    <div
      class="self-stretch h-[71px] flex flex-row items-start justify-start pt-0 pb-[7px] pr-px pl-0 box-border"
    >
      <div class="self-stretch flex-1 relative bg-ivoire" />
    </div>
    <MarieDupontImage
      propWidth="unset"
      propDisplay="inline-block"
      propFlex="1"
    />
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pr-px pl-0"
    >
      <div
        class="flex-1 bg-lavender overflow-hidden flex flex-row items-center justify-start py-1.5 pr-[7px] pl-[21px] gap-[21px]"
      >
        <div class="h-[38px] w-[287px] relative bg-lavender hidden" />
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
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pr-px pl-0"
    >
      <div
        class="h-[37px] flex-1 bg-lavender overflow-hidden flex flex-row items-end justify-start pt-1 pb-1.5 pr-[7px] pl-[21px] box-border gap-[28px]"
      >
        <div class="h-[37px] w-[287px] relative bg-lavender hidden" />
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
    <Frame6 />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import MarieDupontImage from "./MarieDupontImage.vue";
  import Frame6 from "./Frame6.vue";

  export default defineComponent({
    name: "Frame3",
    components: { MarieDupontImage, Frame6 },
    methods: {
      onMarieDupontGroupCHIENMClick() {
        this.$router.push("/validationrdvpro");
      },
    },
  });
</script>
