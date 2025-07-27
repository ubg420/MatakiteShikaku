phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFFFFF';

    GameMain = this;

    ObjectGroup = DisplayElement().addChildTo(this);
    DeathGroup = DisplayElement().addChildTo(this);;
    ColisionGroup = DisplayElement().addChildTo(this);
    EffectGroup = DisplayElement().addChildTo(this);

    this.Player = Player().addChildTo(this);
    this.point = 0;


    var LeftBar = RectangleShape().addChildTo(ColisionGroup);
    LeftBar.width = 40;
    LeftBar.height = SCREEN_HEIGHT;
    LeftBar.x = 0;
    LeftBar.y = SCREEN_HEIGHT /2;
    LeftBar.stroke = "#000000";
    LeftBar.fill = "#00bfff";
    LeftBar.ColisionFLG = true;

    LeftBar.tag = "Bar";

    var RightBar = RectangleShape().addChildTo(ColisionGroup);
    RightBar.width = 30;
    RightBar.height = SCREEN_HEIGHT;
    RightBar.x = SCREEN_WIDTH;
    RightBar.y = SCREEN_HEIGHT /2;
    RightBar.stroke = "#000000";
    RightBar.fill = "#ff6347";
    RightBar.ColisionFLG = true;
    RightBar.tag = "Bar";

    this.GameLevel = GAMELEVEL;

    this.CreateLevel();

    var self = this;

    SoundManager.playMusic("bgm");

    this.GameOverFLG = false;

  },

  update: function(app){
    


  },


  NextLevel: function(){

    if(!this.GameOverFLG){
        GAMELEVEL++;
        this.GameLevel = GAMELEVEL;
        this.CreateLevel();
    }

  },

  CreateLevel:function(){
      var self = this;
      var leveltext = LevelLabel(this.GameLevel).addChildTo(this);

      this.tweener
      .clear()
      .wait(100)
      .call(function(){
        self.CreateBox();
      })


      if(GAMELEVEL == 0){

        var tutorialtext = Label('タッチで重力を反転').addChildTo(this);
        tutorialtext.fill = '#888888'; // 色を変更
        tutorialtext.fontSize = 64; // フォントサイズを変更
        tutorialtext.scaleY = 0;
        tutorialtext.x = SCREEN_WIDTH /2;
        tutorialtext.y = 100;
        


        var self =this;

        tutorialtext.tweener.clear()
        .wait(800)
        .to({scaleY:1}, 500,"easeOutQuart")
        .wait(6000)
        .to({scaleY:0}, 200,"easeOutQuart")
        .call(function(){
            tutorialtext.remove();
        })

      }

  },

  ScoreUpdate:function(){

    this.point = Math.floor(this.WorldY / 100);
    this.Score.text = this.point + "m";

  },

  CreateBox:function(){
    var Level = this.GameLevel;

    var Start_x = 70;
    var Start_y = 0;

    var i_max = BOXLEVEL[Level].length;

    for (var i = 0; i < i_max; i++) {
        var j_max = BOXLEVEL[Level][i].length;
        for (var j = 0; j < j_max; j++) {
            if(BOXLEVEL[Level][i][j] == "1"){
                var x = Start_x + (j * BLOCKSIZE);
                var y = Start_y - ((i_max - i) * BLOCKSIZE);

                var block = Block(x,y,j).addChildTo(ObjectGroup);
            }
            if(BOXLEVEL[Level][i][j] == "2"){
                var x = Start_x + (j * BLOCKSIZE);
                var y = Start_y - ((i_max - i) * BLOCKSIZE);

                var block = DamageBlock(x,y,j).addChildTo(ObjectGroup);
            }
            if(BOXLEVEL[Level][i][j] == "999"){
                var x = SCREEN_WIDTH / 2;
                var y = Start_y - ((i_max - i) * BLOCKSIZE);

                var block = GoalBlock(x,y,"999").addChildTo(ObjectGroup);
            }

            if(BOXLEVEL[Level][i][j] == "1000"){
                var x = SCREEN_WIDTH / 2;
                var y = Start_y - ((i_max - i) * BLOCKSIZE);

                var block = GoalBlock(x,y,"1000").addChildTo(ObjectGroup);
            }



        }        
    }
        
  },



  onpointstart: function(){

    if(!this.GameOverFLG){
      this.Player.Move();
    }
  },

  onpointend: function(){



  },

  GameEnd: function(){

    if(!this.GameOverFLG){
      SoundManager.play("End");
      SoundManager.stopMusic("bgm");

      var gameend = GameEnd().addChildTo(this);

      this.GameOverFLG = true;
      this.Player.MoveMode = "End";
      this.Player.tweener
        .clear()
        .to({x:this.gridX.center(),y:this.gridY.center(),rotation:360}, 500,"easeOutSine")
        .wait(200)
        .to({y:this.gridY.center(-20)}, 500,"easeOutSine")

    }
  },

  GameOver: function(){
    
    if(!this.GameOverFLG){


      var color;
      if(this.Player.dx > 0){
        color = '#FC345C'
      }else{
        color = '#3498DB';
      }

      var shape = CircleShape().addChildTo(EffectGroup);
      shape.radius =80;
      shape.setPosition(this.Player.x,this.Player.y)
      shape.fill = 'rgba(0,0,0,0)';
      shape.stroke = color;
      shape.strokeWidth = 8;
      shape.tweener
        .clear()
        .to({strokeWidth:0,scaleX:2,scaleY:2}, 700,"easeOutSine")
        .call(function(){
          shape.remove();
        })


      var shape2 = CircleShape().addChildTo(EffectGroup);
      shape2.radius =70;
      shape2.setPosition(this.Player.x,this.Player.y)
      shape2.fill = 'rgba(0,0,0,0)';
      shape2.stroke = color;
      shape2.strokeWidth = 3;
      shape2.tweener
        .clear()
        .to({strokeWidth:0,scaleX:4,scaleY:4}, 500,"easeOutSine")
        .call(function(){
          shape2.remove();
        })
      
      var result = Result().addChildTo(this);
      this.GameOverFLG = true;
      this.Player.remove();

    }
  },

  Retry: function(){
    this.exit("Main");
  },


});
