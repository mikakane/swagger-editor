<template>
    <div>
        <form>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">type</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">name</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">description</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">required</label>
                <div class="col-sm-8">
                    <textarea class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                    <legend class="col-form-legend col-sm-2">Radios</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                                Option one is this and that&mdash;be sure to include why it's great
                              </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                Option two can be something else and selecting it will deselect option one
                              </label>
                        </div>
                        <div class="form-check disabled">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                                Option three is disabled
                              </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="form-group row">
                <div class="col-sm-2">Checkbox</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox"> Check me out
        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </div>
        </form>

    </div>

</template>

<script>
    export default {
      props: ['pathname', 'methods', 'operation'],
      data () {
        return {}
      }
    }

</script>
