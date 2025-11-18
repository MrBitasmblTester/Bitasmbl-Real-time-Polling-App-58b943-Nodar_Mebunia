let polls = {};
module.exports = {
  create(p){ const id=Date.now().toString(); polls[id]=Object.assign({id,options:{},likes:0,comments:[]},p); return polls[id]; },
  list(){ return Object.values(polls); },
  vote(id,opt){ const p=polls[id]; if(!p) return null; p.options[opt]=(p.options[opt]||0)+1; return p; },
  like(id){ const p=polls[id]; if(!p) return null; p.likes=(p.likes||0)+1; return p; },
  addComment(id,c){ const p=polls[id]; if(!p) return null; p.comments=p.comments||[]; p.comments.push(c); return p; },
  update(id,data){ if(!polls[id]) return null; Object.assign(polls[id],data); return polls[id]; },
  delete(id){ delete polls[id]; return true; }
};