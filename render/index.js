new Vue({
  el: '#app',
  data() {
    return {
      viewer: null
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      this.viewer = new Cesium.Viewer('cesiumContainer')
    }
  }
})