# Demo for Github Issue #4582


See https://github.com/microsoft/botbuilder-js/issues/4582

## Reproduce the error


1. Install pack (https://buildpacks.io/docs/tools/pack/)
1. Build the application: (e.g. with pack) `pack build chatbot:latest`
2. Push image to a container registry: `docker push chatbot:latest`
3. Deploy application to an Azure Kubernetes Cluster with workload identity enabled (see manifests in `manifests` directory). Add an Ingress and Service as required for your kubernetes cluster
4. Create a bot service instance and configure the URL where the application is reachable
5. Write a message via Teams connector to the BOT
6. observe the error:

```
(node:29) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)

Bot Started, restify listening to http://[::]:8080
req body:  {"text":"tell a joke","textFormat":"plain","attachments":[{"contentType":"text/html","content":"<p>tell a joke</p>"}],"type":"message","timestamp":"2024-01-05T14:23:15.0013378Z","localTimestamp":"2024-01-05T15:23:15.0013378+01:00","id":"1704464594972","channelId":"msteams","serviceUrl":"https://smba.trafficmanager.net/de/","from":{"id":"29:1Dfonn5oVQyqARZ8W97vOg1zCYKbj1Ac4Z58E5KDvzu2GmiqNZ3DXztrovFm2XRR3QonslkOWBVfks6krUBh_Hg","name":"Some, Name","aadObjectId":"e23453177a-43b7-404e-8ffb-9d0f7f96990d"},"conversation":{"conversationType":"personal","tenantId":"<your-tenant-id>","id":"a:1w2V2C7t9Kpe78T_yDsL0zl43pJtr6Ag12PJJY_BdMuJQ8a-d-1gMW71OosXIGrsWadbpyc_3T8eM4hlYP8C1p-BPRh7k_uq-aw38vdiqZJO0n0ato3DQDgpc3ICdefFhg"},"recipient":{"id":"28:d4d625e5-45bf-42a9-82c2-dd9f9b4d787c","name":"GAPi - dev"},"entities":[{"locale":"en-GB","country":"GB","platform":"Web","timezone":"Europe/Berlin","type":"clientInfo"}],"channelData":{"tenant":{"id":"<your-tenant-id>"}},"locale":"en-GB","localTimezone":"Europe/Berlin"}
azure:identity:info EnvironmentCredential => Found the following environment variables: AZURE_TENANT_ID, AZURE_CLIENT_ID
azure:core-client:warning The baseUri option for SDK Clients has been deprecated, please use endpoint instead.
azure:core-client:warning The baseUri option for SDK Clients has been deprecated, please use endpoint instead.
azure:identity:info VisualStudioCodeCredential => Failed to load the Visual Studio Code configuration file. Error: ENOENT: no such file or directory, open '/home/cnb/.config/Code/User/settings.json'
azure:core-client:warning The baseUri option for SDK Clients has been deprecated, please use endpoint instead.
azure:identity:info EnvironmentCredential => Found the following environment variables: AZURE_TENANT_ID, AZURE_CLIENT_ID
azure:core-client:warning The baseUri option for SDK Clients has been deprecated, please use endpoint instead.
azure:core-client:warning The baseUri option for SDK Clients has been deprecated, please use endpoint instead.
azure:identity:info VisualStudioCodeCredential => Failed to load the Visual Studio Code configuration file. Error: ENOENT: no such file or directory, open '/home/cnb/.config/Code/User/settings.json'
azure:core-client:warning The baseUri option for SDK Clients has been deprecated, please use endpoint instead.
Response hello test
azure:identity:info ManagedIdentityCredential - Azure Arc MSI => ManagedIdentityCredential - Azure Arc MSI: The environment variables needed are: IMDS_ENDPOINT and IDENTITY_ENDPOINT
azure:identity:info ManagedIdentityCredential - Fabric MSI => ManagedIdentityCredential - Fabric MSI: Unavailable. The environment variables needed are: IDENTITY_ENDPOINT, IDENTITY_HEADER and IDENTITY_SERVER_THUMBPRINT
azure:identity:info ManagedIdentityCredential - AppServiceMSI 2019 => ManagedIdentityCredential - AppServiceMSI 2019: Unavailable. The environment variables needed are: IDENTITY_ENDPOINT and IDENTITY_HEADER.
azure:identity:info ManagedIdentityCredential - AppServiceMSI 2017 => ManagedIdentityCredential - AppServiceMSI 2017: Unavailable. The environment variables needed are: MSI_ENDPOINT and MSI_SECRET.
azure:identity:info ManagedIdentityCredential - CloudShellMSI => ManagedIdentityCredential - CloudShellMSI: Unavailable. The environment variable MSI_ENDPOINT is needed.
azure:identity:info ManagedIdentityCredential - Token Exchange => ManagedIdentityCredential - Token Exchange: Using the client assertion coming from environment variables.
azure:identity:info IdentityClient: sending token request to [https://login.microsoftonline.com/<your-tenant-id>/oauth2/v2.0/token]
azure:core-rest-pipeline retryPolicy:info Retry 0: Attempting to send request 9e47419e-0778-4513-acf5-cee1a3759a53
azure:core-rest-pipeline:info Request: {
  "url": "https://login.microsoftonline.com/<your-tenant-id>/oauth2/v2.0/token",
  "headers": {
    "accept": "application/json",
    "accept-encoding": "gzip,deflate",
    "user-agent": "azsdk-js-identity/2.1.0 core-rest-pipeline/1.12.3 Node/v18.18.2 OS/(x64-Linux-5.15.0-1052-azure)",
    "x-ms-client-request-id": "9e47419e-0778-4513-acf5-cee1a3759a53"
  },
  "method": "POST",
  "timeout": 0,
  "disableKeepAlive": false,
  "proxySettings": {
    "host": "http://<some-proxy-server>",
    "port": 3128,
    "username": "",
    "password": ""
  },
  "withCredentials": false,
  "requestId": "9e47419e-0778-4513-acf5-cee1a3759a53",
  "allowInsecureConnection": true,
  "enableBrowserStreams": false,
  "agent": {
    "_events": {},
    "_eventsCount": 0,
    "timeout": null,
    "maxFreeSockets": 1,
    "maxSockets": 1,
    "maxTotalSockets": null,
    "sockets": {},
    "freeSockets": {},
    "requests": {},
    "options": {},
    "secureProxy": false,
    "proxy": {
      "hostname": "<some-proxy-server>",
      "port": 3128,
      "protocol": "http:",
      "headers": {
        "accept": "application/json"
      },
      "host": "<some-proxy-server>"
    }
  }
}
azure:core-rest-pipeline:info Response status code: 400
azure:core-rest-pipeline:info Headers: {
  "cache-control": "no-store, no-cache",
  "pragma": "no-cache",
  "content-type": "application/json; charset=utf-8",
  "expires": "-1",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "p3p": "CP=\"DSP CUR OTPi IND OTRi ONL FIN\"",
  "x-ms-request-id": "038b6b4c-1bf4-4e1e-baeb-52e6e46e0a02",
  "x-ms-ests-server": "2.1.16942.4 - NEULR1 ProdSlices",
  "x-xss-protection": "0",
  "set-cookie": "fpc=AkNghHIlm_BElHEUOYKPWeQ; expires=Sun, 04-Feb-2024 14:23:15 GMT; path=/; secure; HttpOnly; SameSite=None",
  "date": "Fri, 05 Jan 2024 14:23:14 GMT",
  "connection": "close",
  "content-length": "534"
}
azure:core-rest-pipeline retryPolicy:info Retry 0: Received a response from request 9e47419e-0778-4513-acf5-cee1a3759a53
azure:core-rest-pipeline retryPolicy:info Retry 0: Processing 2 retry strategies.
azure:core-rest-pipeline retryPolicy:info Retry 0: Processing retry strategy throttlingRetryStrategy.
azure:core-rest-pipeline retryPolicy:info Retry 0: Skipped.
azure:core-rest-pipeline retryPolicy:info Retry 0: Processing retry strategy exponentialRetryStrategy.
azure:core-rest-pipeline retryPolicy:info Retry 0: Skipped.
azure:core-rest-pipeline retryPolicy:info None of the retry strategies could work with the received response. Returning it.
azure:identity:warning IdentityClient: authentication error. HTTP status: 400, AADSTS70011: The provided request must include a 'scope' input parameter. The provided value for the input parameter 'scope' is not valid. The scope https://api.botframework.com is not valid. Trace ID: 038b6b4c-1bf4-4e1e-baeb-52e6e46e0a02 Correlation ID: 9e47419e-0778-4513-acf5-cee1a3759a53 Timestamp: 2024-01-05 14:23:15Z
azure:identity:info VisualStudioCodeCredential => Failed to load the Visual Studio Code configuration file. Error: ENOENT: no such file or directory, open '/home/cnb/.config/Code/User/settings.json'
azure:identity:info AzureCliCredential => getToken() => Using the scope https://api.botframework.com
azure:identity:info AzureCliCredential => getToken() => ERROR. Scopes: https://api.botframework.com. Error message: Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'..
azure:identity:info AzureCliCredential => getToken() => ERROR. Scopes: https://api.botframework.com. Error message: Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'..
azure:identity:info AzurePowerShellCredential => getToken() => Using the scope https://api.botframework.com
azure:identity:info AzurePowerShellCredential => getToken() => ERROR. Scopes: https://api.botframework.com. Error message: Error: Unable to execute PowerShell. Ensure that it is installed in your system. To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot..
azure:identity:info ChainedTokenCredential => getToken() => ERROR. Scopes: https://api.botframework.com. Error message: ChainedTokenCredential authentication failed.
CredentialUnavailableError: EnvironmentCredential is unavailable. No underlying credential could be used. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.
CredentialUnavailableError: ManagedIdentityCredential: The managed identity endpoint is indicating there's no available identity. Message: invalid_scope Status code: 400
More details:
AADSTS70011: The provided request must include a 'scope' input parameter. The provided value for the input parameter 'scope' is not valid. The scope https://api.botframework.com is not valid. Trace ID: 038b6b4c-1bf4-4e1e-baeb-52e6e46e0a02 Correlation ID: 9e47419e-0778-4513-acf5-cee1a3759a53 Timestamp: 2024-01-05 14:23:15Z
CredentialUnavailableError: No implementation of `VisualStudioCodeCredential` is available. You must install the identity-vscode plugin package (`npm install --save-dev @azure/identity-vscode`) and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling `useIdentityPlugin(vsCodePlugin)` before creating a `VisualStudioCodeCredential`.
CredentialUnavailableError: Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'.
CredentialUnavailableError: Error: Unable to execute PowerShell. Ensure that it is installed in your system. To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot..
azure:identity:info ManagedIdentityCredential - Token Exchange => ManagedIdentityCredential - Token Exchange: Using the client assertion coming from environment variables.
azure:identity:info IdentityClient: sending token request to [https://login.microsoftonline.com/<your-tenant-id>/oauth2/v2.0/token]
azure:core-rest-pipeline retryPolicy:info Retry 0: Attempting to send request 1997ed46-cf5b-4a7b-935a-0c4f3a7579d3
azure:core-rest-pipeline:info Request: {
  "url": "https://login.microsoftonline.com/<your-tenant-id>/oauth2/v2.0/token",
  "headers": {
    "accept": "application/json",
    "accept-encoding": "gzip,deflate",
    "user-agent": "azsdk-js-identity/2.1.0 core-rest-pipeline/1.12.3 Node/v18.18.2 OS/(x64-Linux-5.15.0-1052-azure)",
    "x-ms-client-request-id": "1997ed46-cf5b-4a7b-935a-0c4f3a7579d3"
  },
  "method": "POST",
  "timeout": 0,
  "disableKeepAlive": false,
  "proxySettings": {
    "host": "http://<some-proxy-server>",
    "port": 3128,
    "username": "",
    "password": ""
  },
  "withCredentials": false,
  "requestId": "1997ed46-cf5b-4a7b-935a-0c4f3a7579d3",
  "allowInsecureConnection": true,
  "enableBrowserStreams": false,
  "agent": {
    "_events": {},
    "_eventsCount": 0,
    "timeout": null,
    "maxFreeSockets": 1,
    "maxSockets": 1,
    "maxTotalSockets": null,
    "sockets": {},
    "freeSockets": {},
    "requests": {},
    "options": {},
    "secureProxy": false,
    "proxy": {
      "hostname": "<some-proxy-server>",
      "port": 3128,
      "protocol": "http:",
      "headers": {
        "accept": "application/json"
      },
      "host": "<some-proxy-server>"
    }
  }
}
azure:core-rest-pipeline:info Response status code: 400
azure:core-rest-pipeline:info Headers: {
  "cache-control": "no-store, no-cache",
  "pragma": "no-cache",
  "content-type": "application/json; charset=utf-8",
  "expires": "-1",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "p3p": "CP=\"DSP CUR OTPi IND OTRi ONL FIN\"",
  "x-ms-request-id": "88b41a88-c4f9-4209-b18d-73b4b130da01",
  "x-ms-ests-server": "2.1.16942.4 - WEULR1 ProdSlices",
  "x-xss-protection": "0",
  "set-cookie": "fpc=At8ct_poObVLsruo5ZOHhJ0; expires=Sun, 04-Feb-2024 14:23:15 GMT; path=/; secure; HttpOnly; SameSite=None",
  "date": "Fri, 05 Jan 2024 14:23:15 GMT",
  "connection": "close",
  "content-length": "534"
}
azure:core-rest-pipeline retryPolicy:info Retry 0: Received a response from request 1997ed46-cf5b-4a7b-935a-0c4f3a7579d3
azure:core-rest-pipeline retryPolicy:info Retry 0: Processing 2 retry strategies.
azure:core-rest-pipeline retryPolicy:info Retry 0: Processing retry strategy throttlingRetryStrategy.
azure:core-rest-pipeline retryPolicy:info Retry 0: Skipped.
azure:core-rest-pipeline retryPolicy:info Retry 0: Processing retry strategy exponentialRetryStrategy.
azure:core-rest-pipeline retryPolicy:info Retry 0: Skipped.
azure:core-rest-pipeline retryPolicy:info None of the retry strategies could work with the received response. Returning it.

CredentialUnavailableError: Error: Unable to execute PowerShell. Ensure that it is installed in your system. To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot.
    at /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:1431:29
    at async Object.withSpan (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:140:28) {
  errors: [
    CredentialUnavailableError: EnvironmentCredential is unavailable. No underlying credential could be used. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.
        at /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:2178:19
        at /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:140:114
        at Object.withContext (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:85:20)
        at withContext (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:153:34)
        at Object.withSpan (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:140:34)
        at EnvironmentCredential.getToken (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:2162:30)
        at /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:1416:52
        at /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:140:114
        at Object.withContext (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:85:20)
        at withContext (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:153:34),
    CredentialUnavailableError: ManagedIdentityCredential: The managed identity endpoint is indicating there's no available identity. Message: invalid_scope Status code: 400
    More details:
    AADSTS70011: The provided request must include a 'scope' input parameter. The provided value for the input parameter 'scope' is not valid. The scope https://api.botframework.com is not valid. Trace ID: a8427b5a-fff2-4ad4-ac47-58787cd1bc01 Correlation ID: 0403d745-8c18-408c-9fd6-7ec50f351318 Timestamp: 2024-01-05 14:23:17Z
        at DefaultManagedIdentityCredential.getToken (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:3035:23)
        at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
        at async /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:1416:29
        at async Object.withSpan (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:140:28),
    CredentialUnavailableError: No implementation of `VisualStudioCodeCredential` is available. You must install the identity-vscode plugin package (`npm install --save-dev @azure/identity-vscode`) and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling `useIdentityPlugin(vsCodePlugin)` before creating a `VisualStudioCodeCredential`.
        at VisualStudioCodeCredential.getToken (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:1277:19)
        at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
        at async /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:1416:29
        at async Object.withSpan (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:140:28),
    CredentialUnavailableError: Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'.
        at /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:1558:35
        at async Object.withSpan (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:140:28)
        at async /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:1416:29
        at async Object.withSpan (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:140:28),
    CredentialUnavailableError: Error: Unable to execute PowerShell. Ensure that it is installed in your system. To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot.
        at /layers/paketo-buildpacks_npm-install/launch-modules/node_modules/botframework-connector/node_modules/@azure/identity/dist/index.js:1782:31
        at async Object.withSpan (/layers/paketo-buildpacks_npm-install/launch-modules/node_modules/@azure/core-tracing/dist/index.js:140:28)
  ]
}
```

## Patch the package
Add this to package.json to patch the botframework-connector library:
`"postinstall": "patch-package && rm -rf node_modules/botframework-connector/node_modules/@azure/identity && cp -r node_modules/@azure/identity node_modules/botframework-connector/node_modules/@azure"`
- rename the folder `patches_inactive` to `patches` and run `rm -rf node_modules && npm install`
- build the image and test it again


