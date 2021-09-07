<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="row" v-for="alliMale in alliMales" :key="alliMale.raceName">
          <div class="col"><img :src="alliMale.imgPath" alt="" /></div>
        </div>
      </div>
      <div class="col">
        <div
          class="row"
          v-for="alliFemale in alliFemales"
          :key="alliFemale.raceName"
        >
          <div class="col">{{ alliFemale }}</div>
        </div>
      </div>
      <div class="col">
        <div class="row" v-for="cls in classes" :key="cls.className">
          <div class="col">{{ cls }}</div>
        </div>
      </div>
      <div class="col">
        <div
          class="row"
          v-for="hordeMale in hordeMales"
          :key="hordeMale.raceName"
        >
          <div class="col">{{ hordeMale }}</div>
        </div>
      </div>
      <div class="col">
        <div
          class="row"
          v-for="hordeFemale in hordeFemales"
          :key="hordeFemale.raceName"
        >
          <div class="col">{{ hordeFemale }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  allianceFemales,
  allianceMales,
  classes,
  hordeFemales,
  hordeMales,
} from "../helpers/character-creator.helper";

export default {
  name: "CharacterCreator",
  data() {
    return {
      alliMales: allianceMales,
      alliFemales: allianceFemales,
      classes: classes,
      hordeMales: hordeMales,
      hordeFemales: hordeFemales,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
