/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images : {
    domains : [
      'links.papareact.com'
    ]
  },
  env : {
    mapbox_key:'pk.eyJ1Ijoicm95a2ltbSIsImEiOiJja3lyY3RzeDQwc204Mm9veW9ibHV4cXl2In0.GfZdjwdiq4nrx7N0cyDQ7Q',
    host : 'http://localhost:8088',
    NAVER_CLIENT_ID : 'iep7htu6ck',
    NAVER_CLIENT_SECRET : 'Li6DgB7b02fhngLv6fdSeLk8UUOKF1ge6MbwjtPa',
  }
}
