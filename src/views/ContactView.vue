<template>
   <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <br /><br />
  <div class="container d-block justify-content-center">
    <h1 class="display-3" id="heading">Get in touch</h1>
    <br /><br />
    <div class="row d-block d-md-flex mx-auto gap-3 h-50" id="contacts">
      <div class="col shadow" id="block">
        <br><br>
        <a href="tel:+27-83-424-6185">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9996 40C30.9218 40 40 30.9219 40 20C40 9.05882 30.9017 0 19.9795 0C9.03893 0 0 9.05882 0 20C0 30.9219 9.05817 40 19.9996 40ZM14.8828 24.8825C10.0195 20.0385 6.92142 13.8626 10.5884 10.1958C10.8042 9.97992 11.0393 9.76491 11.2552 9.54907C12.3729 8.48992 13.4513 8.54932 14.4117 9.90212L16.961 13.5297C17.8235 14.7846 17.6077 15.4898 16.6865 16.4703L15.8825 17.353C15.5889 17.6274 15.7068 17.9997 15.8432 18.2356C16.2164 18.9409 17.2747 20.1958 18.4117 21.3336C19.5888 22.5098 20.7843 23.5096 21.5298 23.9212C21.8042 24.0785 22.1966 24.1178 22.4517 23.8827L23.2942 23.0787C24.2354 22.1568 25.0009 21.9217 26.2166 22.7842C27.4446 23.6575 28.6801 24.5204 29.9228 25.3727C31.1577 26.2746 31.4513 27.3923 30.1964 28.5292C29.9814 28.7451 29.7848 28.981 29.5689 29.196C25.9028 32.8436 19.7452 29.7448 14.8828 24.8825Z"
              fill="#9A2C0A"
            />
          </svg>
          <br />
          <br />
          <p>+27 83 424 6185</p>
        </a>
      </div>
      <div class="col shadow" id="block">
        <br><br> 
        <a href="mailto:albusiness057@gmail.com?">
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.42093 0H35.5791C38.5185 0 40 1.475 40 4.475V25.525C40 28.5 38.5185 30 35.5791 30H4.42093C1.48148 30 0 28.5 0 25.525V4.475C0 1.475 1.48148 0 4.42093 0ZM19.9882 21.5L35.8377 7.675C36.4021 7.175 36.8489 6.025 36.1434 5C35.4615 3.975 34.2152 3.95 33.3921 4.575L19.9882 14.225L6.60788 4.575C5.78483 3.95 4.53851 3.975 3.85656 5C3.15109 6.025 3.59788 7.175 4.16226 7.675L19.9882 21.5Z"
              fill="#9A2C0A"
            />
          </svg>
          <br /><br /> 
          <p>albusiness057@gmail.com</p>
        </a>
      </div>
      <div class="col shadow" id="block">
        <br><br>
        <a
          href="https://www.google.com/maps/d/u/0/viewer?mid=1lhs71HbZ6S6cAR6VQVrpW2dolhw&ll=-33.98215743335129%2C18.38364600000002&z=12"
          target="_blank"
        >
          <svg
            width="40"
            height="45"
            viewBox="0 0 40 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0C8.95875 0 0 6.4798 0 14.4643C0 27.3214 20 45 20 45C20 45 40 27.3214 40 14.4643C40 6.4798 31.0413 0 20 0ZM20 22.5C18.4177 22.5 16.871 22.123 15.5554 21.4166C14.2398 20.7102 13.2145 19.7062 12.609 18.5315C12.0035 17.3569 11.845 16.0643 12.1537 14.8173C12.4624 13.5703 13.2243 12.4248 14.3431 11.5257C15.462 10.6267 16.8874 10.0144 18.4393 9.76638C19.9911 9.51833 21.5997 9.64564 23.0615 10.1322C24.5233 10.6188 25.7727 11.4427 26.6518 12.4999C27.5308 13.5571 28 14.8 28 16.0714C27.9977 17.7758 27.1541 19.4099 25.6543 20.6151C24.1545 21.8202 22.121 22.4981 20 22.5Z"
              fill="#9A2C0A"
            />
          </svg>
          <br><br>
          <p>Cape Town CDB 8001 <br> South Africa</p>
        </a>
      </div>
    </div>
    <br><br>
    <br><br>
    <h2 class="display-6" id="heading">Pop us a message</h2>
    <br><br>
    <div class="row d-grid mx-auto justify-content-center shadow" id="form">
        <form action="https://formspree.io/f/mzbnvjzj" method="post">
            <br><br>
            <label>Name *</label> <br>
            <input type="text" name="name" required placeholder="Name"> <br> <br>
            <label >Email *</label> <br>
            <input type="text" name="email" required placeholder="Email"> <br><br>
            <label>Message *</label> <br>
            <textarea name="message" cols="25" rows="5" required placeholder="Message"></textarea><br><br>
            <button class="btn w-50" type="submit">Send</button>
            <br><br>
        </form>
    </div>
    <br><br>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#heading {
  color: #9a2c0a;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
a {
  text-decoration: none;
  color: black;
}
#block{
    border-radius: 10px;
}
button{
    background-color: #9a2c0a;
    color: white;
}
form{
    text-align: start;
}
#form{
    border-radius: 5px;
}
input{
    border: #9a2c0a solid 0.5px;
    border-radius: 5px;
}
textarea{
    border: #9a2c0a solid 0.5px;
    border-radius: 5px;
}
</style>
