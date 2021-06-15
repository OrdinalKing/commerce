import type { OperationContext } from '@commerce/api/operations'
import type { GetAllProductPathsOperation } from '@commerce/types/product'
import type { LocalConfig, Provider } from '..'

function getAllProductPathsOperation({ commerce }: OperationContext<Provider>) {
  return async function getAllProductPaths<
    T extends GetAllProductPathsOperation
  >({
    config,
  }: {
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<T['data']> {
    const cfg = commerce.getConfig(config)
    const { data } = await cfg.restFetch('/products/paths')

    return data
  }
}

export default getAllProductPathsOperation
