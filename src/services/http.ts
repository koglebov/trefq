import ky from 'ky';

const api = ky.extend({
  prefixUrl: 'http://192.168.2.227:8080/trefpp/',
  // hooks: {
  // 	beforeRequest: [
  // 		request => {
  // 			request.headers.set('X-Requested-With', 'ky');
  // 		}
  // 	]
  // }
});

export {api};
