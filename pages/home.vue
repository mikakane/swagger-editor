<template>
  <section class="container">
    <h2>document Infomation</h2>

    <dl class="row" v-if="info">
      <dt class="col-sm-3">title</dt>
      <dd class="col-sm-9">{{info.title}}</dd>
      <dt class="col-sm-3">description</dt>
      <dd class="col-sm-9">{{info.description}}</dd>
      <dt class="col-sm-3">version</dt>
      <dd class="col-sm-9">{{info.version}}</dd>
    </dl>

    <router-link to="/info">編集画面へ</router-link>

    <h2>path infomation</h2>



    <p class="text-right">
      <router-link to="/path/new" class="btn btn-light">add path</router-link>
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
        <td><router-link :to="'/pathes/'+path.operationId + '/'"> > </router-link></td>
      </tr>
      </tbody>
    </table>
    <a href="" class="btn btn-light">piyo</a>
  </section>
</template>

<script>

  export default {
    components: {},
    computed: {
      info () {
        return this.$store.state.swagger.info
      },
      paths () {
        return this.$store.getters['swagger/FLATTEN_PATHES']
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
