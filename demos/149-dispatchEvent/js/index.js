new Vue({
  el: '#app',
  data() {
    return {
      text: '',
      value: ''
    }
  },
  methods: {
    changeValue() {
      this.$refs.input.value = '新的值'
      document.querySelector('#elInput').value = '新的值'
      this.value = this.$refs.input.value
    },
    changeAndDispatch() {
      var el = this.$refs.input
      el.value = '新的值'
      this.value = el.value
      var event = new InputEvent('input')
      el.dispatchEvent(event)
    },
  },
})