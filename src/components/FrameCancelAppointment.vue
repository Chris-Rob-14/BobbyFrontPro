<template>
  <div
    class="self-stretch flex flex-col items-center justify-start gap-[61px] text-center text-21xl text-darkslateblue-300 font-montserrat mq450:gap-[61px] mq950:gap-[61px]"
    :style="frameCancelAppointmentStyle"
  >
    <div
      class="self-stretch flex flex-col items-start justify-start gap-[22px]"
    >
      <h2
        class="m-0 self-stretch h-[109px] relative text-inherit font-extrabold font-inherit inline-block shrink-0 mq450:text-5xl mq950:text-13xl"
      >
        <p class="[margin-block-start:0] [margin-block-end:4px]">
          Un soucis avec Bobby ?
        </p>
        <p class="m-0">Une question ?</p>
      </h2>
      <h2
        class="m-0 self-stretch h-[88px] relative text-inherit font-semibold font-inherit text-orangered inline-block shrink-0 mq450:text-5xl mq950:text-13xl"
      >
        Contactez le service 24h/24h
      </h2>
    </div>
    <div
      class="w-[253px] flex flex-col items-start justify-start gap-[29px] text-9xl-5 text-white"
    >
      <div
        class="self-stretch rounded-[28.55px] bg-orange flex flex-row items-center justify-center pt-2.5 px-2.5 pb-3.5 whitespace-nowrap border-[1.9px] border-solid border-orange"
      >
        <div
          class="h-[59px] w-[253.1px] relative rounded-[28.55px] bg-orange box-border hidden border-[1.9px] border-solid border-orange"
        />
        <div
          class="w-[157px] relative font-semibold inline-block shrink-0 z-[1]"
        >
          Appeler
        </div>
      </div>
      <div
        class="self-stretch rounded-[28.55px] bg-orange flex flex-row items-center justify-center p-3 border-[1.9px] border-solid border-orange"
      >
        <div
          class="h-[59px] w-[253.1px] relative rounded-[28.55px] bg-orange box-border hidden border-[1.9px] border-solid border-orange"
        />
        <div
          class="w-[149px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-4xl"
          :style="messageStyle"
        >
          {{message}}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "FrameCancelAppointment",
    props: {
      message: { type: String },
      propAlignSelf: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propHeight: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      frameCancelAppointmentStyle(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf,
          width: this.propWidth,
          padding: this.propPadding,
          minWidth: this.propMinWidth,
        };
      },
      messageStyle(): CSS.Properties {
        return {
          height: this.propHeight,
        };
      },
    },
  });
</script>
