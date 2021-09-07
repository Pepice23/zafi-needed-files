<template>
  <div class="container text-center border border-3 mt-3">
    <div class="row">
      <div class="col">
        <figure>
          <img :src="karakter.cls_icon" alt="" class="crest" />
          <figcaption>
            <h3>{{ karakter.name }}</h3>
          </figcaption>
          <div class="row">
            <table class="container">
              <tbody>
                <tr>
                  <td>
                    <h3>
                      <img
                        :src="karakter.faction_icon"
                        alt=""
                        class="faction-icon"
                      />
                    </h3>
                  </td>
                  <td>
                    <h3>{{ karakter.gender }}</h3>
                  </td>
                  <td>
                    <h3>{{ karakter.race }}</h3>
                  </td>
                  <td>
                    <h3>{{ karakter.cls }}</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
      <div class="col">
        <h3>Szint: 1</h3>
        <h3>Item Level: 0</h3>
        <h3>Pénz: 0</h3>
        <button class="btn btn-success m-3 big-box">Kiválasztás</button>
        <button class="btn btn-danger m-3 big-box">Törlés</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterPanel",
  data() {
    return {};
  },
  props: {
    karakter: {
      gender: String,
      race: String,
      cls: String,
      cls_icon: String,
      faction: String,
      faction_icon: String,
    },
  },
};
</script>

<style scoped>
.big-box {
  width: 100px;
  height: 50px;
}
.crest {
  width: 100px;
  height: 100px;
}
.faction-icon {
  width: 50px;
  height: 50px;
}
</style>
