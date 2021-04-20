<template>
  <inline-svg :src="require(`../assets/icons/${imageUrl}.svg`)"></inline-svg>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  components: {
    InlineSvg,
  },
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
