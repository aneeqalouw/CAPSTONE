<template>
  <NavBar/>
  <main class="container-fluid">
    <router-view/>
    <div style="display: none;">
      <SpinnerComp></SpinnerComp>
    </div>
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';

  export default {
    components: {
      NavBar,
      FooterComp

    }
    
  }
</script>

<style scoped>
body{
  color: black;
}

</style>
