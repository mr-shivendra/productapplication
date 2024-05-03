var ndata;
var select=document.querySelectorAll('select')
var input=document.querySelector('input')
let cnt=document.querySelector('.container')
let url='https://fakestoreapi.com/products'
let getdata=async(url)=>{
    let res=await fetch(url)
    let data=await res.json()
    showdata(data)
}
let showdata=(data)=>{
    cnt.innerHTML=''
    data.forEach((ele,i)=>{
        let box=document.createElement('div')
        let img=document.createElement('img')
        let title=document.createElement('p')
        let price=document.createElement('p')
        img.src=ele.image
        title.innerHTML=`<h3>${ele.title}</h3>`
        price.innerHTML=`Price:${ele.price}`
        box.append(img,title,price)
        cnt.append(box)
    })
}
select[0].addEventListener('change',()=>{
    if(select[0].value=='All'){
        url='https://fakestoreapi.com/products'
    }else{
        url=`https://fakestoreapi.com/products/category/${select[0].value}`
    }
    getdata(url)
})
select[1].addEventListener('change',()=>{
    url='https://fakestoreapi.com/products'
    let filterdata=async(url)=>{
        let res=await fetch(url)
        let data=await res.json()
        if(select[1].value=='htl'){
        ndata=data.sort((a,b)=>{
            return b.price-a.price
        })
        }else{
            ndata=data.sort((a,b)=>{
                return a.price-b.price
            })
        }
        showdata(ndata)
    }
    filterdata(url)
})
getdata(url)