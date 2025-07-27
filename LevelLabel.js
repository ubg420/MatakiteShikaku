phina.define("LevelLabel", {
    superClass: "DisplayElement",
    init: function(_gamelevel) {
      this.superInit();

        this.vx = 0;
        this.vy = 0;

        this.speed = 25;

        this.width = BLOCKSIZE;
        this.height = BLOCKSIZE;


        this.x = SCREEN_WIDTH / 2;
        this.y = SCREEN_HEIGHT / 2;


        this.scaleX = 1;
        this.scaleY = 1;

        this.text = Label('Level ' + _gamelevel).addChildTo(this);
        this.text.fill = '#888888'; // 色を変更
        this.text.fontSize = 164; // フォントサイズを変更
        this.text.scaleY = 0;

        var self =this;

        this.text.tweener.clear()
        .to({scaleY:1}, 100,"easeOutQuart")
        .wait(600)
        .to({scaleY:0}, 200,"easeInQuart")
        .call(function(){
            self.remove();
        })
    },

    update: function(app) {

    },





});
