interface IState {
  query: IQuery
}

interface IQuery {
  tab: number
  teamId: number
  folderId: number
}

export const useCorporate = defineStore('corporate', {
  state: (): IState => ({
    query: {
      tab: 1,
      teamId: null,
      folderId: null,
    },
  }),
  actions: {},
})
