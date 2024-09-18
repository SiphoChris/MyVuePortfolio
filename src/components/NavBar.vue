<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top p-4 fw-bold">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">Sipho Nkebe</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto mx-5">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#ABOUT">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#EDUCATION"
              >Education</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#PROJECTS"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#SKILLS">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#REACHME">Reach Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
  <script>
export default {
  name: "NavBar",
  data() {
    return {
      myFirstName: "Sipho",
      myLastName: "Nkebe",
      cta: "Reach Me",
    };
  },
};
</script>
  
  <style src="../assets/css/style.css">
</style>


