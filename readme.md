# Voicemeeter-api [![](https://voicemeeter-api.azurewebsites.net/api/ReleaseBadge)](https://github.com/Mikatux/voicemeeter-api/releases/latest) [![dependencies Status](https://david-dm.org/mikatux/voicemeeter-api/status.svg)](https://david-dm.org/mikatux/voicemeeter-api) 

Voicemeeter-api is a Node.js RESTful API to control [Voicemeeter][voicemeeter] (or [Voicemeeter Banana][voicemeeter-banana]).

# How to use it ?
##### First download it
[Download](https://github.com/Mikatux/voicemeeter-api/releases/latest)
##### Start Voicemeeter or Voicemeeter Banana 
##### And run voicemeeter-api

Now you can do an HTTP request with your prefered [software](https://www.getpostman.com) or [library](https://www.npmjs.com/package/axios)

```sh
$ curl -X POST -d '{"mute":true}' http://localhost:8080/strips/1
```
### Endpoints
##### Set strip parameters
   - Url `/strips/{stripId}`
   - Methods `POST`
   - Body
```js
{
	"mute": Boolean,
	"mono": Boolean,
	"solo": Boolean,
	"gain": Number,
	"comp": Number,
	"gate": Number
}
```
All the attributes are optional, only those present in the body are set.
- Response
```js
{
    "error": false
}
```
##### Set bus parameters
   - Url `/buses/{busId}`
   - Methods `POST`
   - Body
```js
{
	"mute": Boolean,
	"mono": Boolean,
	"gain": Number
}
```
All the attributes are optional, only those present in the body are set.
   - Response
```js
{
    "error": false
}
```
# Todos
- Web page to use and test easily this API
- Implement all methods available in voicemeeter-remote
- Build for windows 32bit

# Development

Want to contribute? Great!

Fork the project make your change then do a pull request.

#### Dependencies
[`voicemeeter-remote`][voicemeeter-remote] => Interact with Voicemeeter instance

[`express`][express] => Handle HTTP request

[`body-parser`][body-parser] => Parse the JSON body of the HTTP request

----
# License

MIT

   [voicemeeter]: <https://www.vb-audio.com/Voicemeeter/index.htm>
   [voicemeeter-banana]: <https://www.vb-audio.com/Voicemeeter/banana.htm>
   [voicemeeter-remote]:<https://www.npmjs.com/package/voicemeeter-remote>
   [express]: <https://www.npmjs.com/package/express>
   [body-parser]: <https://www.npmjs.com/package/body-parser>
