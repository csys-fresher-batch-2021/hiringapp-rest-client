"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantService = void 0;
const axios_1 = __importDefault(require("axios"));
class ApplicantService {
    /**
     * Function to add new applicant.
     * @param {*} applicant
     */
    addApplicant(applicant) {
        let url = "http://localhost:3000/api/user/signup";
        return axios_1.default.post(url, applicant);
    }
    /**
     * Function to retrieve applicant for authentication
     * @param {*} email
     * @param {*} password
     */
    authenticateApplicant(credentials) {
        let url = "http://localhost:3000/api/user/login";
        return axios_1.default.post(url, credentials);
    }
    /**
     * Function to get applicant profile
     * @param {*} email
     */
    getProfile(email) {
        let url = "http://localhost:3000/api/user/profile/" + email;
        return axios_1.default.get(url);
    }
    /**
     * Function to update applicant profile
     * @param {*} applicant
     */
    updateProfile(email, updatedProfile) {
        let url = "http://localhost:3000/api/user/profile/" + email;
        return axios_1.default.post(url, updatedProfile);
    }
}
exports.ApplicantService = ApplicantService;
