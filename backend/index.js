const http = require('http');
const { Server } = require('socket.io');
const store = require('./store');
const server = http.createServer(async (req,res)=>{
  if(req.url.startsWith('/polls')){
    if(req.method==='GET'){ res.setHeader('Content-Type','application/json'); res.end(JSON.stringify(store.list())); return }
    if(req.method==='POST'){ let b=''; for await(const c of req) b+=c; const p=store.create(JSON.parse(b)); res.end(JSON.stringify(p)); return }
  }
  res.statusCode=404; res.end();
});
const io = new Server(server,{cors:{origin:'*'}});
io.on('connection', socket => {
  socket.on('vote', ({pollId,option})=>{ const p=store.vote(pollId,option); io.emit('poll-updated',p); });
  socket.on('like', ({pollId})=>{ const p=store.like(pollId); io.emit('poll-updated',p); });
  socket.on('comment', ({pollId,comment})=>{ const p=store.addComment(pollId,comment); io.emit('poll-updated',p); });
});
server.listen(3000,()=>console.log('Backend listening 3000'));