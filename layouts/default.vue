<template>
  <div>
    <head-navbar></head-navbar>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="page-header">
            <h1>Swagger Editor</h1>
          </div>
        </div>
      </div>
      <nuxt/>
    </div>
  </div>
</template>


<script>
  import HeadNavbar from '../components/Navbar.vue'

  export default {
    async fetch ({ store, params, env }) {
      return await Promise.resolve()
    },
    mounted () {
      console.log('fetch')
      if (!this.$store.state.swagger.original) {
        const key = this.$store.getters['swagger/storedKey']
        let promise = null
        if (key) {
          console.log('import')
          promise = this.$store.dispatch('swagger/IMPORT_WITH_KEY', key)
        } else {
          console.log('import failed')
          promise = Promise.reject()
        }
        return promise.then(() => {
//          this.$router.push('/home')
        }).catch(() => {
          this.$router.push('/')
        })
      }
//      this.$store.commit('swagger/RESTORE_SWAGGER')
    },
    components: {
      HeadNavbar
    },
    methods: {
    }
  }
</script>

<style>

</style>
