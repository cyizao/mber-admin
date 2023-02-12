import request from '@/libs/request';

/**
 * @description 列表
 * @param {Number} param id {Number} 组合数据id
 */
export function membershipDataListApi(data) {
  return request({
    url: 'agent/level',
    // url: `setting/group_data`,
    method: 'get',
    params: data,
  });
}

/**
 * @description 组合数据列表 -- 编辑表单
 * @param {Number} param id {Number} 组合数据列表id
 * @param {Object} param data {Object} 组合数据id对象
 */
export function membershipDataEditApi(data, url) {
  return request({
    url: url,
    method: 'get',
    params: data,
  });
}

/**
 * @description 组合数据列表 -- 新增表单
 * @param {Number} param id {Number} 组合数据id
 */
export function membershipDataAddApi(id, url) {
  return request({
    url: url,
    // url: `setting/group_data/create`,
    method: 'get',
    params: id,
  });
}

/**
 * @description 组合数据列表 -- 修改状态
 * @param {Object} param data {Object} 组合数据列表传值
 */
export function membershipSetApi(url) {
  return request({
    url: url,
    // url: `/setting/group_data/set_status/${data.id}/${data.status}`,
    method: 'PUT',
  });
}

/**
 * @description 组合数据列表 -- 修改状态
 * @param {Object} param data {Object} 组合数据列表传值
 */
export function levelTaskSetApi(url) {
  return request({
    url: url,
    // url: `/setting/group_data/set_status/${data.id}/${data.status}`,
    method: 'PUT',
  });
}

/**
 * @description 等级任务列表
 * @param {Number} param id {Number} 组合数据id
 */
export function levelTaskListDataAddApi(data) {
  return request({
    url: 'agent/level_task',
    // url: `setting/group_data`,
    method: 'get',
    params: data,
  });
}

/**
 * @description 组合数据列表 -- 编辑表单
 * @param {Number} param id {Number} 组合数据列表id
 * @param {Object} param data {Object} 组合数据id对象
 */
export function levelTaskDataEditApi(data, url) {
  return request({
    url: url,
    method: 'get',
    params: data,
  });
}

/**
 * @description 组合数据列表 -- 新增表单
 * @param {Number} param id {Number} 组合数据id
 */
export function levelTaskDataAddApi(id, url) {
  return request({
    url: url,
    // url: `setting/group_data/create`,
    method: 'get',
    params: id,
  });
}
