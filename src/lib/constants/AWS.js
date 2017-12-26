import AWS from 'aws-sdk';



import awsExports from '../../aws-exports';
export const AWS_CONFIG = awsExports;

const CONFIG = new AWS.Config({
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:bd9721cf-a06c-416f-bf28-ca2513b2cb77",
    // Logins: { // optional tokens, used for authenticated login
    //   'graph.facebook.com': 'FBTOKEN',
    //   'www.amazon.com': 'AMAZONTOKEN',
    //   'accounts.google.com': 'GOOGLETOKEN'
    // }
  }),
  region: "us-east-1",
  accessKeyId: "AKIAJEAQEX3EW3RAC5BA",
  secretAccessKey: "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",
  dynamoDbCrc32: false 
})


export const Lambda = new AWS.Lambda(CONFIG);
// AWS.config.update({
//   accessKeyId: "AKIAJEAQEX3EW3RAC5BA",
//   region:"us-east-1",
//   dynamoDbCrc32: false // disable SDK-side crc32 check
// });

// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//   IdentityPoolId: "us-east-1:bd9721cf-a06c-416f-bf28-ca2513b2cb77",
// });

export const initAWS = () => AWS.config.update(CONFIG);
