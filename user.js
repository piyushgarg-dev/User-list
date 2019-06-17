window.addEventListener('load', ()=>{
   var tbody =  document.getElementById('tbody');
    var users = JSON.parse(localStorage.getItem('users'));

    users.forEach((user)=>{
        var row = document.createElement('tr');
        row.classList='tablerow';
        var template = `
        <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.address}</td>
    </tr>
        `;

        row.innerHTML = template;
        tbody.appendChild(row);
        
    });
});

document.getElementById('refresh').addEventListener('click',()=>{
    window.location.reload();
});