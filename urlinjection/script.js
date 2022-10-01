new Vue({
    // Mount Vue instance to DOM with `el`
    el: '#app',
  
    // State with data
    data() {
      return {
        payload: '',
        result: '',
        payloads: [
            'javascript:alert(\'xss\')'
        ]
      };
    },
  
    methods: {
      addPayload() {
        if (this.payload) this.result = this.payload;
      }
    }
  });
  