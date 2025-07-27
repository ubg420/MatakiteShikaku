phina.define("Player", {
    superClass: "DisplayElement",
    init: function(X,Y) {
      this.superInit();

        this.x = SCREEN_WIDTH /2;
        this.y = 1000;

        this.dir = -1;

        this.width = 70;
        this.height = 70;

        this.MoveMode = "Run"

        this.speed = 60;

        this.dx = this.speed;

        this.scaleX = 1;
        this.scaleY = 1;

        this.setBoundingType("rect");
        this.ColisionFLG = false;

        this.box = RectangleShape().addChildTo(this);
        this.box.width = this.width;
        this.box.height = this.height;
        this.box.alpha = 1; //コリジョン可視化 = 1
        this.box.stroke = "#000000";
        this.box.fill = "#0A6FBB";
        this.box.fill = "#FC345C";

        this.top_colision = RectangleShape().addChildTo(ObjectGroup);
        this.top_colision.width = this.width;
        this.top_colision.height = 10;
        this.top_colision.position_y = ( this.height / 2 ) - (this.top_colision.height / 2);
        this.top_colision.alpha = 0;
        this.top_colision.tag = "top";

        this.HitFLG = false;

    },

    update: function(app) {

      switch (this.MoveMode) {
        case "Run":
        this.vx = this.dx;
        this.x += this.vx;
        this.HitCheck();
        
        if(this.dx > 0){
          this.CreateKemuri("Right");
        }
        else{
          this.CreateKemuri("Left");

        }

        break;

      }

      this.top_colision.x = this.x;
      this.top_colision.y = this.y - this.top_colision.position_y;

    },

    HitCheck: function(){
      //当たり判定
      var cg = ColisionGroup.children;
      var self = this;
      cg.each(function(Object) {
        if(self.hitTestElement(Object)){

          switch (Object.tag) {
            case "Bar":
              if(self.vx > 0){
                self.vx = 0;
                self.x = Object.x  - ((Object.width / 2) + (self.width /2));


              }
              if(self.vx < 0){
                self.vx = 0;
                self.x = Object.x + (Object.width / 2) + (self.width /2);

              }
              break;

            case "Block":
              if(self.vx > 0){
                self.vx = 0;
                self.x = Object.x  - ((Object.width / 2) + (self.width /2));



              }
              if(self.vx < 0){
                self.vx = 0;
                self.x = Object.x + (Object.width / 2) + (self.width /2);

              }
            

              if(!Object.HitFLG){
                Object.box.fill = "hsla({0}, 100%, 60%, 0.5)".format(190 +  (Object.x  / 5));
                SoundManager.play("block_" + Object.box.row);
                Object.HitFLG = true;
              }
              break;

            case "Damage":
              self.top_colision.remove();

              GameMain.GameOver();


              break;  

          }
        }

        if(self.top_colision.hitTestElement(Object)){
          switch (Object.tag) {
            case "Death":
              self.top_colision.remove();

              GameMain.GameOver();

              break;

          }
        }
        
      });
    },


    CreateKemuri:function(dir){

      var pos = 15;

      switch (dir) {
        case "Left":
          //煙エフェクト
            if (this.children.length < KEMURI_MAX_NUM) {
              var p = Kemuri(this.x - this.width / 2 + pos, this.y + this.height / 2).addChildTo(EffectGroup);
              p.fill = "#87cefa"
              p.ondisappear = function() {
                p.remove();
              }.bind(this);
            }          
          break;
      
        case "Right":
          //煙エフェクト
            if (this.children.length < KEMURI_MAX_NUM) {
              var p = Kemuri(this.x + this.width / 2 - pos, this.y + this.height / 2).addChildTo(EffectGroup);
              p.fill = "#ffa07a"

              p.ondisappear = function() {
                p.remove();
              }.bind(this);
            }          
          break;
      }

    },

    Move: function(){
        if(this.vx == 0){
          this.dx = this.speed * this.dir;
          this.dir *= -1;
          SoundManager.play("jump");

          if(this.dir > 0){
            this.box.fill = "#3498DB";
            this.box.tweener
            .clear()
            .to({rotation:-360},100)
            
          }
          else{
            this.box.fill = "#FC345C";
            this.box.tweener
            .clear()
            .by({rotation:360},100)
          }
        

        }
    },

});
