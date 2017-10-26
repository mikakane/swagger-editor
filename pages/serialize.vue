<template>
  <section class="container">
    <h1>Yaml Fomat</h1>

    <textarea class="form-control" rows="25" v-model="yaml"></textarea>

    <a class="btn btn-light" @click="loadYaml">piyo</a>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import FormPath from '~/components/Forms/Path.vue'

  export default {
    components: {Logo, FormPath},
    data () {
      return {
        yaml: ''
      }
    },
    mounted () {
      this.yaml = this.$store.getters.exportYaml
    },
    methods: {
      loadYaml () {
        this.$store.dispatch('loadYaml', this.yaml)
      }
    }
  }
</script>

<style>

</style>
