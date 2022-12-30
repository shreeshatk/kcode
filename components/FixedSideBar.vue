<template>
  <v-card class="ma-0 pa-0">
    <v-layout>
      <v-navigation-drawer rail permanent color="#3c3c3c" justify="center">
        <v-row justify="center" class="mt-2">
          <v-col cols="7" align-self="center">
            <v-icon
              icon="mdi-note-multiple-outline"
              size="x-large"
              color="white"
            >
            </v-icon>
          </v-col>
        </v-row>
      </v-navigation-drawer>
      <v-navigation-drawer permanent color="#3a3d41" height="100vh">
        <v-row justify="center" height="100vh">
          <v-col cols="12" align-self="center">
            <v-sheet color="#3a3d41">
              <span style="color: white" class="text-h6">Explorer</span>
            </v-sheet>
          </v-col>
          <v-row justify="center">
            <v-col align-self="center" class="ml-10">
              <Tabs></Tabs>
            </v-col>
          </v-row>
        </v-row>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped></style>
