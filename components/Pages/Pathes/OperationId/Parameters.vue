<template>
    <div>
        <section>
            <h2>Parameters</h2>
            <hr>
            <p class="text-right">
                <a href="" class="btn btn-light">add path</a>
            </p>
            <table class="table" v-if="parameters.length">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>required</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="param in parameters">
                        <td>body</td>
                        <td>body</td>
                        <td>*</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate delectus distinctio eligendi et eum hic ipsam laudantium modi odio, officia pariatur quos, tempora tempore velit vero vitae. Doloribus, temporibus!</td>
                    </tr>
                </tbody>
            </table>
            <div v-else> no parameter </div>
        </section>
    </div>

</template>

<script>
    export default {
      props: ['parameters'],
      data () {
        return {}
      },
      computed: {
      }
    }

</script>
