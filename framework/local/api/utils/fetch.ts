// This is a fake fetch function to more accurately represent a real
// fetch function in this provider. In a real app you should be using
// a fetch implementation like the one commented below

// import zeitFetch from '@vercel/fetch'
// export default zeitFetch()

import data from '../../data.json'

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
  if (url.includes('/page/')) {
    return { page: null }
  }
  if (url.endsWith('/site')) {
    return {
      categories: [],
      brands: [],
    }
  }
  if (url.endsWith('/wishlist')) {
    return { wishlist: null }
  }
  if (url.endsWith('/products/paths')) {
    return { products: data.products.map(({ path }) => ({ path })) }
  }
  if (url.endsWith('/products')) {
    return { products: data.products }
  }
  if (url.includes('/product/')) {
    return { product: data.products[0] }
  }
  return null
}
