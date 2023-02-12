import request from '@/libs/request';

/**
 * @description 上传
 * @param {Object} param data {Object} 传值参数
 */
export function upload(data, config) {
  return request({
    url: 'file/video_upload',
    method: 'post',
    file: true,
    data,
  });
}
