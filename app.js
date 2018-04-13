var Built = require('built-extension-sdk')

// Instantiate your Built application
// Add your Built Application API Key in {{APP_API_KEY}}
var app = Built.App('{{APP_API_KEY}}')
.setHost("api.built.io")
.setProtocol("https")
.setMasterKey('{{MASTER_KEY}}')

var extensionSDK = app.Extension({
	extension_key  : 'blt_ext_default',
	secret_key     : 'blt_secret_default',
	static         : __dirname + '/client'
})

return extensionSDK.start(9000)