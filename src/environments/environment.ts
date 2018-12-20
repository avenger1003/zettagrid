// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'devLocal',
  config: {
	"APP_NAME": "Zetta App",
    "BASE_URL": "http://zaapsdev01.eastus.cloudapp.azure.com",
    "API_URL": "http://zaapsdev01.eastus.cloudapp.azure.com/api"    
  }
};

