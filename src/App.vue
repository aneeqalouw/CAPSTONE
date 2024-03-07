<template>
  <NavBar/>
  <main class>
    <router-view/>
    <div style="display: none;">
      <SpinnerComp></SpinnerComp>
    </div>
  </main>
  <FooterComp/>
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

<style src="../src/assets/css/style.css">


</style>
