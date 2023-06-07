$(document).ready(function () {
	//alert('Hola desde jQuery');
	$.ajax({
		url: "https://rickandmortyapi.com/api/episode",
		type: "GET",
		success: function(data){
			//Si la solicitud es exitosa, mostrar la broma en la pagina web
			$.each(data.results, function(index, episodio){
				var epNombre = episodio.name;
				var epFecha = episodio.air_date;
				var ep = episodio.episode;

				$("#RickMorty-table").append("<tr><td>" + epNombre + "</td><td>"+ epFecha + "</td><td>" + ep + "</td></tr>");
				//console.log(epNombre);
			});
		},//Cierra data
		error: function(error){
			console.log("error al cargar la broma "+ error.statusText);
		}
	});//Cierra ajax
});