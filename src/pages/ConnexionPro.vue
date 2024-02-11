<template>

    <main
      class="flex-1 overflow-hidden flex flex-col items-center justify-start pt-[64px] pb-[181px] pr-5 pl-[35px] box-border relative gap-[161px] max-w-full mq450:gap-[161px] mq450:pt-[65px] mq450:pb-[77px] mq450:box-border mq675:gap-[161px] mq825:pt-[100px] mq825:pb-[118px] mq825:box-border"
    >
      <img
        class=" absolute my-0 mx-[!important] top-[0px] right-[0px] left-[0px] overflow-hidden shrink-0"
        alt=""
        src="/rectangle-1.svg"
      />
      <div
        class="w-[550px] flex flex-row flex-wrap items-center justify-start gap-[29px] max-w-full z-[2]"
      >
        <img
          class="h-[93.6px] w-[155.2px] relative"
          alt=""
          src="/vector.svg"
        />
        <img
          class="h-[106.9px] flex-1 relative max-w-full overflow-hidden min-w-[107px]"
          alt=""
          src="/group.svg"
        />
      </div>
      <div
        class="w-[322px] flex flex-row items-start justify-start py-0 pr-[15px] pl-0 box-border max-w-full"
      >
        <FrameAdressEmail />
      </div>
    </main>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameAdressEmail from "../components/FrameAdressEmail.vue";

  export default defineComponent({
    name: "ConnexionPro",
    components: { FrameAdressEmail },
  });
</script>
