phina.globalize();

var SCREEN_WIDTH    = 920;
var SCREEN_HEIGHT   = 1280;
var Group;
var ObjectGroup;
var DeathGroup;
var ColisionGroup;
var EffectGroup;

var DotGroup;

var BLOCKSIZE = 98;

var GameMain;
var WorldVY;
var RemitY = 600;

var GAMELEVEL = 0;
var RETRYCOUNT = 0;


var ASSETS = {
  image: {
    'cachacacha':'img/logo.png',
    'Retry':'img/Retry.png',
    'Reload':'img/reload.png',

    'TitleLogo':'img/TitleLogo.png',

    'Tweet':'img/Tweet.png',

    'Start':'img/start.png',
    'utyo':'img/utyo.png',

    'Back':'img/Back.png',

  },
  sound: {
    'jump': './sound/jump.mp3',
    'block': './sound/block.mp3',
    'bgm': './sound/bgm.wav',
    'Start': './sound/start.mp3',
    'End': './sound/end.mp3',

    'block_0': './sound/block.mp3',
    'block_1': './sound/block_1.mp3',
    'block_2': './sound/block_2.mp3',
    'block_3': './sound/block_3.mp3',
    'block_4': './sound/block_4.mp3',
    'block_5': './sound/block_5.mp3',
    'block_6': './sound/block_6.mp3',
    'block_7': './sound/block_7.mp3',
    'block_8': './sound/block_8.mp3',

  },
};

phina.main(function() {
  var app = GameApp({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    assets: ASSETS,
  });
  app.replaceScene(SceneSequence());
  app.run();
});

// SceneSequenceクラス
phina.define("SceneSequence", {
  superClass: "phina.game.ManagerScene",

  // 初期化
  init: function() {
    this.superInit({
      scenes: [

        {
          label: "Loading", // ラベル。参照用
          className: "LoadingScene", // シーンAのクラス名
          nextLabel:"Title",
//          nextLabel:"Main",

        },

        {
          label: "Title", // ラベル。参照用
          className: "TitleScene", // シーンAのクラス名
     //     nextLabel:"Tutorial",
    //      nextLabel:"Main",

        },

        {
          label: "Main",
          className: "MainScene",
        },

        {
          label: "Result",
          className: "ResultScene",
        }

      ]
    });
  }
});

phina.define("LoadingScene", {
  superClass: "phina.game.LoadingScene",

  init: function(params) {
    this.superInit({
      assets: ASSETS,
      exitType: "auto",

    });

  }

});

phina.define('ResultScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit();
  },
});
