<template>
  <section class="container">
    <h1>hoge</h1>

    <form-path></form-path>
    <a href="" class="btn btn-light">piyo</a>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import FormPath from '~/components/Forms/Path.vue'

  export default {
    components: {Logo, FormPath},
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
