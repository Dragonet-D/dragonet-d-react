import { request } from 'umi'

export function test() {
  return request('/api/user', {
    method: 'get',
  })
}
