// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,

  region: 'us-east-1',

  identityPoolId: 'us-east-1:634225213090:userpool/us-east-1_xtc3EsHML',
  userPoolId: 'us-east-1_xtc3EsHM',
  clientId: '2sbcba292sjkgmjo1c6j2o2gai',

  rekognitionBucket: 'rekognition-pics',
  albumName: "usercontent",
  bucketRegion: 'us-east-1',

  ddbTableName: 'LoginTrail'
};
