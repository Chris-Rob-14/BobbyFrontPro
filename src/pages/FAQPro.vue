<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border gap-[34px] tracking-[normal] text-left text-6xl text-white font-inter mq950:gap-[34px]"
  >
    <div
      class="self-stretch bg-lavender overflow-hidden flex flex-row items-start justify-between pt-[49px] pb-0 pr-[65px] pl-[77px] box-border gap-[20px] max-w-full mq450:flex-wrap mq950:flex-wrap mq1900:flex-wrap mq1425:flex-wrap mq1425:pl-[38px] mq1425:pr-8 mq1425:box-border"
    >
      <div
        class="h-[162px] w-[1979px] relative bg-lavender hidden max-w-full"
      />
      <div
        class="w-[490px] flex flex-row items-center justify-start gap-[26px] max-w-full z-[1] mq450:flex-wrap"
      >
      <router-link to="/accueilpro" class="h-auto w-full relative">
          <img :src="logo" alt="Logo" class="h-auto w-full relative" />
        </router-link>
        
      </div>
      <div
        class="w-[1249px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[1249px] max-w-full mq450:flex-1 mq950:flex-1 mq1900:flex-1 mq1900:min-w-full mq1425:flex-1"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[11px] max-w-full mq1425:flex-wrap"
        >
        <router-link to="/recherchepro" class="no-underline">
  <div class="h-[85px] w-[138px] relative">
    <div
      class="absolute top-[0px] left-[0px] rounded-t-31xl rounded-b-none bg-bleu-nuit w-full h-full cursor-pointer z-[1]"
      @click="onRectangleClick"
    />
    <img
      class="absolute top-[23px] left-[36px] w-[71px] h-[45.5px] z-[2]"
      alt=""
      src="/vector-13.svg"
    />
  </div>
</router-link>
          <router-link to="/accueilpro" class="no-underline">
  <div
    class="flex-1 flex flex-row items-center justify-start min-w-[233px] max-w-full"
  >
    <div
      class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit max-w-full cursor-pointer z-[1]"
      @click="onRectangleClick"
    />
    <div class="relative font-semibold z-[2] ml-[-230px] mq450:text-xl">
      ACCUEIL
    </div>
  </div>
</router-link>
          <div
            class="flex-[0.2901] rounded-t-31xl rounded-b-none bg-bleu-nuit flex flex-row items-center justify-start pt-[31px] pb-7 pr-[134px] pl-[121px] box-border min-w-[233px] max-w-full cursor-pointer z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1"
            @click="onFAQFrameClick"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit hidden max-w-full"
            />
            <div class="relative font-semibold z-[1] mq450:text-xl">AGENDA</div>
          </div>
          <div
            class="flex-[0.3346] rounded-t-31xl rounded-b-none bg-orange flex flex-row items-end justify-end pt-[33px] pb-[26px] pr-[115px] pl-[124px] box-border min-w-[233px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-orange hidden max-w-full"
            />
            <div class="relative font-semibold z-[1] mq450:text-xl">
              CONTACT
            </div>
          </div>
        </div>
      </div>
    </div>
    <main
      class="w-[1468px] flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq1425:pl-[27px] mq1425:pr-[27px] mq1425:box-border"
    >
      <section
        class="flex-1 flex flex-row items-center justify-start gap-[68px] max-w-full mq450:gap-[68px] mq950:gap-[68px] mq1425:flex-wrap"
      >
        <div
          class="w-[542px] flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border min-w-[542px] max-w-full mq950:min-w-full mq1425:flex-1"
        >
          <FrameCancelAppointment message="Message" />
        </div>
        <FAQInfo />
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameCancelAppointment from "../components/FrameCancelAppointment.vue";
  import FAQInfo from "../components/FAQInfo.vue";

  export default defineComponent({
    name: "FAQPro",
    components: { FrameCancelAppointment, FAQInfo },
    data() {
      return {
        logo: "" as string,
      };
    },
    created() {
      this.logo = this.$route.meta.logo as string;
    },
    methods: {
      onLogoContainerClick() {
        this.$router.push("/");
      },
      onRectangleClick() {
        this.$router.push("/recherchepro");
      },
      onRectangle2Click() {
        this.$router.push("/");
      },
      onFAQFrameClick() {
        this.$router.push("/agendahebdopro");
      },
    },
  });
</script>
