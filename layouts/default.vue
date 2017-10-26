<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="page-header">
            <h1>Swagger Editor</h1>
          </div>
        </div>
      </div>
      <nuxt/>

      <div>
        <router-link class="btn btn-light" to="/">TOP</router-link>
        <router-link class="btn btn-light" to="/serialize">IMPOT</router-link>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    mounted () {
      this.$store.commit('RESTORE_SWAGGER')
    },
    methods: {
    }
  }
</script>

<style>

</style>
