createjs.Sound.registerSound("musika.mp3", 'Legends');
createjs.Sound.registerSound("joyride.mp3", 'joyride');


var songs = [{name:"legends", id:"Legends"}, {name:"joyride", id:"joyride"}]


artyom.addCommands([
{
    indexes: ["Good morning","Good morning Squirrel"],
    action: function(i){
        artyom.say("Good morning Sir");

    }
},
{
    indexes: ["Good night","Good night Squirrel","goodnight"],
    action: function(i){
        artyom.say("Good night Sir");
    }
  },
  {
      indexes: ["Stop","Stop the music","Squirrel stop the music"],
      action: function(i){
          artyom.say("Of course Sir");
          createjs.Sound.stop();
      }
    }
]);


var music = {
    smart: true,
    indexes: ["Play *", "Squirrel play *"],
    action: function(i,wildcard) {
      //Dank codes
      var id2play;
      for(var i in songs){
        if(songs[i].name == wildcard){
          id2play = songs[i].id;
          artyom.say('Right away sir');
          createjs.Sound.play(id2play);
        }
      }

    }
};

artyom.addCommands(music);

artyom.initialize({
      lang:"en-GB",
      debug:true, // Show what recognizes in the Console
      listen:true, // Start listening after this
      continuous:true
  });
