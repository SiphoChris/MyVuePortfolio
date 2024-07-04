<template>
  <Container>
    <template #content>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
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
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </template>
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";

export default {
  components: {
    Container,
  },
};
</script>

<style src="../assets/css/style.css"></style>
