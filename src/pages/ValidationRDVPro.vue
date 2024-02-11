<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[55px] box-border gap-[55px] tracking-[normal] mq725:gap-[55px]"
  >
    <InnerFrameA />
    <section
      class="w-[1332px] flex flex-row items-start justify-end py-0 px-5 box-border max-w-full text-left text-11xl-5 text-ivoire font-montserrat"
    >
      <div
        class="w-[1180px] flex flex-col items-center justify-start gap-[43px] max-w-full mq725:gap-[43px]"
      >
        <div
          class="w-[704px] flex flex-row items-start justify-start max-w-full"
        >
          <div
            class="flex flex-row items-center justify-start gap-[12px] max-w-full mq725:flex-wrap"
          >
            <div
              class="rounded-[125.04px] bg-bleu-nuit flex flex-row items-center justify-center pt-[15px] pb-4 pr-[27px] pl-7 box-border max-w-full whitespace-nowrap"
            >
              <div
                class="h-[68.8px] w-[437.7px] relative rounded-[125.04px] bg-bleu-nuit hidden max-w-full"
              />
              <div class="h-[37px] relative font-semibold inline-block z-[1]">
                Jeudi 23 novembre 2023
              </div>
            </div>
            <div
              class="h-[37px] relative font-semibold text-bleu-nuit inline-block mq450:text-lg mq975:text-5xl"
            >
              à
            </div>
            <div
              class="rounded-[125.04px] bg-orange flex flex-row items-center justify-center pt-[15px] pb-4 pr-7 pl-[26px]"
            >
              <div
                class="h-[68.8px] w-[151.3px] relative rounded-[125.04px] bg-orange hidden"
              />
              <div
                class="h-[37px] relative font-semibold inline-block z-[1] mq450:text-lg mq975:text-5xl"
              >
                10H00
              </div>
            </div>
          </div>
        </div>
        <div
          class="self-stretch flex flex-col items-center justify-start gap-[31px] max-w-full text-5xl-4 text-orange mq725:gap-[31px]"
        >
          <div
            class="self-stretch flex flex-row items-start justify-start gap-[41px] max-w-full mq725:gap-[41px] mq1000:flex-wrap"
          >
            <div
              class="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[370px] max-w-full mq450:min-w-full mq1000:flex-1"
            >
              <div
                class="self-stretch rounded-49xl box-border flex flex-col items-start justify-start pt-9 pb-11 pr-[49px] pl-[21px] gap-[31px] max-w-full border-[5px] border-solid border-orange mq725:gap-[31px] mq725:pt-[23px] mq725:pr-6 mq725:pb-[29px] mq725:box-border"
              >
                <div
                  class="w-[570px] h-[537px] relative rounded-49xl box-border hidden max-w-full border-[5px] border-solid border-orange"
                />
                <div
                  class="rounded-81xl flex flex-row items-center justify-center pt-[15px] pb-4 pr-[34px] pl-[29px] z-[1] border-[1px] border-solid border-orange"
                >
                  <div class="relative font-semibold mq450:text-xl">
                    PROPRIÉTAIRE
                  </div>
                  <div
                    class="h-[61px] w-[250px] relative rounded-81xl box-border hidden border-[1px] border-solid border-orange"
                  />
                </div>
                <div
                  class="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-3xs"
                >
                  <div
                    class="flex-1 rounded-81xl bg-ivoire flex flex-row items-start justify-start pt-2 px-7 pb-9 box-border max-w-full z-[2]"
                  >
                    <div
                      class="h-14 w-[490px] relative rounded-81xl bg-ivoire hidden max-w-full"
                    />
                    <div class="relative font-light z-[3]">NOM</div>
                  </div>
                </div>
                <div
                  class="self-stretch flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full"
                >
                  <div
                    class="flex-1 flex flex-col items-end justify-start gap-[20px] max-w-full"
                  >
                    <SubjectOfVisitLabel
                      pRNOM="PRÉNOM"
                      nUMROTEL="NUMÉRO TEL"
                    /><SubjectOfVisitLabel
                      pRNOM="ADRESSE MAIL"
                      nUMROTEL="ADRESSE POSTALE"
                      propPadding="unset"
                    />
                  </div>
                </div>
              </div>
            </div>
            <form
              class="m-0 flex-[0.8436] rounded-49xl box-border overflow-hidden flex flex-col items-start justify-start pt-10 pb-[41px] pr-[53px] pl-[26px] gap-[31px] min-w-[370px] max-w-full border-[5px] border-solid border-darkslateblue-100 mq450:min-w-full mq725:gap-[31px] mq725:pt-[26px] mq725:pb-[27px] mq725:box-border mq1000:flex-1"
            >
              <div
                class="w-[569px] h-[537px] relative rounded-49xl box-border hidden max-w-full border-[5px] border-solid border-darkslateblue-100"
              />
              <div
                class="rounded-81xl flex flex-row items-center justify-center pt-[15px] pb-4 pr-[31px] pl-[30px] z-[1] border-[1px] border-solid border-darkslateblue-100"
              >
                <div
                  class="h-[30px] relative text-5xl-4 font-semibold font-montserrat text-darkslateblue-100 text-left inline-block mq450:text-xl"
                >
                  ANIMAL
                </div>
                <div
                  class="h-[61px] w-[164px] relative rounded-81xl box-border hidden border-[1px] border-solid border-darkslateblue-100"
                />
              </div>
              <div
                class="self-stretch rounded-81xl bg-lavender flex flex-row items-start justify-start pt-3 px-[29px] pb-8 box-border max-w-full z-[1]"
              >
                <div
                  class="h-14 w-[490px] relative rounded-81xl bg-lavender hidden max-w-full"
                />
                <div
                  class="relative text-3xs font-light font-montserrat text-darkslateblue-100 text-left z-[2]"
                >
                  PRÉNOM
                </div>
              </div>
              <div
                class="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full"
              >
                <div
                  class="self-stretch rounded-81xl bg-lavender flex flex-row items-start justify-start pt-3.5 px-[29px] pb-[30px] box-border max-w-full z-[1]"
                >
                  <img
                    class="w-[490px] relative rounded-81xl max-h-full hidden max-w-full"
                    alt=""
                    src="/rectangle-183.svg"
                  />
                  <div
                    class="relative text-3xs font-light font-montserrat text-darkslateblue-100 text-left z-[2]"
                  >
                    TYPE
                  </div>
                </div>
                <div
                  class="self-stretch rounded-81xl bg-lavender flex flex-row items-start justify-start pt-[13px] px-[29px] pb-[31px] box-border max-w-full z-[1]"
                >
                  <div
                    class="h-14 w-[490px] relative rounded-81xl bg-lavender hidden max-w-full"
                  />
                  <div
                    class="relative text-3xs font-light font-montserrat text-darkslateblue-100 text-left z-[2]"
                  >
                    RACE
                  </div>
                </div>
                <div
                  class="self-stretch rounded-81xl bg-lavender flex flex-row items-start justify-start pt-3 px-[23px] pb-8 box-border max-w-full whitespace-nowrap z-[1]"
                >
                  <div
                    class="h-14 w-[490px] relative rounded-81xl bg-lavender hidden max-w-full"
                  />
                  <div
                    class="relative text-3xs font-light font-montserrat text-darkslateblue-100 text-left z-[2]"
                  >
                    DATE DE NAISSANCE
                  </div>
                </div>
                <div
                  class="self-stretch rounded-81xl bg-lavender flex flex-row items-start justify-start pt-[9px] px-[29px] pb-[35px] box-border max-w-full whitespace-nowrap z-[1]"
                >
                  <div
                    class="h-14 w-[490px] relative rounded-81xl bg-lavender hidden max-w-full"
                  />
                  <div
                    class="relative text-3xs font-light font-montserrat text-darkslateblue-100 text-left z-[2]"
                  >
                    SUJET DE VISITE
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            class="w-[633px] rounded-81xl bg-orange flex flex-row items-center justify-center p-4 box-border max-w-full text-11xl-5 text-white"
          >
            <div
              class="h-[69px] w-[633px] relative rounded-81xl bg-orange hidden max-w-full"
            />
            <div
              class="h-[37px] relative font-semibold inline-block z-[1] mq450:text-lg mq975:text-5xl"
            >
              VALIDER LE RENDEZ-VOUS
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import InnerFrameA from "../components/InnerFrameA.vue";
  import SubjectOfVisitLabel from "../components/SubjectOfVisitLabel.vue";

  export default defineComponent({
    name: "ValidationRDVPro",
    components: { InnerFrameA, SubjectOfVisitLabel },
  });
</script>
