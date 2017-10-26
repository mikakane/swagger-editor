<template>
  <section class="container">
    <h1>hoge</h1>

    <div v-if="pathItem">
      <form-path :path="pathItem"></form-path>
    </div>
    <a href="" class="btn btn-light">piyo</a>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import FormPath from '~/components/Forms/Path.vue'

  export default {
    data () {
      return {
      }
    },
    components: {
      FormPath
    },
    computed: {
      path () {
        return null
//        const {pathname, method} = this.$route.params
//        return this.$store.swagger.paths[pathname][method]
      },
      pathItem () {
        const operationId = this.$route.params.operationId
        return this.$store.getters.findByOperationId(operationId)
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style>

</style>
