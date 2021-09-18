
const searchButton = document.querySelector(".searchButton");

const fetchUserDetails = async() => {
	 const api_call = await fetch(`https://api.github.com/repos/skancharla216/testrep/contents`);
	 const data = await api_call.json(); 
	 return {data}

};

const showData = () => {
   fetchUserDetails().then((res) =>{
		console.log(res);
		var data = res.data;
		var table = document.getElementById('filelist');
		while(table.rows.length > 1) {
			table.deleteRow(1);
		}
		for (var i in data)
		{
			 var size = data[i].size;
			 var name = data[i].name;
			 var url = data[i].download_url;
			    var tr = document.createElement('tr');
                tr.innerHTML = '<td class="td">' + name + '</td>' +
                
                '<td class="td">' + size + '</td>'+
				'<td class="td"><a href="' + url + '">Download</a></td>';
                table.appendChild(tr);

		}
   })
};

searchButton.addEventListener("click", () => {
  
  showData();
  
})
