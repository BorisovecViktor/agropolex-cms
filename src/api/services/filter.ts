import { IFilter } from 'api/types/filter'
import { $api, API_URL } from 'api/http'

class FilterService {
  getFilters(id: string) {
    return $api.get<Array<IFilter>>(`${API_URL}/filters/${id}`)
  }
}

export const filterService = new FilterService()
