phina.define("DamageBlock", {
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
        this.fill = "red";
        this.strokeWidth = 8;

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


        this.Colision = RectangleShape().addChildTo(ColisionGroup);
        this.Colision.width = this.width;
        this.Colision.height = this.height;
        this.Colision.alpha = 0;
        this.Colision.tag = "Damage";

        this.Colision.box = this;
        
        this.ColisionFLG = true;
      }


      if(this.ColisionFLG){


        this.Colision.x = this.x;
        this.Colision.y = this.y;

      }

      if(this.y > this.CheckY + 320 && this.ColisionFLG){
        this.Colision.remove();
      }

      if(this.y > SCREEN_HEIGHT + this.height){
        this.remove();
      }

    },


});
