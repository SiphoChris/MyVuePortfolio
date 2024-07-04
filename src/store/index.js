import { createStore } from 'vuex'
import axios from 'axios'

const DATA_URL = "https://siphochris.github.io/eompdata/"

const store = createStore({
  state: {
    jobTitle: [],
    about: {},
    education: [],
    experiences: {},
    skills: {},
    testimonials: [],
    projects: [],
  },
  mutations: {
    loadJobTitle(state, jobTitle) {
      state.jobTitle = jobTitle;
    },
    loadAbout(state, about) {
      state.about = about;
    },
    loadEducation(state, education) {
      state.education = education;
    },
    loadExperience(state, experiences) {
      state.experiences = experiences;
    },
    loadSkills(state, skills) {
      state.skills = skills;
    },
    loadTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
    loadProjects(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await axios.get(DATA_URL);
        const data = response.data;
        commit('loadJobTitle', data.jobTitle);
        commit('loadAbout', data.about);
        commit('loadEducation', data.education);
        commit('loadExperience', data.experiences);
        commit('loadSkills', data.skills);
        commit('loadTestimonials', data.testimonials);
        commit('loadProjects', data.projects);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Data failed to load", error
        });
      }
    },
  },
  getters: {
    getJobTitle: (state) => state.jobTitle,
    getAbout: (state) => state.about,
    getEducation: (state) => state.education,
    getExperiences: (state) => state.experiences,
    getSkills: (state) => state.skills,
    getTestimonials: (state) => state.testimonials,
    getProjects: (state) => state.projects,
  },
});

export default store;