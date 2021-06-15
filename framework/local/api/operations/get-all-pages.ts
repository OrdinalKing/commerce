import type { OperationContext } from '@commerce/api/operations'
import type { GetAllPagesOperation } from '@commerce/types/page'
import type { LocalConfig, Provider } from '..'

function getAllPagesOperation({ commerce }: OperationContext<Provider>) {
  return async function getAllPages<T extends GetAllPagesOperation>({
    config,
  }: {
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<T['data']> {
    const cfg = commerce.getConfig(config)
    const { data } = await cfg.restFetch<any>('/pages')

    return data
  }
}

export default getAllPagesOperation
