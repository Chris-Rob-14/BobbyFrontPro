<template>
  <header
    class="self-stretch h-[162px] bg-lavender overflow-hidden shrink-0 flex flex-row items-end justify-start pt-[49px] pb-px pr-[75px] pl-[77px] box-border gap-[11px] max-w-full text-left text-6xl text-white font-inter mq1000:pl-[38px] mq1000:pr-[37px] mq1000:box-border"
  >
    <div class="h-[162px] w-[1980px] relative bg-lavender hidden max-w-full" />
    <div
      class="self-stretch w-[568px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full"
    >
    <div
        class="w-[490px] flex flex-row items-center justify-start gap-[26px] max-w-full z-[1] mq450:flex-wrap"
      >
      <router-link to="/accueilpro" class="h-auto w-full relative">
          <img :src="logo" alt="Logo" class="h-auto w-full relative" />
        </router-link>
        
      </div>
    </div>
    <div class="h-[85px] w-[138px] relative">
      <div
        class="absolute top-[0px] left-[0px] rounded-t-31xl rounded-b-none bg-bleu-nuit w-full h-full cursor-pointer z-[1]"
        @click="onGroupEClick"
      />
      <img
        class="absolute top-[19px] left-[35px] w-[72.2px] h-[45.5px] z-[2]"
        alt=""
        src="/vector-12.svg"
      />
    </div>
    <div
      class="h-[85px] flex-1 flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border gap-[10px] max-w-full"
    >
      <div
        class="self-stretch flex-1 flex flex-row items-center justify-start max-w-full"
      >
        <div
          class="self-stretch w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit max-w-full cursor-pointer z-[1]"
          @click="onRectangleGClick"
        />
        <h1
          class="m-0 relative text-inherit font-semibold font-inherit z-[2] ml-[-229px]"
        >
          ACCUEIL
        </h1>
      </div>
      <div
        class="flex-[0.8719] rounded-t-31xl rounded-b-none bg-orange flex flex-row items-center justify-center pt-[29px] pb-[30px] pr-[26px] pl-5 box-border max-w-full z-[1]"
      >
        <div
          class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-orange hidden max-w-full"
        />
        <div class="relative font-semibold z-[1]">AGENDA</div>
      </div>
      <div
        class="flex-[0.3346] rounded-t-31xl rounded-b-none bg-bleu-nuit flex flex-row items-center justify-end pt-[29px] pb-[30px] pr-[116px] pl-[123px] box-border max-w-full cursor-pointer z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
        @click="onACCUEIL1Click"
      >
        <div
          class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit hidden max-w-full"
        />
        <div class="relative font-semibold z-[1]">CONTACT</div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "InnerFrameA",
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
      onGroupEClick() {
        this.$router.push("/recherchepro");
      },
      onRectangleGClick() {
        this.$router.push("/");
      },
      onACCUEIL1Click() {
        this.$router.push("/faqpro");
      },
    },
  });
</script>
