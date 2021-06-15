import type { OperationContext } from '@commerce/api/operations'
import type { GetAllPagesOperation } from '@commerce/types/page'
import type { LocalConfig, Provider } from '../'

export default function getAllPagesOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getAllPages<T extends GetAllPagesOperation>({
    config,
  }: {
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<T['data']> {
    const cfg = commerce.getConfig(config)
    const { data } = await cfg.restFetch<T['data']>('/pages')

    return data
  }

  return getAllPages
}
