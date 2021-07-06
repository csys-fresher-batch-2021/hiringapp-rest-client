import axios from 'axios';

export class ApplicantService{
    /**
     * Function to add new applicant.
     * @param {*} applicant 
     */
    addApplicant(applicant : any){
        let url = "http://localhost:3000/api/user/signup";
        return axios.post(url, applicant);
    }

    /**
     * Function to retrieve applicant for authentication
     * @param {*} email 
     * @param {*} password 
     */
    authenticateApplicant(credentials : any){
        let url = "http://localhost:3000/api/user/login";
        return axios.post(url, credentials);
    }

    /**
     * Function to get applicant profile
     * @param {*} email 
     */
    getProfile(email : string){
        let url = "http://localhost:3000/api/user/profile/" + email;
        return axios.get(url);
    }

    /**
     * Function to update applicant profile
     * @param {*} applicant 
     */
    updateProfile(email : string, updatedProfile : any){
        let url = "http://localhost:3000/api/user/profile/" + email;
        return axios.post(url, updatedProfile);
    }
}