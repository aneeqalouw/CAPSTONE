<template>
  <div class="row w-25 mx-auto d-flex justify-content-center" id="loader">
    <img src="https://i.postimg.cc/t4B6SPFf/Cat-box.gif" alt="Loading" loading="lazy">
    <p class="lead fw-bold d-flex justify-content-center">Loading <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="#f1a778"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="#f1a778"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="#f1a778"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg></span> </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#loader{
  width: 35px;
  height: 35px;
  mix-blend-mode: normal;
}
p{
    color: #F1A778;
}
</style>
