import {defineStore } from 'pinia'

// Store for the form data from components/Form.vue
export const useFormStore = defineStore('form', {
    state: () => ({
        nick: '',
        links_github: '',
        links_linkedin: '',
        about_me: '',
        skills_proficient: '',
        skills_meh: '',
        projects: '',
        contact_email: '',
        contact_discord: ''
    }),
    actions: {
        // Update the form data
        updateForm(data: any) {
            this.nick = data.nick
            this.links_github = data.links_github
            this.links_linkedin = data.links_linkedin
            this.about_me = data.about_me
            this.skills_proficient = data.skills_proficient
            this.skills_meh = data.skills_meh
            this.projects = data.projects
            this.contact_email = data.contact_email
            this.contact_discord = data.contact_discord
        }
    }
})



        
        