<template>
  <character-panel
    v-for="karakter of karakterek"
    :karakter="karakter"
    :key="karakter.name"
  ></character-panel>
</template>

<script>
import CharacterPanel from "@/components/CharacterPanel";

export default {
  name: "CharacterList",
  components: { CharacterPanel },
  data() {
    return {};
  },
  methods: {},
  computed: {
    karakterek() {
      return this.$store.state.karakterek;
    },
  },
  created() {
    this.$store.dispatch("loadKarakters");
  },
};
</script>

<style scoped></style>
