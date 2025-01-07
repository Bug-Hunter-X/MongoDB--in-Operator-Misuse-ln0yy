```javascript
const query = { name: { $in: ['John Doe', 'Jane Doe'] } };
// Correct use of $in operator. 
db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```