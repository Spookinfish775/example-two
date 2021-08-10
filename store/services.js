const obj = {
  state: {
    services: [
      {
        icon: "fas fa-language",
        name: "services.documentTranslateTitle",
        description: "services.documentTranslateDescription"
      },
      {
        icon: "fas fa-passport",
        name: "services.requestForDocumentsTitle",
        description: "services.requestForDocumentsDescription"
      },
      {
        icon: "fas fa-landmark",
        name: "services.valueDeclarationTitle",
        description: "services.valueDeclarationDescription"
      },
      {
        icon: "fas fa-stamp",
        name: "services.legalizationAndApostilleTitle",
        description: "services.legalizationAndApostilleDescription"
      }
    ],
  },
  getters: {
    services(state) {
      return state.services
    }
  },
  mutations: {
  },
  actions: {
  }
}

export const state = () => (obj.state)
export const getters = obj.getters
export const actions = obj.actions
export const mutations = obj.mutations