import { FetcherError } from '@commerce/utils/errors'
import type { RestFetcher } from '@commerce/api'
import { getCommerceApi } from '..'
import fetch from './fetch'

const fetchGraphqlApi: RestFetcher = async (url: string, fetchOptions) => {
  const config = getCommerceApi().getConfig()
  const res = await fetch(`${config.commerceUrl}${url}`, fetchOptions)

  const json = await res.json()

  if (json.errors) {
    throw new FetcherError({
      errors: json.errors ?? [{ message: 'Failed to fetch for API' }],
      status: res.status,
    })
  }

  return { data: json.data, res }
}

export default fetchGraphqlApi
