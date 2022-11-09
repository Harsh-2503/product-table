import React, { useEffect,useState  } from 'react'
import Modal from './Modal/Modal'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import Table from './Table/Table'


export default function Main() {
const [modal,setModal] = useState(true)
const [amodal,setaModal] = useState(true)
const [name,setName] = useState('')
const [prize,setPrize] = useState('')
const [quantity,setQuantity] = useState('')
const [aname,setaName] = useState('')
const [aprize,setaPrize] = useState('')
const [aquantity,setaQuantity] = useState('')
const [response,setResponse] = useState({})
const [search,setSearch] = useState('')
const addButton =()=>{
    setModal(false)
}
const closeButton=()=>{
    setModal(true)
}
const acloseButton=()=>{
    setaModal(true)
}
const removeData = (event)=>{
    const item= event.currentTarget.getAttribute("name")
    fetch('http://127.0.0.1:5000/delete/'+item,{
        method:"DELETE",
        header:{
            "Content-Type":"application/json"
        }
    }).then(()=>{
        getAlldata()
    }).catch((error) => {
        console.error('Error:', error);
      })
}
const getData = (event)=>{
    setaModal(false)
    const item= event.currentTarget.getAttribute("name")
    localStorage.setItem('id',item)
    fetch("http://127.0.0.1:5000/get/"+item,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response)=> response.json())
    .then((data)=> {
        console.log(data)
        setaName(data['name'])
        setaPrize(data['prize'])
        setaQuantity(data['quantity'])
    })
    .catch((error) => {
      console.error('Error:', error);
    })
}
const addData =()=> fetch('http://127.0.0.1:5000/add',{
    method: "POST",
    headers:{
    "Content-Type": "application/json"},
    body:JSON.stringify({'name':name,'prize':prize,'quantity':quantity})
}).then(()=>{
    setModal(true)
    getAlldata()
})
.catch((error) => {
    console.error('Error:', error);
  })

const updateData =()=>{
    const item = localStorage.getItem('id')
    fetch('http://127.0.0.1:5000/update/'+item,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({'name':aname,'prize':aprize,'quantity':aquantity})
    }).then(()=>{
        setaModal(true)
        getAlldata()
    })
    .catch((error) => {
        console.error('Error:', error);
      })

}

// .then((response) => response.json())
// .then((data) => {
//   console.log('Success:', data);
//   setModal(true)
// })
// .catch((error) => {
//   console.error('Error:', error);
// })
const onSearch = (event)=>{
    setSearch(event.target.value)
}

const getAlldata = ()=> {fetch('http://127.0.0.1:5000/search',{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({'name':search})
})
.then((response)=> response.json())
.then((data)=> {
    // console.log(data)
    // console.log(data[0]['_id']['$oid'])
    setResponse(data)
})
.catch((error) => {
  console.error('Error:', error);
})}

const nchange=event=>{
    setName(event.target.value)
    // console.log("change")
}
const pchange =event=>{
    setPrize(event.target.value)
    // console.log('prize')
}
const qchange=event=>{
    setQuantity(event.target.value)
    console.log('q')
}
const anchange=event=>{
    setaName(event.target.value)
    // console.log("change")
}
const apchange =event=>{
    setaPrize(event.target.value)
    // console.log('prize')
}
const aqchange=event=>{
    setaQuantity(event.target.value)
    console.log('q')
}
useEffect(()=>{getAlldata()},[search])

  return (
    <>
    {/* {response?console.log(response):console.log('no')} */}
    <Navbar add={addButton}/>
    <Search blur={modal} change={onSearch} value={search}></Search>
    <Table response={response} add={getData} remove={removeData} blur={modal}></Table>
    <Modal modal_name={"Edit Product"} nchange={anchange} name={aname} pchange={apchange} prize={aprize} qchange={aqchange} quantity={aquantity} close={acloseButton} modal={amodal} submit={updateData}></Modal>
    <Modal modal_name={"Add Product"} nchange={nchange} name={name} pchange={pchange} prize={prize} qchange={qchange} quantity={quantity} close={closeButton} modal={modal} submit={addData}></Modal>
    </>
  )
}
