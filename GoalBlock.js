phina.define("GoalBlock", {
    superClass: "DisplayElement",
    init: function(X,Y,Row) {
      this.superInit();


        this.speed = 25;

        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;


        this.x = X;
        this.y = Y;


        this.scaleX = 1;
        this.scaleY = 1;

        this.setBoundingType("rect");

        this.box = RectangleShape().addChildTo(this);
        this.box.width = this.width;
        this.box.height = this.height;
        this.box.alpha = 0; //コリジョン可視化 = 1
        this.box.row = Row;

        this.tag = "Goal";


    },

    update: function(app) {
      this.y += this.speed;


      if(this.y > SCREEN_HEIGHT + this.height){

        if(this.box.row == 999){
          GameMain.NextLevel();
        }else{
          GameMain.GameEnd();
        }
        this.remove();


      }



    },






});
