<template>
    <div>
        <section>
            <h2>RequestBody</h2>
            <hr>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">description</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" v-model="request.title">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">schema</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" v-model="request.description">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">example</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" v-model="request.version">
                </div>
            </div>
        </section>
    </div>

</template>

<script>
    export default {
      props: ['request'],
      data () {
        return {}
      },
      computed: {
      }
    }

</script>
