new Vue({
    // Mount Vue instance to DOM with `el`
    el: '#app',
  
    // State with data
    data() {
      return {
        payload: '',
        result: '',
        payloads: [
            'clickjack.html'
        ]
      };
    },
  
    methods: {
      addPayload() {
        if (this.payload) this.result = this.payload;
      },

      openLink() {
        $("b").attr("style","color: " + location.hash.slice(1));
      }
    }
  });
  