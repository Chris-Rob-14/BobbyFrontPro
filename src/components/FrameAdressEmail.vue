<template>
  <form
    @submit.prevent="login"
    class="m-0 flex-1 flex flex-col items-start justify-start gap-[63px] mq450:gap-[63px]"
  >
    <div
      class="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] gap-[25px]"
    >
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[5px]"
      >
        <div
          :class="$style.divTitreIdentifiant"
        >
          Adresse e-mail
        </div>
        <input
          v-model="email"
          class="self-stretch rounded-smi bg-ivoire outline-none border-none flex flex-row items-center justify-start pt-3.5 px-[18px] pb-[9px] z-[2]"
          type="email"
          placeholder="Adresse e-mail"
        />
      </div>
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[5px]"
      >
        <div
        :class="$style.divTitreIdentifiant"
        >
          Mot de passe
        </div>
        <input
        v-model="password"
          class="self-stretch rounded-smi bg-ivoire outline-none border-none flex flex-row items-center justify-between pt-3.5 px-[18px] pb-[15px] gap-[20px] z-[2]"
          type="password"
          placeholder="Mot de passe"
        />
      </div>
    </div>
    <div
      class="rounded-11xl bg-orange flex flex-row items-center justify-center py-[17px] pr-[70px] pl-[71px] whitespace-nowrap z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border"
     style="margin: auto;"
      >
      <div class="h-[53px] w-[307px] relative rounded-11xl bg-orange hidden" />
      <div
        class="relative text-lgi font-montserrat font-semibold text-white text-center cursor-pointer z-[1]"
      >
        <button type="submit">
          Connexion
        </button>
      </div>
    </div>
    <div
      class="w-[294px] h-[81px] relative text-mini font-semibold font-montserrat text-white text-center inline-block shrink-0 z-[1]"
    >
      En cas de problème pour vous connecter, appelez nous au 02 31 67 89 56 ou
      écrivez nous à contact@bobby.com
    </div>
  </form>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import axios from 'axios';
  axios.defaults.withCredentials = true;

  export default defineComponent({
    data() {
      return {
        email: '',
        password: '',
        errorLogin: '',
      }
    },
    name: "FrameAdressEmail",
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3030/auth/login', {
            email: this.email,
            password: this.password
          }, {
            withCredentials: true,
          })

          console.log(response);

          if (response.status === 201) {
            this.$router.push("/accueilpro");
          }

        } catch (error) {

          if (error.code == 'ERR_BAD_REQUEST') this.errorLogin = true;
        }
      },
      onConnexionTextClick() {
        this.$router.push("/accueilpro");
      },
    },
  });
</script>

<style module>
.divTitreIdentifiant{
  font-weight: 600;
  font-family: var(--font-montserrat);
  color: var(--ivoire);
  z-index: 1;
}
  </style>