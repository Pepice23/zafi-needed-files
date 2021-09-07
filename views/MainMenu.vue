<template>
  <div class="container text-center">
    <h3>
      Nagyon kedves tőled, hogy segítesz Zafinak! Szeretnél egy új karaktert
      kezdeni, vagy bejelentkeznél és választanál a listádból?
    </h3>
    <button class="btn btn-primary mb-3 mt-2" @click="goToCreator">
      Új karaktert kezdek
    </button>
    <br />
    <button class="btn btn-primary" @click="goToSignIn">
      Bejelentkezés után választok a listából
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

import router from "@/router";

export default {
  name: "MainMenu",
  data() {
    return {};
  },
  methods: {
    goToCreator() {
      router.push({ name: "CharacterCreator" });
    },
    goToSignIn() {
      router.push({ name: "CharacterList" });
    },
  },
};
</script>
