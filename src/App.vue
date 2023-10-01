<template>

  <div>


    <nav-view></nav-view>
    <router-view></router-view>
  </div>


</template>

<style>

a.router-link-active {
  background-color: #42b983;
}

</style>
<script>

// import BookView from './views/BookView.vue'
// import BookView from './views/BookView.vue';
import NavView from "@/components/NavView.vue";


export default {
  components: {
    NavView
    /*BookView*/ /*BookView*/
  },
  data() {
    return {
      message: "Comment"
    }
  },
  methods: {}

}
</script>