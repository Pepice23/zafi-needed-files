<template>
  <div class="text-center">
    <h1>Zafi és az I.N.F.</h1>
    <h1>Verziószám: 0.0.1</h1>
  </div>
  <br />
  <div class="container text-center">
    <h1>Egy szép napon Zafinak el kellett mennie dolgozni...</h1>
    <h1>
      Ezzel alapvetően nem volt problémája, hiszen olyan munkája volt amit
      szeretett...
    </h1>
    <h1>
      De aznap rettentően sok feladatot kapott az
      <strong>I.N.F-től</strong> azaz az
      <strong>Idegesítő Nagy Főnöktől</strong>.
    </h1>
    <h1>
      Tette a dolgát ahogy csak bírta de az a fránya munka csak nem fogyott el.
      Ekkor Zafi megijedt hogy nem fog időben hazaérni és elkezdeni az új
      karakterét a <strong>WoW</strong>-ban.
    </h1>
    <br />
    <h1>Szeretnél segíteni Zafinak?</h1>
    <br />
    <button class="btn btn-success big-box" @click="goToMainMenu">
      Igen :)
    </button>
    <br />
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    goToMainMenu() {
      router.push({ name: "MainMenu" });
    },
  },
};
</script>

<style scoped>
.big-box {
  width: 200px;
  height: 100px;
}
</style>
