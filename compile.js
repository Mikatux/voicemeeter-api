const { compile } = require('nexe')
console.log(process.env)
compile({
  input: './index.js',
  build: false,
  output: process.env.PROJECT_OUTPUTBIN,
  target: 'windows-x64-8.9.4',
  name: 'Voicemeeter API',
  configure: ['--dest-cpu=x64']
}).then(() => {
  console.log('success')
})