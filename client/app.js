$(document).ready(function(){
    $.ajax({
        type : "GET", 
        url : "/api/all",
    }).then((res) => {

        res.forEach((pokemon) => {
            $("#results").append(
                `
                <div class="card col-sm-6 rounded-0">
                <div class="card-body">
                  <h5 class="card-title">${pokemon.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${pokemon.type}</h6>
                  <p class="card-text">
                    Moves: ${pokemon.moves.join(", ")}
                  </p>
                </div>
              </div>
    
                    `
            );
        });
        
    });
});
