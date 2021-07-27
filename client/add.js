$(document).ready(function (){
    $("#pokeSubmit").on("click", (e) =>{
        e.preventDefault();
        console.log("hello");

        const name = $("#pokeName").val();
        const type = $("#pokeType").val();
        const moves = $("#pokeMoves").val();

        const pokemon = {
            name : name,
            type : type,
            moves : moves.split(", ")
        }
        console.log(pokemon);

        $.ajax({
            type : "POST",
            url : "/api/new",
            data : pokemon,
        }).then((res)=>{
            console.log(res);
            $("#message").text("You successfully added a Pokemon").attr("class", "form-text text-success");
            setTimeout(()=>{
                $("#message").text("Separated by comma and space.").attr("class", "form-text text-muted");
            }, 3000)
        })
    })
})