export const useMyFetch: typeof useFetch = (request, opts?) => {
  const config = useRuntimeConfig()

  return useFetch(request, { baseURL: 'http://localhost:3000/api', ...opts })
}
