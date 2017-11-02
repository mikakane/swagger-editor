<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">title</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" v-model="info.title">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">description</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" v-model="info.description">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">version</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" v-model="info.version">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'info' ],
    data () {
      return {}
    }
  }

</script>
