import { createVuetify } from "vuetify/lib/framework.mjs";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    theme: {
      themes: {
        light: {
          colors: {
            primary: "#a83232",
          },
        },
      },
    },
  });

  nuxt.vueApp.use(vuetify);
});
