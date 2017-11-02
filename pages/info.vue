<template>
  <section class="container">
    <h2>document Infomation</h2>


    <basic-info :info="info"></basic-info>

    <a class="btn btn-light" @click="save">save</a>

  </section>
</template>

<script>
  import BasicInfo from '~/components/Forms/BasicInfo.vue'

  export default {
    components: {BasicInfo},
    data () {
      return {
        info: {}
      }
    },
    computed: {
    },
    mounted () {
      this.info = this.$store.state.swagger.info
    },
    methods: {
      save () {
        this.$store.commit('swagger/SAVE_INFO', this.info)
        this.$router.push('/home')
      }
    }
  }
</script>

<style>

</style>
