import type { OperationContext } from '@commerce/api/operations'
import type { GetPageOperation } from '@commerce/types/page'
import type { LocalConfig, Provider } from '..'

export default function getPageOperation({
  commerce,
}: OperationContext<Provider>) {
  return async function getPage<T extends GetPageOperation>({
    variables,
    config,
  }: {
    variables: T['variables']
    config?: Partial<LocalConfig>
    preview?: boolean
  }): Promise<T['data']> {
    const cfg = commerce.getConfig(config)
    const { data } = await cfg.restFetch<any>(`/page/${variables.id}`)

    return data
  }
}
