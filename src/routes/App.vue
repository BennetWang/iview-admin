<template>
    <div class="app">
        <Banner></Banner>
        <Silder class="silder"></Silder>
        <router-view class="content"></router-view>
    </div>
</template>
<script>
    import Silder from '../components/Silder.vue'
    import Banner from '../components/Banner.vue'
    export default {
      components: {
        Banner,
        Silder
      },
      created () {
      }
    }
</script>