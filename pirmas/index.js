import * as JQuery from "jquery";
const $ = JQuery.default;

const TEAMS = [
  { name: "Atlanta Hawks", id: "1610612737" },
  { name: "Boston Celtics", id: "1610612738" },
  { name: "Brooklyn Nets", id: "1610612751" },
  { name: "Charlotte Hornets", id: "1610612766" },
  { name: "Chicago Bulls", id: "1610612741" },
  { name: "Cleveland Cavaliers", id: "1610612739" },
  { name: "Dallas Mavericks", id: "1610612742" },
  { name: "Denver Nuggets", id: "1610612743" },
  { name: "Detroit Pistons", id: "1610612765" },
  { name: "Golden State Warriors", id: "1610612744" },
  { name: "Houston Rockets", id: "1610612745" },
  { name: "Indiana Pacers", id: "1610612754" },
  { name: "Los Angeles Clippers", id: "1610612746" },
  { name: "Los Angeles Lakers", id: "1610612747" },
  { name: "Memphis Grizzlies", id: "1610612763" },
  { name: "Miami Heat", id: "1610612748" },
  { name: "Milwaukee Bucks", id: "1610612749" },
  { name: "Minnesota Timberwolves", id: "1610612750" },
  { name: "New Orleans Pelicans", id: "1610612740" },
  { name: "New York Knicks", id: "1610612752" },
  { name: "Oklahoma City Thunder", id: "1610612760" },
  { name: "Orlando Magic", id: "1610612753" },
  { name: "Philadelphia 76ers", id: "1610612755" },
  { name: "Phoenix Suns", id: "1610612756" },
  { name: "Portland Trail Blazers", id: "1610612757" },
  { name: "Sacramento Kings", id: "1610612758" },
  { name: "San Antonio Spurs", id: "1610612759" },
  { name: "Toronto Raptors", id: "1610612761" },
  { name: "Utah Jazz", id: "1610612762" },
  { name: "Washington Wizards", id: "1610612764" }
];

setTimeout(function() {
  let dropdownHome = document.getElementById("homeTeamDropdown");
  
  let dropdownAway = document.getElementById("awayTeamDropdown");

  for (let i = 0; i < TEAMS.length; i++) {
    option = document.createElement('option');
    option.text = TEAMS[i].name;
    option.value = TEAMS[i].id;
    dropdownAway.add(option);
  }
  for (let i = 0; i < TEAMS.length; i++) {
    option = document.createElement('option');
    option.text = TEAMS[i].name;
    option.value = TEAMS[i].id;
    dropdownHome.add(option);
  }


  jQuery.getJSON( "https://stats.nba.com/stats/teamgamelog/?TeamID=1610612737&Season=2018-19&SeasonType=Regular%20Season", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });

//   $.getJSON('https://stats.nba.com/stats/teamgamelog/?TeamID=1610612737&Season=2018-19&SeasonType=Regular%20Season', function(data) {
//     console.log(data);
// });


  

}, 500);
