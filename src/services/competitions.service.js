const axiosClient = require('../config/footballDataApiClient');

/**
 * List all available competitions.	
 * @returns {Object}
 */
const listAllCompetitions = async () => {
    const { data } = await axiosClient.get('/competitions');
    return data;
};

/**
 * List one particular competition.	 
 * @param {string} code 
 * @returns {Object}
 */
const getCompetitionByCode = async (code) => {
    const { data } = await axiosClient.get(`/competitions/${code}`);
    return data;
}

/**
 * List all teams for a particular competition.	
 * @param {string} code
 * @returns {Object}
 */
const getTeamsForCompetition = async (code) => {
    const { data } = await axiosClient.get(`/competitions/${code}/teams`);
    return data;
}

module.exports = {
    listAllCompetitions,
    getCompetitionByCode,
    getTeamsForCompetition
}