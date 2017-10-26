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
        <section>
            <h2>Parameters</h2>
            <hr>
            <p class="text-right">
                <a href="" class="btn btn-light">add path</a>
            </p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>required</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>body</td>
                        <td>body</td>
                        <td>*</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate delectus distinctio eligendi et eum hic ipsam laudantium modi odio, officia pariatur quos, tempora tempore velit vero vitae. Doloribus, temporibus!</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section>
            <h2>Responses</h2>
            <hr>
            <p class="text-right">
                <a href="" class="btn btn-light">add path</a>
            </p>
            <table class="table">
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>required</th>
                    <th>description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>body</td>
                    <td>body</td>
                    <td>*</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate delectus distinctio eligendi et eum hic ipsam laudantium modi odio, officia pariatur quos, tempora tempore velit vero vitae. Doloribus, temporibus!</td>
                </tr>
                </tbody>
            </table>
        </section>
    </div>

</template>

<script>
    export default {
      props: ['path'],
      data () {
        return {}
      },
      computed: {
      }
    }

</script>
