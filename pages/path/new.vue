<template>
    <section class="container">
        <h2>new path</h2>

        <form-path :path="path"></form-path>


        <a class="btn btn-light" @click="store">save</a>
    </section>
</template>

<script>
  import FormPath from '~/components/Forms/Path.vue'

  const path = {
    method: 'get',
    operationId: 'root',
    pathname: '/'
  }

  export default {
    components: { FormPath },
    computed: {
    },
    data () {
      return { path }
    },
    mounted () {
    },
    methods: {
      async store () {
        await this.$store.dispatch('swagger/ADD_PATH', this.path)
        this.$router.push('/home')
      }
    }
  }
</script>

<style>

</style>
