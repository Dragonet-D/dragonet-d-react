import { request } from 'umi'

export function getList() {
  return request('/api/note/getList', {
    method: 'get',
  })
}
