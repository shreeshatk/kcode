import { defineStore } from "pinia";

export const useTabStore = defineStore("tabStore", {
  state() {
    return {
      tab: null,
      stack: [],
    };
  },
  actions: {
    changeTab(tabObj) {
      this.tab = tabObj.comp;
      console.log("tab changed to", this.tab);
      if (!this.stack.includes(tabObj)) {
        this.stack.push(tabObj);
      }
      console.log("this is the tab state", this.stack);
    },
    closeTab(tabObj) {
      // closing tab
      console.log("this is the index", this.stack.indexOf(tabObj));
      this.stack.splice(this.stack.indexOf(tabObj), 1);
      if (this.stack.length > 0) {
        const tabObj = this.stack[this.stack.length - 1];
        console.log("this is popped object from stack after removeing", tabObj);
        this.tab = tabObj.comp;
      } else {
        this.tab = null;
      }
      console.log("current stack state", this.stack);
    },
  },
});
