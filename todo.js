
//to create input
let inp=document.createElement('input')
inp.setAttribute("placeholder","Add Task..")
document.querySelector('body').append(inp)


let body= document.querySelector('body')

//to create btn
let btn=document.createElement('button')
btn.innerText='Add'
document.querySelector('body').append(btn)

//add btn functionality


function addTask(){
    btn.addEventListener('click',()=>{

        let li=document.createElement('li')
        let u=document.createElement('ul') 

    
    //adding input value as li
    li.innerText=inp.value+"  ";
    inp.value=" ";

    //creating icon
    let icon =document.createElement("i");
    icon.classList.add("fa-trash-can");
    icon.classList.add("fa-solid");
    //creating checkbox
    let chkboox =document.createElement("input");
    chkboox.type='checkbox'
    chkboox.classList.add("checkbox")
    
   

    
     body.append(u)

     //adding icon infront of i
     li.appendChild(chkboox)
     li.appendChild(icon)
     u.appendChild(li) ;
     //deleteing todo
     icon.addEventListener("click",(event)=>{
        if(event.target.nodeName=="I"){
            let listItem=event.target.parentElement;
            listItem.remove();
        }
     })
     //checkbox func
     
     
    })
}
addTask()








  









