
export default linkStore => {
  return {
    computed: {
      state: function () {
        return linkStore(this.$store.state)
      },
      dispatch: function () {
        return this.$store.dispatch
      }
    }
  }
}
