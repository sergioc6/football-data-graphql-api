const axiosClient = require('../config/footballDataApiClient');

/**
 * List teams.	
 * @returns {Object}
 */
const listAllTeams = async () => {
    const { data } = await axiosClient.get('/teams');
    return data;
};

/**
 * Show one particular team.	 
 * @param {number} id 
 * @returns {Object}
 */
const getTeamById = async (id) => {
    const { data } = await axiosClient.get(`/teams/${id}`);
    return data;
}

module.exports = {
    listAllTeams,
    getTeamById
}