<template>
    <div>
        <section>
            <h2>Path Infomation</h2>
            <hr>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Path</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" v-model="path.pathname">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Method</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" v-model="path.method">
                </div>
            </div>
             <div class="form-group row">
                <label class="col-sm-2 col-form-label">Operation ID</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" v-model="path.operationId">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Summary</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" v-model="path.summary">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-8">
                    <textarea class="form-control" v-model="path.description"></textarea>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
    export default {
      props: ['path'],
      data () {
        return {
        }
      },
      computed: {
      }
    }

</script>
