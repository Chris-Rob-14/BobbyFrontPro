<template>
  <div
    class="self-stretch flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[17px] max-w-full text-left text-3xs text-orange font-montserrat"
    :style="subjectOfVisitLabelStyle"
  >
    <div
      class="self-stretch rounded-81xl bg-ivoire flex flex-row items-start justify-start pt-2.5 px-[30px] pb-[34px] box-border max-w-full z-[2]"
    >
      <div
        class="h-14 w-[490px] relative rounded-81xl bg-ivoire hidden max-w-full"
      />
      <div class="relative font-light z-[3]">{{pRNOM}}</div>
    </div>
    <div
      class="self-stretch rounded-81xl bg-ivoire flex flex-row items-start justify-start pt-[7px] px-7 pb-[37px] box-border max-w-full whitespace-nowrap z-[2]"
    >
      <div
        class="h-14 w-[490px] relative rounded-81xl bg-ivoire hidden max-w-full"
      />
      <div class="relative font-light z-[3]">{{nUMROTEL}}</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "SubjectOfVisitLabel",
    props: {
      pRNOM: { type: String },
      nUMROTEL: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      subjectOfVisitLabelStyle(): CSS.Properties {
        return {
          padding: this.propPadding,
        };
      },
    },
  });
</script>
