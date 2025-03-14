import { getApps, initializeApp, cert } from 'firebase-admin/app';

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "tienda-mpd",
  private_key_id: "85da9fc4bae1a9603bd85760dd1ef5bbfc315dd4",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC17FnNLqeennSH\ndeiNfVrquKTjq+HCYtEa4xTtfkna9vB/ac3fMmeC89zL89jVZyZ58qqVoNwYkyfr\nOCeNirvf3She5om/2/Oz5eOykTiAH1wvrRlkyehWnSPcyMRuB3bPt9I8Ehvu8/tR\nG6nJFNDWQl19aOdLATg0nC/f7nRSuqrAKNqgJhnAm8Y8sZnx97WSTi3iC8XBYYhu\nGW/0Z8ExKOAx87Yc9asGVT5e18w3jmUBJi4J9gVc+mpcCE5Q4JEmHebp8Cm7tuER\nPdtl7RH1N5rCV2Ifl2ZLso7u1OJIYV4FPAz9HOnWPawYeXUYDa8H+sbkYVIgy194\nsu/2PtWfAgMBAAECggEAJdrRcN2FaX8lVk6VnmN4OKFFRk6swmsXgdXAtA50Rcje\nkFSuzwPJADnINvQ9qWI2Yme5UTtQsRhl1Q8xQ8WbhGCbluu3vCGDm2p5r92B+T8N\nSqplP1C4NNWr8bQhE5ggA+cHKxLFlzpTkDQGZ14aeosCsybSAgx16pSZbapLsC7m\n//vPrQrN7YZSkg3CmgCnZhTsl4RcmM5VWkF3/vmmAPsK159VMajuKhabhqLVGDOn\nL1oebrViTBHbjSuF3nioDdX7uxvtHtCity1sPVjnA57V16vJA1Tt9KuRj9klRcBy\ngFgVeKQtZDMKbJMjrmpRs0q3P4jOQDkgrAqc/rx24QKBgQDzyn6dHm5liqJ7UyFU\nOIdPgiMVO4HNphiF2dmIiLAtsoFsDGRiJtVu0QFJDfqsPIGR51vFRqw5pBC2saU8\nv4N67AA5ZQlUqIrfindfF6TCKI5Fub+cRH7NLi9VksR47nV0I9zT/DzDJKhBz5NU\nSHOMnm58oaTY/qLXuQKHuDnDbwKBgQC/CK9fHLZ3LObpoF0RTB9LTHDN9yYUKxL6\n3w+sPdzXAekHerCPBQw1UYdKFnS3svMnyIAOOf1t6GeAz3rfEe0jBUVQiZUci+bz\nbo5nh2xUS4dOyqaXHDgEjrz7iLqxuJPY5Sv6MijubPGFGVtDdFli0/FGmGmnM1P4\nwXxjVgo40QKBgQCEas+c7eOO2d9pVvz6bv3oDMqbhMf7eKVHRs3mYEA5ggTUOGLq\nASfa2kF1eddXaEIEiwMIw1tWr6u4YANdXLTAtqFki2GnDyjnRKGUEBaYs0ibzMmr\nynSJY/Wn6GE5QmSfob8XkaE7aZTOsj3XAMdqcL+YiIAusRioTcB3EXSmlwKBgAem\n0Gdt3f0eBk27R58GvoYklKwbRyItq3/y6UzL2YmfIPdUubewyxFjp5iXF6u39jdU\nt5RaTEVXtrWZGeHPdQEfF+ym5hsTm3eKqReKfBNQRyYnxc5tqey8zuMAUgIGU52v\naDiIQ81w/aeIIXitM1tbA+IA/tJcovNmxJWx/4zRAoGBAJzVwQ4Mn2h9B7qn40V0\nDcge/lqipji7mv5EBFMM/khGWVtfjc7+EFoHchjFe4Qe74thXll1sCyycArIOfME\nZVCQONRumMt2zNnPr1x+9xhUE+4/sKhiGpTw2kFRXcRAj+Vj6IMWk2k6FoN4AmL9\nnJ/Lw7N0VOBBaLxfzsfJD8Y5\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-83rmc@tienda-mpd.iam.gserviceaccount.com",
  client_id: "112652641182441373690",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-83rmc%40tienda-mpd.iam.gserviceaccount.com"
};
const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount)
}) : activeApps[0];

export { app as a };
