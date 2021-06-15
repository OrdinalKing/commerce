// This is a fake fetch function to more accurately represent a real
// fetch function in this provider. In a real app you should be using
// a fetch implementation like the one commented below

// import zeitFetch from '@vercel/fetch'
// export default zeitFetch()

// This is a fake fetch function to more accurately represent a real
// fetch function in this provider
export default async function fetch(url: string, options?: any) {
  const res = {
    json: async (): Promise<any> => ({ data: getData(url) }),
    status: 200,
  }
  return res
}

function getData(url: string) {
  if (url.endsWith('/pages')) {
    return { pages: [] }
  }
  return null
}
