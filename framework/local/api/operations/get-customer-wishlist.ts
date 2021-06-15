import type { OperationContext } from '@commerce/api/operations'
import type { GetCustomerWishlistOperation } from '@commerce/types/wishlist'
import type { LocalConfig, Provider } from '..'

function getCustomerWishlistOperation({
  commerce,
}: OperationContext<Provider>) {
  return async function getCustomerWishlist<
    T extends GetCustomerWishlistOperation
  >({
    config,
  }: {
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<T['data']> {
    const cfg = commerce.getConfig(config)
    const { data } = await cfg.restFetch<any>('/wishlist')

    return data
  }
}

export default getCustomerWishlistOperation
