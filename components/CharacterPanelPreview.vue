<template>
  <div v-if="$store.state.ujKarakter.karakterPicture">
    <img :src="ujKarakter.karakterPicture" alt="crest" class="crest" />
    {{ ujKarakter.karakterPicture }}
  </div></template
>

<script>
import { mapState } from "vuex";
export default {
  name: "CharacterPanelPreview",
  computed: mapState(["ujKarakter"])
};
</script>

<style scoped>
.miniFlag {
  width: 50px;
  height: 50px;
}
.crest {
  width: 200px;
  height: 200px;
}
</style>
