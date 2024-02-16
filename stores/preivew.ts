export interface IPreviewState {
  content: string
  count: number
}

export const usePreview = defineStore('preview', {
  state: (): IPreviewState => ({
    content: '<h1>okoko</h1>',
    count: 0,
  }),
  actions: {},
})
