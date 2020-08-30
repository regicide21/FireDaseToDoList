//add a conection with firebase
let db = firebase.database();

//name of an oblect
let data = db.ref('tasks');
// let links = db.ref('copy_links');

//work with our data
data.on('value', function(snapshot) {
	console.log(snapshot.val());


	let obj = '';
	snapshot.forEach(function (item){
        // arr.push(item.val());
        console.log(item.key);
        obj += `
        <div class="task">
			<div class="header_task">
				<div class="circle_task"  onclick="delete_t(this)">
					<div class="circle_task_small"></div>
				</div>
				<div class="group_task">${item.key}</div>
			</div>
			<p class="p_main_task">${item.val().title}</p>
			<div class='footer_task'>${item.val().date}</div>
		</div>`

        console.log(obj);
    })
    document.querySelector('.tasks_container').innerHTML = obj;

});


// db.ref('copy_links').set({name:'valera'});



function save(argument) {
	let field = document.querySelector('.field').value;
	if (field.trim().length > 0) {
		data.push({
          title:field,
          date: Date.now()
        });
		document.querySelector('.field').value = '';
	}
}



function delete_t(el){
	let delete_this = el.nextElementSibling.innerText;
    db.ref(`tasks/${delete_this}`).remove();

}









// function render(array){
//       let obj = '';
//       array.forEach(item => {
//         return obj+=`<li>
//         <h2 class="title1">${item.title}</h2>
//         </li>`
//       })
//       document.querySelector('.list').innerHTML = obj;
//     }

//     let db = firebase.database();
//     let allTasks = db.ref('all-tasks');

// allTasks.on('value', function(snap) {
//       console.log(snap.val());


//       let obj = '';
//       snap.forEach(function (item){
//         // arr.push(item.val());
//         console.log(item.key);
//         obj+=`<li>
//         <h2 class="title1">${item.val().title}</h2>
//         <span>${item.key}</span>
//         </li>`

        
//         document.querySelector('.list').innerHTML = obj;
//       })
//    });

    
//     function save(){
//       let field = document.querySelector('.field');
//       if(field.value.trim().length > 0){
//         // allTasks.set(field.value);
//         allTasks.push({
//           title:field.value
//         });
//         field.value = ''
//       }
//     }

//     function edit(){
//       // db.ref('all-tasks/-M7S2P_FV-64cbpdUFG8').update({
//       //   title:'9999999999999999999999999999999'
//       // })
//       // db.ref('all-tasks/-M7S2P_FV-64cbpdUFG8').remove()
//     }