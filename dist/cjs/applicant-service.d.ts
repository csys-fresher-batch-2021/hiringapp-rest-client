export declare class ApplicantService {
    /**
     * Function to add new applicant.
     * @param {*} applicant
     */
    addApplicant(applicant: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Function to retrieve applicant for authentication
     * @param {*} email
     * @param {*} password
     */
    authenticateApplicant(credentials: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Function to get applicant profile
     * @param {*} email
     */
    getProfile(email: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Function to update applicant profile
     * @param {*} applicant
     */
    updateProfile(email: string, updatedProfile: any): Promise<import("axios").AxiosResponse<any>>;
}
