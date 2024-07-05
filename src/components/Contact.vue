<template>
  <div id="reachMe">
    <div class="container-fluid p-5" id="contact-wrapper">
      <div class="row justify-content-center">
        <div class="col-7">
          <form action="https://formspree.io/f/mwpeknkz" method="POST">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Example textarea</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <ul class="py-4 lh-5">
        <li><i class="bi bi-telephone-fill"></i> +27 78 653 2395</li>
        <li><i class="bi bi-envelope-at-fill"></i> siphonkebe@gmail.com</li>
        <li><i class="bi bi-geo-alt-fill"></i> Phillipi East, Cape Town</li>
        <li><span class="me-2"><a href="https://github.com/SiphoChris"><i class="bi bi-github fs-3"></i></a></span> <span><a href="https://www.linkedin.com/in/sipho-nkebe-979783312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="bi bi-linkedin fs-3"></i></a></span></li>
      </ul>
    <div class="contact-details"></div>
  </div>
</template>

<script>
export default {};
</script>

<style src="../assets/css/style.css"></style>
