import axios from '../../axios'

const state = {
    applications: []
}

const getters = {
    getApplications: state => state.applications
}

const actions = {
    requestApplications({ commit }) {
        axios.get('get-applications')
            .then(res => {
                commit('setApplications', res.data)
            })
    },
    declineApplication({ commit }, params) {
        return axios.post('decline', { id: params.id, declineReason: params.declineReason })
    },
    acceptApplication({ commit }, id) {
        return axios.post('accept', { id: id })
    },
    sortApplications({ commit }, status) {
        axios.post('sort', { status: status })
            .then(res => commit('setApplications', res.data))
    }
}

const mutations = {
    setApplications: (state, applications) => state.applications = applications
}

export default {
    state,
    getters,
    actions,
    mutations
}
