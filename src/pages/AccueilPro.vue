<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[21px] box-border gap-[12px] tracking-[normal] text-left text-6xl text-white font-inter"
  >
    <div
      class="self-stretch bg-lavender overflow-hidden flex flex-row items-start justify-between pt-[49px] pb-px pr-[43px] pl-[77px] box-border gap-[20px] max-w-full mq450:flex-wrap mq925:flex-wrap mq1875:flex-wrap mq1400:flex-wrap mq1400:pl-[38px] mq1400:pr-[21px] mq1400:box-border"
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
        class="w-[1249px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[1249px] max-w-full mq450:flex-1 mq925:flex-1 mq1875:flex-1 mq1875:min-w-full mq1400:flex-1"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-0 box-border gap-[10px] max-w-full mq1400:flex-wrap"
        >
          <div class="h-[85px] w-[138px] relative">
            <div
              class="absolute top-[0px] left-[0px] rounded-t-31xl rounded-b-none bg-bleu-nuit w-full h-full cursor-pointer z-[1]"
              @click="onGroupFClick"
            />
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
          </div>
          <div
            class="flex-[0.3429] rounded-t-31xl rounded-b-none bg-orange flex flex-row items-end justify-start pt-[33px] pb-[26px] pr-[133px] pl-[118px] box-border min-w-[120px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-orange hidden max-w-full"
            />
            <div class="relative font-semibold z-[2] mq450:text-xl">
              ACCUEIL
            </div>
          </div>
          <router-link to="/agendahebdopro">
  <div
    class="flex-1 flex flex-row items-end justify-center pt-[33px] pb-[26px] pr-6 pl-5 box-border relative min-w-[120px] max-w-full z-[1]"
    style="width: 350px"
  >
    <div
      class="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0.5px] bottom-[0px] left-[-0.5px] rounded-t-31xl rounded-b-none bg-bleu-nuit cursor-pointer"
      @click="onRectangleClick"
    />
    <h4
    class="m-0 relative text-white font-semibold z-[1] "
    >
      AGENDA
    </h4>
  </div>
</router-link>
          <div
            class="flex-[0.3813] rounded-t-31xl rounded-b-none bg-bleu-nuit flex flex-row items-end justify-start pt-[33px] pb-[26px] pr-[133px] pl-[106px] box-border min-w-[120px] max-w-full cursor-pointer z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1"
            @click="onAGENDAFRAME1Click"
          >
            <div
              class="h-[85px] w-[359.2px] relative rounded-t-31xl rounded-b-none bg-bleu-nuit hidden max-w-full"
            />
            <div class="relative font-semibold z-[1] mq450:text-xl">
              CONTACT
            </div>
          </div>
        </div>
      </div>
    </div>
    <main
      class="w-[1638px] flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full shrink-0 mq1400:pl-[25px] mq1400:pr-[25px] mq1400:box-border"
    >
      <section
        class="flex-1 flex flex-row items-center justify-start gap-[169px] max-w-full text-center text-5xl-7 text-darkslateblue-300 font-montserrat mq450:gap-[169px] mq925:gap-[169px] mq1400:flex-wrap mq1400:gap-[169px]"
      >
        <div
          class="w-[625px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[625px] max-w-full mq925:min-w-full mq1400:flex-1"
        >
          <div
            class="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-px box-border gap-[81px] max-w-full mq450:gap-[81px] mq925:gap-[81px]"
          >
            <div
              class="self-stretch flex flex-col items-end justify-start gap-[62px] max-w-full mq450:gap-[62px] mq925:gap-[62px]"
            >
              <div
                class="self-stretch flex flex-row items-start justify-start max-w-full"
              >
              </div>
              
              <div
                class="w-[366px] rounded-181xl bg-lavender flex flex-col items-center justify-start pt-4 pb-[17px] pr-[67px] pl-[65px] box-border gap-[18px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
              >
                <div
                  class="w-[366px] h-[142px] relative rounded-181xl bg-lavender hidden max-w-full"
                />
                <div
                  class="self-stretch h-[34px] relative font-semibold inline-block shrink-0 z-[1] mq450:text-xl"
                >
                  Votre compte
                </div>
                <div
                  class="rounded-[77.15px] bg-orange flex flex-row items-center justify-center pt-4 pb-3.5 pr-[49px] pl-[50px] z-[1] text-left text-3xl text-ivoire"
                >
                  <div
                    class="h-[57.9px] w-[174px] relative rounded-[77.15px] bg-orange hidden"
                  />
                  <div class="relative font-semibold z-[2] mq450:text-lg" @click="onAccesButtonClick">
                    ACCÈS
                  </div>
                </div>
              </div>
            </div>
            <!-- <div
              class="w-[590px] rounded-181xl bg-ivoire overflow-hidden flex flex-col items-center justify-start pt-[53px] px-[53px] pb-[54px] box-border gap-[17px] max-w-full mq925:pl-[26px] mq925:pr-[26px] mq925:box-border"
            >
              <div
                class="w-[590px] h-[215px] relative rounded-181xl bg-ivoire hidden max-w-full"
              />
              <div
                class="w-[394px] h-[34px] relative font-semibold inline-block shrink-0 max-w-full z-[1] mq450:text-xl"
              >
                Programmer vos rendez-vous
              </div>
              <div
                class="w-[222px] rounded-[77.15px] bg-orange flex flex-row items-center justify-center pt-[13px] px-3 pb-3 box-border whitespace-nowrap z-[1] text-left text-3xl text-ivoire"
              >
                <div
                  class="h-[57.9px] w-[222.2px] relative rounded-[77.15px] bg-orange hidden"
                />
                <div
                  class="h-8 relative font-semibold whitespace-pre-wrap inline-block cursor-pointer z-[1]"
                  @click="onAJOUTERTextClick"
                >
                  <span>AJOUTER </span>
                 
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <ButtonAdd />
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import ButtonAdd from "../components/ButtonAdd.vue";
  import axios from 'axios';

  export default defineComponent({
    name: "AccueilPro",
    components: { ButtonAdd },
    data() {
      return {
        veto: {
          type: Object,
        },
        rdv: {
          type: Object,
                  },
        logo: "" as string,
      };
    },
    async beforeMount() {
        await this.getVetoStatus();
        console.log(this.veto.veterinary.id);

        await this.getVetoRdvs();
        console.log(this.rdvs);

    },
    async created() {
      this.logo = this.$route.meta.logo as string;
    },
    methods: {
      async getVetoStatus()
      {
        const response = await axios.get('http://localhost:3030/auth/status', {
          withCredentials: true,
        })

        this.veto = response.data;
        this.vetoId = response.data.veterinary.id
      },
      async getVetoRdvs()
      {
        // Assuming your date object is stored in a variable called 'date'
        const date = new Date();

        // Get the year, month, and day from the date object
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so we add 1
        const day = String(date.getDate()).padStart(2, '0');

        // Concatenate the parts to form the desired format
        const formattedDate = `${year}-${month}-${day}`;

        const url = 'http://localhost:3030/veterinaries/rdv/' + this.vetoId + '/' + formattedDate;
        try {
            const response = await axios.get(url, {
              withCredentials: true,
            });

            this.rdvs = response.data;
        } catch(error) {
          console.log(error);
        }
      },
      onGroupFClick() {
        this.$router.push("/recherchepro");
      },
      onRectangleClick() {
        this.$router.push("/agendahebdopro");
      },
      onAGENDAFRAME1Click() {
        this.$router.push("/faqpro");
      },
      onAddClientButtonClick() {
        this.$router.push("/recherchepro");
      },
      onAJOUTERTextClick() {
        this.$router.push("/validationrdvpro");
      },
      onAccesButtonClick() {
        this.$router.push("/comptePro");
      },
    },
  });
</script>
