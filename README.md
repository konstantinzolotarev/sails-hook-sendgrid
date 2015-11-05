# SendGrid hook for Sails.js

## Configuration
Configuration section for hook.

File name: `config/sendgrid.js`

```javascript

module.exports.sendgrid = {
  /**
   * API Key form Sendgrid
   *
   * If apiKey used no apiUser/apiPassword needed
   * @type {String}
   */
  apiKey: 'someSendGridApiKey'

  /**
   * Your SendGrid username.
   * You could use apiKey or apiUser + apiPassword
   * @type {String}
   */
  apiUser: 'username',

  /**
   * SendGrid password
   *
   * No need if apiKey used
   * @type {String}
   */
  apiPassword: 'pasword'
};
```

