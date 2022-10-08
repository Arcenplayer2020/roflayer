const mineflayer = require('mineflayer');
const http = require('http');
const qs = require('querystring')

console.log(qs.parse('{"chat":123}'))
http.createServer((request,responce)=>{
    console.log('server work');
    if(request.method = 'POST'){
      let body = '';
      request.on('data', chunk => {
          body += chunk.toString();
      });
      request.on('end', () => {
          console.log(body);
          let params = JSON.parse(body);
          console.log(params);
          console.log(params.chat);
          bot.chat(params.chat)
      });
    }
    responce.end('gooo');
}).listen(3000)
 
console.log()

 
 
function addBot(nick){}


const bot = mineflayer.createBot({
  host: 'bbbeeebbbrrraaa.aternos.me', // minecraft server ip
  username: 'Arcenplayer2020', // minecraft username
  //password: '1Wnr7269',
  port: 49339 ,             // only set if you need a port that isn't 25565
  //version:'1.12.2',             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
   //auth: 'microsoft'              // only set if you need microsoft auth, then set this to 'microsoft'
})

bot.on('chat', (username, message) => {
  console.log(username+':'+message)
})
bot.on("login",function(){
  bot.chat("о великий повелитель я зашел на сервер")

})


function SendToChat(message){
  bot.chat(message)
}
bot.on


// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
