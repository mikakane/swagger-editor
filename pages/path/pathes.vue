<template>
  <section class="container">
    <h2>path infomation</h2>

    <p class="text-right">
      <a href="" class="btn btn-light">add path</a>
    </p>
    <table class="table">
      <thead>
      <tr>
        <th>path</th>
        <th>method</th>
        <th>summary</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="path in paths">
        <td>{{path.pathname}}</td>
        <td>{{path.method}}</td>
        <td>{{path.summary}}</td>
        <td><router-link :to="'/'+path.operationId + '/'"> > </router-link></td>
      </tr>
      </tbody>
    </table>
    <a href="" class="btn btn-light">piyo</a>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import FormPath from '~/components/Forms/Path.vue'

  export default {
    components: {Logo, FormPath},
    computed: {
      paths () {
        return this.$store.getters.paths
      }
    },
    data () {
      return {
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
