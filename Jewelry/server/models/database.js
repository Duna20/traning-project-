const { default: mongoose } = require('mongoose');
const mongoosw = require ('mongoose');
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser:true , useUNifiedTopology:true});
const db =mongoose.connection;

db.on('error',console.error.bind(console , 'connection error:'));
db.once('open',function(){
console.log('Coonected')
});

//requre

require('./CS');



/*
<div class="col-md-3 text-end">
  <form method="POST" action="/search">
    <input id ="searchbar" type="search" name="searchTerm" class="form-control" placeholder="Search..." aria-label="Search">
  </form>
</div>
*/