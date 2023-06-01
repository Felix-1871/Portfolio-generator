<template>

<div class="FormContent" v-if="!form_submitted">
    <h1>Form</h1>
 <form @submit.prevent="submitForm">
 <label for="nick">Name:</label>
      <input type="text" id="nick" v-model="FormData.nick">
      <h2> Links to other sites</h2>
      <label for="links_github">Github:</label>
      <input type="text" id="links_github" v-model="FormData.links_github">
      <label for="links_linkedin">LinkedIn:</label>
      <input type="text" id="links_linkedin" v-model="FormData.links_linkedin">
      <h2> What you're gonna write here, will be on your about me page </h2>
      <label for="about_me">About me:</label>
      <input type="text" id="about_me" v-model="FormData.about_me">
      <h2> What you're gonna write here, will be on your skills page </h2>
      <label for="skills_proficient">Skills i'm proficient at:</label>
      <input type="text" id="skills_proficient" v-model="FormData.skills">
      <label for="skills_meh">Skills I'm beginning to master: </label>
      <input type="text" id="skills_meh" v-model="FormData.skills_meh">
      <h2> What you're gonna write here, will be on your projects page </h2>
      <label for="projects">Projects:</label>
      <input type="text" id="projects" v-model="FormData.projects">
      <h2> Links to contact you</h2>
      <label for="contact_email">Email:</label>
      <input type="text" id="contact_email" v-model="FormData.contact_email">
      <label for="contact_discord">Discord:</label>
      <input type="text" id="contact_discord" v-model="FormData.contact_discord">
      <button type="submit">Submit</button>
    </form>
</div>
<div class="interface" v-else>
    <MainInterface :FormData="FormData"></MainInterface>
</div>
</template>

<script>
import MainInterface from "./MainInterface.vue";


export default {
    name: "Form",
    data() {
        return {
            FormData: {
                nick: "",
                links_github: "",
                links_linkedin: "",
                about_me: "",
                skills: "",
                skills_meh: "",
                projects: "",
                contact_email: "",
                contact_discord: ""
            },
            form_submitted: false
        };
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            this.form_submitted = true;
            console.log(this.FormData);
        }
    },
    components: { MainInterface}
}
</script>