<template>
  <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <div class="container-fluid h-100" id="aboutPage">
    <br><br>
    <div class="row" id="slide1">
      <h1 class="display-3" id="heading">About us</h1>
      <br><br>
      <p>
        Situated in the heart of Cape Town, Abroad Academy is a school that offers TEFL and 
        Foreign Language courses and classes. Our goal is to equip our students with the training
        and skills necessary to move abroad, whether that be to live, work or study further.
        <br>
        We don't only offer TEFL training, but also foreign language training to fully prepare
        our students to work abroad.
      </p> 
    </div>
    <br><br>
    <div class="row" id="slide2">
      <h2 class=" display-6" id="heading">What we offer</h2>
      <br>
      <p>
        At AA, we offer 6 TEFL courses, each included with a language module depending on the
        country you wish to work in. <br>
        These countries are:
      </p>
      <ul class="d-block justify-content-center">
        <li>Japan (Japanese module)</li>
        <li>China (Mandarin module)</li>
        <li>South Korea (Korean module)</li>
        <li>Thailand (Thai module)</li>
        <li>Mexico, Costa Rica and Spain (Spanish module)</li>
      </ul>
    </div>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
  </div>
</template>

<script>
  export default {
      
  }
</script>

<style scoped>
#heading{
  color: #ffffff;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
ul{
  list-style-position: inside;
}
#aboutPage{
  background: url("https://i.ibb.co/41BPm2w/tefl-globe.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: white;
}
#slide1{
  animation: slideLeft 0.9s ease-in-out 1 ;
}
#slide2{
  animation: slideRight 0.9s ease-in-out 1 ;
}

/* animations */
@keyframes slideLeft{
  from {
    transform: translateX(1000px);
  }
  to {
    transform: translateX(0);
  }

}

@keyframes slideRight{
  from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0);
  }
}
</style>
