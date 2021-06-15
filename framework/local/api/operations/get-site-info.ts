import type { OperationContext } from '@commerce/api/operations'
import type { GetSiteInfoOperation } from '@commerce/types/site'
import type { LocalConfig, Provider } from '..'

export default function getSiteInfoOperation({
  commerce,
}: OperationContext<Provider>) {
  return async function getSiteInfo<T extends GetSiteInfoOperation>({
    config,
  }: {
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<T['data']> {
    const cfg = commerce.getConfig(config)
    const { data } = await cfg.restFetch('/site')

    return data
  }
}
