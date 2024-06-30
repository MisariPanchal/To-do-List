//Store in local storage
//Edit
//Both feilds compulsary

let todoList = [
    {item: 'Buy Milk', dueDate: '4/10/2023'},
    {item: 'Make Projects', dueDate: '4/10/2023'},
];
displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;


    todoList.push({item: todoItem, dueDate: todoDate});

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function formatDate(dateStr){
    let date = new Date(dateStr);
    let dt = date.getDate();
    let mnth = date.getMonth()+1;
    let year = date.getFullYear();
    return `${dt}-${mnth}-${year}`;
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for(let i = 0; i < todoList.length; i++){

        let {item, dueDate} = todoList[i];
        let ftDate = formatDate(dueDate);

        newHtml += `
            <span>${item}</span>
            <span>${ftDate}</span>
            <button class="delete-btn" onclick='todoList.splice(${i},1);displayItems();'>Delete</button>
        `;

    }
    containerElement.innerHTML = newHtml;

}