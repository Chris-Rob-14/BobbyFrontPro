<template>
  <div
    class="w-[1302px] rounded-81xl bg-lavender overflow-hidden flex flex-row items-start justify-between pt-[17px] pb-[18px] pr-[29px] pl-[39px] box-border gap-[20px] text-left text-6xl text-black font-inter"
  >
    <div
      class="h-[65px] w-[1302px] relative rounded-81xl bg-lavender hidden max-w-full"
    />
    <div class="h-[30px] relative inline-block z-[1] mq450:text-xl">
      <span class="font-medium">{{sARAHOSMONT}}</span>
      <span class="font-light">{{caen}}</span>
    </div>
    <div
      class="h-[31px] w-[83px] rounded-76xl-9 bg-darkkhaki flex flex-row items-center justify-center pt-[5px] px-[3px] pb-[3px] box-border z-[1] text-center text-mid-9 text-bleu-nuit font-montserrat"
    >
      <div
        class="h-[30.7px] w-[82.5px] relative rounded-76xl-9 bg-darkkhaki hidden"
      />
      <div class="relative font-medium z-[1]">CHIEN</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Frame",
    props: {
      sARAHOSMONT: { type: String },
      caen: { type: String },
    },
  });
</script>
