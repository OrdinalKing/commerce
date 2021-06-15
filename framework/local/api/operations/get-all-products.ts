import type { OperationContext } from '@commerce/api/operations'
import type { GetAllProductsOperation } from '@commerce/types/product'
import type { LocalConfig, Provider } from '..'

function getAllProductsOperation({ commerce }: OperationContext<Provider>) {
  return async function getAllProducts<T extends GetAllProductsOperation>({
    config,
  }: {
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<T['data']> {
    const cfg = commerce.getConfig(config)
    const { data } = await cfg.restFetch<any>('/products')

    return data
  }
}

export default getAllProductsOperation
