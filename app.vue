<template>
  <div class="d-flex justify-space-between">
    <FixedSideBar></FixedSideBar>
    <v-card color="#45494e" width="80.5%" height="100vh">
      <v-row justify-left>
        <v-col cols="auto" v-for="t in stack" :key="t">
          <v-btn color="#3c3c3c" @click="selectTab(t)">
            {{ t.text }}
          </v-btn>
          <v-btn @click="close(t)">
            <v-icon color="white" icon="mdi-close"></v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <keep-alive>
        <component :is="tab"> </component>
      </keep-alive>
    </v-card>
  </div>
</template>

<!-- color "#45494e" -->
<script>
// import Login from "~/components/file/Login.vue";
// import Ind from "~/components/file/Ind.vue";
// import Logout from "~/components/file/Logout.vue";
import { markRaw } from "vue";

import { mapState, mapActions } from "pinia";

export default {
  setup() {
    const Login = markRaw(resolveComponent("Login"));
    const Ind = markRaw(resolveComponent("Ind"));
    const Logout = markRaw(resolveComponent("Logout"));

    return { Login, Ind, Logout };
  },
  computed: {
    ...mapState(useTabStore, ["tab", "stack"]),
  },
  data() {
    return {
      // comps: {
      //   Login: Login,
      //   Ind: Ind,
      //   Logout: Logout,
      // },
    };
  },
  methods: {
    ...mapActions(useTabStore, ["changeTab", "closeTab"]),
    selectTab(tabObj) {
      this.changeTab(tabObj);
      // this.tab = this.comps[v];
    },
    close(tabObj) {
      this.closeTab(tabObj);
    },
  },
};
</script>

<style>
.v-btn {
  color: white;
  text-transform: unset !important;
  background-color: #3c3c3c;
}

.v-btn :active {
  background-color: red;
}
</style>
