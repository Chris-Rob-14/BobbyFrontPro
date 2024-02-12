<template>
 <form
    class="m-0 self-ch flex-1 rounded-49xl box-border flex flex-col items-center justify-start pt-9 pb-[17px] pr-[49px] pl-4 gap-[16px] max-w-full border-[5px] border-solid border-orange mq725:pt-[23px] mq725:pr-6 mq725:pb-5 mq725:box-border"
  >
    <div
      class="w-[570px] h-[537px] relative rounded-49xl box-border hidden max-w-full border-[5px] border-solid border-orange"
    />
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 pb-[7px] px-0"
    >
      <div
        class="rounded-81xl flex flex-row items-center justify-center pt-[15px] pb-4 pr-[18px] pl-[17px] z-[1] border-[1px] border-solid border-darkslateblue-100"
      >
        <div
          class="h-[30px] relative text-5xl-4 font-semibold font-montserrat text-darkslateblue-100 text-left inline-block mq450:text-xl"
        >
          Vos informations
        </div>
        <div
          class="h-[61px] w-[250px] relative rounded-81xl box-border hidden border-[1px] border-solid border-darkslateblue-100"
        />
      </div>
    </div>
    <div
      class="self-stretch flex-1 flex flex-col items-center justify-start gap-[8px] max-w-full"
    >
      <div class="flex flex-col items-start justify-start gap-[8px] max-w-full w-[570px]">
        <label for="cabinetName" class="text-2xl font-semibold font-montserrat text-orange mq450:text-xl">Nom du cabinet vétérinaire</label>
        <input id="cabinetName" v-model="name" type="text" class="h-[52px] w-full rounded-[10px] bg-white border-[1px] border-solid border-darkslateblue-100 flex flex-row items-center justify-start p-[15px] outline-none box-border">
      </div>
      <div class="flex flex-col items-start justify-start gap-[8px] max-w-full w-[570px]">
        <label for="postalAddress" class="text-2xl font-semibold font-montserrat text-orange mq450:text-xl">Adresse postale</label>
        <input id="postalAddress" v-model="address" type="text" class="h-[52px] w-full rounded-[10px] bg-white border-[1px] border-solid border-darkslateblue-100 flex flex-row items-center justify-start p-[15px] outline-none box-border">
      </div>
      <div class="flex flex-col items-start justify-start gap-[8px] max-w-full w-[570px]">
        <label for="phoneNumber" class="text-2xl font-semibold font-montserrat text-orange mq450:text-xl">Numéro de téléphone</label>
        <input id="phoneNumber" v-model="number" type="tel" class="h-[52px] w-full rounded-[10px] bg-white border-[1px] border-solid border-darkslateblue-100 flex flex-row items-center justify-start p-[15px] outline-none box-border">
      </div>
      <div class="flex flex-col items-start justify-start gap-[8px] max-w-full w-[570px]">
        <label for="emailAddress" class="text-2xl font-semibold font-montserrat text-orange mq450:text-xl">Adresse mail</label>
        <input id="emailAddress" v-model="email" type="email" class="h-[52px] w-full rounded-[10px] bg-white border-[1px] border-solid border-darkslateblue-100 flex flex-row items-center justify-start p-[15px] outline-none box-border">
      </div>
      <br>
    </div>
  </form>
</template>
<script lang="ts">
 import { defineComponent, ref } from "vue";
 import axios from 'axios';
 axios.defaults.withCredentials = true;

export default defineComponent({
  data() {
    return {
      name: '',
      address: '',
      number: '',
      email: '',
    }
  },
  async beforeMount() {
    await this.getVeto();
    console.log(this.name);
  },
  name: "CabinetNameFrame",
  methods: {
    async getVeto() {
      try {
          const response = await axios.get('http://localhost:3030/auth/status', {
            withCredentials: true,
          })

          let veto = response.data.veterinary;

          if (response.status === 200) {
            console.log('ok');
            this.name = veto.name;
            this.address = veto.address + ' ' + veto.zip_code + ' ' + veto.city;
            this.email = response.data.email
          }

        } catch (error) {

          if (error.code == 'ERR_BAD_REQUEST') this.errorLogin = true;
        }

    }
  }
});
</script>
