/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((item)=> {
    if (item.profession === 'developer'){
      console.log(item.name)
    }
  })

}

function PrintDeveloperbyForEach() {
  //Write your code here
   arr.forEach((item)=>{
    if (item.profession === 'developer'){
      console.log(item.name)
    }
  })

}

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr)


}

function removeAdmin() {
  //Write your code here
  ar = arr.filter((item)=>item.profession!=='admin')
  console.log(ar)

}

function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 5, name: "Vishesh Tomar", age: "23", profession: "Student" },
    { id: 6, name: "Vikul Tomar", age: "27", profession: "Farmer" },
    { id: 7, name: "Aakash Sharma", age: "24", profession: "Job" },
  ];
  let concateArray = arr.concat(arr2);
  console.log(concateArray)

}
