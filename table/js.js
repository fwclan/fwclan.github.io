
$(document).ready(function () {

    let cttd = new Vue({
        el: '.cats',
        data: {
            kit: [

            ],
            games: [

            ]
        }
    })

    $(".addGame").on('click', function () {

        const gmName = $(".game_name").val();

        for (let i = 0; i < cttd.kit.length; i++) {
            cttd.kit[i].points.push(0);
        }

        cttd.games.push({name: gmName});
        $(".game_name").val('');

    })


    $(".addCat").on('click', function () {

        const ctname = $(".cat_name").val(),
        ctid = $(".cat_id").val();

        const gameInd = cttd.games.length;

        const points = Array(gameInd).fill(0);

        cttd.kit.push( { name: ctname, id: ctid, points: points } );

        $(".cat_name").val('');
        $(".cat_id").val('');

    })


})

