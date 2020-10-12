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
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

// 删除
export function del(params: { id: string | number }) {
  return request('/api/note/del', {
    method: 'delete',
    params,
  })
}
