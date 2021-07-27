$(document).ready(()=>{
    console.log("hello");

    $("#searchSubmit").on("click", (e) =>{
        e.preventDefault();
        const searchText = $("#pokeSearchText").val();
        //empty the text box after search submitted
        $("#pokeSearchText").val("");
        
        $.ajax({
            type : "GET",
            url : `/api/find/${searchText}`,
        }).then((res) => {
            console.log("This was a success");
            console.log(res);

            $("#searchResults").html(
                `
                <div class="card rounded-0">
              <div class="card-body">
                <h5 class="card-title">Name: ${res.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Type: ${res.type}</h6>
                <p class="card-text">
                Moves: ${res.moves.join(", ")}
                </p>
              </div>
            </div>
                `
            )
        })

    })
})