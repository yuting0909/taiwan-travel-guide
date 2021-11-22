import jsSHA from 'jssha'

export default function () {
  const AppID = 'af9cbd66c2b94b71bb8c3cf33c02a045'
  const AppKey = '0yYCEmoolz2IYLFtCbeKQlcxLB0'

  const GMTString = new Date().toGMTString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'

  return {
    Authorization: Authorization,
    'X-Date': GMTString /*, 'Accept-Encoding': 'gzip' */
  } // 如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}
