import { createStore } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';

const DATA_URL = "https://siphochris.github.io/eompdata/";

const store = createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    softSkills: null,
    projects: null,
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
    loadSkills(state, skills) { 
      state.skills = skills;
    },
    loadSoftSkills(state, softSkills) {
      state.softSkills = softSkills;
    },
    loadProjects(state, projects) {
      state.projects = projects;
    }
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const { data } = await axios.get(DATA_URL);
        const { jobTitle, about, education, technicalSkills, softSkills, projects } = data;

        commit('loadJobTitle', jobTitle);
        commit('loadAbout', about);
        commit('loadEducation', education);
        commit('loadSkills', technicalSkills);
        commit('loadSoftSkills', softSkills);
        commit('loadProjects', projects.reverse());
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Data failed to load",
        });
      }
    },
  }
});

export default store;
