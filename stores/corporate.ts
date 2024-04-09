export const useCorporate = defineStore('corporate', {
  state: () => ({
    query: {
      tab: 1,
      teamId: null,
      folderId: null,
    },
    detail: {
      sortId: null,
      filterId: null,
      list: [],
    },
    team: {
      search: '',
      list: [],
    },
    folder: {
      search: '',
      list: [],
    },
    content: {
      search: '',
      sortId: '',
      filterId: '',
      list: [],
    },
  }),
  actions: {},
})
