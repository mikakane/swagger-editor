<template>
  <section class="container">
    <h2>new swagger document</h2>

    <form-info :info="info"></form-info>

    <a class="btn btn-light" @click="store">save</a>
  </section>
</template>

<script>
  import FormInfo from '~/components/Forms/BasicInfo.vue'

  const info = {
    openapi: '3.0.0',
    info: {
      title: 'my api',
      description: 'my api description',
      version: '1.0.0'
    }
  }

  export default {
    components: { FormInfo },
    computed: {
      paths () {
        return this.$store.getters.paths
      }
    },
    data () {
      return {
        info
      }
    },
    mounted () {
    },
    methods: {
      store () {
        this.$store.commit('IMPORT_SWAGGER', {
          info: this.info,
          pathes: []
        })
        this.$router.push('/')
      }
    }
  }
</script>

<style>

</style>
