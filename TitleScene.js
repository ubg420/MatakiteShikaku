phina.define('TitleScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFFFFF';



    this.tl = Sprite('TitleLogo').addChildTo(this);
    this.tl.setPosition(this.gridX.center(),this.gridY.center(-5.5));
    this.tl.scaleY = 0;
    this.tl.tweener
      .clear()
      .to({scaleY:1,x:this.gridX.center()}, 400,"easeOutSine")


    // ラベルを表示
    this.startlabel = Sprite('Start').addChildTo(this);
    this.startlabel.setPosition(this.gridX.center(0.3),this.gridY.center(6.3));

    this.startlabel.tweener
      .clear()
      .to({alpha:1,scaleX:1,scaleY:1}, 700,"easeOutSine")
      .wait(800)
      .to({alpha:0,scaleX:1,scaleY:1}, 700,"easeInSine")
      .setLoop(true);

    this.box = RectangleShape().addChildTo(this);
    this.box.width = 70;
    this.box.height = 70;
    this.box.alpha = 1; //コリジョン可視化 = 1
    this.box.setPosition(this.gridX.center(0),this.gridY.center(3));
    this.box.stroke = "#000000";
    this.box.fill = "#FC345C";


    var LeftBar = RectangleShape().addChildTo(this);
    LeftBar.width = 40;
    LeftBar.height = SCREEN_HEIGHT;
    LeftBar.x = 0;
    LeftBar.y = SCREEN_HEIGHT /2;
    LeftBar.stroke = "#000000";
    LeftBar.fill = "#00bfff";


    var RightBar = RectangleShape().addChildTo(this);
    RightBar.width = 30;
    RightBar.height = SCREEN_HEIGHT;
    RightBar.x = SCREEN_WIDTH;
    RightBar.y = SCREEN_HEIGHT /2;
    RightBar.stroke = "#000000";
    RightBar.fill = "#ff6347";





    this.flg = false;
  },

  update: function(app){

  },

  onpointend: function(){
    

    
  },

  onclick(){

    if(!this.StartFLG){
      SoundManager.play("Start");
      this.Start();
      this.StartFLG = true;

      //Debug
      //this.exit();
      //
    }
  },

  Start: function(){

    SoundManager.play("Start");

    var self = this;

    this.tl.tweener
      .clear()
      .to({scaleY:0}, 300,"easeOutSine")

    this.startlabel.tweener
      .clear()
      .to({alpha:0}, 300,"easeInSine")



    this.box.tweener
      .clear()
      .to({y:1000,rotation:180}, 700,"easeOutSine")
      .wait(400)
      .call(function(){
        self.exit();
      })

  },

});
