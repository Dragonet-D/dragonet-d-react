import { request } from 'umi'

// 获取列表
export function getList() {
  return request('/api/note/getList', {
    method: 'get',
  })
}

// 添加
export function addItem(params: { title: string; url: string }) {
  return request('api/note/add', {
    method: 'post',
    params,
  })
}
