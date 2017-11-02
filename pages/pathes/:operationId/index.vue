<template>
  <section class="container">
    <form-path :path="pathItem" v-if="pathItem"></form-path>
    <a href="" class="btn btn-light">save</a>
    <app-parameters :parameters="parameters"></app-parameters>
    <app-request :request="requestBody"></app-request>
    <app-responses :responses="responses"></app-responses>
    <router-link to="/home" class="btn btn-light">back</router-link>
  </section>
</template>

<script>
  import FormPath from '~/components/Forms/Path.vue'
  import AppParameters from '~/components/Pages/Pathes/OperationId/Parameters.vue'
  import AppRequest from '~/components/Pages/Pathes/OperationId/Request.vue'
  import AppResponses from '~/components/Pages/Pathes/OperationId/Responses.vue'

  export default {
    data () {
      return {
      }
    },
    components: {
      FormPath, AppParameters, AppRequest, AppResponses
    },
    computed: {
      path () {
        return null
//        const {pathname, method} = this.$route.params
//        return this.$store.swagger.paths[pathname][method]
      },
      pathItem () {
        const operationId = this.$route.params.operationId
        return this.$store.getters['swagger/FIND_BY_OPERATION_ID'](operationId)
      },
      responses () {
        return this.pathItem.parameters || []
      },
      requestBody () {
        return this.pathItem.requestBody || {}
      },
      parameters () {
        return this.pathItem.responses || []
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style>

</style>
