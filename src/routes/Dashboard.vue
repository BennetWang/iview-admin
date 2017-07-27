<template>
  <div class="dashboard">
    <div>{{state.dashboard.count}}</div>
    <Button type="primary" @click="dispatch('dashboard/add')">add</Button>
    <Button type="ghost" @click="dispatch('dashboard/minus')">minus</Button>
  </div>
</template>
<script>
    import connect from 'connect'
    export default {
      mixins: [connect(({dashboard}) => ({dashboard}))]
    }
</script>
<style lang="scss">
</style>
