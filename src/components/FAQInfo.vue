<template>
  <div
    class="flex-1 rounded-49xl bg-lavender overflow-hidden flex flex-col items-start justify-start pt-14 pb-[265px] pr-[89px] pl-[55px] box-border gap-[50px] min-w-[486px] max-w-full text-left text-5xl text-darkslateblue-300 font-montserrat mq450:pt-[23px] mq450:pr-5 mq450:pb-28 mq450:box-border mq950:gap-[50px] mq950:pt-9 mq950:pb-[172px] mq950:pr-11 mq950:pl-[27px] mq950:box-border mq950:min-w-full"
  >
    <div
      class="w-[748px] h-[802px] relative rounded-49xl bg-lavender hidden max-w-full"
    />
    <div
      class="w-[253px] flex flex-row items-start justify-start pt-0 px-0 pb-[17px] box-border text-center text-9xl-5 text-white"
    >
      <div
        class="flex-1 rounded-[28.55px] bg-orange flex flex-row items-center justify-center p-3 z-[1] border-[1.9px] border-solid border-orange"
      >
        <div
          class="h-[59px] w-[253.1px] relative rounded-[28.55px] bg-orange box-border hidden border-[1.9px] border-solid border-orange"
        />
        <div
          class="h-[35px] w-[149px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-4xl"
        >
          FAQ
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full"
    >
      <div
        class="flex-1 flex flex-col items-end justify-start gap-[39px] max-w-full mq950:gap-[39px]"
      >
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full"
        >
          <div
            class="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full"
          >
            <img
              class="h-[1.5px] w-[21.6px] relative z-[1]"
              alt=""
              src="/-icon-minus.svg"
            />
            <div
              class="flex-1 relative font-medium inline-block max-w-[calc(100%_-_27px)] z-[1] mq450:text-lgi"
            >
              Comment annuler un rdv ?
            </div>
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-[27px] box-border max-w-full"
          >
            <div
              class="h-[121px] flex-1 relative inline-block max-w-full z-[1] mq450:text-lgi"
            >
              Pour annuler un rendez-vous, aller sur votre agenda sélectionner
              le rendez-vous en question et sélectionner supprimer sur votre
              droite.
            </div>
          </div>
          <div
            class="self-stretch flex flex-row items-end justify-start gap-[10px] max-w-full mq950:flex-wrap"
          >
            <div
              class="flex flex-col items-start justify-start pt-0 px-0 pb-[3px]"
            >
              <img
                class="w-[21.6px] h-4 relative z-[1]"
                alt=""
                src="/vector-22.svg"
              />
            </div>
            <div
              class="flex-1 relative font-medium inline-block min-w-[268px] max-w-full z-[1] mq450:text-lgi"
            >
              Résilier mon abonnement ?
            </div>
          </div>
        </div>
        <div
          class="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full"
        >
          <img
            class="h-4 w-[21.6px] relative z-[1]"
            alt=""
            src="/vector-22.svg"
          />
          <div
            class="h-8 flex-1 relative font-medium inline-block max-w-[calc(100%_-_34px)] z-[1] mq450:text-lgi"
          >
            Sécurité et confidentialité
          </div>
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full"
    >
      <div
        class="flex-1 flex flex-row items-center justify-start gap-[5px] max-w-full"
      >
        <img
          class="h-4 w-[21.6px] relative z-[1]"
          alt=""
          src="/vector-22.svg"
        />
        <div
          class="flex-1 relative font-medium inline-block max-w-[calc(100%_-_27px)] z-[1] mq450:text-lgi"
        >
          Réinitialiser mon mot de passe
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FAQInfo",
  });
</script>
