<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">TOP</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/home">HOME</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/serialize">IMPORT</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <a :href="url" target="_blank">{{key}}</a>
                <a class="btn btn-outline-success my-2 my-sm-0" @click="save">save</a>
            </form>
        </div>
    </nav>
</template>

<script>
    import config from '../libs/config'

    export default {
      data () {
        return {}
      },
      computed: {
        key () {
          return this.$store.state.swagger.key
        },
        url () {
          return config.api + 'swagger/' + this.key
        }
      },
      methods: {
        save () {
          this.$store.dispatch('swagger/STORE')
        }
      }
    }
</script>
