<template>
  <section class="container">
    <div>
      <h2>create new document</h2>
      <a class="btn btn-light" @click="createNew">new</a>
    </div>
    <div>
      <h2>load from swagger store</h2>
      <input type="text" class="form-control" v-model="apiKey" >
      <a class="btn btn-light" @click="importFromKey">new</a>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {Logo},
    data () {
      return {
        apiKey: ''
      }
    },
    mounted () {
      this.apiKey = this.$store.getters['swagger/storedKey']
    },
    methods: {
      createNew () {
        this.$store.dispatch('swagger/CREATE_NEW').then(() => {
          this.$router.push('/home')
        })
      },
      importFromKey () {
        this.$store.dispatch('swagger/IMPORT_WITH_KEY', this.apiKey).then(() => {
          this.$router.push('/home')
        })
      }
    }
  }
</script>

<style>

</style>
