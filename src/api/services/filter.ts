import { $api } from 'api/http'
import { IFilterData } from 'api/types/filter'

class FilterService {
  getFilters(id: string) {
    return $api.get<IFilterData>(`/filters/${id}`)
  }
}

export const filterService = new FilterService()
