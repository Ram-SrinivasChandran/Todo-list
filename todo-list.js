const todoList=JSON.parse(localStorage.getItem('todoList')) || [{
  name:'',
  dueDate:''
}];

let resulttoDisplay='';
displaytodo();
document.querySelector('.js-add-button').addEventListener('click',()=>{
  getAinput();
});
function getAinput(){
  let displayname=document.querySelector('.input-todo');
  let name=displayname.value;
  let displaydueDate=document.querySelector('.input-date');
  let dueDate=displaydueDate.value;
  todoList.push({
    name,
    dueDate
  });
  displayname.value='';
  displaydueDate.value='';
  displaytodo();
} 
function displaytodo(){
  for(let i=0;i<todoList.length;i++){
  const displaytheResult=todoList[i];
  const html=`
  <div>${displaytheResult.name}</div>
  <div>${displaytheResult.dueDate}</div>
  <button class="delete-button js-delete-button">Delete</button>`
  resulttoDisplay+=html;
  }
  document.querySelector('.display-todo').innerHTML=resulttoDisplay;
  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton,index)=>{
      deleteButton.addEventListener('click',()=>{
        todoList.splice(index,1); displaytodo();  
      });  
    });
  localStorage.setItem('todoList',JSON.stringify(todoList));
  resulttoDisplay='';
}