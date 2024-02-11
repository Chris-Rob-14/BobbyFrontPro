<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[87px] box-border gap-[65px] tracking-[normal] mq725:gap-[65px] mq1000:gap-[65px]"
  >
    <header
      class="self-stretch bg-lavender overflow-hidden flex flex-row items-start justify-between pt-[49px] pb-px pr-[15px] pl-[77px] box-border gap-[20px] max-w-full text-left text-6xl text-white font-inter mq1000:pl-[38px] mq1000:box-border"
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
        class="w-[1249px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border max-w-full"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[11px] max-w-full"
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
          <div class="h-[85px] flex-1 relative max-w-full">
            <router-link to="/accueilpro" class="no-underline">
  <div
    class="h-[85px] flex-1 relative max-w-full"
  >
    <div
      class="absolute top-[0px] left-[0.2px] rounded-t-31xl rounded-b-none bg-bleu-nuit w-full h-full cursor-pointer z-[1]"
      @click="onRectangleAGENDACONTClick"
    />
    <div
      class="absolute top-[26px] left-[126px] font-semibold inline-block w-[108px] h-[26px] z-[2] text-white"
    >
      ACCUEIL
    </div>
  </div>
</router-link>
          </div>
          <div
            class="flex-[0.8859] rounded-t-31xl rounded-b-none bg-bleu-nuit flex flex-row items-center justify-center pt-[29px] pb-[30px] pr-5 pl-[21px] box-border max-w-full cursor-pointer z-[1]"
            @click="onAGENDAFRAMEClick"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit hidden max-w-full"
            />
            <div class="relative font-semibold z-[1]">AGENDA</div>
          </div>
          <div
            class="flex-[0.3346] rounded-t-31xl rounded-b-none bg-bleu-nuit flex flex-row items-start justify-start pt-6 pb-[35px] pr-[123px] pl-[116px] box-border max-w-full cursor-pointer z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
            @click="onAGENDAFRAME1Click"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit hidden max-w-full"
            />
            <div class="relative font-semibold z-[1]">CONTACT</div>
          </div>
        </div>
      </div>
    </header>
    <FrameChatDogsNacs />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameChatDogsNacs from "../components/FrameChatDogsNacs.vue";

  export default defineComponent({
    name: "RecherchePro",
    components: { FrameChatDogsNacs },
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
      onRectangleAGENDACONTClick() {
        this.$router.push("/");
      },
      onAGENDAFRAMEClick() {
        this.$router.push("/agendahebdopro");
      },
      onAGENDAFRAME1Click() {
        this.$router.push("/faqpro");
      },
    },
  });
</script>
