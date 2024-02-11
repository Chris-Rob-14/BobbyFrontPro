<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[29px] tracking-[normal]"
  >
    <header
      class="self-stretch h-[162px] bg-lavender overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[49px] pb-px pr-[59px] pl-[77px] box-border gap-[20px] max-w-full text-left text-6xl text-white font-inter mq1050:pl-[38px] mq1050:pr-[29px] mq1050:box-border"
    >
      <div
        class="h-[162px] w-[1980px] relative bg-lavender hidden max-w-full"
      />
      <div
        class="w-[490px] flex flex-row items-center justify-start gap-[26px] max-w-full z-[1] mq450:flex-wrap"
      >
      <router-link to="/accueilpro" class="h-auto w-full relative">
          <img :src="logo" alt="Logo" class="h-auto w-full relative" />
        </router-link>
        
      </div>
      <div
        class="self-stretch w-[1249px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border max-w-full"
      >
        <div
          class="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[11px] max-w-full"
        >
          <div class="h-[85px] w-[138px] relative">
            <div
              class="absolute top-[0px] left-[0px] rounded-t-31xl rounded-b-none bg-bleu-nuit w-full h-full cursor-pointer z-[1]"
              @click="onRectangleClick"
            />
            <img
              class="absolute top-[26px] left-[33px] w-[72.2px] h-[45.5px] z-[2]"
              alt=""
              src="/vector-12.svg"
            />
          </div>
          <div
            class="self-stretch flex-1 flex flex-row items-center justify-start max-w-full"
          >
            <div
              class="self-stretch w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit max-w-full cursor-pointer z-[1]"
              @click="onAccueilGroupClick"
            />
            <div class="relative font-semibold z-[2] ml-[-245px]">ACCUEIL</div>
          </div>
          <div
            class="flex-[0.2901] rounded-t-31xl rounded-b-none bg-bleu-nuit flex flex-row items-center justify-start pt-[29px] pb-[30px] pr-[143px] pl-28 box-border max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit hidden max-w-full"
            />
            <div class="relative font-semibold z-[1]">AGENDA</div>
          </div>
          <div
            class="flex-[0.3346] rounded-t-31xl rounded-b-none bg-orange flex flex-row items-center justify-start pt-[29px] pb-[30px] pr-[127px] pl-28 box-border max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-orange hidden max-w-full"
            />
            <div class="relative font-semibold z-[1]">CONTACT</div>
          </div>
        </div>
      </div>
    </header>
    <main
      class="w-[1639px] flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full lg:pl-[27px] lg:pr-[27px] lg:box-border"
    >
      <section
        class="flex-1 flex flex-row items-center justify-start relative max-w-full text-center text-9xl-5 text-white font-montserrat"
      >
        <img
          class="h-[29.7px] w-[47px] absolute my-0 mx-[!important] right-[0px] bottom-[57.3px]"
          alt=""
          src="/-icon-send.svg"
        />
        <div
          class="w-[1353px] flex flex-row items-center justify-start gap-[63px] max-w-full lg:flex-wrap mq750:gap-[63px] mq450:gap-[63px]"
        >
          <FrameCancelAppointment
            message="FAQ"
            propAlignSelf="unset"
            propWidth="542px"
            propPadding="20px 0px"
            propMinWidth="542px"
            propHeight="35px"
          />
          <div
            class="flex-1 rounded-49xl bg-lavender flex flex-col items-start justify-start pt-[61px] pb-[43px] pr-10 pl-[60px] box-border gap-[431px] min-w-[486px] max-w-full mq750:gap-[431px] mq750:pl-[30px] mq750:box-border mq750:min-w-full mq450:gap-[431px] mq450:pt-[26px] mq450:pb-5 mq450:box-border mq1050:pt-10 mq1050:pb-7 mq1050:box-border"
          >
            <div
              class="w-[748px] h-[802px] relative rounded-49xl bg-lavender hidden max-w-full"
            />
            <div
              class="w-[253px] rounded-[28.55px] bg-orange box-border flex flex-row items-center justify-center p-3 z-[1] border-[1.9px] border-solid border-orange"
            >
              <div
                class="h-[59px] w-[253.1px] relative rounded-[28.55px] bg-orange box-border hidden border-[1.9px] border-solid border-orange"
              />
              <div
                class="w-[149px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-4xl"
              >
                Message
              </div>
            </div>
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[46px] max-w-full text-left text-5xl text-gray mq750:gap-[46px]"
            >
              <div
                class="w-[399px] rounded-11xl bg-bleu-nuit flex flex-row items-center justify-center py-4 pr-[29px] pl-7 box-border max-w-full z-[1]"
              >
                <div
                  class="h-[103px] w-[399.3px] relative rounded-11xl bg-bleu-nuit hidden max-w-full"
                />
                <div
                  class="h-[71px] flex-1 relative font-medium inline-block max-w-full z-[2] mq450:text-lgi"
                >
                  <p class="[margin-block-start:0] [margin-block-end:4px]">
                    Bonjour !
                  </p>
                  <p class="m-0">En quoi puis-je vous aider ?</p>
                </div>
              </div>
              <div
                class="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[27px] box-border max-w-full text-darkgray-200"
              >
                <div
                  class="flex-1 flex flex-row items-center justify-start max-w-full"
                >
                  <div
                    class="h-8 flex-1 relative inline-block max-w-full z-[2] mq450:text-lgi"
                  >
                    Formuler votre besoin ici
                  </div>
                  <div
                    class="h-[59px] w-[378px] relative rounded-49xl bg-white max-w-full z-[1] ml-[-283px]"
                  >
                    <div
                      class="absolute top-[0px] left-[-0.3px] rounded-49xl bg-white w-full h-full hidden z-[1]"
                    />
                    <div
                      class="absolute h-full top-[0px] bottom-[0px] left-[306.7px] rounded-49xl bg-bleu-nuit w-[71px] z-[2]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameCancelAppointment from "../components/FrameCancelAppointment.vue";

  export default defineComponent({
    name: "MessageriePro",
    components: { FrameCancelAppointment },
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
      onAccueilGroupClick() {
        this.$router.push("/");
      },
    },
  });
</script>
