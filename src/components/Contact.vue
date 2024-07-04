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
    </div>
</template>

<script>

export default {
};
</script>

<style src="../assets/css/style.css"></style>
