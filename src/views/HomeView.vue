<template>
  <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <div class="container-fluid" id="home">
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <div class="row d-flex justify-content-center align-items-center">
      <h1 class="display-3" id="heading">
        Abroad Academy
      </h1>
       <h3 class="display-6 fw-bold text-white">
          -The best TEFL and Foreign Language school-
        </h3>
       <h6 class="fs-3 fw-bold text-white">
          Learn the language of your destination country along with your TEFL
          qualification
        </h6>
    </div>
    <br /><br />
    <div class="row d-block d-md-flex justify-content-center gap-5">
      <img
        src="https://i.ibb.co/k9p1FdB/accredit-2.jpg"
        alt="accredit"
        style="mix-blend-mode: multiply; height: 10rem; width: 13rem"
      />
      <img
        src="https://i.ibb.co/xCKBHw6/Eaquals-Accred-390x197.png"
        alt="equals accredit"
        style="height: 11rem; width: 25rem"
      />
    </div>
    <br /><br />
    <br /><br />
  </div>
  <br /><br />
  <div class="container">
    <h2 class="display-3" id="heading">Why us?</h2>
    <p class="lead">
      Not only do we offer an accredited and internationally recognised TEFL
      qualification, we also equip you with conversational skills in the the
      language of the country you'll be moving to!
      <br><br>
      You can choose to do TEFL on
      it's own or TEFL with foreign language training.
      <br><br>
      Apply now! Limited spots available
    </p>
    <br><br>
      <router-link to="/courses">
        <button class="btn fs-5" id="button">
          View our courses
        </button>
      </router-link>
  </div>
  <br><br>
  <br><br>
</template>

<script>
export default {};
</script>

<style scoped>
#heading{
  color: #9A2C0A ;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#home{
  background-color: #F1A778 ;
}
#button{
  text-decoration: none; 
  color: white;
   background-color: #9A2C0A;
}
</style>
