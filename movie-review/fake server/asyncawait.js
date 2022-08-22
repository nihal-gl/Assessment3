console.log("asyncawait");
fetch("http://localhost:3001/empDetails")
.then((res1)=>{
    // console.log(res1);
    return res1.json()
})
.then((res)=> {
    console.log(res)
    console.log(res[0]);
    console.log(res.filter(
    (item)=>item.city==="delhi" 
))

})
.catch((err)=> console.log(err))


// console.log(userss.filter(
//     (item)=>item.city==="city1"&&item.nams==="name1"
    
// ))

// fetch("http://localhost:3001/empDetails")
// .then((res)=> console.log(res.json()))
// .catch((err)=> console.log(err))



// create city for all users
// on fetch use function








