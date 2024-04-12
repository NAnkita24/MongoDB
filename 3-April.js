db.data.drop()

db.data.insertMany([{'name':'Ankita',age:22},{'name':'Omkar',age:21}])
db.data.insertMany([{'name':'Ankita',age:22},{_id:ObjectId('660d9c5283e0ae098cf5d55c'),'name':'Omkar',age:22},{'name':'Omkar',age:21}]) 
db.data.insertMany([{'name':'Ankita',age:22},{_id:ObjectId('660d9c5283e0ae098cf5d55c'),'name':'Omkar',age:22},{'name':'Omkar',age:21}],{ordered:false}) 

db.data.findOne({'name':'Omkar'})

mongoimport D:\MongoDB\sample1.json -d dummy -c sample1 --jsonArray 
mongoimport D:\MongoDB\sample4.json -d dummy -c sample4 --jsonArray 
mongoimport D:\MongoDB\sample5.json -d dummy -c sample5 --jsonArray 
mongoimport D:\MongoDB\students.json -d dummy -c students --jsonArray 
mongoimport D:\MongoDB\items.json -d dummy -c items --jsonArray 
mongoimport D:\MongoDB\moves.json -d dummy -c moves --jsonArray 
mongoimport D:\MongoDB\pokedex.json -d dummy -c pokedex --jsonArray 
mongoimport D:\MongoDB\products.json -d dummy -c products --jsonArray 

db.products.find({'price':{$eq:120}}).count()
db.products.find({'price':{$in:[120,30]}}).count()
db.products.find({'price':{$in:[120,30]}}).limit(2).skip(1)
db.products.find({'price':{$gt:120}}).limit(3).sort({'price':1})
db.products.find({'price':{$gt:120}}).limit(3).sort({'price':-1})

db.products.find({$and :[{'price':{$eq:280}},{'name':'OPPOF19'}]})
db.products.find({$or :[{'price':{$eq:280}},{'name':'OPPOF19'}]})
db.products.find({{'price':{$not:{$eq:100}}}}).limit(3)
db.products.find({'price':{$ne:100}}).limit(3);

db.moves.find({$expr:{$gt:[{$add:['$power','$pp']},'$accuracy']}})

db.products.find({price:{$exists:true}}).count()
db.products.find({price:{$exists:false}}).count()
db.products.find({price:{$type:'number'}}).count()
