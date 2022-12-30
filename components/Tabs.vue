<template>
  <v-list>
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      @click="check(item)"
    >
      <v-icon slot="prependIcon" color="green" icon="mdi-vuejs"></v-icon>
      {{ item.text }}
    </v-list-item>
  </v-list>
</template>

<script>
import Ind from "~/components/Ind.vue";
import Login from "~/components/Login.vue";
import Logout from "~/components/Logout.vue";

import { mapState, mapActions } from "pinia";

export default {
  components: { Ind, Login, Logout },
  computed: {
    ...mapState(useTabStore, ["tab"]),
  },
  data() {
    return {
      items: [
        {
          text: "index.vue",
          comp: Ind,
        },
        {
          text: "login.vue",
          comp: Login,
        },
        {
          text: "logout.vue",
          comp: Logout,
        },
      ],
    };
  },
  watch: {
    tab() {
      console.log("this is my tab value");
    },
  },
  methods: {
    ...mapActions(useTabStore, ["changeTab"]),
    check(tabObj) {
      console.log(tabObj);
      this.changeTab(tabObj);
      console.log(this.tab, "this is current tab");
    },
  },
};
</script>

<style scoped>
.v-btn__content {
  color: white;
  text-transform: unset !important;
  font-weight: 100;
  font-size: 1rem;
}
.btn {
  text-transform: unset !important;
}
.v-list-item {
  color: white;
}

.mdi-vuejs ::before,
i {
  color: green;
}
</style>
