function searchPlayer() {
            
            $("#information").empty();
            
            $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw=%27" + $("#keyword").val() + "%27&name_part=%27" + $("#playerName").val() + "%27 ",
                dataType: "json",
                success: function(data, status) {
                        console.log(data);
                        // console.log(data["search_player_all"]["queryResults"]["created"])
                        $('#information').append("<br>Name: " + data["search_player_all"]["queryResults"]["row"]["name_display_first_last"]);
                        $('#information').append("<br>Birth City: " + data["search_player_all"]["queryResults"]["row"]["birth_city"]);
                        $('#information').append("<br>Position: " + data["search_player_all"]["queryResults"]["row"]["position"]);
                        $('#information').append("<br>Team: " + data["search_player_all"]["queryResults"]["row"]["team_full"]);
                }
            });
            
        }