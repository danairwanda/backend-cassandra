var cassandra = require("cassandra-driver");
var dbConfig = {
	contactPoints : ['127.0.0.1'],
	keyspace:'booklist'
};

var connection = new cassandra.Client(dbConfig);
	connection.connect(function(err,result){
	console.log('cassandra connected');
});