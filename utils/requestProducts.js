const axios = require('axios')

module.exports = requestProducts = function () {
  return axios.get('https://web.np.playstation.com/api/graphql/v1//op', {
    params: {
      operationName: 'categoryGridRetrieve',
      variables:
        '{"id":"803cee19-e5a1-4d59-a463-0b6b2701bf7c","pageArgs":{"size":800,"offset":0},"sortBy":{"name":"default","isAscending":true},"filterBy":[],"facetOptions":[]}',
      extensions:
        '{"persistedQuery":{"version":1,"sha256Hash":"17f6ef895587b3003ea3c992eb7f1983bc15535ea98b7be92e449f0343930cb0"}}',
    },
    headers: {
      authority: 'web.np.playstation.com',
      'sec-ch-ua':
        '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
      'x-psn-request-id': '93a13617-7ce4-4188-aeef-58642c545dc4',
      'sec-ch-ua-mobile': '?0',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
      'content-type': 'application/json',
      accept: 'application/json',
      'x-psn-app-ver':
        '@sie-ppr-web-store/app/@sie-ppr-web-store/app@0.51.0-1-g74f7047f-74f7047f39ccb59a9d9afc6d52d011641697778c',
      'x-psn-correlation-id': '56475b4f-d4c4-4119-b79b-b4503f873f6b',
      'x-psn-store-locale-override': 'en-IE',
      origin: 'https://store.playstation.com',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      referer: 'https://store.playstation.com/',
      'accept-language':
        'en-GB,en;q=0.9,ja-JP;q=0.8,ja;q=0.7,ru-RU;q=0.6,ru;q=0.5,en-US;q=0.4,zh-CN;q=0.3,zh;q=0.2',
    },
  })
}
