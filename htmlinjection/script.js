new Vue({
  // Mount Vue instance to DOM with `el`
  el: "#app",

  // State with data
  data() {
    return {
      payload: "",
      result: "",
      payloads: [
        '<img src=1 onerror="javascript:alert(\'xss\')"></img>',
        '<audio src=1 href=1 onerror="javascript:alert(\'xss\')"></audio>'
      ]
    };
  },

  methods: {
    addPayload() {
      if (this.payload) this.result = this.payload;
      else this.result = "No payload added";
    }
  }
});
