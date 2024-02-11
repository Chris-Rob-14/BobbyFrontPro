<template>
  <header
    class="self-stretch bg-lavender overflow-hidden flex flex-row items-end justify-between pt-[49px] pb-px pr-[61px] pl-[77px] box-border gap-[20px] max-w-full text-left text-6xl text-white font-inter mq1150:pl-[38px] mq1150:pr-[30px] mq1150:box-border"
  >
    <div class="h-[162px] w-[1980px] relative bg-lavender hidden max-w-full" />
    <div
        class="w-[490px] flex flex-row items-center justify-start gap-[26px] max-w-full z-[1] mq450:flex-wrap"
      >
      <router-link to="/accueilpro" class="h-auto w-full relative">
          <img :src="logo" alt="Logo" class="h-auto w-full relative" />
        </router-link>
        
      </div>
    <div
      class="w-[1250px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[11px] max-w-full"
    >
    <router-link to="/recherchepro" class="no-underline">
  <div
    class="h-[85px] w-[138px] relative"
  >
    <div
      class="absolute top-[0px] left-[0px] rounded-t-31xl rounded-b-none bg-bleu-nuit w-full h-full cursor-pointer z-[1]"
      @click="onFrameMarieAnimalChatClick"
    />
    <img
      class="absolute top-[20px] left-[33px] w-[72.2px] h-[45.5px] z-[2]"
      alt=""
      src="/vector-12.svg"
    />
  </div>
</router-link>
<router-link to="/accueilpro" class="text-white no-underline">
  <div
    class="flex-[0.9873] flex flex-row items-start justify-center pt-[26px] pb-[33px] pr-[27px] pl-5 box-border relative max-w-full"
  >
    <div
      class="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[-0.4px] bottom-[0px] left-[0.2px] rounded-t-31xl rounded-b-none bg-bleu-nuit cursor-pointer z-[1]"
      @click="onGroupFridayClick"
    />
    <h2 class="m-0 relative text-inherit font-semibold font-inherit z-[2]">
      ACCUEIL
    </h2>
  </div>
</router-link>
      <div
        class="flex-1 rounded-t-31xl rounded-b-none bg-orange flex flex-row items-start justify-center pt-[26px] pb-[33px] pr-[23px] pl-5 box-border max-w-full z-[1]"
      >
        <div
          class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-orange hidden max-w-full"
        />
        <div class="relative font-semibold z-[1]">AGENDA</div>
      </div>
      <router-link to="/faqpro" class="no-underline">
  <div
    class="flex-[0.3801] rounded-t-31xl rounded-b-none bg-bleu-nuit flex flex-row items-start justify-start pt-[26px] pb-[33px] pr-[134px] pl-[105px] box-border max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border text-white"
  >
    <div
      class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit hidden max-w-full"
    />
    <div class="relative font-semibold z-[1]">CONTACT</div>
  </div>
</router-link>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameMarie",
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
      onFrameMarieAnimalChatClick() {
        this.$router.push("/recherchepro");
      },
      onGroupFridayClick() {
        this.$router.push("/");
      },
    },
  });
</script>
