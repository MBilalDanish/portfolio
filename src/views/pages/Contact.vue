<template>
  <div class="contact">
    <h1 class="text-light contact-heading">
      I would love to hear from you. <br />
      <span class="text-orange"> Let's Start a Conversation</span>
    </h1>
    <br><br>
    <h2 class="contact-heading text-light">
      Mail me at:
        <span class="text-orange email"> mbilaldanish786@gmail.com</span>
    </h2>
    <br><br>
    <h2 class="contact-heading text-light">Scan to chat with me on Whatsapp</h2>
    <img height="200px" src="@/assets/whatsapp.jpeg" alt="Whatsapp" />
    <h2 class="contact-heading text-light mt-5">Click links below to hire me on Fiverr or Upwork</h2>
    <a
      href="https://www.upwork.com/freelancers/~012c57fa520c065b47"
      target="_blank"
    >
      <img
        width="50%"
        src="@/assets/upwork-logo-png-transparent.png"
        alt="UpWork"
      />
    </a>
    <br>
    <a href=" https://www.fiverr.com/mbd_word_press" target="_blank"
      ><img width="50%" src="@/assets/fiverr-logo.png" alt="Fiverr"
    /></a>
  </div>
</template>
<style scoped>
@media (max-width: 767px) {
  .right-side-list {
    flex-direction: row;
    margin-top: 100px;
  }
  .typewriter-effect {
    font-size: 1.5rem;
  }
  .contact-heading{
    font-size: 1.5rem;
  }
  .email{
    font-size: 1.5rem;
  }
  @media (max-width: 769px) {
  .contact-heading{
    font-size: 1rem;
  }
  .email{
    font-size: 1rem;
  }
}
}
</style>