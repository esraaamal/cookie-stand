var tr7El = document.createElement('tr');
tableEl.appendChild(tr7El);
//first row
var td6El=document.createElement('td');
td6El.textContent='Total';
tr7El.appendChild(td6El);
for(var i=0 ; i< hours.length ;i++){
    var td6El= document.createElement('td');
    td6El.textContent = '';
    tr7El.appendChild(td6El);
    }