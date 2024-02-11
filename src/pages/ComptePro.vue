<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[171px] box-border gap-[154px] tracking-[normal] mq725:gap-[154px] mq1000:gap-[154px]"
  >
    <header
      class="self-stretch bg-lavender overflow-hidden flex flex-row items-start justify-between pt-[49px] pb-px pr-[43px] pl-[77px] box-border gap-[20px] max-w-full text-left text-6xl text-white font-inter mq1000:pl-[38px] mq1000:pr-[21px] mq1000:box-border"
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
          <div
            class="flex-[0.3418] rounded-t-31xl rounded-b-none bg-orange flex flex-row items-end justify-start pt-[33px] pb-[26px] pr-[133px] pl-[118px] box-border max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-orange hidden max-w-full"
            />
            <div class="relative font-semibold z-[2]">ACCUEIL</div>
          </div>
          <div
            class="flex-1 flex flex-row items-end justify-center pt-[33px] pb-[26px] pr-[23px] pl-5 box-border relative max-w-full z-[1]"
          >
            <div
              class="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0.5px] bottom-[0px] left-[-0.5px] rounded-t-31xl rounded-b-none bg-bleu-nuit cursor-pointer"
              @click="onRectangleClick"
            />
            <h1
              class="m-0 relative text-inherit font-semibold font-inherit z-[1]"
            >
              AGENDA
            </h1>
          </div>
          <div
            class="flex-[0.3801] rounded-t-31xl rounded-b-none bg-bleu-nuit flex flex-row items-end justify-start pt-[33px] pb-[26px] pr-[133px] pl-[106px] box-border max-w-full cursor-pointer z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
            @click="onACCUEILRECT2Click"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit hidden max-w-full"
            />
            <div class="relative font-semibold z-[1]">CONTACT</div>
          </div>
        </div>
      </div>
    </header>
    <div
      class="w-[619px] h-[538px] flex flex-row items-start justify-start py-0 pr-[29px] pl-5 box-border max-w-full"
    >
      <CabinetNameFrame />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import CabinetNameFrame from "../components/CabinetNameFrame.vue";

  export default defineComponent({
    name: "ComptePro",
    components: { CabinetNameFrame },
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
      onBackgroundRectangleClick() {
        this.$router.push("/recherchepro");
      },
      onRectangleClick() {
        this.$router.push("/agendahebdopro");
      },
      onACCUEILRECT2Click() {
        this.$router.push("/faqpro");
      },
    },
  });
</script>
