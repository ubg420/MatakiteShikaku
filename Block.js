phina.define("Block", {
    superClass: "RectangleShape",
    init: function(X,Y,Row) {
      this.superInit();

        this.vx = 0;
        this.vy = 0;

        this.speed = 25;

        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;

        this.x = X;
        this.y = Y;

        this.scaleX = 1;
        this.scaleY = 1;

        this.ColisionFLG = false;

        this.row = Row;

        this.stroke = "black";
        this.fill = "#333333";



        this.tag = "Block";

        this.HitFLG = false;

        this.CheckY = GameMain.Player.y - 200;

        this.ColisionFLG = false;

        this.hide();
        this.showflg= false;

    },

    update: function(app) {




      
      this.y += this.speed;

      if(this.y > -this.height && !this.showflg){
        this.show();
        this.showflg = true;
      }

      //判定回数を減らすため自機に近付いたらコリジョンをセットする
      if(this.y > this.CheckY && !this.ColisionFLG){

        this.DeathZone = RectangleShape().addChildTo(ColisionGroup);
        this.DeathZone.width = this.width - 10;
        this.DeathZone.height = 30;
        this.DeathZone.position_y = ( this.height / 2 ) - (this.DeathZone.height / 2);
        this.DeathZone.alpha = 0;
        this.DeathZone.tag = "Death";
        this.DeathZone.ColisionFLG = true;

        this.Colision = RectangleShape().addChildTo(ColisionGroup);
        this.Colision.width = this.width;
        this.Colision.height = this.height;
        this.Colision.alpha = 0;
        this.Colision.tag = "Block";

        this.Colision.box = this;
        
        this.ColisionFLG = true;
      }


      if(this.ColisionFLG){
        this.DeathZone.x = this.x;
        this.DeathZone.y = this.y + this.DeathZone.position_y;

        this.Colision.x = this.x;
        this.Colision.y = this.y;

      }

      if(this.y > this.CheckY + 320 && this.ColisionFLG){
        this.DeathZone.remove();
        this.Colision.remove();
      }

      if(this.y > SCREEN_HEIGHT + this.height){
        this.remove();
      }

    },


});
