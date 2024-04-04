db.data.drop()
db.data.insertMany([{'name':'Ankita',age:22},{'name':'Omkar',age:21}])
db.data.insertMany([{'name':'Ankita',age:22},{_id:ObjectId('660d9c5283e0ae098cf5d55c'),'name':'Omkar',age:22},{'name':'Omkar',age:21}]) 
db.data.insertMany([{'name':'Ankita',age:22},{_id:ObjectId('660d9c5283e0ae098cf5d55c'),'name':'Omkar',age:22},{'name':'Omkar',age:21}],{ordered:false}) 

db.data.findOne({'name':'Omkar'})