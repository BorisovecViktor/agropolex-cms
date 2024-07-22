import { $api, API_URL } from 'api/http'
import { IFilterData } from 'api/types/filter'

class FilterService {
  getFilters(id: string) {
    return $api.get<IFilterData>(`${API_URL}/filters/${id}`)
  }
}

export const filterService = new FilterService()
