<template>

<div class="FormContent">
    <h1>Form</h1>
 <form @submit.prevent="submitForm"></form>
<label for="nick">Name:</label>
<input type="text" id="nick" v-model="nick">
<h2> Links to other sites</h2>
<label for="links_github">Github:</label>
<input type="text" id="links_github" v-model="links_github">
<label for="links_linkedin">LinkedIn:</label>
<input type="text" id="links_linkedin" v-model="links_linkedin">
<h2> What you're gonna write here, will be on your about me page </h2>
<label for="about_me">About me:</label>
<input type="text" id="about_me" v-model="about_me">
<h2> What you're gonna write here, will be on your skills page </h2>
<label for="skills_proficient">Skills i'm proficient at:</label>
<input type="text" id="skills_proficient" v-model="skills">
<label for="skills_meh">Skills I'm beginning to master: </label>
<input type="text" id="skills_meh" v-model="skills_meh">
<h2> What you're gonna write here, will be on your projects page </h2>
<label for="projects">Projects:</label>
<input type="text" id="projects" v-model="projects">
<h2> Links to contact you</h2>
<label for="contact_email">Email:</label>
<input type="text" id="contact_email" v-model="contact_email">
<label for="contact_discord">Discord:</label>
<input type="text" id="contact_discord" v-model="contact_discord">



</div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from '../stores/FormStore';

export default defineComponent({
    name: 'Form',
    setup() {
        const store = useStore();

        const submitForm = () => {
            store.commit('setForm', {
                nick: nick,
                links_github: links_github,
                links_linkedin: links_linkedin,
                about_me: about_me,
                skills_proficient: skills_proficient,
                skills_meh: skills_meh,
                projects: projects,
                contact_email: contact_email,
                contact_discord: contact_discord,
            });
        };

        return {
            submitForm,
        };
    },
});


</script>