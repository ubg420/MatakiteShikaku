phina.define("Result", {
    superClass: "DisplayElement",
    init: function() {
      this.superInit({
        width: 0,
        height: 0,
      });

      this.x = 0;
      this.y = 0;

/*
      GameMain.Score.tweener
      .clear()
      .to({x:GameMain.gridX.center(),y:300,scaleX:3,scaleY:3}, 1300,"easeOutQuart");
*/

      var tweet = Sprite('Tweet',200,70).addChildTo(this);

      var url = "http://cachacacha.com/GAME/Cas/";
      var score = 0;
      this.ResultTxt = "";

      var Tweettxt = encodeURIComponent("レベル" + GAMELEVEL + "  リトライ数 " +  RETRYCOUNT + "回  " + url + "  #マタキテシカク #かちゃコム");

      tweet.x = GameMain.gridX.center();
      tweet.y = GameMain.gridY.center(3);
      tweet.scaleX = 1;
      tweet.scaleY = 0;
      tweet.tweener
      .clear()
      .wait(500)
      .to({scaleY:1}, 500,"easeOutQuart");
      // タッチ判定を有効に
      tweet.setInteractive(true);
      // タッチ終了時に発火
      tweet.onclick = function() {
        // 自身を削除
        window.open("http://twitter.com/intent/tweet?text=" + Tweettxt);
      };

      var reload = Sprite('Reload').addChildTo(this);
      reload.x = SCREEN_WIDTH  / 2;
      reload.y = SCREEN_HEIGHT / 2;
      reload.width = 300;
      reload.height = 300;
      reload.scaleX = 0;
      reload.scaleY = 0;

      reload.tweener
      .clear()
      .to({scaleX:1,scaleY:1}, 800,"easeOutQuart");


      // タッチ判定を有効に
      reload.setInteractive(true);
      // タッチ終了時に発火
      reload.onclick = function() {
        RETRYCOUNT++;

        ObjectGroup.children.clear();
        DeathGroup.children.clear();
        ColisionGroup.children.clear();
        EffectGroup.children.clear();

        GameMain.Retry();
      };





      this.Leveltext = Label('Level ' + GAMELEVEL).addChildTo(this);
      this.Leveltext.fill = '#3498DB'; // 色を変更
      this.Leveltext.fontSize = 84; // フォントサイズを変更
      this.Leveltext.scaleY = 0;
      this.Leveltext.x = GameMain.gridX.center();
      this.Leveltext.y = GameMain.gridY.center(-5);
      this.Leveltext.tweener.clear()
      .wait(300)
      .to({scaleY:1}, 500,"easeOutQuart");


      this.Retrytext = Label('Retry ' + RETRYCOUNT).addChildTo(this);
      this.Retrytext.fill = '#FC345C'; // 色を変更
      this.Retrytext.fontSize = 84; // フォントサイズを変更
      this.Retrytext.scaleY = 0;
      this.Retrytext.x = GameMain.gridX.center();
      this.Retrytext.y = GameMain.gridY.center(-3.5);
      this.Retrytext.tweener.clear()
      .wait(400)
      .to({scaleY:1}, 500,"easeOutQuart");



      var back = Sprite('Back').addChildTo(this);
      back.setPosition(GameMain.gridX.center(),GameMain.gridY.center(6));
      back.scaleY = 0;

      back.tweener
      .clear()
      .wait(800)
      .to({scaleX:1,scaleY:1}, 1000,"easeOutQuart");

      // タッチ判定を有効に
      back.setInteractive(true);
      // タッチ終了時に発火
      back.onclick = function() {
        window.open("http://cachacacha.com");
      };


      var utyo_icon = DisplayElement().addChildTo(this);
      utyo_icon.width = 230;
      utyo_icon.height = 80;
      utyo_icon.setPosition(GameMain.gridX.center(5.8),GameMain.gridY.center(7.2));
      utyo_icon.sprite = Sprite('utyo').addChildTo(utyo_icon);
      utyo_icon.sprite.width = 70;
      utyo_icon.sprite.height = 70;
      utyo_icon.sprite.x = -65;
      utyo_icon.name = Label('@utyo').addChildTo(utyo_icon);
      utyo_icon.name.fill = '#888888'; // 色を変更
      utyo_icon.name.fontSize = 34; // フォントサイズを変更
      utyo_icon.name.x = 34; // フォントサイズを変更
      utyo_icon.name = Label('@utyo').addChildTo(utyo_icon);
      utyo_icon.name.fill = '#1e90ff'; // 色を変更
      utyo_icon.name.fontSize = 34; // フォントサイズを変更
      utyo_icon.name.x = 34; // フォントサイズを変更
      
      // タッチ判定を有効に
      utyo_icon.setInteractive(true);
      // タッチ終了時に発火
      utyo_icon.onclick = function() {
          window.open("http://twitter.com/utyo");
      };

      utyo_icon.scaleY = 0; // フォントサイズを変更

      utyo_icon.tweener.clear()
      .wait(1000)
      .to({scaleY:1}, 500,"easeOutQuart");


/*
      var cachacacha = Sprite('cachacacha').addChildTo(this);
      cachacacha.x = GameMain.gridX.center(15);
      cachacacha.y = GameMain.gridY.center(4);
      cachacacha.scaleX = 1.5;
      cachacacha.scaleY = 1.5;

      cachacacha.tweener
      .clear()
      .wait(1700)
      .to({x:GameMain.gridX.center()}, 1300,"easeOutQuart");
      // タッチ判定を有効に
      cachacacha.setInteractive(true);
      // タッチ終了時に発火
      cachacacha.onclick = function() {
        // 自身を削除
        window.open("http://www.cachacacha.com/");
      };

*/




    },

    update: function(app) {

    },



});
