import { COMMENTARY } from '../../shared/constants/api-keys'
import { COMMENTARY_CACHE } from '../../shared/constants/cache-keys'
import { Query } from '../../shared/types/queries'
import dataGetter from '../utils/data-getter'
import { QueryParams } from '../../shared/types/api'

const getCommentaryDetails = async (
  query: QueryParams.CommentaryDetails
): Promise<Query | undefined> => dataGetter(COMMENTARY, COMMENTARY_CACHE, query)

export { getCommentaryDetails }
