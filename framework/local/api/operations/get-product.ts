import type { OperationContext } from '@commerce/api/operations'
import type { GetProductOperation } from '@commerce/types/product'
import type { LocalConfig, Provider } from '..'

function getProductOperation({ commerce }: OperationContext<Provider>) {
  return async function getProduct<T extends GetProductOperation>({
    variables,
    config,
  }: {
    variables: T['variables']
    config?: Partial<LocalConfig>
    preview?: boolean
  }): Promise<T['data']> {
    const cfg = commerce.getConfig(config)
    const { data } = await cfg.restFetch<any>(`/product/${variables.slug}`)

    return data
  }
}

export default getProductOperation
