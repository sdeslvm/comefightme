var _STRINGS = {
    'Ad': {
      'Mobile': {
        'Preroll': {
          'ReadyIn': "The game is ready in ",
          'Loading': "Your game is loading...",
          'Close': 'Close'
        },
        'Header': {
          'ReadyIn': "The game is ready in ",
          'Loading': "Your game is loading...",
          'Close': 'Close'
        },
        'End': {
          'ReadyIn': "Advertisement ends in ",
          'Loading': "Please wait ...",
          'Close': 'Close'
        }
      }
    },
    'Splash': {
      'Loading': 'LOADING...',
      'LogoLine1': "Some text here",
      'LogoLine2': "powered by MarketJS",
      'LogoLine3': 'none',
      'TapToStart': "TAP TO START"
    },
    'Game': {
      'Score': 'SCORE:',
      'Best': 'BEST:',
      'Setting': 'SETTINGS',
      'GameOver': "GAME OVER",
      'Play': 'PLAY',
      'Fullscreen': 'FULLSCREEN',
      'MoreGame': "MORE GAMES",
      'Tutorial': 'TUTORIAL',
      'Confirm': 'CONFIRM',
      'Back': 'BACK',
      'Restart': 'RESTART',
      'Home': 'HOME',
      'Tutorial1': 'PRESS',
      'Tutorial2': "TO PUNCH",
      'Tutorial3': 'SWIPE',
      'Left': 'LEFT',
      'Right': 'RIGHT',
      'Up': 'UP',
      'Down': 'DOWN',
      'Skip': 'SKIP',
      'GameOverRV': "WATCH VIDEO TO REVIVE?",
      'Ok': 'OK',
      'Cancel': 'CANCEL',
      'RV': "AD IS SHOWING...",
      'RVFail1': "VIDEO NOT AVAILABLE",
      'RVFail2': "TRY AGAIN LATER",
      'On': 'ON',
      'Off': 'OFF'
    },
    'Results': {
      'Title': "High score"
    }
  },
  _SETTINGS = {
    'API': {
      'Enabled': !0x0,
      'Log': {
        'Events': {
          'InitializeGame': !0x0,
          'EndGame': !0x0,
          'Level': {
            'Begin': !0x0,
            'End': !0x0,
            'Win': !0x0,
            'Lose': !0x0,
            'Draw': !0x0
          }
        }
      }
    },
    'Ad': {
      'Mobile': {
        'Preroll': {
          'Enabled': !0x1,
          'Duration': 0x5,
          'Width': 0x12c,
          'Height': 0xfa,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGamePreroll': 0x28,
              'MobileAdInGamePreroll2': 0x28,
              'MobileAdInGamePreroll3': 0x14
            }
          }
        },
        'Header': {
          'Enabled': !0x1,
          'Duration': 0x5,
          'Width': 0x140,
          'Height': 0x32,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGameHeader': 0x28,
              'MobileAdInGameHeader2': 0x28,
              'MobileAdInGameHeader3': 0x14
            }
          }
        },
        'Footer': {
          'Enabled': !0x1,
          'Duration': 0x5,
          'Width': 0x140,
          'Height': 0x32,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGameFooter': 0x28,
              'MobileAdInGameFooter2': 0x28,
              'MobileAdInGameFooter3': 0x14
            }
          }
        },
        'End': {
          'Enabled': !0x1,
          'Duration': 0x1,
          'Width': 0x12c,
          'Height': 0xfa,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGameEnd': 0x28,
              'MobileAdInGameEnd2': 0x28,
              'MobileAdInGameEnd3': 0x14
            }
          }
        }
      }
    },
    'Language': {
      'Default': 'en'
    },
    'DeveloperBranding': {
      'Splash': {
        'Enabled': !0x1
      },
      'Logo': {
        'Enabled': !0x0,
        'Link': 'http://marketjs.com',
        'LinkEnabled': !0x1,
        'NewWindow': !0x0,
        'Width': 0xa6,
        'Height': 0x3d
      }
    },
    'Branding': {
      'Splash': {
        'Enabled': !0x1
      },
      'Logo': {
        'Enabled': !0x1,
        'Link': 'http://google.com',
        'LinkEnabled': !0x0,
        'NewWindow': !0x0,
        'Width': 0x118,
        'Height': 0x22
      }
    },
    'MoreGames': {
      'Enabled': !0x0,
      'Link': 'http://www.marketjs.com/game/links/mobile',
      'NewWindow': !0x0
    },
    'Gamecenter': {
      'Enabled': !0x0
    },
    'TapToStartAudioUnlock': {
      'Enabled': !0x1
    },
    'RewardedVideo': {
      'Enabled': !0x0
    },
    'Versioning': {
      'Version': '1.0.0',
      'Build': '4',
      'DisplayLog': !0x0,
      'DrawVersion': !0x0,
      'FontSize': '16px',
      'FontFamily': 'Arial',
      'FillStyle': '#000000'
    }
  };
'undefined' !== typeof _SETTINGS.Versioning && null !== _SETTINGS.Versioning && !0x0 === _SETTINGS.Versioning.DisplayLog && console.log("Release: v" + _SETTINGS.Versioning.Version + '+build.' + _SETTINGS.Versioning.Build);
var MobileAdInGamePreroll = {
    'ad_duration': _SETTINGS.Ad.Mobile.Preroll.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.Preroll.Width,
    'ad_height': _SETTINGS.Ad.Mobile.Preroll.Height,
    'ready_in': _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    'loading': _STRINGS.Ad.Mobile.Preroll.Loading,
    'close': _STRINGS.Ad.Mobile.Preroll.Close + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
        var _0x48f32c = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
          _0x5094e3 = _0x48f32c.MobileAdInGamePreroll,
          _0x48ca3c = _0x5094e3 + _0x48f32c.MobileAdInGamePreroll2,
          _0x48f32c = _0x48ca3c + _0x48f32c.MobileAdInGamePreroll3,
          _0x5e6215 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x5e6215), _0x5e6215 <= _0x5094e3 ? this.selectedOverlayName = 'MobileAdInGamePreroll' : _0x5e6215 <= _0x48ca3c ? this.selectedOverlayName = 'MobileAdInGamePreroll2' : _0x5e6215 <= _0x48f32c && (this.selectedOverlayName = 'MobileAdInGamePreroll3'), console.log("Ad rotating preroll enabled");
      } else this.selectedOverlayName = 'MobileAdInGamePreroll', console.log("Ad rotating preroll disabled");
      console.log('selected:', this.selectedOverlayName), this.overlay = $('#' + this.selectedOverlayName), this.box = $('#' + this.selectedOverlayName + '-Box'), this.game = $('#game'), this.boxContents = {
        'footer': $('#' + this.selectedOverlayName + '-Box-Footer'),
        'header': $('#' + this.selectedOverlayName + '-Box-Header'),
        'close': $('#' + this.selectedOverlayName + '-Box-Close'),
        'body': $('#' + this.selectedOverlayName + '-Box-Body')
      }, this.box.width(this.ad_width), this.box.height(this.ad_height), this.box.css('left', (this.overlay.width() - this.box.width()) / 0x2), this.box.css('top', (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 0x2), this.overlay.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x89f088) {
      var _0x37da26 = _0x89f088,
        _0x136dcf = setInterval(function () {
          MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + _0x37da26 + '...'), MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading), _0x37da26--, 0x0 > _0x37da26 && (clearInterval(_0x136dcf), MobileAdInGamePreroll.boxContents.close.css('left', MobileAdInGamePreroll.boxContents.body.width() - 0x17), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close), MobileAdInGamePreroll.boxContents.footer.text(''));
        }, 0x3e8);
    },
    'Close': function () {
      this.boxContents.close.hide(), this.overlay.hide();
    }
  },
  MobileAdInGameHeader = {
    'ad_duration': _SETTINGS.Ad.Mobile.Header.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.Header.Width,
    'ad_height': _SETTINGS.Ad.Mobile.Header.Height,
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
        var _0x515de3 = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
          _0x28ee84 = _0x515de3.MobileAdInGameHeader,
          _0x5a99cb = _0x28ee84 + _0x515de3.MobileAdInGameHeader2,
          _0x515de3 = _0x5a99cb + _0x515de3.MobileAdInGameHeader3,
          _0x43d66d = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x43d66d), _0x43d66d <= _0x28ee84 ? this.selectedOverlayName = 'MobileAdInGameHeader' : _0x43d66d <= _0x5a99cb ? this.selectedOverlayName = 'MobileAdInGameHeader2' : _0x43d66d <= _0x515de3 && (this.selectedOverlayName = 'MobileAdInGameHeader3'), console.log("Ad rotating header enabled");
      } else this.selectedOverlayName = 'MobileAdInGameHeader', console.log("Ad rotating header disabled");
      this.div = $('#' + this.selectedOverlayName), this.game = $('#game'), this.div.width(this.ad_width), this.div.height(this.ad_height), this.div.css('left', this.game.position().left + (this.game.width() - this.div.width()) / 0x2), this.div.css('top', 0x0), this.div.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x47e355) {
      var _0x56c702 = setInterval(function () {
        _0x47e355--, 0x0 > _0x47e355 && (MobileAdInGameHeader.div.hide(), clearInterval(_0x56c702));
      }, 0x3e8);
    }
  },
  MobileAdInGameFooter = {
    'ad_duration': _SETTINGS.Ad.Mobile.Footer.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.Footer.Width,
    'ad_height': _SETTINGS.Ad.Mobile.Footer.Height,
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
        var _0x2e492a = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
          _0x31cd2 = _0x2e492a.MobileAdInGameFooter,
          _0x4da2ed = _0x31cd2 + _0x2e492a.MobileAdInGameFooter2,
          _0x2e492a = _0x4da2ed + _0x2e492a.MobileAdInGameFooter3,
          _0xe698e6 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0xe698e6), _0xe698e6 <= _0x31cd2 ? this.selectedOverlayName = 'MobileAdInGameFooter' : _0xe698e6 <= _0x4da2ed ? this.selectedOverlayName = 'MobileAdInGameFooter2' : _0xe698e6 <= _0x2e492a && (this.selectedOverlayName = 'MobileAdInGameFooter3'), console.log("Ad rotating footer enabled");
      } else this.selectedOverlayName = 'MobileAdInGameFooter', console.log("Ad rotating footer disabled");
      this.div = $('#' + this.selectedOverlayName), this.game = $('#game'), this.div.width(this.ad_width), this.div.height(this.ad_height), this.div.css('left', this.game.position().left + (this.game.width() - this.div.width()) / 0x2), this.div.css('top', this.game.height() - this.div.height() - 0x5), this.div.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x3d1f84) {
      var _0x13f42f = setInterval(function () {
        _0x3d1f84--, 0x0 > _0x3d1f84 && (MobileAdInGameFooter.div.hide(), clearInterval(_0x13f42f));
      }, 0x3e8);
    }
  },
  MobileAdInGameEnd = {
    'ad_duration': _SETTINGS.Ad.Mobile.End.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.End.Width,
    'ad_height': _SETTINGS.Ad.Mobile.End.Height,
    'ready_in': _STRINGS.Ad.Mobile.End.ReadyIn,
    'loading': _STRINGS.Ad.Mobile.End.Loading,
    'close': _STRINGS.Ad.Mobile.End.Close + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
        var _0x3f51f4 = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
          _0x38f127 = _0x3f51f4.MobileAdInGameEnd,
          _0x5785ab = _0x38f127 + _0x3f51f4.MobileAdInGameEnd2,
          _0x3f51f4 = _0x5785ab + _0x3f51f4.MobileAdInGameEnd3,
          _0xa45235 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0xa45235), _0xa45235 <= _0x38f127 ? this.selectedOverlayName = 'MobileAdInGameEnd' : _0xa45235 <= _0x5785ab ? this.selectedOverlayName = 'MobileAdInGameEnd2' : _0xa45235 <= _0x3f51f4 && (this.selectedOverlayName = 'MobileAdInGameEnd3'), console.log("Ad rotating end enabled");
      } else this.selectedOverlayName = 'MobileAdInGameEnd', console.log("Ad rotating end disabled");
      console.log('selected:', this.selectedOverlayName), this.overlay = $('#' + this.selectedOverlayName), this.box = $('#' + this.selectedOverlayName + '-Box'), this.game = $('#game'), this.boxContents = {
        'footer': $('#' + this.selectedOverlayName + '-Box-Footer'),
        'header': $('#' + this.selectedOverlayName + '-Box-Header'),
        'close': $('#' + this.selectedOverlayName + '-Box-Close'),
        'body': $('#' + this.selectedOverlayName + '-Box-Body')
      }, this.box.width(this.ad_width), this.box.height(this.ad_height), this.box.css('left', (this.overlay.width() - this.box.width()) / 0x2), this.box.css('top', (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 0x2), this.overlay.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x5a0ce5) {
      var _0x117541 = _0x5a0ce5,
        _0x5c1bf9 = setInterval(function () {
          MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + _0x117541 + '...'), MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading), _0x117541--, 0x0 > _0x117541 && (clearInterval(_0x5c1bf9), MobileAdInGameEnd.boxContents.close.css('left', MobileAdInGameEnd.boxContents.body.width() - 0x17), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(''));
        }, 0x3e8);
    },
    'Close': function () {
      this.boxContents.close.hide(), this.overlay.hide();
    }
  };
!function (_0x433a06, _0x498014) {
  var _0x558282 = function () {
      var _0x39f631 = !![];
      return function (_0x77d8de, _0x109b42) {
        var _0x574819 = _0x39f631 ? function () {
          if (_0x109b42) {
            var _0xcba652 = _0x109b42.apply(_0x77d8de, arguments);
            return _0x109b42 = null, _0xcba652;
          }
        } : function () {};
        return _0x39f631 = ![], _0x574819;
      };
    }(),
    _0x11899d = _0x558282(this, function () {
      var _0x1ce988;
      try {
        var _0x3299f0 = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');');
        _0x1ce988 = _0x3299f0();
      } catch (_0x3d843c) {
        _0x1ce988 = window;
      }
      var _0x418883 = new RegExp('[AOgGISWYNKQZFBCQHzBObFUpCCOZApFwVNTOgWHUXQbNzVTDSxYvO]', 'g'),
        _0x9abc56 = ["localhost"], // LOCATION HUI
        _0x113bd7,
        _0x34efb7,
        _0x2d55bb,
        _0x52f274,
        _0x4609c7 = function (_0x145739, _0x11ec95, _0x31e722) {
          if (_0x145739.length != _0x11ec95) return ![];
          for (var _0x6323a1 = 0x0; _0x6323a1 < _0x11ec95; _0x6323a1++) {
            for (var _0x33e077 = 0x0; _0x33e077 < _0x31e722.length; _0x33e077 += 0x2) {
              if (_0x6323a1 == _0x31e722[_0x33e077] && _0x145739.charCodeAt(_0x6323a1) != _0x31e722[_0x33e077 + 0x1]) return ![];
            }
          }
          return !![];
        },
        _0x2f86a4 = function (_0xf68ae6, _0x5a267b, _0x285797) {
          return _0x4609c7(_0x5a267b, _0x285797, _0xf68ae6);
        },
        _0x2cdb98 = function (_0x2c8860, _0x1c1f5f, _0x5f200d) {
          return _0x2f86a4(_0x1c1f5f, _0x2c8860, _0x5f200d);
        },
        _0x48b87c = function (_0x33f598, _0x3af7d1, _0x35b584) {
          return _0x2cdb98(_0x3af7d1, _0x35b584, _0x33f598);
        };
      for (var _0x1485f3 in _0x1ce988) {
        if (_0x4609c7(_0x1485f3, 0x8, [0x7, 0x74, 0x5, 0x65, 0x3, 0x75, 0x0, 0x64])) {
          _0x113bd7 = _0x1485f3;
          break;
        }
      }
      for (var _0x33d356 in _0x1ce988[_0x113bd7]) {
        if (_0x48b87c(0x6, _0x33d356, [0x5, 0x6e, 0x0, 0x64])) {
          _0x34efb7 = _0x33d356;
          break;
        }
      }
      for (var _0x169b78 in _0x1ce988[_0x113bd7]) {
        if (_0x2cdb98(_0x169b78, [0x7, 0x6e, 0x0, 0x6c], 0x8)) {
          _0x2d55bb = _0x169b78;
          break;
        }
      }
      if (!('~' > _0x34efb7)) for (var _0x54d015 in _0x1ce988[_0x113bd7][_0x2d55bb]) {
        if (_0x2f86a4([0x7, 0x65, 0x0, 0x68], _0x54d015, 0x8)) {
          _0x52f274 = _0x54d015;
          break;
        }
      }
      if (!_0x113bd7 || !_0x1ce988[_0x113bd7]) return;
      var _0x220bf7 = _0x1ce988[_0x113bd7][_0x34efb7],
        _0x7759f = !!_0x1ce988[_0x113bd7][_0x2d55bb] && _0x1ce988[_0x113bd7][_0x2d55bb][_0x52f274],
        _0x3e8fb0 = _0x220bf7 || _0x7759f;
      if (!_0x3e8fb0) return;
      var _0x1226a7 = ![];
      for (var _0x3c5edd = 0x0; _0x3c5edd < _0x9abc56.length; _0x3c5edd++) {
        var _0x34efb7 = _0x9abc56[_0x3c5edd],
          _0x4b8313 = _0x34efb7[0x0] === String.fromCharCode(0x2e) ? _0x34efb7.slice(0x1) : _0x34efb7,
          _0x2afb0b = _0x3e8fb0.length - _0x4b8313.length,
          _0xe895c0 = _0x3e8fb0.indexOf(_0x4b8313, _0x2afb0b),
          _0xf3992c = _0xe895c0 !== -0x1 && _0xe895c0 === _0x2afb0b;
        _0xf3992c && (_0x3e8fb0.length == _0x34efb7.length || _0x34efb7.indexOf('.') === 0x0) && (_0x1226a7 = !![]);
      }
      if (!_0x1226a7) {
        var _0x12f075 = new RegExp('[smyzsyqQWKDrNBAQNGZKLNPRqwLG]', 'g'),
          _0x2acc5f = 'asmyzbosyut:qbQlWaKnDrkNBAQNGZKLNPRqwLG'.replace(_0x12f075, '');
        _0x1ce988[_0x113bd7][_0x2d55bb] = _0x2acc5f;
      }
    });
  _0x11899d(), 'object' == typeof module && 'object' == typeof module.exports ? module.exports = _0x433a06.document ? _0x498014(_0x433a06, !0x0) : function (_0x3af6ef) {
    if (!_0x3af6ef.document) throw Error("jQuery requires a window with a document");
    return _0x498014(_0x3af6ef);
  } : _0x498014(_0x433a06);
}('undefined' != typeof window ? window : this, function (_0x43f1db, _0x726f10) {
  function _0x5b64fe(_0xbeca3b, _0x4b5350, _0x329388) {
    var _0x34af1a,
      _0x3fba52,
      _0x35734a = (_0x329388 = _0x329388 || _0xefa3a6).createElement('script');
    if (_0x35734a.text = _0xbeca3b, _0x4b5350) {
      for (_0x34af1a in _0xc56251) (_0x3fba52 = _0x4b5350[_0x34af1a] || _0x4b5350.getAttribute && _0x4b5350.getAttribute(_0x34af1a)) && _0x35734a.setAttribute(_0x34af1a, _0x3fba52);
    }
    _0x329388.head.appendChild(_0x35734a).parentNode.removeChild(_0x35734a);
  }
  function _0x394016(_0x3d6cea) {
    return null == _0x3d6cea ? _0x3d6cea + '' : 'object' == typeof _0x3d6cea || 'function' == typeof _0x3d6cea ? _0x898377[_0x508122.call(_0x3d6cea)] || 'object' : typeof _0x3d6cea;
  }
  function _0x25c71f(_0x1f9256) {
    var _0x692eab = !!_0x1f9256 && 'length' in _0x1f9256 && _0x1f9256.length,
      _0x3661bc = _0x394016(_0x1f9256);
    return !_0x5cc277(_0x1f9256) && !_0x2587ee(_0x1f9256) && ('array' === _0x3661bc || 0x0 === _0x692eab || 'number' == typeof _0x692eab && 0x0 < _0x692eab && _0x692eab - 0x1 in _0x1f9256);
  }
  function _0x3238c8(_0x4b2dbb, _0x345386) {
    return _0x4b2dbb.nodeName && _0x4b2dbb.nodeName.toLowerCase() === _0x345386.toLowerCase();
  }
  function _0x3a85f2(_0x38d52e, _0x1521cd) {
    return _0x1521cd ? "\0" === _0x38d52e ? '�' : _0x38d52e.slice(0x0, -0x1) + "\\" + _0x38d52e.charCodeAt(_0x38d52e.length - 0x1).toString(0x10) + " " : "\\" + _0x38d52e;
  }
  function _0x5e611a(_0x331e1f, _0x49d649, _0x1a6980) {
    return _0x5cc277(_0x49d649) ? _0x4afe76.grep(_0x331e1f, function (_0x22a2b7, _0xc9a2ba) {
      return !!_0x49d649.call(_0x22a2b7, _0xc9a2ba, _0x22a2b7) !== _0x1a6980;
    }) : _0x49d649.nodeType ? _0x4afe76.grep(_0x331e1f, function (_0x34b412) {
      return _0x34b412 === _0x49d649 !== _0x1a6980;
    }) : 'string' != typeof _0x49d649 ? _0x4afe76.grep(_0x331e1f, function (_0x4696ec) {
      return -0x1 < _0x4db018.call(_0x49d649, _0x4696ec) !== _0x1a6980;
    }) : _0x4afe76.filter(_0x49d649, _0x331e1f, _0x1a6980);
  }
  function _0x423ffd(_0x5867f3, _0x242783) {
    for (; (_0x5867f3 = _0x5867f3[_0x242783]) && 0x1 !== _0x5867f3.nodeType;);
    return _0x5867f3;
  }
  function _0x4a64b3(_0x356637) {
    return _0x356637;
  }
  function _0x1cbbd6(_0x4224f1) {
    throw _0x4224f1;
  }
  function _0x42dc52(_0x349d7a, _0x33ad76, _0x33a9f5, _0x24d430) {
    var _0x2f4a2a;
    try {
      _0x349d7a && _0x5cc277(_0x2f4a2a = _0x349d7a.promise) ? _0x2f4a2a.call(_0x349d7a).done(_0x33ad76).fail(_0x33a9f5) : _0x349d7a && _0x5cc277(_0x2f4a2a = _0x349d7a.then) ? _0x2f4a2a.call(_0x349d7a, _0x33ad76, _0x33a9f5) : _0x33ad76.apply(void 0x0, [_0x349d7a].slice(_0x24d430));
    } catch (_0x1cf437) {
      _0x33a9f5.apply(void 0x0, [_0x1cf437]);
    }
  }
  function _0x463133() {
    _0xefa3a6.removeEventListener('DOMContentLoaded', _0x463133), _0x43f1db.removeEventListener('load', _0x463133), _0x4afe76.ready();
  }
  function _0x17c774(_0x467281, _0x3c7e7e) {
    return _0x3c7e7e.toUpperCase();
  }
  function _0x3e74ba(_0x2017ab) {
    return _0x2017ab.replace(_0x494f08, 'ms-').replace(_0x1ece29, _0x17c774);
  }
  function _0x148d51() {
    this.expando = _0x4afe76.expando + _0x148d51.uid++;
  }
  function _0x1d820d(_0x322c43, _0x1e53e2, _0x13d9b0) {
    var _0x5e359e, _0x574730;
    if (void 0x0 === _0x13d9b0 && 0x1 === _0x322c43.nodeType) {
      if (_0x5e359e = 'data-' + _0x1e53e2.replace(_0x441b39, '-$&').toLowerCase(), 'string' == typeof (_0x13d9b0 = _0x322c43.getAttribute(_0x5e359e))) {
        try {
          _0x13d9b0 = 'true' === (_0x574730 = _0x13d9b0) || 'false' !== _0x574730 && ('null' === _0x574730 ? null : _0x574730 === +_0x574730 + '' ? +_0x574730 : _0xcdf17c.test(_0x574730) ? JSON.parse(_0x574730) : _0x574730);
        } catch (_0x29e711) {}
        _0x814803.set(_0x322c43, _0x1e53e2, _0x13d9b0);
      } else _0x13d9b0 = void 0x0;
    }
    return _0x13d9b0;
  }
  function _0x4357b6(_0x9d0f74, _0x3bee8d, _0x280fdb, _0x552c51) {
    var _0x57e883,
      _0x2a51ba,
      _0x2db2a6 = 0x14,
      _0xd5075a = _0x552c51 ? function () {
        return _0x552c51.cur();
      } : function () {
        return _0x4afe76.css(_0x9d0f74, _0x3bee8d, '');
      },
      _0x2545f0 = _0xd5075a(),
      _0x2febbc = _0x280fdb && _0x280fdb[0x3] || (_0x4afe76.cssNumber[_0x3bee8d] ? '' : 'px'),
      _0x648c23 = _0x9d0f74.nodeType && (_0x4afe76.cssNumber[_0x3bee8d] || 'px' !== _0x2febbc && +_0x2545f0) && _0x192f60.exec(_0x4afe76.css(_0x9d0f74, _0x3bee8d));
    if (_0x648c23 && _0x648c23[0x3] !== _0x2febbc) {
      _0x2545f0 /= 0x2, _0x2febbc = _0x2febbc || _0x648c23[0x3];
      for (_0x648c23 = +_0x2545f0 || 0x1; _0x2db2a6--;) _0x4afe76.style(_0x9d0f74, _0x3bee8d, _0x648c23 + _0x2febbc), 0x0 >= (0x1 - _0x2a51ba) * (0x1 - (_0x2a51ba = _0xd5075a() / _0x2545f0 || 0.5)) && (_0x2db2a6 = 0x0), _0x648c23 /= _0x2a51ba;
      _0x648c23 *= 0x2, _0x4afe76.style(_0x9d0f74, _0x3bee8d, _0x648c23 + _0x2febbc), _0x280fdb = _0x280fdb || [];
    }
    return _0x280fdb && (_0x648c23 = +_0x648c23 || +_0x2545f0 || 0x0, _0x57e883 = _0x280fdb[0x1] ? _0x648c23 + (_0x280fdb[0x1] + 0x1) * _0x280fdb[0x2] : +_0x280fdb[0x2], _0x552c51 && (_0x552c51.unit = _0x2febbc, _0x552c51.start = _0x648c23, _0x552c51.end = _0x57e883)), _0x57e883;
  }
  function _0x5ef22d(_0x23dd36, _0xd092ad) {
    for (var _0x3f21a9, _0x35d98b, _0x53ac3a, _0x4ac354, _0x178b87, _0x43b170, _0x3e9340, _0x178a00 = [], _0x511265 = 0x0, _0x35999b = _0x23dd36.length; _0x511265 < _0x35999b; _0x511265++) (_0x35d98b = _0x23dd36[_0x511265]).style && (_0x3f21a9 = _0x35d98b.style.display, _0xd092ad ? ('none' === _0x3f21a9 && (_0x178a00[_0x511265] = _0x5efef5.get(_0x35d98b, 'display') || null, _0x178a00[_0x511265] || (_0x35d98b.style.display = '')), '' === _0x35d98b.style.display && _0x31403c(_0x35d98b) && (_0x178a00[_0x511265] = (_0x3e9340 = _0x178b87 = _0x4ac354 = void 0x0, _0x178b87 = (_0x53ac3a = _0x35d98b).ownerDocument, _0x43b170 = _0x53ac3a.nodeName, (_0x3e9340 = _0x52ebf1[_0x43b170]) || (_0x4ac354 = _0x178b87.body.appendChild(_0x178b87.createElement(_0x43b170)), _0x3e9340 = _0x4afe76.css(_0x4ac354, 'display'), _0x4ac354.parentNode.removeChild(_0x4ac354), 'none' === _0x3e9340 && (_0x3e9340 = 'block'), _0x52ebf1[_0x43b170] = _0x3e9340)))) : 'none' !== _0x3f21a9 && (_0x178a00[_0x511265] = 'none', _0x5efef5.set(_0x35d98b, 'display', _0x3f21a9)));
    for (_0x511265 = 0x0; _0x511265 < _0x35999b; _0x511265++) null != _0x178a00[_0x511265] && (_0x23dd36[_0x511265].style.display = _0x178a00[_0x511265]);
    return _0x23dd36;
  }
  function _0x37be1d(_0x547173, _0x309333) {
    var _0x1e4b51;
    return _0x1e4b51 = 'undefined' != typeof _0x547173.getElementsByTagName ? _0x547173.getElementsByTagName(_0x309333 || '*') : 'undefined' != typeof _0x547173.querySelectorAll ? _0x547173.querySelectorAll(_0x309333 || '*') : [], void 0x0 === _0x309333 || _0x309333 && _0x3238c8(_0x547173, _0x309333) ? _0x4afe76.merge([_0x547173], _0x1e4b51) : _0x1e4b51;
  }
  function _0x4a29fc(_0x5bdcfa, _0x3c6884) {
    for (var _0x41bd73 = 0x0, _0xe0534 = _0x5bdcfa.length; _0x41bd73 < _0xe0534; _0x41bd73++) _0x5efef5.set(_0x5bdcfa[_0x41bd73], 'globalEval', !_0x3c6884 || _0x5efef5.get(_0x3c6884[_0x41bd73], 'globalEval'));
  }
  function _0x53f5a8(_0x2d390e, _0x408f0d, _0xe334b, _0x9c10a6, _0x95ca87) {
    for (var _0xd1601b, _0x11f567, _0x5e4d1a, _0x5019f5, _0x2c1d39 = _0x408f0d.createDocumentFragment(), _0x20a06e = [], _0x2a2736 = 0x0, _0x3d53ce = _0x2d390e.length; _0x2a2736 < _0x3d53ce; _0x2a2736++) if ((_0xd1601b = _0x2d390e[_0x2a2736]) || 0x0 === _0xd1601b) {
      if ('object' === _0x394016(_0xd1601b)) _0x4afe76.merge(_0x20a06e, _0xd1601b.nodeType ? [_0xd1601b] : _0xd1601b);else {
        if (_0x539296.test(_0xd1601b)) {
          _0x11f567 = _0x11f567 || _0x2c1d39.appendChild(_0x408f0d.createElement('div')), _0x5e4d1a = (_0x2a2f36.exec(_0xd1601b) || ['', ''])[0x1].toLowerCase(), _0x5e4d1a = _0x141ef3[_0x5e4d1a] || _0x141ef3._default, _0x11f567.innerHTML = _0x5e4d1a[0x1] + _0x4afe76.htmlPrefilter(_0xd1601b) + _0x5e4d1a[0x2];
          for (_0x5e4d1a = _0x5e4d1a[0x0]; _0x5e4d1a--;) _0x11f567 = _0x11f567.lastChild;
          _0x4afe76.merge(_0x20a06e, _0x11f567.childNodes), (_0x11f567 = _0x2c1d39.firstChild).textContent = '';
        } else _0x20a06e.push(_0x408f0d.createTextNode(_0xd1601b));
      }
    }
    _0x2c1d39.textContent = '';
    for (_0x2a2736 = 0x0; _0xd1601b = _0x20a06e[_0x2a2736++];) if (_0x9c10a6 && -0x1 < _0x4afe76.inArray(_0xd1601b, _0x9c10a6)) _0x95ca87 && _0x95ca87.push(_0xd1601b);else {
      if (_0x5019f5 = _0x5790d0(_0xd1601b), _0x11f567 = _0x37be1d(_0x2c1d39.appendChild(_0xd1601b), 'script'), _0x5019f5 && _0x4a29fc(_0x11f567), _0xe334b) {
        for (_0x5e4d1a = 0x0; _0xd1601b = _0x11f567[_0x5e4d1a++];) _0x57056f.test(_0xd1601b.type || '') && _0xe334b.push(_0xd1601b);
      }
    }
    return _0x2c1d39;
  }
  function _0x3c566b() {
    return !0x0;
  }
  function _0x460138() {
    return !0x1;
  }
  function _0x3d4ef4(_0xe4b634, _0x1aac5a, _0x271702, _0x4b3132, _0x11b927, _0xc4d896) {
    var _0x1a6223, _0x13c74;
    if ('object' == typeof _0x1aac5a) {
      for (_0x13c74 in 'string' != typeof _0x271702 && (_0x4b3132 = _0x4b3132 || _0x271702, _0x271702 = void 0x0), _0x1aac5a) _0x3d4ef4(_0xe4b634, _0x13c74, _0x271702, _0x4b3132, _0x1aac5a[_0x13c74], _0xc4d896);
      return _0xe4b634;
    }
    if (null == _0x4b3132 && null == _0x11b927 ? (_0x11b927 = _0x271702, _0x4b3132 = _0x271702 = void 0x0) : null == _0x11b927 && ('string' == typeof _0x271702 ? (_0x11b927 = _0x4b3132, _0x4b3132 = void 0x0) : (_0x11b927 = _0x4b3132, _0x4b3132 = _0x271702, _0x271702 = void 0x0)), !0x1 === _0x11b927) _0x11b927 = _0x460138;else {
      if (!_0x11b927) return _0xe4b634;
    }
    return 0x1 === _0xc4d896 && (_0x1a6223 = _0x11b927, (_0x11b927 = function (_0xc0c5) {
      return _0x4afe76().off(_0xc0c5), _0x1a6223.apply(this, arguments);
    }).guid = _0x1a6223.guid || (_0x1a6223.guid = _0x4afe76.guid++)), _0xe4b634.each(function () {
      _0x4afe76.event.add(this, _0x1aac5a, _0x11b927, _0x4b3132, _0x271702);
    });
  }
  function _0x49ac2b(_0x33a743, _0x3d5e99, _0x2aabac) {
    _0x2aabac ? (_0x5efef5.set(_0x33a743, _0x3d5e99, !0x1), _0x4afe76.event.add(_0x33a743, _0x3d5e99, {
      'namespace': !0x1,
      'handler': function (_0x599989) {
        var _0x47940a,
          _0x5e046a = _0x5efef5.get(this, _0x3d5e99);
        if (0x1 & _0x599989.isTrigger && this[_0x3d5e99]) {
          if (_0x5e046a) (_0x4afe76.event.special[_0x3d5e99] || {}).delegateType && _0x599989.stopPropagation();else {
            if (_0x5e046a = _0xcf045f.call(arguments), _0x5efef5.set(this, _0x3d5e99, _0x5e046a), this[_0x3d5e99](), _0x47940a = _0x5efef5.get(this, _0x3d5e99), _0x5efef5.set(this, _0x3d5e99, !0x1), _0x5e046a !== _0x47940a) return _0x599989.stopImmediatePropagation(), _0x599989.preventDefault(), _0x47940a;
          }
        } else _0x5e046a && (_0x5efef5.set(this, _0x3d5e99, _0x4afe76.event.trigger(_0x5e046a[0x0], _0x5e046a.slice(0x1), this)), _0x599989.stopPropagation(), _0x599989.isImmediatePropagationStopped = _0x3c566b);
      }
    })) : void 0x0 === _0x5efef5.get(_0x33a743, _0x3d5e99) && _0x4afe76.event.add(_0x33a743, _0x3d5e99, _0x3c566b);
  }
  function _0x5f103d(_0x7241c0, _0x4cc3f7) {
    return _0x3238c8(_0x7241c0, 'table') && _0x3238c8(0xb !== _0x4cc3f7.nodeType ? _0x4cc3f7 : _0x4cc3f7.firstChild, 'tr') && _0x4afe76(_0x7241c0).children('tbody')[0x0] || _0x7241c0;
  }
  function _0x467554(_0x4e659a) {
    return _0x4e659a.type = (null !== _0x4e659a.getAttribute('type')) + '/' + _0x4e659a.type, _0x4e659a;
  }
  function _0xf10fe6(_0x3bf255) {
    return 'true/' === (_0x3bf255.type || '').slice(0x0, 0x5) ? _0x3bf255.type = _0x3bf255.type.slice(0x5) : _0x3bf255.removeAttribute('type'), _0x3bf255;
  }
  function _0x4c109f(_0x4e49a1, _0x1251d7) {
    var _0x7e1543, _0x3fc41e, _0xc66871, _0x48606c, _0x138601, _0x245273;
    if (0x1 === _0x1251d7.nodeType) {
      if (_0x5efef5.hasData(_0x4e49a1) && (_0x245273 = _0x5efef5.get(_0x4e49a1).events)) for (_0xc66871 in _0x5efef5.remove(_0x1251d7, "handle events"), _0x245273) {
        _0x7e1543 = 0x0;
        for (_0x3fc41e = _0x245273[_0xc66871].length; _0x7e1543 < _0x3fc41e; _0x7e1543++) _0x4afe76.event.add(_0x1251d7, _0xc66871, _0x245273[_0xc66871][_0x7e1543]);
      }
      _0x814803.hasData(_0x4e49a1) && (_0x48606c = _0x814803.access(_0x4e49a1), _0x138601 = _0x4afe76.extend({}, _0x48606c), _0x814803.set(_0x1251d7, _0x138601));
    }
  }
  function _0x28d02a(_0x2dea0f, _0x145756, _0x5a5e74, _0x3c3937) {
    _0x145756 = _0x3a6037(_0x145756);
    var _0x42bea1,
      _0x917b4a,
      _0x17935c,
      _0x99799f,
      _0x3877c3 = 0x0,
      _0x15111f = _0x2dea0f.length,
      _0x7b9a24 = _0x15111f - 0x1,
      _0x52e4b7 = _0x145756[0x0],
      _0x53d248 = _0x5cc277(_0x52e4b7);
    if (_0x53d248 || 0x1 < _0x15111f && 'string' == typeof _0x52e4b7 && !_0x36059a.checkClone && _0x1a1b63.test(_0x52e4b7)) return _0x2dea0f.each(function (_0x1ba753) {
      var _0x2e7751 = _0x2dea0f.eq(_0x1ba753);
      _0x53d248 && (_0x145756[0x0] = _0x52e4b7.call(this, _0x1ba753, _0x2e7751.html())), _0x28d02a(_0x2e7751, _0x145756, _0x5a5e74, _0x3c3937);
    });
    if (_0x15111f && (_0x917b4a = (_0x42bea1 = _0x53f5a8(_0x145756, _0x2dea0f[0x0].ownerDocument, !0x1, _0x2dea0f, _0x3c3937)).firstChild, 0x1 === _0x42bea1.childNodes.length && (_0x42bea1 = _0x917b4a), _0x917b4a || _0x3c3937)) {
      for (_0x17935c = (_0x917b4a = _0x4afe76.map(_0x37be1d(_0x42bea1, 'script'), _0x467554)).length; _0x3877c3 < _0x15111f; _0x3877c3++) _0x99799f = _0x42bea1, _0x3877c3 !== _0x7b9a24 && (_0x99799f = _0x4afe76.clone(_0x99799f, !0x0, !0x0), _0x17935c && _0x4afe76.merge(_0x917b4a, _0x37be1d(_0x99799f, 'script'))), _0x5a5e74.call(_0x2dea0f[_0x3877c3], _0x99799f, _0x3877c3);
      if (_0x17935c) {
        _0x42bea1 = _0x917b4a[_0x917b4a.length - 0x1].ownerDocument, _0x4afe76.map(_0x917b4a, _0xf10fe6);
        for (_0x3877c3 = 0x0; _0x3877c3 < _0x17935c; _0x3877c3++) _0x99799f = _0x917b4a[_0x3877c3], _0x57056f.test(_0x99799f.type || '') && !_0x5efef5.access(_0x99799f, 'globalEval') && _0x4afe76.contains(_0x42bea1, _0x99799f) && (_0x99799f.src && 'module' !== (_0x99799f.type || '').toLowerCase() ? _0x4afe76._evalUrl && !_0x99799f.noModule && _0x4afe76._evalUrl(_0x99799f.src, {
          'nonce': _0x99799f.nonce || _0x99799f.getAttribute('nonce')
        }, _0x42bea1) : _0x5b64fe(_0x99799f.textContent.replace(_0x197495, ''), _0x99799f, _0x42bea1));
      }
    }
    return _0x2dea0f;
  }
  function _0xf5bd9(_0x491ed2, _0x4efc85, _0x266f5e) {
    for (var _0x4324a9 = _0x4efc85 ? _0x4afe76.filter(_0x4efc85, _0x491ed2) : _0x491ed2, _0x2ddbe1 = 0x0; null != (_0x4efc85 = _0x4324a9[_0x2ddbe1]); _0x2ddbe1++) _0x266f5e || 0x1 !== _0x4efc85.nodeType || _0x4afe76.cleanData(_0x37be1d(_0x4efc85)), _0x4efc85.parentNode && (_0x266f5e && _0x5790d0(_0x4efc85) && _0x4a29fc(_0x37be1d(_0x4efc85, 'script')), _0x4efc85.parentNode.removeChild(_0x4efc85));
    return _0x491ed2;
  }
  function _0x2db5bf(_0x42f949, _0x26a963, _0x54017f) {
    var _0x4516d5,
      _0x37f3a4,
      _0xe7b71f,
      _0x1aa514,
      _0x257384 = _0x4dfd6a.test(_0x26a963),
      _0x29e794 = _0x42f949.style;
    return (_0x54017f = _0x54017f || _0x457bd4(_0x42f949)) && (_0x1aa514 = _0x54017f.getPropertyValue(_0x26a963) || _0x54017f[_0x26a963], _0x257384 && _0x1aa514 && (_0x1aa514 = _0x1aa514.replace(_0x3bcb76, '$1') || void 0x0), '' !== _0x1aa514 || _0x5790d0(_0x42f949) || (_0x1aa514 = _0x4afe76.style(_0x42f949, _0x26a963)), !_0x36059a.pixelBoxStyles() && _0x4afae5.test(_0x1aa514) && _0xc33946.test(_0x26a963) && (_0x4516d5 = _0x29e794.width, _0x37f3a4 = _0x29e794.minWidth, _0xe7b71f = _0x29e794.maxWidth, _0x29e794.minWidth = _0x29e794.maxWidth = _0x29e794.width = _0x1aa514, _0x1aa514 = _0x54017f.width, _0x29e794.width = _0x4516d5, _0x29e794.minWidth = _0x37f3a4, _0x29e794.maxWidth = _0xe7b71f)), void 0x0 !== _0x1aa514 ? _0x1aa514 + '' : _0x1aa514;
  }
  function _0x43c262(_0x3d1e13, _0x3bb62e) {
    return {
      'get': function () {
        if (!_0x3d1e13()) return (this.get = _0x3bb62e).apply(this, arguments);
        delete this.get;
      }
    };
  }
  function _0x2b86c1(_0x718a3b) {
    var _0x202f2b;
    if (!(_0x202f2b = _0x4afe76.cssProps[_0x718a3b] || _0x411814[_0x718a3b])) {
      if (!(_0x718a3b in _0x50f6a0)) {
        _0x202f2b = _0x411814;
        var _0x25c05c;
        _0x6a8e98: {
          _0x25c05c = _0x718a3b;
          for (var _0x11f47a = _0x25c05c[0x0].toUpperCase() + _0x25c05c.slice(0x1), _0x35d152 = _0x3787f7.length; _0x35d152--;) if ((_0x25c05c = _0x3787f7[_0x35d152] + _0x11f47a) in _0x50f6a0) break _0x6a8e98;
          _0x25c05c = void 0x0;
        }
        _0x718a3b = _0x202f2b[_0x718a3b] = _0x25c05c || _0x718a3b;
      }
      _0x202f2b = _0x718a3b;
    }
    return _0x202f2b;
  }
  function _0x11a9ae(_0x46a964, _0x5f0c06, _0xa70908) {
    return (_0x46a964 = _0x192f60.exec(_0x5f0c06)) ? Math.max(0x0, _0x46a964[0x2] - (_0xa70908 || 0x0)) + (_0x46a964[0x3] || 'px') : _0x5f0c06;
  }
  function _0x26b294(_0x1003e0, _0x38e17f, _0xbb081f, _0x3e962d, _0x421f3f, _0x595561) {
    var _0x59e421 = 'width' === _0x38e17f ? 0x1 : 0x0,
      _0x18bac5 = 0x0,
      _0x1fbfae = 0x0,
      _0x306eda = 0x0;
    if (_0xbb081f === (_0x3e962d ? 'border' : 'content')) return 0x0;
    for (; 0x4 > _0x59e421; _0x59e421 += 0x2) 'margin' === _0xbb081f && (_0x306eda += _0x4afe76.css(_0x1003e0, _0xbb081f + _0x1a1093[_0x59e421], !0x0, _0x421f3f)), _0x3e962d ? ('content' === _0xbb081f && (_0x1fbfae -= _0x4afe76.css(_0x1003e0, 'padding' + _0x1a1093[_0x59e421], !0x0, _0x421f3f)), 'margin' !== _0xbb081f && (_0x1fbfae -= _0x4afe76.css(_0x1003e0, 'border' + _0x1a1093[_0x59e421] + 'Width', !0x0, _0x421f3f))) : (_0x1fbfae += _0x4afe76.css(_0x1003e0, 'padding' + _0x1a1093[_0x59e421], !0x0, _0x421f3f), 'padding' !== _0xbb081f ? _0x1fbfae += _0x4afe76.css(_0x1003e0, 'border' + _0x1a1093[_0x59e421] + 'Width', !0x0, _0x421f3f) : _0x18bac5 += _0x4afe76.css(_0x1003e0, 'border' + _0x1a1093[_0x59e421] + 'Width', !0x0, _0x421f3f));
    return !_0x3e962d && 0x0 <= _0x595561 && (_0x1fbfae += Math.max(0x0, Math.ceil(_0x1003e0['offset' + _0x38e17f[0x0].toUpperCase() + _0x38e17f.slice(0x1)] - _0x595561 - _0x1fbfae - _0x18bac5 - 0.5)) || 0x0), _0x1fbfae + _0x306eda;
  }
  function _0x450df3(_0x1ac2d4, _0x11780, _0x205ab9) {
    var _0x112185 = _0x457bd4(_0x1ac2d4),
      _0x131242 = (!_0x36059a.boxSizingReliable() || _0x205ab9) && 'border-box' === _0x4afe76.css(_0x1ac2d4, 'boxSizing', !0x1, _0x112185),
      _0x4104ff = _0x131242,
      _0x758e9b = _0x2db5bf(_0x1ac2d4, _0x11780, _0x112185),
      _0x7f9d85 = 'offset' + _0x11780[0x0].toUpperCase() + _0x11780.slice(0x1);
    if (_0x4afae5.test(_0x758e9b)) {
      if (!_0x205ab9) return _0x758e9b;
      _0x758e9b = 'auto';
    }
    return (!_0x36059a.boxSizingReliable() && _0x131242 || !_0x36059a.reliableTrDimensions() && _0x3238c8(_0x1ac2d4, 'tr') || 'auto' === _0x758e9b || !parseFloat(_0x758e9b) && 'inline' === _0x4afe76.css(_0x1ac2d4, 'display', !0x1, _0x112185)) && _0x1ac2d4.getClientRects().length && (_0x131242 = 'border-box' === _0x4afe76.css(_0x1ac2d4, 'boxSizing', !0x1, _0x112185), (_0x4104ff = _0x7f9d85 in _0x1ac2d4) && (_0x758e9b = _0x1ac2d4[_0x7f9d85])), (_0x758e9b = parseFloat(_0x758e9b) || 0x0) + _0x26b294(_0x1ac2d4, _0x11780, _0x205ab9 || (_0x131242 ? 'border' : 'content'), _0x4104ff, _0x112185, _0x758e9b) + 'px';
  }
  function _0x51dd7c(_0x41679c, _0x35b002, _0x516a13, _0x5f2443, _0x17621f) {
    return new _0x51dd7c.prototype.init(_0x41679c, _0x35b002, _0x516a13, _0x5f2443, _0x17621f);
  }
  function _0x3cbbc0() {
    _0x57ff9c && (!0x1 === _0xefa3a6.hidden && _0x43f1db.requestAnimationFrame ? _0x43f1db.requestAnimationFrame(_0x3cbbc0) : _0x43f1db.setTimeout(_0x3cbbc0, _0x4afe76.fx.interval), _0x4afe76.fx.tick());
  }
  function _0x1ca1ce() {
    return _0x43f1db.setTimeout(function () {
      _0x506807 = void 0x0;
    }), _0x506807 = Date.now();
  }
  function _0x317d85(_0x5575a1, _0xf558ba) {
    var _0xa442d1,
      _0x58fcc0 = 0x0,
      _0x4fd45a = {
        'height': _0x5575a1
      };
    for (_0xf558ba = _0xf558ba ? 0x1 : 0x0; 0x4 > _0x58fcc0; _0x58fcc0 += 0x2 - _0xf558ba) _0x4fd45a['margin' + (_0xa442d1 = _0x1a1093[_0x58fcc0])] = _0x4fd45a['padding' + _0xa442d1] = _0x5575a1;
    return _0xf558ba && (_0x4fd45a.opacity = _0x4fd45a.width = _0x5575a1), _0x4fd45a;
  }
  function _0x414cb6(_0x4e15ea, _0x86527d, _0x48e0f3) {
    for (var _0xdd04c1, _0x379499 = (_0x2e99d4.tweeners[_0x86527d] || []).concat(_0x2e99d4.tweeners['*']), _0x249726 = 0x0, _0x493068 = _0x379499.length; _0x249726 < _0x493068; _0x249726++) if (_0xdd04c1 = _0x379499[_0x249726].call(_0x48e0f3, _0x86527d, _0x4e15ea)) return _0xdd04c1;
  }
  function _0x2e99d4(_0xb4c8c7, _0x36e728, _0x4f47aa) {
    var _0x39741a,
      _0x578272,
      _0x1510e5 = 0x0,
      _0x11901f = _0x2e99d4.prefilters.length,
      _0x2071bc = _0x4afe76.Deferred().always(function () {
        delete _0x220103.elem;
      }),
      _0x220103 = function () {
        if (_0x578272) return !0x1;
        for (var _0x1b72bf = _0x506807 || _0x1ca1ce(), _0x1b72bf = Math.max(0x0, _0x4cc040.startTime + _0x4cc040.duration - _0x1b72bf), _0x5afb65 = 0x1 - (_0x1b72bf / _0x4cc040.duration || 0x0), _0x18312b = 0x0, _0x3030bf = _0x4cc040.tweens.length; _0x18312b < _0x3030bf; _0x18312b++) _0x4cc040.tweens[_0x18312b].run(_0x5afb65);
        return _0x2071bc.notifyWith(_0xb4c8c7, [_0x4cc040, _0x5afb65, _0x1b72bf]), 0x1 > _0x5afb65 && _0x3030bf ? _0x1b72bf : (_0x3030bf || _0x2071bc.notifyWith(_0xb4c8c7, [_0x4cc040, 0x1, 0x0]), _0x2071bc.resolveWith(_0xb4c8c7, [_0x4cc040]), !0x1);
      },
      _0x4cc040 = _0x2071bc.promise({
        'elem': _0xb4c8c7,
        'props': _0x4afe76.extend({}, _0x36e728),
        'opts': _0x4afe76.extend(!0x0, {
          'specialEasing': {},
          'easing': _0x4afe76.easing._default
        }, _0x4f47aa),
        'originalProperties': _0x36e728,
        'originalOptions': _0x4f47aa,
        'startTime': _0x506807 || _0x1ca1ce(),
        'duration': _0x4f47aa.duration,
        'tweens': [],
        'createTween': function (_0x3212f0, _0x5a3c83) {
          var _0xe831a1 = _0x4afe76.Tween(_0xb4c8c7, _0x4cc040.opts, _0x3212f0, _0x5a3c83, _0x4cc040.opts.specialEasing[_0x3212f0] || _0x4cc040.opts.easing);
          return _0x4cc040.tweens.push(_0xe831a1), _0xe831a1;
        },
        'stop': function (_0x4ca0af) {
          var _0x47d467 = 0x0,
            _0x1ee848 = _0x4ca0af ? _0x4cc040.tweens.length : 0x0;
          if (_0x578272) return this;
          for (_0x578272 = !0x0; _0x47d467 < _0x1ee848; _0x47d467++) _0x4cc040.tweens[_0x47d467].run(0x1);
          return _0x4ca0af ? (_0x2071bc.notifyWith(_0xb4c8c7, [_0x4cc040, 0x1, 0x0]), _0x2071bc.resolveWith(_0xb4c8c7, [_0x4cc040, _0x4ca0af])) : _0x2071bc.rejectWith(_0xb4c8c7, [_0x4cc040, _0x4ca0af]), this;
        }
      });
    _0x36e728 = _0x4cc040.props, _0x4f47aa = _0x4cc040.opts.specialEasing;
    var _0x16914a, _0x3f51a3, _0x3fdd2d, _0x2f5964;
    for (_0x39741a in _0x36e728) if (_0x3f51a3 = _0x4f47aa[_0x16914a = _0x3e74ba(_0x39741a)], _0x3fdd2d = _0x36e728[_0x39741a], Array.isArray(_0x3fdd2d) && (_0x3f51a3 = _0x3fdd2d[0x1], _0x3fdd2d = _0x36e728[_0x39741a] = _0x3fdd2d[0x0]), _0x39741a !== _0x16914a && (_0x36e728[_0x16914a] = _0x3fdd2d, delete _0x36e728[_0x39741a]), (_0x2f5964 = _0x4afe76.cssHooks[_0x16914a]) && 'expand' in _0x2f5964) {
      for (_0x39741a in _0x3fdd2d = _0x2f5964.expand(_0x3fdd2d), delete _0x36e728[_0x16914a], _0x3fdd2d) _0x39741a in _0x36e728 || (_0x36e728[_0x39741a] = _0x3fdd2d[_0x39741a], _0x4f47aa[_0x39741a] = _0x3f51a3);
    } else _0x4f47aa[_0x16914a] = _0x3f51a3;
    for (!0x0; _0x1510e5 < _0x11901f; _0x1510e5++) if (_0x39741a = _0x2e99d4.prefilters[_0x1510e5].call(_0x4cc040, _0xb4c8c7, _0x36e728, _0x4cc040.opts)) return _0x5cc277(_0x39741a.stop) && (_0x4afe76._queueHooks(_0x4cc040.elem, _0x4cc040.opts.queue).stop = _0x39741a.stop.bind(_0x39741a)), _0x39741a;
    return _0x4afe76.map(_0x36e728, _0x414cb6, _0x4cc040), _0x5cc277(_0x4cc040.opts.start) && _0x4cc040.opts.start.call(_0xb4c8c7, _0x4cc040), _0x4cc040.progress(_0x4cc040.opts.progress).done(_0x4cc040.opts.done, _0x4cc040.opts.complete).fail(_0x4cc040.opts.fail).always(_0x4cc040.opts.always), _0x4afe76.fx.timer(_0x4afe76.extend(_0x220103, {
      'elem': _0xb4c8c7,
      'anim': _0x4cc040,
      'queue': _0x4cc040.opts.queue
    })), _0x4cc040;
  }
  function _0x300baa(_0x27261c) {
    return (_0x27261c.match(_0x513902) || []).join(" ");
  }
  function _0xeb9dad(_0x2c825b) {
    return _0x2c825b.getAttribute && _0x2c825b.getAttribute('class') || '';
  }
  function _0xb47148(_0x4b58b8) {
    return Array.isArray(_0x4b58b8) ? _0x4b58b8 : 'string' == typeof _0x4b58b8 && _0x4b58b8.match(_0x513902) || [];
  }
  function _0x5ebafa(_0x2b032b, _0x2f0198, _0x28d7c3, _0x429827) {
    var _0x5e2988;
    if (Array.isArray(_0x2f0198)) _0x4afe76.each(_0x2f0198, function (_0x277cf5, _0x161a1b) {
      _0x28d7c3 || _0x12ef8c.test(_0x2b032b) ? _0x429827(_0x2b032b, _0x161a1b) : _0x5ebafa(_0x2b032b + '[' + ('object' == typeof _0x161a1b && null != _0x161a1b ? _0x277cf5 : '') + ']', _0x161a1b, _0x28d7c3, _0x429827);
    });else {
      if (_0x28d7c3 || 'object' !== _0x394016(_0x2f0198)) _0x429827(_0x2b032b, _0x2f0198);else {
        for (_0x5e2988 in _0x2f0198) _0x5ebafa(_0x2b032b + '[' + _0x5e2988 + ']', _0x2f0198[_0x5e2988], _0x28d7c3, _0x429827);
      }
    }
  }
  function _0x467985(_0x589bfe) {
    return function (_0x3101b6, _0x4caadf) {
      'string' != typeof _0x3101b6 && (_0x4caadf = _0x3101b6, _0x3101b6 = '*');
      var _0x3a7849,
        _0x9c920f = 0x0,
        _0x7b7e71 = _0x3101b6.toLowerCase().match(_0x513902) || [];
      if (_0x5cc277(_0x4caadf)) {
        for (; _0x3a7849 = _0x7b7e71[_0x9c920f++];) '+' === _0x3a7849[0x0] ? (_0x3a7849 = _0x3a7849.slice(0x1) || '*', (_0x589bfe[_0x3a7849] = _0x589bfe[_0x3a7849] || []).unshift(_0x4caadf)) : (_0x589bfe[_0x3a7849] = _0x589bfe[_0x3a7849] || []).push(_0x4caadf);
      }
    };
  }
  function _0x33608c(_0x2b9f38, _0x44c3a6, _0x32703e, _0x52d8c9) {
    function _0x2e2963(_0x5a52fa) {
      var _0x463b2a;
      return _0x57278f[_0x5a52fa] = !0x0, _0x4afe76.each(_0x2b9f38[_0x5a52fa] || [], function (_0x397801, _0x22f1e9) {
        var _0xf33c58 = _0x22f1e9(_0x44c3a6, _0x32703e, _0x52d8c9);
        return 'string' != typeof _0xf33c58 || _0xcce65d || _0x57278f[_0xf33c58] ? _0xcce65d ? !(_0x463b2a = _0xf33c58) : void 0x0 : (_0x44c3a6.dataTypes.unshift(_0xf33c58), _0x2e2963(_0xf33c58), !0x1);
      }), _0x463b2a;
    }
    var _0x57278f = {},
      _0xcce65d = _0x2b9f38 === _0x1de901;
    return _0x2e2963(_0x44c3a6.dataTypes[0x0]) || !_0x57278f['*'] && _0x2e2963('*');
  }
  function _0x19037e(_0x3918ab, _0x3a9687) {
    var _0x1c4309,
      _0x44fb31,
      _0xf2f6e5 = _0x4afe76.ajaxSettings.flatOptions || {};
    for (_0x1c4309 in _0x3a9687) void 0x0 !== _0x3a9687[_0x1c4309] && ((_0xf2f6e5[_0x1c4309] ? _0x3918ab : _0x44fb31 || (_0x44fb31 = {}))[_0x1c4309] = _0x3a9687[_0x1c4309]);
    return _0x44fb31 && _0x4afe76.extend(!0x0, _0x3918ab, _0x44fb31), _0x3918ab;
  }
  var _0x3d3248 = [],
    _0x2da04f = Object.getPrototypeOf,
    _0xcf045f = _0x3d3248.slice,
    _0x3a6037 = _0x3d3248.flat ? function (_0x267fda) {
      return _0x3d3248.flat.call(_0x267fda);
    } : function (_0x220338) {
      return _0x3d3248.concat.apply([], _0x220338);
    },
    _0x4b1721 = _0x3d3248.push,
    _0x4db018 = _0x3d3248.indexOf,
    _0x898377 = {},
    _0x508122 = _0x898377.toString,
    _0x4f2eb2 = _0x898377.hasOwnProperty,
    _0x1cd039 = _0x4f2eb2.toString,
    _0x598099 = _0x1cd039.call(Object),
    _0x36059a = {},
    _0x5cc277 = function (_0x2e0c1a) {
      return 'function' == typeof _0x2e0c1a && 'number' != typeof _0x2e0c1a.nodeType && 'function' != typeof _0x2e0c1a.item;
    },
    _0x2587ee = function (_0x2a58ad) {
      return null != _0x2a58ad && _0x2a58ad === _0x2a58ad.window;
    },
    _0xefa3a6 = _0x43f1db.document,
    _0xc56251 = {
      'type': !0x0,
      'src': !0x0,
      'nonce': !0x0,
      'noModule': !0x0
    },
    _0x1c1876 = /HTML$/i,
    _0x4afe76 = function (_0x13c6ee, _0x23d414) {
      return new _0x4afe76.fn.init(_0x13c6ee, _0x23d414);
    };
  _0x4afe76.fn = _0x4afe76.prototype = {
    'jquery': '3.7.0',
    'constructor': _0x4afe76,
    'length': 0x0,
    'toArray': function () {
      return _0xcf045f.call(this);
    },
    'get': function (_0x3b7e87) {
      return null == _0x3b7e87 ? _0xcf045f.call(this) : 0x0 > _0x3b7e87 ? this[_0x3b7e87 + this.length] : this[_0x3b7e87];
    },
    'pushStack': function (_0x3ef907) {
      return _0x3ef907 = _0x4afe76.merge(this.constructor(), _0x3ef907), _0x3ef907.prevObject = this, _0x3ef907;
    },
    'each': function (_0x4bda13) {
      return _0x4afe76.each(this, _0x4bda13);
    },
    'map': function (_0x1358b7) {
      return this.pushStack(_0x4afe76.map(this, function (_0x689db, _0x3c21a1) {
        return _0x1358b7.call(_0x689db, _0x3c21a1, _0x689db);
      }));
    },
    'slice': function () {
      return this.pushStack(_0xcf045f.apply(this, arguments));
    },
    'first': function () {
      return this.eq(0x0);
    },
    'last': function () {
      return this.eq(-0x1);
    },
    'even': function () {
      return this.pushStack(_0x4afe76.grep(this, function (_0x37459a, _0x2ee138) {
        return (_0x2ee138 + 0x1) % 0x2;
      }));
    },
    'odd': function () {
      return this.pushStack(_0x4afe76.grep(this, function (_0x5f524e, _0x387535) {
        return _0x387535 % 0x2;
      }));
    },
    'eq': function (_0x21edf4) {
      var _0x4c3f8d = this.length;
      return _0x21edf4 = +_0x21edf4 + (0x0 > _0x21edf4 ? _0x4c3f8d : 0x0), this.pushStack(0x0 <= _0x21edf4 && _0x21edf4 < _0x4c3f8d ? [this[_0x21edf4]] : []);
    },
    'end': function () {
      return this.prevObject || this.constructor();
    },
    'push': _0x4b1721,
    'sort': _0x3d3248.sort,
    'splice': _0x3d3248.splice
  }, _0x4afe76.extend = _0x4afe76.fn.extend = function () {
    var _0x3dc65a,
      _0x4991d2,
      _0x1d5165,
      _0x2fc1e7,
      _0x35e37e,
      _0x51d2aa,
      _0x988155 = arguments[0x0] || {},
      _0x2588ac = 0x1,
      _0x4a2fca = arguments.length,
      _0x106d7d = !0x1;
    'boolean' == typeof _0x988155 && (_0x106d7d = _0x988155, _0x988155 = arguments[_0x2588ac] || {}, _0x2588ac++), 'object' == typeof _0x988155 || _0x5cc277(_0x988155) || (_0x988155 = {});
    for (_0x2588ac === _0x4a2fca && (_0x988155 = this, _0x2588ac--); _0x2588ac < _0x4a2fca; _0x2588ac++) if (null != (_0x3dc65a = arguments[_0x2588ac])) {
      for (_0x4991d2 in _0x3dc65a) _0x2fc1e7 = _0x3dc65a[_0x4991d2], '__proto__' !== _0x4991d2 && _0x988155 !== _0x2fc1e7 && (_0x106d7d && _0x2fc1e7 && (_0x4afe76.isPlainObject(_0x2fc1e7) || (_0x35e37e = Array.isArray(_0x2fc1e7))) ? (_0x1d5165 = _0x988155[_0x4991d2], _0x51d2aa = _0x35e37e && !Array.isArray(_0x1d5165) ? [] : _0x35e37e || _0x4afe76.isPlainObject(_0x1d5165) ? _0x1d5165 : {}, _0x35e37e = !0x1, _0x988155[_0x4991d2] = _0x4afe76.extend(_0x106d7d, _0x51d2aa, _0x2fc1e7)) : void 0x0 !== _0x2fc1e7 && (_0x988155[_0x4991d2] = _0x2fc1e7));
    }
    return _0x988155;
  }, _0x4afe76.extend({
    'expando': 'jQuery' + ('3.7.0' + Math.random()).replace(/\D/g, ''),
    'isReady': !0x0,
    'error': function (_0x194506) {
      throw Error(_0x194506);
    },
    'noop': function () {},
    'isPlainObject': function (_0x4f07a7) {
      var _0xfb2005, _0x25a9c5;
      return !(!_0x4f07a7 || "[object Object]" !== _0x508122.call(_0x4f07a7)) && (!(_0xfb2005 = _0x2da04f(_0x4f07a7)) || 'function' == typeof (_0x25a9c5 = _0x4f2eb2.call(_0xfb2005, 'constructor') && _0xfb2005.constructor) && _0x1cd039.call(_0x25a9c5) === _0x598099);
    },
    'isEmptyObject': function (_0x3c4d65) {
      for (var _0x543168 in _0x3c4d65) return !0x1;
      return !0x0;
    },
    'globalEval': function (_0x1defb9, _0x50765d, _0x30aa21) {
      _0x5b64fe(_0x1defb9, {
        'nonce': _0x50765d && _0x50765d.nonce
      }, _0x30aa21);
    },
    'each': function (_0x5a581b, _0x291e32) {
      var _0x5098b5,
        _0x2680c8 = 0x0;
      if (_0x25c71f(_0x5a581b)) {
        for (_0x5098b5 = _0x5a581b.length; _0x2680c8 < _0x5098b5 && !0x1 !== _0x291e32.call(_0x5a581b[_0x2680c8], _0x2680c8, _0x5a581b[_0x2680c8]); _0x2680c8++);
      } else {
        for (_0x2680c8 in _0x5a581b) if (!0x1 === _0x291e32.call(_0x5a581b[_0x2680c8], _0x2680c8, _0x5a581b[_0x2680c8])) break;
      }
      return _0x5a581b;
    },
    'text': function (_0x2fe642) {
      var _0x3612c9,
        _0x2be15e = '',
        _0x178bbd = 0x0;
      if (_0x3612c9 = _0x2fe642.nodeType) {
        if (0x1 === _0x3612c9 || 0x9 === _0x3612c9 || 0xb === _0x3612c9) return _0x2fe642.textContent;
        if (0x3 === _0x3612c9 || 0x4 === _0x3612c9) return _0x2fe642.nodeValue;
      } else {
        for (; _0x3612c9 = _0x2fe642[_0x178bbd++];) _0x2be15e += _0x4afe76.text(_0x3612c9);
      }
      return _0x2be15e;
    },
    'makeArray': function (_0x3c5d1c, _0x2cc33f) {
      var _0x35c619 = _0x2cc33f || [];
      return null != _0x3c5d1c && (_0x25c71f(Object(_0x3c5d1c)) ? _0x4afe76.merge(_0x35c619, 'string' == typeof _0x3c5d1c ? [_0x3c5d1c] : _0x3c5d1c) : _0x4b1721.call(_0x35c619, _0x3c5d1c)), _0x35c619;
    },
    'inArray': function (_0x2e790c, _0x3fcd0e, _0x324ee3) {
      return null == _0x3fcd0e ? -0x1 : _0x4db018.call(_0x3fcd0e, _0x2e790c, _0x324ee3);
    },
    'isXMLDoc': function (_0x35560a) {
      var _0x3d1ce3 = _0x35560a && (_0x35560a.ownerDocument || _0x35560a).documentElement;
      return !_0x1c1876.test(_0x35560a && _0x35560a.namespaceURI || _0x3d1ce3 && _0x3d1ce3.nodeName || 'HTML');
    },
    'merge': function (_0x50a050, _0x1ffe93) {
      for (var _0x24e226 = +_0x1ffe93.length, _0x624fa3 = 0x0, _0x102114 = _0x50a050.length; _0x624fa3 < _0x24e226; _0x624fa3++) _0x50a050[_0x102114++] = _0x1ffe93[_0x624fa3];
      return _0x50a050.length = _0x102114, _0x50a050;
    },
    'grep': function (_0x2744d6, _0x9b0613, _0xf07ffe) {
      var _0x487386 = [],
        _0x335403 = 0x0,
        _0x37082a = _0x2744d6.length;
      for (_0xf07ffe = !_0xf07ffe; _0x335403 < _0x37082a; _0x335403++) !_0x9b0613(_0x2744d6[_0x335403], _0x335403) !== _0xf07ffe && _0x487386.push(_0x2744d6[_0x335403]);
      return _0x487386;
    },
    'map': function (_0x591a5e, _0x2c5b17, _0x179be4) {
      var _0x24d5a5,
        _0x62afa4,
        _0x16bd3d = 0x0,
        _0x551b9e = [];
      if (_0x25c71f(_0x591a5e)) {
        for (_0x24d5a5 = _0x591a5e.length; _0x16bd3d < _0x24d5a5; _0x16bd3d++) null != (_0x62afa4 = _0x2c5b17(_0x591a5e[_0x16bd3d], _0x16bd3d, _0x179be4)) && _0x551b9e.push(_0x62afa4);
      } else {
        for (_0x16bd3d in _0x591a5e) null != (_0x62afa4 = _0x2c5b17(_0x591a5e[_0x16bd3d], _0x16bd3d, _0x179be4)) && _0x551b9e.push(_0x62afa4);
      }
      return _0x3a6037(_0x551b9e);
    },
    'guid': 0x1,
    'support': _0x36059a
  }), 'function' == typeof Symbol && (_0x4afe76.fn[Symbol.iterator] = _0x3d3248[Symbol.iterator]), _0x4afe76.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_0x2e82d9, _0x296225) {
    _0x898377["[object " + _0x296225 + ']'] = _0x296225.toLowerCase();
  });
  var _0x34b6b8 = _0x3d3248.pop,
    _0x4b3063 = _0x3d3248.sort,
    _0x54b1c3 = _0x3d3248.splice,
    _0x3bcb76 = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g;
  _0x4afe76.contains = function (_0x3b13a6, _0x587492) {
    var _0x24be25 = _0x587492 && _0x587492.parentNode;
    return _0x3b13a6 === _0x24be25 || !(!_0x24be25 || 0x1 !== _0x24be25.nodeType || !(_0x3b13a6.contains ? _0x3b13a6.contains(_0x24be25) : _0x3b13a6.compareDocumentPosition && 0x10 & _0x3b13a6.compareDocumentPosition(_0x24be25)));
  };
  var _0x24b9de = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  _0x4afe76.escapeSelector = function (_0x35c7ca) {
    return (_0x35c7ca + '').replace(_0x24b9de, _0x3a85f2);
  };
  var _0x1624cd = _0xefa3a6,
    _0x36b07e = function (_0x83ec3c, _0x57be85, _0x585d52, _0x1583bd) {
      var _0x4aa28d,
        _0x2972f7,
        _0x2b9acd,
        _0x2ce4f9,
        _0x5345bb,
        _0x264920 = _0x57be85 && _0x57be85.ownerDocument;
      _0x2972f7 = _0x57be85 ? _0x57be85.nodeType : 0x9;
      if (_0x585d52 = _0x585d52 || [], 'string' != typeof _0x83ec3c || !_0x83ec3c || 0x1 !== _0x2972f7 && 0x9 !== _0x2972f7 && 0xb !== _0x2972f7) return _0x585d52;
      if (!_0x1583bd && (_0x13e18a(_0x57be85), _0x57be85 = _0x57be85 || _0x2e9967, _0x309624)) {
        if (0xb !== _0x2972f7 && (_0x5345bb = _0x2b1464.exec(_0x83ec3c))) {
          if (_0x4aa28d = _0x5345bb[0x1]) {
            if (0x9 === _0x2972f7) {
              if (!(_0x2b9acd = _0x57be85.getElementById(_0x4aa28d))) return _0x585d52;
              if (_0x2b9acd.id === _0x4aa28d) return _0x4c5332.call(_0x585d52, _0x2b9acd), _0x585d52;
            } else {
              if (_0x264920 && (_0x2b9acd = _0x264920.getElementById(_0x4aa28d)) && _0x36b07e.contains(_0x57be85, _0x2b9acd) && _0x2b9acd.id === _0x4aa28d) return _0x4c5332.call(_0x585d52, _0x2b9acd), _0x585d52;
            }
          } else {
            if (_0x5345bb[0x2]) return _0x4c5332.apply(_0x585d52, _0x57be85.getElementsByTagName(_0x83ec3c)), _0x585d52;
            if ((_0x4aa28d = _0x5345bb[0x3]) && _0x57be85.getElementsByClassName) return _0x4c5332.apply(_0x585d52, _0x57be85.getElementsByClassName(_0x4aa28d)), _0x585d52;
          }
        }
        if (!(_0x41695e[_0x83ec3c + " "] || _0x355569 && _0x355569.test(_0x83ec3c))) {
          if (_0x4aa28d = _0x83ec3c, _0x264920 = _0x57be85, 0x1 === _0x2972f7 && (_0x3c0ce8.test(_0x83ec3c) || _0x27de61.test(_0x83ec3c))) {
            (_0x264920 = _0x11810f.test(_0x83ec3c) && _0x518e4f(_0x57be85.parentNode) || _0x57be85) == _0x57be85 && _0x36059a.scope || ((_0x2ce4f9 = _0x57be85.getAttribute('id')) ? _0x2ce4f9 = _0x4afe76.escapeSelector(_0x2ce4f9) : _0x57be85.setAttribute('id', _0x2ce4f9 = _0x211637));
            for (_0x2972f7 = (_0x4aa28d = _0x4ac549(_0x83ec3c)).length; _0x2972f7--;) _0x4aa28d[_0x2972f7] = (_0x2ce4f9 ? '#' + _0x2ce4f9 : ':scope') + " " + _0x32a516(_0x4aa28d[_0x2972f7]);
            _0x4aa28d = _0x4aa28d.join(',');
          }
          try {
            return _0x4c5332.apply(_0x585d52, _0x264920.querySelectorAll(_0x4aa28d)), _0x585d52;
          } catch (_0x7b015b) {
            _0x41695e(_0x83ec3c, !0x0);
          } finally {
            _0x2ce4f9 === _0x211637 && _0x57be85.removeAttribute('id');
          }
        }
      }
      return _0xd0ca21(_0x83ec3c.replace(_0x3bcb76, '$1'), _0x57be85, _0x585d52, _0x1583bd);
    },
    _0x2996d0 = function () {
      var _0x280615 = [];
      return function _0x20f630(_0xe2fab5, _0x671f03) {
        return _0x280615.push(_0xe2fab5 + " ") > _0x100efb.cacheLength && delete _0x20f630[_0x280615.shift()], _0x20f630[_0xe2fab5 + " "] = _0x671f03;
      };
    },
    _0x3a87fb = function (_0x224853) {
      return _0x224853[_0x211637] = !0x0, _0x224853;
    },
    _0x44088a = function (_0x2863cb) {
      var _0x264d88 = _0x2e9967.createElement('fieldset');
      try {
        return !!_0x2863cb(_0x264d88);
      } catch (_0x429835) {
        return !0x1;
      } finally {
        _0x264d88.parentNode && _0x264d88.parentNode.removeChild(_0x264d88);
      }
    },
    _0x1322a6 = function (_0x5bfc20) {
      return function (_0x54dce6) {
        return _0x3238c8(_0x54dce6, 'input') && _0x54dce6.type === _0x5bfc20;
      };
    },
    _0x2b79c9 = function (_0x43623c) {
      return function (_0x37d7b0) {
        return (_0x3238c8(_0x37d7b0, 'input') || _0x3238c8(_0x37d7b0, 'button')) && _0x37d7b0.type === _0x43623c;
      };
    },
    _0x295e09 = function (_0x160190) {
      return function (_0x51e872) {
        return 'form' in _0x51e872 ? _0x51e872.parentNode && !0x1 === _0x51e872.disabled ? 'label' in _0x51e872 ? 'label' in _0x51e872.parentNode ? _0x51e872.parentNode.disabled === _0x160190 : _0x51e872.disabled === _0x160190 : _0x51e872.isDisabled === _0x160190 || _0x51e872.isDisabled !== !_0x160190 && _0x1ba1e5(_0x51e872) === _0x160190 : _0x51e872.disabled === _0x160190 : 'label' in _0x51e872 && _0x51e872.disabled === _0x160190;
      };
    },
    _0x2b8567 = function (_0x52da46) {
      return _0x3a87fb(function (_0x38c564) {
        return _0x38c564 = +_0x38c564, _0x3a87fb(function (_0x32c37d, _0x1d3bcf) {
          for (var _0x5254ad, _0x1de362 = _0x52da46([], _0x32c37d.length, _0x38c564), _0x1b7615 = _0x1de362.length; _0x1b7615--;) _0x32c37d[_0x5254ad = _0x1de362[_0x1b7615]] && (_0x32c37d[_0x5254ad] = !(_0x1d3bcf[_0x5254ad] = _0x32c37d[_0x5254ad]));
        });
      });
    },
    _0x518e4f = function (_0x40113a) {
      return _0x40113a && 'undefined' != typeof _0x40113a.getElementsByTagName && _0x40113a;
    },
    _0x13e18a = function (_0x182f76) {
      var _0x1fc477;
      return _0x182f76 = _0x182f76 ? _0x182f76.ownerDocument || _0x182f76 : _0x1624cd, _0x182f76 != _0x2e9967 && 0x9 === _0x182f76.nodeType && _0x182f76.documentElement && (_0x1e4740 = (_0x2e9967 = _0x182f76).documentElement, _0x309624 = !_0x4afe76.isXMLDoc(_0x2e9967), _0x237d52 = _0x1e4740.matches || _0x1e4740.webkitMatchesSelector || _0x1e4740.msMatchesSelector, _0x1624cd != _0x2e9967 && (_0x1fc477 = _0x2e9967.defaultView) && _0x1fc477.top !== _0x1fc477 && _0x1fc477.addEventListener('unload', _0x1e0c2c), _0x36059a.getById = _0x44088a(function (_0x4ea876) {
        return _0x1e4740.appendChild(_0x4ea876).id = _0x4afe76.expando, !_0x2e9967.getElementsByName || !_0x2e9967.getElementsByName(_0x4afe76.expando).length;
      }), _0x36059a.disconnectedMatch = _0x44088a(function (_0x3ee8a6) {
        return _0x237d52.call(_0x3ee8a6, '*');
      }), _0x36059a.scope = _0x44088a(function () {
        return _0x2e9967.querySelectorAll(':scope');
      }), _0x36059a.cssHas = _0x44088a(function () {
        try {
          return _0x2e9967.querySelector(':has(*,:jqfake)'), !0x1;
        } catch (_0x58841a) {
          return !0x0;
        }
      }), _0x36059a.getById ? (_0x100efb.filter.ID = function (_0x45317f) {
        var _0xa5f387 = _0x45317f.replace(_0x16e1e8, _0xb7d8b2);
        return function (_0x5842c4) {
          return _0x5842c4.getAttribute('id') === _0xa5f387;
        };
      }, _0x100efb.find.ID = function (_0x3ded9b, _0x48044f) {
        if ('undefined' != typeof _0x48044f.getElementById && _0x309624) {
          var _0x5c7ee2 = _0x48044f.getElementById(_0x3ded9b);
          return _0x5c7ee2 ? [_0x5c7ee2] : [];
        }
      }) : (_0x100efb.filter.ID = function (_0x44b13b) {
        var _0x13fc00 = _0x44b13b.replace(_0x16e1e8, _0xb7d8b2);
        return function (_0x53920b) {
          return (_0x53920b = 'undefined' != typeof _0x53920b.getAttributeNode && _0x53920b.getAttributeNode('id')) && _0x53920b.value === _0x13fc00;
        };
      }, _0x100efb.find.ID = function (_0x6d0a55, _0x390d40) {
        if ('undefined' != typeof _0x390d40.getElementById && _0x309624) {
          var _0x3b2024,
            _0x59f222,
            _0x3d611a,
            _0x46f5a4 = _0x390d40.getElementById(_0x6d0a55);
          if (_0x46f5a4) {
            if ((_0x3b2024 = _0x46f5a4.getAttributeNode('id')) && _0x3b2024.value === _0x6d0a55) return [_0x46f5a4];
            _0x3d611a = _0x390d40.getElementsByName(_0x6d0a55);
            for (_0x59f222 = 0x0; _0x46f5a4 = _0x3d611a[_0x59f222++];) if ((_0x3b2024 = _0x46f5a4.getAttributeNode('id')) && _0x3b2024.value === _0x6d0a55) return [_0x46f5a4];
          }
          return [];
        }
      }), _0x100efb.find.TAG = function (_0x415ecc, _0x5400a3) {
        return 'undefined' != typeof _0x5400a3.getElementsByTagName ? _0x5400a3.getElementsByTagName(_0x415ecc) : _0x5400a3.querySelectorAll(_0x415ecc);
      }, _0x100efb.find.CLASS = function (_0x277031, _0x1e696a) {
        if ('undefined' != typeof _0x1e696a.getElementsByClassName && _0x309624) return _0x1e696a.getElementsByClassName(_0x277031);
      }, _0x355569 = [], _0x44088a(function (_0x41f86c) {
        var _0x4a5204;
        _0x1e4740.appendChild(_0x41f86c).innerHTML = "<a id='" + _0x211637 + "' href='' disabled='disabled'></a><select id='" + _0x211637 + "-\r\\' disabled='disabled'><option selected=''></option></select>", _0x41f86c.querySelectorAll('[selected]').length || _0x355569.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + _0x3e9d0a + ')'), _0x41f86c.querySelectorAll('[id~=' + _0x211637 + '-]').length || _0x355569.push('~='), _0x41f86c.querySelectorAll('a#' + _0x211637 + '+*').length || _0x355569.push('.#.+[+~]'), _0x41f86c.querySelectorAll(':checked').length || _0x355569.push(':checked'), (_0x4a5204 = _0x2e9967.createElement('input')).setAttribute('type', 'hidden'), _0x41f86c.appendChild(_0x4a5204).setAttribute('name', 'D'), _0x1e4740.appendChild(_0x41f86c).disabled = !0x0, 0x2 !== _0x41f86c.querySelectorAll(':disabled').length && _0x355569.push(':enabled', ':disabled'), (_0x4a5204 = _0x2e9967.createElement('input')).setAttribute('name', ''), _0x41f86c.appendChild(_0x4a5204), _0x41f86c.querySelectorAll("[name='']").length || _0x355569.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
      }), _0x36059a.cssHas || _0x355569.push(':has'), _0x355569 = _0x355569.length && RegExp(_0x355569.join('|')), _0x348f0e = function (_0x3dff04, _0x4538fc) {
        if (_0x3dff04 === _0x4538fc) return _0x2d7389 = !0x0, 0x0;
        var _0x1e9be3 = !_0x3dff04.compareDocumentPosition - !_0x4538fc.compareDocumentPosition;
        return _0x1e9be3 || (0x1 & (_0x1e9be3 = (_0x3dff04.ownerDocument || _0x3dff04) == (_0x4538fc.ownerDocument || _0x4538fc) ? _0x3dff04.compareDocumentPosition(_0x4538fc) : 0x1) || !_0x36059a.sortDetached && _0x4538fc.compareDocumentPosition(_0x3dff04) === _0x1e9be3 ? _0x3dff04 === _0x2e9967 || _0x3dff04.ownerDocument == _0x1624cd && _0x36b07e.contains(_0x1624cd, _0x3dff04) ? -0x1 : _0x4538fc === _0x2e9967 || _0x4538fc.ownerDocument == _0x1624cd && _0x36b07e.contains(_0x1624cd, _0x4538fc) ? 0x1 : _0x21f55a ? _0x4db018.call(_0x21f55a, _0x3dff04) - _0x4db018.call(_0x21f55a, _0x4538fc) : 0x0 : 0x4 & _0x1e9be3 ? -0x1 : 0x1);
      }), _0x2e9967;
    },
    _0x32e174 = function () {},
    _0x4ac549 = function (_0x4b81ef, _0x59ce7f) {
      var _0x595d6f, _0x588c59, _0x4d84d6, _0x55c58d, _0x16edef, _0x21090d, _0x41341e;
      if (_0x16edef = _0x1589e5[_0x4b81ef + " "]) return _0x59ce7f ? 0x0 : _0x16edef.slice(0x0);
      _0x16edef = _0x4b81ef, _0x21090d = [];
      for (_0x41341e = _0x100efb.preFilter; _0x16edef;) {
        for (_0x55c58d in _0x595d6f && !(_0x588c59 = _0x419c0a.exec(_0x16edef)) || (_0x588c59 && (_0x16edef = _0x16edef.slice(_0x588c59[0x0].length) || _0x16edef), _0x21090d.push(_0x4d84d6 = [])), _0x595d6f = !0x1, (_0x588c59 = _0x27de61.exec(_0x16edef)) && (_0x595d6f = _0x588c59.shift(), _0x4d84d6.push({
          'value': _0x595d6f,
          'type': _0x588c59[0x0].replace(_0x3bcb76, " ")
        }), _0x16edef = _0x16edef.slice(_0x595d6f.length)), _0x100efb.filter) !(_0x588c59 = _0x3fac76[_0x55c58d].exec(_0x16edef)) || _0x41341e[_0x55c58d] && !(_0x588c59 = _0x41341e[_0x55c58d](_0x588c59)) || (_0x595d6f = _0x588c59.shift(), _0x4d84d6.push({
          'value': _0x595d6f,
          'type': _0x55c58d,
          'matches': _0x588c59
        }), _0x16edef = _0x16edef.slice(_0x595d6f.length));
        if (!_0x595d6f) break;
      }
      return _0x59ce7f ? _0x16edef.length : _0x16edef ? _0x36b07e.error(_0x4b81ef) : _0x1589e5(_0x4b81ef, _0x21090d).slice(0x0);
    },
    _0x32a516 = function (_0x548b54) {
      for (var _0x403a7e = 0x0, _0x23cfa2 = _0x548b54.length, _0x126c8d = ''; _0x403a7e < _0x23cfa2; _0x403a7e++) _0x126c8d += _0x548b54[_0x403a7e].value;
      return _0x126c8d;
    },
    _0x30f1f2 = function (_0x4414d6, _0x165bc7, _0x41dff5) {
      var _0x220086 = _0x165bc7.dir,
        _0x2a8903 = _0x165bc7.next,
        _0x282199 = _0x2a8903 || _0x220086,
        _0x1fe732 = _0x41dff5 && 'parentNode' === _0x282199,
        _0x2be8ae = _0x301793++;
      return _0x165bc7.first ? function (_0x1000cf, _0x24d022, _0x45d45c) {
        for (; _0x1000cf = _0x1000cf[_0x220086];) if (0x1 === _0x1000cf.nodeType || _0x1fe732) return _0x4414d6(_0x1000cf, _0x24d022, _0x45d45c);
        return !0x1;
      } : function (_0x4d6aca, _0x14f897, _0x21b35e) {
        var _0x236ec7,
          _0x501b1f,
          _0x18b057 = [_0x217b3c, _0x2be8ae];
        if (_0x21b35e) for (; _0x4d6aca = _0x4d6aca[_0x220086];) {
          if ((0x1 === _0x4d6aca.nodeType || _0x1fe732) && _0x4414d6(_0x4d6aca, _0x14f897, _0x21b35e)) return !0x0;
        } else {
          for (; _0x4d6aca = _0x4d6aca[_0x220086];) if (0x1 === _0x4d6aca.nodeType || _0x1fe732) {
            if (_0x501b1f = _0x4d6aca[_0x211637] || (_0x4d6aca[_0x211637] = {}), _0x2a8903 && _0x3238c8(_0x4d6aca, _0x2a8903)) _0x4d6aca = _0x4d6aca[_0x220086] || _0x4d6aca;else {
              if ((_0x236ec7 = _0x501b1f[_0x282199]) && _0x236ec7[0x0] === _0x217b3c && _0x236ec7[0x1] === _0x2be8ae) return _0x18b057[0x2] = _0x236ec7[0x2];
              if ((_0x501b1f[_0x282199] = _0x18b057)[0x2] = _0x4414d6(_0x4d6aca, _0x14f897, _0x21b35e)) return !0x0;
            }
          }
        }
        return !0x1;
      };
    },
    _0x2ab425 = function (_0x5af4b4) {
      return 0x1 < _0x5af4b4.length ? function (_0xc1fdb2, _0x474eb4, _0x3139bd) {
        for (var _0x580087 = _0x5af4b4.length; _0x580087--;) if (!_0x5af4b4[_0x580087](_0xc1fdb2, _0x474eb4, _0x3139bd)) return !0x1;
        return !0x0;
      } : _0x5af4b4[0x0];
    },
    _0x5882d7 = function (_0x3ca111, _0x507ee9, _0x529478, _0x36d683, _0x5745b2) {
      for (var _0x1d1455, _0x3a4cb5 = [], _0x45a76e = 0x0, _0x18357e = _0x3ca111.length, _0x56a063 = null != _0x507ee9; _0x45a76e < _0x18357e; _0x45a76e++) (_0x1d1455 = _0x3ca111[_0x45a76e]) && (_0x529478 && !_0x529478(_0x1d1455, _0x36d683, _0x5745b2) || (_0x3a4cb5.push(_0x1d1455), _0x56a063 && _0x507ee9.push(_0x45a76e)));
      return _0x3a4cb5;
    },
    _0x18a7f7 = function (_0x2014f4, _0x481073, _0x51b1e0, _0x3322c8, _0x543b8c, _0x41c7fe) {
      return _0x3322c8 && !_0x3322c8[_0x211637] && (_0x3322c8 = _0x18a7f7(_0x3322c8)), _0x543b8c && !_0x543b8c[_0x211637] && (_0x543b8c = _0x18a7f7(_0x543b8c, _0x41c7fe)), _0x3a87fb(function (_0x345828, _0x4004be, _0x1ac607, _0x140380) {
        var _0xef2096,
          _0x56805b,
          _0x46c3eb,
          _0x42334d = [],
          _0x2ec6df = [],
          _0x5e9050 = _0x4004be.length,
          _0x1b2bd7;
        if (!(_0x1b2bd7 = _0x345828)) {
          _0x1b2bd7 = _0x481073 || '*';
          for (var _0x4dffca = _0x1ac607.nodeType ? [_0x1ac607] : _0x1ac607, _0x4e8ec4 = [], _0xf15a7e = 0x0, _0x35b12e = _0x4dffca.length; _0xf15a7e < _0x35b12e; _0xf15a7e++) _0x36b07e(_0x1b2bd7, _0x4dffca[_0xf15a7e], _0x4e8ec4);
          _0x1b2bd7 = _0x4e8ec4;
        }
        _0x1b2bd7 = !_0x2014f4 || !_0x345828 && _0x481073 ? _0x1b2bd7 : _0x5882d7(_0x1b2bd7, _0x42334d, _0x2014f4, _0x1ac607, _0x140380);
        if (_0x51b1e0 ? _0x51b1e0(_0x1b2bd7, _0x46c3eb = _0x543b8c || (_0x345828 ? _0x2014f4 : _0x5e9050 || _0x3322c8) ? [] : _0x4004be, _0x1ac607, _0x140380) : _0x46c3eb = _0x1b2bd7, _0x3322c8) {
          _0xef2096 = _0x5882d7(_0x46c3eb, _0x2ec6df), _0x3322c8(_0xef2096, [], _0x1ac607, _0x140380);
          for (_0x1ac607 = _0xef2096.length; _0x1ac607--;) (_0x56805b = _0xef2096[_0x1ac607]) && (_0x46c3eb[_0x2ec6df[_0x1ac607]] = !(_0x1b2bd7[_0x2ec6df[_0x1ac607]] = _0x56805b));
        }
        if (_0x345828) {
          if (_0x543b8c || _0x2014f4) {
            if (_0x543b8c) {
              _0xef2096 = [];
              for (_0x1ac607 = _0x46c3eb.length; _0x1ac607--;) (_0x56805b = _0x46c3eb[_0x1ac607]) && _0xef2096.push(_0x1b2bd7[_0x1ac607] = _0x56805b);
              _0x543b8c(null, _0x46c3eb = [], _0xef2096, _0x140380);
            }
            for (_0x1ac607 = _0x46c3eb.length; _0x1ac607--;) (_0x56805b = _0x46c3eb[_0x1ac607]) && -0x1 < (_0xef2096 = _0x543b8c ? _0x4db018.call(_0x345828, _0x56805b) : _0x42334d[_0x1ac607]) && (_0x345828[_0xef2096] = !(_0x4004be[_0xef2096] = _0x56805b));
          }
        } else _0x46c3eb = _0x5882d7(_0x46c3eb === _0x4004be ? _0x46c3eb.splice(_0x5e9050, _0x46c3eb.length) : _0x46c3eb), _0x543b8c ? _0x543b8c(null, _0x4004be, _0x46c3eb, _0x140380) : _0x4c5332.apply(_0x4004be, _0x46c3eb);
      });
    },
    _0x5b9430 = function (_0xdb8248) {
      var _0x2cbf1b,
        _0x47c95f,
        _0x63d089,
        _0x42707d = _0xdb8248.length,
        _0x4ad17d = _0x100efb.relative[_0xdb8248[0x0].type];
      _0x47c95f = _0x4ad17d || _0x100efb.relative[" "];
      for (var _0x253f61 = _0x4ad17d ? 0x1 : 0x0, _0x41da70 = _0x30f1f2(function (_0x5bc49b) {
          return _0x5bc49b === _0x2cbf1b;
        }, _0x47c95f, !0x0), _0x4ce7c9 = _0x30f1f2(function (_0x41521b) {
          return -0x1 < _0x4db018.call(_0x2cbf1b, _0x41521b);
        }, _0x47c95f, !0x0), _0x2c975e = [function (_0x4f7d3c, _0x262f4d, _0x5e20cf) {
          return _0x4f7d3c = !_0x4ad17d && (_0x5e20cf || _0x262f4d != _0x16ef33) || ((_0x2cbf1b = _0x262f4d).nodeType ? _0x41da70(_0x4f7d3c, _0x262f4d, _0x5e20cf) : _0x4ce7c9(_0x4f7d3c, _0x262f4d, _0x5e20cf)), _0x2cbf1b = null, _0x4f7d3c;
        }]; _0x253f61 < _0x42707d; _0x253f61++) if (_0x47c95f = _0x100efb.relative[_0xdb8248[_0x253f61].type]) _0x2c975e = [_0x30f1f2(_0x2ab425(_0x2c975e), _0x47c95f)];else {
        if ((_0x47c95f = _0x100efb.filter[_0xdb8248[_0x253f61].type].apply(null, _0xdb8248[_0x253f61].matches))[_0x211637]) {
          for (_0x63d089 = ++_0x253f61; _0x63d089 < _0x42707d && !_0x100efb.relative[_0xdb8248[_0x63d089].type]; _0x63d089++);
          return _0x18a7f7(0x1 < _0x253f61 && _0x2ab425(_0x2c975e), 0x1 < _0x253f61 && _0x32a516(_0xdb8248.slice(0x0, _0x253f61 - 0x1).concat({
            'value': " " === _0xdb8248[_0x253f61 - 0x2].type ? '*' : ''
          })).replace(_0x3bcb76, '$1'), _0x47c95f, _0x253f61 < _0x63d089 && _0x5b9430(_0xdb8248.slice(_0x253f61, _0x63d089)), _0x63d089 < _0x42707d && _0x5b9430(_0xdb8248 = _0xdb8248.slice(_0x63d089)), _0x63d089 < _0x42707d && _0x32a516(_0xdb8248));
        }
        _0x2c975e.push(_0x47c95f);
      }
      return _0x2ab425(_0x2c975e);
    },
    _0x533be3 = function (_0x36fb05, _0x4a4fd4) {
      var _0x8e4cbc,
        _0x2aaaf2,
        _0x567ce8,
        _0x43deab,
        _0x38fb13 = [],
        _0x636706 = [],
        _0x426a09 = _0x2570b7[_0x36fb05 + " "];
      if (!_0x426a09) {
        _0x4a4fd4 || (_0x4a4fd4 = _0x4ac549(_0x36fb05));
        for (_0x8e4cbc = _0x4a4fd4.length; _0x8e4cbc--;) (_0x426a09 = _0x5b9430(_0x4a4fd4[_0x8e4cbc]))[_0x211637] ? _0x38fb13.push(_0x426a09) : _0x636706.push(_0x426a09);
        (_0x426a09 = _0x2570b7(_0x36fb05, (_0x2aaaf2 = 0x0 < _0x38fb13.length, _0x567ce8 = 0x0 < _0x636706.length, _0x43deab = function (_0x4f37a2, _0x1136a7, _0x11d10b, _0x21c98a, _0x2ae3a8) {
          var _0x3461f5,
            _0x4ce058,
            _0x4d8894,
            _0x469ab2 = 0x0,
            _0x46602a = '0',
            _0x1ddd23 = _0x4f37a2 && [],
            _0x522983 = [],
            _0x23d953 = _0x16ef33,
            _0x101df1 = _0x4f37a2 || _0x567ce8 && _0x100efb.find.TAG('*', _0x2ae3a8),
            _0x25b696 = _0x217b3c += null == _0x23d953 ? 0x1 : Math.random() || 0.1,
            _0x49d8a2 = _0x101df1.length;
          for (_0x2ae3a8 && (_0x16ef33 = _0x1136a7 == _0x2e9967 || _0x1136a7 || _0x2ae3a8); _0x46602a !== _0x49d8a2 && null != (_0x3461f5 = _0x101df1[_0x46602a]); _0x46602a++) {
            if (_0x567ce8 && _0x3461f5) {
              _0x4ce058 = 0x0;
              for (_0x1136a7 || _0x3461f5.ownerDocument == _0x2e9967 || (_0x13e18a(_0x3461f5), _0x11d10b = !_0x309624); _0x4d8894 = _0x636706[_0x4ce058++];) if (_0x4d8894(_0x3461f5, _0x1136a7 || _0x2e9967, _0x11d10b)) {
                _0x4c5332.call(_0x21c98a, _0x3461f5);
                break;
              }
              _0x2ae3a8 && (_0x217b3c = _0x25b696);
            }
            _0x2aaaf2 && ((_0x3461f5 = !_0x4d8894 && _0x3461f5) && _0x469ab2--, _0x4f37a2 && _0x1ddd23.push(_0x3461f5));
          }
          if (_0x469ab2 += _0x46602a, _0x2aaaf2 && _0x46602a !== _0x469ab2) {
            for (_0x4ce058 = 0x0; _0x4d8894 = _0x38fb13[_0x4ce058++];) _0x4d8894(_0x1ddd23, _0x522983, _0x1136a7, _0x11d10b);
            if (_0x4f37a2) {
              if (0x0 < _0x469ab2) {
                for (; _0x46602a--;) _0x1ddd23[_0x46602a] || _0x522983[_0x46602a] || (_0x522983[_0x46602a] = _0x34b6b8.call(_0x21c98a));
              }
              _0x522983 = _0x5882d7(_0x522983);
            }
            _0x4c5332.apply(_0x21c98a, _0x522983), _0x2ae3a8 && !_0x4f37a2 && 0x0 < _0x522983.length && 0x1 < _0x469ab2 + _0x38fb13.length && _0x4afe76.uniqueSort(_0x21c98a);
          }
          return _0x2ae3a8 && (_0x217b3c = _0x25b696, _0x16ef33 = _0x23d953), _0x1ddd23;
        }, _0x2aaaf2 ? _0x3a87fb(_0x43deab) : _0x43deab))).selector = _0x36fb05;
      }
      return _0x426a09;
    },
    _0xd0ca21 = function (_0x1a85a0, _0x45c04c, _0x326c10, _0x469326) {
      var _0x169070,
        _0x10797c,
        _0x2aadff,
        _0x58a4e1,
        _0x1ba389,
        _0x19b0d5 = 'function' == typeof _0x1a85a0 && _0x1a85a0,
        _0x2806b2 = !_0x469326 && _0x4ac549(_0x1a85a0 = _0x19b0d5.selector || _0x1a85a0);
      if (_0x326c10 = _0x326c10 || [], 0x1 === _0x2806b2.length) {
        if (0x2 < (_0x10797c = _0x2806b2[0x0] = _0x2806b2[0x0].slice(0x0)).length && 'ID' === (_0x2aadff = _0x10797c[0x0]).type && 0x9 === _0x45c04c.nodeType && _0x309624 && _0x100efb.relative[_0x10797c[0x1].type]) {
          if (!(_0x45c04c = (_0x100efb.find.ID(_0x2aadff.matches[0x0].replace(_0x16e1e8, _0xb7d8b2), _0x45c04c) || [])[0x0])) return _0x326c10;
          _0x19b0d5 && (_0x45c04c = _0x45c04c.parentNode), _0x1a85a0 = _0x1a85a0.slice(_0x10797c.shift().value.length);
        }
        for (_0x169070 = _0x3fac76.needsContext.test(_0x1a85a0) ? 0x0 : _0x10797c.length; _0x169070-- && !(_0x2aadff = _0x10797c[_0x169070], _0x100efb.relative[_0x58a4e1 = _0x2aadff.type]);) if ((_0x1ba389 = _0x100efb.find[_0x58a4e1]) && (_0x469326 = _0x1ba389(_0x2aadff.matches[0x0].replace(_0x16e1e8, _0xb7d8b2), _0x11810f.test(_0x10797c[0x0].type) && _0x518e4f(_0x45c04c.parentNode) || _0x45c04c))) {
          if (_0x10797c.splice(_0x169070, 0x1), !(_0x1a85a0 = _0x469326.length && _0x32a516(_0x10797c))) return _0x4c5332.apply(_0x326c10, _0x469326), _0x326c10;
          break;
        }
      }
      return (_0x19b0d5 || _0x533be3(_0x1a85a0, _0x2806b2))(_0x469326, _0x45c04c, !_0x309624, _0x326c10, !_0x45c04c || _0x11810f.test(_0x1a85a0) && _0x518e4f(_0x45c04c.parentNode) || _0x45c04c), _0x326c10;
    },
    _0x324084,
    _0x100efb,
    _0x16ef33,
    _0x21f55a,
    _0x2d7389,
    _0x2e9967,
    _0x1e4740,
    _0x309624,
    _0x355569,
    _0x237d52,
    _0x4c5332 = _0x4b1721,
    _0x211637 = _0x4afe76.expando,
    _0x217b3c = 0x0,
    _0x301793 = 0x0,
    _0x2bdc24 = _0x2996d0(),
    _0x1589e5 = _0x2996d0(),
    _0x2570b7 = _0x2996d0(),
    _0x41695e = _0x2996d0(),
    _0x348f0e = function (_0x295a4b, _0x25ae0e) {
      return _0x295a4b === _0x25ae0e && (_0x2d7389 = !0x0), 0x0;
    },
    _0x3e9d0a = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
    _0x4e1b80 = /[\x20\t\r\n\f]+/g,
    _0x419c0a = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
    _0x27de61 = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
    _0x3c0ce8 = /[\x20\t\r\n\f]|>/,
    _0xe15364 = RegExp(":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
    _0x2c5590 = /^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+$/,
    _0x3fac76 = {
      'ID': /^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
      'CLASS': /^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
      'TAG': /^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+|[*])/,
      'ATTR': RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
      'PSEUDO': RegExp("^:((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
      'CHILD': RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", 'i'),
      'bool': RegExp('^(?:' + _0x3e9d0a + ')$', 'i'),
      'needsContext': RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", 'i')
    },
    _0x150dc8 = /^(?:input|select|textarea|button)$/i,
    _0x3c9188 = /^h\d$/i,
    _0x2b1464 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    _0x11810f = /[+~]/,
    _0x16e1e8 = /\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\([^\r\n\f])/g,
    _0xb7d8b2 = function (_0x5a3555, _0xe23a9c) {
      var _0x4f750d = '0x' + _0x5a3555.slice(0x1) - 0x10000;
      return _0xe23a9c || (0x0 > _0x4f750d ? String.fromCharCode(_0x4f750d + 0x10000) : String.fromCharCode(_0x4f750d >> 0xa | 0xd800, 0x3ff & _0x4f750d | 0xdc00));
    },
    _0x1e0c2c = function () {
      _0x13e18a();
    },
    _0x1ba1e5 = _0x30f1f2(function (_0xe5d338) {
      return !0x0 === _0xe5d338.disabled && _0x3238c8(_0xe5d338, 'fieldset');
    }, {
      'dir': 'parentNode',
      'next': 'legend'
    });
  try {
    _0x4c5332.apply(_0x3d3248 = _0xcf045f.call(_0x1624cd.childNodes), _0x1624cd.childNodes), _0x3d3248[_0x1624cd.childNodes.length].nodeType;
  } catch (_0x4c50c5) {
    _0x4c5332 = {
      'apply': function (_0x5b82a9, _0x597aa0) {
        _0x4b1721.apply(_0x5b82a9, _0xcf045f.call(_0x597aa0));
      },
      'call': function (_0x49bd0e) {
        _0x4b1721.apply(_0x49bd0e, _0xcf045f.call(arguments, 0x1));
      }
    };
  }
  for (_0x324084 in _0x36b07e.matches = function (_0x1c01d7, _0x135aeb) {
    return _0x36b07e(_0x1c01d7, null, null, _0x135aeb);
  }, _0x36b07e.matchesSelector = function (_0x1a10cb, _0x1ec191) {
    if (_0x13e18a(_0x1a10cb), _0x309624 && !_0x41695e[_0x1ec191 + " "] && (!_0x355569 || !_0x355569.test(_0x1ec191))) try {
      var _0x4320af = _0x237d52.call(_0x1a10cb, _0x1ec191);
      if (_0x4320af || _0x36059a.disconnectedMatch || _0x1a10cb.document && 0xb !== _0x1a10cb.document.nodeType) return _0x4320af;
    } catch (_0x4df467) {
      _0x41695e(_0x1ec191, !0x0);
    }
    return 0x0 < _0x36b07e(_0x1ec191, _0x2e9967, null, [_0x1a10cb]).length;
  }, _0x36b07e.contains = function (_0x47aacc, _0x50cd5f) {
    return (_0x47aacc.ownerDocument || _0x47aacc) != _0x2e9967 && _0x13e18a(_0x47aacc), _0x4afe76.contains(_0x47aacc, _0x50cd5f);
  }, _0x36b07e.attr = function (_0x1519b7, _0x2d5b32) {
    (_0x1519b7.ownerDocument || _0x1519b7) != _0x2e9967 && _0x13e18a(_0x1519b7);
    var _0x5c3426 = _0x100efb.attrHandle[_0x2d5b32.toLowerCase()],
      _0x5c3426 = _0x5c3426 && _0x4f2eb2.call(_0x100efb.attrHandle, _0x2d5b32.toLowerCase()) ? _0x5c3426(_0x1519b7, _0x2d5b32, !_0x309624) : void 0x0;
    return void 0x0 !== _0x5c3426 ? _0x5c3426 : _0x1519b7.getAttribute(_0x2d5b32);
  }, _0x36b07e.error = function (_0x3e74ae) {
    throw Error("Syntax error, unrecognized expression: " + _0x3e74ae);
  }, _0x4afe76.uniqueSort = function (_0x13a84e) {
    var _0x51c738,
      _0x44a491 = [],
      _0x278f71 = 0x0,
      _0x33850d = 0x0;
    if (_0x2d7389 = !_0x36059a.sortStable, _0x21f55a = !_0x36059a.sortStable && _0xcf045f.call(_0x13a84e, 0x0), _0x4b3063.call(_0x13a84e, _0x348f0e), _0x2d7389) {
      for (; _0x51c738 = _0x13a84e[_0x33850d++];) _0x51c738 === _0x13a84e[_0x33850d] && (_0x278f71 = _0x44a491.push(_0x33850d));
      for (; _0x278f71--;) _0x54b1c3.call(_0x13a84e, _0x44a491[_0x278f71], 0x1);
    }
    return _0x21f55a = null, _0x13a84e;
  }, _0x4afe76.fn.uniqueSort = function () {
    return this.pushStack(_0x4afe76.uniqueSort(_0xcf045f.apply(this)));
  }, (_0x100efb = _0x4afe76.expr = {
    'cacheLength': 0x32,
    'createPseudo': _0x3a87fb,
    'match': _0x3fac76,
    'attrHandle': {},
    'find': {},
    'relative': {
      '>': {
        'dir': 'parentNode',
        'first': !0x0
      },
      " ": {
        'dir': 'parentNode'
      },
      '+': {
        'dir': 'previousSibling',
        'first': !0x0
      },
      '~': {
        'dir': 'previousSibling'
      }
    },
    'preFilter': {
      'ATTR': function (_0x591044) {
        return _0x591044[0x1] = _0x591044[0x1].replace(_0x16e1e8, _0xb7d8b2), _0x591044[0x3] = (_0x591044[0x3] || _0x591044[0x4] || _0x591044[0x5] || '').replace(_0x16e1e8, _0xb7d8b2), '~=' === _0x591044[0x2] && (_0x591044[0x3] = " " + _0x591044[0x3] + " "), _0x591044.slice(0x0, 0x4);
      },
      'CHILD': function (_0x429960) {
        return _0x429960[0x1] = _0x429960[0x1].toLowerCase(), 'nth' === _0x429960[0x1].slice(0x0, 0x3) ? (_0x429960[0x3] || _0x36b07e.error(_0x429960[0x0]), _0x429960[0x4] = +(_0x429960[0x4] ? _0x429960[0x5] + (_0x429960[0x6] || 0x1) : 0x2 * ('even' === _0x429960[0x3] || 'odd' === _0x429960[0x3])), _0x429960[0x5] = +(_0x429960[0x7] + _0x429960[0x8] || 'odd' === _0x429960[0x3])) : _0x429960[0x3] && _0x36b07e.error(_0x429960[0x0]), _0x429960;
      },
      'PSEUDO': function (_0x22ff04) {
        var _0x19ccf2,
          _0x45d338 = !_0x22ff04[0x6] && _0x22ff04[0x2];
        return _0x3fac76.CHILD.test(_0x22ff04[0x0]) ? null : (_0x22ff04[0x3] ? _0x22ff04[0x2] = _0x22ff04[0x4] || _0x22ff04[0x5] || '' : _0x45d338 && _0xe15364.test(_0x45d338) && (_0x19ccf2 = _0x4ac549(_0x45d338, !0x0)) && (_0x19ccf2 = _0x45d338.indexOf(')', _0x45d338.length - _0x19ccf2) - _0x45d338.length) && (_0x22ff04[0x0] = _0x22ff04[0x0].slice(0x0, _0x19ccf2), _0x22ff04[0x2] = _0x45d338.slice(0x0, _0x19ccf2)), _0x22ff04.slice(0x0, 0x3));
      }
    },
    'filter': {
      'TAG': function (_0x4487d7) {
        var _0x7604ce = _0x4487d7.replace(_0x16e1e8, _0xb7d8b2).toLowerCase();
        return '*' === _0x4487d7 ? function () {
          return !0x0;
        } : function (_0x2fc748) {
          return _0x3238c8(_0x2fc748, _0x7604ce);
        };
      },
      'CLASS': function (_0x50aba0) {
        var _0x228010 = _0x2bdc24[_0x50aba0 + " "];
        return _0x228010 || (_0x228010 = RegExp("(^|[\\x20\\t\\r\\n\\f])" + _0x50aba0 + "([\\x20\\t\\r\\n\\f]|$)")) && _0x2bdc24(_0x50aba0, function (_0x773bae) {
          return _0x228010.test('string' == typeof _0x773bae.className && _0x773bae.className || 'undefined' != typeof _0x773bae.getAttribute && _0x773bae.getAttribute('class') || '');
        });
      },
      'ATTR': function (_0x304fe8, _0x32c20e, _0x2d151e) {
        return function (_0x3e8059) {
          return _0x3e8059 = _0x36b07e.attr(_0x3e8059, _0x304fe8), null == _0x3e8059 ? '!=' === _0x32c20e : !_0x32c20e || (_0x3e8059 += '', '=' === _0x32c20e ? _0x3e8059 === _0x2d151e : '!=' === _0x32c20e ? _0x3e8059 !== _0x2d151e : '^=' === _0x32c20e ? _0x2d151e && 0x0 === _0x3e8059.indexOf(_0x2d151e) : '*=' === _0x32c20e ? _0x2d151e && -0x1 < _0x3e8059.indexOf(_0x2d151e) : '$=' === _0x32c20e ? _0x2d151e && _0x3e8059.slice(-_0x2d151e.length) === _0x2d151e : '~=' === _0x32c20e ? -0x1 < (" " + _0x3e8059.replace(_0x4e1b80, " ") + " ").indexOf(_0x2d151e) : '|=' === _0x32c20e && (_0x3e8059 === _0x2d151e || _0x3e8059.slice(0x0, _0x2d151e.length + 0x1) === _0x2d151e + '-'));
        };
      },
      'CHILD': function (_0x432aec, _0x3423d4, _0x476cf1, _0x37134f, _0x411155) {
        var _0x13ae42 = 'nth' !== _0x432aec.slice(0x0, 0x3),
          _0x2c12c1 = 'last' !== _0x432aec.slice(-0x4),
          _0x283181 = 'of-type' === _0x3423d4;
        return 0x1 === _0x37134f && 0x0 === _0x411155 ? function (_0xad57fc) {
          return !!_0xad57fc.parentNode;
        } : function (_0x153814, _0x4d2349, _0x44f8f3) {
          var _0x14eaab, _0x23139b, _0x388b0b, _0x25a868;
          _0x4d2349 = _0x13ae42 !== _0x2c12c1 ? 'nextSibling' : 'previousSibling';
          var _0x187935 = _0x153814.parentNode,
            _0x54cf11 = _0x283181 && _0x153814.nodeName.toLowerCase(),
            _0x26e4e8 = !_0x44f8f3 && !_0x283181,
            _0x4f3adc = !0x1;
          if (_0x187935) {
            if (_0x13ae42) {
              for (; _0x4d2349;) {
                for (_0x23139b = _0x153814; _0x23139b = _0x23139b[_0x4d2349];) if (_0x283181 ? _0x3238c8(_0x23139b, _0x54cf11) : 0x1 === _0x23139b.nodeType) return !0x1;
                _0x25a868 = _0x4d2349 = 'only' === _0x432aec && !_0x25a868 && 'nextSibling';
              }
              return !0x0;
            }
            if (_0x25a868 = [_0x2c12c1 ? _0x187935.firstChild : _0x187935.lastChild], _0x2c12c1 && _0x26e4e8) {
              _0x4f3adc = (_0x388b0b = (_0x14eaab = (_0x44f8f3 = _0x187935[_0x211637] || (_0x187935[_0x211637] = {}))[_0x432aec] || [])[0x0] === _0x217b3c && _0x14eaab[0x1]) && _0x14eaab[0x2];
              for (_0x23139b = _0x388b0b && _0x187935.childNodes[_0x388b0b]; _0x23139b = ++_0x388b0b && _0x23139b && _0x23139b[_0x4d2349] || (_0x4f3adc = _0x388b0b = 0x0) || _0x25a868.pop();) if (0x1 === _0x23139b.nodeType && ++_0x4f3adc && _0x23139b === _0x153814) {
                _0x44f8f3[_0x432aec] = [_0x217b3c, _0x388b0b, _0x4f3adc];
                break;
              }
            } else {
              if (_0x26e4e8 && (_0x4f3adc = _0x388b0b = (_0x14eaab = (_0x153814[_0x211637] || (_0x153814[_0x211637] = {}))[_0x432aec] || [])[0x0] === _0x217b3c && _0x14eaab[0x1]), !0x1 === _0x4f3adc) {
                for (; (_0x23139b = ++_0x388b0b && _0x23139b && _0x23139b[_0x4d2349] || (_0x4f3adc = _0x388b0b = 0x0) || _0x25a868.pop()) && (!(_0x283181 ? _0x3238c8(_0x23139b, _0x54cf11) : 0x1 === _0x23139b.nodeType) || !++_0x4f3adc || !(_0x26e4e8 && ((_0x44f8f3 = _0x23139b[_0x211637] || (_0x23139b[_0x211637] = {}))[_0x432aec] = [_0x217b3c, _0x4f3adc]), _0x23139b === _0x153814)););
              }
            }
            return (_0x4f3adc -= _0x411155) === _0x37134f || 0x0 == _0x4f3adc % _0x37134f && 0x0 <= _0x4f3adc / _0x37134f;
          }
        };
      },
      'PSEUDO': function (_0x37a370, _0x29761c) {
        var _0x43692d,
          _0x10950d = _0x100efb.pseudos[_0x37a370] || _0x100efb.setFilters[_0x37a370.toLowerCase()] || _0x36b07e.error("unsupported pseudo: " + _0x37a370);
        return _0x10950d[_0x211637] ? _0x10950d(_0x29761c) : 0x1 < _0x10950d.length ? (_0x43692d = [_0x37a370, _0x37a370, '', _0x29761c], _0x100efb.setFilters.hasOwnProperty(_0x37a370.toLowerCase()) ? _0x3a87fb(function (_0x44e758, _0x1e2950) {
          for (var _0x3757b5, _0x5be4c7 = _0x10950d(_0x44e758, _0x29761c), _0x42b4c4 = _0x5be4c7.length; _0x42b4c4--;) _0x44e758[_0x3757b5 = _0x4db018.call(_0x44e758, _0x5be4c7[_0x42b4c4])] = !(_0x1e2950[_0x3757b5] = _0x5be4c7[_0x42b4c4]);
        }) : function (_0x165762) {
          return _0x10950d(_0x165762, 0x0, _0x43692d);
        }) : _0x10950d;
      }
    },
    'pseudos': {
      'not': _0x3a87fb(function (_0xccd3f) {
        var _0x52cce3 = [],
          _0x4bd404 = [],
          _0x5e533c = _0x533be3(_0xccd3f.replace(_0x3bcb76, '$1'));
        return _0x5e533c[_0x211637] ? _0x3a87fb(function (_0x4225c3, _0x1aef7c, _0x89b0b, _0x55e072) {
          var _0x19f080;
          _0x89b0b = _0x5e533c(_0x4225c3, null, _0x55e072, []);
          for (_0x55e072 = _0x4225c3.length; _0x55e072--;) (_0x19f080 = _0x89b0b[_0x55e072]) && (_0x4225c3[_0x55e072] = !(_0x1aef7c[_0x55e072] = _0x19f080));
        }) : function (_0x5e3062, _0x909a4, _0x380c84) {
          return _0x52cce3[0x0] = _0x5e3062, _0x5e533c(_0x52cce3, null, _0x380c84, _0x4bd404), _0x52cce3[0x0] = null, !_0x4bd404.pop();
        };
      }),
      'has': _0x3a87fb(function (_0x8e98ae) {
        return function (_0x5f4d37) {
          return 0x0 < _0x36b07e(_0x8e98ae, _0x5f4d37).length;
        };
      }),
      'contains': _0x3a87fb(function (_0x1b6567) {
        return _0x1b6567 = _0x1b6567.replace(_0x16e1e8, _0xb7d8b2), function (_0x5dc683) {
          return -0x1 < (_0x5dc683.textContent || _0x4afe76.text(_0x5dc683)).indexOf(_0x1b6567);
        };
      }),
      'lang': _0x3a87fb(function (_0x1abd8f) {
        return _0x2c5590.test(_0x1abd8f || '') || _0x36b07e.error("unsupported lang: " + _0x1abd8f), _0x1abd8f = _0x1abd8f.replace(_0x16e1e8, _0xb7d8b2).toLowerCase(), function (_0x291e2e) {
          var _0x106645;
          do if (_0x106645 = _0x309624 ? _0x291e2e.lang : _0x291e2e.getAttribute('xml:lang') || _0x291e2e.getAttribute('lang')) return (_0x106645 = _0x106645.toLowerCase()) === _0x1abd8f || 0x0 === _0x106645.indexOf(_0x1abd8f + '-'); while ((_0x291e2e = _0x291e2e.parentNode) && 0x1 === _0x291e2e.nodeType);
          return !0x1;
        };
      }),
      'target': function (_0x3ea207) {
        var _0x2b1581 = _0x43f1db.location && _0x43f1db.location.hash;
        return _0x2b1581 && _0x2b1581.slice(0x1) === _0x3ea207.id;
      },
      'root': function (_0xbc3f2a) {
        return _0xbc3f2a === _0x1e4740;
      },
      'focus': function (_0x37c1b6) {
        var _0x45370e;
        _0x5944f8: {
          try {
            _0x45370e = _0x2e9967.activeElement;
            break _0x5944f8;
          } catch (_0x58917f) {}
          _0x45370e = void 0x0;
        }
        return _0x37c1b6 === _0x45370e && _0x2e9967.hasFocus() && !(!_0x37c1b6.type && !_0x37c1b6.href && !~_0x37c1b6.tabIndex);
      },
      'enabled': _0x295e09(!0x1),
      'disabled': _0x295e09(!0x0),
      'checked': function (_0x5952be) {
        return _0x3238c8(_0x5952be, 'input') && !!_0x5952be.checked || _0x3238c8(_0x5952be, 'option') && !!_0x5952be.selected;
      },
      'selected': function (_0x55a038) {
        return _0x55a038.parentNode && _0x55a038.parentNode.selectedIndex, !0x0 === _0x55a038.selected;
      },
      'empty': function (_0x2f3f8b) {
        for (_0x2f3f8b = _0x2f3f8b.firstChild; _0x2f3f8b; _0x2f3f8b = _0x2f3f8b.nextSibling) if (0x6 > _0x2f3f8b.nodeType) return !0x1;
        return !0x0;
      },
      'parent': function (_0x1eda93) {
        return !_0x100efb.pseudos.empty(_0x1eda93);
      },
      'header': function (_0x486b21) {
        return _0x3c9188.test(_0x486b21.nodeName);
      },
      'input': function (_0x1641c5) {
        return _0x150dc8.test(_0x1641c5.nodeName);
      },
      'button': function (_0x5ba514) {
        return _0x3238c8(_0x5ba514, 'input') && 'button' === _0x5ba514.type || _0x3238c8(_0x5ba514, 'button');
      },
      'text': function (_0x41d720) {
        var _0xac5956;
        return _0x3238c8(_0x41d720, 'input') && 'text' === _0x41d720.type && (null == (_0xac5956 = _0x41d720.getAttribute('type')) || 'text' === _0xac5956.toLowerCase());
      },
      'first': _0x2b8567(function () {
        return [0x0];
      }),
      'last': _0x2b8567(function (_0x6329cf, _0x3b85f4) {
        return [_0x3b85f4 - 0x1];
      }),
      'eq': _0x2b8567(function (_0x5895c1, _0x12fa21, _0x9b27ad) {
        return [0x0 > _0x9b27ad ? _0x9b27ad + _0x12fa21 : _0x9b27ad];
      }),
      'even': _0x2b8567(function (_0x18fa07, _0x2a0079) {
        for (var _0x3fe34a = 0x0; _0x3fe34a < _0x2a0079; _0x3fe34a += 0x2) _0x18fa07.push(_0x3fe34a);
        return _0x18fa07;
      }),
      'odd': _0x2b8567(function (_0x5c3b8c, _0x582b0f) {
        for (var _0x38c418 = 0x1; _0x38c418 < _0x582b0f; _0x38c418 += 0x2) _0x5c3b8c.push(_0x38c418);
        return _0x5c3b8c;
      }),
      'lt': _0x2b8567(function (_0x3010fb, _0x54ccc4, _0xcdfaca) {
        for (_0x54ccc4 = 0x0 > _0xcdfaca ? _0xcdfaca + _0x54ccc4 : _0x54ccc4 < _0xcdfaca ? _0x54ccc4 : _0xcdfaca; 0x0 <= --_0x54ccc4;) _0x3010fb.push(_0x54ccc4);
        return _0x3010fb;
      }),
      'gt': _0x2b8567(function (_0x547258, _0x32ba50, _0x48c6bf) {
        for (_0x48c6bf = 0x0 > _0x48c6bf ? _0x48c6bf + _0x32ba50 : _0x48c6bf; ++_0x48c6bf < _0x32ba50;) _0x547258.push(_0x48c6bf);
        return _0x547258;
      })
    }
  }).pseudos.nth = _0x100efb.pseudos.eq, {
    'radio': !0x0,
    'checkbox': !0x0,
    'file': !0x0,
    'password': !0x0,
    'image': !0x0
  }) _0x100efb.pseudos[_0x324084] = _0x1322a6(_0x324084);
  for (_0x324084 in {
    'submit': !0x0,
    'reset': !0x0
  }) _0x100efb.pseudos[_0x324084] = _0x2b79c9(_0x324084);
  _0x32e174.prototype = _0x100efb.filters = _0x100efb.pseudos, _0x100efb.setFilters = new _0x32e174(), _0x36059a.sortStable = _0x211637.split('').sort(_0x348f0e).join('') === _0x211637, _0x13e18a(), _0x36059a.sortDetached = _0x44088a(function (_0xed5c56) {
    return 0x1 & _0xed5c56.compareDocumentPosition(_0x2e9967.createElement('fieldset'));
  }), _0x4afe76.find = _0x36b07e, _0x4afe76.expr[':'] = _0x4afe76.expr.pseudos, _0x4afe76.unique = _0x4afe76.uniqueSort, _0x36b07e.compile = _0x533be3, _0x36b07e.select = _0xd0ca21, _0x36b07e.setDocument = _0x13e18a, _0x36b07e.escape = _0x4afe76.escapeSelector, _0x36b07e.getText = _0x4afe76.text, _0x36b07e.isXML = _0x4afe76.isXMLDoc, _0x36b07e.selectors = _0x4afe76.expr, _0x36b07e.support = _0x4afe76.support, _0x36b07e.uniqueSort = _0x4afe76.uniqueSort, !0x0;
  var _0x2542c6 = function (_0x9139f4, _0x3b8cd5, _0x50fa39) {
      for (var _0x9d6e62 = [], _0x497e19 = void 0x0 !== _0x50fa39; (_0x9139f4 = _0x9139f4[_0x3b8cd5]) && 0x9 !== _0x9139f4.nodeType;) if (0x1 === _0x9139f4.nodeType) {
        if (_0x497e19 && _0x4afe76(_0x9139f4).is(_0x50fa39)) break;
        _0x9d6e62.push(_0x9139f4);
      }
      return _0x9d6e62;
    },
    _0x69730b = function (_0x41f4b7, _0x1d5346) {
      for (var _0x58acd7 = []; _0x41f4b7; _0x41f4b7 = _0x41f4b7.nextSibling) 0x1 === _0x41f4b7.nodeType && _0x41f4b7 !== _0x1d5346 && _0x58acd7.push(_0x41f4b7);
      return _0x58acd7;
    },
    _0x5d9c89 = _0x4afe76.expr.match.needsContext,
    _0xf2b2b8 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  _0x4afe76.filter = function (_0x5907c8, _0xe1ecb9, _0xc3311f) {
    var _0x2330e9 = _0xe1ecb9[0x0];
    return _0xc3311f && (_0x5907c8 = ':not(' + _0x5907c8 + ')'), 0x1 === _0xe1ecb9.length && 0x1 === _0x2330e9.nodeType ? _0x4afe76.find.matchesSelector(_0x2330e9, _0x5907c8) ? [_0x2330e9] : [] : _0x4afe76.find.matches(_0x5907c8, _0x4afe76.grep(_0xe1ecb9, function (_0x3c20c8) {
      return 0x1 === _0x3c20c8.nodeType;
    }));
  }, _0x4afe76.fn.extend({
    'find': function (_0x5c1f80) {
      var _0xc50c84,
        _0x14934f,
        _0xc381e5 = this.length,
        _0x118807 = this;
      if ('string' != typeof _0x5c1f80) return this.pushStack(_0x4afe76(_0x5c1f80).filter(function () {
        for (_0xc50c84 = 0x0; _0xc50c84 < _0xc381e5; _0xc50c84++) if (_0x4afe76.contains(_0x118807[_0xc50c84], this)) return !0x0;
      }));
      _0x14934f = this.pushStack([]);
      for (_0xc50c84 = 0x0; _0xc50c84 < _0xc381e5; _0xc50c84++) _0x4afe76.find(_0x5c1f80, _0x118807[_0xc50c84], _0x14934f);
      return 0x1 < _0xc381e5 ? _0x4afe76.uniqueSort(_0x14934f) : _0x14934f;
    },
    'filter': function (_0x5b68df) {
      return this.pushStack(_0x5e611a(this, _0x5b68df || [], !0x1));
    },
    'not': function (_0x3b8331) {
      return this.pushStack(_0x5e611a(this, _0x3b8331 || [], !0x0));
    },
    'is': function (_0x2933e3) {
      return !!_0x5e611a(this, 'string' == typeof _0x2933e3 && _0x5d9c89.test(_0x2933e3) ? _0x4afe76(_0x2933e3) : _0x2933e3 || [], !0x1).length;
    }
  });
  var _0xd4021e,
    _0x48fdda = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (_0x4afe76.fn.init = function (_0x44c07a, _0x564a93, _0x41630d) {
    var _0x26daba, _0x593cd8;
    if (!_0x44c07a) return this;
    if (_0x41630d = _0x41630d || _0xd4021e, 'string' == typeof _0x44c07a) {
      if (!(_0x26daba = '<' === _0x44c07a[0x0] && '>' === _0x44c07a[_0x44c07a.length - 0x1] && 0x3 <= _0x44c07a.length ? [null, _0x44c07a, null] : _0x48fdda.exec(_0x44c07a)) || !_0x26daba[0x1] && _0x564a93) return !_0x564a93 || _0x564a93.jquery ? (_0x564a93 || _0x41630d).find(_0x44c07a) : this.constructor(_0x564a93).find(_0x44c07a);
      if (_0x26daba[0x1]) {
        if (_0x564a93 = _0x564a93 instanceof _0x4afe76 ? _0x564a93[0x0] : _0x564a93, _0x4afe76.merge(this, _0x4afe76.parseHTML(_0x26daba[0x1], _0x564a93 && _0x564a93.nodeType ? _0x564a93.ownerDocument || _0x564a93 : _0xefa3a6, !0x0)), _0xf2b2b8.test(_0x26daba[0x1]) && _0x4afe76.isPlainObject(_0x564a93)) {
          for (_0x26daba in _0x564a93) _0x5cc277(this[_0x26daba]) ? this[_0x26daba](_0x564a93[_0x26daba]) : this.attr(_0x26daba, _0x564a93[_0x26daba]);
        }
        return this;
      }
      return (_0x593cd8 = _0xefa3a6.getElementById(_0x26daba[0x2])) && (this[0x0] = _0x593cd8, this.length = 0x1), this;
    }
    return _0x44c07a.nodeType ? (this[0x0] = _0x44c07a, this.length = 0x1, this) : _0x5cc277(_0x44c07a) ? void 0x0 !== _0x41630d.ready ? _0x41630d.ready(_0x44c07a) : _0x44c07a(_0x4afe76) : _0x4afe76.makeArray(_0x44c07a, this);
  }).prototype = _0x4afe76.fn, _0xd4021e = _0x4afe76(_0xefa3a6);
  var _0x50253c = /^(?:parents|prev(?:Until|All))/,
    _0x47bd24 = {
      'children': !0x0,
      'contents': !0x0,
      'next': !0x0,
      'prev': !0x0
    };
  _0x4afe76.fn.extend({
    'has': function (_0xc0a39) {
      var _0x587e1c = _0x4afe76(_0xc0a39, this),
        _0x3cf845 = _0x587e1c.length;
      return this.filter(function () {
        for (var _0x2954b2 = 0x0; _0x2954b2 < _0x3cf845; _0x2954b2++) if (_0x4afe76.contains(this, _0x587e1c[_0x2954b2])) return !0x0;
      });
    },
    'closest': function (_0x36209f, _0x11736a) {
      var _0x357d5c,
        _0x13e789 = 0x0,
        _0xf5a869 = this.length,
        _0x533ad1 = [],
        _0x8e2adf = 'string' != typeof _0x36209f && _0x4afe76(_0x36209f);
      if (!_0x5d9c89.test(_0x36209f)) {
        for (; _0x13e789 < _0xf5a869; _0x13e789++) for (_0x357d5c = this[_0x13e789]; _0x357d5c && _0x357d5c !== _0x11736a; _0x357d5c = _0x357d5c.parentNode) if (0xb > _0x357d5c.nodeType && (_0x8e2adf ? -0x1 < _0x8e2adf.index(_0x357d5c) : 0x1 === _0x357d5c.nodeType && _0x4afe76.find.matchesSelector(_0x357d5c, _0x36209f))) {
          _0x533ad1.push(_0x357d5c);
          break;
        }
      }
      return this.pushStack(0x1 < _0x533ad1.length ? _0x4afe76.uniqueSort(_0x533ad1) : _0x533ad1);
    },
    'index': function (_0x1e47db) {
      return _0x1e47db ? 'string' == typeof _0x1e47db ? _0x4db018.call(_0x4afe76(_0x1e47db), this[0x0]) : _0x4db018.call(this, _0x1e47db.jquery ? _0x1e47db[0x0] : _0x1e47db) : this[0x0] && this[0x0].parentNode ? this.first().prevAll().length : -0x1;
    },
    'add': function (_0x52df8b, _0x4f111d) {
      return this.pushStack(_0x4afe76.uniqueSort(_0x4afe76.merge(this.get(), _0x4afe76(_0x52df8b, _0x4f111d))));
    },
    'addBack': function (_0xc3d005) {
      return this.add(null == _0xc3d005 ? this.prevObject : this.prevObject.filter(_0xc3d005));
    }
  }), _0x4afe76.each({
    'parent': function (_0x2410f4) {
      return (_0x2410f4 = _0x2410f4.parentNode) && 0xb !== _0x2410f4.nodeType ? _0x2410f4 : null;
    },
    'parents': function (_0x445522) {
      return _0x2542c6(_0x445522, 'parentNode');
    },
    'parentsUntil': function (_0x41e32a, _0x37ea81, _0x2ad41a) {
      return _0x2542c6(_0x41e32a, 'parentNode', _0x2ad41a);
    },
    'next': function (_0x53f92b) {
      return _0x423ffd(_0x53f92b, 'nextSibling');
    },
    'prev': function (_0x1fcf4d) {
      return _0x423ffd(_0x1fcf4d, 'previousSibling');
    },
    'nextAll': function (_0x2d9429) {
      return _0x2542c6(_0x2d9429, 'nextSibling');
    },
    'prevAll': function (_0x13438e) {
      return _0x2542c6(_0x13438e, 'previousSibling');
    },
    'nextUntil': function (_0x1f1815, _0x3a416e, _0x4d015e) {
      return _0x2542c6(_0x1f1815, 'nextSibling', _0x4d015e);
    },
    'prevUntil': function (_0x38f649, _0xa96f13, _0xabb447) {
      return _0x2542c6(_0x38f649, 'previousSibling', _0xabb447);
    },
    'siblings': function (_0x4b9163) {
      return _0x69730b((_0x4b9163.parentNode || {}).firstChild, _0x4b9163);
    },
    'children': function (_0x47a68f) {
      return _0x69730b(_0x47a68f.firstChild);
    },
    'contents': function (_0x3307ac) {
      return null != _0x3307ac.contentDocument && _0x2da04f(_0x3307ac.contentDocument) ? _0x3307ac.contentDocument : (_0x3238c8(_0x3307ac, 'template') && (_0x3307ac = _0x3307ac.content || _0x3307ac), _0x4afe76.merge([], _0x3307ac.childNodes));
    }
  }, function (_0x365d55, _0x50e95b) {
    _0x4afe76.fn[_0x365d55] = function (_0x13725d, _0x2e0c67) {
      var _0x2fb5b4 = _0x4afe76.map(this, _0x50e95b, _0x13725d);
      return 'Until' !== _0x365d55.slice(-0x5) && (_0x2e0c67 = _0x13725d), _0x2e0c67 && 'string' == typeof _0x2e0c67 && (_0x2fb5b4 = _0x4afe76.filter(_0x2e0c67, _0x2fb5b4)), 0x1 < this.length && (_0x47bd24[_0x365d55] || _0x4afe76.uniqueSort(_0x2fb5b4), _0x50253c.test(_0x365d55) && _0x2fb5b4.reverse()), this.pushStack(_0x2fb5b4);
    };
  });
  var _0x513902 = /[^\x20\t\r\n\f]+/g;
  _0x4afe76.Callbacks = function (_0x35c00d) {
    var _0x2ff339, _0x3e3f8b;
    _0x35c00d = 'string' == typeof _0x35c00d ? (_0x2ff339 = _0x35c00d, _0x3e3f8b = {}, _0x4afe76.each(_0x2ff339.match(_0x513902) || [], function (_0xbb356f, _0x29b3f1) {
      _0x3e3f8b[_0x29b3f1] = !0x0;
    }), _0x3e3f8b) : _0x4afe76.extend({}, _0x35c00d);
    var _0x52a2a2,
      _0xe3182b,
      _0x169805,
      _0x3c732e,
      _0x471ec1 = [],
      _0x466629 = [],
      _0x33a349 = -0x1,
      _0x19e012 = function () {
        _0x3c732e = _0x3c732e || _0x35c00d.once;
        for (_0x169805 = _0x52a2a2 = !0x0; _0x466629.length; _0x33a349 = -0x1) for (_0xe3182b = _0x466629.shift(); ++_0x33a349 < _0x471ec1.length;) !0x1 === _0x471ec1[_0x33a349].apply(_0xe3182b[0x0], _0xe3182b[0x1]) && _0x35c00d.stopOnFalse && (_0x33a349 = _0x471ec1.length, _0xe3182b = !0x1);
        _0x35c00d.memory || (_0xe3182b = !0x1), _0x52a2a2 = !0x1, _0x3c732e && (_0x471ec1 = _0xe3182b ? [] : '');
      },
      _0x135074 = {
        'add': function () {
          return _0x471ec1 && (_0xe3182b && !_0x52a2a2 && (_0x33a349 = _0x471ec1.length - 0x1, _0x466629.push(_0xe3182b)), function _0x4f6d9f(_0x5d31f2) {
            _0x4afe76.each(_0x5d31f2, function (_0x484138, _0x1b1231) {
              _0x5cc277(_0x1b1231) ? _0x35c00d.unique && _0x135074.has(_0x1b1231) || _0x471ec1.push(_0x1b1231) : _0x1b1231 && _0x1b1231.length && 'string' !== _0x394016(_0x1b1231) && _0x4f6d9f(_0x1b1231);
            });
          }(arguments), _0xe3182b && !_0x52a2a2 && _0x19e012()), this;
        },
        'remove': function () {
          return _0x4afe76.each(arguments, function (_0x3edc94, _0x3fbb94) {
            for (var _0x3b2e09; -0x1 < (_0x3b2e09 = _0x4afe76.inArray(_0x3fbb94, _0x471ec1, _0x3b2e09));) _0x471ec1.splice(_0x3b2e09, 0x1), _0x3b2e09 <= _0x33a349 && _0x33a349--;
          }), this;
        },
        'has': function (_0x315186) {
          return _0x315186 ? -0x1 < _0x4afe76.inArray(_0x315186, _0x471ec1) : 0x0 < _0x471ec1.length;
        },
        'empty': function () {
          return _0x471ec1 && (_0x471ec1 = []), this;
        },
        'disable': function () {
          return _0x3c732e = _0x466629 = [], _0x471ec1 = _0xe3182b = '', this;
        },
        'disabled': function () {
          return !_0x471ec1;
        },
        'lock': function () {
          return _0x3c732e = _0x466629 = [], _0xe3182b || _0x52a2a2 || (_0x471ec1 = _0xe3182b = ''), this;
        },
        'locked': function () {
          return !!_0x3c732e;
        },
        'fireWith': function (_0x2707c9, _0x5801d4) {
          return _0x3c732e || (_0x5801d4 = [_0x2707c9, (_0x5801d4 = _0x5801d4 || []).slice ? _0x5801d4.slice() : _0x5801d4], _0x466629.push(_0x5801d4), _0x52a2a2 || _0x19e012()), this;
        },
        'fire': function () {
          return _0x135074.fireWith(this, arguments), this;
        },
        'fired': function () {
          return !!_0x169805;
        }
      };
    return _0x135074;
  }, _0x4afe76.extend({
    'Deferred': function (_0x3fd774) {
      var _0x372618 = [['notify', 'progress', _0x4afe76.Callbacks('memory'), _0x4afe76.Callbacks('memory'), 0x2], ['resolve', 'done', _0x4afe76.Callbacks("once memory"), _0x4afe76.Callbacks("once memory"), 0x0, 'resolved'], ['reject', 'fail', _0x4afe76.Callbacks("once memory"), _0x4afe76.Callbacks("once memory"), 0x1, 'rejected']],
        _0x3e0532 = 'pending',
        _0x517a54 = {
          'state': function () {
            return _0x3e0532;
          },
          'always': function () {
            return _0x263110.done(arguments).fail(arguments), this;
          },
          'catch': function (_0xd71b40) {
            return _0x517a54.then(null, _0xd71b40);
          },
          'pipe': function () {
            var _0x5d7876 = arguments;
            return _0x4afe76.Deferred(function (_0x5d40a3) {
              _0x4afe76.each(_0x372618, function (_0x3c7e83, _0x42e3b6) {
                var _0x1c2400 = _0x5cc277(_0x5d7876[_0x42e3b6[0x4]]) && _0x5d7876[_0x42e3b6[0x4]];
                _0x263110[_0x42e3b6[0x1]](function () {
                  var _0x1772f8 = _0x1c2400 && _0x1c2400.apply(this, arguments);
                  _0x1772f8 && _0x5cc277(_0x1772f8.promise) ? _0x1772f8.promise().progress(_0x5d40a3.notify).done(_0x5d40a3.resolve).fail(_0x5d40a3.reject) : _0x5d40a3[_0x42e3b6[0x0] + 'With'](this, _0x1c2400 ? [_0x1772f8] : arguments);
                });
              }), _0x5d7876 = null;
            }).promise();
          },
          'then': function (_0x2a03b5, _0x25a9cc, _0x9f473d) {
            function _0x22cf55(_0x586196, _0x3a87b4, _0x2740c4, _0xaa3cb3) {
              return function () {
                var _0x3f904d = this,
                  _0x3ec324 = arguments,
                  _0x567b97 = function () {
                    var _0x394cdb, _0xc7352d;
                    if (!(_0x586196 < _0x5c4f32)) {
                      if ((_0x394cdb = _0x2740c4.apply(_0x3f904d, _0x3ec324)) === _0x3a87b4.promise()) throw new TypeError("Thenable self-resolution");
                      _0xc7352d = _0x394cdb && ('object' == typeof _0x394cdb || 'function' == typeof _0x394cdb) && _0x394cdb.then, _0x5cc277(_0xc7352d) ? _0xaa3cb3 ? _0xc7352d.call(_0x394cdb, _0x22cf55(_0x5c4f32, _0x3a87b4, _0x4a64b3, _0xaa3cb3), _0x22cf55(_0x5c4f32, _0x3a87b4, _0x1cbbd6, _0xaa3cb3)) : (_0x5c4f32++, _0xc7352d.call(_0x394cdb, _0x22cf55(_0x5c4f32, _0x3a87b4, _0x4a64b3, _0xaa3cb3), _0x22cf55(_0x5c4f32, _0x3a87b4, _0x1cbbd6, _0xaa3cb3), _0x22cf55(_0x5c4f32, _0x3a87b4, _0x4a64b3, _0x3a87b4.notifyWith))) : (_0x2740c4 !== _0x4a64b3 && (_0x3f904d = void 0x0, _0x3ec324 = [_0x394cdb]), (_0xaa3cb3 || _0x3a87b4.resolveWith)(_0x3f904d, _0x3ec324));
                    }
                  },
                  _0x3caad3 = _0xaa3cb3 ? _0x567b97 : function () {
                    try {
                      _0x567b97();
                    } catch (_0x4f1c68) {
                      _0x4afe76.Deferred.exceptionHook && _0x4afe76.Deferred.exceptionHook(_0x4f1c68, _0x3caad3.error), _0x5c4f32 <= _0x586196 + 0x1 && (_0x2740c4 !== _0x1cbbd6 && (_0x3f904d = void 0x0, _0x3ec324 = [_0x4f1c68]), _0x3a87b4.rejectWith(_0x3f904d, _0x3ec324));
                    }
                  };
                _0x586196 ? _0x3caad3() : (_0x4afe76.Deferred.getErrorHook ? _0x3caad3.error = _0x4afe76.Deferred.getErrorHook() : _0x4afe76.Deferred.getStackHook && (_0x3caad3.error = _0x4afe76.Deferred.getStackHook()), _0x43f1db.setTimeout(_0x3caad3));
              };
            }
            var _0x5c4f32 = 0x0;
            return _0x4afe76.Deferred(function (_0x1f4bc0) {
              _0x372618[0x0][0x3].add(_0x22cf55(0x0, _0x1f4bc0, _0x5cc277(_0x9f473d) ? _0x9f473d : _0x4a64b3, _0x1f4bc0.notifyWith)), _0x372618[0x1][0x3].add(_0x22cf55(0x0, _0x1f4bc0, _0x5cc277(_0x2a03b5) ? _0x2a03b5 : _0x4a64b3)), _0x372618[0x2][0x3].add(_0x22cf55(0x0, _0x1f4bc0, _0x5cc277(_0x25a9cc) ? _0x25a9cc : _0x1cbbd6));
            }).promise();
          },
          'promise': function (_0x250544) {
            return null != _0x250544 ? _0x4afe76.extend(_0x250544, _0x517a54) : _0x517a54;
          }
        },
        _0x263110 = {};
      return _0x4afe76.each(_0x372618, function (_0xfe288b, _0x596b7a) {
        var _0x5034bd = _0x596b7a[0x2],
          _0x50ca15 = _0x596b7a[0x5];
        _0x517a54[_0x596b7a[0x1]] = _0x5034bd.add, _0x50ca15 && _0x5034bd.add(function () {
          _0x3e0532 = _0x50ca15;
        }, _0x372618[0x3 - _0xfe288b][0x2].disable, _0x372618[0x3 - _0xfe288b][0x3].disable, _0x372618[0x0][0x2].lock, _0x372618[0x0][0x3].lock), _0x5034bd.add(_0x596b7a[0x3].fire), _0x263110[_0x596b7a[0x0]] = function () {
          return _0x263110[_0x596b7a[0x0] + 'With'](this === _0x263110 ? void 0x0 : this, arguments), this;
        }, _0x263110[_0x596b7a[0x0] + 'With'] = _0x5034bd.fireWith;
      }), _0x517a54.promise(_0x263110), _0x3fd774 && _0x3fd774.call(_0x263110, _0x263110), _0x263110;
    },
    'when': function (_0x376243) {
      var _0x42620c = arguments.length,
        _0x4f493c = _0x42620c,
        _0x6a94e2 = Array(_0x4f493c),
        _0x1c3645 = _0xcf045f.call(arguments),
        _0x5e635e = _0x4afe76.Deferred(),
        _0x103af4 = function (_0x56a853) {
          return function (_0x3f255e) {
            _0x6a94e2[_0x56a853] = this, _0x1c3645[_0x56a853] = 0x1 < arguments.length ? _0xcf045f.call(arguments) : _0x3f255e, --_0x42620c || _0x5e635e.resolveWith(_0x6a94e2, _0x1c3645);
          };
        };
      if (0x1 >= _0x42620c && (_0x42dc52(_0x376243, _0x5e635e.done(_0x103af4(_0x4f493c)).resolve, _0x5e635e.reject, !_0x42620c), 'pending' === _0x5e635e.state() || _0x5cc277(_0x1c3645[_0x4f493c] && _0x1c3645[_0x4f493c].then))) return _0x5e635e.then();
      for (; _0x4f493c--;) _0x42dc52(_0x1c3645[_0x4f493c], _0x103af4(_0x4f493c), _0x5e635e.reject);
      return _0x5e635e.promise();
    }
  });
  var _0x55c658 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  _0x4afe76.Deferred.exceptionHook = function (_0x33e5aa, _0x51a490) {
    _0x43f1db.console && _0x43f1db.console.warn && _0x33e5aa && _0x55c658.test(_0x33e5aa.name) && _0x43f1db.console.warn("jQuery.Deferred exception: " + _0x33e5aa.message, _0x33e5aa.stack, _0x51a490);
  }, _0x4afe76.readyException = function (_0x2f7479) {
    _0x43f1db.setTimeout(function () {
      throw _0x2f7479;
    });
  };
  var _0x158490 = _0x4afe76.Deferred();
  _0x4afe76.fn.ready = function (_0x4afd6e) {
    return _0x158490.then(_0x4afd6e)['catch'](function (_0x11f53f) {
      _0x4afe76.readyException(_0x11f53f);
    }), this;
  }, _0x4afe76.extend({
    'isReady': !0x1,
    'readyWait': 0x1,
    'ready': function (_0x4e44b5) {
      (!0x0 === _0x4e44b5 ? --_0x4afe76.readyWait : _0x4afe76.isReady) || (_0x4afe76.isReady = !0x0) !== _0x4e44b5 && 0x0 < --_0x4afe76.readyWait || _0x158490.resolveWith(_0xefa3a6, [_0x4afe76]);
    }
  }), _0x4afe76.ready.then = _0x158490.then, 'complete' === _0xefa3a6.readyState || 'loading' !== _0xefa3a6.readyState && !_0xefa3a6.documentElement.doScroll ? _0x43f1db.setTimeout(_0x4afe76.ready) : (_0xefa3a6.addEventListener('DOMContentLoaded', _0x463133), _0x43f1db.addEventListener('load', _0x463133));
  var _0x483fcd = function (_0x598e6e, _0x3073a3, _0xb0a132, _0x17304e, _0x3cafd8, _0x41d316, _0x42db7d) {
      var _0x41dc13 = 0x0,
        _0x4b56cc = _0x598e6e.length,
        _0x22dc59 = null == _0xb0a132;
      if ('object' === _0x394016(_0xb0a132)) {
        for (_0x41dc13 in _0x3cafd8 = !0x0, _0xb0a132) _0x483fcd(_0x598e6e, _0x3073a3, _0x41dc13, _0xb0a132[_0x41dc13], !0x0, _0x41d316, _0x42db7d);
      } else {
        if (void 0x0 !== _0x17304e && (_0x3cafd8 = !0x0, _0x5cc277(_0x17304e) || (_0x42db7d = !0x0), _0x22dc59 && (_0x42db7d ? (_0x3073a3.call(_0x598e6e, _0x17304e), _0x3073a3 = null) : (_0x22dc59 = _0x3073a3, _0x3073a3 = function (_0x189274, _0xdf8117, _0x5c09da) {
          return _0x22dc59.call(_0x4afe76(_0x189274), _0x5c09da);
        })), _0x3073a3)) {
          for (; _0x41dc13 < _0x4b56cc; _0x41dc13++) _0x3073a3(_0x598e6e[_0x41dc13], _0xb0a132, _0x42db7d ? _0x17304e : _0x17304e.call(_0x598e6e[_0x41dc13], _0x41dc13, _0x3073a3(_0x598e6e[_0x41dc13], _0xb0a132)));
        }
      }
      return _0x3cafd8 ? _0x598e6e : _0x22dc59 ? _0x3073a3.call(_0x598e6e) : _0x4b56cc ? _0x3073a3(_0x598e6e[0x0], _0xb0a132) : _0x41d316;
    },
    _0x494f08 = /^-ms-/,
    _0x1ece29 = /-([a-z])/g,
    _0x1da48d = function (_0x1b0c87) {
      return 0x1 === _0x1b0c87.nodeType || 0x9 === _0x1b0c87.nodeType || !+_0x1b0c87.nodeType;
    };
  _0x148d51.uid = 0x1, _0x148d51.prototype = {
    'cache': function (_0x31709e) {
      var _0x310832 = _0x31709e[this.expando];
      return _0x310832 || (_0x310832 = {}, _0x1da48d(_0x31709e) && (_0x31709e.nodeType ? _0x31709e[this.expando] = _0x310832 : Object.defineProperty(_0x31709e, this.expando, {
        'value': _0x310832,
        'configurable': !0x0
      }))), _0x310832;
    },
    'set': function (_0x22c8d9, _0x76876b, _0x16bcb4) {
      var _0x261cab;
      _0x22c8d9 = this.cache(_0x22c8d9);
      if ('string' == typeof _0x76876b) _0x22c8d9[_0x3e74ba(_0x76876b)] = _0x16bcb4;else {
        for (_0x261cab in _0x76876b) _0x22c8d9[_0x3e74ba(_0x261cab)] = _0x76876b[_0x261cab];
      }
      return _0x22c8d9;
    },
    'get': function (_0x1bc071, _0x2a90d9) {
      return void 0x0 === _0x2a90d9 ? this.cache(_0x1bc071) : _0x1bc071[this.expando] && _0x1bc071[this.expando][_0x3e74ba(_0x2a90d9)];
    },
    'access': function (_0x355e59, _0x4821e7, _0x38fd90) {
      return void 0x0 === _0x4821e7 || _0x4821e7 && 'string' == typeof _0x4821e7 && void 0x0 === _0x38fd90 ? this.get(_0x355e59, _0x4821e7) : (this.set(_0x355e59, _0x4821e7, _0x38fd90), void 0x0 !== _0x38fd90 ? _0x38fd90 : _0x4821e7);
    },
    'remove': function (_0x4b1350, _0x343148) {
      var _0x5050a5,
        _0x451827 = _0x4b1350[this.expando];
      if (void 0x0 !== _0x451827) {
        if (void 0x0 !== _0x343148) {
          _0x5050a5 = (_0x343148 = Array.isArray(_0x343148) ? _0x343148.map(_0x3e74ba) : (_0x343148 = _0x3e74ba(_0x343148)) in _0x451827 ? [_0x343148] : _0x343148.match(_0x513902) || []).length;
          for (; _0x5050a5--;) delete _0x451827[_0x343148[_0x5050a5]];
        }
        (void 0x0 === _0x343148 || _0x4afe76.isEmptyObject(_0x451827)) && (_0x4b1350.nodeType ? _0x4b1350[this.expando] = void 0x0 : delete _0x4b1350[this.expando]);
      }
    },
    'hasData': function (_0x1c3640) {
      return _0x1c3640 = _0x1c3640[this.expando], void 0x0 !== _0x1c3640 && !_0x4afe76.isEmptyObject(_0x1c3640);
    }
  };
  var _0x5efef5 = new _0x148d51(),
    _0x814803 = new _0x148d51(),
    _0xcdf17c = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    _0x441b39 = /[A-Z]/g;
  _0x4afe76.extend({
    'hasData': function (_0x257370) {
      return _0x814803.hasData(_0x257370) || _0x5efef5.hasData(_0x257370);
    },
    'data': function (_0x101c3a, _0x198520, _0x1f0387) {
      return _0x814803.access(_0x101c3a, _0x198520, _0x1f0387);
    },
    'removeData': function (_0xcb038, _0x229eb7) {
      _0x814803.remove(_0xcb038, _0x229eb7);
    },
    '_data': function (_0xa14d84, _0x47f6ee, _0x3bfde3) {
      return _0x5efef5.access(_0xa14d84, _0x47f6ee, _0x3bfde3);
    },
    '_removeData': function (_0x5862c5, _0x224f10) {
      _0x5efef5.remove(_0x5862c5, _0x224f10);
    }
  }), _0x4afe76.fn.extend({
    'data': function (_0x4acd8f, _0x53922a) {
      var _0x2ed93d,
        _0x58da14,
        _0xdd3005,
        _0x4a0b4f = this[0x0],
        _0x98db68 = _0x4a0b4f && _0x4a0b4f.attributes;
      if (void 0x0 === _0x4acd8f) {
        if (this.length && (_0xdd3005 = _0x814803.get(_0x4a0b4f), 0x1 === _0x4a0b4f.nodeType && !_0x5efef5.get(_0x4a0b4f, 'hasDataAttrs'))) {
          for (_0x2ed93d = _0x98db68.length; _0x2ed93d--;) _0x98db68[_0x2ed93d] && 0x0 === (_0x58da14 = _0x98db68[_0x2ed93d].name).indexOf('data-') && (_0x58da14 = _0x3e74ba(_0x58da14.slice(0x5)), _0x1d820d(_0x4a0b4f, _0x58da14, _0xdd3005[_0x58da14]));
          _0x5efef5.set(_0x4a0b4f, 'hasDataAttrs', !0x0);
        }
        return _0xdd3005;
      }
      return 'object' == typeof _0x4acd8f ? this.each(function () {
        _0x814803.set(this, _0x4acd8f);
      }) : _0x483fcd(this, function (_0x1d79c8) {
        var _0x44f158;
        if (_0x4a0b4f && void 0x0 === _0x1d79c8) return void 0x0 !== (_0x44f158 = _0x814803.get(_0x4a0b4f, _0x4acd8f)) ? _0x44f158 : void 0x0 !== (_0x44f158 = _0x1d820d(_0x4a0b4f, _0x4acd8f)) ? _0x44f158 : void 0x0;
        this.each(function () {
          _0x814803.set(this, _0x4acd8f, _0x1d79c8);
        });
      }, null, _0x53922a, 0x1 < arguments.length, null, !0x0);
    },
    'removeData': function (_0x2f09e9) {
      return this.each(function () {
        _0x814803.remove(this, _0x2f09e9);
      });
    }
  }), _0x4afe76.extend({
    'queue': function (_0x5d8c0, _0x509d20, _0x9c1101) {
      var _0xb8a22;
      if (_0x5d8c0) return _0x509d20 = (_0x509d20 || 'fx') + 'queue', _0xb8a22 = _0x5efef5.get(_0x5d8c0, _0x509d20), _0x9c1101 && (!_0xb8a22 || Array.isArray(_0x9c1101) ? _0xb8a22 = _0x5efef5.access(_0x5d8c0, _0x509d20, _0x4afe76.makeArray(_0x9c1101)) : _0xb8a22.push(_0x9c1101)), _0xb8a22 || [];
    },
    'dequeue': function (_0x36ed84, _0x215d23) {
      _0x215d23 = _0x215d23 || 'fx';
      var _0x2b06de = _0x4afe76.queue(_0x36ed84, _0x215d23),
        _0x2ba495 = _0x2b06de.length,
        _0x4088da = _0x2b06de.shift(),
        _0xba14da = _0x4afe76._queueHooks(_0x36ed84, _0x215d23);
      'inprogress' === _0x4088da && (_0x4088da = _0x2b06de.shift(), _0x2ba495--), _0x4088da && ('fx' === _0x215d23 && _0x2b06de.unshift('inprogress'), delete _0xba14da.stop, _0x4088da.call(_0x36ed84, function () {
        _0x4afe76.dequeue(_0x36ed84, _0x215d23);
      }, _0xba14da)), !_0x2ba495 && _0xba14da && _0xba14da.empty.fire();
    },
    '_queueHooks': function (_0x2f627b, _0x3d47e2) {
      var _0x145daa = _0x3d47e2 + 'queueHooks';
      return _0x5efef5.get(_0x2f627b, _0x145daa) || _0x5efef5.access(_0x2f627b, _0x145daa, {
        'empty': _0x4afe76.Callbacks("once memory").add(function () {
          _0x5efef5.remove(_0x2f627b, [_0x3d47e2 + 'queue', _0x145daa]);
        })
      });
    }
  }), _0x4afe76.fn.extend({
    'queue': function (_0x1429ba, _0x2eaed3) {
      var _0xf1d794 = 0x2;
      return 'string' != typeof _0x1429ba && (_0x2eaed3 = _0x1429ba, _0x1429ba = 'fx', _0xf1d794--), arguments.length < _0xf1d794 ? _0x4afe76.queue(this[0x0], _0x1429ba) : void 0x0 === _0x2eaed3 ? this : this.each(function () {
        var _0x5e9bef = _0x4afe76.queue(this, _0x1429ba, _0x2eaed3);
        _0x4afe76._queueHooks(this, _0x1429ba), 'fx' === _0x1429ba && 'inprogress' !== _0x5e9bef[0x0] && _0x4afe76.dequeue(this, _0x1429ba);
      });
    },
    'dequeue': function (_0x40a513) {
      return this.each(function () {
        _0x4afe76.dequeue(this, _0x40a513);
      });
    },
    'clearQueue': function (_0x5d85f2) {
      return this.queue(_0x5d85f2 || 'fx', []);
    },
    'promise': function (_0x189cb1, _0x149a04) {
      var _0x96f08b,
        _0x15404d = 0x1,
        _0x29f2e2 = _0x4afe76.Deferred(),
        _0x100bc8 = this,
        _0x4be29a = this.length,
        _0x5bf74a = function () {
          --_0x15404d || _0x29f2e2.resolveWith(_0x100bc8, [_0x100bc8]);
        };
      'string' != typeof _0x189cb1 && (_0x149a04 = _0x189cb1, _0x189cb1 = void 0x0);
      for (_0x189cb1 = _0x189cb1 || 'fx'; _0x4be29a--;) (_0x96f08b = _0x5efef5.get(_0x100bc8[_0x4be29a], _0x189cb1 + 'queueHooks')) && _0x96f08b.empty && (_0x15404d++, _0x96f08b.empty.add(_0x5bf74a));
      return _0x5bf74a(), _0x29f2e2.promise(_0x149a04);
    }
  });
  var _0x1fe280 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _0x192f60 = RegExp('^(?:([+-])=|)(' + _0x1fe280 + ')([a-z%]*)$', 'i'),
    _0x1a1093 = ['Top', 'Right', 'Bottom', 'Left'],
    _0x5dde1d = _0xefa3a6.documentElement,
    _0x5790d0 = function (_0x3e7a56) {
      return _0x4afe76.contains(_0x3e7a56.ownerDocument, _0x3e7a56);
    },
    _0x562595 = {
      'composed': !0x0
    };
  _0x5dde1d.getRootNode && (_0x5790d0 = function (_0x2c3c63) {
    return _0x4afe76.contains(_0x2c3c63.ownerDocument, _0x2c3c63) || _0x2c3c63.getRootNode(_0x562595) === _0x2c3c63.ownerDocument;
  });
  var _0x31403c = function (_0x4d10d5, _0x467638) {
      return 'none' === (_0x4d10d5 = _0x467638 || _0x4d10d5).style.display || '' === _0x4d10d5.style.display && _0x5790d0(_0x4d10d5) && 'none' === _0x4afe76.css(_0x4d10d5, 'display');
    },
    _0x52ebf1 = {};
  _0x4afe76.fn.extend({
    'show': function () {
      return _0x5ef22d(this, !0x0);
    },
    'hide': function () {
      return _0x5ef22d(this);
    },
    'toggle': function (_0x5696ec) {
      return 'boolean' == typeof _0x5696ec ? _0x5696ec ? this.show() : this.hide() : this.each(function () {
        _0x31403c(this) ? _0x4afe76(this).show() : _0x4afe76(this).hide();
      });
    }
  });
  var _0x484a9c,
    _0x53273b,
    _0x5c2d7f = /^(?:checkbox|radio)$/i,
    _0x2a2f36 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    _0x57056f = /^$|^module$|\/(?:java|ecma)script/i;
  _0x484a9c = _0xefa3a6.createDocumentFragment().appendChild(_0xefa3a6.createElement('div')), (_0x53273b = _0xefa3a6.createElement('input')).setAttribute('type', 'radio'), _0x53273b.setAttribute('checked', 'checked'), _0x53273b.setAttribute('name', 't'), _0x484a9c.appendChild(_0x53273b), _0x36059a.checkClone = _0x484a9c.cloneNode(!0x0).cloneNode(!0x0).lastChild.checked, _0x484a9c.innerHTML = '<textarea>x</textarea>', _0x36059a.noCloneChecked = !!_0x484a9c.cloneNode(!0x0).lastChild.defaultValue, _0x484a9c.innerHTML = '<option></option>', _0x36059a.option = !!_0x484a9c.lastChild;
  var _0x141ef3 = {
    'thead': [0x1, '<table>', '</table>'],
    'col': [0x2, '<table><colgroup>', '</colgroup></table>'],
    'tr': [0x2, '<table><tbody>', '</tbody></table>'],
    'td': [0x3, '<table><tbody><tr>', '</tr></tbody></table>'],
    '_default': [0x0, '', '']
  };
  _0x141ef3.tbody = _0x141ef3.tfoot = _0x141ef3.colgroup = _0x141ef3.caption = _0x141ef3.thead, _0x141ef3.th = _0x141ef3.td, _0x36059a.option || (_0x141ef3.optgroup = _0x141ef3.option = [0x1, "<select multiple='multiple'>", '</select>']);
  var _0x539296 = /<|&#?\w+;/,
    _0x3b1a20 = /^([^.]*)(?:\.(.+)|)/;
  _0x4afe76.event = {
    'global': {},
    'add': function (_0x451ee9, _0x1a4f00, _0x5c1b08, _0x1e7012, _0x361360) {
      var _0x59f988, _0xd949bb, _0xc8454a, _0xd77df1, _0x4c0b0b, _0x12eac5, _0x234160, _0x154c7f, _0x52b6c7, _0x1875d7;
      _0x4c0b0b = _0x5efef5.get(_0x451ee9);
      if (_0x1da48d(_0x451ee9)) {
        _0x5c1b08.handler && (_0x5c1b08 = (_0x59f988 = _0x5c1b08).handler, _0x361360 = _0x59f988.selector), _0x361360 && _0x4afe76.find.matchesSelector(_0x5dde1d, _0x361360), _0x5c1b08.guid || (_0x5c1b08.guid = _0x4afe76.guid++), (_0xd77df1 = _0x4c0b0b.events) || (_0xd77df1 = _0x4c0b0b.events = Object.create(null)), (_0xd949bb = _0x4c0b0b.handle) || (_0xd949bb = _0x4c0b0b.handle = function (_0x4bf48) {
          return 'undefined' != typeof _0x4afe76 && _0x4afe76.event.triggered !== _0x4bf48.type ? _0x4afe76.event.dispatch.apply(_0x451ee9, arguments) : void 0x0;
        });
        for (_0x4c0b0b = (_0x1a4f00 = (_0x1a4f00 || '').match(_0x513902) || ['']).length; _0x4c0b0b--;) _0x52b6c7 = _0x1875d7 = (_0xc8454a = _0x3b1a20.exec(_0x1a4f00[_0x4c0b0b]) || [])[0x1], _0xc8454a = (_0xc8454a[0x2] || '').split('.').sort(), _0x52b6c7 && (_0x234160 = _0x4afe76.event.special[_0x52b6c7] || {}, _0x52b6c7 = (_0x361360 ? _0x234160.delegateType : _0x234160.bindType) || _0x52b6c7, _0x234160 = _0x4afe76.event.special[_0x52b6c7] || {}, _0x12eac5 = _0x4afe76.extend({
          'type': _0x52b6c7,
          'origType': _0x1875d7,
          'data': _0x1e7012,
          'handler': _0x5c1b08,
          'guid': _0x5c1b08.guid,
          'selector': _0x361360,
          'needsContext': _0x361360 && _0x4afe76.expr.match.needsContext.test(_0x361360),
          'namespace': _0xc8454a.join('.')
        }, _0x59f988), (_0x154c7f = _0xd77df1[_0x52b6c7]) || ((_0x154c7f = _0xd77df1[_0x52b6c7] = []).delegateCount = 0x0, _0x234160.setup && !0x1 !== _0x234160.setup.call(_0x451ee9, _0x1e7012, _0xc8454a, _0xd949bb) || _0x451ee9.addEventListener && _0x451ee9.addEventListener(_0x52b6c7, _0xd949bb)), _0x234160.add && (_0x234160.add.call(_0x451ee9, _0x12eac5), _0x12eac5.handler.guid || (_0x12eac5.handler.guid = _0x5c1b08.guid)), _0x361360 ? _0x154c7f.splice(_0x154c7f.delegateCount++, 0x0, _0x12eac5) : _0x154c7f.push(_0x12eac5), _0x4afe76.event.global[_0x52b6c7] = !0x0);
      }
    },
    'remove': function (_0x29a42a, _0x4e004b, _0x332406, _0x4dfc6c, _0x1b321d) {
      var _0x3a6082,
        _0x174b2d,
        _0x44029d,
        _0x8f4354,
        _0x3f3106,
        _0x4322b9,
        _0x5b68fa,
        _0x39009d,
        _0x4afcf0,
        _0x4788b8,
        _0x48f77d,
        _0x5fa22 = _0x5efef5.hasData(_0x29a42a) && _0x5efef5.get(_0x29a42a);
      if (_0x5fa22 && (_0x8f4354 = _0x5fa22.events)) {
        for (_0x3f3106 = (_0x4e004b = (_0x4e004b || '').match(_0x513902) || ['']).length; _0x3f3106--;) if (_0x4afcf0 = _0x48f77d = (_0x44029d = _0x3b1a20.exec(_0x4e004b[_0x3f3106]) || [])[0x1], _0x4788b8 = (_0x44029d[0x2] || '').split('.').sort(), _0x4afcf0) {
          _0x5b68fa = _0x4afe76.event.special[_0x4afcf0] || {}, _0x39009d = _0x8f4354[_0x4afcf0 = (_0x4dfc6c ? _0x5b68fa.delegateType : _0x5b68fa.bindType) || _0x4afcf0] || [], _0x44029d = _0x44029d[0x2] && RegExp("(^|\\.)" + _0x4788b8.join("\\.(?:.*\\.|)") + "(\\.|$)");
          for (_0x174b2d = _0x3a6082 = _0x39009d.length; _0x3a6082--;) _0x4322b9 = _0x39009d[_0x3a6082], !_0x1b321d && _0x48f77d !== _0x4322b9.origType || _0x332406 && _0x332406.guid !== _0x4322b9.guid || _0x44029d && !_0x44029d.test(_0x4322b9.namespace) || _0x4dfc6c && _0x4dfc6c !== _0x4322b9.selector && ('**' !== _0x4dfc6c || !_0x4322b9.selector) || (_0x39009d.splice(_0x3a6082, 0x1), _0x4322b9.selector && _0x39009d.delegateCount--, _0x5b68fa.remove && _0x5b68fa.remove.call(_0x29a42a, _0x4322b9));
          _0x174b2d && !_0x39009d.length && (_0x5b68fa.teardown && !0x1 !== _0x5b68fa.teardown.call(_0x29a42a, _0x4788b8, _0x5fa22.handle) || _0x4afe76.removeEvent(_0x29a42a, _0x4afcf0, _0x5fa22.handle), delete _0x8f4354[_0x4afcf0]);
        } else {
          for (_0x4afcf0 in _0x8f4354) _0x4afe76.event.remove(_0x29a42a, _0x4afcf0 + _0x4e004b[_0x3f3106], _0x332406, _0x4dfc6c, !0x0);
        }
        _0x4afe76.isEmptyObject(_0x8f4354) && _0x5efef5.remove(_0x29a42a, "handle events");
      }
    },
    'dispatch': function (_0x4667ec) {
      var _0x373dee,
        _0x3aa00d,
        _0x1f7496,
        _0x45e199,
        _0x194f71,
        _0x5c6614,
        _0x4f61f7 = Array(arguments.length),
        _0x5dc8b9 = _0x4afe76.event.fix(_0x4667ec);
      _0x3aa00d = (_0x5efef5.get(this, 'events') || Object.create(null))[_0x5dc8b9.type] || [];
      var _0x24e2ff = _0x4afe76.event.special[_0x5dc8b9.type] || {};
      _0x4f61f7[0x0] = _0x5dc8b9;
      for (_0x373dee = 0x1; _0x373dee < arguments.length; _0x373dee++) _0x4f61f7[_0x373dee] = arguments[_0x373dee];
      if (_0x5dc8b9.delegateTarget = this, !_0x24e2ff.preDispatch || !0x1 !== _0x24e2ff.preDispatch.call(this, _0x5dc8b9)) {
        _0x5c6614 = _0x4afe76.event.handlers.call(this, _0x5dc8b9, _0x3aa00d);
        for (_0x373dee = 0x0; (_0x45e199 = _0x5c6614[_0x373dee++]) && !_0x5dc8b9.isPropagationStopped();) {
          _0x5dc8b9.currentTarget = _0x45e199.elem;
          for (_0x3aa00d = 0x0; (_0x194f71 = _0x45e199.handlers[_0x3aa00d++]) && !_0x5dc8b9.isImmediatePropagationStopped();) _0x5dc8b9.rnamespace && !0x1 !== _0x194f71.namespace && !_0x5dc8b9.rnamespace.test(_0x194f71.namespace) || (_0x5dc8b9.handleObj = _0x194f71, _0x5dc8b9.data = _0x194f71.data, void 0x0 !== (_0x1f7496 = ((_0x4afe76.event.special[_0x194f71.origType] || {}).handle || _0x194f71.handler).apply(_0x45e199.elem, _0x4f61f7)) && !0x1 === (_0x5dc8b9.result = _0x1f7496) && (_0x5dc8b9.preventDefault(), _0x5dc8b9.stopPropagation()));
        }
        return _0x24e2ff.postDispatch && _0x24e2ff.postDispatch.call(this, _0x5dc8b9), _0x5dc8b9.result;
      }
    },
    'handlers': function (_0x5edaf0, _0x37fa81) {
      var _0x3bdc46,
        _0x1a49cc,
        _0x3acc74,
        _0x20be01,
        _0x478c22,
        _0x2131c5 = [],
        _0x202c9b = _0x37fa81.delegateCount,
        _0x52ea1c = _0x5edaf0.target;
      if (_0x202c9b && _0x52ea1c.nodeType && !('click' === _0x5edaf0.type && 0x1 <= _0x5edaf0.button)) {
        for (; _0x52ea1c !== this; _0x52ea1c = _0x52ea1c.parentNode || this) if (0x1 === _0x52ea1c.nodeType && ('click' !== _0x5edaf0.type || !0x0 !== _0x52ea1c.disabled)) {
          _0x20be01 = [], _0x478c22 = {};
          for (_0x3bdc46 = 0x0; _0x3bdc46 < _0x202c9b; _0x3bdc46++) void 0x0 === _0x478c22[_0x3acc74 = (_0x1a49cc = _0x37fa81[_0x3bdc46]).selector + " "] && (_0x478c22[_0x3acc74] = _0x1a49cc.needsContext ? -0x1 < _0x4afe76(_0x3acc74, this).index(_0x52ea1c) : _0x4afe76.find(_0x3acc74, this, null, [_0x52ea1c]).length), _0x478c22[_0x3acc74] && _0x20be01.push(_0x1a49cc);
          _0x20be01.length && _0x2131c5.push({
            'elem': _0x52ea1c,
            'handlers': _0x20be01
          });
        }
      }
      return _0x52ea1c = this, _0x202c9b < _0x37fa81.length && _0x2131c5.push({
        'elem': _0x52ea1c,
        'handlers': _0x37fa81.slice(_0x202c9b)
      }), _0x2131c5;
    },
    'addProp': function (_0x5b9c83, _0x2a7a7f) {
      Object.defineProperty(_0x4afe76.Event.prototype, _0x5b9c83, {
        'enumerable': !0x0,
        'configurable': !0x0,
        'get': _0x5cc277(_0x2a7a7f) ? function () {
          if (this.originalEvent) return _0x2a7a7f(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[_0x5b9c83];
        },
        'set': function (_0x5a1bbb) {
          Object.defineProperty(this, _0x5b9c83, {
            'enumerable': !0x0,
            'configurable': !0x0,
            'writable': !0x0,
            'value': _0x5a1bbb
          });
        }
      });
    },
    'fix': function (_0x46df8e) {
      return _0x46df8e[_0x4afe76.expando] ? _0x46df8e : new _0x4afe76.Event(_0x46df8e);
    },
    'special': {
      'load': {
        'noBubble': !0x0
      },
      'click': {
        'setup': function (_0x5cee28) {
          return _0x5cee28 = this || _0x5cee28, _0x5c2d7f.test(_0x5cee28.type) && _0x5cee28.click && _0x3238c8(_0x5cee28, 'input') && _0x49ac2b(_0x5cee28, 'click', !0x0), !0x1;
        },
        'trigger': function (_0x442acb) {
          return _0x442acb = this || _0x442acb, _0x5c2d7f.test(_0x442acb.type) && _0x442acb.click && _0x3238c8(_0x442acb, 'input') && _0x49ac2b(_0x442acb, 'click'), !0x0;
        },
        '_default': function (_0x191de0) {
          return _0x191de0 = _0x191de0.target, _0x5c2d7f.test(_0x191de0.type) && _0x191de0.click && _0x3238c8(_0x191de0, 'input') && _0x5efef5.get(_0x191de0, 'click') || _0x3238c8(_0x191de0, 'a');
        }
      },
      'beforeunload': {
        'postDispatch': function (_0x4bf694) {
          void 0x0 !== _0x4bf694.result && _0x4bf694.originalEvent && (_0x4bf694.originalEvent.returnValue = _0x4bf694.result);
        }
      }
    }
  }, _0x4afe76.removeEvent = function (_0x532940, _0x468bdf, _0x3937d5) {
    _0x532940.removeEventListener && _0x532940.removeEventListener(_0x468bdf, _0x3937d5);
  }, _0x4afe76.Event = function (_0x313945, _0x8f2fa1) {
    if (!(this instanceof _0x4afe76.Event)) return new _0x4afe76.Event(_0x313945, _0x8f2fa1);
    _0x313945 && _0x313945.type ? (this.originalEvent = _0x313945, this.type = _0x313945.type, this.isDefaultPrevented = _0x313945.defaultPrevented || void 0x0 === _0x313945.defaultPrevented && !0x1 === _0x313945.returnValue ? _0x3c566b : _0x460138, this.target = _0x313945.target && 0x3 === _0x313945.target.nodeType ? _0x313945.target.parentNode : _0x313945.target, this.currentTarget = _0x313945.currentTarget, this.relatedTarget = _0x313945.relatedTarget) : this.type = _0x313945, _0x8f2fa1 && _0x4afe76.extend(this, _0x8f2fa1), this.timeStamp = _0x313945 && _0x313945.timeStamp || Date.now(), this[_0x4afe76.expando] = !0x0;
  }, _0x4afe76.Event.prototype = {
    'constructor': _0x4afe76.Event,
    'isDefaultPrevented': _0x460138,
    'isPropagationStopped': _0x460138,
    'isImmediatePropagationStopped': _0x460138,
    'isSimulated': !0x1,
    'preventDefault': function () {
      var _0x1a17a0 = this.originalEvent;
      this.isDefaultPrevented = _0x3c566b, _0x1a17a0 && !this.isSimulated && _0x1a17a0.preventDefault();
    },
    'stopPropagation': function () {
      var _0x1c10c3 = this.originalEvent;
      this.isPropagationStopped = _0x3c566b, _0x1c10c3 && !this.isSimulated && _0x1c10c3.stopPropagation();
    },
    'stopImmediatePropagation': function () {
      var _0x5ab95d = this.originalEvent;
      this.isImmediatePropagationStopped = _0x3c566b, _0x5ab95d && !this.isSimulated && _0x5ab95d.stopImmediatePropagation(), this.stopPropagation();
    }
  }, _0x4afe76.each({
    'altKey': !0x0,
    'bubbles': !0x0,
    'cancelable': !0x0,
    'changedTouches': !0x0,
    'ctrlKey': !0x0,
    'detail': !0x0,
    'eventPhase': !0x0,
    'metaKey': !0x0,
    'pageX': !0x0,
    'pageY': !0x0,
    'shiftKey': !0x0,
    'view': !0x0,
    'char': !0x0,
    'code': !0x0,
    'charCode': !0x0,
    'key': !0x0,
    'keyCode': !0x0,
    'button': !0x0,
    'buttons': !0x0,
    'clientX': !0x0,
    'clientY': !0x0,
    'offsetX': !0x0,
    'offsetY': !0x0,
    'pointerId': !0x0,
    'pointerType': !0x0,
    'screenX': !0x0,
    'screenY': !0x0,
    'targetTouches': !0x0,
    'toElement': !0x0,
    'touches': !0x0,
    'which': !0x0
  }, _0x4afe76.event.addProp), _0x4afe76.each({
    'focus': 'focusin',
    'blur': 'focusout'
  }, function (_0x29daca, _0x152a83) {
    function _0xcbea98(_0x331799) {
      if (_0xefa3a6.documentMode) {
        var _0x527889 = _0x5efef5.get(this, 'handle'),
          _0x166dfa = _0x4afe76.event.fix(_0x331799);
        _0x166dfa.type = 'focusin' === _0x331799.type ? 'focus' : 'blur', _0x166dfa.isSimulated = !0x0, _0x527889(_0x331799), _0x166dfa.target === _0x166dfa.currentTarget && _0x527889(_0x166dfa);
      } else _0x4afe76.event.simulate(_0x152a83, _0x331799.target, _0x4afe76.event.fix(_0x331799));
    }
    _0x4afe76.event.special[_0x29daca] = {
      'setup': function () {
        var _0x55b260;
        if (_0x49ac2b(this, _0x29daca, !0x0), !_0xefa3a6.documentMode) return !0x1;
        (_0x55b260 = _0x5efef5.get(this, _0x152a83)) || this.addEventListener(_0x152a83, _0xcbea98), _0x5efef5.set(this, _0x152a83, (_0x55b260 || 0x0) + 0x1);
      },
      'trigger': function () {
        return _0x49ac2b(this, _0x29daca), !0x0;
      },
      'teardown': function () {
        var _0x5cc87f;
        if (!_0xefa3a6.documentMode) return !0x1;
        (_0x5cc87f = _0x5efef5.get(this, _0x152a83) - 0x1) ? _0x5efef5.set(this, _0x152a83, _0x5cc87f) : (this.removeEventListener(_0x152a83, _0xcbea98), _0x5efef5.remove(this, _0x152a83));
      },
      '_default': function (_0x353dff) {
        return _0x5efef5.get(_0x353dff.target, _0x29daca);
      },
      'delegateType': _0x152a83
    }, _0x4afe76.event.special[_0x152a83] = {
      'setup': function () {
        var _0x358f58 = this.ownerDocument || this.document || this,
          _0x429e63 = _0xefa3a6.documentMode ? this : _0x358f58,
          _0x2d2042 = _0x5efef5.get(_0x429e63, _0x152a83);
        _0x2d2042 || (_0xefa3a6.documentMode ? this.addEventListener(_0x152a83, _0xcbea98) : _0x358f58.addEventListener(_0x29daca, _0xcbea98, !0x0)), _0x5efef5.set(_0x429e63, _0x152a83, (_0x2d2042 || 0x0) + 0x1);
      },
      'teardown': function () {
        var _0x421598 = this.ownerDocument || this.document || this,
          _0x538f0a = _0xefa3a6.documentMode ? this : _0x421598,
          _0x42fc6a = _0x5efef5.get(_0x538f0a, _0x152a83) - 0x1;
        _0x42fc6a ? _0x5efef5.set(_0x538f0a, _0x152a83, _0x42fc6a) : (_0xefa3a6.documentMode ? this.removeEventListener(_0x152a83, _0xcbea98) : _0x421598.removeEventListener(_0x29daca, _0xcbea98, !0x0), _0x5efef5.remove(_0x538f0a, _0x152a83));
      }
    };
  }), _0x4afe76.each({
    'mouseenter': 'mouseover',
    'mouseleave': 'mouseout',
    'pointerenter': 'pointerover',
    'pointerleave': 'pointerout'
  }, function (_0x18978e, _0x1b8a60) {
    _0x4afe76.event.special[_0x18978e] = {
      'delegateType': _0x1b8a60,
      'bindType': _0x1b8a60,
      'handle': function (_0x39f7c6) {
        var _0x287d86,
          _0x123ef3 = _0x39f7c6.relatedTarget,
          _0x55dc7d = _0x39f7c6.handleObj;
        return _0x123ef3 && (_0x123ef3 === this || _0x4afe76.contains(this, _0x123ef3)) || (_0x39f7c6.type = _0x55dc7d.origType, _0x287d86 = _0x55dc7d.handler.apply(this, arguments), _0x39f7c6.type = _0x1b8a60), _0x287d86;
      }
    };
  }), _0x4afe76.fn.extend({
    'on': function (_0x97e3a6, _0x4b65a5, _0x326e73, _0x21dcf6) {
      return _0x3d4ef4(this, _0x97e3a6, _0x4b65a5, _0x326e73, _0x21dcf6);
    },
    'one': function (_0x41ad69, _0x117fc5, _0x1d1816, _0x1a6d23) {
      return _0x3d4ef4(this, _0x41ad69, _0x117fc5, _0x1d1816, _0x1a6d23, 0x1);
    },
    'off': function (_0xf92dbe, _0x15c2fc, _0x35db94) {
      var _0x54375a, _0x537696;
      if (_0xf92dbe && _0xf92dbe.preventDefault && _0xf92dbe.handleObj) return _0x54375a = _0xf92dbe.handleObj, _0x4afe76(_0xf92dbe.delegateTarget).off(_0x54375a.namespace ? _0x54375a.origType + '.' + _0x54375a.namespace : _0x54375a.origType, _0x54375a.selector, _0x54375a.handler), this;
      if ('object' == typeof _0xf92dbe) {
        for (_0x537696 in _0xf92dbe) this.off(_0x537696, _0x15c2fc, _0xf92dbe[_0x537696]);
        return this;
      }
      return !0x1 !== _0x15c2fc && 'function' != typeof _0x15c2fc || (_0x35db94 = _0x15c2fc, _0x15c2fc = void 0x0), !0x1 === _0x35db94 && (_0x35db94 = _0x460138), this.each(function () {
        _0x4afe76.event.remove(this, _0xf92dbe, _0x35db94, _0x15c2fc);
      });
    }
  });
  var _0x58e27a = /<script|<style|<link/i,
    _0x1a1b63 = /checked\s*(?:[^=]|=\s*.checked.)/i,
    _0x197495 = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  _0x4afe76.extend({
    'htmlPrefilter': function (_0x595242) {
      return _0x595242;
    },
    'clone': function (_0x227719, _0x33abb0, _0x4b00e7) {
      var _0x549282,
        _0x20068b,
        _0x364e8c,
        _0x40c8c0,
        _0x59a77b,
        _0x2f1eab,
        _0x182beb,
        _0x346439 = _0x227719.cloneNode(!0x0),
        _0x31a890 = _0x5790d0(_0x227719);
      if (!_0x36059a.noCloneChecked && !(0x1 !== _0x227719.nodeType && 0xb !== _0x227719.nodeType || _0x4afe76.isXMLDoc(_0x227719))) {
        _0x40c8c0 = _0x37be1d(_0x346439), _0x549282 = 0x0;
        for (_0x20068b = (_0x364e8c = _0x37be1d(_0x227719)).length; _0x549282 < _0x20068b; _0x549282++) _0x59a77b = _0x364e8c[_0x549282], _0x2f1eab = _0x40c8c0[_0x549282], void 0x0, 'input' === (_0x182beb = _0x2f1eab.nodeName.toLowerCase()) && _0x5c2d7f.test(_0x59a77b.type) ? _0x2f1eab.checked = _0x59a77b.checked : 'input' !== _0x182beb && 'textarea' !== _0x182beb || (_0x2f1eab.defaultValue = _0x59a77b.defaultValue);
      }
      if (_0x33abb0) {
        if (_0x4b00e7) {
          _0x364e8c = _0x364e8c || _0x37be1d(_0x227719), _0x40c8c0 = _0x40c8c0 || _0x37be1d(_0x346439), _0x549282 = 0x0;
          for (_0x20068b = _0x364e8c.length; _0x549282 < _0x20068b; _0x549282++) _0x4c109f(_0x364e8c[_0x549282], _0x40c8c0[_0x549282]);
        } else _0x4c109f(_0x227719, _0x346439);
      }
      return 0x0 < (_0x40c8c0 = _0x37be1d(_0x346439, 'script')).length && _0x4a29fc(_0x40c8c0, !_0x31a890 && _0x37be1d(_0x227719, 'script')), _0x346439;
    },
    'cleanData': function (_0x2d9776) {
      for (var _0x4dd6d7, _0x44af68, _0x553b3b, _0x408b11 = _0x4afe76.event.special, _0x4bb4f4 = 0x0; void 0x0 !== (_0x44af68 = _0x2d9776[_0x4bb4f4]); _0x4bb4f4++) if (_0x1da48d(_0x44af68)) {
        if (_0x4dd6d7 = _0x44af68[_0x5efef5.expando]) {
          if (_0x4dd6d7.events) {
            for (_0x553b3b in _0x4dd6d7.events) _0x408b11[_0x553b3b] ? _0x4afe76.event.remove(_0x44af68, _0x553b3b) : _0x4afe76.removeEvent(_0x44af68, _0x553b3b, _0x4dd6d7.handle);
          }
          _0x44af68[_0x5efef5.expando] = void 0x0;
        }
        _0x44af68[_0x814803.expando] && (_0x44af68[_0x814803.expando] = void 0x0);
      }
    }
  }), _0x4afe76.fn.extend({
    'detach': function (_0x1b0c69) {
      return _0xf5bd9(this, _0x1b0c69, !0x0);
    },
    'remove': function (_0x1d1b58) {
      return _0xf5bd9(this, _0x1d1b58);
    },
    'text': function (_0x3bd2d2) {
      return _0x483fcd(this, function (_0x4616ed) {
        return void 0x0 === _0x4616ed ? _0x4afe76.text(this) : this.empty().each(function () {
          0x1 !== this.nodeType && 0xb !== this.nodeType && 0x9 !== this.nodeType || (this.textContent = _0x4616ed);
        });
      }, null, _0x3bd2d2, arguments.length);
    },
    'append': function () {
      return _0x28d02a(this, arguments, function (_0x423d3e) {
        0x1 !== this.nodeType && 0xb !== this.nodeType && 0x9 !== this.nodeType || _0x5f103d(this, _0x423d3e).appendChild(_0x423d3e);
      });
    },
    'prepend': function () {
      return _0x28d02a(this, arguments, function (_0x140da0) {
        if (0x1 === this.nodeType || 0xb === this.nodeType || 0x9 === this.nodeType) {
          var _0x6f763b = _0x5f103d(this, _0x140da0);
          _0x6f763b.insertBefore(_0x140da0, _0x6f763b.firstChild);
        }
      });
    },
    'before': function () {
      return _0x28d02a(this, arguments, function (_0x4e5a18) {
        this.parentNode && this.parentNode.insertBefore(_0x4e5a18, this);
      });
    },
    'after': function () {
      return _0x28d02a(this, arguments, function (_0x36b2b5) {
        this.parentNode && this.parentNode.insertBefore(_0x36b2b5, this.nextSibling);
      });
    },
    'empty': function () {
      for (var _0x424885, _0x12e8bf = 0x0; null != (_0x424885 = this[_0x12e8bf]); _0x12e8bf++) 0x1 === _0x424885.nodeType && (_0x4afe76.cleanData(_0x37be1d(_0x424885, !0x1)), _0x424885.textContent = '');
      return this;
    },
    'clone': function (_0x2f59e3, _0x246565) {
      return _0x2f59e3 = null != _0x2f59e3 && _0x2f59e3, _0x246565 = null == _0x246565 ? _0x2f59e3 : _0x246565, this.map(function () {
        return _0x4afe76.clone(this, _0x2f59e3, _0x246565);
      });
    },
    'html': function (_0x35c2a6) {
      return _0x483fcd(this, function (_0x196e31) {
        var _0x1423ae = this[0x0] || {},
          _0xa38d84 = 0x0,
          _0xea94f8 = this.length;
        if (void 0x0 === _0x196e31 && 0x1 === _0x1423ae.nodeType) return _0x1423ae.innerHTML;
        if ('string' == typeof _0x196e31 && !_0x58e27a.test(_0x196e31) && !_0x141ef3[(_0x2a2f36.exec(_0x196e31) || ['', ''])[0x1].toLowerCase()]) {
          _0x196e31 = _0x4afe76.htmlPrefilter(_0x196e31);
          try {
            for (; _0xa38d84 < _0xea94f8; _0xa38d84++) 0x1 === (_0x1423ae = this[_0xa38d84] || {}).nodeType && (_0x4afe76.cleanData(_0x37be1d(_0x1423ae, !0x1)), _0x1423ae.innerHTML = _0x196e31);
            _0x1423ae = 0x0;
          } catch (_0x15af61) {}
        }
        _0x1423ae && this.empty().append(_0x196e31);
      }, null, _0x35c2a6, arguments.length);
    },
    'replaceWith': function () {
      var _0x1f3353 = [];
      return _0x28d02a(this, arguments, function (_0x354de7) {
        var _0x1fdf53 = this.parentNode;
        0x0 > _0x4afe76.inArray(this, _0x1f3353) && (_0x4afe76.cleanData(_0x37be1d(this)), _0x1fdf53 && _0x1fdf53.replaceChild(_0x354de7, this));
      }, _0x1f3353);
    }
  }), _0x4afe76.each({
    'appendTo': 'append',
    'prependTo': 'prepend',
    'insertBefore': 'before',
    'insertAfter': 'after',
    'replaceAll': 'replaceWith'
  }, function (_0x73a102, _0x235fd9) {
    _0x4afe76.fn[_0x73a102] = function (_0x411173) {
      for (var _0x59b7b9 = [], _0x273a5c = _0x4afe76(_0x411173), _0xa27b20 = _0x273a5c.length - 0x1, _0x403472 = 0x0; _0x403472 <= _0xa27b20; _0x403472++) _0x411173 = _0x403472 === _0xa27b20 ? this : this.clone(!0x0), _0x4afe76(_0x273a5c[_0x403472])[_0x235fd9](_0x411173), _0x4b1721.apply(_0x59b7b9, _0x411173.get());
      return this.pushStack(_0x59b7b9);
    };
  });
  var _0x4afae5 = RegExp('^(' + _0x1fe280 + ')(?!px)[a-z%]+$', 'i'),
    _0x4dfd6a = /^--/,
    _0x457bd4 = function (_0x5810a1) {
      var _0x137e68 = _0x5810a1.ownerDocument.defaultView;
      return _0x137e68 && _0x137e68.opener || (_0x137e68 = _0x43f1db), _0x137e68.getComputedStyle(_0x5810a1);
    },
    _0x265913 = function (_0x17cb32, _0x472ba5, _0x109dcd) {
      var _0x2e5ca6,
        _0x2b8274 = {};
      for (_0x2e5ca6 in _0x472ba5) _0x2b8274[_0x2e5ca6] = _0x17cb32.style[_0x2e5ca6], _0x17cb32.style[_0x2e5ca6] = _0x472ba5[_0x2e5ca6];
      for (_0x2e5ca6 in _0x109dcd = _0x109dcd.call(_0x17cb32), _0x472ba5) _0x17cb32.style[_0x2e5ca6] = _0x2b8274[_0x2e5ca6];
      return _0x109dcd;
    },
    _0xc33946 = RegExp(_0x1a1093.join('|'), 'i'),
    _0x8cdcc4 = function () {
      if (_0x51945e) {
        _0x2aa728.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', _0x51945e.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', _0x5dde1d.appendChild(_0x2aa728).appendChild(_0x51945e);
        var _0x5a7785 = _0x43f1db.getComputedStyle(_0x51945e);
        _0x5ede5a = '1%' !== _0x5a7785.top, _0x19de37 = 0xc === Math.round(parseFloat(_0x5a7785.marginLeft)), _0x51945e.style.right = '60%', _0x5ea096 = 0x24 === Math.round(parseFloat(_0x5a7785.right)), _0x1b603f = 0x24 === Math.round(parseFloat(_0x5a7785.width)), _0x51945e.style.position = 'absolute', _0x503d04 = 0xc === Math.round(parseFloat(_0x51945e.offsetWidth / 0x3)), _0x5dde1d.removeChild(_0x2aa728), _0x51945e = null;
      }
    },
    _0x5ede5a,
    _0x1b603f,
    _0x503d04,
    _0x5ea096,
    _0x1856d9,
    _0x19de37,
    _0x2aa728 = _0xefa3a6.createElement('div'),
    _0x51945e = _0xefa3a6.createElement('div');
  _0x51945e.style && (_0x51945e.style.backgroundClip = 'content-box', _0x51945e.cloneNode(!0x0).style.backgroundClip = '', _0x36059a.clearCloneStyle = 'content-box' === _0x51945e.style.backgroundClip, _0x4afe76.extend(_0x36059a, {
    'boxSizingReliable': function () {
      return _0x8cdcc4(), _0x1b603f;
    },
    'pixelBoxStyles': function () {
      return _0x8cdcc4(), _0x5ea096;
    },
    'pixelPosition': function () {
      return _0x8cdcc4(), _0x5ede5a;
    },
    'reliableMarginLeft': function () {
      return _0x8cdcc4(), _0x19de37;
    },
    'scrollboxSize': function () {
      return _0x8cdcc4(), _0x503d04;
    },
    'reliableTrDimensions': function () {
      var _0xcc837c, _0x2695c9, _0x3b100d, _0x538c92;
      return null == _0x1856d9 && (_0xcc837c = _0xefa3a6.createElement('table'), _0x2695c9 = _0xefa3a6.createElement('tr'), _0x3b100d = _0xefa3a6.createElement('div'), _0xcc837c.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate', _0x2695c9.style.cssText = "border:1px solid", _0x2695c9.style.height = '1px', _0x3b100d.style.height = '9px', _0x3b100d.style.display = 'block', _0x5dde1d.appendChild(_0xcc837c).appendChild(_0x2695c9).appendChild(_0x3b100d), _0x538c92 = _0x43f1db.getComputedStyle(_0x2695c9), _0x1856d9 = parseInt(_0x538c92.height, 0xa) + parseInt(_0x538c92.borderTopWidth, 0xa) + parseInt(_0x538c92.borderBottomWidth, 0xa) === _0x2695c9.offsetHeight, _0x5dde1d.removeChild(_0xcc837c)), _0x1856d9;
    }
  })), !0x0;
  var _0x3787f7 = ['Webkit', 'Moz', 'ms'],
    _0x50f6a0 = _0xefa3a6.createElement('div').style,
    _0x411814 = {},
    _0xfcf1f2 = /^(none|table(?!-c[ea]).+)/,
    _0x3b461e = {
      'position': 'absolute',
      'visibility': 'hidden',
      'display': 'block'
    },
    _0x117b5c = {
      'letterSpacing': '0',
      'fontWeight': '400'
    };
  _0x4afe76.extend({
    'cssHooks': {
      'opacity': {
        'get': function (_0x2f27ff, _0x14ea20) {
          if (_0x14ea20) {
            var _0x419771 = _0x2db5bf(_0x2f27ff, 'opacity');
            return '' === _0x419771 ? '1' : _0x419771;
          }
        }
      }
    },
    'cssNumber': {
      'animationIterationCount': !0x0,
      'aspectRatio': !0x0,
      'borderImageSlice': !0x0,
      'columnCount': !0x0,
      'flexGrow': !0x0,
      'flexShrink': !0x0,
      'fontWeight': !0x0,
      'gridArea': !0x0,
      'gridColumn': !0x0,
      'gridColumnEnd': !0x0,
      'gridColumnStart': !0x0,
      'gridRow': !0x0,
      'gridRowEnd': !0x0,
      'gridRowStart': !0x0,
      'lineHeight': !0x0,
      'opacity': !0x0,
      'order': !0x0,
      'orphans': !0x0,
      'scale': !0x0,
      'widows': !0x0,
      'zIndex': !0x0,
      'zoom': !0x0,
      'fillOpacity': !0x0,
      'floodOpacity': !0x0,
      'stopOpacity': !0x0,
      'strokeMiterlimit': !0x0,
      'strokeOpacity': !0x0
    },
    'cssProps': {},
    'style': function (_0x5ed82d, _0x47ce20, _0x385c36, _0x2e0895) {
      if (_0x5ed82d && 0x3 !== _0x5ed82d.nodeType && 0x8 !== _0x5ed82d.nodeType && _0x5ed82d.style) {
        var _0x21e34e,
          _0x4148cb,
          _0x17842e,
          _0x1be041 = _0x3e74ba(_0x47ce20),
          _0x3a98e3 = _0x4dfd6a.test(_0x47ce20),
          _0x5d147c = _0x5ed82d.style;
        if (_0x3a98e3 || (_0x47ce20 = _0x2b86c1(_0x1be041)), _0x17842e = _0x4afe76.cssHooks[_0x47ce20] || _0x4afe76.cssHooks[_0x1be041], void 0x0 === _0x385c36) return _0x17842e && 'get' in _0x17842e && void 0x0 !== (_0x21e34e = _0x17842e.get(_0x5ed82d, !0x1, _0x2e0895)) ? _0x21e34e : _0x5d147c[_0x47ce20];
        'string' === (_0x4148cb = typeof _0x385c36) && (_0x21e34e = _0x192f60.exec(_0x385c36)) && _0x21e34e[0x1] && (_0x385c36 = _0x4357b6(_0x5ed82d, _0x47ce20, _0x21e34e), _0x4148cb = 'number'), null != _0x385c36 && _0x385c36 == _0x385c36 && ('number' !== _0x4148cb || _0x3a98e3 || (_0x385c36 += _0x21e34e && _0x21e34e[0x3] || (_0x4afe76.cssNumber[_0x1be041] ? '' : 'px')), _0x36059a.clearCloneStyle || '' !== _0x385c36 || 0x0 !== _0x47ce20.indexOf('background') || (_0x5d147c[_0x47ce20] = 'inherit'), _0x17842e && 'set' in _0x17842e && void 0x0 === (_0x385c36 = _0x17842e.set(_0x5ed82d, _0x385c36, _0x2e0895)) || (_0x3a98e3 ? _0x5d147c.setProperty(_0x47ce20, _0x385c36) : _0x5d147c[_0x47ce20] = _0x385c36));
      }
    },
    'css': function (_0x5bfc31, _0x47e583, _0x51f51b, _0x17e43a) {
      var _0x5ed7d2,
        _0xe1caf8,
        _0x5b3897,
        _0x354c84 = _0x3e74ba(_0x47e583);
      return _0x4dfd6a.test(_0x47e583) || (_0x47e583 = _0x2b86c1(_0x354c84)), (_0x5b3897 = _0x4afe76.cssHooks[_0x47e583] || _0x4afe76.cssHooks[_0x354c84]) && 'get' in _0x5b3897 && (_0x5ed7d2 = _0x5b3897.get(_0x5bfc31, !0x0, _0x51f51b)), void 0x0 === _0x5ed7d2 && (_0x5ed7d2 = _0x2db5bf(_0x5bfc31, _0x47e583, _0x17e43a)), 'normal' === _0x5ed7d2 && _0x47e583 in _0x117b5c && (_0x5ed7d2 = _0x117b5c[_0x47e583]), '' === _0x51f51b || _0x51f51b ? (_0xe1caf8 = parseFloat(_0x5ed7d2), !0x0 === _0x51f51b || isFinite(_0xe1caf8) ? _0xe1caf8 || 0x0 : _0x5ed7d2) : _0x5ed7d2;
    }
  }), _0x4afe76.each(['height', 'width'], function (_0x25da25, _0x3d56b0) {
    _0x4afe76.cssHooks[_0x3d56b0] = {
      'get': function (_0xf2241, _0x474a08, _0x26f7bb) {
        if (_0x474a08) return !_0xfcf1f2.test(_0x4afe76.css(_0xf2241, 'display')) || _0xf2241.getClientRects().length && _0xf2241.getBoundingClientRect().width ? _0x450df3(_0xf2241, _0x3d56b0, _0x26f7bb) : _0x265913(_0xf2241, _0x3b461e, function () {
          return _0x450df3(_0xf2241, _0x3d56b0, _0x26f7bb);
        });
      },
      'set': function (_0x395c8f, _0x1c7455, _0x504e43) {
        var _0x1eaaf4,
          _0x1784c1 = _0x457bd4(_0x395c8f),
          _0x5e750b = !_0x36059a.scrollboxSize() && 'absolute' === _0x1784c1.position,
          _0x131e8f = (_0x5e750b || _0x504e43) && 'border-box' === _0x4afe76.css(_0x395c8f, 'boxSizing', !0x1, _0x1784c1);
        return _0x504e43 = _0x504e43 ? _0x26b294(_0x395c8f, _0x3d56b0, _0x504e43, _0x131e8f, _0x1784c1) : 0x0, _0x131e8f && _0x5e750b && (_0x504e43 -= Math.ceil(_0x395c8f['offset' + _0x3d56b0[0x0].toUpperCase() + _0x3d56b0.slice(0x1)] - parseFloat(_0x1784c1[_0x3d56b0]) - _0x26b294(_0x395c8f, _0x3d56b0, 'border', !0x1, _0x1784c1) - 0.5)), _0x504e43 && (_0x1eaaf4 = _0x192f60.exec(_0x1c7455)) && 'px' !== (_0x1eaaf4[0x3] || 'px') && (_0x395c8f.style[_0x3d56b0] = _0x1c7455, _0x1c7455 = _0x4afe76.css(_0x395c8f, _0x3d56b0)), _0x11a9ae(0x0, _0x1c7455, _0x504e43);
      }
    };
  }), _0x4afe76.cssHooks.marginLeft = _0x43c262(_0x36059a.reliableMarginLeft, function (_0x3b620f, _0x443561) {
    if (_0x443561) return (parseFloat(_0x2db5bf(_0x3b620f, 'marginLeft')) || _0x3b620f.getBoundingClientRect().left - _0x265913(_0x3b620f, {
      'marginLeft': 0x0
    }, function () {
      return _0x3b620f.getBoundingClientRect().left;
    })) + 'px';
  }), _0x4afe76.each({
    'margin': '',
    'padding': '',
    'border': 'Width'
  }, function (_0x3cf5f2, _0x1a528b) {
    _0x4afe76.cssHooks[_0x3cf5f2 + _0x1a528b] = {
      'expand': function (_0x2f24ca) {
        var _0x5c1697 = 0x0,
          _0x3e7a87 = {};
        for (_0x2f24ca = 'string' == typeof _0x2f24ca ? _0x2f24ca.split(" ") : [_0x2f24ca]; 0x4 > _0x5c1697; _0x5c1697++) _0x3e7a87[_0x3cf5f2 + _0x1a1093[_0x5c1697] + _0x1a528b] = _0x2f24ca[_0x5c1697] || _0x2f24ca[_0x5c1697 - 0x2] || _0x2f24ca[0x0];
        return _0x3e7a87;
      }
    }, 'margin' !== _0x3cf5f2 && (_0x4afe76.cssHooks[_0x3cf5f2 + _0x1a528b].set = _0x11a9ae);
  }), _0x4afe76.fn.extend({
    'css': function (_0x2c3f73, _0x571c00) {
      return _0x483fcd(this, function (_0x4101e2, _0xdf505f, _0x484b7b) {
        var _0x3e88af,
          _0x233b4d = {},
          _0x48d652 = 0x0;
        if (Array.isArray(_0xdf505f)) {
          _0x484b7b = _0x457bd4(_0x4101e2);
          for (_0x3e88af = _0xdf505f.length; _0x48d652 < _0x3e88af; _0x48d652++) _0x233b4d[_0xdf505f[_0x48d652]] = _0x4afe76.css(_0x4101e2, _0xdf505f[_0x48d652], !0x1, _0x484b7b);
          return _0x233b4d;
        }
        return void 0x0 !== _0x484b7b ? _0x4afe76.style(_0x4101e2, _0xdf505f, _0x484b7b) : _0x4afe76.css(_0x4101e2, _0xdf505f);
      }, _0x2c3f73, _0x571c00, 0x1 < arguments.length);
    }
  }), ((_0x4afe76.Tween = _0x51dd7c).prototype = {
    'constructor': _0x51dd7c,
    'init': function (_0x54b355, _0x201d85, _0x242c4b, _0x32e258, _0x4ff906, _0x950819) {
      this.elem = _0x54b355, this.prop = _0x242c4b, this.easing = _0x4ff906 || _0x4afe76.easing._default, this.options = _0x201d85, this.start = this.now = this.cur(), this.end = _0x32e258, this.unit = _0x950819 || (_0x4afe76.cssNumber[_0x242c4b] ? '' : 'px');
    },
    'cur': function () {
      var _0x48c758 = _0x51dd7c.propHooks[this.prop];
      return _0x48c758 && _0x48c758.get ? _0x48c758.get(this) : _0x51dd7c.propHooks._default.get(this);
    },
    'run': function (_0x304aba) {
      var _0xa5392b,
        _0x24e99f = _0x51dd7c.propHooks[this.prop];
      return this.options.duration ? this.pos = _0xa5392b = _0x4afe76.easing[this.easing](_0x304aba, this.options.duration * _0x304aba, 0x0, 0x1, this.options.duration) : this.pos = _0xa5392b = _0x304aba, this.now = (this.end - this.start) * _0xa5392b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), _0x24e99f && _0x24e99f.set ? _0x24e99f.set(this) : _0x51dd7c.propHooks._default.set(this), this;
    }
  }).init.prototype = _0x51dd7c.prototype, (_0x51dd7c.propHooks = {
    '_default': {
      'get': function (_0x430a73) {
        var _0x297a23;
        return 0x1 !== _0x430a73.elem.nodeType || null != _0x430a73.elem[_0x430a73.prop] && null == _0x430a73.elem.style[_0x430a73.prop] ? _0x430a73.elem[_0x430a73.prop] : (_0x297a23 = _0x4afe76.css(_0x430a73.elem, _0x430a73.prop, '')) && 'auto' !== _0x297a23 ? _0x297a23 : 0x0;
      },
      'set': function (_0x2b0b5e) {
        _0x4afe76.fx.step[_0x2b0b5e.prop] ? _0x4afe76.fx.step[_0x2b0b5e.prop](_0x2b0b5e) : 0x1 !== _0x2b0b5e.elem.nodeType || !_0x4afe76.cssHooks[_0x2b0b5e.prop] && null == _0x2b0b5e.elem.style[_0x2b86c1(_0x2b0b5e.prop)] ? _0x2b0b5e.elem[_0x2b0b5e.prop] = _0x2b0b5e.now : _0x4afe76.style(_0x2b0b5e.elem, _0x2b0b5e.prop, _0x2b0b5e.now + _0x2b0b5e.unit);
      }
    }
  }).scrollTop = _0x51dd7c.propHooks.scrollLeft = {
    'set': function (_0x4238cd) {
      _0x4238cd.elem.nodeType && _0x4238cd.elem.parentNode && (_0x4238cd.elem[_0x4238cd.prop] = _0x4238cd.now);
    }
  }, _0x4afe76.easing = {
    'linear': function (_0x10de88) {
      return _0x10de88;
    },
    'swing': function (_0x4d2f30) {
      return 0.5 - Math.cos(_0x4d2f30 * Math.PI) / 0x2;
    },
    '_default': 'swing'
  }, _0x4afe76.fx = _0x51dd7c.prototype.init, _0x4afe76.fx.step = {};
  var _0x506807,
    _0x57ff9c,
    _0x223864,
    _0x288d13,
    _0xf07cfe = /^(?:toggle|show|hide)$/,
    _0x4a6d4c = /queueHooks$/;
  _0x4afe76.Animation = _0x4afe76.extend(_0x2e99d4, {
    'tweeners': {
      '*': [function (_0x399b50, _0xda07b2) {
        var _0x14c709 = this.createTween(_0x399b50, _0xda07b2);
        return _0x4357b6(_0x14c709.elem, _0x399b50, _0x192f60.exec(_0xda07b2), _0x14c709), _0x14c709;
      }]
    },
    'tweener': function (_0x4a5bea, _0x30d17a) {
      _0x5cc277(_0x4a5bea) ? (_0x30d17a = _0x4a5bea, _0x4a5bea = ['*']) : _0x4a5bea = _0x4a5bea.match(_0x513902);
      for (var _0x4bd971, _0x10c43f = 0x0, _0x59fc37 = _0x4a5bea.length; _0x10c43f < _0x59fc37; _0x10c43f++) _0x4bd971 = _0x4a5bea[_0x10c43f], _0x2e99d4.tweeners[_0x4bd971] = _0x2e99d4.tweeners[_0x4bd971] || [], _0x2e99d4.tweeners[_0x4bd971].unshift(_0x30d17a);
    },
    'prefilters': [function (_0x5119e1, _0x16a884, _0x45bbe8) {
      var _0x1215cb,
        _0x72ed4f,
        _0xd7278f,
        _0x50fee4,
        _0x26cc3c,
        _0x35634d,
        _0x27e93b,
        _0x3c90e4 = 'width' in _0x16a884 || 'height' in _0x16a884,
        _0x2e8cbd = this,
        _0x5e2fd0 = {},
        _0x12cb9f = _0x5119e1.style,
        _0x3227d6 = _0x5119e1.nodeType && _0x31403c(_0x5119e1),
        _0x10d765 = _0x5efef5.get(_0x5119e1, 'fxshow');
      for (_0x1215cb in _0x45bbe8.queue || (null == (_0x50fee4 = _0x4afe76._queueHooks(_0x5119e1, 'fx')).unqueued && (_0x50fee4.unqueued = 0x0, _0x26cc3c = _0x50fee4.empty.fire, _0x50fee4.empty.fire = function () {
        _0x50fee4.unqueued || _0x26cc3c();
      }), _0x50fee4.unqueued++, _0x2e8cbd.always(function () {
        _0x2e8cbd.always(function () {
          _0x50fee4.unqueued--, _0x4afe76.queue(_0x5119e1, 'fx').length || _0x50fee4.empty.fire();
        });
      })), _0x16a884) if (_0x72ed4f = _0x16a884[_0x1215cb], _0xf07cfe.test(_0x72ed4f)) {
        if (delete _0x16a884[_0x1215cb], _0xd7278f = _0xd7278f || 'toggle' === _0x72ed4f, _0x72ed4f === (_0x3227d6 ? 'hide' : 'show')) {
          if ('show' !== _0x72ed4f || !_0x10d765 || void 0x0 === _0x10d765[_0x1215cb]) continue;
          _0x3227d6 = !0x0;
        }
        _0x5e2fd0[_0x1215cb] = _0x10d765 && _0x10d765[_0x1215cb] || _0x4afe76.style(_0x5119e1, _0x1215cb);
      }
      if ((_0x16a884 = !_0x4afe76.isEmptyObject(_0x16a884)) || !_0x4afe76.isEmptyObject(_0x5e2fd0)) {
        for (_0x1215cb in _0x3c90e4 && 0x1 === _0x5119e1.nodeType && (_0x45bbe8.overflow = [_0x12cb9f.overflow, _0x12cb9f.overflowX, _0x12cb9f.overflowY], null == (_0x35634d = _0x10d765 && _0x10d765.display) && (_0x35634d = _0x5efef5.get(_0x5119e1, 'display')), 'none' === (_0x27e93b = _0x4afe76.css(_0x5119e1, 'display')) && (_0x35634d ? _0x27e93b = _0x35634d : (_0x5ef22d([_0x5119e1], !0x0), _0x35634d = _0x5119e1.style.display || _0x35634d, _0x27e93b = _0x4afe76.css(_0x5119e1, 'display'), _0x5ef22d([_0x5119e1]))), ('inline' === _0x27e93b || 'inline-block' === _0x27e93b && null != _0x35634d) && 'none' === _0x4afe76.css(_0x5119e1, 'float') && (_0x16a884 || (_0x2e8cbd.done(function () {
          _0x12cb9f.display = _0x35634d;
        }), null == _0x35634d && (_0x27e93b = _0x12cb9f.display, _0x35634d = 'none' === _0x27e93b ? '' : _0x27e93b)), _0x12cb9f.display = 'inline-block')), _0x45bbe8.overflow && (_0x12cb9f.overflow = 'hidden', _0x2e8cbd.always(function () {
          _0x12cb9f.overflow = _0x45bbe8.overflow[0x0], _0x12cb9f.overflowX = _0x45bbe8.overflow[0x1], _0x12cb9f.overflowY = _0x45bbe8.overflow[0x2];
        })), _0x16a884 = !0x1, _0x5e2fd0) _0x16a884 || (_0x10d765 ? 'hidden' in _0x10d765 && (_0x3227d6 = _0x10d765.hidden) : _0x10d765 = _0x5efef5.access(_0x5119e1, 'fxshow', {
          'display': _0x35634d
        }), _0xd7278f && (_0x10d765.hidden = !_0x3227d6), _0x3227d6 && _0x5ef22d([_0x5119e1], !0x0), _0x2e8cbd.done(function () {
          for (_0x1215cb in _0x3227d6 || _0x5ef22d([_0x5119e1]), _0x5efef5.remove(_0x5119e1, 'fxshow'), _0x5e2fd0) _0x4afe76.style(_0x5119e1, _0x1215cb, _0x5e2fd0[_0x1215cb]);
        })), _0x16a884 = _0x414cb6(_0x3227d6 ? _0x10d765[_0x1215cb] : 0x0, _0x1215cb, _0x2e8cbd), _0x1215cb in _0x10d765 || (_0x10d765[_0x1215cb] = _0x16a884.start, _0x3227d6 && (_0x16a884.end = _0x16a884.start, _0x16a884.start = 0x0));
      }
    }],
    'prefilter': function (_0x206294, _0x4840f6) {
      _0x4840f6 ? _0x2e99d4.prefilters.unshift(_0x206294) : _0x2e99d4.prefilters.push(_0x206294);
    }
  }), _0x4afe76.speed = function (_0x1406a9, _0x258acb, _0x33fc41) {
    var _0x328174 = _0x1406a9 && 'object' == typeof _0x1406a9 ? _0x4afe76.extend({}, _0x1406a9) : {
      'complete': _0x33fc41 || !_0x33fc41 && _0x258acb || _0x5cc277(_0x1406a9) && _0x1406a9,
      'duration': _0x1406a9,
      'easing': _0x33fc41 && _0x258acb || _0x258acb && !_0x5cc277(_0x258acb) && _0x258acb
    };
    return _0x4afe76.fx.off ? _0x328174.duration = 0x0 : 'number' != typeof _0x328174.duration && (_0x328174.duration in _0x4afe76.fx.speeds ? _0x328174.duration = _0x4afe76.fx.speeds[_0x328174.duration] : _0x328174.duration = _0x4afe76.fx.speeds._default), null != _0x328174.queue && !0x0 !== _0x328174.queue || (_0x328174.queue = 'fx'), _0x328174.old = _0x328174.complete, _0x328174.complete = function () {
      _0x5cc277(_0x328174.old) && _0x328174.old.call(this), _0x328174.queue && _0x4afe76.dequeue(this, _0x328174.queue);
    }, _0x328174;
  }, _0x4afe76.fn.extend({
    'fadeTo': function (_0x2458ce, _0x16c569, _0x558da0, _0x131b2c) {
      return this.filter(_0x31403c).css('opacity', 0x0).show().end().animate({
        'opacity': _0x16c569
      }, _0x2458ce, _0x558da0, _0x131b2c);
    },
    'animate': function (_0x43f40f, _0x1da871, _0x49f599, _0x2aaa6b) {
      var _0x3a9d95 = _0x4afe76.isEmptyObject(_0x43f40f),
        _0x3af001 = _0x4afe76.speed(_0x1da871, _0x49f599, _0x2aaa6b);
      return _0x1da871 = function () {
        var _0x4b0635 = _0x2e99d4(this, _0x4afe76.extend({}, _0x43f40f), _0x3af001);
        (_0x3a9d95 || _0x5efef5.get(this, 'finish')) && _0x4b0635.stop(!0x0);
      }, _0x1da871.finish = _0x1da871, _0x3a9d95 || !0x1 === _0x3af001.queue ? this.each(_0x1da871) : this.queue(_0x3af001.queue, _0x1da871);
    },
    'stop': function (_0x6925e6, _0x3c8556, _0x3c8729) {
      var _0x4fb384 = function (_0x58df97) {
        var _0x12385c = _0x58df97.stop;
        delete _0x58df97.stop, _0x12385c(_0x3c8729);
      };
      return 'string' != typeof _0x6925e6 && (_0x3c8729 = _0x3c8556, _0x3c8556 = _0x6925e6, _0x6925e6 = void 0x0), _0x3c8556 && this.queue(_0x6925e6 || 'fx', []), this.each(function () {
        var _0x22568b = !0x0,
          _0x5595f7 = null != _0x6925e6 && _0x6925e6 + 'queueHooks',
          _0x3ebbe5 = _0x4afe76.timers,
          _0x21075e = _0x5efef5.get(this);
        if (_0x5595f7) _0x21075e[_0x5595f7] && _0x21075e[_0x5595f7].stop && _0x4fb384(_0x21075e[_0x5595f7]);else {
          for (_0x5595f7 in _0x21075e) _0x21075e[_0x5595f7] && _0x21075e[_0x5595f7].stop && _0x4a6d4c.test(_0x5595f7) && _0x4fb384(_0x21075e[_0x5595f7]);
        }
        for (_0x5595f7 = _0x3ebbe5.length; _0x5595f7--;) _0x3ebbe5[_0x5595f7].elem !== this || null != _0x6925e6 && _0x3ebbe5[_0x5595f7].queue !== _0x6925e6 || (_0x3ebbe5[_0x5595f7].anim.stop(_0x3c8729), _0x22568b = !0x1, _0x3ebbe5.splice(_0x5595f7, 0x1));
        !_0x22568b && _0x3c8729 || _0x4afe76.dequeue(this, _0x6925e6);
      });
    },
    'finish': function (_0x5236d1) {
      return !0x1 !== _0x5236d1 && (_0x5236d1 = _0x5236d1 || 'fx'), this.each(function () {
        var _0x2d478e,
          _0x338988 = _0x5efef5.get(this),
          _0x18dc06 = _0x338988[_0x5236d1 + 'queue'];
        _0x2d478e = _0x338988[_0x5236d1 + 'queueHooks'];
        var _0x2c7db2 = _0x4afe76.timers,
          _0x3f8ab1 = _0x18dc06 ? _0x18dc06.length : 0x0;
        _0x338988.finish = !0x0, _0x4afe76.queue(this, _0x5236d1, []), _0x2d478e && _0x2d478e.stop && _0x2d478e.stop.call(this, !0x0);
        for (_0x2d478e = _0x2c7db2.length; _0x2d478e--;) _0x2c7db2[_0x2d478e].elem === this && _0x2c7db2[_0x2d478e].queue === _0x5236d1 && (_0x2c7db2[_0x2d478e].anim.stop(!0x0), _0x2c7db2.splice(_0x2d478e, 0x1));
        for (_0x2d478e = 0x0; _0x2d478e < _0x3f8ab1; _0x2d478e++) _0x18dc06[_0x2d478e] && _0x18dc06[_0x2d478e].finish && _0x18dc06[_0x2d478e].finish.call(this);
        delete _0x338988.finish;
      });
    }
  }), _0x4afe76.each(['toggle', 'show', 'hide'], function (_0x4533f5, _0xc37e52) {
    var _0x1844c6 = _0x4afe76.fn[_0xc37e52];
    _0x4afe76.fn[_0xc37e52] = function (_0x4c30e1, _0x18b3f9, _0x239466) {
      return null == _0x4c30e1 || 'boolean' == typeof _0x4c30e1 ? _0x1844c6.apply(this, arguments) : this.animate(_0x317d85(_0xc37e52, !0x0), _0x4c30e1, _0x18b3f9, _0x239466);
    };
  }), _0x4afe76.each({
    'slideDown': _0x317d85('show'),
    'slideUp': _0x317d85('hide'),
    'slideToggle': _0x317d85('toggle'),
    'fadeIn': {
      'opacity': 'show'
    },
    'fadeOut': {
      'opacity': 'hide'
    },
    'fadeToggle': {
      'opacity': 'toggle'
    }
  }, function (_0x318cf0, _0x5578f2) {
    _0x4afe76.fn[_0x318cf0] = function (_0x1bb1da, _0x51c845, _0xd18464) {
      return this.animate(_0x5578f2, _0x1bb1da, _0x51c845, _0xd18464);
    };
  }), _0x4afe76.timers = [], _0x4afe76.fx.tick = function () {
    var _0x505060,
      _0x1aa0f7 = 0x0,
      _0x4de35c = _0x4afe76.timers;
    for (_0x506807 = Date.now(); _0x1aa0f7 < _0x4de35c.length; _0x1aa0f7++) (_0x505060 = _0x4de35c[_0x1aa0f7])() || _0x4de35c[_0x1aa0f7] !== _0x505060 || _0x4de35c.splice(_0x1aa0f7--, 0x1);
    _0x4de35c.length || _0x4afe76.fx.stop(), _0x506807 = void 0x0;
  }, _0x4afe76.fx.timer = function (_0x18c60f) {
    _0x4afe76.timers.push(_0x18c60f), _0x4afe76.fx.start();
  }, _0x4afe76.fx.interval = 0xd, _0x4afe76.fx.start = function () {
    _0x57ff9c || (_0x57ff9c = !0x0, _0x3cbbc0());
  }, _0x4afe76.fx.stop = function () {
    _0x57ff9c = null;
  }, _0x4afe76.fx.speeds = {
    'slow': 0x258,
    'fast': 0xc8,
    '_default': 0x190
  }, _0x4afe76.fn.delay = function (_0x461e5b, _0x2441e6) {
    return _0x461e5b = _0x4afe76.fx && _0x4afe76.fx.speeds[_0x461e5b] || _0x461e5b, _0x2441e6 = _0x2441e6 || 'fx', this.queue(_0x2441e6, function (_0x14daa7, _0x1c3492) {
      var _0x355057 = _0x43f1db.setTimeout(_0x14daa7, _0x461e5b);
      _0x1c3492.stop = function () {
        _0x43f1db.clearTimeout(_0x355057);
      };
    });
  }, _0x223864 = _0xefa3a6.createElement('input'), _0x288d13 = _0xefa3a6.createElement('select').appendChild(_0xefa3a6.createElement('option')), _0x223864.type = 'checkbox', _0x36059a.checkOn = '' !== _0x223864.value, _0x36059a.optSelected = _0x288d13.selected, (_0x223864 = _0xefa3a6.createElement('input')).value = 't', _0x223864.type = 'radio', _0x36059a.radioValue = 't' === _0x223864.value;
  var _0xd9cd63,
    _0x3a58dd = _0x4afe76.expr.attrHandle;
  _0x4afe76.fn.extend({
    'attr': function (_0x1336e6, _0x45aa4f) {
      return _0x483fcd(this, _0x4afe76.attr, _0x1336e6, _0x45aa4f, 0x1 < arguments.length);
    },
    'removeAttr': function (_0x3c38c2) {
      return this.each(function () {
        _0x4afe76.removeAttr(this, _0x3c38c2);
      });
    }
  }), _0x4afe76.extend({
    'attr': function (_0x43127c, _0x2689c7, _0x5ae9e5) {
      var _0x5197f8,
        _0x118de1,
        _0x24ffc9 = _0x43127c.nodeType;
      if (0x3 !== _0x24ffc9 && 0x8 !== _0x24ffc9 && 0x2 !== _0x24ffc9) return 'undefined' == typeof _0x43127c.getAttribute ? _0x4afe76.prop(_0x43127c, _0x2689c7, _0x5ae9e5) : (0x1 === _0x24ffc9 && _0x4afe76.isXMLDoc(_0x43127c) || (_0x118de1 = _0x4afe76.attrHooks[_0x2689c7.toLowerCase()] || (_0x4afe76.expr.match.bool.test(_0x2689c7) ? _0xd9cd63 : void 0x0)), void 0x0 !== _0x5ae9e5 ? null === _0x5ae9e5 ? void _0x4afe76.removeAttr(_0x43127c, _0x2689c7) : _0x118de1 && 'set' in _0x118de1 && void 0x0 !== (_0x5197f8 = _0x118de1.set(_0x43127c, _0x5ae9e5, _0x2689c7)) ? _0x5197f8 : (_0x43127c.setAttribute(_0x2689c7, _0x5ae9e5 + ''), _0x5ae9e5) : _0x118de1 && 'get' in _0x118de1 && null !== (_0x5197f8 = _0x118de1.get(_0x43127c, _0x2689c7)) ? _0x5197f8 : null == (_0x5197f8 = _0x4afe76.find.attr(_0x43127c, _0x2689c7)) ? void 0x0 : _0x5197f8);
    },
    'attrHooks': {
      'type': {
        'set': function (_0x98a68d, _0x36340a) {
          if (!_0x36059a.radioValue && 'radio' === _0x36340a && _0x3238c8(_0x98a68d, 'input')) {
            var _0x4e81ab = _0x98a68d.value;
            return _0x98a68d.setAttribute('type', _0x36340a), _0x4e81ab && (_0x98a68d.value = _0x4e81ab), _0x36340a;
          }
        }
      }
    },
    'removeAttr': function (_0x412277, _0x528f59) {
      var _0x24edea,
        _0x58eaa8 = 0x0,
        _0x459377 = _0x528f59 && _0x528f59.match(_0x513902);
      if (_0x459377 && 0x1 === _0x412277.nodeType) {
        for (; _0x24edea = _0x459377[_0x58eaa8++];) _0x412277.removeAttribute(_0x24edea);
      }
    }
  }), _0xd9cd63 = {
    'set': function (_0xa0108c, _0x35e254, _0x5824c4) {
      return !0x1 === _0x35e254 ? _0x4afe76.removeAttr(_0xa0108c, _0x5824c4) : _0xa0108c.setAttribute(_0x5824c4, _0x5824c4), _0x5824c4;
    }
  }, _0x4afe76.each(_0x4afe76.expr.match.bool.source.match(/\w+/g), function (_0x4e91db, _0x3b753f) {
    var _0x389ca0 = _0x3a58dd[_0x3b753f] || _0x4afe76.find.attr;
    _0x3a58dd[_0x3b753f] = function (_0x577c43, _0x4e6a81, _0x3ff7f3) {
      var _0x8ea56e,
        _0x1b8390,
        _0x2e00de = _0x4e6a81.toLowerCase();
      return _0x3ff7f3 || (_0x1b8390 = _0x3a58dd[_0x2e00de], _0x3a58dd[_0x2e00de] = _0x8ea56e, _0x8ea56e = null != _0x389ca0(_0x577c43, _0x4e6a81, _0x3ff7f3) ? _0x2e00de : null, _0x3a58dd[_0x2e00de] = _0x1b8390), _0x8ea56e;
    };
  });
  var _0x479ded = /^(?:input|select|textarea|button)$/i,
    _0xa178dd = /^(?:a|area)$/i;
  _0x4afe76.fn.extend({
    'prop': function (_0x2ce07c, _0x178323) {
      return _0x483fcd(this, _0x4afe76.prop, _0x2ce07c, _0x178323, 0x1 < arguments.length);
    },
    'removeProp': function (_0x171d6e) {
      return this.each(function () {
        delete this[_0x4afe76.propFix[_0x171d6e] || _0x171d6e];
      });
    }
  }), _0x4afe76.extend({
    'prop': function (_0x4b0363, _0x464a8c, _0x1112c4) {
      var _0x98569f,
        _0x414b4c,
        _0x31de90 = _0x4b0363.nodeType;
      if (0x3 !== _0x31de90 && 0x8 !== _0x31de90 && 0x2 !== _0x31de90) return 0x1 === _0x31de90 && _0x4afe76.isXMLDoc(_0x4b0363) || (_0x464a8c = _0x4afe76.propFix[_0x464a8c] || _0x464a8c, _0x414b4c = _0x4afe76.propHooks[_0x464a8c]), void 0x0 !== _0x1112c4 ? _0x414b4c && 'set' in _0x414b4c && void 0x0 !== (_0x98569f = _0x414b4c.set(_0x4b0363, _0x1112c4, _0x464a8c)) ? _0x98569f : _0x4b0363[_0x464a8c] = _0x1112c4 : _0x414b4c && 'get' in _0x414b4c && null !== (_0x98569f = _0x414b4c.get(_0x4b0363, _0x464a8c)) ? _0x98569f : _0x4b0363[_0x464a8c];
    },
    'propHooks': {
      'tabIndex': {
        'get': function (_0x2348a1) {
          var _0x1cacbe = _0x4afe76.find.attr(_0x2348a1, 'tabindex');
          return _0x1cacbe ? parseInt(_0x1cacbe, 0xa) : _0x479ded.test(_0x2348a1.nodeName) || _0xa178dd.test(_0x2348a1.nodeName) && _0x2348a1.href ? 0x0 : -0x1;
        }
      }
    },
    'propFix': {
      'for': 'htmlFor',
      'class': 'className'
    }
  }), _0x36059a.optSelected || (_0x4afe76.propHooks.selected = {
    'get': function (_0x3a5342) {
      return _0x3a5342 = _0x3a5342.parentNode, _0x3a5342 && _0x3a5342.parentNode && _0x3a5342.parentNode.selectedIndex, null;
    },
    'set': function (_0x380df6) {
      _0x380df6 = _0x380df6.parentNode, _0x380df6 && (_0x380df6.selectedIndex, _0x380df6.parentNode && _0x380df6.parentNode.selectedIndex);
    }
  }), _0x4afe76.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
    _0x4afe76.propFix[this.toLowerCase()] = this;
  }), _0x4afe76.fn.extend({
    'addClass': function (_0x13fbd1) {
      var _0x35639f, _0x180262, _0x1efab6, _0x57575f, _0x18e500, _0x4f0a07;
      return _0x5cc277(_0x13fbd1) ? this.each(function (_0x442795) {
        _0x4afe76(this).addClass(_0x13fbd1.call(this, _0x442795, _0xeb9dad(this)));
      }) : (_0x35639f = _0xb47148(_0x13fbd1)).length ? this.each(function () {
        if (_0x1efab6 = _0xeb9dad(this), _0x180262 = 0x1 === this.nodeType && " " + _0x300baa(_0x1efab6) + " ") {
          for (_0x18e500 = 0x0; _0x18e500 < _0x35639f.length; _0x18e500++) _0x57575f = _0x35639f[_0x18e500], 0x0 > _0x180262.indexOf(" " + _0x57575f + " ") && (_0x180262 += _0x57575f + " ");
          _0x4f0a07 = _0x300baa(_0x180262), _0x1efab6 !== _0x4f0a07 && this.setAttribute('class', _0x4f0a07);
        }
      }) : this;
    },
    'removeClass': function (_0x57127c) {
      var _0x5a1a07, _0x2bf282, _0x1a7f02, _0x415690, _0x56f75b, _0x55f908;
      return _0x5cc277(_0x57127c) ? this.each(function (_0x2dd5c9) {
        _0x4afe76(this).removeClass(_0x57127c.call(this, _0x2dd5c9, _0xeb9dad(this)));
      }) : arguments.length ? (_0x5a1a07 = _0xb47148(_0x57127c)).length ? this.each(function () {
        if (_0x1a7f02 = _0xeb9dad(this), _0x2bf282 = 0x1 === this.nodeType && " " + _0x300baa(_0x1a7f02) + " ") {
          for (_0x56f75b = 0x0; _0x56f75b < _0x5a1a07.length; _0x56f75b++) for (_0x415690 = _0x5a1a07[_0x56f75b]; -0x1 < _0x2bf282.indexOf(" " + _0x415690 + " ");) _0x2bf282 = _0x2bf282.replace(" " + _0x415690 + " ", " ");
          _0x55f908 = _0x300baa(_0x2bf282), _0x1a7f02 !== _0x55f908 && this.setAttribute('class', _0x55f908);
        }
      }) : this : this.attr('class', '');
    },
    'toggleClass': function (_0x2e7036, _0x484f00) {
      var _0x6cc79c,
        _0x486d9e,
        _0x2df4c5,
        _0x259880,
        _0x19fda9 = typeof _0x2e7036,
        _0x1850b0 = 'string' === _0x19fda9 || Array.isArray(_0x2e7036);
      return _0x5cc277(_0x2e7036) ? this.each(function (_0x3c5b94) {
        _0x4afe76(this).toggleClass(_0x2e7036.call(this, _0x3c5b94, _0xeb9dad(this), _0x484f00), _0x484f00);
      }) : 'boolean' == typeof _0x484f00 && _0x1850b0 ? _0x484f00 ? this.addClass(_0x2e7036) : this.removeClass(_0x2e7036) : (_0x6cc79c = _0xb47148(_0x2e7036), this.each(function () {
        if (_0x1850b0) {
          _0x259880 = _0x4afe76(this);
          for (_0x2df4c5 = 0x0; _0x2df4c5 < _0x6cc79c.length; _0x2df4c5++) _0x486d9e = _0x6cc79c[_0x2df4c5], _0x259880.hasClass(_0x486d9e) ? _0x259880.removeClass(_0x486d9e) : _0x259880.addClass(_0x486d9e);
        } else void 0x0 !== _0x2e7036 && 'boolean' !== _0x19fda9 || ((_0x486d9e = _0xeb9dad(this)) && _0x5efef5.set(this, '__className__', _0x486d9e), this.setAttribute && this.setAttribute('class', _0x486d9e || !0x1 === _0x2e7036 ? '' : _0x5efef5.get(this, '__className__') || ''));
      }));
    },
    'hasClass': function (_0x46562f) {
      var _0x14483c,
        _0x4f608c = 0x0;
      for (_0x46562f = " " + _0x46562f + " "; _0x14483c = this[_0x4f608c++];) if (0x1 === _0x14483c.nodeType && -0x1 < (" " + _0x300baa(_0xeb9dad(_0x14483c)) + " ").indexOf(_0x46562f)) return !0x0;
      return !0x1;
    }
  });
  var _0x1c8072 = /\r/g;
  _0x4afe76.fn.extend({
    'val': function (_0x1025a3) {
      var _0x456ba4,
        _0x2d0dc2,
        _0x36d6a5,
        _0x36e10d = this[0x0];
      return arguments.length ? (_0x36d6a5 = _0x5cc277(_0x1025a3), this.each(function (_0x50c705) {
        var _0x5cb428;
        0x1 === this.nodeType && (null == (_0x5cb428 = _0x36d6a5 ? _0x1025a3.call(this, _0x50c705, _0x4afe76(this).val()) : _0x1025a3) ? _0x5cb428 = '' : 'number' == typeof _0x5cb428 ? _0x5cb428 += '' : Array.isArray(_0x5cb428) && (_0x5cb428 = _0x4afe76.map(_0x5cb428, function (_0x1c825f) {
          return null == _0x1c825f ? '' : _0x1c825f + '';
        })), (_0x456ba4 = _0x4afe76.valHooks[this.type] || _0x4afe76.valHooks[this.nodeName.toLowerCase()]) && 'set' in _0x456ba4 && void 0x0 !== _0x456ba4.set(this, _0x5cb428, 'value') || (this.value = _0x5cb428));
      })) : _0x36e10d ? (_0x456ba4 = _0x4afe76.valHooks[_0x36e10d.type] || _0x4afe76.valHooks[_0x36e10d.nodeName.toLowerCase()]) && 'get' in _0x456ba4 && void 0x0 !== (_0x2d0dc2 = _0x456ba4.get(_0x36e10d, 'value')) ? _0x2d0dc2 : 'string' == typeof (_0x2d0dc2 = _0x36e10d.value) ? _0x2d0dc2.replace(_0x1c8072, '') : null == _0x2d0dc2 ? '' : _0x2d0dc2 : void 0x0;
    }
  }), _0x4afe76.extend({
    'valHooks': {
      'option': {
        'get': function (_0x2cb496) {
          var _0x176092 = _0x4afe76.find.attr(_0x2cb496, 'value');
          return null != _0x176092 ? _0x176092 : _0x300baa(_0x4afe76.text(_0x2cb496));
        }
      },
      'select': {
        'get': function (_0x50b3b2) {
          var _0x431f8b,
            _0x2d61c3,
            _0x7711b0 = _0x50b3b2.options,
            _0x1d3e27 = _0x50b3b2.selectedIndex,
            _0x520896 = 'select-one' === _0x50b3b2.type,
            _0x3b6b3d = _0x520896 ? null : [],
            _0x50d272 = _0x520896 ? _0x1d3e27 + 0x1 : _0x7711b0.length;
          for (_0x2d61c3 = 0x0 > _0x1d3e27 ? _0x50d272 : _0x520896 ? _0x1d3e27 : 0x0; _0x2d61c3 < _0x50d272; _0x2d61c3++) if (((_0x431f8b = _0x7711b0[_0x2d61c3]).selected || _0x2d61c3 === _0x1d3e27) && !_0x431f8b.disabled && (!_0x431f8b.parentNode.disabled || !_0x3238c8(_0x431f8b.parentNode, 'optgroup'))) {
            if (_0x50b3b2 = _0x4afe76(_0x431f8b).val(), _0x520896) return _0x50b3b2;
            _0x3b6b3d.push(_0x50b3b2);
          }
          return _0x3b6b3d;
        },
        'set': function (_0x493fc0, _0x3457f9) {
          for (var _0x58937b, _0x2abf92, _0x3e0727 = _0x493fc0.options, _0x92920a = _0x4afe76.makeArray(_0x3457f9), _0xf14adc = _0x3e0727.length; _0xf14adc--;) ((_0x2abf92 = _0x3e0727[_0xf14adc]).selected = -0x1 < _0x4afe76.inArray(_0x4afe76.valHooks.option.get(_0x2abf92), _0x92920a)) && (_0x58937b = !0x0);
          return _0x58937b || (_0x493fc0.selectedIndex = -0x1), _0x92920a;
        }
      }
    }
  }), _0x4afe76.each(['radio', 'checkbox'], function () {
    _0x4afe76.valHooks[this] = {
      'set': function (_0x45ba54, _0x1c9f70) {
        if (Array.isArray(_0x1c9f70)) return _0x45ba54.checked = -0x1 < _0x4afe76.inArray(_0x4afe76(_0x45ba54).val(), _0x1c9f70);
      }
    }, _0x36059a.checkOn || (_0x4afe76.valHooks[this].get = function (_0x3c7b61) {
      return null === _0x3c7b61.getAttribute('value') ? 'on' : _0x3c7b61.value;
    });
  });
  var _0x39a589 = _0x43f1db.location,
    _0x224807 = Date.now(),
    _0x5ce73e = /\?/;
  _0x4afe76.parseXML = function (_0x36fa49) {
    var _0xefeb4d, _0x3a188c;
    if (!_0x36fa49 || 'string' != typeof _0x36fa49) return null;
    try {
      _0xefeb4d = new _0x43f1db.DOMParser().parseFromString(_0x36fa49, 'text/xml');
    } catch (_0x1dc744) {}
    return _0x3a188c = _0xefeb4d && _0xefeb4d.getElementsByTagName('parsererror')[0x0], _0xefeb4d && !_0x3a188c || _0x4afe76.error("Invalid XML: " + (_0x3a188c ? _0x4afe76.map(_0x3a188c.childNodes, function (_0x1b948c) {
      return _0x1b948c.textContent;
    }).join("\n") : _0x36fa49)), _0xefeb4d;
  };
  var _0x1c12ab = /^(?:focusinfocus|focusoutblur)$/,
    _0x1a72c8 = function (_0x3d982b) {
      _0x3d982b.stopPropagation();
    };
  _0x4afe76.extend(_0x4afe76.event, {
    'trigger': function (_0x5297a0, _0x57eeeb, _0x1f1ba6, _0x359c31) {
      var _0x2fd14a,
        _0x40e300,
        _0x97ce38,
        _0x53b76d,
        _0x2f0bbf,
        _0x4a0e0f,
        _0x46e0c5,
        _0x4581f9,
        _0x3cfe21 = [_0x1f1ba6 || _0xefa3a6],
        _0x17597e = _0x4f2eb2.call(_0x5297a0, 'type') ? _0x5297a0.type : _0x5297a0;
      _0x2fd14a = _0x4f2eb2.call(_0x5297a0, 'namespace') ? _0x5297a0.namespace.split('.') : [];
      if (_0x40e300 = _0x4581f9 = _0x97ce38 = _0x1f1ba6 = _0x1f1ba6 || _0xefa3a6, 0x3 !== _0x1f1ba6.nodeType && 0x8 !== _0x1f1ba6.nodeType && !_0x1c12ab.test(_0x17597e + _0x4afe76.event.triggered) && (-0x1 < _0x17597e.indexOf('.') && (_0x17597e = (_0x2fd14a = _0x17597e.split('.')).shift(), _0x2fd14a.sort()), _0x2f0bbf = 0x0 > _0x17597e.indexOf(':') && 'on' + _0x17597e, (_0x5297a0 = _0x5297a0[_0x4afe76.expando] ? _0x5297a0 : new _0x4afe76.Event(_0x17597e, 'object' == typeof _0x5297a0 && _0x5297a0)).isTrigger = _0x359c31 ? 0x2 : 0x3, _0x5297a0.namespace = _0x2fd14a.join('.'), _0x5297a0.rnamespace = _0x5297a0.namespace ? RegExp("(^|\\.)" + _0x2fd14a.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, _0x5297a0.result = void 0x0, _0x5297a0.target || (_0x5297a0.target = _0x1f1ba6), _0x57eeeb = null == _0x57eeeb ? [_0x5297a0] : _0x4afe76.makeArray(_0x57eeeb, [_0x5297a0]), _0x46e0c5 = _0x4afe76.event.special[_0x17597e] || {}, _0x359c31 || !_0x46e0c5.trigger || !0x1 !== _0x46e0c5.trigger.apply(_0x1f1ba6, _0x57eeeb))) {
        if (!_0x359c31 && !_0x46e0c5.noBubble && !_0x2587ee(_0x1f1ba6)) {
          _0x53b76d = _0x46e0c5.delegateType || _0x17597e;
          for (_0x1c12ab.test(_0x53b76d + _0x17597e) || (_0x40e300 = _0x40e300.parentNode); _0x40e300; _0x40e300 = _0x40e300.parentNode) _0x3cfe21.push(_0x40e300), _0x97ce38 = _0x40e300;
          _0x97ce38 === (_0x1f1ba6.ownerDocument || _0xefa3a6) && _0x3cfe21.push(_0x97ce38.defaultView || _0x97ce38.parentWindow || _0x43f1db);
        }
        for (_0x2fd14a = 0x0; (_0x40e300 = _0x3cfe21[_0x2fd14a++]) && !_0x5297a0.isPropagationStopped();) _0x4581f9 = _0x40e300, _0x5297a0.type = 0x1 < _0x2fd14a ? _0x53b76d : _0x46e0c5.bindType || _0x17597e, (_0x4a0e0f = (_0x5efef5.get(_0x40e300, 'events') || Object.create(null))[_0x5297a0.type] && _0x5efef5.get(_0x40e300, 'handle')) && _0x4a0e0f.apply(_0x40e300, _0x57eeeb), (_0x4a0e0f = _0x2f0bbf && _0x40e300[_0x2f0bbf]) && _0x4a0e0f.apply && _0x1da48d(_0x40e300) && (_0x5297a0.result = _0x4a0e0f.apply(_0x40e300, _0x57eeeb), !0x1 === _0x5297a0.result && _0x5297a0.preventDefault());
        return _0x5297a0.type = _0x17597e, _0x359c31 || _0x5297a0.isDefaultPrevented() || _0x46e0c5._default && !0x1 !== _0x46e0c5._default.apply(_0x3cfe21.pop(), _0x57eeeb) || !_0x1da48d(_0x1f1ba6) || _0x2f0bbf && _0x5cc277(_0x1f1ba6[_0x17597e]) && !_0x2587ee(_0x1f1ba6) && ((_0x97ce38 = _0x1f1ba6[_0x2f0bbf]) && (_0x1f1ba6[_0x2f0bbf] = null), _0x4afe76.event.triggered = _0x17597e, _0x5297a0.isPropagationStopped() && _0x4581f9.addEventListener(_0x17597e, _0x1a72c8), _0x1f1ba6[_0x17597e](), _0x5297a0.isPropagationStopped() && _0x4581f9.removeEventListener(_0x17597e, _0x1a72c8), _0x4afe76.event.triggered = void 0x0, _0x97ce38 && (_0x1f1ba6[_0x2f0bbf] = _0x97ce38)), _0x5297a0.result;
      }
    },
    'simulate': function (_0x3bedff, _0x38ac68, _0x5b805b) {
      _0x3bedff = _0x4afe76.extend(new _0x4afe76.Event(), _0x5b805b, {
        'type': _0x3bedff,
        'isSimulated': !0x0
      }), _0x4afe76.event.trigger(_0x3bedff, null, _0x38ac68);
    }
  }), _0x4afe76.fn.extend({
    'trigger': function (_0x223f30, _0x4a4537) {
      return this.each(function () {
        _0x4afe76.event.trigger(_0x223f30, _0x4a4537, this);
      });
    },
    'triggerHandler': function (_0x38b7d9, _0x141a2f) {
      var _0x161729 = this[0x0];
      if (_0x161729) return _0x4afe76.event.trigger(_0x38b7d9, _0x141a2f, _0x161729, !0x0);
    }
  });
  var _0x12ef8c = /\[\]$/,
    _0x545c86 = /\r?\n/g,
    _0x14c439 = /^(?:submit|button|image|reset|file)$/i,
    _0x227c46 = /^(?:input|select|textarea|keygen)/i;
  _0x4afe76.param = function (_0x4c1237, _0x4e64d9) {
    var _0x23adc3,
      _0x5e4756 = [],
      _0xf916ce = function (_0x4d68fe, _0x5dae34) {
        var _0x53b163 = _0x5cc277(_0x5dae34) ? _0x5dae34() : _0x5dae34;
        _0x5e4756[_0x5e4756.length] = encodeURIComponent(_0x4d68fe) + '=' + encodeURIComponent(null == _0x53b163 ? '' : _0x53b163);
      };
    if (null == _0x4c1237) return '';
    if (Array.isArray(_0x4c1237) || _0x4c1237.jquery && !_0x4afe76.isPlainObject(_0x4c1237)) _0x4afe76.each(_0x4c1237, function () {
      _0xf916ce(this.name, this.value);
    });else {
      for (_0x23adc3 in _0x4c1237) _0x5ebafa(_0x23adc3, _0x4c1237[_0x23adc3], _0x4e64d9, _0xf916ce);
    }
    return _0x5e4756.join('&');
  }, _0x4afe76.fn.extend({
    'serialize': function () {
      return _0x4afe76.param(this.serializeArray());
    },
    'serializeArray': function () {
      return this.map(function () {
        var _0x3424f6 = _0x4afe76.prop(this, 'elements');
        return _0x3424f6 ? _0x4afe76.makeArray(_0x3424f6) : this;
      }).filter(function () {
        var _0x251c95 = this.type;
        return this.name && !_0x4afe76(this).is(':disabled') && _0x227c46.test(this.nodeName) && !_0x14c439.test(_0x251c95) && (this.checked || !_0x5c2d7f.test(_0x251c95));
      }).map(function (_0x31d311, _0xa2b35e) {
        var _0x3e077e = _0x4afe76(this).val();
        return null == _0x3e077e ? null : Array.isArray(_0x3e077e) ? _0x4afe76.map(_0x3e077e, function (_0x45a91b) {
          return {
            'name': _0xa2b35e.name,
            'value': _0x45a91b.replace(_0x545c86, "\r\n")
          };
        }) : {
          'name': _0xa2b35e.name,
          'value': _0x3e077e.replace(_0x545c86, "\r\n")
        };
      }).get();
    }
  });
  var _0x28ea8b = /%20/g,
    _0x16732b = /#.*$/,
    _0xc0d0d0 = /([?&])_=[^&]*/,
    _0x29ec9e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    _0x1a978c = /^(?:GET|HEAD)$/,
    _0xd0af2 = /^\/\//,
    _0x1f1661 = {},
    _0x1de901 = {},
    _0x57ca9d = '*/'.concat('*'),
    _0xae3e9c = _0xefa3a6.createElement('a');
  _0xae3e9c.href = _0x39a589.href, _0x4afe76.extend({
    'active': 0x0,
    'lastModified': {},
    'etag': {},
    'ajaxSettings': {
      'url': _0x39a589.href,
      'type': 'GET',
      'isLocal': /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_0x39a589.protocol),
      'global': !0x0,
      'processData': !0x0,
      'async': !0x0,
      'contentType': "application/x-www-form-urlencoded; charset=UTF-8",
      'accepts': {
        '*': _0x57ca9d,
        'text': 'text/plain',
        'html': 'text/html',
        'xml': "application/xml, text/xml",
        'json': "application/json, text/javascript"
      },
      'contents': {
        'xml': /\bxml\b/,
        'html': /\bhtml/,
        'json': /\bjson\b/
      },
      'responseFields': {
        'xml': 'responseXML',
        'text': 'responseText',
        'json': 'responseJSON'
      },
      'converters': {
        "* text": String,
        "text html": !0x0,
        "text json": JSON.parse,
        "text xml": _0x4afe76.parseXML
      },
      'flatOptions': {
        'url': !0x0,
        'context': !0x0
      }
    },
    'ajaxSetup': function (_0x4db187, _0x3a43d8) {
      return _0x3a43d8 ? _0x19037e(_0x19037e(_0x4db187, _0x4afe76.ajaxSettings), _0x3a43d8) : _0x19037e(_0x4afe76.ajaxSettings, _0x4db187);
    },
    'ajaxPrefilter': _0x467985(_0x1f1661),
    'ajaxTransport': _0x467985(_0x1de901),
    'ajax': function (_0x582ce7, _0x1a2cb4) {
      function _0x23ebbb(_0x3210c8, _0x5c988a, _0xde15ae, _0xbae534) {
        var _0x175451,
          _0x3f4832,
          _0x505e15,
          _0x55c8cc,
          _0x1e266d = _0x5c988a;
        if (!_0x2b0fb3) {
          _0x2b0fb3 = !0x0, _0x401e02 && _0x43f1db.clearTimeout(_0x401e02), _0x33ebdd = void 0x0, _0x1ec5a6 = _0xbae534 || '', _0x565f0b.readyState = 0x0 < _0x3210c8 ? 0x4 : 0x0, _0xbae534 = 0xc8 <= _0x3210c8 && 0x12c > _0x3210c8 || 0x130 === _0x3210c8;
          if (_0xde15ae) {
            _0x505e15 = _0x65cb49;
            for (var _0x546fd = _0x565f0b, _0x47543a, _0x4af8ef, _0xe3c685, _0x2c660a, _0x1278ce = _0x505e15.contents, _0x351c24 = _0x505e15.dataTypes; '*' === _0x351c24[0x0];) _0x351c24.shift(), void 0x0 === _0x47543a && (_0x47543a = _0x505e15.mimeType || _0x546fd.getResponseHeader('Content-Type'));
            if (_0x47543a) {
              for (_0x4af8ef in _0x1278ce) if (_0x1278ce[_0x4af8ef] && _0x1278ce[_0x4af8ef].test(_0x47543a)) {
                _0x351c24.unshift(_0x4af8ef);
                break;
              }
            }
            if (_0x351c24[0x0] in _0xde15ae) _0xe3c685 = _0x351c24[0x0];else {
              for (_0x4af8ef in _0xde15ae) {
                if (!_0x351c24[0x0] || _0x505e15.converters[_0x4af8ef + " " + _0x351c24[0x0]]) {
                  _0xe3c685 = _0x4af8ef;
                  break;
                }
                _0x2c660a || (_0x2c660a = _0x4af8ef);
              }
              _0xe3c685 = _0xe3c685 || _0x2c660a;
            }
            _0x505e15 = _0xde15ae = _0xe3c685 ? (_0xe3c685 !== _0x351c24[0x0] && _0x351c24.unshift(_0xe3c685), _0xde15ae[_0xe3c685]) : void 0x0;
          }
          !_0xbae534 && -0x1 < _0x4afe76.inArray('script', _0x65cb49.dataTypes) && 0x0 > _0x4afe76.inArray('json', _0x65cb49.dataTypes) && (_0x65cb49.converters["text script"] = function () {});
          var _0x290894;
          _0x344e5e: {
            _0xde15ae = _0x65cb49, _0x47543a = _0x505e15, _0x4af8ef = _0x565f0b, _0xe3c685 = _0xbae534;
            var _0x5567ef, _0x4faafa, _0x320c15;
            _0x505e15 = {}, _0x546fd = _0xde15ae.dataTypes.slice();
            if (_0x546fd[0x1]) {
              for (_0x5567ef in _0xde15ae.converters) _0x505e15[_0x5567ef.toLowerCase()] = _0xde15ae.converters[_0x5567ef];
            }
            for (_0x2c660a = _0x546fd.shift(); _0x2c660a;) if (_0xde15ae.responseFields[_0x2c660a] && (_0x4af8ef[_0xde15ae.responseFields[_0x2c660a]] = _0x47543a), !_0x320c15 && _0xe3c685 && _0xde15ae.dataFilter && (_0x47543a = _0xde15ae.dataFilter(_0x47543a, _0xde15ae.dataType)), _0x320c15 = _0x2c660a, _0x2c660a = _0x546fd.shift()) {
              if ('*' === _0x2c660a) _0x2c660a = _0x320c15;else {
                if ('*' !== _0x320c15 && _0x320c15 !== _0x2c660a) {
                  if (!(_0x5567ef = _0x505e15[_0x320c15 + " " + _0x2c660a] || _0x505e15["* " + _0x2c660a])) {
                    for (_0x290894 in _0x505e15) if ((_0x4faafa = _0x290894.split(" "))[0x1] === _0x2c660a && (_0x5567ef = _0x505e15[_0x320c15 + " " + _0x4faafa[0x0]] || _0x505e15["* " + _0x4faafa[0x0]])) {
                      !0x0 === _0x5567ef ? _0x5567ef = _0x505e15[_0x290894] : !0x0 !== _0x505e15[_0x290894] && (_0x2c660a = _0x4faafa[0x0], _0x546fd.unshift(_0x4faafa[0x1]));
                      break;
                    }
                  }
                  if (!0x0 !== _0x5567ef) {
                    if (_0x5567ef && _0xde15ae.throws) _0x47543a = _0x5567ef(_0x47543a);else try {
                      _0x47543a = _0x5567ef(_0x47543a);
                    } catch (_0x364139) {
                      _0x290894 = {
                        'state': 'parsererror',
                        'error': _0x5567ef ? _0x364139 : "No conversion from " + _0x320c15 + " to " + _0x2c660a
                      };
                      break _0x344e5e;
                    }
                  }
                }
              }
            }
            _0x290894 = {
              'state': 'success',
              'data': _0x47543a
            };
          }
          _0x505e15 = _0x290894, _0xbae534 ? (_0x65cb49.ifModified && ((_0x55c8cc = _0x565f0b.getResponseHeader('Last-Modified')) && (_0x4afe76.lastModified[_0x579669] = _0x55c8cc), (_0x55c8cc = _0x565f0b.getResponseHeader('etag')) && (_0x4afe76.etag[_0x579669] = _0x55c8cc)), 0xcc === _0x3210c8 || 'HEAD' === _0x65cb49.type ? _0x1e266d = 'nocontent' : 0x130 === _0x3210c8 ? _0x1e266d = 'notmodified' : (_0x1e266d = _0x505e15.state, _0x175451 = _0x505e15.data, _0xbae534 = !(_0x3f4832 = _0x505e15.error))) : (_0x3f4832 = _0x1e266d, !_0x3210c8 && _0x1e266d || (_0x1e266d = 'error', 0x0 > _0x3210c8 && (_0x3210c8 = 0x0))), _0x565f0b.status = _0x3210c8, _0x565f0b.statusText = (_0x5c988a || _0x1e266d) + '', _0xbae534 ? _0xf02e2e.resolveWith(_0x157e9c, [_0x175451, _0x1e266d, _0x565f0b]) : _0xf02e2e.rejectWith(_0x157e9c, [_0x565f0b, _0x1e266d, _0x3f4832]), _0x565f0b.statusCode(_0x96d2d0), _0x96d2d0 = void 0x0, _0x35392a && _0x56a0f5.trigger(_0xbae534 ? 'ajaxSuccess' : 'ajaxError', [_0x565f0b, _0x65cb49, _0xbae534 ? _0x175451 : _0x3f4832]), _0x4a16a1.fireWith(_0x157e9c, [_0x565f0b, _0x1e266d]), _0x35392a && (_0x56a0f5.trigger('ajaxComplete', [_0x565f0b, _0x65cb49]), --_0x4afe76.active || _0x4afe76.event.trigger('ajaxStop'));
        }
      }
      'object' == typeof _0x582ce7 && (_0x1a2cb4 = _0x582ce7, _0x582ce7 = void 0x0), _0x1a2cb4 = _0x1a2cb4 || {};
      var _0x33ebdd,
        _0x579669,
        _0x1ec5a6,
        _0x522ae8,
        _0x401e02,
        _0x2e36ed,
        _0x2b0fb3,
        _0x35392a,
        _0xa1721f,
        _0x177ec7,
        _0x65cb49 = _0x4afe76.ajaxSetup({}, _0x1a2cb4),
        _0x157e9c = _0x65cb49.context || _0x65cb49,
        _0x56a0f5 = _0x65cb49.context && (_0x157e9c.nodeType || _0x157e9c.jquery) ? _0x4afe76(_0x157e9c) : _0x4afe76.event,
        _0xf02e2e = _0x4afe76.Deferred(),
        _0x4a16a1 = _0x4afe76.Callbacks("once memory"),
        _0x96d2d0 = _0x65cb49.statusCode || {},
        _0x268269 = {},
        _0x212076 = {},
        _0x284a09 = 'canceled',
        _0x565f0b = {
          'readyState': 0x0,
          'getResponseHeader': function (_0x36cb33) {
            var _0x2148f1;
            if (_0x2b0fb3) {
              if (!_0x522ae8) {
                for (_0x522ae8 = {}; _0x2148f1 = _0x29ec9e.exec(_0x1ec5a6);) _0x522ae8[_0x2148f1[0x1].toLowerCase() + " "] = (_0x522ae8[_0x2148f1[0x1].toLowerCase() + " "] || []).concat(_0x2148f1[0x2]);
              }
              _0x2148f1 = _0x522ae8[_0x36cb33.toLowerCase() + " "];
            }
            return null == _0x2148f1 ? null : _0x2148f1.join(", ");
          },
          'getAllResponseHeaders': function () {
            return _0x2b0fb3 ? _0x1ec5a6 : null;
          },
          'setRequestHeader': function (_0x1f3e86, _0x522e4c) {
            return null == _0x2b0fb3 && (_0x1f3e86 = _0x212076[_0x1f3e86.toLowerCase()] = _0x212076[_0x1f3e86.toLowerCase()] || _0x1f3e86, _0x268269[_0x1f3e86] = _0x522e4c), this;
          },
          'overrideMimeType': function (_0x43a795) {
            return null == _0x2b0fb3 && (_0x65cb49.mimeType = _0x43a795), this;
          },
          'statusCode': function (_0x5d89d1) {
            var _0x4d192f;
            if (_0x5d89d1) {
              if (_0x2b0fb3) _0x565f0b.always(_0x5d89d1[_0x565f0b.status]);else {
                for (_0x4d192f in _0x5d89d1) _0x96d2d0[_0x4d192f] = [_0x96d2d0[_0x4d192f], _0x5d89d1[_0x4d192f]];
              }
            }
            return this;
          },
          'abort': function (_0x585ef8) {
            return _0x585ef8 = _0x585ef8 || _0x284a09, _0x33ebdd && _0x33ebdd.abort(_0x585ef8), _0x23ebbb(0x0, _0x585ef8), this;
          }
        };
      if (_0xf02e2e.promise(_0x565f0b), _0x65cb49.url = ((_0x582ce7 || _0x65cb49.url || _0x39a589.href) + '').replace(_0xd0af2, _0x39a589.protocol + '//'), _0x65cb49.type = _0x1a2cb4.method || _0x1a2cb4.type || _0x65cb49.method || _0x65cb49.type, _0x65cb49.dataTypes = (_0x65cb49.dataType || '*').toLowerCase().match(_0x513902) || [''], null == _0x65cb49.crossDomain) {
        _0x2e36ed = _0xefa3a6.createElement('a');
        try {
          _0x2e36ed.href = _0x65cb49.url, _0x2e36ed.href = _0x2e36ed.href, _0x65cb49.crossDomain = _0xae3e9c.protocol + '//' + _0xae3e9c.host != _0x2e36ed.protocol + '//' + _0x2e36ed.host;
        } catch (_0x5993f8) {
          _0x65cb49.crossDomain = !0x0;
        }
      }
      if (_0x65cb49.data && _0x65cb49.processData && 'string' != typeof _0x65cb49.data && (_0x65cb49.data = _0x4afe76.param(_0x65cb49.data, _0x65cb49.traditional)), _0x33608c(_0x1f1661, _0x65cb49, _0x1a2cb4, _0x565f0b), _0x2b0fb3) return _0x565f0b;
      for (_0xa1721f in (_0x35392a = _0x4afe76.event && _0x65cb49.global) && 0x0 == _0x4afe76.active++ && _0x4afe76.event.trigger('ajaxStart'), _0x65cb49.type = _0x65cb49.type.toUpperCase(), _0x65cb49.hasContent = !_0x1a978c.test(_0x65cb49.type), _0x579669 = _0x65cb49.url.replace(_0x16732b, ''), _0x65cb49.hasContent ? _0x65cb49.data && _0x65cb49.processData && 0x0 === (_0x65cb49.contentType || '').indexOf('application/x-www-form-urlencoded') && (_0x65cb49.data = _0x65cb49.data.replace(_0x28ea8b, '+')) : (_0x177ec7 = _0x65cb49.url.slice(_0x579669.length), _0x65cb49.data && (_0x65cb49.processData || 'string' == typeof _0x65cb49.data) && (_0x579669 += (_0x5ce73e.test(_0x579669) ? '&' : '?') + _0x65cb49.data, delete _0x65cb49.data), !0x1 === _0x65cb49.cache && (_0x579669 = _0x579669.replace(_0xc0d0d0, '$1'), _0x177ec7 = (_0x5ce73e.test(_0x579669) ? '&' : '?') + '_=' + _0x224807++ + _0x177ec7), _0x65cb49.url = _0x579669 + _0x177ec7), _0x65cb49.ifModified && (_0x4afe76.lastModified[_0x579669] && _0x565f0b.setRequestHeader('If-Modified-Since', _0x4afe76.lastModified[_0x579669]), _0x4afe76.etag[_0x579669] && _0x565f0b.setRequestHeader('If-None-Match', _0x4afe76.etag[_0x579669])), (_0x65cb49.data && _0x65cb49.hasContent && !0x1 !== _0x65cb49.contentType || _0x1a2cb4.contentType) && _0x565f0b.setRequestHeader('Content-Type', _0x65cb49.contentType), _0x565f0b.setRequestHeader('Accept', _0x65cb49.dataTypes[0x0] && _0x65cb49.accepts[_0x65cb49.dataTypes[0x0]] ? _0x65cb49.accepts[_0x65cb49.dataTypes[0x0]] + ('*' !== _0x65cb49.dataTypes[0x0] ? ", " + _0x57ca9d + "; q=0.01" : '') : _0x65cb49.accepts['*']), _0x65cb49.headers) _0x565f0b.setRequestHeader(_0xa1721f, _0x65cb49.headers[_0xa1721f]);
      if (_0x65cb49.beforeSend && (!0x1 === _0x65cb49.beforeSend.call(_0x157e9c, _0x565f0b, _0x65cb49) || _0x2b0fb3)) return _0x565f0b.abort();
      if (_0x284a09 = 'abort', _0x4a16a1.add(_0x65cb49.complete), _0x565f0b.done(_0x65cb49.success), _0x565f0b.fail(_0x65cb49.error), _0x33ebdd = _0x33608c(_0x1de901, _0x65cb49, _0x1a2cb4, _0x565f0b)) {
        if (_0x565f0b.readyState = 0x1, _0x35392a && _0x56a0f5.trigger('ajaxSend', [_0x565f0b, _0x65cb49]), _0x2b0fb3) return _0x565f0b;
        _0x65cb49.async && 0x0 < _0x65cb49.timeout && (_0x401e02 = _0x43f1db.setTimeout(function () {
          _0x565f0b.abort('timeout');
        }, _0x65cb49.timeout));
        try {
          _0x2b0fb3 = !0x1, _0x33ebdd.send(_0x268269, _0x23ebbb);
        } catch (_0x37d2c5) {
          if (_0x2b0fb3) throw _0x37d2c5;
          _0x23ebbb(-0x1, _0x37d2c5);
        }
      } else _0x23ebbb(-0x1, "No Transport");
      return _0x565f0b;
    },
    'getJSON': function (_0x21460b, _0x86487c, _0x159ccb) {
      return _0x4afe76.get(_0x21460b, _0x86487c, _0x159ccb, 'json');
    },
    'getScript': function (_0x323600, _0x47dbef) {
      return _0x4afe76.get(_0x323600, void 0x0, _0x47dbef, 'script');
    }
  }), _0x4afe76.each(['get', 'post'], function (_0x1cca83, _0xb8ff23) {
    _0x4afe76[_0xb8ff23] = function (_0x461557, _0x20f096, _0xfa73fa, _0x443f40) {
      return _0x5cc277(_0x20f096) && (_0x443f40 = _0x443f40 || _0xfa73fa, _0xfa73fa = _0x20f096, _0x20f096 = void 0x0), _0x4afe76.ajax(_0x4afe76.extend({
        'url': _0x461557,
        'type': _0xb8ff23,
        'dataType': _0x443f40,
        'data': _0x20f096,
        'success': _0xfa73fa
      }, _0x4afe76.isPlainObject(_0x461557) && _0x461557));
    };
  }), _0x4afe76.ajaxPrefilter(function (_0x16cce2) {
    for (var _0x28b8a0 in _0x16cce2.headers) 'content-type' === _0x28b8a0.toLowerCase() && (_0x16cce2.contentType = _0x16cce2.headers[_0x28b8a0] || '');
  }), _0x4afe76._evalUrl = function (_0x552d42, _0x38300e, _0x5e08da) {
    return _0x4afe76.ajax({
      'url': _0x552d42,
      'type': 'GET',
      'dataType': 'script',
      'cache': !0x0,
      'async': !0x1,
      'global': !0x1,
      'converters': {
        "text script": function () {}
      },
      'dataFilter': function (_0x5d998a) {
        _0x4afe76.globalEval(_0x5d998a, _0x38300e, _0x5e08da);
      }
    });
  }, _0x4afe76.fn.extend({
    'wrapAll': function (_0x10543c) {
      var _0x5e3faa;
      return this[0x0] && (_0x5cc277(_0x10543c) && (_0x10543c = _0x10543c.call(this[0x0])), _0x5e3faa = _0x4afe76(_0x10543c, this[0x0].ownerDocument).eq(0x0).clone(!0x0), this[0x0].parentNode && _0x5e3faa.insertBefore(this[0x0]), _0x5e3faa.map(function () {
        for (var _0x5dc85b = this; _0x5dc85b.firstElementChild;) _0x5dc85b = _0x5dc85b.firstElementChild;
        return _0x5dc85b;
      }).append(this)), this;
    },
    'wrapInner': function (_0x509831) {
      return _0x5cc277(_0x509831) ? this.each(function (_0x594876) {
        _0x4afe76(this).wrapInner(_0x509831.call(this, _0x594876));
      }) : this.each(function () {
        var _0xec6394 = _0x4afe76(this),
          _0x447cc1 = _0xec6394.contents();
        _0x447cc1.length ? _0x447cc1.wrapAll(_0x509831) : _0xec6394.append(_0x509831);
      });
    },
    'wrap': function (_0x7529b) {
      var _0x2aa4ec = _0x5cc277(_0x7529b);
      return this.each(function (_0x5c641a) {
        _0x4afe76(this).wrapAll(_0x2aa4ec ? _0x7529b.call(this, _0x5c641a) : _0x7529b);
      });
    },
    'unwrap': function (_0x21cf20) {
      return this.parent(_0x21cf20).not('body').each(function () {
        _0x4afe76(this).replaceWith(this.childNodes);
      }), this;
    }
  }), _0x4afe76.expr.pseudos.hidden = function (_0x2760f5) {
    return !_0x4afe76.expr.pseudos.visible(_0x2760f5);
  }, _0x4afe76.expr.pseudos.visible = function (_0x39fe84) {
    return !(!_0x39fe84.offsetWidth && !_0x39fe84.offsetHeight && !_0x39fe84.getClientRects().length);
  }, _0x4afe76.ajaxSettings.xhr = function () {
    try {
      return new _0x43f1db.XMLHttpRequest();
    } catch (_0x135c26) {}
  };
  var _0x1e357a = {
      '0': 0xc8,
      0x4c7: 0xcc
    },
    _0x3f3031 = _0x4afe76.ajaxSettings.xhr();
  _0x36059a.cors = !!_0x3f3031 && 'withCredentials' in _0x3f3031, _0x36059a.ajax = _0x3f3031 = !!_0x3f3031, _0x4afe76.ajaxTransport(function (_0x622448) {
    var _0x84eac4, _0x9a416d;
    if (_0x36059a.cors || _0x3f3031 && !_0x622448.crossDomain) return {
      'send': function (_0x3f3ecf, _0x5288f7) {
        var _0x1d7d1d,
          _0x2139be = _0x622448.xhr();
        if (_0x2139be.open(_0x622448.type, _0x622448.url, _0x622448.async, _0x622448.username, _0x622448.password), _0x622448.xhrFields) {
          for (_0x1d7d1d in _0x622448.xhrFields) _0x2139be[_0x1d7d1d] = _0x622448.xhrFields[_0x1d7d1d];
        }
        for (_0x1d7d1d in _0x622448.mimeType && _0x2139be.overrideMimeType && _0x2139be.overrideMimeType(_0x622448.mimeType), _0x622448.crossDomain || _0x3f3ecf['X-Requested-With'] || (_0x3f3ecf['X-Requested-With'] = 'XMLHttpRequest'), _0x3f3ecf) _0x2139be.setRequestHeader(_0x1d7d1d, _0x3f3ecf[_0x1d7d1d]);
        _0x84eac4 = function (_0x3dc1ac) {
          return function () {
            _0x84eac4 && (_0x84eac4 = _0x9a416d = _0x2139be.onload = _0x2139be.onerror = _0x2139be.onabort = _0x2139be.ontimeout = _0x2139be.onreadystatechange = null, 'abort' === _0x3dc1ac ? _0x2139be.abort() : 'error' === _0x3dc1ac ? 'number' != typeof _0x2139be.status ? _0x5288f7(0x0, 'error') : _0x5288f7(_0x2139be.status, _0x2139be.statusText) : _0x5288f7(_0x1e357a[_0x2139be.status] || _0x2139be.status, _0x2139be.statusText, 'text' !== (_0x2139be.responseType || 'text') || 'string' != typeof _0x2139be.responseText ? {
              'binary': _0x2139be.response
            } : {
              'text': _0x2139be.responseText
            }, _0x2139be.getAllResponseHeaders()));
          };
        }, _0x2139be.onload = _0x84eac4(), _0x9a416d = _0x2139be.onerror = _0x2139be.ontimeout = _0x84eac4('error'), void 0x0 !== _0x2139be.onabort ? _0x2139be.onabort = _0x9a416d : _0x2139be.onreadystatechange = function () {
          0x4 === _0x2139be.readyState && _0x43f1db.setTimeout(function () {
            _0x84eac4 && _0x9a416d();
          });
        }, _0x84eac4 = _0x84eac4('abort');
        try {
          _0x2139be.send(_0x622448.hasContent && _0x622448.data || null);
        } catch (_0x5a4833) {
          if (_0x84eac4) throw _0x5a4833;
        }
      },
      'abort': function () {
        _0x84eac4 && _0x84eac4();
      }
    };
  }), _0x4afe76.ajaxPrefilter(function (_0x329e49) {
    _0x329e49.crossDomain && (_0x329e49.contents.script = !0x1);
  }), _0x4afe76.ajaxSetup({
    'accepts': {
      'script': "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    'contents': {
      'script': /\b(?:java|ecma)script\b/
    },
    'converters': {
      "text script": function (_0x2e3356) {
        return _0x4afe76.globalEval(_0x2e3356), _0x2e3356;
      }
    }
  }), _0x4afe76.ajaxPrefilter('script', function (_0x205f48) {
    void 0x0 === _0x205f48.cache && (_0x205f48.cache = !0x1), _0x205f48.crossDomain && (_0x205f48.type = 'GET');
  }), _0x4afe76.ajaxTransport('script', function (_0x44710b) {
    var _0xc91d90, _0x385050;
    if (_0x44710b.crossDomain || _0x44710b.scriptAttrs) return {
      'send': function (_0x35c8c6, _0x26240d) {
        _0xc91d90 = _0x4afe76('<script>').attr(_0x44710b.scriptAttrs || {}).prop({
          'charset': _0x44710b.scriptCharset,
          'src': _0x44710b.url
        }).on("load error", _0x385050 = function (_0x5589e0) {
          _0xc91d90.remove(), _0x385050 = null, _0x5589e0 && _0x26240d('error' === _0x5589e0.type ? 0x194 : 0xc8, _0x5589e0.type);
        }), _0xefa3a6.head.appendChild(_0xc91d90[0x0]);
      },
      'abort': function () {
        _0x385050 && _0x385050();
      }
    };
  });
  var _0x2c5648,
    _0x235f10 = [],
    _0x177be7 = /(=)\?(?=&|$)|\?\?/;
  _0x4afe76.ajaxSetup({
    'jsonp': 'callback',
    'jsonpCallback': function () {
      var _0x5b0763 = _0x235f10.pop() || _0x4afe76.expando + '_' + _0x224807++;
      return this[_0x5b0763] = !0x0, _0x5b0763;
    }
  }), _0x4afe76.ajaxPrefilter("json jsonp", function (_0x5489ee, _0x1592a9, _0xc3f50) {
    var _0x447d9c,
      _0x5f0104,
      _0x20059a,
      _0x3b99a0 = !0x1 !== _0x5489ee.jsonp && (_0x177be7.test(_0x5489ee.url) ? 'url' : 'string' == typeof _0x5489ee.data && 0x0 === (_0x5489ee.contentType || '').indexOf('application/x-www-form-urlencoded') && _0x177be7.test(_0x5489ee.data) && 'data');
    if (_0x3b99a0 || 'jsonp' === _0x5489ee.dataTypes[0x0]) return _0x447d9c = _0x5489ee.jsonpCallback = _0x5cc277(_0x5489ee.jsonpCallback) ? _0x5489ee.jsonpCallback() : _0x5489ee.jsonpCallback, _0x3b99a0 ? _0x5489ee[_0x3b99a0] = _0x5489ee[_0x3b99a0].replace(_0x177be7, '$1' + _0x447d9c) : !0x1 !== _0x5489ee.jsonp && (_0x5489ee.url += (_0x5ce73e.test(_0x5489ee.url) ? '&' : '?') + _0x5489ee.jsonp + '=' + _0x447d9c), _0x5489ee.converters["script json"] = function () {
      return _0x20059a || _0x4afe76.error(_0x447d9c + " was not called"), _0x20059a[0x0];
    }, _0x5489ee.dataTypes[0x0] = 'json', _0x5f0104 = _0x43f1db[_0x447d9c], _0x43f1db[_0x447d9c] = function () {
      _0x20059a = arguments;
    }, _0xc3f50.always(function () {
      void 0x0 === _0x5f0104 ? _0x4afe76(_0x43f1db).removeProp(_0x447d9c) : _0x43f1db[_0x447d9c] = _0x5f0104, _0x5489ee[_0x447d9c] && (_0x5489ee.jsonpCallback = _0x1592a9.jsonpCallback, _0x235f10.push(_0x447d9c)), _0x20059a && _0x5cc277(_0x5f0104) && _0x5f0104(_0x20059a[0x0]), _0x20059a = _0x5f0104 = void 0x0;
    }), 'script';
  }), _0x36059a.createHTMLDocument = ((_0x2c5648 = _0xefa3a6.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>', 0x2 === _0x2c5648.childNodes.length), _0x4afe76.parseHTML = function (_0x4efd93, _0x433773, _0x390f9a) {
    return 'string' != typeof _0x4efd93 ? [] : ('boolean' == typeof _0x433773 && (_0x390f9a = _0x433773, _0x433773 = !0x1), _0x433773 || (_0x36059a.createHTMLDocument ? ((_0x31692b = (_0x433773 = _0xefa3a6.implementation.createHTMLDocument('')).createElement('base')).href = _0xefa3a6.location.href, _0x433773.head.appendChild(_0x31692b)) : _0x433773 = _0xefa3a6), _0x55341e = !_0x390f9a && [], (_0x2d67f9 = _0xf2b2b8.exec(_0x4efd93)) ? [_0x433773.createElement(_0x2d67f9[0x1])] : (_0x2d67f9 = _0x53f5a8([_0x4efd93], _0x433773, _0x55341e), _0x55341e && _0x55341e.length && _0x4afe76(_0x55341e).remove(), _0x4afe76.merge([], _0x2d67f9.childNodes)));
    var _0x31692b, _0x2d67f9, _0x55341e;
  }, _0x4afe76.fn.load = function (_0x2e3052, _0x5cffcb, _0x589bde) {
    var _0x419234,
      _0x28de55,
      _0x5aa29e,
      _0x5dc9bd = this,
      _0x5d06fd = _0x2e3052.indexOf(" ");
    return -0x1 < _0x5d06fd && (_0x419234 = _0x300baa(_0x2e3052.slice(_0x5d06fd)), _0x2e3052 = _0x2e3052.slice(0x0, _0x5d06fd)), _0x5cc277(_0x5cffcb) ? (_0x589bde = _0x5cffcb, _0x5cffcb = void 0x0) : _0x5cffcb && 'object' == typeof _0x5cffcb && (_0x28de55 = 'POST'), 0x0 < _0x5dc9bd.length && _0x4afe76.ajax({
      'url': _0x2e3052,
      'type': _0x28de55 || 'GET',
      'dataType': 'html',
      'data': _0x5cffcb
    }).done(function (_0x1f5743) {
      _0x5aa29e = arguments, _0x5dc9bd.html(_0x419234 ? _0x4afe76('<div>').append(_0x4afe76.parseHTML(_0x1f5743)).find(_0x419234) : _0x1f5743);
    }).always(_0x589bde && function (_0x15ac23, _0xff46cd) {
      _0x5dc9bd.each(function () {
        _0x589bde.apply(this, _0x5aa29e || [_0x15ac23.responseText, _0xff46cd, _0x15ac23]);
      });
    }), this;
  }, _0x4afe76.expr.pseudos.animated = function (_0x5cda09) {
    return _0x4afe76.grep(_0x4afe76.timers, function (_0x2d69b1) {
      return _0x5cda09 === _0x2d69b1.elem;
    }).length;
  }, _0x4afe76.offset = {
    'setOffset': function (_0x4eae1f, _0x21bb99, _0x292621) {
      var _0x46fdb1,
        _0x26fedf,
        _0x2e4966,
        _0x4cb8a9,
        _0x5d338a,
        _0x232e2a,
        _0x276c48 = _0x4afe76.css(_0x4eae1f, 'position'),
        _0x3549d1 = _0x4afe76(_0x4eae1f),
        _0x267f5b = {};
      'static' === _0x276c48 && (_0x4eae1f.style.position = 'relative'), _0x5d338a = _0x3549d1.offset(), _0x2e4966 = _0x4afe76.css(_0x4eae1f, 'top'), _0x232e2a = _0x4afe76.css(_0x4eae1f, 'left'), ('absolute' === _0x276c48 || 'fixed' === _0x276c48) && -0x1 < (_0x2e4966 + _0x232e2a).indexOf('auto') ? (_0x4cb8a9 = (_0x46fdb1 = _0x3549d1.position()).top, _0x26fedf = _0x46fdb1.left) : (_0x4cb8a9 = parseFloat(_0x2e4966) || 0x0, _0x26fedf = parseFloat(_0x232e2a) || 0x0), _0x5cc277(_0x21bb99) && (_0x21bb99 = _0x21bb99.call(_0x4eae1f, _0x292621, _0x4afe76.extend({}, _0x5d338a))), null != _0x21bb99.top && (_0x267f5b.top = _0x21bb99.top - _0x5d338a.top + _0x4cb8a9), null != _0x21bb99.left && (_0x267f5b.left = _0x21bb99.left - _0x5d338a.left + _0x26fedf), 'using' in _0x21bb99 ? _0x21bb99.using.call(_0x4eae1f, _0x267f5b) : _0x3549d1.css(_0x267f5b);
    }
  }, _0x4afe76.fn.extend({
    'offset': function (_0x34c9ce) {
      if (arguments.length) return void 0x0 === _0x34c9ce ? this : this.each(function (_0x1cb62f) {
        _0x4afe76.offset.setOffset(this, _0x34c9ce, _0x1cb62f);
      });
      var _0x5d214c,
        _0x1d130f,
        _0x3341fc = this[0x0];
      return _0x3341fc ? _0x3341fc.getClientRects().length ? (_0x5d214c = _0x3341fc.getBoundingClientRect(), _0x1d130f = _0x3341fc.ownerDocument.defaultView, {
        'top': _0x5d214c.top + _0x1d130f.pageYOffset,
        'left': _0x5d214c.left + _0x1d130f.pageXOffset
      }) : {
        'top': 0x0,
        'left': 0x0
      } : void 0x0;
    },
    'position': function () {
      if (this[0x0]) {
        var _0x36520a,
          _0x18aa11,
          _0x53c8e5,
          _0x2dc33c = this[0x0],
          _0x3d94b7 = {
            'top': 0x0,
            'left': 0x0
          };
        if ('fixed' === _0x4afe76.css(_0x2dc33c, 'position')) _0x18aa11 = _0x2dc33c.getBoundingClientRect();else {
          _0x18aa11 = this.offset(), _0x53c8e5 = _0x2dc33c.ownerDocument;
          for (_0x36520a = _0x2dc33c.offsetParent || _0x53c8e5.documentElement; _0x36520a && (_0x36520a === _0x53c8e5.body || _0x36520a === _0x53c8e5.documentElement) && 'static' === _0x4afe76.css(_0x36520a, 'position');) _0x36520a = _0x36520a.parentNode;
          _0x36520a && _0x36520a !== _0x2dc33c && 0x1 === _0x36520a.nodeType && ((_0x3d94b7 = _0x4afe76(_0x36520a).offset()).top += _0x4afe76.css(_0x36520a, 'borderTopWidth', !0x0), _0x3d94b7.left += _0x4afe76.css(_0x36520a, 'borderLeftWidth', !0x0));
        }
        return {
          'top': _0x18aa11.top - _0x3d94b7.top - _0x4afe76.css(_0x2dc33c, 'marginTop', !0x0),
          'left': _0x18aa11.left - _0x3d94b7.left - _0x4afe76.css(_0x2dc33c, 'marginLeft', !0x0)
        };
      }
    },
    'offsetParent': function () {
      return this.map(function () {
        for (var _0x24d9de = this.offsetParent; _0x24d9de && 'static' === _0x4afe76.css(_0x24d9de, 'position');) _0x24d9de = _0x24d9de.offsetParent;
        return _0x24d9de || _0x5dde1d;
      });
    }
  }), _0x4afe76.each({
    'scrollLeft': 'pageXOffset',
    'scrollTop': 'pageYOffset'
  }, function (_0x4685b3, _0x5cb0f1) {
    var _0x4328b2 = 'pageYOffset' === _0x5cb0f1;
    _0x4afe76.fn[_0x4685b3] = function (_0x428f71) {
      return _0x483fcd(this, function (_0x288f3b, _0x545d61, _0x218c1d) {
        var _0x126ad1;
        if (_0x2587ee(_0x288f3b) ? _0x126ad1 = _0x288f3b : 0x9 === _0x288f3b.nodeType && (_0x126ad1 = _0x288f3b.defaultView), void 0x0 === _0x218c1d) return _0x126ad1 ? _0x126ad1[_0x5cb0f1] : _0x288f3b[_0x545d61];
        _0x126ad1 ? _0x126ad1.scrollTo(_0x4328b2 ? _0x126ad1.pageXOffset : _0x218c1d, _0x4328b2 ? _0x218c1d : _0x126ad1.pageYOffset) : _0x288f3b[_0x545d61] = _0x218c1d;
      }, _0x4685b3, _0x428f71, arguments.length);
    };
  }), _0x4afe76.each(['top', 'left'], function (_0x790fd5, _0x221eb4) {
    _0x4afe76.cssHooks[_0x221eb4] = _0x43c262(_0x36059a.pixelPosition, function (_0x5572be, _0x6d0055) {
      if (_0x6d0055) return _0x6d0055 = _0x2db5bf(_0x5572be, _0x221eb4), _0x4afae5.test(_0x6d0055) ? _0x4afe76(_0x5572be).position()[_0x221eb4] + 'px' : _0x6d0055;
    });
  }), _0x4afe76.each({
    'Height': 'height',
    'Width': 'width'
  }, function (_0x49b7ab, _0x508fc3) {
    _0x4afe76.each({
      'padding': 'inner' + _0x49b7ab,
      'content': _0x508fc3,
      '': 'outer' + _0x49b7ab
    }, function (_0x1bea07, _0x28a16a) {
      _0x4afe76.fn[_0x28a16a] = function (_0x21f9e3, _0x40c121) {
        var _0x538797 = arguments.length && (_0x1bea07 || 'boolean' != typeof _0x21f9e3),
          _0x19cd72 = _0x1bea07 || (!0x0 === _0x21f9e3 || !0x0 === _0x40c121 ? 'margin' : 'border');
        return _0x483fcd(this, function (_0x44f39e, _0xad0de3, _0x210fbf) {
          var _0x471205;
          return _0x2587ee(_0x44f39e) ? 0x0 === _0x28a16a.indexOf('outer') ? _0x44f39e['inner' + _0x49b7ab] : _0x44f39e.document.documentElement['client' + _0x49b7ab] : 0x9 === _0x44f39e.nodeType ? (_0x471205 = _0x44f39e.documentElement, Math.max(_0x44f39e.body['scroll' + _0x49b7ab], _0x471205['scroll' + _0x49b7ab], _0x44f39e.body['offset' + _0x49b7ab], _0x471205['offset' + _0x49b7ab], _0x471205['client' + _0x49b7ab])) : void 0x0 === _0x210fbf ? _0x4afe76.css(_0x44f39e, _0xad0de3, _0x19cd72) : _0x4afe76.style(_0x44f39e, _0xad0de3, _0x210fbf, _0x19cd72);
        }, _0x508fc3, _0x538797 ? _0x21f9e3 : void 0x0, _0x538797);
      };
    });
  }), _0x4afe76.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (_0x46bbdb, _0x302c73) {
    _0x4afe76.fn[_0x302c73] = function (_0x28021c) {
      return this.on(_0x302c73, _0x28021c);
    };
  }), _0x4afe76.fn.extend({
    'bind': function (_0x12d58c, _0x12330b, _0x531e64) {
      return this.on(_0x12d58c, null, _0x12330b, _0x531e64);
    },
    'unbind': function (_0xc0dc75, _0x3f4e06) {
      return this.off(_0xc0dc75, null, _0x3f4e06);
    },
    'delegate': function (_0x3f2905, _0x3b987d, _0x29113e, _0x63ac0d) {
      return this.on(_0x3b987d, _0x3f2905, _0x29113e, _0x63ac0d);
    },
    'undelegate': function (_0x1e3113, _0x17ccc8, _0x499503) {
      return 0x1 === arguments.length ? this.off(_0x1e3113, '**') : this.off(_0x17ccc8, _0x1e3113 || '**', _0x499503);
    },
    'hover': function (_0x26b26c, _0x5839ce) {
      return this.mouseenter(_0x26b26c).mouseleave(_0x5839ce || _0x26b26c);
    }
  }), _0x4afe76.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (_0x97bd6b, _0x5df492) {
    _0x4afe76.fn[_0x5df492] = function (_0x591f74, _0x3340c5) {
      return 0x0 < arguments.length ? this.on(_0x5df492, null, _0x591f74, _0x3340c5) : this.trigger(_0x5df492);
    };
  });
  var _0x54faa7 = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  _0x4afe76.proxy = function (_0x3a7f15, _0x13f5da) {
    var _0x3a64d9, _0x48537e, _0x552117;
    if ('string' == typeof _0x13f5da && (_0x3a64d9 = _0x3a7f15[_0x13f5da], _0x13f5da = _0x3a7f15, _0x3a7f15 = _0x3a64d9), _0x5cc277(_0x3a7f15)) return _0x48537e = _0xcf045f.call(arguments, 0x2), (_0x552117 = function () {
      return _0x3a7f15.apply(_0x13f5da || this, _0x48537e.concat(_0xcf045f.call(arguments)));
    }).guid = _0x3a7f15.guid = _0x3a7f15.guid || _0x4afe76.guid++, _0x552117;
  }, _0x4afe76.holdReady = function (_0x38f4b2) {
    _0x38f4b2 ? _0x4afe76.readyWait++ : _0x4afe76.ready(!0x0);
  }, _0x4afe76.isArray = Array.isArray, _0x4afe76.parseJSON = JSON.parse, _0x4afe76.nodeName = _0x3238c8, _0x4afe76.isFunction = _0x5cc277, _0x4afe76.isWindow = _0x2587ee, _0x4afe76.camelCase = _0x3e74ba, _0x4afe76.type = _0x394016, _0x4afe76.now = Date.now, _0x4afe76.isNumeric = function (_0x8cb478) {
    var _0x3c23e7 = _0x4afe76.type(_0x8cb478);
    return ('number' === _0x3c23e7 || 'string' === _0x3c23e7) && !isNaN(_0x8cb478 - parseFloat(_0x8cb478));
  }, _0x4afe76.trim = function (_0x39f6de) {
    return null == _0x39f6de ? '' : (_0x39f6de + '').replace(_0x54faa7, '$1');
  }, 'function' == typeof define && define.amd && define('jquery', [], function () {
    return _0x4afe76;
  });
  var _0x13c9cf = _0x43f1db.jQuery,
    _0x459187 = _0x43f1db.$;
  return _0x4afe76.noConflict = function (_0x1a1cd3) {
    return _0x43f1db.$ === _0x4afe76 && (_0x43f1db.$ = _0x459187), _0x1a1cd3 && _0x43f1db.jQuery === _0x4afe76 && (_0x43f1db.jQuery = _0x13c9cf), _0x4afe76;
  }, 'undefined' == typeof _0x726f10 && (_0x43f1db.jQuery = _0x43f1db.$ = _0x4afe76), _0x4afe76;
});
function getInternetExplorerVersion() {
  var _0x355a84 = -0x1;
  return "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (_0x355a84 = parseFloat(RegExp.$1)), _0x355a84;
}
var ie = getInternetExplorerVersion();
function getQueryVariable(_0x180ba9) {
  for (var _0x119fdf = window.location.search.substring(0x1).split('&'), _0x16efa3 = 0x0; _0x16efa3 < _0x119fdf.length; _0x16efa3++) {
    var _0x1d78b2 = _0x119fdf[_0x16efa3].match(/([^=]+?)=(.+)/);
    if (_0x1d78b2 && decodeURIComponent(_0x1d78b2[0x1]) == _0x180ba9) return decodeURIComponent(_0x1d78b2[0x2]);
  }
}
(function () {
  var _0x44d8ec = function () {
    this.init();
  };
  _0x44d8ec.prototype = {
    'init': function () {
      var _0x5ba135 = this || _0x4bc277;
      return _0x5ba135._counter = 0x3e8, _0x5ba135._html5AudioPool = [], _0x5ba135.html5PoolSize = 0xa, _0x5ba135._codecs = {}, _0x5ba135._howls = [], _0x5ba135._muted = !0x1, _0x5ba135._volume = 0x1, _0x5ba135._canPlayEvent = 'canplaythrough', _0x5ba135._navigator = 'undefined' !== typeof window && window.navigator ? window.navigator : null, _0x5ba135.masterGain = null, _0x5ba135.noAudio = !0x1, _0x5ba135.usingWebAudio = !0x0, _0x5ba135.autoSuspend = !0x1, _0x5ba135.ctx = null, _0x5ba135.autoUnlock = !0x0, _0x5ba135._setup(), _0x5ba135;
    },
    'volume': function (_0xe364a6) {
      var _0x50b256 = this || _0x4bc277;
      _0xe364a6 = parseFloat(_0xe364a6), _0x50b256.ctx || _0x509099();
      if ('undefined' !== typeof _0xe364a6 && 0x0 <= _0xe364a6 && 0x1 >= _0xe364a6) {
        _0x50b256._volume = _0xe364a6;
        if (_0x50b256._muted) return _0x50b256;
        _0x50b256.usingWebAudio && _0x50b256.masterGain.gain.setValueAtTime(_0xe364a6, _0x4bc277.ctx.currentTime);
        for (var _0x40cf1a = 0x0; _0x40cf1a < _0x50b256._howls.length; _0x40cf1a++) if (!_0x50b256._howls[_0x40cf1a]._webAudio) for (var _0x28a639 = _0x50b256._howls[_0x40cf1a]._getSoundIds(), _0x159257 = 0x0; _0x159257 < _0x28a639.length; _0x159257++) {
          var _0x2df7cd = _0x50b256._howls[_0x40cf1a]._soundById(_0x28a639[_0x159257]);
          _0x2df7cd && _0x2df7cd._node && (_0x2df7cd._node.volume = _0x2df7cd._volume * _0xe364a6);
        }
        return _0x50b256;
      }
      return _0x50b256._volume;
    },
    'mute': function (_0x2ef37b) {
      var _0x1a3497 = this || _0x4bc277;
      _0x1a3497.ctx || _0x509099(), _0x1a3497._muted = _0x2ef37b, _0x1a3497.usingWebAudio && _0x1a3497.masterGain.gain.setValueAtTime(_0x2ef37b ? 0x0 : _0x1a3497._volume, _0x4bc277.ctx.currentTime);
      for (var _0x1ec7c2 = 0x0; _0x1ec7c2 < _0x1a3497._howls.length; _0x1ec7c2++) if (!_0x1a3497._howls[_0x1ec7c2]._webAudio) for (var _0xc77262 = _0x1a3497._howls[_0x1ec7c2]._getSoundIds(), _0x3d0b34 = 0x0; _0x3d0b34 < _0xc77262.length; _0x3d0b34++) {
        var _0x1385a9 = _0x1a3497._howls[_0x1ec7c2]._soundById(_0xc77262[_0x3d0b34]);
        _0x1385a9 && _0x1385a9._node && (_0x1385a9._node.muted = _0x2ef37b ? !0x0 : _0x1385a9._muted);
      }
      return _0x1a3497;
    },
    'stop': function () {
      for (var _0x41c714 = this || _0x4bc277, _0x3fcef7 = 0x0; _0x3fcef7 < _0x41c714._howls.length; _0x3fcef7++) _0x41c714._howls[_0x3fcef7].stop();
      return _0x41c714;
    },
    'unload': function () {
      for (var _0x7fdde6 = this || _0x4bc277, _0x4617e1 = _0x7fdde6._howls.length - 0x1; 0x0 <= _0x4617e1; _0x4617e1--) _0x7fdde6._howls[_0x4617e1].unload();
      return _0x7fdde6.usingWebAudio && _0x7fdde6.ctx && 'undefined' !== typeof _0x7fdde6.ctx.close && (_0x7fdde6.ctx.close(), _0x7fdde6.ctx = null, _0x509099()), _0x7fdde6;
    },
    'codecs': function (_0x2b75d6) {
      return (this || _0x4bc277)._codecs[_0x2b75d6.replace(/^x-/, '')];
    },
    '_setup': function () {
      var _0x450db3 = this || _0x4bc277;
      _0x450db3.state = _0x450db3.ctx ? _0x450db3.ctx.state || 'suspended' : 'suspended', _0x450db3._autoSuspend();
      if (!_0x450db3.usingWebAudio) {
        if ('undefined' !== typeof Audio) try {
          var _0x210a2b = new Audio();
          'undefined' === typeof _0x210a2b.oncanplaythrough && (_0x450db3._canPlayEvent = 'canplay');
        } catch (_0x15188d) {
          _0x450db3.noAudio = !0x0;
        } else _0x450db3.noAudio = !0x0;
      }
      try {
        _0x210a2b = new Audio(), _0x210a2b.muted && (_0x450db3.noAudio = !0x0);
      } catch (_0x337bb) {}
      return _0x450db3.noAudio || _0x450db3._setupCodecs(), _0x450db3;
    },
    '_setupCodecs': function () {
      var _0x23daf9 = this || _0x4bc277,
        _0x461fe1 = null;
      try {
        _0x461fe1 = 'undefined' !== typeof Audio ? new Audio() : null;
      } catch (_0x5942b3) {
        return _0x23daf9;
      }
      if (!_0x461fe1 || 'function' !== typeof _0x461fe1.canPlayType) return _0x23daf9;
      var _0x455459 = _0x461fe1.canPlayType('audio/mpeg;').replace(/^no$/, ''),
        _0x3fe77d = _0x23daf9._navigator ? _0x23daf9._navigator.userAgent : '',
        _0x11a61a = _0x3fe77d.match(/OPR\/(\d+)/g),
        _0x11a61a = _0x11a61a && 0x21 > parseInt(_0x11a61a[0x0].split('/')[0x1], 0xa),
        _0x394600 = -0x1 !== _0x3fe77d.indexOf('Safari') && -0x1 === _0x3fe77d.indexOf('Chrome'),
        _0x3fe77d = _0x3fe77d.match(/Version\/(.*?) /),
        _0x3fe77d = _0x394600 && _0x3fe77d && 0xf > parseInt(_0x3fe77d[0x1], 0xa);
      return _0x23daf9._codecs = {
        'mp3': !(_0x11a61a || !_0x455459 && !_0x461fe1.canPlayType('audio/mp3;').replace(/^no$/, '')),
        'mpeg': !!_0x455459,
        'opus': !!_0x461fe1.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ''),
        'ogg': !!_0x461fe1.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
        'oga': !!_0x461fe1.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
        'wav': !!(_0x461fe1.canPlayType("audio/wav; codecs=\"1\"") || _0x461fe1.canPlayType('audio/wav')).replace(/^no$/, ''),
        'aac': !!_0x461fe1.canPlayType('audio/aac;').replace(/^no$/, ''),
        'caf': !!_0x461fe1.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        'm4a': !!(_0x461fe1.canPlayType('audio/x-m4a;') || _0x461fe1.canPlayType('audio/m4a;') || _0x461fe1.canPlayType('audio/aac;')).replace(/^no$/, ''),
        'm4b': !!(_0x461fe1.canPlayType('audio/x-m4b;') || _0x461fe1.canPlayType('audio/m4b;') || _0x461fe1.canPlayType('audio/aac;')).replace(/^no$/, ''),
        'mp4': !!(_0x461fe1.canPlayType('audio/x-mp4;') || _0x461fe1.canPlayType('audio/mp4;') || _0x461fe1.canPlayType('audio/aac;')).replace(/^no$/, ''),
        'weba': !(_0x3fe77d || !_0x461fe1.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, '')),
        'webm': !(_0x3fe77d || !_0x461fe1.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, '')),
        'dolby': !!_0x461fe1.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ''),
        'flac': !!(_0x461fe1.canPlayType('audio/x-flac;') || _0x461fe1.canPlayType('audio/flac;')).replace(/^no$/, '')
      }, _0x23daf9;
    },
    '_unlockAudio': function () {
      var _0xba71ee = this || _0x4bc277;
      if (!_0xba71ee._audioUnlocked && _0xba71ee.ctx) {
        _0xba71ee._audioUnlocked = !0x1, _0xba71ee.autoUnlock = !0x1, !_0xba71ee._mobileUnloaded && 0xac44 !== _0xba71ee.ctx.sampleRate && (_0xba71ee._mobileUnloaded = !0x0, _0xba71ee.unload()), _0xba71ee._scratchBuffer = _0xba71ee.ctx.createBuffer(0x1, 0x1, 0x5622);
        var _0x5925e4 = function () {
          for (; _0xba71ee._html5AudioPool.length < _0xba71ee.html5PoolSize;) try {
            var _0x14428b = new Audio();
            _0x14428b._unlocked = !0x0, _0xba71ee._releaseHtml5Audio(_0x14428b);
          } catch (_0x507172) {
            _0xba71ee.noAudio = !0x0;
            break;
          }
          for (_0x14428b = 0x0; _0x14428b < _0xba71ee._howls.length; _0x14428b++) if (!_0xba71ee._howls[_0x14428b]._webAudio) for (var _0x2408a4 = _0xba71ee._howls[_0x14428b]._getSoundIds(), _0x210343 = 0x0; _0x210343 < _0x2408a4.length; _0x210343++) {
            var _0x4f547b = _0xba71ee._howls[_0x14428b]._soundById(_0x2408a4[_0x210343]);
            _0x4f547b && _0x4f547b._node && !_0x4f547b._node._unlocked && (_0x4f547b._node._unlocked = !0x0, _0x4f547b._node.load());
          }
          _0xba71ee._autoResume();
          var _0x2c5d91 = _0xba71ee.ctx.createBufferSource();
          _0x2c5d91.buffer = _0xba71ee._scratchBuffer, _0x2c5d91.connect(_0xba71ee.ctx.destination), 'undefined' === typeof _0x2c5d91.start ? _0x2c5d91.noteOn(0x0) : _0x2c5d91.start(0x0), 'function' === typeof _0xba71ee.ctx.resume && _0xba71ee.ctx.resume(), _0x2c5d91.onended = function () {
            _0x2c5d91.disconnect(0x0), _0xba71ee._audioUnlocked = !0x0, document.removeEventListener('touchstart', _0x5925e4, !0x0), document.removeEventListener('touchend', _0x5925e4, !0x0), document.removeEventListener('click', _0x5925e4, !0x0), document.removeEventListener('keydown', _0x5925e4, !0x0);
            for (var _0x223981 = 0x0; _0x223981 < _0xba71ee._howls.length; _0x223981++) _0xba71ee._howls[_0x223981]._emit('unlock');
          };
        };
        return document.addEventListener('touchstart', _0x5925e4, !0x0), document.addEventListener('touchend', _0x5925e4, !0x0), document.addEventListener('click', _0x5925e4, !0x0), document.addEventListener('keydown', _0x5925e4, !0x0), _0xba71ee;
      }
    },
    '_obtainHtml5Audio': function () {
      var _0x264bdc = this || _0x4bc277;
      if (_0x264bdc._html5AudioPool.length) return _0x264bdc._html5AudioPool.pop();
      return (_0x264bdc = new Audio().play()) && 'undefined' !== typeof Promise && (_0x264bdc instanceof Promise || 'function' === typeof _0x264bdc.then) && _0x264bdc['catch'](function () {
        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
      }), new Audio();
    },
    '_releaseHtml5Audio': function (_0x271b98) {
      var _0x1f5ece = this || _0x4bc277;
      return _0x271b98._unlocked && _0x1f5ece._html5AudioPool.push(_0x271b98), _0x1f5ece;
    },
    '_autoSuspend': function () {
      var _0x749ed4 = this;
      if (_0x749ed4.autoSuspend && _0x749ed4.ctx && 'undefined' !== typeof _0x749ed4.ctx.suspend && _0x4bc277.usingWebAudio) {
        for (var _0x37327b = 0x0; _0x37327b < _0x749ed4._howls.length; _0x37327b++) if (_0x749ed4._howls[_0x37327b]._webAudio) {
          for (var _0x5a23e9 = 0x0; _0x5a23e9 < _0x749ed4._howls[_0x37327b]._sounds.length; _0x5a23e9++) if (!_0x749ed4._howls[_0x37327b]._sounds[_0x5a23e9]._paused) return _0x749ed4;
        }
        return _0x749ed4._suspendTimer && clearTimeout(_0x749ed4._suspendTimer), _0x749ed4._suspendTimer = setTimeout(function () {
          if (_0x749ed4.autoSuspend) {
            _0x749ed4._suspendTimer = null, _0x749ed4.state = 'suspending';
            var _0x7eb49c = function () {
              _0x749ed4.state = 'suspended', _0x749ed4._resumeAfterSuspend && (delete _0x749ed4._resumeAfterSuspend, _0x749ed4._autoResume());
            };
            _0x749ed4.ctx.suspend().then(_0x7eb49c, _0x7eb49c);
          }
        }, 0x7530), _0x749ed4;
      }
    },
    '_autoResume': function () {
      var _0x2e10b5 = this;
      if (_0x2e10b5.ctx && 'undefined' !== typeof _0x2e10b5.ctx.resume && _0x4bc277.usingWebAudio) return 'running' === _0x2e10b5.state && 'interrupted' !== _0x2e10b5.ctx.state && _0x2e10b5._suspendTimer ? (clearTimeout(_0x2e10b5._suspendTimer), _0x2e10b5._suspendTimer = null) : 'suspended' === _0x2e10b5.state || 'running' === _0x2e10b5.state && 'interrupted' === _0x2e10b5.ctx.state ? (_0x2e10b5.ctx.resume().then(function () {
        _0x2e10b5.state = 'running';
        for (var _0x99e2fa = 0x0; _0x99e2fa < _0x2e10b5._howls.length; _0x99e2fa++) _0x2e10b5._howls[_0x99e2fa]._emit('resume');
      }), _0x2e10b5._suspendTimer && (clearTimeout(_0x2e10b5._suspendTimer), _0x2e10b5._suspendTimer = null)) : 'suspending' === _0x2e10b5.state && (_0x2e10b5._resumeAfterSuspend = !0x0), _0x2e10b5;
    }
  };
  var _0x4bc277 = new _0x44d8ec(),
    _0x1f8d6a = function (_0x15f71e) {
      !_0x15f71e.src || 0x0 === _0x15f71e.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(_0x15f71e);
    };
  _0x1f8d6a.prototype = {
    'init': function (_0x21a389) {
      var _0x40bbdd = this;
      return _0x4bc277.ctx || _0x509099(), _0x40bbdd._autoplay = _0x21a389.autoplay || !0x1, _0x40bbdd._format = 'string' !== typeof _0x21a389.format ? _0x21a389.format : [_0x21a389.format], _0x40bbdd._html5 = _0x21a389.html5 || !0x1, _0x40bbdd._muted = _0x21a389.mute || !0x1, _0x40bbdd._loop = _0x21a389.loop || !0x1, _0x40bbdd._pool = _0x21a389.pool || 0x5, _0x40bbdd._preload = 'boolean' === typeof _0x21a389.preload || 'metadata' === _0x21a389.preload ? _0x21a389.preload : !0x0, _0x40bbdd._rate = _0x21a389.rate || 0x1, _0x40bbdd._sprite = _0x21a389.sprite || {}, _0x40bbdd._src = 'string' !== typeof _0x21a389.src ? _0x21a389.src : [_0x21a389.src], _0x40bbdd._volume = void 0x0 !== _0x21a389.volume ? _0x21a389.volume : 0x1, _0x40bbdd._xhr = {
        'method': _0x21a389.xhr && _0x21a389.xhr.method ? _0x21a389.xhr.method : 'GET',
        'headers': _0x21a389.xhr && _0x21a389.xhr.headers ? _0x21a389.xhr.headers : null,
        'withCredentials': _0x21a389.xhr && _0x21a389.xhr.withCredentials ? _0x21a389.xhr.withCredentials : !0x1
      }, _0x40bbdd._duration = 0x0, _0x40bbdd._state = 'unloaded', _0x40bbdd._sounds = [], _0x40bbdd._endTimers = {}, _0x40bbdd._queue = [], _0x40bbdd._playLock = !0x1, _0x40bbdd._onend = _0x21a389.onend ? [{
        'fn': _0x21a389.onend
      }] : [], _0x40bbdd._onfade = _0x21a389.onfade ? [{
        'fn': _0x21a389.onfade
      }] : [], _0x40bbdd._onload = _0x21a389.onload ? [{
        'fn': _0x21a389.onload
      }] : [], _0x40bbdd._onloaderror = _0x21a389.onloaderror ? [{
        'fn': _0x21a389.onloaderror
      }] : [], _0x40bbdd._onplayerror = _0x21a389.onplayerror ? [{
        'fn': _0x21a389.onplayerror
      }] : [], _0x40bbdd._onpause = _0x21a389.onpause ? [{
        'fn': _0x21a389.onpause
      }] : [], _0x40bbdd._onplay = _0x21a389.onplay ? [{
        'fn': _0x21a389.onplay
      }] : [], _0x40bbdd._onstop = _0x21a389.onstop ? [{
        'fn': _0x21a389.onstop
      }] : [], _0x40bbdd._onmute = _0x21a389.onmute ? [{
        'fn': _0x21a389.onmute
      }] : [], _0x40bbdd._onvolume = _0x21a389.onvolume ? [{
        'fn': _0x21a389.onvolume
      }] : [], _0x40bbdd._onrate = _0x21a389.onrate ? [{
        'fn': _0x21a389.onrate
      }] : [], _0x40bbdd._onseek = _0x21a389.onseek ? [{
        'fn': _0x21a389.onseek
      }] : [], _0x40bbdd._onunlock = _0x21a389.onunlock ? [{
        'fn': _0x21a389.onunlock
      }] : [], _0x40bbdd._onresume = [], _0x40bbdd._webAudio = _0x4bc277.usingWebAudio && !_0x40bbdd._html5, 'undefined' !== typeof _0x4bc277.ctx && _0x4bc277.ctx && _0x4bc277.autoUnlock && _0x4bc277._unlockAudio(), _0x4bc277._howls.push(_0x40bbdd), _0x40bbdd._autoplay && _0x40bbdd._queue.push({
        'event': 'play',
        'action': function () {
          _0x40bbdd.play();
        }
      }), _0x40bbdd._preload && 'none' !== _0x40bbdd._preload && _0x40bbdd.load(), _0x40bbdd;
    },
    'load': function () {
      var _0x218a28 = null;
      if (_0x4bc277.noAudio) this._emit('loaderror', null, "No audio support.");else {
        'string' === typeof this._src && (this._src = [this._src]);
        for (var _0x551e84 = 0x0; _0x551e84 < this._src.length; _0x551e84++) {
          var _0x42f9f, _0x3c19fa;
          if (this._format && this._format[_0x551e84]) _0x42f9f = this._format[_0x551e84];else {
            _0x3c19fa = this._src[_0x551e84];
            if ('string' !== typeof _0x3c19fa) {
              this._emit('loaderror', null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            (_0x42f9f = /^data:audio\/([^;,]+);/i.exec(_0x3c19fa)) || (_0x42f9f = /\.([^.]+)$/.exec(_0x3c19fa.split('?', 0x1)[0x0])), _0x42f9f && (_0x42f9f = _0x42f9f[0x1].toLowerCase());
          }
          _0x42f9f || console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
          if (_0x42f9f && _0x4bc277.codecs(_0x42f9f)) {
            _0x218a28 = this._src[_0x551e84];
            break;
          }
        }
        if (_0x218a28) {
          this._src = _0x218a28, this._state = 'loading', 'https:' === window.location.protocol && 'http:' === _0x218a28.slice(0x0, 0x5) && (this._html5 = !0x0, this._webAudio = !0x1), new _0x527ba7(this);
          if (this._webAudio) {
            var _0x365b91 = this,
              _0x159b2c = _0x365b91._src;
            if (_0x36b75e[_0x159b2c]) _0x365b91._duration = _0x36b75e[_0x159b2c].duration, _0x8d8196(_0x365b91);else {
              if (/^data:[^;]+;base64,/.test(_0x159b2c)) {
                _0x218a28 = atob(_0x159b2c.split(',')[0x1]), _0x551e84 = new Uint8Array(_0x218a28.length);
                for (_0x42f9f = 0x0; _0x42f9f < _0x218a28.length; ++_0x42f9f) _0x551e84[_0x42f9f] = _0x218a28.charCodeAt(_0x42f9f);
                _0x311d65(_0x551e84.buffer, _0x365b91);
              } else {
                var _0x51aea6 = new XMLHttpRequest();
                _0x51aea6.open(_0x365b91._xhr.method, _0x159b2c, !0x0), _0x51aea6.withCredentials = _0x365b91._xhr.withCredentials, _0x51aea6.responseType = 'arraybuffer', _0x365b91._xhr.headers && Object.keys(_0x365b91._xhr.headers).forEach(function (_0x2d4bfe) {
                  _0x51aea6.setRequestHeader(_0x2d4bfe, _0x365b91._xhr.headers[_0x2d4bfe]);
                }), _0x51aea6.onload = function () {
                  var _0x2e77c5 = (_0x51aea6.status + '')[0x0];
                  '0' !== _0x2e77c5 && '2' !== _0x2e77c5 && '3' !== _0x2e77c5 ? _0x365b91._emit('loaderror', null, "Failed loading audio file with status: " + _0x51aea6.status + '.') : _0x311d65(_0x51aea6.response, _0x365b91);
                }, _0x51aea6.onerror = function () {
                  _0x365b91._webAudio && (_0x365b91._html5 = !0x0, _0x365b91._webAudio = !0x1, _0x365b91._sounds = [], delete _0x36b75e[_0x159b2c], _0x365b91.load());
                };
                try {
                  _0x51aea6.send();
                } catch (_0x32f6dc) {
                  _0x51aea6.onerror();
                }
              }
            }
          }
          return this;
        }
        this._emit('loaderror', null, "No codec support for selected audio sources.");
      }
    },
    'play': function (_0x1e4b42, _0x161216) {
      var _0x124644 = this,
        _0x191e69 = null;
      if ('number' === typeof _0x1e4b42) _0x191e69 = _0x1e4b42, _0x1e4b42 = null;else {
        if ('string' === typeof _0x1e4b42 && 'loaded' === _0x124644._state && !_0x124644._sprite[_0x1e4b42]) return null;
        if ('undefined' === typeof _0x1e4b42 && (_0x1e4b42 = '__default', !_0x124644._playLock)) {
          for (var _0x25562b = 0x0, _0x40f026 = 0x0; _0x40f026 < _0x124644._sounds.length; _0x40f026++) _0x124644._sounds[_0x40f026]._paused && !_0x124644._sounds[_0x40f026]._ended && (_0x25562b++, _0x191e69 = _0x124644._sounds[_0x40f026]._id);
          0x1 === _0x25562b ? _0x1e4b42 = null : _0x191e69 = null;
        }
      }
      var _0x299af2 = _0x191e69 ? _0x124644._soundById(_0x191e69) : _0x124644._inactiveSound();
      if (!_0x299af2) return null;
      _0x191e69 && !_0x1e4b42 && (_0x1e4b42 = _0x299af2._sprite || '__default');
      if ('loaded' !== _0x124644._state) {
        _0x299af2._sprite = _0x1e4b42, _0x299af2._ended = !0x1;
        var _0x1952d9 = _0x299af2._id;
        return _0x124644._queue.push({
          'event': 'play',
          'action': function () {
            _0x124644.play(_0x1952d9);
          }
        }), _0x1952d9;
      }
      if (_0x191e69 && !_0x299af2._paused) return _0x161216 || _0x124644._loadQueue('play'), _0x299af2._id;
      _0x124644._webAudio && _0x4bc277._autoResume();
      var _0x4be7e2 = Math.max(0x0, 0x0 < _0x299af2._seek ? _0x299af2._seek : _0x124644._sprite[_0x1e4b42][0x0] / 0x3e8),
        _0x553eed = Math.max(0x0, (_0x124644._sprite[_0x1e4b42][0x0] + _0x124644._sprite[_0x1e4b42][0x1]) / 0x3e8 - _0x4be7e2),
        _0x39a99f = 0x3e8 * _0x553eed / Math.abs(_0x299af2._rate),
        _0x466122 = _0x124644._sprite[_0x1e4b42][0x0] / 0x3e8,
        _0x1b4fa2 = (_0x124644._sprite[_0x1e4b42][0x0] + _0x124644._sprite[_0x1e4b42][0x1]) / 0x3e8;
      _0x299af2._sprite = _0x1e4b42, _0x299af2._ended = !0x1;
      var _0x42b2d0 = function () {
        _0x299af2._paused = !0x1, _0x299af2._seek = _0x4be7e2, _0x299af2._start = _0x466122, _0x299af2._stop = _0x1b4fa2, _0x299af2._loop = !(!_0x299af2._loop && !_0x124644._sprite[_0x1e4b42][0x2]);
      };
      if (_0x4be7e2 >= _0x1b4fa2) _0x124644._ended(_0x299af2);else {
        var _0x264987 = _0x299af2._node;
        if (_0x124644._webAudio) _0x191e69 = function () {
          _0x124644._playLock = !0x1, _0x42b2d0(), _0x124644._refreshBuffer(_0x299af2), _0x264987.gain.setValueAtTime(_0x299af2._muted || _0x124644._muted ? 0x0 : _0x299af2._volume, _0x4bc277.ctx.currentTime), _0x299af2._playStart = _0x4bc277.ctx.currentTime, 'undefined' === typeof _0x264987.bufferSource.start ? _0x299af2._loop ? _0x264987.bufferSource.noteGrainOn(0x0, _0x4be7e2, 0x15180) : _0x264987.bufferSource.noteGrainOn(0x0, _0x4be7e2, _0x553eed) : _0x299af2._loop ? _0x264987.bufferSource.start(0x0, _0x4be7e2, 0x15180) : _0x264987.bufferSource.start(0x0, _0x4be7e2, _0x553eed), Infinity !== _0x39a99f && (_0x124644._endTimers[_0x299af2._id] = setTimeout(_0x124644._ended.bind(_0x124644, _0x299af2), _0x39a99f)), _0x161216 || setTimeout(function () {
            _0x124644._emit('play', _0x299af2._id), _0x124644._loadQueue();
          }, 0x0);
        }, 'running' === _0x4bc277.state && 'interrupted' !== _0x4bc277.ctx.state ? _0x191e69() : (_0x124644._playLock = !0x0, _0x124644.once('resume', _0x191e69), _0x124644._clearTimer(_0x299af2._id));else {
          var _0x4f3260 = function () {
            _0x264987.currentTime = _0x4be7e2, _0x264987.muted = _0x299af2._muted || _0x124644._muted || _0x4bc277._muted || _0x264987.muted, _0x264987.volume = _0x299af2._volume * _0x4bc277.volume(), _0x264987.playbackRate = _0x299af2._rate;
            try {
              var _0x512990 = _0x264987.play();
              _0x512990 && 'undefined' !== typeof Promise && (_0x512990 instanceof Promise || 'function' === typeof _0x512990.then) ? (_0x124644._playLock = !0x0, _0x42b2d0(), _0x512990.then(function () {
                _0x124644._playLock = !0x1, _0x264987._unlocked = !0x0, _0x161216 ? _0x124644._loadQueue() : _0x124644._emit('play', _0x299af2._id);
              })['catch'](function () {
                _0x124644._playLock = !0x1, _0x124644._emit('playerror', _0x299af2._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), _0x299af2._ended = !0x0, _0x299af2._paused = !0x0;
              })) : _0x161216 || (_0x124644._playLock = !0x1, _0x42b2d0(), _0x124644._emit('play', _0x299af2._id)), _0x264987.playbackRate = _0x299af2._rate, _0x264987.paused ? _0x124644._emit('playerror', _0x299af2._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.") : '__default' !== _0x1e4b42 || _0x299af2._loop ? _0x124644._endTimers[_0x299af2._id] = setTimeout(_0x124644._ended.bind(_0x124644, _0x299af2), _0x39a99f) : (_0x124644._endTimers[_0x299af2._id] = function () {
                _0x124644._ended(_0x299af2), _0x264987.removeEventListener('ended', _0x124644._endTimers[_0x299af2._id], !0x1);
              }, _0x264987.addEventListener('ended', _0x124644._endTimers[_0x299af2._id], !0x1));
            } catch (_0x312633) {
              _0x124644._emit('playerror', _0x299af2._id, _0x312633);
            }
          };
          'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === _0x264987.src && (_0x264987.src = _0x124644._src, _0x264987.load()), _0x191e69 = window && window.ejecta || !_0x264987.readyState && _0x4bc277._navigator.isCocoonJS;
          if (0x3 <= _0x264987.readyState || _0x191e69) _0x4f3260();else {
            _0x124644._playLock = !0x0, _0x124644._state = 'loading';
            var _0x3a217b = function () {
              _0x124644._state = 'loaded', _0x4f3260(), _0x264987.removeEventListener(_0x4bc277._canPlayEvent, _0x3a217b, !0x1);
            };
            _0x264987.addEventListener(_0x4bc277._canPlayEvent, _0x3a217b, !0x1), _0x124644._clearTimer(_0x299af2._id);
          }
        }
        return _0x299af2._id;
      }
    },
    'pause': function (_0x5a9b80, _0x1343e2) {
      var _0x274d84 = this;
      if ('loaded' !== _0x274d84._state || _0x274d84._playLock) return _0x274d84._queue.push({
        'event': 'pause',
        'action': function () {
          _0x274d84.pause(_0x5a9b80);
        }
      }), _0x274d84;
      for (var _0x35c81a = _0x274d84._getSoundIds(_0x5a9b80), _0xe0e781 = 0x0; _0xe0e781 < _0x35c81a.length; _0xe0e781++) {
        _0x274d84._clearTimer(_0x35c81a[_0xe0e781]);
        var _0x16a89 = _0x274d84._soundById(_0x35c81a[_0xe0e781]);
        if (_0x16a89 && !_0x16a89._paused && (_0x16a89._seek = _0x274d84.seek(_0x35c81a[_0xe0e781]), _0x16a89._rateSeek = 0x0, _0x16a89._paused = !0x0, _0x274d84._stopFade(_0x35c81a[_0xe0e781]), _0x16a89._node)) {
          if (_0x274d84._webAudio) {
            if (!_0x16a89._node.bufferSource) continue;
            'undefined' === typeof _0x16a89._node.bufferSource.stop ? _0x16a89._node.bufferSource.noteOff(0x0) : _0x16a89._node.bufferSource.stop(0x0), _0x274d84._cleanBuffer(_0x16a89._node);
          } else (!isNaN(_0x16a89._node.duration) || Infinity === _0x16a89._node.duration) && _0x16a89._node.pause();
        }
        _0x1343e2 || _0x274d84._emit('pause', _0x16a89 ? _0x16a89._id : null);
      }
      return _0x274d84;
    },
    'stop': function (_0x408f99, _0x3185a3) {
      var _0x5a0444 = this;
      if ('loaded' !== _0x5a0444._state || _0x5a0444._playLock) return _0x5a0444._queue.push({
        'event': 'stop',
        'action': function () {
          _0x5a0444.stop(_0x408f99);
        }
      }), _0x5a0444;
      for (var _0x5ab88b = _0x5a0444._getSoundIds(_0x408f99), _0x228b39 = 0x0; _0x228b39 < _0x5ab88b.length; _0x228b39++) {
        _0x5a0444._clearTimer(_0x5ab88b[_0x228b39]);
        var _0x51ab08 = _0x5a0444._soundById(_0x5ab88b[_0x228b39]);
        if (_0x51ab08) {
          _0x51ab08._seek = _0x51ab08._start || 0x0, _0x51ab08._rateSeek = 0x0, _0x51ab08._paused = !0x0, _0x51ab08._ended = !0x0, _0x5a0444._stopFade(_0x5ab88b[_0x228b39]);
          if (_0x51ab08._node) {
            if (_0x5a0444._webAudio) _0x51ab08._node.bufferSource && ('undefined' === typeof _0x51ab08._node.bufferSource.stop ? _0x51ab08._node.bufferSource.noteOff(0x0) : _0x51ab08._node.bufferSource.stop(0x0), _0x5a0444._cleanBuffer(_0x51ab08._node));else {
              if (!isNaN(_0x51ab08._node.duration) || Infinity === _0x51ab08._node.duration) _0x51ab08._node.currentTime = _0x51ab08._start || 0x0, _0x51ab08._node.pause(), Infinity === _0x51ab08._node.duration && _0x5a0444._clearSound(_0x51ab08._node);
            }
          }
          _0x3185a3 || _0x5a0444._emit('stop', _0x51ab08._id);
        }
      }
      return _0x5a0444;
    },
    'mute': function (_0x346891, _0x2a4887) {
      var _0x292fe7 = this;
      if ('loaded' !== _0x292fe7._state || _0x292fe7._playLock) return _0x292fe7._queue.push({
        'event': 'mute',
        'action': function () {
          _0x292fe7.mute(_0x346891, _0x2a4887);
        }
      }), _0x292fe7;
      if ('undefined' === typeof _0x2a4887) {
        if ('boolean' === typeof _0x346891) _0x292fe7._muted = _0x346891;else return _0x292fe7._muted;
      }
      for (var _0x544ffd = _0x292fe7._getSoundIds(_0x2a4887), _0xe61841 = 0x0; _0xe61841 < _0x544ffd.length; _0xe61841++) {
        var _0x40cf28 = _0x292fe7._soundById(_0x544ffd[_0xe61841]);
        _0x40cf28 && (_0x40cf28._muted = _0x346891, _0x40cf28._interval && _0x292fe7._stopFade(_0x40cf28._id), _0x292fe7._webAudio && _0x40cf28._node ? _0x40cf28._node.gain.setValueAtTime(_0x346891 ? 0x0 : _0x40cf28._volume, _0x4bc277.ctx.currentTime) : _0x40cf28._node && (_0x40cf28._node.muted = _0x4bc277._muted ? !0x0 : _0x346891), _0x292fe7._emit('mute', _0x40cf28._id));
      }
      return _0x292fe7;
    },
    'volume': function () {
      var _0x152f01 = this,
        _0x4190df = arguments,
        _0x1afc0c,
        _0x5671e2;
      if (0x0 === _0x4190df.length) return _0x152f01._volume;
      0x1 === _0x4190df.length || 0x2 === _0x4190df.length && 'undefined' === typeof _0x4190df[0x1] ? 0x0 <= _0x152f01._getSoundIds().indexOf(_0x4190df[0x0]) ? _0x5671e2 = parseInt(_0x4190df[0x0], 0xa) : _0x1afc0c = parseFloat(_0x4190df[0x0]) : 0x2 <= _0x4190df.length && (_0x1afc0c = parseFloat(_0x4190df[0x0]), _0x5671e2 = parseInt(_0x4190df[0x1], 0xa));
      var _0x35e229;
      if ('undefined' !== typeof _0x1afc0c && 0x0 <= _0x1afc0c && 0x1 >= _0x1afc0c) {
        if ('loaded' !== _0x152f01._state || _0x152f01._playLock) return _0x152f01._queue.push({
          'event': 'volume',
          'action': function () {
            _0x152f01.volume.apply(_0x152f01, _0x4190df);
          }
        }), _0x152f01;
        'undefined' === typeof _0x5671e2 && (_0x152f01._volume = _0x1afc0c), _0x5671e2 = _0x152f01._getSoundIds(_0x5671e2);
        for (var _0x319a1e = 0x0; _0x319a1e < _0x5671e2.length; _0x319a1e++) if (_0x35e229 = _0x152f01._soundById(_0x5671e2[_0x319a1e])) _0x35e229._volume = _0x1afc0c, _0x4190df[0x2] || _0x152f01._stopFade(_0x5671e2[_0x319a1e]), _0x152f01._webAudio && _0x35e229._node && !_0x35e229._muted ? _0x35e229._node.gain.setValueAtTime(_0x1afc0c, _0x4bc277.ctx.currentTime) : _0x35e229._node && !_0x35e229._muted && (_0x35e229._node.volume = _0x1afc0c * _0x4bc277.volume()), _0x152f01._emit('volume', _0x35e229._id);
      } else return (_0x35e229 = _0x5671e2 ? _0x152f01._soundById(_0x5671e2) : _0x152f01._sounds[0x0]) ? _0x35e229._volume : 0x0;
      return _0x152f01;
    },
    'fade': function (_0x334eac, _0xcd4c40, _0x44675a, _0x4913aa) {
      var _0x1753cd = this;
      if ('loaded' !== _0x1753cd._state || _0x1753cd._playLock) return _0x1753cd._queue.push({
        'event': 'fade',
        'action': function () {
          _0x1753cd.fade(_0x334eac, _0xcd4c40, _0x44675a, _0x4913aa);
        }
      }), _0x1753cd;
      _0x334eac = Math.min(Math.max(0x0, parseFloat(_0x334eac)), 0x1), _0xcd4c40 = Math.min(Math.max(0x0, parseFloat(_0xcd4c40)), 0x1), _0x44675a = parseFloat(_0x44675a), _0x1753cd.volume(_0x334eac, _0x4913aa);
      for (var _0x4de345 = _0x1753cd._getSoundIds(_0x4913aa), _0xd16ecb = 0x0; _0xd16ecb < _0x4de345.length; _0xd16ecb++) {
        var _0x3b64fa = _0x1753cd._soundById(_0x4de345[_0xd16ecb]);
        if (_0x3b64fa) {
          _0x4913aa || _0x1753cd._stopFade(_0x4de345[_0xd16ecb]);
          if (_0x1753cd._webAudio && !_0x3b64fa._muted) {
            var _0x3bd343 = _0x4bc277.ctx.currentTime,
              _0x2356b6 = _0x3bd343 + _0x44675a / 0x3e8;
            _0x3b64fa._volume = _0x334eac, _0x3b64fa._node.gain.setValueAtTime(_0x334eac, _0x3bd343), _0x3b64fa._node.gain.linearRampToValueAtTime(_0xcd4c40, _0x2356b6);
          }
          _0x1753cd._startFadeInterval(_0x3b64fa, _0x334eac, _0xcd4c40, _0x44675a, _0x4de345[_0xd16ecb], 'undefined' === typeof _0x4913aa);
        }
      }
      return _0x1753cd;
    },
    '_startFadeInterval': function (_0x157412, _0x3faf0c, _0x4912b3, _0x589618, _0x59a84c, _0x362c27) {
      var _0x432289 = this,
        _0x49e36b = _0x3faf0c,
        _0x5f3c53 = _0x4912b3 - _0x3faf0c;
      _0x59a84c = Math.abs(_0x5f3c53 / 0.01), _0x59a84c = Math.max(0x4, 0x0 < _0x59a84c ? _0x589618 / _0x59a84c : _0x589618);
      var _0x596137 = Date.now();
      _0x157412._fadeTo = _0x4912b3, _0x157412._interval = setInterval(function () {
        var _0x4d5240 = (Date.now() - _0x596137) / _0x589618;
        _0x596137 = Date.now(), _0x49e36b += _0x5f3c53 * _0x4d5240, _0x49e36b = Math.round(0x64 * _0x49e36b) / 0x64, _0x49e36b = 0x0 > _0x5f3c53 ? Math.max(_0x4912b3, _0x49e36b) : Math.min(_0x4912b3, _0x49e36b), _0x432289._webAudio ? _0x157412._volume = _0x49e36b : _0x432289.volume(_0x49e36b, _0x157412._id, !0x0), _0x362c27 && (_0x432289._volume = _0x49e36b);
        if (_0x4912b3 < _0x3faf0c && _0x49e36b <= _0x4912b3 || _0x4912b3 > _0x3faf0c && _0x49e36b >= _0x4912b3) clearInterval(_0x157412._interval), _0x157412._interval = null, _0x157412._fadeTo = null, _0x432289.volume(_0x4912b3, _0x157412._id), _0x432289._emit('fade', _0x157412._id);
      }, _0x59a84c);
    },
    '_stopFade': function (_0x3785e1) {
      var _0x4d9bcc = this._soundById(_0x3785e1);
      return _0x4d9bcc && _0x4d9bcc._interval && (this._webAudio && _0x4d9bcc._node.gain.cancelScheduledValues(_0x4bc277.ctx.currentTime), clearInterval(_0x4d9bcc._interval), _0x4d9bcc._interval = null, this.volume(_0x4d9bcc._fadeTo, _0x3785e1), _0x4d9bcc._fadeTo = null, this._emit('fade', _0x3785e1)), this;
    },
    'loop': function () {
      var _0x5cce9c = arguments,
        _0x20771f,
        _0x47b634;
      if (0x0 === _0x5cce9c.length) return this._loop;
      if (0x1 === _0x5cce9c.length) {
        if ('boolean' === typeof _0x5cce9c[0x0]) this._loop = _0x20771f = _0x5cce9c[0x0];else return (_0x5cce9c = this._soundById(parseInt(_0x5cce9c[0x0], 0xa))) ? _0x5cce9c._loop : !0x1;
      } else 0x2 === _0x5cce9c.length && (_0x20771f = _0x5cce9c[0x0], _0x47b634 = parseInt(_0x5cce9c[0x1], 0xa));
      _0x47b634 = this._getSoundIds(_0x47b634);
      for (var _0x3aa41f = 0x0; _0x3aa41f < _0x47b634.length; _0x3aa41f++) if (_0x5cce9c = this._soundById(_0x47b634[_0x3aa41f])) {
        if (_0x5cce9c._loop = _0x20771f, this._webAudio && _0x5cce9c._node && _0x5cce9c._node.bufferSource && (_0x5cce9c._node.bufferSource.loop = _0x20771f)) _0x5cce9c._node.bufferSource.loopStart = _0x5cce9c._start || 0x0, _0x5cce9c._node.bufferSource.loopEnd = _0x5cce9c._stop, this.playing(_0x47b634[_0x3aa41f]) && (this.pause(_0x47b634[_0x3aa41f], !0x0), this.play(_0x47b634[_0x3aa41f], !0x0));
      }
      return this;
    },
    'rate': function () {
      var _0x4a229b = this,
        _0x4341b7 = arguments,
        _0x44496d,
        _0x45591d;
      0x0 === _0x4341b7.length ? _0x45591d = _0x4a229b._sounds[0x0]._id : 0x1 === _0x4341b7.length ? 0x0 <= _0x4a229b._getSoundIds().indexOf(_0x4341b7[0x0]) ? _0x45591d = parseInt(_0x4341b7[0x0], 0xa) : _0x44496d = parseFloat(_0x4341b7[0x0]) : 0x2 === _0x4341b7.length && (_0x44496d = parseFloat(_0x4341b7[0x0]), _0x45591d = parseInt(_0x4341b7[0x1], 0xa));
      var _0x320fc8;
      if ('number' === typeof _0x44496d) {
        if ('loaded' !== _0x4a229b._state || _0x4a229b._playLock) return _0x4a229b._queue.push({
          'event': 'rate',
          'action': function () {
            _0x4a229b.rate.apply(_0x4a229b, _0x4341b7);
          }
        }), _0x4a229b;
        'undefined' === typeof _0x45591d && (_0x4a229b._rate = _0x44496d), _0x45591d = _0x4a229b._getSoundIds(_0x45591d);
        for (var _0x5137f7 = 0x0; _0x5137f7 < _0x45591d.length; _0x5137f7++) if (_0x320fc8 = _0x4a229b._soundById(_0x45591d[_0x5137f7])) {
          _0x4a229b.playing(_0x45591d[_0x5137f7]) && (_0x320fc8._rateSeek = _0x4a229b.seek(_0x45591d[_0x5137f7]), _0x320fc8._playStart = _0x4a229b._webAudio ? _0x4bc277.ctx.currentTime : _0x320fc8._playStart), _0x320fc8._rate = _0x44496d, _0x4a229b._webAudio && _0x320fc8._node && _0x320fc8._node.bufferSource ? _0x320fc8._node.bufferSource.playbackRate.setValueAtTime(_0x44496d, _0x4bc277.ctx.currentTime) : _0x320fc8._node && (_0x320fc8._node.playbackRate = _0x44496d);
          var _0x4d882c = _0x4a229b.seek(_0x45591d[_0x5137f7]),
            _0x4d882c = 0x3e8 * ((_0x4a229b._sprite[_0x320fc8._sprite][0x0] + _0x4a229b._sprite[_0x320fc8._sprite][0x1]) / 0x3e8 - _0x4d882c) / Math.abs(_0x320fc8._rate);
          if (_0x4a229b._endTimers[_0x45591d[_0x5137f7]] || !_0x320fc8._paused) _0x4a229b._clearTimer(_0x45591d[_0x5137f7]), _0x4a229b._endTimers[_0x45591d[_0x5137f7]] = setTimeout(_0x4a229b._ended.bind(_0x4a229b, _0x320fc8), _0x4d882c);
          _0x4a229b._emit('rate', _0x320fc8._id);
        }
      } else return (_0x320fc8 = _0x4a229b._soundById(_0x45591d)) ? _0x320fc8._rate : _0x4a229b._rate;
      return _0x4a229b;
    },
    'seek': function () {
      var _0x2522a4 = this,
        _0x36b38a = arguments,
        _0x369d6d,
        _0x8d26df;
      0x0 === _0x36b38a.length ? _0x2522a4._sounds.length && (_0x8d26df = _0x2522a4._sounds[0x0]._id) : 0x1 === _0x36b38a.length ? 0x0 <= _0x2522a4._getSoundIds().indexOf(_0x36b38a[0x0]) ? _0x8d26df = parseInt(_0x36b38a[0x0], 0xa) : _0x2522a4._sounds.length && (_0x8d26df = _0x2522a4._sounds[0x0]._id, _0x369d6d = parseFloat(_0x36b38a[0x0])) : 0x2 === _0x36b38a.length && (_0x369d6d = parseFloat(_0x36b38a[0x0]), _0x8d26df = parseInt(_0x36b38a[0x1], 0xa));
      if ('undefined' === typeof _0x8d26df) return 0x0;
      if ('number' === typeof _0x369d6d && ('loaded' !== _0x2522a4._state || _0x2522a4._playLock)) return _0x2522a4._queue.push({
        'event': 'seek',
        'action': function () {
          _0x2522a4.seek.apply(_0x2522a4, _0x36b38a);
        }
      }), _0x2522a4;
      var _0x14bfd7 = _0x2522a4._soundById(_0x8d26df);
      if (_0x14bfd7) {
        if ('number' === typeof _0x369d6d && 0x0 <= _0x369d6d) {
          var _0x1519c4 = _0x2522a4.playing(_0x8d26df);
          _0x1519c4 && _0x2522a4.pause(_0x8d26df, !0x0), _0x14bfd7._seek = _0x369d6d, _0x14bfd7._ended = !0x1, _0x2522a4._clearTimer(_0x8d26df), !_0x2522a4._webAudio && _0x14bfd7._node && !isNaN(_0x14bfd7._node.duration) && (_0x14bfd7._node.currentTime = _0x369d6d);
          var _0xeffb22 = function () {
            _0x1519c4 && _0x2522a4.play(_0x8d26df, !0x0), _0x2522a4._emit('seek', _0x8d26df);
          };
          if (_0x1519c4 && !_0x2522a4._webAudio) {
            var _0x63abd0 = function () {
              _0x2522a4._playLock ? setTimeout(_0x63abd0, 0x0) : _0xeffb22();
            };
            setTimeout(_0x63abd0, 0x0);
          } else _0xeffb22();
        } else return _0x2522a4._webAudio ? (_0x369d6d = _0x2522a4.playing(_0x8d26df) ? _0x4bc277.ctx.currentTime - _0x14bfd7._playStart : 0x0, _0x14bfd7._seek + ((_0x14bfd7._rateSeek ? _0x14bfd7._rateSeek - _0x14bfd7._seek : 0x0) + _0x369d6d * Math.abs(_0x14bfd7._rate))) : _0x14bfd7._node.currentTime;
      }
      return _0x2522a4;
    },
    'playing': function (_0x445006) {
      if ('number' === typeof _0x445006) return (_0x445006 = this._soundById(_0x445006)) ? !_0x445006._paused : !0x1;
      for (_0x445006 = 0x0; _0x445006 < this._sounds.length; _0x445006++) if (!this._sounds[_0x445006]._paused) return !0x0;
      return !0x1;
    },
    'duration': function (_0x50e9e1) {
      var _0x98c20a = this._duration;
      return (_0x50e9e1 = this._soundById(_0x50e9e1)) && (_0x98c20a = this._sprite[_0x50e9e1._sprite][0x1] / 0x3e8), _0x98c20a;
    },
    'state': function () {
      return this._state;
    },
    'unload': function () {
      for (var _0x4cd692 = this._sounds, _0x1d5f9c = 0x0; _0x1d5f9c < _0x4cd692.length; _0x1d5f9c++) _0x4cd692[_0x1d5f9c]._paused || this.stop(_0x4cd692[_0x1d5f9c]._id), this._webAudio || (this._clearSound(_0x4cd692[_0x1d5f9c]._node), _0x4cd692[_0x1d5f9c]._node.removeEventListener('error', _0x4cd692[_0x1d5f9c]._errorFn, !0x1), _0x4cd692[_0x1d5f9c]._node.removeEventListener(_0x4bc277._canPlayEvent, _0x4cd692[_0x1d5f9c]._loadFn, !0x1), _0x4cd692[_0x1d5f9c]._node.removeEventListener('ended', _0x4cd692[_0x1d5f9c]._endFn, !0x1), _0x4bc277._releaseHtml5Audio(_0x4cd692[_0x1d5f9c]._node)), delete _0x4cd692[_0x1d5f9c]._node, this._clearTimer(_0x4cd692[_0x1d5f9c]._id);
      _0x1d5f9c = _0x4bc277._howls.indexOf(this), 0x0 <= _0x1d5f9c && _0x4bc277._howls.splice(_0x1d5f9c, 0x1), _0x4cd692 = !0x0;
      for (_0x1d5f9c = 0x0; _0x1d5f9c < _0x4bc277._howls.length; _0x1d5f9c++) if (_0x4bc277._howls[_0x1d5f9c]._src === this._src || 0x0 <= this._src.indexOf(_0x4bc277._howls[_0x1d5f9c]._src)) {
        _0x4cd692 = !0x1;
        break;
      }
      return _0x36b75e && _0x4cd692 && delete _0x36b75e[this._src], _0x4bc277.noAudio = !0x1, this._state = 'unloaded', this._sounds = [], null;
    },
    'on': function (_0x56d765, _0x302fd5, _0x16028b, _0x47dbf7) {
      return _0x56d765 = this['_on' + _0x56d765], 'function' === typeof _0x302fd5 && _0x56d765.push(_0x47dbf7 ? {
        'id': _0x16028b,
        'fn': _0x302fd5,
        'once': _0x47dbf7
      } : {
        'id': _0x16028b,
        'fn': _0x302fd5
      }), this;
    },
    'off': function (_0xb5a0ad, _0x498be8, _0x268522) {
      var _0x72d52f = this['_on' + _0xb5a0ad],
        _0x24f972 = 0x0;
      'number' === typeof _0x498be8 && (_0x268522 = _0x498be8, _0x498be8 = null);
      if (_0x498be8 || _0x268522) for (_0x24f972 = 0x0; _0x24f972 < _0x72d52f.length; _0x24f972++) {
        if (_0xb5a0ad = _0x268522 === _0x72d52f[_0x24f972].id, _0x498be8 === _0x72d52f[_0x24f972].fn && _0xb5a0ad || !_0x498be8 && _0xb5a0ad) {
          _0x72d52f.splice(_0x24f972, 0x1);
          break;
        }
      } else {
        if (_0xb5a0ad) this['_on' + _0xb5a0ad] = [];else {
          _0x498be8 = Object.keys(this);
          for (_0x24f972 = 0x0; _0x24f972 < _0x498be8.length; _0x24f972++) 0x0 === _0x498be8[_0x24f972].indexOf('_on') && Array.isArray(this[_0x498be8[_0x24f972]]) && (this[_0x498be8[_0x24f972]] = []);
        }
      }
      return this;
    },
    'once': function (_0x289924, _0xc7e765, _0x11c938) {
      return this.on(_0x289924, _0xc7e765, _0x11c938, 0x1), this;
    },
    '_emit': function (_0x1526fa, _0x5205f5, _0x524ed5) {
      for (var _0x6082cc = this['_on' + _0x1526fa], _0x25a695 = _0x6082cc.length - 0x1; 0x0 <= _0x25a695; _0x25a695--) if (!_0x6082cc[_0x25a695].id || _0x6082cc[_0x25a695].id === _0x5205f5 || 'load' === _0x1526fa) setTimeout(function (_0x5effa6) {
        _0x5effa6.call(this, _0x5205f5, _0x524ed5);
      }.bind(this, _0x6082cc[_0x25a695].fn), 0x0), _0x6082cc[_0x25a695].once && this.off(_0x1526fa, _0x6082cc[_0x25a695].fn, _0x6082cc[_0x25a695].id);
      return this._loadQueue(_0x1526fa), this;
    },
    '_loadQueue': function (_0x805641) {
      if (0x0 < this._queue.length) {
        var _0x39f017 = this._queue[0x0];
        _0x39f017.event === _0x805641 && (this._queue.shift(), this._loadQueue()), _0x805641 || _0x39f017.action();
      }
      return this;
    },
    '_ended': function (_0x13d550) {
      var _0x317b82 = _0x13d550._sprite;
      if (!this._webAudio && _0x13d550._node && !_0x13d550._node.paused && !_0x13d550._node.ended && _0x13d550._node.currentTime < _0x13d550._stop) return setTimeout(this._ended.bind(this, _0x13d550), 0x64), this;
      _0x317b82 = !(!_0x13d550._loop && !this._sprite[_0x317b82][0x2]), this._emit('end', _0x13d550._id), !this._webAudio && _0x317b82 && this.stop(_0x13d550._id, !0x0).play(_0x13d550._id);
      if (this._webAudio && _0x317b82) {
        this._emit('play', _0x13d550._id), _0x13d550._seek = _0x13d550._start || 0x0, _0x13d550._rateSeek = 0x0, _0x13d550._playStart = _0x4bc277.ctx.currentTime;
        var _0x3c79a2 = 0x3e8 * (_0x13d550._stop - _0x13d550._start) / Math.abs(_0x13d550._rate);
        this._endTimers[_0x13d550._id] = setTimeout(this._ended.bind(this, _0x13d550), _0x3c79a2);
      }
      return this._webAudio && !_0x317b82 && (_0x13d550._paused = !0x0, _0x13d550._ended = !0x0, _0x13d550._seek = _0x13d550._start || 0x0, _0x13d550._rateSeek = 0x0, this._clearTimer(_0x13d550._id), this._cleanBuffer(_0x13d550._node), _0x4bc277._autoSuspend()), !this._webAudio && !_0x317b82 && this.stop(_0x13d550._id, !0x0), this;
    },
    '_clearTimer': function (_0x3ac244) {
      if (this._endTimers[_0x3ac244]) {
        if ('function' !== typeof this._endTimers[_0x3ac244]) clearTimeout(this._endTimers[_0x3ac244]);else {
          var _0x48b6e1 = this._soundById(_0x3ac244);
          _0x48b6e1 && _0x48b6e1._node && _0x48b6e1._node.removeEventListener('ended', this._endTimers[_0x3ac244], !0x1);
        }
        delete this._endTimers[_0x3ac244];
      }
      return this;
    },
    '_soundById': function (_0x46270d) {
      for (var _0x1ca7a2 = 0x0; _0x1ca7a2 < this._sounds.length; _0x1ca7a2++) if (_0x46270d === this._sounds[_0x1ca7a2]._id) return this._sounds[_0x1ca7a2];
      return null;
    },
    '_inactiveSound': function () {
      this._drain();
      for (var _0x5cc588 = 0x0; _0x5cc588 < this._sounds.length; _0x5cc588++) if (this._sounds[_0x5cc588]._ended) return this._sounds[_0x5cc588].reset();
      return new _0x527ba7(this);
    },
    '_drain': function () {
      var _0x17fbbf = this._pool,
        _0x46eeb6 = 0x0,
        _0x15d75e = 0x0;
      if (!(this._sounds.length < _0x17fbbf)) {
        for (_0x15d75e = 0x0; _0x15d75e < this._sounds.length; _0x15d75e++) this._sounds[_0x15d75e]._ended && _0x46eeb6++;
        for (_0x15d75e = this._sounds.length - 0x1; 0x0 <= _0x15d75e && !(_0x46eeb6 <= _0x17fbbf); _0x15d75e--) this._sounds[_0x15d75e]._ended && (this._webAudio && this._sounds[_0x15d75e]._node && this._sounds[_0x15d75e]._node.disconnect(0x0), this._sounds.splice(_0x15d75e, 0x1), _0x46eeb6--);
      }
    },
    '_getSoundIds': function (_0x265a9b) {
      if ('undefined' === typeof _0x265a9b) {
        _0x265a9b = [];
        for (var _0x275950 = 0x0; _0x275950 < this._sounds.length; _0x275950++) _0x265a9b.push(this._sounds[_0x275950]._id);
        return _0x265a9b;
      }
      return [_0x265a9b];
    },
    '_refreshBuffer': function (_0x4c91a2) {
      _0x4c91a2._node.bufferSource = _0x4bc277.ctx.createBufferSource(), _0x4c91a2._node.bufferSource.buffer = _0x36b75e[this._src], _0x4c91a2._panner ? _0x4c91a2._node.bufferSource.connect(_0x4c91a2._panner) : _0x4c91a2._node.bufferSource.connect(_0x4c91a2._node);
      if (_0x4c91a2._node.bufferSource.loop = _0x4c91a2._loop) _0x4c91a2._node.bufferSource.loopStart = _0x4c91a2._start || 0x0, _0x4c91a2._node.bufferSource.loopEnd = _0x4c91a2._stop || 0x0;
      return _0x4c91a2._node.bufferSource.playbackRate.setValueAtTime(_0x4c91a2._rate, _0x4bc277.ctx.currentTime), this;
    },
    '_cleanBuffer': function (_0x187168) {
      var _0x2c009a = _0x4bc277._navigator && 0x0 <= _0x4bc277._navigator.vendor.indexOf('Apple');
      if (!_0x187168.bufferSource) return this;
      if (_0x4bc277._scratchBuffer && _0x187168.bufferSource && (_0x187168.bufferSource.onended = null, _0x187168.bufferSource.disconnect(0x0), _0x2c009a)) try {
        _0x187168.bufferSource.buffer = _0x4bc277._scratchBuffer;
      } catch (_0x2eab8a) {}
      return _0x187168.bufferSource = null, this;
    },
    '_clearSound': function (_0x4a1ac1) {
      /MSIE |Trident\//.test(_0x4bc277._navigator && _0x4bc277._navigator.userAgent) || (_0x4a1ac1.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
    }
  };
  var _0x527ba7 = function (_0x156b17) {
    this._parent = _0x156b17, this.init();
  };
  _0x527ba7.prototype = {
    'init': function () {
      var _0x51b577 = this._parent;
      return this._muted = _0x51b577._muted, this._loop = _0x51b577._loop, this._volume = _0x51b577._volume, this._rate = _0x51b577._rate, this._seek = 0x0, this._ended = this._paused = !0x0, this._sprite = '__default', this._id = ++_0x4bc277._counter, _0x51b577._sounds.push(this), this.create(), this;
    },
    'create': function () {
      var _0x1a72e4 = this._parent,
        _0xd0fcbd = _0x4bc277._muted || this._muted || this._parent._muted ? 0x0 : this._volume;
      return _0x1a72e4._webAudio ? (this._node = 'undefined' === typeof _0x4bc277.ctx.createGain ? _0x4bc277.ctx.createGainNode() : _0x4bc277.ctx.createGain(), this._node.gain.setValueAtTime(_0xd0fcbd, _0x4bc277.ctx.currentTime), this._node.paused = !0x0, this._node.connect(_0x4bc277.masterGain)) : _0x4bc277.noAudio || (this._node = _0x4bc277._obtainHtml5Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener('error', this._errorFn, !0x1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(_0x4bc277._canPlayEvent, this._loadFn, !0x1), this._endFn = this._endListener.bind(this), this._node.addEventListener('ended', this._endFn, !0x1), this._node.src = _0x1a72e4._src, this._node.preload = !0x0 === _0x1a72e4._preload ? 'auto' : _0x1a72e4._preload, this._node.volume = _0xd0fcbd * _0x4bc277.volume(), this._node.load()), this;
    },
    'reset': function () {
      var _0x2653fa = this._parent;
      return this._muted = _0x2653fa._muted, this._loop = _0x2653fa._loop, this._volume = _0x2653fa._volume, this._rate = _0x2653fa._rate, this._rateSeek = this._seek = 0x0, this._ended = this._paused = !0x0, this._sprite = '__default', this._id = ++_0x4bc277._counter, this;
    },
    '_errorListener': function () {
      this._parent._emit('loaderror', this._id, this._node.error ? this._node.error.code : 0x0), this._node.removeEventListener('error', this._errorFn, !0x1);
    },
    '_loadListener': function () {
      var _0x4d6210 = this._parent;
      _0x4d6210._duration = Math.ceil(0xa * this._node.duration) / 0xa, 0x0 === Object.keys(_0x4d6210._sprite).length && (_0x4d6210._sprite = {
        '__default': [0x0, 0x3e8 * _0x4d6210._duration]
      }), 'loaded' !== _0x4d6210._state && (_0x4d6210._state = 'loaded', _0x4d6210._emit('load'), _0x4d6210._loadQueue()), this._node.removeEventListener(_0x4bc277._canPlayEvent, this._loadFn, !0x1);
    },
    '_endListener': function () {
      var _0x3010f0 = this._parent;
      Infinity === _0x3010f0._duration && (_0x3010f0._duration = Math.ceil(0xa * this._node.duration) / 0xa, Infinity === _0x3010f0._sprite.__default[0x1] && (_0x3010f0._sprite.__default[0x1] = 0x3e8 * _0x3010f0._duration), _0x3010f0._ended(this)), this._node.removeEventListener('ended', this._endFn, !0x1);
    }
  };
  var _0x36b75e = {},
    _0x311d65 = function (_0x7217d2, _0x23c0ee) {
      var _0x58397c = function () {
          _0x23c0ee._emit('loaderror', null, "Decoding audio data failed.");
        },
        _0x3df1b2 = function (_0x5ede24) {
          _0x5ede24 && 0x0 < _0x23c0ee._sounds.length ? (_0x36b75e[_0x23c0ee._src] = _0x5ede24, _0x8d8196(_0x23c0ee, _0x5ede24)) : _0x58397c();
        };
      'undefined' !== typeof Promise && 0x1 === _0x4bc277.ctx.decodeAudioData.length ? _0x4bc277.ctx.decodeAudioData(_0x7217d2).then(_0x3df1b2)['catch'](_0x58397c) : _0x4bc277.ctx.decodeAudioData(_0x7217d2, _0x3df1b2, _0x58397c);
    },
    _0x8d8196 = function (_0x1a097e, _0x4642ef) {
      _0x4642ef && !_0x1a097e._duration && (_0x1a097e._duration = _0x4642ef.duration), 0x0 === Object.keys(_0x1a097e._sprite).length && (_0x1a097e._sprite = {
        '__default': [0x0, 0x3e8 * _0x1a097e._duration]
      }), 'loaded' !== _0x1a097e._state && (_0x1a097e._state = 'loaded', _0x1a097e._emit('load'), _0x1a097e._loadQueue());
    },
    _0x509099 = function () {
      if (_0x4bc277.usingWebAudio) {
        try {
          'undefined' !== typeof AudioContext ? _0x4bc277.ctx = new AudioContext() : 'undefined' !== typeof webkitAudioContext ? _0x4bc277.ctx = new webkitAudioContext() : _0x4bc277.usingWebAudio = !0x1;
        } catch (_0x28cf12) {
          _0x4bc277.usingWebAudio = !0x1;
        }
        _0x4bc277.ctx || (_0x4bc277.usingWebAudio = !0x1);
        var _0x5936aa = /iP(hone|od|ad)/.test(_0x4bc277._navigator && _0x4bc277._navigator.platform),
          _0x3f21f8 = _0x4bc277._navigator && _0x4bc277._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
          _0x3f21f8 = _0x3f21f8 ? parseInt(_0x3f21f8[0x1], 0xa) : null;
        _0x5936aa && _0x3f21f8 && 0x9 > _0x3f21f8 && (_0x5936aa = /safari/.test(_0x4bc277._navigator && _0x4bc277._navigator.userAgent.toLowerCase()), _0x4bc277._navigator && !_0x5936aa && (_0x4bc277.usingWebAudio = !0x1)), _0x4bc277.usingWebAudio && (_0x4bc277.masterGain = 'undefined' === typeof _0x4bc277.ctx.createGain ? _0x4bc277.ctx.createGainNode() : _0x4bc277.ctx.createGain(), _0x4bc277.masterGain.gain.setValueAtTime(_0x4bc277._muted ? 0x0 : _0x4bc277._volume, _0x4bc277.ctx.currentTime), _0x4bc277.masterGain.connect(_0x4bc277.ctx.destination)), _0x4bc277._setup();
      }
    };
  'function' === typeof define && define.amd && define([], function () {
    return {
      'Howler': _0x4bc277,
      'Howl': _0x1f8d6a
    };
  }), 'undefined' !== typeof exports && (exports.Howler = _0x4bc277, exports.Howl = _0x1f8d6a), 'undefined' !== typeof global ? (global.HowlerGlobal = _0x44d8ec, global.Howler = _0x4bc277, global.Howl = _0x1f8d6a, global.Sound = _0x527ba7) : 'undefined' !== typeof window && (window.HowlerGlobal = _0x44d8ec, window.Howler = _0x4bc277, window.Howl = _0x1f8d6a, window.Sound = _0x527ba7);
})(), function () {
  HowlerGlobal.prototype._pos = [0x0, 0x0, 0x0], HowlerGlobal.prototype._orientation = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0], HowlerGlobal.prototype.stereo = function (_0xf2af29) {
    if (!this.ctx || !this.ctx.listener) return this;
    for (var _0x47e677 = this._howls.length - 0x1; 0x0 <= _0x47e677; _0x47e677--) this._howls[_0x47e677].stereo(_0xf2af29);
    return this;
  }, HowlerGlobal.prototype.pos = function (_0x374449, _0x29288f, _0x48dd92) {
    if (!this.ctx || !this.ctx.listener) return this;
    _0x29288f = 'number' !== typeof _0x29288f ? this._pos[0x1] : _0x29288f, _0x48dd92 = 'number' !== typeof _0x48dd92 ? this._pos[0x2] : _0x48dd92;
    if ('number' === typeof _0x374449) this._pos = [_0x374449, _0x29288f, _0x48dd92], 'undefined' !== typeof this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0x0], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionY.setTargetAtTime(this._pos[0x1], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[0x2], Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setPosition(this._pos[0x0], this._pos[0x1], this._pos[0x2]);else return this._pos;
    return this;
  }, HowlerGlobal.prototype.orientation = function (_0x2a646b, _0x2ae0be, _0x4abd00, _0x122a4c, _0x238fe1, _0x3451fb) {
    if (!this.ctx || !this.ctx.listener) return this;
    var _0x22a842 = this._orientation;
    _0x2ae0be = 'number' !== typeof _0x2ae0be ? _0x22a842[0x1] : _0x2ae0be, _0x4abd00 = 'number' !== typeof _0x4abd00 ? _0x22a842[0x2] : _0x4abd00, _0x122a4c = 'number' !== typeof _0x122a4c ? _0x22a842[0x3] : _0x122a4c, _0x238fe1 = 'number' !== typeof _0x238fe1 ? _0x22a842[0x4] : _0x238fe1, _0x3451fb = 'number' !== typeof _0x3451fb ? _0x22a842[0x5] : _0x3451fb;
    if ('number' === typeof _0x2a646b) this._orientation = [_0x2a646b, _0x2ae0be, _0x4abd00, _0x122a4c, _0x238fe1, _0x3451fb], 'undefined' !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(_0x2a646b, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardY.setTargetAtTime(_0x2ae0be, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardZ.setTargetAtTime(_0x4abd00, Howler.ctx.currentTime, 0.1), this.ctx.listener.upX.setTargetAtTime(_0x122a4c, Howler.ctx.currentTime, 0.1), this.ctx.listener.upY.setTargetAtTime(_0x238fe1, Howler.ctx.currentTime, 0.1), this.ctx.listener.upZ.setTargetAtTime(_0x3451fb, Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setOrientation(_0x2a646b, _0x2ae0be, _0x4abd00, _0x122a4c, _0x238fe1, _0x3451fb);else return _0x22a842;
    return this;
  };
  var _0x1185ff = Howl.prototype.init;
  Howl.prototype.init = function (_0x485e5b) {
    return this._orientation = _0x485e5b.orientation || [0x1, 0x0, 0x0], this._stereo = _0x485e5b.stereo || null, this._pos = _0x485e5b.pos || null, this._pannerAttr = {
      'coneInnerAngle': 'undefined' !== typeof _0x485e5b.coneInnerAngle ? _0x485e5b.coneInnerAngle : 0x168,
      'coneOuterAngle': 'undefined' !== typeof _0x485e5b.coneOuterAngle ? _0x485e5b.coneOuterAngle : 0x168,
      'coneOuterGain': 'undefined' !== typeof _0x485e5b.coneOuterGain ? _0x485e5b.coneOuterGain : 0x0,
      'distanceModel': 'undefined' !== typeof _0x485e5b.distanceModel ? _0x485e5b.distanceModel : 'inverse',
      'maxDistance': 'undefined' !== typeof _0x485e5b.maxDistance ? _0x485e5b.maxDistance : 0x2710,
      'panningModel': 'undefined' !== typeof _0x485e5b.panningModel ? _0x485e5b.panningModel : 'HRTF',
      'refDistance': 'undefined' !== typeof _0x485e5b.refDistance ? _0x485e5b.refDistance : 0x1,
      'rolloffFactor': 'undefined' !== typeof _0x485e5b.rolloffFactor ? _0x485e5b.rolloffFactor : 0x1
    }, this._onstereo = _0x485e5b.onstereo ? [{
      'fn': _0x485e5b.onstereo
    }] : [], this._onpos = _0x485e5b.onpos ? [{
      'fn': _0x485e5b.onpos
    }] : [], this._onorientation = _0x485e5b.onorientation ? [{
      'fn': _0x485e5b.onorientation
    }] : [], _0x1185ff.call(this, _0x485e5b);
  }, Howl.prototype.stereo = function (_0x4e4017, _0x59d934) {
    var _0x1af3c6 = this;
    if (!_0x1af3c6._webAudio) return _0x1af3c6;
    if ('loaded' !== _0x1af3c6._state) return _0x1af3c6._queue.push({
      'event': 'stereo',
      'action': function () {
        _0x1af3c6.stereo(_0x4e4017, _0x59d934);
      }
    }), _0x1af3c6;
    var _0x286168 = 'undefined' === typeof Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
    if ('undefined' === typeof _0x59d934) {
      if ('number' === typeof _0x4e4017) _0x1af3c6._stereo = _0x4e4017, _0x1af3c6._pos = [_0x4e4017, 0x0, 0x0];else return _0x1af3c6._stereo;
    }
    for (var _0x4557f9 = _0x1af3c6._getSoundIds(_0x59d934), _0x5e0e61 = 0x0; _0x5e0e61 < _0x4557f9.length; _0x5e0e61++) {
      var _0x3694cb = _0x1af3c6._soundById(_0x4557f9[_0x5e0e61]);
      if (_0x3694cb) {
        if ('number' === typeof _0x4e4017) _0x3694cb._stereo = _0x4e4017, _0x3694cb._pos = [_0x4e4017, 0x0, 0x0], _0x3694cb._node && (_0x3694cb._pannerAttr.panningModel = 'equalpower', (!_0x3694cb._panner || !_0x3694cb._panner.pan) && _0x431837(_0x3694cb, _0x286168), 'spatial' === _0x286168 ? 'undefined' !== typeof _0x3694cb._panner.positionX ? (_0x3694cb._panner.positionX.setValueAtTime(_0x4e4017, Howler.ctx.currentTime), _0x3694cb._panner.positionY.setValueAtTime(0x0, Howler.ctx.currentTime), _0x3694cb._panner.positionZ.setValueAtTime(0x0, Howler.ctx.currentTime)) : _0x3694cb._panner.setPosition(_0x4e4017, 0x0, 0x0) : _0x3694cb._panner.pan.setValueAtTime(_0x4e4017, Howler.ctx.currentTime)), _0x1af3c6._emit('stereo', _0x3694cb._id);else return _0x3694cb._stereo;
      }
    }
    return _0x1af3c6;
  }, Howl.prototype.pos = function (_0x3ba838, _0xec1041, _0x1dbcb7, _0x3056a2) {
    var _0x534d1b = this;
    if (!_0x534d1b._webAudio) return _0x534d1b;
    if ('loaded' !== _0x534d1b._state) return _0x534d1b._queue.push({
      'event': 'pos',
      'action': function () {
        _0x534d1b.pos(_0x3ba838, _0xec1041, _0x1dbcb7, _0x3056a2);
      }
    }), _0x534d1b;
    _0xec1041 = 'number' !== typeof _0xec1041 ? 0x0 : _0xec1041, _0x1dbcb7 = 'number' !== typeof _0x1dbcb7 ? -0.5 : _0x1dbcb7;
    if ('undefined' === typeof _0x3056a2) {
      if ('number' === typeof _0x3ba838) _0x534d1b._pos = [_0x3ba838, _0xec1041, _0x1dbcb7];else return _0x534d1b._pos;
    }
    for (var _0x48319d = _0x534d1b._getSoundIds(_0x3056a2), _0x376500 = 0x0; _0x376500 < _0x48319d.length; _0x376500++) {
      var _0xbc65e = _0x534d1b._soundById(_0x48319d[_0x376500]);
      if (_0xbc65e) {
        if ('number' === typeof _0x3ba838) _0xbc65e._pos = [_0x3ba838, _0xec1041, _0x1dbcb7], _0xbc65e._node && ((!_0xbc65e._panner || _0xbc65e._panner.pan) && _0x431837(_0xbc65e, 'spatial'), 'undefined' !== typeof _0xbc65e._panner.positionX ? (_0xbc65e._panner.positionX.setValueAtTime(_0x3ba838, Howler.ctx.currentTime), _0xbc65e._panner.positionY.setValueAtTime(_0xec1041, Howler.ctx.currentTime), _0xbc65e._panner.positionZ.setValueAtTime(_0x1dbcb7, Howler.ctx.currentTime)) : _0xbc65e._panner.setPosition(_0x3ba838, _0xec1041, _0x1dbcb7)), _0x534d1b._emit('pos', _0xbc65e._id);else return _0xbc65e._pos;
      }
    }
    return _0x534d1b;
  }, Howl.prototype.orientation = function (_0x55402e, _0x24d823, _0x365c98, _0x589657) {
    var _0x378b0c = this;
    if (!_0x378b0c._webAudio) return _0x378b0c;
    if ('loaded' !== _0x378b0c._state) return _0x378b0c._queue.push({
      'event': 'orientation',
      'action': function () {
        _0x378b0c.orientation(_0x55402e, _0x24d823, _0x365c98, _0x589657);
      }
    }), _0x378b0c;
    _0x24d823 = 'number' !== typeof _0x24d823 ? _0x378b0c._orientation[0x1] : _0x24d823, _0x365c98 = 'number' !== typeof _0x365c98 ? _0x378b0c._orientation[0x2] : _0x365c98;
    if ('undefined' === typeof _0x589657) {
      if ('number' === typeof _0x55402e) _0x378b0c._orientation = [_0x55402e, _0x24d823, _0x365c98];else return _0x378b0c._orientation;
    }
    for (var _0x31c93e = _0x378b0c._getSoundIds(_0x589657), _0x1b7f7f = 0x0; _0x1b7f7f < _0x31c93e.length; _0x1b7f7f++) {
      var _0xae4dc3 = _0x378b0c._soundById(_0x31c93e[_0x1b7f7f]);
      if (_0xae4dc3) {
        if ('number' === typeof _0x55402e) _0xae4dc3._orientation = [_0x55402e, _0x24d823, _0x365c98], _0xae4dc3._node && (_0xae4dc3._panner || (_0xae4dc3._pos || (_0xae4dc3._pos = _0x378b0c._pos || [0x0, 0x0, -0.5]), _0x431837(_0xae4dc3, 'spatial')), 'undefined' !== typeof _0xae4dc3._panner.orientationX ? (_0xae4dc3._panner.orientationX.setValueAtTime(_0x55402e, Howler.ctx.currentTime), _0xae4dc3._panner.orientationY.setValueAtTime(_0x24d823, Howler.ctx.currentTime), _0xae4dc3._panner.orientationZ.setValueAtTime(_0x365c98, Howler.ctx.currentTime)) : _0xae4dc3._panner.setOrientation(_0x55402e, _0x24d823, _0x365c98)), _0x378b0c._emit('orientation', _0xae4dc3._id);else return _0xae4dc3._orientation;
      }
    }
    return _0x378b0c;
  }, Howl.prototype.pannerAttr = function () {
    var _0x3537b2 = arguments,
      _0x291502,
      _0x43f9db;
    if (!this._webAudio) return this;
    if (0x0 === _0x3537b2.length) return this._pannerAttr;
    if (0x1 === _0x3537b2.length) {
      if ('object' === typeof _0x3537b2[0x0]) _0x291502 = _0x3537b2[0x0], 'undefined' === typeof _0x43f9db && (_0x291502.pannerAttr || (_0x291502.pannerAttr = {
        'coneInnerAngle': _0x291502.coneInnerAngle,
        'coneOuterAngle': _0x291502.coneOuterAngle,
        'coneOuterGain': _0x291502.coneOuterGain,
        'distanceModel': _0x291502.distanceModel,
        'maxDistance': _0x291502.maxDistance,
        'refDistance': _0x291502.refDistance,
        'rolloffFactor': _0x291502.rolloffFactor,
        'panningModel': _0x291502.panningModel
      }), this._pannerAttr = {
        'coneInnerAngle': 'undefined' !== typeof _0x291502.pannerAttr.coneInnerAngle ? _0x291502.pannerAttr.coneInnerAngle : this._coneInnerAngle,
        'coneOuterAngle': 'undefined' !== typeof _0x291502.pannerAttr.coneOuterAngle ? _0x291502.pannerAttr.coneOuterAngle : this._coneOuterAngle,
        'coneOuterGain': 'undefined' !== typeof _0x291502.pannerAttr.coneOuterGain ? _0x291502.pannerAttr.coneOuterGain : this._coneOuterGain,
        'distanceModel': 'undefined' !== typeof _0x291502.pannerAttr.distanceModel ? _0x291502.pannerAttr.distanceModel : this._distanceModel,
        'maxDistance': 'undefined' !== typeof _0x291502.pannerAttr.maxDistance ? _0x291502.pannerAttr.maxDistance : this._maxDistance,
        'refDistance': 'undefined' !== typeof _0x291502.pannerAttr.refDistance ? _0x291502.pannerAttr.refDistance : this._refDistance,
        'rolloffFactor': 'undefined' !== typeof _0x291502.pannerAttr.rolloffFactor ? _0x291502.pannerAttr.rolloffFactor : this._rolloffFactor,
        'panningModel': 'undefined' !== typeof _0x291502.pannerAttr.panningModel ? _0x291502.pannerAttr.panningModel : this._panningModel
      });else return (_0x3537b2 = this._soundById(parseInt(_0x3537b2[0x0], 0xa))) ? _0x3537b2._pannerAttr : this._pannerAttr;
    } else 0x2 === _0x3537b2.length && (_0x291502 = _0x3537b2[0x0], _0x43f9db = parseInt(_0x3537b2[0x1], 0xa));
    _0x43f9db = this._getSoundIds(_0x43f9db);
    for (var _0x5afcf3 = 0x0; _0x5afcf3 < _0x43f9db.length; _0x5afcf3++) if (_0x3537b2 = this._soundById(_0x43f9db[_0x5afcf3])) {
      var _0x560649 = _0x3537b2._pannerAttr,
        _0x560649 = {
          'coneInnerAngle': 'undefined' !== typeof _0x291502.coneInnerAngle ? _0x291502.coneInnerAngle : _0x560649.coneInnerAngle,
          'coneOuterAngle': 'undefined' !== typeof _0x291502.coneOuterAngle ? _0x291502.coneOuterAngle : _0x560649.coneOuterAngle,
          'coneOuterGain': 'undefined' !== typeof _0x291502.coneOuterGain ? _0x291502.coneOuterGain : _0x560649.coneOuterGain,
          'distanceModel': 'undefined' !== typeof _0x291502.distanceModel ? _0x291502.distanceModel : _0x560649.distanceModel,
          'maxDistance': 'undefined' !== typeof _0x291502.maxDistance ? _0x291502.maxDistance : _0x560649.maxDistance,
          'refDistance': 'undefined' !== typeof _0x291502.refDistance ? _0x291502.refDistance : _0x560649.refDistance,
          'rolloffFactor': 'undefined' !== typeof _0x291502.rolloffFactor ? _0x291502.rolloffFactor : _0x560649.rolloffFactor,
          'panningModel': 'undefined' !== typeof _0x291502.panningModel ? _0x291502.panningModel : _0x560649.panningModel
        },
        _0x300bc9 = _0x3537b2._panner;
      _0x300bc9 || (_0x3537b2._pos || (_0x3537b2._pos = this._pos || [0x0, 0x0, -0.5]), _0x431837(_0x3537b2, 'spatial'), _0x300bc9 = _0x3537b2._panner), _0x300bc9.coneInnerAngle = _0x560649.coneInnerAngle, _0x300bc9.coneOuterAngle = _0x560649.coneOuterAngle, _0x300bc9.coneOuterGain = _0x560649.coneOuterGain, _0x300bc9.distanceModel = _0x560649.distanceModel, _0x300bc9.maxDistance = _0x560649.maxDistance, _0x300bc9.refDistance = _0x560649.refDistance, _0x300bc9.rolloffFactor = _0x560649.rolloffFactor, _0x300bc9.panningModel = _0x560649.panningModel;
    }
    return this;
  };
  var _0x50c68a = Sound.prototype.init;
  Sound.prototype.init = function () {
    var _0x49a67f = this._parent;
    this._orientation = _0x49a67f._orientation, this._stereo = _0x49a67f._stereo, this._pos = _0x49a67f._pos, this._pannerAttr = _0x49a67f._pannerAttr, _0x50c68a.call(this), this._stereo ? _0x49a67f.stereo(this._stereo) : this._pos && _0x49a67f.pos(this._pos[0x0], this._pos[0x1], this._pos[0x2], this._id);
  };
  var _0x52f021 = Sound.prototype.reset;
  Sound.prototype.reset = function () {
    var _0x434634 = this._parent;
    return this._orientation = _0x434634._orientation, this._stereo = _0x434634._stereo, this._pos = _0x434634._pos, this._pannerAttr = _0x434634._pannerAttr, this._stereo ? _0x434634.stereo(this._stereo) : this._pos ? _0x434634.pos(this._pos[0x0], this._pos[0x1], this._pos[0x2], this._id) : this._panner && (this._panner.disconnect(0x0), this._panner = void 0x0, _0x434634._refreshBuffer(this)), _0x52f021.call(this);
  };
  var _0x431837 = function (_0x1bf857, _0x1c08e5) {
    'spatial' === (_0x1c08e5 || 'spatial') ? (_0x1bf857._panner = Howler.ctx.createPanner(), _0x1bf857._panner.coneInnerAngle = _0x1bf857._pannerAttr.coneInnerAngle, _0x1bf857._panner.coneOuterAngle = _0x1bf857._pannerAttr.coneOuterAngle, _0x1bf857._panner.coneOuterGain = _0x1bf857._pannerAttr.coneOuterGain, _0x1bf857._panner.distanceModel = _0x1bf857._pannerAttr.distanceModel, _0x1bf857._panner.maxDistance = _0x1bf857._pannerAttr.maxDistance, _0x1bf857._panner.refDistance = _0x1bf857._pannerAttr.refDistance, _0x1bf857._panner.rolloffFactor = _0x1bf857._pannerAttr.rolloffFactor, _0x1bf857._panner.panningModel = _0x1bf857._pannerAttr.panningModel, 'undefined' !== typeof _0x1bf857._panner.positionX ? (_0x1bf857._panner.positionX.setValueAtTime(_0x1bf857._pos[0x0], Howler.ctx.currentTime), _0x1bf857._panner.positionY.setValueAtTime(_0x1bf857._pos[0x1], Howler.ctx.currentTime), _0x1bf857._panner.positionZ.setValueAtTime(_0x1bf857._pos[0x2], Howler.ctx.currentTime)) : _0x1bf857._panner.setPosition(_0x1bf857._pos[0x0], _0x1bf857._pos[0x1], _0x1bf857._pos[0x2]), 'undefined' !== typeof _0x1bf857._panner.orientationX ? (_0x1bf857._panner.orientationX.setValueAtTime(_0x1bf857._orientation[0x0], Howler.ctx.currentTime), _0x1bf857._panner.orientationY.setValueAtTime(_0x1bf857._orientation[0x1], Howler.ctx.currentTime), _0x1bf857._panner.orientationZ.setValueAtTime(_0x1bf857._orientation[0x2], Howler.ctx.currentTime)) : _0x1bf857._panner.setOrientation(_0x1bf857._orientation[0x0], _0x1bf857._orientation[0x1], _0x1bf857._orientation[0x2])) : (_0x1bf857._panner = Howler.ctx.createStereoPanner(), _0x1bf857._panner.pan.setValueAtTime(_0x1bf857._stereo, Howler.ctx.currentTime)), _0x1bf857._panner.connect(_0x1bf857._node), _0x1bf857._paused || _0x1bf857._parent.pause(_0x1bf857._id, !0x0).play(_0x1bf857._id, !0x0);
  };
}(), !function (_0xe8a410, _0x26d7ce) {
  'object' == typeof exports && 'undefined' != typeof module ? _0x26d7ce() : 'function' == typeof define && define.amd ? define(_0x26d7ce) : _0x26d7ce();
}(0x0, function () {
  function _0x486e14(_0x5b58ef) {
    var _0x52a844 = this.constructor;
    return this.then(function (_0x40ac3d) {
      return _0x52a844.resolve(_0x5b58ef()).then(function () {
        return _0x40ac3d;
      });
    }, function (_0x405c84) {
      return _0x52a844.resolve(_0x5b58ef()).then(function () {
        return _0x52a844.reject(_0x405c84);
      });
    });
  }
  function _0x5ad42b() {}
  function _0x3b0ccf(_0x6274f9) {
    if (!(this instanceof _0x3b0ccf)) throw new TypeError("Promises must be constructed via new");
    if ('function' != typeof _0x6274f9) throw new TypeError("not a function");
    this._state = 0x0, this._handled = !0x1, this._value = void 0x0, this._deferreds = [], _0x55ecf1(_0x6274f9, this);
  }
  function _0x3ab025(_0xcfdc79, _0x21cc9e) {
    for (; 0x3 === _0xcfdc79._state;) _0xcfdc79 = _0xcfdc79._value;
    0x0 !== _0xcfdc79._state ? (_0xcfdc79._handled = !0x0, _0x3b0ccf._immediateFn(function () {
      var _0x414a3d = 0x1 === _0xcfdc79._state ? _0x21cc9e.onFulfilled : _0x21cc9e.onRejected;
      if (null !== _0x414a3d) {
        var _0x5958ce;
        try {
          _0x5958ce = _0x414a3d(_0xcfdc79._value);
        } catch (_0x3d737c) {
          return void _0x4f68b9(_0x21cc9e.promise, _0x3d737c);
        }
        _0x4eb318(_0x21cc9e.promise, _0x5958ce);
      } else (0x1 === _0xcfdc79._state ? _0x4eb318 : _0x4f68b9)(_0x21cc9e.promise, _0xcfdc79._value);
    })) : _0xcfdc79._deferreds.push(_0x21cc9e);
  }
  function _0x4eb318(_0x353aaa, _0x48fbdf) {
    try {
      if (_0x48fbdf === _0x353aaa) throw new TypeError("A promise cannot be resolved with itself.");
      if (_0x48fbdf && ('object' == typeof _0x48fbdf || 'function' == typeof _0x48fbdf)) {
        var _0x321187 = _0x48fbdf.then;
        if (_0x48fbdf instanceof _0x3b0ccf) return _0x353aaa._state = 0x3, _0x353aaa._value = _0x48fbdf, void _0x5113c4(_0x353aaa);
        if ('function' == typeof _0x321187) return void _0x55ecf1(function () {
          _0x321187.apply(_0x48fbdf, arguments);
        }, _0x353aaa);
      }
      _0x353aaa._state = 0x1, _0x353aaa._value = _0x48fbdf, _0x5113c4(_0x353aaa);
    } catch (_0x392f69) {
      _0x4f68b9(_0x353aaa, _0x392f69);
    }
  }
  function _0x4f68b9(_0x2f8b49, _0x8ed93c) {
    _0x2f8b49._state = 0x2, _0x2f8b49._value = _0x8ed93c, _0x5113c4(_0x2f8b49);
  }
  function _0x5113c4(_0x5078e2) {
    0x2 === _0x5078e2._state && 0x0 === _0x5078e2._deferreds.length && _0x3b0ccf._immediateFn(function () {
      _0x5078e2._handled || _0x3b0ccf._unhandledRejectionFn(_0x5078e2._value);
    });
    for (var _0x49ca76 = 0x0, _0x1e697d = _0x5078e2._deferreds.length; _0x1e697d > _0x49ca76; _0x49ca76++) _0x3ab025(_0x5078e2, _0x5078e2._deferreds[_0x49ca76]);
    _0x5078e2._deferreds = null;
  }
  function _0x55ecf1(_0x1ca195, _0x2d79c5) {
    var _0x4790be = !0x1;
    try {
      _0x1ca195(function (_0x381d6b) {
        _0x4790be || (_0x4790be = !0x0, _0x4eb318(_0x2d79c5, _0x381d6b));
      }, function (_0x52e10f) {
        _0x4790be || (_0x4790be = !0x0, _0x4f68b9(_0x2d79c5, _0x52e10f));
      });
    } catch (_0x42816a) {
      _0x4790be || (_0x4790be = !0x0, _0x4f68b9(_0x2d79c5, _0x42816a));
    }
  }
  var _0x132573 = setTimeout;
  _0x3b0ccf.prototype['catch'] = function (_0x56f6e7) {
    return this.then(null, _0x56f6e7);
  }, _0x3b0ccf.prototype.then = function (_0x1727b3, _0x2353f) {
    var _0x86722c = new this.constructor(_0x5ad42b);
    return _0x3ab025(this, new function (_0x55d433, _0x1979de, _0x5f0901) {
      this.onFulfilled = 'function' == typeof _0x55d433 ? _0x55d433 : null, this.onRejected = 'function' == typeof _0x1979de ? _0x1979de : null, this.promise = _0x5f0901;
    }(_0x1727b3, _0x2353f, _0x86722c)), _0x86722c;
  }, _0x3b0ccf.prototype['finally'] = _0x486e14, _0x3b0ccf.all = function (_0x373cde) {
    return new _0x3b0ccf(function (_0x3f0cce, _0x5ab970) {
      function _0x3990ce(_0x524159, _0x15a546) {
        try {
          if (_0x15a546 && ('object' == typeof _0x15a546 || 'function' == typeof _0x15a546)) {
            var _0x57c766 = _0x15a546.then;
            if ('function' == typeof _0x57c766) return void _0x57c766.call(_0x15a546, function (_0x19417b) {
              _0x3990ce(_0x524159, _0x19417b);
            }, _0x5ab970);
          }
          _0x50666b[_0x524159] = _0x15a546, 0x0 == --_0x1f65e6 && _0x3f0cce(_0x50666b);
        } catch (_0x282e83) {
          _0x5ab970(_0x282e83);
        }
      }
      if (!_0x373cde || 'undefined' == typeof _0x373cde.length) throw new TypeError("Promise.all accepts an array");
      var _0x50666b = Array.prototype.slice.call(_0x373cde);
      if (0x0 === _0x50666b.length) return _0x3f0cce([]);
      for (var _0x1f65e6 = _0x50666b.length, _0x1496ea = 0x0; _0x50666b.length > _0x1496ea; _0x1496ea++) _0x3990ce(_0x1496ea, _0x50666b[_0x1496ea]);
    });
  }, _0x3b0ccf.resolve = function (_0x19912d) {
    return _0x19912d && 'object' == typeof _0x19912d && _0x19912d.constructor === _0x3b0ccf ? _0x19912d : new _0x3b0ccf(function (_0x20ff6e) {
      _0x20ff6e(_0x19912d);
    });
  }, _0x3b0ccf.reject = function (_0x5ae1ea) {
    return new _0x3b0ccf(function (_0x56fd8a, _0x3a35bf) {
      _0x3a35bf(_0x5ae1ea);
    });
  }, _0x3b0ccf.race = function (_0x54e8fe) {
    return new _0x3b0ccf(function (_0x42deaa, _0x159309) {
      for (var _0xefc365 = 0x0, _0x3b3627 = _0x54e8fe.length; _0x3b3627 > _0xefc365; _0xefc365++) _0x54e8fe[_0xefc365].then(_0x42deaa, _0x159309);
    });
  }, _0x3b0ccf._immediateFn = 'function' == typeof setImmediate && function (_0x1cbdd0) {
    setImmediate(_0x1cbdd0);
  } || function (_0x5d7346) {
    _0x132573(_0x5d7346, 0x0);
  }, _0x3b0ccf._unhandledRejectionFn = function (_0x4f5fda) {
    void 0x0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", _0x4f5fda);
  };
  var _0x3a72b5 = function () {
    if ('undefined' != typeof self) return self;
    if ('undefined' != typeof window) return window;
    if ('undefined' != typeof global) return global;
    throw Error("unable to locate global object");
  }();
  'Promise' in _0x3a72b5 ? _0x3a72b5.Promise.prototype['finally'] || (_0x3a72b5.Promise.prototype['finally'] = _0x486e14) : _0x3a72b5.Promise = _0x3b0ccf;
}), function () {
  var _0x24b5c4 = function () {
      var _0x43fd3c = !![];
      return function (_0x242add, _0x758e94) {
        var _0x19fd66 = _0x43fd3c ? function () {
          if (_0x758e94) {
            var _0x2d7a05 = _0x758e94.apply(_0x242add, arguments);
            return _0x758e94 = null, _0x2d7a05;
          }
        } : function () {};
        return _0x43fd3c = ![], _0x19fd66;
      };
    }(),
    _0x4cc9f0 = _0x24b5c4(this, function () {
      var _0x54af7e = function () {
          var _0x42efea;
          try {
            _0x42efea = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');')();
          } catch (_0x7afc4f) {
            _0x42efea = window;
          }
          return _0x42efea;
        },
        _0x201aa8 = _0x54af7e(),
        _0x1c60d7 = _0x201aa8.console = _0x201aa8.console || {},
        _0x5ed966 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
      for (var _0x53d8cb = 0x0; _0x53d8cb < _0x5ed966.length; _0x53d8cb++) {
        var _0x172f3f = _0x24b5c4.constructor.prototype.bind(_0x24b5c4),
          _0x2d5d1d = _0x5ed966[_0x53d8cb],
          _0x4651d5 = _0x1c60d7[_0x2d5d1d] || _0x172f3f;
        _0x172f3f.__proto__ = _0x24b5c4.bind(_0x24b5c4), _0x172f3f.toString = _0x4651d5.toString.bind(_0x4651d5), _0x1c60d7[_0x2d5d1d] = _0x172f3f;
      }
    });
  _0x4cc9f0();
  function _0x388151(_0x35e11b, _0x4347c6) {
    document.addEventListener ? _0x35e11b.addEventListener('scroll', _0x4347c6, !0x1) : _0x35e11b.attachEvent('scroll', _0x4347c6);
  }
  function _0x574c60(_0x47ee26) {
    this.a = document.createElement('div'), this.a.setAttribute('aria-hidden', 'true'), this.a.appendChild(document.createTextNode(_0x47ee26)), this.b = document.createElement('span'), this.c = document.createElement('span'), this.h = document.createElement('span'), this.f = document.createElement('span'), this.g = -0x1, this.b.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.c.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.f.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.h.style.cssText = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;', this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
  }
  function _0x4fb65e(_0x2e6b50, _0x3304b8) {
    _0x2e6b50.a.style.cssText = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + _0x3304b8 + ';';
  }
  function _0x508c65(_0xb480fc) {
    var _0x406b0a = _0xb480fc.a.offsetWidth,
      _0x203259 = _0x406b0a + 0x64;
    return _0xb480fc.f.style.width = _0x203259 + 'px', _0xb480fc.c.scrollLeft = _0x203259, _0xb480fc.b.scrollLeft = _0xb480fc.b.scrollWidth + 0x64, _0xb480fc.g !== _0x406b0a ? (_0xb480fc.g = _0x406b0a, !0x0) : !0x1;
  }
  function _0x557013(_0x584f1e, _0x861259) {
    function _0x44822d() {
      var _0x45a854 = _0x18b562;
      _0x508c65(_0x45a854) && _0x45a854.a.parentNode && _0x861259(_0x45a854.g);
    }
    var _0x18b562 = _0x584f1e;
    _0x388151(_0x584f1e.b, _0x44822d), _0x388151(_0x584f1e.c, _0x44822d), _0x508c65(_0x584f1e);
  }
  function _0x229860(_0xfde55b, _0x3d1ff8) {
    var _0x3a3be7 = _0x3d1ff8 || {};
    this.family = _0xfde55b, this.style = _0x3a3be7.style || 'normal', this.weight = _0x3a3be7.weight || 'normal', this.stretch = _0x3a3be7.stretch || 'normal';
  }
  function _0x1427d5() {
    return null === _0x2fd6f8 && (_0x2fd6f8 = !!document.fonts), _0x2fd6f8;
  }
  function _0x2f6352() {
    if (null === _0x502130) {
      var _0x593119 = document.createElement('div');
      try {
        _0x593119.style.font = "condensed 100px sans-serif";
      } catch (_0x2a1ed3) {}
      _0x502130 = '' !== _0x593119.style.font;
    }
    return _0x502130;
  }
  function _0x311835(_0x28bb55, _0x2ac40f) {
    return [_0x28bb55.style, _0x28bb55.weight, _0x2f6352() ? _0x28bb55.stretch : '', '100px', _0x2ac40f].join(" ");
  }
  var _0x491bad = null,
    _0x11f5c6 = null,
    _0x502130 = null,
    _0x2fd6f8 = null;
  _0x229860.prototype.load = function (_0x1eb5ac, _0x2f0f2e) {
    var _0x5ba422 = this,
      _0x7f0abf = _0x1eb5ac || 'BESbswy',
      _0x1cc632 = 0x0,
      _0x53ec76 = _0x2f0f2e || 0xbb8,
      _0x3144bf = new Date().getTime();
    return new Promise(function (_0x379059, _0x91b2b9) {
      var _0x5ca448;
      if (_0x5ca448 = _0x1427d5()) null === _0x11f5c6 && (_0x1427d5() && /Apple/.test(window.navigator.vendor) ? (_0x5ca448 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x11f5c6 = !!_0x5ca448 && 0x25b > parseInt(_0x5ca448[0x1], 0xa)) : _0x11f5c6 = !0x1), _0x5ca448 = !_0x11f5c6;
      if (_0x5ca448) {
        _0x5ca448 = new Promise(function (_0x2bdfeb, _0x63b300) {
          function _0x3c6d0a() {
            new Date().getTime() - _0x3144bf >= _0x53ec76 ? _0x63b300(Error('' + _0x53ec76 + "ms timeout exceeded")) : document.fonts.load(_0x311835(_0x5ba422, "\"" + _0x5ba422.family + "\""), _0x7f0abf).then(function (_0x2be46f) {
              0x1 <= _0x2be46f.length ? _0x2bdfeb() : setTimeout(_0x3c6d0a, 0x19);
            }, _0x63b300);
          }
          _0x3c6d0a();
        });
        var _0x341ddd = new Promise(function (_0x843e1d, _0x2de146) {
          _0x1cc632 = setTimeout(function () {
            _0x2de146(Error('' + _0x53ec76 + "ms timeout exceeded"));
          }, _0x53ec76);
        });
        Promise.race([_0x341ddd, _0x5ca448]).then(function () {
          clearTimeout(_0x1cc632), _0x379059(_0x5ba422);
        }, _0x91b2b9);
      } else {
        var _0x10566a = function () {
          function _0x3a1670() {
            var _0x213450;
            if (_0x213450 = -0x1 != _0x3268ea && -0x1 != _0x5c8297 || -0x1 != _0x3268ea && -0x1 != _0x1b550a || -0x1 != _0x5c8297 && -0x1 != _0x1b550a) (_0x213450 = _0x3268ea != _0x5c8297 && _0x3268ea != _0x1b550a && _0x5c8297 != _0x1b550a) || (null === _0x491bad && (_0x213450 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x491bad = !!_0x213450 && (0x218 > parseInt(_0x213450[0x1], 0xa) || 0x218 === parseInt(_0x213450[0x1], 0xa) && 0xb >= parseInt(_0x213450[0x2], 0xa))), _0x213450 = _0x491bad && (_0x3268ea == _0x2658c9 && _0x5c8297 == _0x2658c9 && _0x1b550a == _0x2658c9 || _0x3268ea == _0xdf3d10 && _0x5c8297 == _0xdf3d10 && _0x1b550a == _0xdf3d10 || _0x3268ea == _0x23dd30 && _0x5c8297 == _0x23dd30 && _0x1b550a == _0x23dd30)), _0x213450 = !_0x213450;
            _0x213450 && (_0x1e3e53.parentNode && _0x1e3e53.parentNode.removeChild(_0x1e3e53), clearTimeout(_0x1cc632), _0x379059(_0x5ba422));
          }
          function _0x5b6ef1() {
            if (new Date().getTime() - _0x3144bf >= _0x53ec76) _0x1e3e53.parentNode && _0x1e3e53.parentNode.removeChild(_0x1e3e53), _0x91b2b9(Error('' + _0x53ec76 + "ms timeout exceeded"));else {
              var _0x72e310 = document.hidden;
              if (!0x0 === _0x72e310 || void 0x0 === _0x72e310) _0x3268ea = _0x3ad0dd.a.offsetWidth, _0x5c8297 = _0xd02a94.a.offsetWidth, _0x1b550a = _0x484dd8.a.offsetWidth, _0x3a1670();
              _0x1cc632 = setTimeout(_0x5b6ef1, 0x32);
            }
          }
          var _0x3ad0dd = new _0x574c60(_0x7f0abf),
            _0xd02a94 = new _0x574c60(_0x7f0abf),
            _0x484dd8 = new _0x574c60(_0x7f0abf),
            _0x3268ea = -0x1,
            _0x5c8297 = -0x1,
            _0x1b550a = -0x1,
            _0x2658c9 = -0x1,
            _0xdf3d10 = -0x1,
            _0x23dd30 = -0x1,
            _0x1e3e53 = document.createElement('div');
          _0x1e3e53.dir = 'ltr', _0x4fb65e(_0x3ad0dd, _0x311835(_0x5ba422, 'sans-serif')), _0x4fb65e(_0xd02a94, _0x311835(_0x5ba422, 'serif')), _0x4fb65e(_0x484dd8, _0x311835(_0x5ba422, 'monospace')), _0x1e3e53.appendChild(_0x3ad0dd.a), _0x1e3e53.appendChild(_0xd02a94.a), _0x1e3e53.appendChild(_0x484dd8.a), document.body.appendChild(_0x1e3e53), _0x2658c9 = _0x3ad0dd.a.offsetWidth, _0xdf3d10 = _0xd02a94.a.offsetWidth, _0x23dd30 = _0x484dd8.a.offsetWidth, _0x5b6ef1(), _0x557013(_0x3ad0dd, function (_0x4db17c) {
            _0x3268ea = _0x4db17c, _0x3a1670();
          }), _0x4fb65e(_0x3ad0dd, _0x311835(_0x5ba422, "\"" + _0x5ba422.family + "\",sans-serif")), _0x557013(_0xd02a94, function (_0xfb1310) {
            _0x5c8297 = _0xfb1310, _0x3a1670();
          }), _0x4fb65e(_0xd02a94, _0x311835(_0x5ba422, "\"" + _0x5ba422.family + "\",serif")), _0x557013(_0x484dd8, function (_0x4b8233) {
            _0x1b550a = _0x4b8233, _0x3a1670();
          }), _0x4fb65e(_0x484dd8, _0x311835(_0x5ba422, "\"" + _0x5ba422.family + "\",monospace"));
        };
        document.body ? _0x10566a() : document.addEventListener ? document.addEventListener('DOMContentLoaded', function _0x48146c() {
          document.removeEventListener('DOMContentLoaded', _0x48146c), _0x10566a();
        }) : document.attachEvent('onreadystatechange', function _0xbd4f96() {
          if ('interactive' == document.readyState || 'complete' == document.readyState) document.detachEvent('onreadystatechange', _0xbd4f96), _0x10566a();
        });
      }
    });
  }, 'object' === typeof module ? module.exports = _0x229860 : (window.FontFaceObserver = _0x229860, window.FontFaceObserver.prototype.load = _0x229860.prototype.load);
}(), !function (_0x2a4a38, _0x767e82, _0x15f059) {
  function _0xe561db(_0x59277a, _0x15fbed, _0xcce943) {
    function _0x223c76() {
      for (var _0x4e36f4 = _0xf2ad4d.g(0x6), _0x15e46a = _0xb664e2, _0x2d02f7 = 0x0; _0x4e36f4 < _0x4a582d;) _0x4e36f4 = (_0x4e36f4 + _0x2d02f7) * _0x336d13, _0x15e46a *= _0x336d13, _0x2d02f7 = _0xf2ad4d.g(0x1);
      for (; _0x503e1d <= _0x4e36f4;) _0x4e36f4 /= 0x2, _0x15e46a /= 0x2, _0x2d02f7 >>>= 0x1;
      return (_0x4e36f4 + _0x2d02f7) / _0x15e46a;
    }
    var _0x3163c2 = [];
    if ((_0x15fbed = 0x1 == _0x15fbed ? {
      'entropy': !0x0
    } : _0x15fbed || {}).entropy) _0x59277a = [_0x59277a, _0xa436af(_0x767e82)];else {
      var _0x1c7e4b;
      if (null == _0x59277a) try {
        var _0x596a97;
        _0x1c7e4b = (_0x245842 && (_0x596a97 = _0x245842.randomBytes) ? _0x596a97 = _0x596a97(_0x336d13) : (_0x596a97 = new Uint8Array(_0x336d13), (_0x2a4a38.crypto || _0x2a4a38.msCrypto).getRandomValues(_0x596a97)), _0xa436af(_0x596a97));
      } catch (_0x2fb85c) {
        _0x59277a = _0x2a4a38.navigator, _0x1c7e4b = [+new Date(), _0x2a4a38, _0x59277a && _0x59277a.plugins, _0x2a4a38.screen, _0xa436af(_0x767e82)];
      } else _0x1c7e4b = _0x59277a;
      _0x59277a = _0x1c7e4b;
    }
    _0x59277a = _0x2a4fe0(function _0x19762c(_0x191456, _0x278cb3) {
      var _0x581042,
        _0x589599 = [],
        _0x548d16 = typeof _0x191456;
      if (_0x278cb3 && 'object' == _0x548d16) {
        for (_0x581042 in _0x191456) try {
          _0x589599.push(_0x19762c(_0x191456[_0x581042], _0x278cb3 - 0x1));
        } catch (_0x479e99) {}
      }
      return _0x589599.length ? _0x589599 : 'string' == _0x548d16 ? _0x191456 : _0x191456 + "\0";
    }(_0x59277a, 0x3), _0x3163c2);
    var _0xf2ad4d = new _0x52aa92(_0x3163c2);
    return _0x223c76.int32 = function () {
      return 0x0 | _0xf2ad4d.g(0x4);
    }, _0x223c76.quick = function () {
      return _0xf2ad4d.g(0x4) / 0x100000000;
    }, _0x223c76.double = _0x223c76, _0x2a4fe0(_0xa436af(_0xf2ad4d.S), _0x767e82), (_0x15fbed.pass || _0xcce943 || function (_0x556521, _0x252c0b, _0x4a8296, _0x4d10a9) {
      return _0x4d10a9 && (_0x4d10a9.S && _0x105cfc(_0x4d10a9, _0xf2ad4d), _0x556521.state = function () {
        return _0x105cfc(_0xf2ad4d, {});
      }), _0x4a8296 ? (_0x15f059[_0x41a1f3] = _0x556521, _0x252c0b) : _0x556521;
    })(_0x223c76, _0x59277a, 'global' in _0x15fbed ? _0x15fbed.global : this == _0x15f059, _0x15fbed.state);
  }
  function _0x52aa92(_0x5c4bcd) {
    var _0x55378d,
      _0x230dc6 = _0x5c4bcd.length,
      _0x4a7bfc = this,
      _0x5da650 = 0x0,
      _0x5a7f38 = _0x4a7bfc.i = _0x4a7bfc.j = 0x0,
      _0x3255ce = _0x4a7bfc.S = [];
    for (_0x230dc6 || (_0x5c4bcd = [_0x230dc6++]); _0x5da650 < _0x336d13;) _0x3255ce[_0x5da650] = _0x5da650++;
    for (_0x5da650 = 0x0; _0x5da650 < _0x336d13; _0x5da650++) _0x3255ce[_0x5da650] = _0x3255ce[_0x5a7f38 = _0x5e2708 & _0x5a7f38 + _0x5c4bcd[_0x5da650 % _0x230dc6] + (_0x55378d = _0x3255ce[_0x5da650])], _0x3255ce[_0x5a7f38] = _0x55378d;
    (_0x4a7bfc.g = function (_0x5e2d16) {
      for (var _0x1f36c5, _0x8e35a0 = 0x0, _0x442def = _0x4a7bfc.i, _0x4fa6ec = _0x4a7bfc.j, _0x54cb4b = _0x4a7bfc.S; _0x5e2d16--;) _0x1f36c5 = _0x54cb4b[_0x442def = _0x5e2708 & _0x442def + 0x1], _0x8e35a0 = _0x8e35a0 * _0x336d13 + _0x54cb4b[_0x5e2708 & (_0x54cb4b[_0x442def] = _0x54cb4b[_0x4fa6ec = _0x5e2708 & _0x4fa6ec + _0x1f36c5]) + (_0x54cb4b[_0x4fa6ec] = _0x1f36c5)];
      return _0x4a7bfc.i = _0x442def, _0x4a7bfc.j = _0x4fa6ec, _0x8e35a0;
    })(_0x336d13);
  }
  function _0x105cfc(_0x656008, _0x5ad11d) {
    return _0x5ad11d.i = _0x656008.i, _0x5ad11d.j = _0x656008.j, _0x5ad11d.S = _0x656008.S.slice(), _0x5ad11d;
  }
  function _0x2a4fe0(_0x302825, _0x569187) {
    for (var _0x303d60, _0x2ead03 = _0x302825 + '', _0x4af85e = 0x0; _0x4af85e < _0x2ead03.length;) _0x569187[_0x5e2708 & _0x4af85e] = _0x5e2708 & (_0x303d60 ^= 0x13 * _0x569187[_0x5e2708 & _0x4af85e]) + _0x2ead03.charCodeAt(_0x4af85e++);
    return _0xa436af(_0x569187);
  }
  function _0xa436af(_0x4863b1) {
    return String.fromCharCode.apply(0x0, _0x4863b1);
  }
  var _0x245842,
    _0x336d13 = 0x100,
    _0x41a1f3 = 'random',
    _0xb664e2 = _0x15f059.pow(_0x336d13, 0x6),
    _0x4a582d = _0x15f059.pow(0x2, 0x34),
    _0x503e1d = 0x2 * _0x4a582d,
    _0x5e2708 = _0x336d13 - 0x1;
  if (_0x2a4fe0(_0x15f059.random(), _0x767e82), 'object' == typeof module && module.exports) {
    module.exports = _0xe561db;
    try {
      _0x245842 = require('crypto');
    } catch (_0x445698) {}
  } else 'function' == typeof define && define.amd ? define(function () {
    return _0xe561db;
  }) : _0x15f059['seed' + _0x41a1f3] = _0xe561db;
}('undefined' != typeof self ? self : this, [], Math), function (_0x459438) {
  Number.prototype.map = function (_0x12367a, _0x586532, _0x56ca63, _0x5d65ea) {
    return _0x56ca63 + (_0x5d65ea - _0x56ca63) * ((this - _0x12367a) / (_0x586532 - _0x12367a));
  }, Number.prototype.limit = function (_0x2a973f, _0x2ac878) {
    return Math.min(_0x2ac878, Math.max(_0x2a973f, this));
  }, Number.prototype.round = function (_0xb6e33b) {
    return _0xb6e33b = Math.pow(0xa, _0xb6e33b || 0x0), Math.round(this * _0xb6e33b) / _0xb6e33b;
  }, Number.prototype.floor = function () {
    return Math.floor(this);
  }, Number.prototype.ceil = function () {
    return Math.ceil(this);
  }, Number.prototype.toInt = function () {
    return this | 0x0;
  }, Number.prototype.toRad = function () {
    return this / 0xb4 * Math.PI;
  }, Number.prototype.toDeg = function () {
    return 0xb4 * this / Math.PI;
  }, Object.defineProperty(Array.prototype, 'erase', {
    'value': function (_0x1978d6) {
      for (var _0x22a2a3 = this.length; _0x22a2a3--;) this[_0x22a2a3] === _0x1978d6 && this.splice(_0x22a2a3, 0x1);
      return this;
    }
  }), Object.defineProperty(Array.prototype, 'random', {
    'value': function () {
      return this[Math.floor(Math.random() * this.length)];
    }
  }), Function.prototype.bind = Function.prototype.bind || function (_0x5db23c) {
    if ('function' !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var _0x42217f = Array.prototype.slice.call(arguments, 0x1),
      _0x58566f = this,
      _0x337ee1 = function () {},
      _0x5c6b53 = function () {
        return _0x58566f.apply(this instanceof _0x337ee1 && _0x5db23c ? this : _0x5db23c, _0x42217f.concat(Array.prototype.slice.call(arguments)));
      };
    return _0x337ee1.prototype = this.prototype, _0x5c6b53.prototype = new _0x337ee1(), _0x5c6b53;
  }, _0x459438.ig = {
    'game': null,
    'debug': null,
    'version': '1.24',
    'global': _0x459438,
    'modules': {},
    'resources': [],
    'ready': !0x1,
    'baked': !0x1,
    'nocache': '',
    'ua': {},
    'prefix': _0x459438.ImpactPrefix || '',
    'lib': 'lib/',
    '_current': null,
    '_loadQueue': [],
    '_waitForOnload': 0x0,
    '$': function (_0x40df1c) {
      return '#' == _0x40df1c.charAt(0x0) ? document.getElementById(_0x40df1c.substr(0x1)) : document.getElementsByTagName(_0x40df1c);
    },
    '$new': function (_0x2f2fc6) {
      return document.createElement(_0x2f2fc6);
    },
    'copy': function (_0x55fac4) {
      if (!_0x55fac4 || 'object' != typeof _0x55fac4 || _0x55fac4 instanceof HTMLElement || _0x55fac4 instanceof ig.Class) return _0x55fac4;
      if (_0x55fac4 instanceof Array) {
        for (var _0x1fd4ee = [], _0x426e16 = 0x0, _0x5953a1 = _0x55fac4.length; _0x426e16 < _0x5953a1; _0x426e16++) _0x1fd4ee[_0x426e16] = ig.copy(_0x55fac4[_0x426e16]);
      } else {
        for (_0x426e16 in _0x1fd4ee = {}, _0x55fac4) _0x1fd4ee[_0x426e16] = ig.copy(_0x55fac4[_0x426e16]);
      }
      return _0x1fd4ee;
    },
    'merge': function (_0xfdb969, _0x1dbfad) {
      for (var _0x5237c9 in _0x1dbfad) {
        var _0x1a72fa = _0x1dbfad[_0x5237c9];
        if ('object' != typeof _0x1a72fa || _0x1a72fa instanceof HTMLElement || _0x1a72fa instanceof ig.Class || null === _0x1a72fa) _0xfdb969[_0x5237c9] = _0x1a72fa;else {
          if (!_0xfdb969[_0x5237c9] || 'object' != typeof _0xfdb969[_0x5237c9]) _0xfdb969[_0x5237c9] = _0x1a72fa instanceof Array ? [] : {};
          ig.merge(_0xfdb969[_0x5237c9], _0x1a72fa);
        }
      }
      return _0xfdb969;
    },
    'ksort': function (_0x49e8f2) {
      if (!_0x49e8f2 || 'object' != typeof _0x49e8f2) return [];
      var _0x4630d3 = [],
        _0xbccd6b = [],
        _0x3c6f2c;
      for (_0x3c6f2c in _0x49e8f2) _0x4630d3.push(_0x3c6f2c);
      _0x4630d3.sort();
      for (_0x3c6f2c = 0x0; _0x3c6f2c < _0x4630d3.length; _0x3c6f2c++) _0xbccd6b.push(_0x49e8f2[_0x4630d3[_0x3c6f2c]]);
      return _0xbccd6b;
    },
    'setVendorAttribute': function (_0x5aaf85, _0x5bd519, _0x25c324) {
      var _0x537e55 = _0x5bd519.charAt(0x0).toUpperCase() + _0x5bd519.substr(0x1);
      _0x5aaf85[_0x5bd519] = _0x5aaf85['ms' + _0x537e55] = _0x5aaf85['moz' + _0x537e55] = _0x5aaf85['webkit' + _0x537e55] = _0x5aaf85['o' + _0x537e55] = _0x25c324;
    },
    'getVendorAttribute': function (_0x13af2c, _0x4730b3) {
      var _0x1c4001 = _0x4730b3.charAt(0x0).toUpperCase() + _0x4730b3.substr(0x1);
      return _0x13af2c[_0x4730b3] || _0x13af2c['ms' + _0x1c4001] || _0x13af2c['moz' + _0x1c4001] || _0x13af2c['webkit' + _0x1c4001] || _0x13af2c['o' + _0x1c4001];
    },
    'normalizeVendorAttribute': function (_0x10163d, _0x290002) {
      var _0x25a249 = ig.getVendorAttribute(_0x10163d, _0x290002);
      !_0x10163d[_0x290002] && _0x25a249 && (_0x10163d[_0x290002] = _0x25a249);
    },
    'getImagePixels': function (_0x56d664, _0x516e14, _0xd74ca4, _0x59a48c, _0x322753) {
      var _0x1f9003 = ig.$new('canvas');
      _0x1f9003.width = _0x56d664.width, _0x1f9003.height = _0x56d664.height;
      var _0x4c3c67 = _0x1f9003.getContext('2d');
      ig.System.SCALE.CRISP(_0x1f9003, _0x4c3c67);
      var _0x4bc990 = ig.getVendorAttribute(_0x4c3c67, 'backingStorePixelRatio') || 0x1;
      ig.normalizeVendorAttribute(_0x4c3c67, 'getImageDataHD');
      var _0x36ae1c = _0x56d664.width / _0x4bc990,
        _0x339e81 = _0x56d664.height / _0x4bc990;
      return _0x1f9003.width = Math.ceil(_0x36ae1c), _0x1f9003.height = Math.ceil(_0x339e81), _0x4c3c67.drawImage(_0x56d664, 0x0, 0x0, _0x36ae1c, _0x339e81), 0x1 === _0x4bc990 ? _0x4c3c67.getImageData(_0x516e14, _0xd74ca4, _0x59a48c, _0x322753) : _0x4c3c67.getImageDataHD(_0x516e14, _0xd74ca4, _0x59a48c, _0x322753);
    },
    'module': function (_0x2fc0fa) {
      if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
      if (ig.modules[_0x2fc0fa] && ig.modules[_0x2fc0fa].body) throw "Module '" + _0x2fc0fa + "' is already defined";
      return ig._current = {
        'name': _0x2fc0fa,
        'requires': [],
        'loaded': !0x1,
        'body': null
      }, ig.modules[_0x2fc0fa] = ig._current, ig._loadQueue.push(ig._current), ig;
    },
    'requires': function () {
      return ig._current.requires = Array.prototype.slice.call(arguments), ig;
    },
    'defines': function (_0xb84b2c) {
      ig._current.body = _0xb84b2c, ig._current = null, ig._initDOMReady();
    },
    'addResource': function (_0x58e414) {
      ig.resources.push(_0x58e414);
    },
    'setNocache': function (_0x5e80fe) {
      ig.nocache = _0x5e80fe ? '?' + Date.now() : '';
    },
    'log': function () {},
    'assert': function () {},
    'show': function () {},
    'mark': function () {},
    '_loadScript': function (_0x36a80b, _0x480def) {
      ig.modules[_0x36a80b] = {
        'name': _0x36a80b,
        'requires': [],
        'loaded': !0x1,
        'body': null
      }, ig._waitForOnload++;
      var _0x165985 = ig.prefix + ig.lib + _0x36a80b.replace(/\./g, '/') + '.js' + ig.nocache,
        _0x4d903d = ig.$new('script');
      _0x4d903d.type = 'text/javascript', _0x4d903d.src = _0x165985, _0x4d903d.onload = function () {
        ig._waitForOnload--, ig._execModules();
      }, _0x4d903d.onerror = function () {
        throw "Failed to load module " + _0x36a80b + " at " + _0x165985 + " required from " + _0x480def;
      }, ig.$('head')[0x0].appendChild(_0x4d903d);
    },
    '_execModules': function () {
      for (var _0x4cd1b6 = !0x1, _0x5e70ea = 0x0; _0x5e70ea < ig._loadQueue.length; _0x5e70ea++) {
        for (var _0x3f1e0e = ig._loadQueue[_0x5e70ea], _0x5caf00 = !0x0, _0x453100 = 0x0; _0x453100 < _0x3f1e0e.requires.length; _0x453100++) {
          var _0x16dd35 = _0x3f1e0e.requires[_0x453100];
          ig.modules[_0x16dd35] ? ig.modules[_0x16dd35].loaded || (_0x5caf00 = !0x1) : (_0x5caf00 = !0x1, ig._loadScript(_0x16dd35, _0x3f1e0e.name));
        }
        _0x5caf00 && _0x3f1e0e.body && (ig._loadQueue.splice(_0x5e70ea, 0x1), _0x3f1e0e.loaded = !0x0, _0x3f1e0e.body(), _0x4cd1b6 = !0x0, _0x5e70ea--);
      }
      if (_0x4cd1b6) ig._execModules();else {
        if (!ig.baked && 0x0 == ig._waitForOnload && 0x0 != ig._loadQueue.length) {
          _0x4cd1b6 = [];
          for (_0x5e70ea = 0x0; _0x5e70ea < ig._loadQueue.length; _0x5e70ea++) {
            _0x5caf00 = [], _0x16dd35 = ig._loadQueue[_0x5e70ea].requires;
            for (_0x453100 = 0x0; _0x453100 < _0x16dd35.length; _0x453100++) _0x3f1e0e = ig.modules[_0x16dd35[_0x453100]], (!_0x3f1e0e || !_0x3f1e0e.loaded) && _0x5caf00.push(_0x16dd35[_0x453100]);
            _0x4cd1b6.push(ig._loadQueue[_0x5e70ea].name + " (requires: " + _0x5caf00.join(", ") + ')');
          }
          throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + _0x4cd1b6.join("\n");
        }
      }
    },
    '_DOMReady': function () {
      if (!ig.modules['dom.ready'].loaded) {
        if (!document.body) return setTimeout(ig._DOMReady, 0xd);
        ig.modules['dom.ready'].loaded = !0x0, ig._waitForOnload--, ig._execModules();
      }
      return 0x0;
    },
    '_boot': function () {
      document.location.href.match(/\?nocache/) && ig.setNocache(!0x0), ig.ua.pixelRatio = _0x459438.devicePixelRatio || 0x1, ig.ua.viewport = {
        'width': _0x459438.innerWidth,
        'height': _0x459438.innerHeight
      }, ig.ua.screen = {
        'width': _0x459438.screen.availWidth * ig.ua.pixelRatio,
        'height': _0x459438.screen.availHeight * ig.ua.pixelRatio
      }, ig.ua.iPhone = /iPhone|iPod/i.test(navigator.userAgent), ig.ua.iPhone4 = ig.ua.iPhone && 0x2 == ig.ua.pixelRatio, ig.ua.iPad = /iPad/i.test(navigator.userAgent), ig.ua.android = /android/i.test(navigator.userAgent), ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent), ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad, ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.winPhone || /mobile/i.test(navigator.userAgent), ig.ua.touchDevice = 'ontouchstart' in _0x459438 || _0x459438.navigator.msMaxTouchPoints;
    },
    '_initDOMReady': function () {
      ig.modules['dom.ready'] ? ig._execModules() : (ig._boot(), ig.modules['dom.ready'] = {
        'requires': [],
        'loaded': !0x1,
        'body': null
      }, ig._waitForOnload++, 'complete' === document.readyState ? ig._DOMReady() : (document.addEventListener('DOMContentLoaded', ig._DOMReady, !0x1), _0x459438.addEventListener('load', ig._DOMReady, !0x1)));
    }
  }, ig.normalizeVendorAttribute(_0x459438, 'requestAnimationFrame');
  if (_0x459438.requestAnimationFrame) {
    var _0x47823a = 0x1,
      _0x3eb9f4 = {};
    _0x459438.ig.setAnimation = function (_0x9a7b05) {
      var _0x217fdf = _0x47823a++;
      _0x3eb9f4[_0x217fdf] = !0x0;
      var _0x909ad5 = function () {
        _0x3eb9f4[_0x217fdf] && (_0x459438.requestAnimationFrame(_0x909ad5), _0x9a7b05());
      };
      return _0x459438.requestAnimationFrame(_0x909ad5), _0x217fdf;
    }, _0x459438.ig.clearAnimation = function (_0x3241e5) {
      delete _0x3eb9f4[_0x3241e5];
    };
  } else _0x459438.ig.setAnimation = function (_0x244a44) {
    return _0x459438.setInterval(_0x244a44, 0x3e8 / 0x3c);
  }, _0x459438.ig.clearAnimation = function (_0x214a7c) {
    _0x459438.clearInterval(_0x214a7c);
  };
  var _0xcafcb3 = !0x1,
    _0x4e3fd8 = /xyz/.test(function () {
      xyz;
    }) ? /\bparent\b/ : /.*/,
    _0x7f0a92 = 0x0;
  _0x459438.ig.Class = function () {};
  var _0x52a18d = function (_0x19c6fb) {
    var _0x2e9eb4 = this.prototype,
      _0x1cee0b = {},
      _0xf59dec;
    for (_0xf59dec in _0x19c6fb) 'function' == typeof _0x19c6fb[_0xf59dec] && 'function' == typeof _0x2e9eb4[_0xf59dec] && _0x4e3fd8.test(_0x19c6fb[_0xf59dec]) ? (_0x1cee0b[_0xf59dec] = _0x2e9eb4[_0xf59dec], _0x2e9eb4[_0xf59dec] = function (_0x4c7fef, _0x572696) {
      return function () {
        var _0x50e947 = this.parent;
        this.parent = _0x1cee0b[_0x4c7fef];
        var _0x272a60 = _0x572696.apply(this, arguments);
        return this.parent = _0x50e947, _0x272a60;
      };
    }(_0xf59dec, _0x19c6fb[_0xf59dec])) : _0x2e9eb4[_0xf59dec] = _0x19c6fb[_0xf59dec];
  };
  _0x459438.ig.Class.extend = function (_0x1c148f) {
    function _0x14fb73() {
      if (!_0xcafcb3) {
        if (this.staticInstantiate) {
          var _0x1c808a = this.staticInstantiate.apply(this, arguments);
          if (_0x1c808a) return _0x1c808a;
        }
        for (var _0x2af93d in this) 'object' == typeof this[_0x2af93d] && (this[_0x2af93d] = ig.copy(this[_0x2af93d]));
        this.init && this.init.apply(this, arguments);
      }
      return this;
    }
    var _0x47173b = this.prototype;
    _0xcafcb3 = !0x0;
    var _0xe6cfb6 = new this();
    _0xcafcb3 = !0x1;
    for (var _0x4eb9e8 in _0x1c148f) _0xe6cfb6[_0x4eb9e8] = 'function' == typeof _0x1c148f[_0x4eb9e8] && 'function' == typeof _0x47173b[_0x4eb9e8] && _0x4e3fd8.test(_0x1c148f[_0x4eb9e8]) ? function (_0x2d3b3a, _0x178feb) {
      return function () {
        var _0x153d0a = this.parent;
        this.parent = _0x47173b[_0x2d3b3a];
        var _0x1e0b1b = _0x178feb.apply(this, arguments);
        return this.parent = _0x153d0a, _0x1e0b1b;
      };
    }(_0x4eb9e8, _0x1c148f[_0x4eb9e8]) : _0x1c148f[_0x4eb9e8];
    return _0x14fb73.prototype = _0xe6cfb6, _0x14fb73.prototype.constructor = _0x14fb73, _0x14fb73.extend = _0x459438.ig.Class.extend, _0x14fb73.inject = _0x52a18d, _0x14fb73.classId = _0xe6cfb6.classId = ++_0x7f0a92, _0x14fb73;
  }, _0x459438.ImpactMixin && ig.merge(ig, _0x459438.ImpactMixin);
}(window), ig.baked = !0x0, ig.module('impact.image').defines(function () {
  ig.Image = ig.Class.extend({
    'data': null,
    'width': 0x0,
    'height': 0x0,
    'loaded': !0x1,
    'failed': !0x1,
    'loadCallback': null,
    'path': '',
    'staticInstantiate': function (_0xba5f77) {
      return ig.Image.cache[_0xba5f77] || null;
    },
    'init': function (_0x24da7c) {
      this.path = _0x24da7c, this.load();
    },
    'load': function (_0x30b768) {
      this.loaded ? _0x30b768 && _0x30b768(this.path, !0x0) : (!this.loaded && ig.ready ? (this.loadCallback = _0x30b768 || null, this.data = new Image(), this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this);
    },
    'reload': function () {
      this.loaded = !0x1, this.data = new Image(), this.data.onload = this.onload.bind(this), this.data.src = this.path + '?' + Date.now();
    },
    'onload': function () {
      this.width = this.data.width, this.height = this.data.height, this.loaded = !0x0, 0x1 != ig.system.scale && this.resize(ig.system.scale), this.loadCallback && this.loadCallback(this.path, !0x0);
    },
    'onerror': function () {
      this.failed = !0x0, this.loadCallback && this.loadCallback(this.path, !0x1);
    },
    'resize': function (_0x55b120) {
      var _0x422b79 = ig.getImagePixels(this.data, 0x0, 0x0, this.width, this.height),
        _0x13add5 = this.width * _0x55b120,
        _0x3c1546 = this.height * _0x55b120,
        _0x29edbc = ig.$new('canvas');
      _0x29edbc.width = _0x13add5, _0x29edbc.height = _0x3c1546;
      for (var _0x400715 = _0x29edbc.getContext('2d'), _0xe4f08f = _0x400715.getImageData(0x0, 0x0, _0x13add5, _0x3c1546), _0x1c2083 = 0x0; _0x1c2083 < _0x3c1546; _0x1c2083++) for (var _0x53ed3a = 0x0; _0x53ed3a < _0x13add5; _0x53ed3a++) {
        var _0x16f1b7 = 0x4 * (Math.floor(_0x1c2083 / _0x55b120) * this.width + Math.floor(_0x53ed3a / _0x55b120)),
          _0x48643e = 0x4 * (_0x1c2083 * _0x13add5 + _0x53ed3a);
        _0xe4f08f.data[_0x48643e] = _0x422b79.data[_0x16f1b7], _0xe4f08f.data[_0x48643e + 0x1] = _0x422b79.data[_0x16f1b7 + 0x1], _0xe4f08f.data[_0x48643e + 0x2] = _0x422b79.data[_0x16f1b7 + 0x2], _0xe4f08f.data[_0x48643e + 0x3] = _0x422b79.data[_0x16f1b7 + 0x3];
      }
      _0x400715.putImageData(_0xe4f08f, 0x0, 0x0), this.data = _0x29edbc;
    },
    'draw': function (_0x47ebbb, _0x58e60f, _0x115607, _0x4e42b6, _0xbabeba, _0x1a4efd) {
      if (this.loaded) {
        var _0x57c973 = ig.system.scale;
        _0xbabeba = (_0xbabeba ? _0xbabeba : this.width) * _0x57c973, _0x1a4efd = (_0x1a4efd ? _0x1a4efd : this.height) * _0x57c973, ig.system.context.drawImage(this.data, _0x115607 ? _0x115607 * _0x57c973 : 0x0, _0x4e42b6 ? _0x4e42b6 * _0x57c973 : 0x0, _0xbabeba, _0x1a4efd, ig.system.getDrawPos(_0x47ebbb), ig.system.getDrawPos(_0x58e60f), _0xbabeba, _0x1a4efd), ig.Image.drawCount++;
      }
    },
    'drawTile': function (_0x18a653, _0x1325db, _0x474054, _0x5929f2, _0x430a81, _0x13c8d9, _0x441e27) {
      _0x430a81 = _0x430a81 ? _0x430a81 : _0x5929f2;
      if (this.loaded && !(_0x5929f2 > this.width || _0x430a81 > this.height)) {
        var _0x5909f4 = ig.system.scale,
          _0x7f684 = Math.floor(_0x5929f2 * _0x5909f4),
          _0x352615 = Math.floor(_0x430a81 * _0x5909f4),
          _0x164f90 = _0x13c8d9 ? -0x1 : 0x1,
          _0x5880d6 = _0x441e27 ? -0x1 : 0x1;
        if (_0x13c8d9 || _0x441e27) ig.system.context.save(), ig.system.context.scale(_0x164f90, _0x5880d6);
        ig.system.context.drawImage(this.data, Math.floor(_0x474054 * _0x5929f2) % this.width * _0x5909f4, Math.floor(_0x474054 * _0x5929f2 / this.width) * _0x430a81 * _0x5909f4, _0x7f684, _0x352615, ig.system.getDrawPos(_0x18a653) * _0x164f90 - (_0x13c8d9 ? _0x7f684 : 0x0), ig.system.getDrawPos(_0x1325db) * _0x5880d6 - (_0x441e27 ? _0x352615 : 0x0), _0x7f684, _0x352615), (_0x13c8d9 || _0x441e27) && ig.system.context.restore(), ig.Image.drawCount++;
      }
    }
  }), ig.Image.drawCount = 0x0, ig.Image.cache = {}, ig.Image.reloadCache = function () {
    for (var _0x46b4b5 in ig.Image.cache) ig.Image.cache[_0x46b4b5].reload();
  };
}), ig.baked = !0x0, ig.module('impact.font').requires('impact.image').defines(function () {
  ig.Font = ig.Image.extend({
    'widthMap': [],
    'indices': [],
    'firstChar': 0x20,
    'alpha': 0x1,
    'letterSpacing': 0x1,
    'lineSpacing': 0x0,
    'onload': function (_0x2ed1e5) {
      this._loadMetrics(this.data), this.parent(_0x2ed1e5), this.height -= 0x2;
    },
    'widthForString': function (_0x45a662) {
      if (-0x1 !== _0x45a662.indexOf("\n")) {
        _0x45a662 = _0x45a662.split("\n");
        for (var _0x48e972 = 0x0, _0x5dcf50 = 0x0; _0x5dcf50 < _0x45a662.length; _0x5dcf50++) _0x48e972 = Math.max(_0x48e972, this._widthForLine(_0x45a662[_0x5dcf50]));
        return _0x48e972;
      }
      return this._widthForLine(_0x45a662);
    },
    '_widthForLine': function (_0x3ddbcf) {
      for (var _0x2f00d4 = 0x0, _0x10ff84 = 0x0; _0x10ff84 < _0x3ddbcf.length; _0x10ff84++) _0x2f00d4 += this.widthMap[_0x3ddbcf.charCodeAt(_0x10ff84) - this.firstChar];
      return 0x0 < _0x3ddbcf.length && (_0x2f00d4 += this.letterSpacing * (_0x3ddbcf.length - 0x1)), _0x2f00d4;
    },
    'heightForString': function (_0x1caa94) {
      return _0x1caa94.split("\n").length * (this.height + this.lineSpacing);
    },
    'draw': function (_0x375323, _0x4883a6, _0x17522e, _0x50b9fb) {
      'string' != typeof _0x375323 && (_0x375323 = _0x375323.toString());
      if (-0x1 !== _0x375323.indexOf("\n")) {
        _0x375323 = _0x375323.split("\n");
        for (var _0x44b48d = this.height + this.lineSpacing, _0x32051a = 0x0; _0x32051a < _0x375323.length; _0x32051a++) this.draw(_0x375323[_0x32051a], _0x4883a6, _0x17522e + _0x32051a * _0x44b48d, _0x50b9fb);
      } else {
        if (_0x50b9fb == ig.Font.ALIGN.RIGHT || _0x50b9fb == ig.Font.ALIGN.CENTER) _0x32051a = this._widthForLine(_0x375323), _0x4883a6 -= _0x50b9fb == ig.Font.ALIGN.CENTER ? _0x32051a / 0x2 : _0x32051a;
        0x1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
        for (_0x32051a = 0x0; _0x32051a < _0x375323.length; _0x32051a++) _0x50b9fb = _0x375323.charCodeAt(_0x32051a), _0x4883a6 += this._drawChar(_0x50b9fb - this.firstChar, _0x4883a6, _0x17522e);
        0x1 !== this.alpha && (ig.system.context.globalAlpha = 0x1), ig.Image.drawCount += _0x375323.length;
      }
    },
    '_drawChar': function (_0x40fdd3, _0x249c08, _0x304418) {
      if (!this.loaded || 0x0 > _0x40fdd3 || _0x40fdd3 >= this.indices.length) return 0x0;
      var _0x31a96c = ig.system.scale,
        _0x5f4aa4 = this.widthMap[_0x40fdd3] * _0x31a96c,
        _0x3843c4 = this.height * _0x31a96c;
      return ig.system.context.drawImage(this.data, this.indices[_0x40fdd3] * _0x31a96c, 0x0, _0x5f4aa4, _0x3843c4, ig.system.getDrawPos(_0x249c08), ig.system.getDrawPos(_0x304418), _0x5f4aa4, _0x3843c4), this.widthMap[_0x40fdd3] + this.letterSpacing;
    },
    '_loadMetrics': function (_0x72188) {
      this.widthMap = [], this.indices = [];
      for (var _0x4a452f = ig.getImagePixels(_0x72188, 0x0, _0x72188.height - 0x1, _0x72188.width, 0x1), _0x2aab35 = 0x0, _0x111cf2 = 0x0; _0x111cf2 < _0x72188.width; _0x111cf2++) {
        var _0x4bd55f = 0x4 * _0x111cf2 + 0x3;
        0x7f < _0x4a452f.data[_0x4bd55f] ? _0x2aab35++ : 0x80 > _0x4a452f.data[_0x4bd55f] && _0x2aab35 && (this.widthMap.push(_0x2aab35), this.indices.push(_0x111cf2 - _0x2aab35), _0x2aab35 = 0x0);
      }
      this.widthMap.push(_0x2aab35), this.indices.push(_0x111cf2 - _0x2aab35);
    }
  }), ig.Font.ALIGN = {
    'LEFT': 0x0,
    'RIGHT': 0x1,
    'CENTER': 0x2
  };
}), ig.baked = !0x0, ig.module('impact.sound').defines(function () {
  ig.SoundManager = ig.Class.extend({
    'clips': {},
    'volume': 0x1,
    'format': null,
    'init': function () {
      if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !0x1;else {
        for (var _0x1da7c9 = new Audio(), _0x4a1dfb = 0x0; _0x4a1dfb < ig.Sound.use.length; _0x4a1dfb++) {
          var _0x295f1c = ig.Sound.use[_0x4a1dfb];
          if (_0x1da7c9.canPlayType(_0x295f1c.mime)) {
            this.format = _0x295f1c;
            break;
          }
        }
        this.format || (ig.Sound.enabled = !0x1), ig.Sound.enabled && ig.Sound.useWebAudio && (this.audioContext = new AudioContext(), this.boundWebAudioUnlock = this.unlockWebAudio.bind(this), ig.system.canvas.addEventListener('touchstart', this.boundWebAudioUnlock, !0x1), ig.system.canvas.addEventListener('mousedown', this.boundWebAudioUnlock, !0x1));
      }
    },
    'unlockWebAudio': function () {
      ig.system.canvas.removeEventListener('touchstart', this.boundWebAudioUnlock, !0x1), ig.system.canvas.removeEventListener('mousedown', this.boundWebAudioUnlock, !0x1);
      var _0x4ff914 = this.audioContext.createBuffer(0x1, 0x1, 0x5622),
        _0x5e7763 = this.audioContext.createBufferSource();
      _0x5e7763.buffer = _0x4ff914, _0x5e7763.connect(this.audioContext.destination), _0x5e7763.start(0x0);
    },
    'load': function (_0x3f626a, _0x226255, _0xf32914) {
      return _0x226255 && ig.Sound.useWebAudio ? this.loadWebAudio(_0x3f626a, _0x226255, _0xf32914) : this.loadHTML5Audio(_0x3f626a, _0x226255, _0xf32914);
    },
    'loadWebAudio': function (_0x1e30d3, _0x431c2d, _0x475c50) {
      _0x431c2d = ig.prefix + _0x1e30d3.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
      if (this.clips[_0x1e30d3]) return this.clips[_0x1e30d3];
      var _0x4c4cee = new ig.Sound.WebAudioSource();
      this.clips[_0x1e30d3] = _0x4c4cee;
      var _0x4770a5 = new XMLHttpRequest();
      _0x4770a5.open('GET', _0x431c2d, !0x0), _0x4770a5.responseType = 'arraybuffer';
      var _0xe4e5fa = this;
      return _0x4770a5.onload = function (_0x2c53ae) {
        _0xe4e5fa.audioContext.decodeAudioData(_0x4770a5.response, function (_0x825aa5) {
          _0x4c4cee.buffer = _0x825aa5, _0x475c50 && _0x475c50(_0x1e30d3, !0x0, _0x2c53ae);
        }, function (_0x58e7d0) {
          _0x475c50 && _0x475c50(_0x1e30d3, !0x1, _0x58e7d0);
        });
      }, _0x4770a5.onerror = function (_0x32d0f2) {
        _0x475c50 && _0x475c50(_0x1e30d3, !0x1, _0x32d0f2);
      }, _0x4770a5.send(), _0x4c4cee;
    },
    'loadHTML5Audio': function (_0x247c6a, _0x369db9, _0x52419a) {
      var _0x5c20d7 = ig.prefix + _0x247c6a.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
      if (this.clips[_0x247c6a]) {
        if (this.clips[_0x247c6a] instanceof ig.Sound.WebAudioSource) return this.clips[_0x247c6a];
        if (_0x369db9 && this.clips[_0x247c6a].length < ig.Sound.channels) for (_0x369db9 = this.clips[_0x247c6a].length; _0x369db9 < ig.Sound.channels; _0x369db9++) {
          var _0x9620f3 = new Audio(_0x5c20d7);
          _0x9620f3.load(), this.clips[_0x247c6a].push(_0x9620f3);
        }
        return this.clips[_0x247c6a][0x0];
      }
      var _0x12620f = new Audio(_0x5c20d7);
      _0x52419a && (ig.ua.mobile ? setTimeout(function () {
        _0x52419a(_0x247c6a, !0x0, null);
      }, 0x0) : (_0x12620f.addEventListener('canplaythrough', function _0x3721b7(_0x36e6c2) {
        _0x12620f.removeEventListener('canplaythrough', _0x3721b7, !0x1), _0x52419a(_0x247c6a, !0x0, _0x36e6c2);
      }, !0x1), _0x12620f.addEventListener('error', function (_0x4e1189) {
        _0x52419a(_0x247c6a, !0x1, _0x4e1189);
      }, !0x1))), _0x12620f.preload = 'auto', _0x12620f.load(), this.clips[_0x247c6a] = [_0x12620f];
      if (_0x369db9) {
        for (_0x369db9 = 0x1; _0x369db9 < ig.Sound.channels; _0x369db9++) _0x9620f3 = new Audio(_0x5c20d7), _0x9620f3.load(), this.clips[_0x247c6a].push(_0x9620f3);
      }
      return _0x12620f;
    },
    'get': function (_0x4362ee) {
      if ((_0x4362ee = this.clips[_0x4362ee]) && _0x4362ee instanceof ig.Sound.WebAudioSource) return _0x4362ee;
      for (var _0x53fb85 = 0x0, _0x1092e1; _0x1092e1 = _0x4362ee[_0x53fb85++];) if (_0x1092e1.paused || _0x1092e1.ended) return _0x1092e1.ended && (_0x1092e1.currentTime = 0x0), _0x1092e1;
      return _0x4362ee[0x0].pause(), _0x4362ee[0x0].currentTime = 0x0, _0x4362ee[0x0];
    }
  }), ig.Music = ig.Class.extend({
    'tracks': [],
    'namedTracks': {},
    'currentTrack': null,
    'currentIndex': 0x0,
    'random': !0x1,
    '_volume': 0x1,
    '_loop': !0x1,
    '_fadeInterval': 0x0,
    '_fadeTimer': null,
    '_endedCallbackBound': null,
    'init': function () {
      this._endedCallbackBound = this._endedCallback.bind(this), Object.defineProperty(this, 'volume', {
        'get': this.getVolume.bind(this),
        'set': this.setVolume.bind(this)
      }), Object.defineProperty(this, 'loop', {
        'get': this.getLooping.bind(this),
        'set': this.setLooping.bind(this)
      });
    },
    'add': function (_0x2d1d78, _0x193e91) {
      if (ig.Sound.enabled) {
        var _0x430818 = _0x2d1d78 instanceof ig.Sound ? _0x2d1d78.path : _0x2d1d78,
          _0x22ddc9 = ig.soundManager.load(_0x430818, !0x1);
        if (_0x22ddc9 instanceof ig.Sound.WebAudioSource) throw ig.system.stopRunLoop(), "Sound '" + _0x430818 + "' loaded as Multichannel but used for Music. Set the multiChannel param to false when loading, e.g.: new ig.Sound(path, false)";
        _0x22ddc9.loop = this._loop, _0x22ddc9.volume = this._volume, _0x22ddc9.addEventListener('ended', this._endedCallbackBound, !0x1), this.tracks.push(_0x22ddc9), _0x193e91 && (this.namedTracks[_0x193e91] = _0x22ddc9), this.currentTrack || (this.currentTrack = _0x22ddc9);
      }
    },
    'next': function () {
      this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 0x1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play());
    },
    'pause': function () {
      this.currentTrack && this.currentTrack.pause();
    },
    'stop': function () {
      this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0x0);
    },
    'play': function (_0x36f0e1) {
      if (_0x36f0e1 && this.namedTracks[_0x36f0e1]) _0x36f0e1 = this.namedTracks[_0x36f0e1], _0x36f0e1 != this.currentTrack && (this.stop(), this.currentTrack = _0x36f0e1);else {
        if (!this.currentTrack) return;
      }
      this.currentTrack.play();
    },
    'getLooping': function () {
      return this._loop;
    },
    'setLooping': function (_0x84dd5b) {
      this._loop = _0x84dd5b;
      for (var _0x2da503 in this.tracks) this.tracks[_0x2da503].loop = _0x84dd5b;
    },
    'getVolume': function () {
      return this._volume;
    },
    'setVolume': function (_0x30c3b3) {
      this._volume = _0x30c3b3.limit(0x0, 0x1);
      for (var _0x3e47fa in this.tracks) this.tracks[_0x3e47fa].volume = this._volume;
    },
    'fadeOut': function (_0x489b22) {
      this.currentTrack && (clearInterval(this._fadeInterval), this._fadeTimer = new ig.Timer(_0x489b22), this._fadeInterval = setInterval(this._fadeStep.bind(this), 0x32));
    },
    '_fadeStep': function () {
      var _0x4711ca = this._fadeTimer.delta().map(-this._fadeTimer.target, 0x0, 0x1, 0x0).limit(0x0, 0x1) * this._volume;
      0.01 >= _0x4711ca ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = _0x4711ca;
    },
    '_endedCallback': function () {
      this._loop ? this.play() : this.next();
    }
  }), ig.Sound = ig.Class.extend({
    'path': '',
    'volume': 0x1,
    'currentClip': null,
    'multiChannel': !0x0,
    '_loop': !0x1,
    'init': function (_0x154375, _0x19fba1) {
      this.path = _0x154375, this.multiChannel = !0x1 !== _0x19fba1, Object.defineProperty(this, 'loop', {
        'get': this.getLooping.bind(this),
        'set': this.setLooping.bind(this)
      }), this.load();
    },
    'getLooping': function () {
      return this._loop;
    },
    'setLooping': function (_0x180c8c) {
      this._loop = _0x180c8c, this.currentClip && (this.currentClip.loop = _0x180c8c);
    },
    'load': function (_0x226ed7) {
      ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, _0x226ed7) : ig.addResource(this) : _0x226ed7 && _0x226ed7(this.path, !0x0);
    },
    'play': function () {
      ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.loop = this._loop, this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play());
    },
    'stop': function () {
      this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0x0);
    }
  }), ig.Sound.WebAudioSource = ig.Class.extend({
    'sources': [],
    'gain': null,
    'buffer': null,
    '_loop': !0x1,
    'init': function () {
      this.gain = ig.soundManager.audioContext.createGain(), this.gain.connect(ig.soundManager.audioContext.destination), Object.defineProperty(this, 'loop', {
        'get': this.getLooping.bind(this),
        'set': this.setLooping.bind(this)
      }), Object.defineProperty(this, 'volume', {
        'get': this.getVolume.bind(this),
        'set': this.setVolume.bind(this)
      });
    },
    'play': function () {
      if (this.buffer) {
        var _0x31ae9a = ig.soundManager.audioContext.createBufferSource();
        _0x31ae9a.buffer = this.buffer, _0x31ae9a.connect(this.gain), _0x31ae9a.loop = this._loop;
        var _0x2ce009 = this;
        this.sources.push(_0x31ae9a), _0x31ae9a.onended = function () {
          _0x2ce009.sources.erase(_0x31ae9a);
        }, _0x31ae9a.start(0x0);
      }
    },
    'pause': function () {
      for (var _0xec04cf = 0x0; _0xec04cf < this.sources.length; _0xec04cf++) try {
        this.sources[_0xec04cf].stop();
      } catch (_0x4333a5) {}
    },
    'getLooping': function () {
      return this._loop;
    },
    'setLooping': function (_0x1d461c) {
      this._loop = _0x1d461c;
      for (var _0x7b260e = 0x0; _0x7b260e < this.sources.length; _0x7b260e++) this.sources[_0x7b260e].loop = _0x1d461c;
    },
    'getVolume': function () {
      return this.gain.gain.value;
    },
    'setVolume': function (_0x3446bd) {
      this.gain.gain.value = _0x3446bd;
    }
  }), ig.Sound.FORMAT = {
    'MP3': {
      'ext': 'mp3',
      'mime': 'audio/mpeg'
    },
    'M4A': {
      'ext': 'm4a',
      'mime': "audio/mp4; codecs=mp4a.40.2"
    },
    'OGG': {
      'ext': 'ogg',
      'mime': "audio/ogg; codecs=vorbis"
    },
    'WEBM': {
      'ext': 'webm',
      'mime': "audio/webm; codecs=vorbis"
    },
    'CAF': {
      'ext': 'caf',
      'mime': 'audio/x-caf'
    }
  }, ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3], ig.Sound.channels = 0x4, ig.Sound.enabled = !0x0, ig.normalizeVendorAttribute(window, 'AudioContext'), ig.Sound.useWebAudio = !!window.AudioContext;
}), ig.baked = !0x0, ig.module('impact.loader').requires('impact.image', 'impact.font', 'impact.sound').defines(function () {
  ig.Loader = ig.Class.extend({
    'resources': [],
    'gameClass': null,
    'status': 0x0,
    'done': !0x1,
    '_unloaded': [],
    '_drawStatus': 0x0,
    '_intervalId': 0x0,
    '_loadCallbackBound': null,
    'init': function (_0x367d7a, _0x3c287c) {
      this.gameClass = _0x367d7a, this.resources = _0x3c287c, this._loadCallbackBound = this._loadCallback.bind(this);
      for (var _0x1aaaaa = 0x0; _0x1aaaaa < this.resources.length; _0x1aaaaa++) this._unloaded.push(this.resources[_0x1aaaaa].path);
    },
    'load': function () {
      ig.system.clear('#000');
      if (this.resources.length) {
        for (var _0x1eeb97 = 0x0; _0x1eeb97 < this.resources.length; _0x1eeb97++) this.loadResource(this.resources[_0x1eeb97]);
        this._intervalId = setInterval(this.draw.bind(this), 0x10);
      } else this.end();
    },
    'loadResource': function (_0x84cdf1) {
      _0x84cdf1.load(this._loadCallbackBound);
    },
    'end': function () {
      this.done || (this.done = !0x0, clearInterval(this._intervalId), ig.system.setGame(this.gameClass));
    },
    'draw': function () {
      this._drawStatus += (this.status - this._drawStatus) / 0x5;
      var _0x2c449f = ig.system.scale,
        _0xb5f634 = (0.6 * ig.system.width).floor(),
        _0x5028b2 = (0.1 * ig.system.height).floor(),
        _0x528a17 = (0.5 * ig.system.width - _0xb5f634 / 0x2).floor(),
        _0x1998b8 = (0.5 * ig.system.height - _0x5028b2 / 0x2).floor();
      ig.system.context.fillStyle = '#000', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height), ig.system.context.fillStyle = '#fff', ig.system.context.fillRect(_0x528a17 * _0x2c449f, _0x1998b8 * _0x2c449f, _0xb5f634 * _0x2c449f, _0x5028b2 * _0x2c449f), ig.system.context.fillStyle = '#000', ig.system.context.fillRect(_0x528a17 * _0x2c449f + _0x2c449f, _0x1998b8 * _0x2c449f + _0x2c449f, _0xb5f634 * _0x2c449f - _0x2c449f - _0x2c449f, _0x5028b2 * _0x2c449f - _0x2c449f - _0x2c449f), ig.system.context.fillStyle = '#fff', ig.system.context.fillRect(_0x528a17 * _0x2c449f, _0x1998b8 * _0x2c449f, _0xb5f634 * _0x2c449f * this._drawStatus, _0x5028b2 * _0x2c449f);
    },
    '_loadCallback': function (_0x5c6ce4, _0x134c18) {
      if (_0x134c18) this._unloaded.erase(_0x5c6ce4);else throw "Failed to load resource: " + _0x5c6ce4;
      this.status = 0x1 - this._unloaded.length / this.resources.length, 0x0 == this._unloaded.length && setTimeout(this.end.bind(this), 0xfa);
    }
  });
}), ig.baked = !0x0, ig.module('impact.timer').defines(function () {
  ig.Timer = ig.Class.extend({
    'target': 0x0,
    'base': 0x0,
    'last': 0x0,
    'pausedAt': 0x0,
    'init': function (_0x4cad78) {
      this.last = this.base = ig.Timer.time, this.target = _0x4cad78 || 0x0;
    },
    'set': function (_0x20b2ed) {
      this.target = _0x20b2ed || 0x0, this.base = ig.Timer.time, this.pausedAt = 0x0;
    },
    'reset': function () {
      this.base = ig.Timer.time, this.pausedAt = 0x0;
    },
    'tick': function () {
      var _0x23b61d = ig.Timer.time - this.last;
      return this.last = ig.Timer.time, this.pausedAt ? 0x0 : _0x23b61d;
    },
    'delta': function () {
      return (this.pausedAt || ig.Timer.time) - this.base - this.target;
    },
    'pause': function () {
      this.pausedAt || (this.pausedAt = ig.Timer.time);
    },
    'unpause': function () {
      this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0x0);
    }
  }), ig.Timer._last = 0x0, ig.Timer.time = Number.MIN_VALUE, ig.Timer.timeScale = 0x1, ig.Timer.maxStep = 0.05, ig.Timer.step = function () {
    var _0x43a35a = Date.now();
    ig.Timer.time += Math.min((_0x43a35a - ig.Timer._last) / 0x3e8, ig.Timer.maxStep) * ig.Timer.timeScale, ig.Timer._last = _0x43a35a;
  };
}), ig.baked = !0x0, ig.module('impact.system').requires('impact.timer', 'impact.image').defines(function () {
  ig.System = ig.Class.extend({
    'fps': 0x1e,
    'width': 0x140,
    'height': 0xf0,
    'realWidth': 0x140,
    'realHeight': 0xf0,
    'scale': 0x1,
    'tick': 0x0,
    'animationId': 0x0,
    'newGameClass': null,
    'running': !0x1,
    'delegate': null,
    'clock': null,
    'canvas': null,
    'context': null,
    'init': function (_0x2573f3, _0x28211c, _0x353ab3, _0xd6c244, _0x514a2a) {
      this.fps = _0x28211c, this.clock = new ig.Timer(), this.canvas = ig.$(_0x2573f3), this.resize(_0x353ab3, _0xd6c244, _0x514a2a), this.context = this.canvas.getContext('2d'), this.getDrawPos = ig.System.drawMode, 0x1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP), ig.System.scaleMode(this.canvas, this.context);
    },
    'resize': function (_0x2f381f, _0x3e505d, _0x58c532) {
      this.width = _0x2f381f, this.height = _0x3e505d, this.scale = _0x58c532 || this.scale, this.realWidth = this.width * this.scale, this.realHeight = this.height * this.scale, this.canvas.width = this.realWidth, this.canvas.height = this.realHeight;
    },
    'setGame': function (_0x5e7120) {
      this.running ? this.newGameClass = _0x5e7120 : this.setGameNow(_0x5e7120);
    },
    'setGameNow': function (_0x535dfc) {
      ig.game = new _0x535dfc(), ig.system.setDelegate(ig.game);
    },
    'setDelegate': function (_0x51a331) {
      if ('function' == typeof _0x51a331.run) this.delegate = _0x51a331, this.startRunLoop();else throw "System.setDelegate: No run() function in object";
    },
    'stopRunLoop': function () {
      ig.clearAnimation(this.animationId), this.running = !0x1;
    },
    'startRunLoop': function () {
      this.stopRunLoop(), this.animationId = ig.setAnimation(this.run.bind(this)), this.running = !0x0;
    },
    'clear': function (_0x3949cc) {
      this.context.fillStyle = _0x3949cc, this.context.fillRect(0x0, 0x0, this.realWidth, this.realHeight);
    },
    'run': function () {
      ig.Timer.step(), this.tick = this.clock.tick(), this.delegate.run(), ig.input.clearPressed(), this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null);
    },
    'getDrawPos': null
  }), ig.System.DRAW = {
    'AUTHENTIC': function (_0x322877) {
      return Math.round(_0x322877) * this.scale;
    },
    'SMOOTH': function (_0x15ecf3) {
      return Math.round(_0x15ecf3 * this.scale);
    },
    'SUBPIXEL': function (_0x3c1467) {
      return _0x3c1467 * this.scale;
    }
  }, ig.System.drawMode = ig.System.DRAW.SMOOTH, ig.System.SCALE = {
    'CRISP': function (_0x415fb8, _0xe6a940) {
      ig.setVendorAttribute(_0xe6a940, 'imageSmoothingEnabled', !0x1), _0x415fb8.style.imageRendering = '-moz-crisp-edges', _0x415fb8.style.imageRendering = '-o-crisp-edges', _0x415fb8.style.imageRendering = '-webkit-optimize-contrast', _0x415fb8.style.imageRendering = 'crisp-edges', _0x415fb8.style.msInterpolationMode = 'nearest-neighbor';
    },
    'SMOOTH': function (_0x260d6d, _0xd0052e) {
      ig.setVendorAttribute(_0xd0052e, 'imageSmoothingEnabled', !0x0), _0x260d6d.style.imageRendering = '', _0x260d6d.style.msInterpolationMode = '';
    }
  }, ig.System.scaleMode = ig.System.SCALE.SMOOTH;
}), ig.baked = !0x0, ig.module('impact.input').defines(function () {
  ig.KEY = {
    'MOUSE1': -0x1,
    'MOUSE2': -0x3,
    'MWHEEL_UP': -0x4,
    'MWHEEL_DOWN': -0x5,
    'BACKSPACE': 0x8,
    'TAB': 0x9,
    'ENTER': 0xd,
    'PAUSE': 0x13,
    'CAPS': 0x14,
    'ESC': 0x1b,
    'SPACE': 0x20,
    'PAGE_UP': 0x21,
    'PAGE_DOWN': 0x22,
    'END': 0x23,
    'HOME': 0x24,
    'LEFT_ARROW': 0x25,
    'UP_ARROW': 0x26,
    'RIGHT_ARROW': 0x27,
    'DOWN_ARROW': 0x28,
    'INSERT': 0x2d,
    'DELETE': 0x2e,
    '_0': 0x30,
    '_1': 0x31,
    '_2': 0x32,
    '_3': 0x33,
    '_4': 0x34,
    '_5': 0x35,
    '_6': 0x36,
    '_7': 0x37,
    '_8': 0x38,
    '_9': 0x39,
    'A': 0x41,
    'B': 0x42,
    'C': 0x43,
    'D': 0x44,
    'E': 0x45,
    'F': 0x46,
    'G': 0x47,
    'H': 0x48,
    'I': 0x49,
    'J': 0x4a,
    'K': 0x4b,
    'L': 0x4c,
    'M': 0x4d,
    'N': 0x4e,
    'O': 0x4f,
    'P': 0x50,
    'Q': 0x51,
    'R': 0x52,
    'S': 0x53,
    'T': 0x54,
    'U': 0x55,
    'V': 0x56,
    'W': 0x57,
    'X': 0x58,
    'Y': 0x59,
    'Z': 0x5a,
    'NUMPAD_0': 0x60,
    'NUMPAD_1': 0x61,
    'NUMPAD_2': 0x62,
    'NUMPAD_3': 0x63,
    'NUMPAD_4': 0x64,
    'NUMPAD_5': 0x65,
    'NUMPAD_6': 0x66,
    'NUMPAD_7': 0x67,
    'NUMPAD_8': 0x68,
    'NUMPAD_9': 0x69,
    'MULTIPLY': 0x6a,
    'ADD': 0x6b,
    'SUBSTRACT': 0x6d,
    'DECIMAL': 0x6e,
    'DIVIDE': 0x6f,
    'F1': 0x70,
    'F2': 0x71,
    'F3': 0x72,
    'F4': 0x73,
    'F5': 0x74,
    'F6': 0x75,
    'F7': 0x76,
    'F8': 0x77,
    'F9': 0x78,
    'F10': 0x79,
    'F11': 0x7a,
    'F12': 0x7b,
    'SHIFT': 0x10,
    'CTRL': 0x11,
    'ALT': 0x12,
    'PLUS': 0xbb,
    'COMMA': 0xbc,
    'MINUS': 0xbd,
    'PERIOD': 0xbe
  }, ig.Input = ig.Class.extend({
    'bindings': {},
    'actions': {},
    'presses': {},
    'locks': {},
    'delayedKeyup': {},
    'isUsingMouse': !0x1,
    'isUsingKeyboard': !0x1,
    'isUsingAccelerometer': !0x1,
    'mouse': {
      'x': 0x0,
      'y': 0x0
    },
    'accel': {
      'x': 0x0,
      'y': 0x0,
      'z': 0x0
    },
    'initMouse': function () {
      this.isUsingMouse || (this.isUsingMouse = !0x0, ig.system.canvas.addEventListener('wheel', this.mousewheel.bind(this), !0x1), ig.system.canvas.addEventListener('contextmenu', this.contextmenu.bind(this), !0x1), ig.system.canvas.addEventListener('mousedown', this.keydown.bind(this), !0x1), ig.system.canvas.addEventListener('mouseup', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('mousemove', this.mousemove.bind(this), !0x1), ig.ua.touchDevice && (ig.system.canvas.addEventListener('touchstart', this.keydown.bind(this), !0x1), ig.system.canvas.addEventListener('touchend', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('touchcancel', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('touchmove', this.mousemove.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerDown', this.keydown.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerUp', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerMove', this.mousemove.bind(this), !0x1), ig.system.canvas.style.msTouchAction = 'none'));
    },
    'initKeyboard': function () {
      this.isUsingKeyboard || (this.isUsingKeyboard = !0x0, window.addEventListener('keydown', this.keydown.bind(this), !0x1), window.addEventListener('keyup', this.keyup.bind(this), !0x1));
    },
    'initAccelerometer': function () {
      this.isUsingAccelerometer || (this.isUsingAccelerometer = !0x0, window.addEventListener('devicemotion', this.devicemotion.bind(this), !0x1));
    },
    'mousewheel': function (_0x16ecf1) {
      var _0x113bf4 = this.bindings[0x0 > _0x16ecf1.deltaY ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
      _0x113bf4 && (this.actions[_0x113bf4] = !0x0, this.presses[_0x113bf4] = !0x0, this.delayedKeyup[_0x113bf4] = !0x0, _0x16ecf1.stopPropagation(), _0x16ecf1.preventDefault());
    },
    'mousemove': function (_0x453bb4) {
      var _0x3f8860 = ig.system.scale * ((ig.system.canvas.offsetWidth || ig.system.realWidth) / ig.system.realWidth),
        _0x25a318 = {
          'left': 0x0,
          'top': 0x0
        };
      ig.system.canvas.getBoundingClientRect && (_0x25a318 = ig.system.canvas.getBoundingClientRect()), _0x453bb4 = _0x453bb4.touches ? _0x453bb4.touches[0x0] : _0x453bb4, this.mouse.x = (_0x453bb4.clientX - _0x25a318.left) / _0x3f8860, this.mouse.y = (_0x453bb4.clientY - _0x25a318.top) / _0x3f8860;
    },
    'contextmenu': function (_0x3dae82) {
      this.bindings[ig.KEY.MOUSE2] && (_0x3dae82.stopPropagation(), _0x3dae82.preventDefault());
    },
    'keydown': function (_0x339f24) {
      var _0x1c4a5f = _0x339f24.target.tagName;
      if (!('INPUT' == _0x1c4a5f || 'TEXTAREA' == _0x1c4a5f)) {
        if (_0x1c4a5f = 'keydown' == _0x339f24.type ? _0x339f24.keyCode : 0x2 == _0x339f24.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, 0x0 > _0x1c4a5f && !ig.ua.mobile && window.focus(), ('touchstart' == _0x339f24.type || 'mousedown' == _0x339f24.type) && this.mousemove(_0x339f24), _0x1c4a5f = this.bindings[_0x1c4a5f]) this.actions[_0x1c4a5f] = !0x0, this.locks[_0x1c4a5f] || (this.presses[_0x1c4a5f] = !0x0, this.locks[_0x1c4a5f] = !0x0), _0x339f24.preventDefault();
      }
    },
    'keyup': function (_0x307e54) {
      var _0x2a8025 = _0x307e54.target.tagName;
      if (!('INPUT' == _0x2a8025 || 'TEXTAREA' == _0x2a8025)) {
        if (_0x2a8025 = this.bindings['keyup' == _0x307e54.type ? _0x307e54.keyCode : 0x2 == _0x307e54.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[_0x2a8025] = !0x0, _0x307e54.preventDefault();
      }
    },
    'devicemotion': function (_0x24126c) {
      this.accel = _0x24126c.accelerationIncludingGravity;
    },
    'bind': function (_0x2b9f04, _0x16b660) {
      0x0 > _0x2b9f04 ? this.initMouse() : 0x0 < _0x2b9f04 && this.initKeyboard(), this.bindings[_0x2b9f04] = _0x16b660;
    },
    'bindTouch': function (_0x4ec8e0, _0x4cf81) {
      var _0x889aef = ig.$(_0x4ec8e0),
        _0x4141d0 = this;
      _0x889aef.addEventListener('touchstart', function (_0x625dee) {
        _0x4141d0.touchStart(_0x625dee, _0x4cf81);
      }, !0x1), _0x889aef.addEventListener('touchend', function (_0x3d21bc) {
        _0x4141d0.touchEnd(_0x3d21bc, _0x4cf81);
      }, !0x1), _0x889aef.addEventListener('MSPointerDown', function (_0x172e87) {
        _0x4141d0.touchStart(_0x172e87, _0x4cf81);
      }, !0x1), _0x889aef.addEventListener('MSPointerUp', function (_0x129ea9) {
        _0x4141d0.touchEnd(_0x129ea9, _0x4cf81);
      }, !0x1);
    },
    'unbind': function (_0x47146f) {
      this.delayedKeyup[this.bindings[_0x47146f]] = !0x0, this.bindings[_0x47146f] = null;
    },
    'unbindAll': function () {
      this.bindings = {}, this.actions = {}, this.presses = {}, this.locks = {}, this.delayedKeyup = {};
    },
    'state': function (_0x4aa9d2) {
      return this.actions[_0x4aa9d2];
    },
    'pressed': function (_0x77083f) {
      return this.presses[_0x77083f];
    },
    'released': function (_0xd386d1) {
      return !!this.delayedKeyup[_0xd386d1];
    },
    'clearPressed': function () {
      for (var _0xce106b in this.delayedKeyup) this.actions[_0xce106b] = !0x1, this.locks[_0xce106b] = !0x1;
      this.delayedKeyup = {}, this.presses = {};
    },
    'touchStart': function (_0x47bbe0, _0x577e1f) {
      return this.actions[_0x577e1f] = !0x0, this.presses[_0x577e1f] = !0x0, _0x47bbe0.stopPropagation(), _0x47bbe0.preventDefault(), !0x1;
    },
    'touchEnd': function (_0x397f90, _0x37ef9f) {
      return this.delayedKeyup[_0x37ef9f] = !0x0, _0x397f90.stopPropagation(), _0x397f90.preventDefault(), !0x1;
    }
  });
}), ig.baked = !0x0, ig.module('impact.impact').requires('dom.ready', 'impact.loader', 'impact.system', 'impact.input', 'impact.sound').defines(function () {
  ig.main = function (_0x24323a, _0x951c77, _0x17d58f, _0x5cbabf, _0x12d815, _0x297c8f, _0x13be80) {
    ig.system = new ig.System(_0x24323a, _0x17d58f, _0x5cbabf, _0x12d815, _0x297c8f || 0x1), ig.input = new ig.Input(), ig.soundManager = new ig.SoundManager(), ig.music = new ig.Music(), ig.ready = !0x0, new (_0x13be80 || ig.Loader)(_0x951c77, ig.resources).load();
  };
}), ig.baked = !0x0, ig.module('impact.animation').requires('impact.timer', 'impact.image').defines(function () {
  ig.AnimationSheet = ig.Class.extend({
    'width': 0x8,
    'height': 0x8,
    'image': null,
    'init': function (_0xd61a1e, _0x36820e, _0x3f2eb2) {
      this.width = _0x36820e, this.height = _0x3f2eb2, this.image = new ig.Image(_0xd61a1e);
    }
  }), ig.Animation = ig.Class.extend({
    'sheet': null,
    'timer': null,
    'sequence': [],
    'flip': {
      'x': !0x1,
      'y': !0x1
    },
    'pivot': {
      'x': 0x0,
      'y': 0x0
    },
    'frameTime': 0x0,
    'frame': 0x0,
    'tile': 0x0,
    'stop': !0x1,
    'loopCount': 0x0,
    'alpha': 0x1,
    'angle': 0x0,
    'init': function (_0x5b8f15, _0x4fb0be, _0x12d213, _0x8f00bb) {
      this.sheet = _0x5b8f15, this.pivot = {
        'x': _0x5b8f15.width / 0x2,
        'y': _0x5b8f15.height / 0x2
      }, this.timer = new ig.Timer(), this.frameTime = _0x4fb0be, this.sequence = _0x12d213, this.stop = !!_0x8f00bb, this.tile = this.sequence[0x0];
    },
    'rewind': function () {
      return this.timer.set(), this.frame = this.loopCount = 0x0, this.tile = this.sequence[0x0], this;
    },
    'gotoFrame': function (_0x426675) {
      this.timer.set(this.frameTime * -_0x426675 - 0.0001), this.update();
    },
    'gotoRandomFrame': function () {
      this.gotoFrame(Math.floor(Math.random() * this.sequence.length));
    },
    'update': function () {
      var _0x38c8e2 = Math.floor(this.timer.delta() / this.frameTime);
      this.loopCount = Math.floor(_0x38c8e2 / this.sequence.length), this.frame = this.stop && 0x0 < this.loopCount ? this.sequence.length - 0x1 : _0x38c8e2 % this.sequence.length, this.tile = this.sequence[this.frame];
    },
    'draw': function (_0x24a2ae, _0x22423d) {
      var _0x3418e8 = Math.max(this.sheet.width, this.sheet.height);
      _0x24a2ae > ig.system.width || _0x22423d > ig.system.height || 0x0 > _0x24a2ae + _0x3418e8 || 0x0 > _0x22423d + _0x3418e8 || (0x1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0x0 == this.angle ? this.sheet.image.drawTile(_0x24a2ae, _0x22423d, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(_0x24a2ae + this.pivot.x), ig.system.getDrawPos(_0x22423d + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 0x1 != this.alpha && (ig.system.context.globalAlpha = 0x1));
    }
  });
}), ig.baked = !0x0, ig.module('impact.entity').requires('impact.animation', 'impact.impact').defines(function () {
  ig.Entity = ig.Class.extend({
    'id': 0x0,
    'settings': {},
    'size': {
      'x': 0x10,
      'y': 0x10
    },
    'offset': {
      'x': 0x0,
      'y': 0x0
    },
    'pos': {
      'x': 0x0,
      'y': 0x0
    },
    'last': {
      'x': 0x0,
      'y': 0x0
    },
    'vel': {
      'x': 0x0,
      'y': 0x0
    },
    'accel': {
      'x': 0x0,
      'y': 0x0
    },
    'friction': {
      'x': 0x0,
      'y': 0x0
    },
    'maxVel': {
      'x': 0x64,
      'y': 0x64
    },
    'zIndex': 0x0,
    'gravityFactor': 0x1,
    'standing': !0x1,
    'bounciness': 0x0,
    'minBounceVelocity': 0x28,
    'anims': {},
    'animSheet': null,
    'currentAnim': null,
    'health': 0xa,
    'type': 0x0,
    'checkAgainst': 0x0,
    'collides': 0x0,
    '_killed': !0x1,
    'slopeStanding': {
      'min': 0x2c.toRad(),
      'max': 0x88.toRad()
    },
    'init': function (_0x58f82b, _0xd792d, _0x39b309) {
      this.id = ++ig.Entity._lastId, this.pos.x = this.last.x = _0x58f82b, this.pos.y = this.last.y = _0xd792d, ig.merge(this, _0x39b309);
    },
    'reset': function (_0x41b1e1, _0x307699, _0x478618) {
      var _0x329873 = this.constructor.prototype;
      this.pos.x = _0x41b1e1, this.pos.y = _0x307699, this.last.x = _0x41b1e1, this.last.y = _0x307699, this.vel.x = _0x329873.vel.x, this.vel.y = _0x329873.vel.y, this.accel.x = _0x329873.accel.x, this.accel.y = _0x329873.accel.y, this.health = _0x329873.health, this._killed = _0x329873._killed, this.standing = _0x329873.standing, this.type = _0x329873.type, this.checkAgainst = _0x329873.checkAgainst, this.collides = _0x329873.collides, ig.merge(this, _0x478618);
    },
    'addAnim': function (_0x28b02c, _0x1bf7ce, _0x3ce2bf, _0xc57bc) {
      if (!this.animSheet) throw "No animSheet to add the animation " + _0x28b02c + " to.";
      return _0x1bf7ce = new ig.Animation(this.animSheet, _0x1bf7ce, _0x3ce2bf, _0xc57bc), this.anims[_0x28b02c] = _0x1bf7ce, this.currentAnim || (this.currentAnim = _0x1bf7ce), _0x1bf7ce;
    },
    'update': function () {
      this.last.x = this.pos.x, this.last.y = this.pos.y, this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor, this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x), this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
      var _0x3ba613 = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
      this.handleMovementTrace(_0x3ba613), this.currentAnim && this.currentAnim.update();
    },
    'getNewVelocity': function (_0x531b85, _0x3c656d, _0xf9a9cf, _0x55f40d) {
      return _0x3c656d ? (_0x531b85 + _0x3c656d * ig.system.tick).limit(-_0x55f40d, _0x55f40d) : _0xf9a9cf ? (_0x3c656d = _0xf9a9cf * ig.system.tick, 0x0 < _0x531b85 - _0x3c656d ? _0x531b85 - _0x3c656d : 0x0 > _0x531b85 + _0x3c656d ? _0x531b85 + _0x3c656d : 0x0) : _0x531b85.limit(-_0x55f40d, _0x55f40d);
    },
    'handleMovementTrace': function (_0x39be9) {
      this.standing = !0x1, _0x39be9.collision.y && (0x0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0x0 < this.vel.y && (this.standing = !0x0), this.vel.y = 0x0)), _0x39be9.collision.x && (this.vel.x = 0x0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0x0);
      if (_0x39be9.collision.slope) {
        var _0x1aa2f7 = _0x39be9.collision.slope;
        if (0x0 < this.bounciness) {
          var _0x396757 = this.vel.x * _0x1aa2f7.nx + this.vel.y * _0x1aa2f7.ny;
          this.vel.x = (this.vel.x - 0x2 * _0x1aa2f7.nx * _0x396757) * this.bounciness, this.vel.y = (this.vel.y - 0x2 * _0x1aa2f7.ny * _0x396757) * this.bounciness;
        } else _0x396757 = (this.vel.x * _0x1aa2f7.x + this.vel.y * _0x1aa2f7.y) / (_0x1aa2f7.x * _0x1aa2f7.x + _0x1aa2f7.y * _0x1aa2f7.y), this.vel.x = _0x1aa2f7.x * _0x396757, this.vel.y = _0x1aa2f7.y * _0x396757, _0x1aa2f7 = Math.atan2(_0x1aa2f7.x, _0x1aa2f7.y), _0x1aa2f7 > this.slopeStanding.min && _0x1aa2f7 < this.slopeStanding.max && (this.standing = !0x0);
      }
      this.pos = _0x39be9.pos;
    },
    'draw': function () {
      this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y);
    },
    'kill': function () {
      ig.game.removeEntity(this);
    },
    'receiveDamage': function (_0x54554d) {
      this.health -= _0x54554d, 0x0 >= this.health && this.kill();
    },
    'touches': function (_0x5400f1) {
      return !(this.pos.x >= _0x5400f1.pos.x + _0x5400f1.size.x || this.pos.x + this.size.x <= _0x5400f1.pos.x || this.pos.y >= _0x5400f1.pos.y + _0x5400f1.size.y || this.pos.y + this.size.y <= _0x5400f1.pos.y);
    },
    'distanceTo': function (_0x3f1cfc) {
      var _0xda04d5 = this.pos.x + this.size.x / 0x2 - (_0x3f1cfc.pos.x + _0x3f1cfc.size.x / 0x2);
      return _0x3f1cfc = this.pos.y + this.size.y / 0x2 - (_0x3f1cfc.pos.y + _0x3f1cfc.size.y / 0x2), Math.sqrt(_0xda04d5 * _0xda04d5 + _0x3f1cfc * _0x3f1cfc);
    },
    'angleTo': function (_0x42d971) {
      return Math.atan2(_0x42d971.pos.y + _0x42d971.size.y / 0x2 - (this.pos.y + this.size.y / 0x2), _0x42d971.pos.x + _0x42d971.size.x / 0x2 - (this.pos.x + this.size.x / 0x2));
    },
    'check': function () {},
    'collideWith': function () {},
    'ready': function () {},
    'erase': function () {}
  }), ig.Entity._lastId = 0x0, ig.Entity.COLLIDES = {
    'NEVER': 0x0,
    'LITE': 0x1,
    'PASSIVE': 0x2,
    'ACTIVE': 0x4,
    'FIXED': 0x8
  }, ig.Entity.TYPE = {
    'NONE': 0x0,
    'A': 0x1,
    'B': 0x2,
    'BOTH': 0x3
  }, ig.Entity.checkPair = function (_0x44dc96, _0x589ee3) {
    _0x44dc96.checkAgainst & _0x589ee3.type && _0x44dc96.check(_0x589ee3), _0x589ee3.checkAgainst & _0x44dc96.type && _0x589ee3.check(_0x44dc96), _0x44dc96.collides && _0x589ee3.collides && _0x44dc96.collides + _0x589ee3.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(_0x44dc96, _0x589ee3);
  }, ig.Entity.solveCollision = function (_0x2a7937, _0x1f77bc) {
    var _0x4d56b0 = null;
    if (_0x2a7937.collides == ig.Entity.COLLIDES.LITE || _0x1f77bc.collides == ig.Entity.COLLIDES.FIXED) _0x4d56b0 = _0x2a7937;else {
      if (_0x1f77bc.collides == ig.Entity.COLLIDES.LITE || _0x2a7937.collides == ig.Entity.COLLIDES.FIXED) _0x4d56b0 = _0x1f77bc;
    }
    _0x2a7937.last.x + _0x2a7937.size.x > _0x1f77bc.last.x && _0x2a7937.last.x < _0x1f77bc.last.x + _0x1f77bc.size.x ? (_0x2a7937.last.y < _0x1f77bc.last.y ? ig.Entity.seperateOnYAxis(_0x2a7937, _0x1f77bc, _0x4d56b0) : ig.Entity.seperateOnYAxis(_0x1f77bc, _0x2a7937, _0x4d56b0), _0x2a7937.collideWith(_0x1f77bc, 'y'), _0x1f77bc.collideWith(_0x2a7937, 'y')) : _0x2a7937.last.y + _0x2a7937.size.y > _0x1f77bc.last.y && _0x2a7937.last.y < _0x1f77bc.last.y + _0x1f77bc.size.y && (_0x2a7937.last.x < _0x1f77bc.last.x ? ig.Entity.seperateOnXAxis(_0x2a7937, _0x1f77bc, _0x4d56b0) : ig.Entity.seperateOnXAxis(_0x1f77bc, _0x2a7937, _0x4d56b0), _0x2a7937.collideWith(_0x1f77bc, 'x'), _0x1f77bc.collideWith(_0x2a7937, 'x'));
  }, ig.Entity.seperateOnXAxis = function (_0x45abb0, _0x236e14, _0x292d80) {
    var _0xce45b2 = _0x45abb0.pos.x + _0x45abb0.size.x - _0x236e14.pos.x;
    _0x292d80 ? (_0x292d80.vel.x = -_0x292d80.vel.x * _0x292d80.bounciness + (_0x45abb0 === _0x292d80 ? _0x236e14 : _0x45abb0).vel.x, _0x236e14 = ig.game.collisionMap.trace(_0x292d80.pos.x, _0x292d80.pos.y, _0x292d80 == _0x45abb0 ? -_0xce45b2 : _0xce45b2, 0x0, _0x292d80.size.x, _0x292d80.size.y), _0x292d80.pos.x = _0x236e14.pos.x) : (_0x292d80 = (_0x45abb0.vel.x - _0x236e14.vel.x) / 0x2, _0x45abb0.vel.x = -_0x292d80, _0x236e14.vel.x = _0x292d80, _0x292d80 = ig.game.collisionMap.trace(_0x45abb0.pos.x, _0x45abb0.pos.y, -_0xce45b2 / 0x2, 0x0, _0x45abb0.size.x, _0x45abb0.size.y), _0x45abb0.pos.x = Math.floor(_0x292d80.pos.x), _0x45abb0 = ig.game.collisionMap.trace(_0x236e14.pos.x, _0x236e14.pos.y, _0xce45b2 / 0x2, 0x0, _0x236e14.size.x, _0x236e14.size.y), _0x236e14.pos.x = Math.ceil(_0x45abb0.pos.x));
  }, ig.Entity.seperateOnYAxis = function (_0x1c5bd6, _0x4e212a, _0x46eca7) {
    var _0x2ff42f = _0x1c5bd6.pos.y + _0x1c5bd6.size.y - _0x4e212a.pos.y;
    if (_0x46eca7) {
      _0x4e212a = _0x1c5bd6 === _0x46eca7 ? _0x4e212a : _0x1c5bd6, _0x46eca7.vel.y = -_0x46eca7.vel.y * _0x46eca7.bounciness + _0x4e212a.vel.y;
      var _0x276ba9 = 0x0;
      _0x46eca7 == _0x1c5bd6 && Math.abs(_0x46eca7.vel.y - _0x4e212a.vel.y) < _0x46eca7.minBounceVelocity && (_0x46eca7.standing = !0x0, _0x276ba9 = _0x4e212a.vel.x * ig.system.tick), _0x1c5bd6 = ig.game.collisionMap.trace(_0x46eca7.pos.x, _0x46eca7.pos.y, _0x276ba9, _0x46eca7 == _0x1c5bd6 ? -_0x2ff42f : _0x2ff42f, _0x46eca7.size.x, _0x46eca7.size.y), _0x46eca7.pos.y = _0x1c5bd6.pos.y, _0x46eca7.pos.x = _0x1c5bd6.pos.x;
    } else ig.game.gravity && (_0x4e212a.standing || 0x0 < _0x1c5bd6.vel.y) ? (_0x46eca7 = ig.game.collisionMap.trace(_0x1c5bd6.pos.x, _0x1c5bd6.pos.y, 0x0, -(_0x1c5bd6.pos.y + _0x1c5bd6.size.y - _0x4e212a.pos.y), _0x1c5bd6.size.x, _0x1c5bd6.size.y), _0x1c5bd6.pos.y = _0x46eca7.pos.y, 0x0 < _0x1c5bd6.bounciness && _0x1c5bd6.vel.y > _0x1c5bd6.minBounceVelocity ? _0x1c5bd6.vel.y *= -_0x1c5bd6.bounciness : (_0x1c5bd6.standing = !0x0, _0x1c5bd6.vel.y = 0x0)) : (_0x46eca7 = (_0x1c5bd6.vel.y - _0x4e212a.vel.y) / 0x2, _0x1c5bd6.vel.y = -_0x46eca7, _0x4e212a.vel.y = _0x46eca7, _0x276ba9 = _0x4e212a.vel.x * ig.system.tick, _0x46eca7 = ig.game.collisionMap.trace(_0x1c5bd6.pos.x, _0x1c5bd6.pos.y, _0x276ba9, -_0x2ff42f / 0x2, _0x1c5bd6.size.x, _0x1c5bd6.size.y), _0x1c5bd6.pos.y = _0x46eca7.pos.y, _0x1c5bd6 = ig.game.collisionMap.trace(_0x4e212a.pos.x, _0x4e212a.pos.y, 0x0, _0x2ff42f / 0x2, _0x4e212a.size.x, _0x4e212a.size.y), _0x4e212a.pos.y = _0x1c5bd6.pos.y);
  };
}), ig.baked = !0x0, ig.module('impact.map').defines(function () {
  ig.Map = ig.Class.extend({
    'tilesize': 0x8,
    'width': 0x1,
    'height': 0x1,
    'pxWidth': 0x1,
    'pxHeight': 0x1,
    'data': [[]],
    'name': null,
    'init': function (_0x4f7d51, _0x4780c1) {
      this.tilesize = _0x4f7d51, this.data = _0x4780c1, this.height = _0x4780c1.length, this.width = _0x4780c1[0x0].length, this.pxWidth = this.width * this.tilesize, this.pxHeight = this.height * this.tilesize;
    },
    'getTile': function (_0x2bc987, _0x4806a9) {
      var _0x5d59cf = Math.floor(_0x2bc987 / this.tilesize),
        _0x34d3e4 = Math.floor(_0x4806a9 / this.tilesize);
      return 0x0 <= _0x5d59cf && _0x5d59cf < this.width && 0x0 <= _0x34d3e4 && _0x34d3e4 < this.height ? this.data[_0x34d3e4][_0x5d59cf] : 0x0;
    },
    'setTile': function (_0xda0bd, _0x2f0ccc, _0x577012) {
      _0xda0bd = Math.floor(_0xda0bd / this.tilesize), _0x2f0ccc = Math.floor(_0x2f0ccc / this.tilesize), 0x0 <= _0xda0bd && _0xda0bd < this.width && 0x0 <= _0x2f0ccc && _0x2f0ccc < this.height && (this.data[_0x2f0ccc][_0xda0bd] = _0x577012);
    }
  });
}), ig.baked = !0x0, ig.module('impact.collision-map').requires('impact.map').defines(function () {
  ig.CollisionMap = ig.Map.extend({
    'lastSlope': 0x1,
    'tiledef': null,
    'init': function (_0x1f0cba, _0x36d973, _0x3a9194) {
      this.parent(_0x1f0cba, _0x36d973), this.tiledef = _0x3a9194 || ig.CollisionMap.defaultTileDef;
      for (var _0x2f1a2d in this.tiledef) _0x2f1a2d | 0x0 > this.lastSlope && (this.lastSlope = _0x2f1a2d | 0x0);
    },
    'trace': function (_0x248845, _0x32c6d2, _0x4ab2a2, _0x4a3aa0, _0x9e99b9, _0x10ef81) {
      var _0x3d52fe = {
          'collision': {
            'x': !0x1,
            'y': !0x1,
            'slope': !0x1
          },
          'pos': {
            'x': _0x248845,
            'y': _0x32c6d2
          },
          'tile': {
            'x': 0x0,
            'y': 0x0
          }
        },
        _0x1c5075 = Math.ceil((Math.max(Math.abs(_0x4ab2a2), Math.abs(_0x4a3aa0)) + 0.1) / this.tilesize);
      if (0x1 < _0x1c5075) {
        for (var _0x1471ca = _0x4ab2a2 / _0x1c5075, _0x1317fa = _0x4a3aa0 / _0x1c5075, _0x358842 = 0x0; _0x358842 < _0x1c5075 && (_0x1471ca || _0x1317fa) && !(this._traceStep(_0x3d52fe, _0x248845, _0x32c6d2, _0x1471ca, _0x1317fa, _0x9e99b9, _0x10ef81, _0x4ab2a2, _0x4a3aa0, _0x358842), _0x248845 = _0x3d52fe.pos.x, _0x32c6d2 = _0x3d52fe.pos.y, _0x3d52fe.collision.x && (_0x4ab2a2 = _0x1471ca = 0x0), _0x3d52fe.collision.y && (_0x4a3aa0 = _0x1317fa = 0x0), _0x3d52fe.collision.slope); _0x358842++);
      } else this._traceStep(_0x3d52fe, _0x248845, _0x32c6d2, _0x4ab2a2, _0x4a3aa0, _0x9e99b9, _0x10ef81, _0x4ab2a2, _0x4a3aa0, 0x0);
      return _0x3d52fe;
    },
    '_traceStep': function (_0x1a5d68, _0x275bc7, _0x2de1d0, _0x2668f9, _0x464f32, _0x3b508e, _0x55c34c, _0x2b9784, _0x5a25b8, _0x16796d) {
      _0x1a5d68.pos.x += _0x2668f9, _0x1a5d68.pos.y += _0x464f32;
      var _0x46c005 = 0x0;
      if (_0x2668f9) {
        var _0x351f58 = 0x0 < _0x2668f9 ? _0x3b508e : 0x0,
          _0xc231ca = 0x0 > _0x2668f9 ? this.tilesize : 0x0,
          _0x46c005 = Math.max(Math.floor(_0x2de1d0 / this.tilesize), 0x0),
          _0x561ee0 = Math.min(Math.ceil((_0x2de1d0 + _0x55c34c) / this.tilesize), this.height);
        _0x2668f9 = Math.floor((_0x1a5d68.pos.x + _0x351f58) / this.tilesize);
        var _0x5e6b9a = Math.floor((_0x275bc7 + _0x351f58) / this.tilesize);
        if (0x0 < _0x16796d || _0x2668f9 == _0x5e6b9a || 0x0 > _0x5e6b9a || _0x5e6b9a >= this.width) _0x5e6b9a = -0x1;
        if (0x0 <= _0x2668f9 && _0x2668f9 < this.width) {
          for (var _0x4264f2 = _0x46c005; _0x4264f2 < _0x561ee0 && !(-0x1 != _0x5e6b9a && (_0x46c005 = this.data[_0x4264f2][_0x5e6b9a], 0x1 < _0x46c005 && _0x46c005 <= this.lastSlope && this._checkTileDef(_0x1a5d68, _0x46c005, _0x275bc7, _0x2de1d0, _0x2b9784, _0x5a25b8, _0x3b508e, _0x55c34c, _0x5e6b9a, _0x4264f2))); _0x4264f2++) if (_0x46c005 = this.data[_0x4264f2][_0x2668f9], 0x1 == _0x46c005 || _0x46c005 > this.lastSlope || 0x1 < _0x46c005 && this._checkTileDef(_0x1a5d68, _0x46c005, _0x275bc7, _0x2de1d0, _0x2b9784, _0x5a25b8, _0x3b508e, _0x55c34c, _0x2668f9, _0x4264f2)) {
            if (0x1 < _0x46c005 && _0x46c005 <= this.lastSlope && _0x1a5d68.collision.slope) break;
            _0x1a5d68.collision.x = !0x0, _0x1a5d68.tile.x = _0x46c005, _0x275bc7 = _0x1a5d68.pos.x = _0x2668f9 * this.tilesize - _0x351f58 + _0xc231ca, _0x2b9784 = 0x0;
            break;
          }
        }
      }
      if (_0x464f32) {
        _0x351f58 = 0x0 < _0x464f32 ? _0x55c34c : 0x0, _0x464f32 = 0x0 > _0x464f32 ? this.tilesize : 0x0, _0x46c005 = Math.max(Math.floor(_0x1a5d68.pos.x / this.tilesize), 0x0), _0xc231ca = Math.min(Math.ceil((_0x1a5d68.pos.x + _0x3b508e) / this.tilesize), this.width), _0x4264f2 = Math.floor((_0x1a5d68.pos.y + _0x351f58) / this.tilesize), _0x561ee0 = Math.floor((_0x2de1d0 + _0x351f58) / this.tilesize);
        if (0x0 < _0x16796d || _0x4264f2 == _0x561ee0 || 0x0 > _0x561ee0 || _0x561ee0 >= this.height) _0x561ee0 = -0x1;
        if (0x0 <= _0x4264f2 && _0x4264f2 < this.height) {
          for (_0x2668f9 = _0x46c005; _0x2668f9 < _0xc231ca && !(-0x1 != _0x561ee0 && (_0x46c005 = this.data[_0x561ee0][_0x2668f9], 0x1 < _0x46c005 && _0x46c005 <= this.lastSlope && this._checkTileDef(_0x1a5d68, _0x46c005, _0x275bc7, _0x2de1d0, _0x2b9784, _0x5a25b8, _0x3b508e, _0x55c34c, _0x2668f9, _0x561ee0))); _0x2668f9++) if (_0x46c005 = this.data[_0x4264f2][_0x2668f9], 0x1 == _0x46c005 || _0x46c005 > this.lastSlope || 0x1 < _0x46c005 && this._checkTileDef(_0x1a5d68, _0x46c005, _0x275bc7, _0x2de1d0, _0x2b9784, _0x5a25b8, _0x3b508e, _0x55c34c, _0x2668f9, _0x4264f2)) {
            if (0x1 < _0x46c005 && _0x46c005 <= this.lastSlope && _0x1a5d68.collision.slope) break;
            _0x1a5d68.collision.y = !0x0, _0x1a5d68.tile.y = _0x46c005, _0x1a5d68.pos.y = _0x4264f2 * this.tilesize - _0x351f58 + _0x464f32;
            break;
          }
        }
      }
    },
    '_checkTileDef': function (_0x2db3cb, _0x485baa, _0x4384fd, _0x14a2b5, _0x263423, _0xd5ca3e, _0x28db46, _0x2558df, _0xe77efb, _0x27f9f7) {
      var _0x278f43 = this.tiledef[_0x485baa];
      if (!_0x278f43) return !0x1;
      _0x485baa = (_0x278f43[0x2] - _0x278f43[0x0]) * this.tilesize;
      var _0x41d73f = (_0x278f43[0x3] - _0x278f43[0x1]) * this.tilesize,
        _0xaf3a0d = _0x278f43[0x4];
      _0x28db46 = _0x4384fd + _0x263423 + (0x0 > _0x41d73f ? _0x28db46 : 0x0) - (_0xe77efb + _0x278f43[0x0]) * this.tilesize, _0x2558df = _0x14a2b5 + _0xd5ca3e + (0x0 < _0x485baa ? _0x2558df : 0x0) - (_0x27f9f7 + _0x278f43[0x1]) * this.tilesize;
      if (0x0 < _0x485baa * _0x2558df - _0x41d73f * _0x28db46) {
        if (0x0 > _0x263423 * -_0x41d73f + _0xd5ca3e * _0x485baa) return _0xaf3a0d;
        _0xe77efb = Math.sqrt(_0x485baa * _0x485baa + _0x41d73f * _0x41d73f), _0x27f9f7 = _0x41d73f / _0xe77efb, _0xe77efb = -_0x485baa / _0xe77efb;
        var _0x45ec4f = _0x28db46 * _0x27f9f7 + _0x2558df * _0xe77efb,
          _0x278f43 = _0x27f9f7 * _0x45ec4f,
          _0x45ec4f = _0xe77efb * _0x45ec4f;
        if (_0x278f43 * _0x278f43 + _0x45ec4f * _0x45ec4f >= _0x263423 * _0x263423 + _0xd5ca3e * _0xd5ca3e) return _0xaf3a0d || 0.5 > _0x485baa * (_0x2558df - _0xd5ca3e) - _0x41d73f * (_0x28db46 - _0x263423);
        return _0x2db3cb.pos.x = _0x4384fd + _0x263423 - _0x278f43, _0x2db3cb.pos.y = _0x14a2b5 + _0xd5ca3e - _0x45ec4f, _0x2db3cb.collision.slope = {
          'x': _0x485baa,
          'y': _0x41d73f,
          'nx': _0x27f9f7,
          'ny': _0xe77efb
        }, !0x0;
      }
      return !0x1;
    }
  });
  var _0x11b2de = 0x1 / 0x3,
    _0x1fe06a = 0x2 / 0x3;
  ig.CollisionMap.defaultTileDef = {
    0x5: [0x0, 0x1, 0x1, _0x1fe06a, !0x0],
    0x6: [0x0, _0x1fe06a, 0x1, _0x11b2de, !0x0],
    0x7: [0x0, _0x11b2de, 0x1, 0x0, !0x0],
    0x3: [0x0, 0x1, 0x1, 0.5, !0x0],
    0x4: [0x0, 0.5, 0x1, 0x0, !0x0],
    0x2: [0x0, 0x1, 0x1, 0x0, !0x0],
    0xa: [0.5, 0x1, 0x1, 0x0, !0x0],
    0x15: [0x0, 0x1, 0.5, 0x0, !0x0],
    0x20: [_0x1fe06a, 0x1, 0x1, 0x0, !0x0],
    0x2b: [_0x11b2de, 0x1, _0x1fe06a, 0x0, !0x0],
    0x36: [0x0, 0x1, _0x11b2de, 0x0, !0x0],
    0x1b: [0x0, 0x0, 0x1, _0x11b2de, !0x0],
    0x1c: [0x0, _0x11b2de, 0x1, _0x1fe06a, !0x0],
    0x1d: [0x0, _0x1fe06a, 0x1, 0x1, !0x0],
    0x19: [0x0, 0x0, 0x1, 0.5, !0x0],
    0x1a: [0x0, 0.5, 0x1, 0x1, !0x0],
    0x18: [0x0, 0x0, 0x1, 0x1, !0x0],
    0xb: [0x0, 0x0, 0.5, 0x1, !0x0],
    0x16: [0.5, 0x0, 0x1, 0x1, !0x0],
    0x21: [0x0, 0x0, _0x11b2de, 0x1, !0x0],
    0x2c: [_0x11b2de, 0x0, _0x1fe06a, 0x1, !0x0],
    0x37: [_0x1fe06a, 0x0, 0x1, 0x1, !0x0],
    0x10: [0x1, _0x11b2de, 0x0, 0x0, !0x0],
    0x11: [0x1, _0x1fe06a, 0x0, _0x11b2de, !0x0],
    0x12: [0x1, 0x1, 0x0, _0x1fe06a, !0x0],
    0xe: [0x1, 0.5, 0x0, 0x0, !0x0],
    0xf: [0x1, 0x1, 0x0, 0.5, !0x0],
    0xd: [0x1, 0x1, 0x0, 0x0, !0x0],
    0x8: [0.5, 0x1, 0x0, 0x0, !0x0],
    0x13: [0x1, 0x1, 0.5, 0x0, !0x0],
    0x1e: [_0x11b2de, 0x1, 0x0, 0x0, !0x0],
    0x29: [_0x1fe06a, 0x1, _0x11b2de, 0x0, !0x0],
    0x34: [0x1, 0x1, _0x1fe06a, 0x0, !0x0],
    0x26: [0x1, _0x1fe06a, 0x0, 0x1, !0x0],
    0x27: [0x1, _0x11b2de, 0x0, _0x1fe06a, !0x0],
    0x28: [0x1, 0x0, 0x0, _0x11b2de, !0x0],
    0x24: [0x1, 0.5, 0x0, 0x1, !0x0],
    0x25: [0x1, 0x0, 0x0, 0.5, !0x0],
    0x23: [0x1, 0x0, 0x0, 0x1, !0x0],
    0x9: [0x1, 0x0, 0.5, 0x1, !0x0],
    0x14: [0.5, 0x0, 0x0, 0x1, !0x0],
    0x1f: [0x1, 0x0, _0x1fe06a, 0x1, !0x0],
    0x2a: [_0x1fe06a, 0x0, _0x11b2de, 0x1, !0x0],
    0x35: [_0x11b2de, 0x0, 0x0, 0x1, !0x0],
    0xc: [0x0, 0x0, 0x1, 0x0, !0x1],
    0x17: [0x1, 0x1, 0x0, 0x1, !0x1],
    0x22: [0x1, 0x0, 0x1, 0x1, !0x1],
    0x2d: [0x0, 0x1, 0x0, 0x0, !0x1]
  }, ig.CollisionMap.staticNoCollision = {
    'trace': function (_0x1cef7f, _0x47d6b0, _0x3a4df0, _0x3c2eaa) {
      return {
        'collision': {
          'x': !0x1,
          'y': !0x1,
          'slope': !0x1
        },
        'pos': {
          'x': _0x1cef7f + _0x3a4df0,
          'y': _0x47d6b0 + _0x3c2eaa
        },
        'tile': {
          'x': 0x0,
          'y': 0x0
        }
      };
    }
  };
}), ig.baked = !0x0, ig.module('impact.background-map').requires('impact.map', 'impact.image').defines(function () {
  ig.BackgroundMap = ig.Map.extend({
    'tiles': null,
    'scroll': {
      'x': 0x0,
      'y': 0x0
    },
    'distance': 0x1,
    'repeat': !0x1,
    'tilesetName': '',
    'foreground': !0x1,
    'enabled': !0x0,
    'preRender': !0x1,
    'preRenderedChunks': null,
    'chunkSize': 0x200,
    'debugChunks': !0x1,
    'anims': {},
    'init': function (_0x11e9c5, _0xbea436, _0x11d257) {
      this.parent(_0x11e9c5, _0xbea436), this.setTileset(_0x11d257);
    },
    'setTileset': function (_0x3d5c3e) {
      this.tilesetName = _0x3d5c3e instanceof ig.Image ? _0x3d5c3e.path : _0x3d5c3e, this.tiles = new ig.Image(this.tilesetName), this.preRenderedChunks = null;
    },
    'setScreenPos': function (_0x27bd21, _0x5d5cdd) {
      this.scroll.x = _0x27bd21 / this.distance, this.scroll.y = _0x5d5cdd / this.distance;
    },
    'preRenderMapToChunks': function () {
      var _0x556650 = this.width * this.tilesize * ig.system.scale,
        _0x292661 = this.height * this.tilesize * ig.system.scale;
      this.chunkSize = Math.min(Math.max(_0x556650, _0x292661), this.chunkSize);
      var _0x11c3b8 = Math.ceil(_0x556650 / this.chunkSize),
        _0x1085c9 = Math.ceil(_0x292661 / this.chunkSize);
      this.preRenderedChunks = [];
      for (var _0x5263c3 = 0x0; _0x5263c3 < _0x1085c9; _0x5263c3++) {
        this.preRenderedChunks[_0x5263c3] = [];
        for (var _0x2006d3 = 0x0; _0x2006d3 < _0x11c3b8; _0x2006d3++) this.preRenderedChunks[_0x5263c3][_0x2006d3] = this.preRenderChunk(_0x2006d3, _0x5263c3, _0x2006d3 == _0x11c3b8 - 0x1 ? _0x556650 - _0x2006d3 * this.chunkSize : this.chunkSize, _0x5263c3 == _0x1085c9 - 0x1 ? _0x292661 - _0x5263c3 * this.chunkSize : this.chunkSize);
      }
    },
    'preRenderChunk': function (_0x4f6972, _0x496142, _0x134a46, _0x5dcd5f) {
      var _0x7e73d1 = _0x134a46 / this.tilesize / ig.system.scale + 0x1,
        _0x755ecf = _0x5dcd5f / this.tilesize / ig.system.scale + 0x1,
        _0x29e365 = _0x4f6972 * this.chunkSize / ig.system.scale % this.tilesize,
        _0x3a10c0 = _0x496142 * this.chunkSize / ig.system.scale % this.tilesize;
      _0x4f6972 = Math.floor(_0x4f6972 * this.chunkSize / this.tilesize / ig.system.scale);
      var _0x3d69d2 = Math.floor(_0x496142 * this.chunkSize / this.tilesize / ig.system.scale);
      _0x496142 = ig.$new('canvas'), _0x496142.width = _0x134a46, _0x496142.height = _0x5dcd5f, _0x496142.retinaResolutionEnabled = !0x1, _0x5dcd5f = _0x496142.getContext('2d'), ig.System.scaleMode(_0x496142, _0x5dcd5f), _0x134a46 = ig.system.context, ig.system.context = _0x5dcd5f;
      for (_0x5dcd5f = 0x0; _0x5dcd5f < _0x7e73d1; _0x5dcd5f++) for (var _0x30f154 = 0x0; _0x30f154 < _0x755ecf; _0x30f154++) if (_0x5dcd5f + _0x4f6972 < this.width && _0x30f154 + _0x3d69d2 < this.height) {
        var _0x183bea = this.data[_0x30f154 + _0x3d69d2][_0x5dcd5f + _0x4f6972];
        _0x183bea && this.tiles.drawTile(_0x5dcd5f * this.tilesize - _0x29e365, _0x30f154 * this.tilesize - _0x3a10c0, _0x183bea - 0x1, this.tilesize);
      }
      return ig.system.context = _0x134a46, _0x7e73d1 = new Image(), _0x7e73d1.src = _0x496142.toDataURL(), _0x7e73d1.width = _0x496142.width, _0x7e73d1.height = _0x496142.height, _0x7e73d1;
    },
    'draw': function () {
      this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled());
    },
    'drawPreRendered': function () {
      this.preRenderedChunks || this.preRenderMapToChunks();
      var _0x42ccde = ig.system.getDrawPos(this.scroll.x),
        _0x3b7bb1 = ig.system.getDrawPos(this.scroll.y);
      if (this.repeat) var _0x46d942 = this.width * this.tilesize * ig.system.scale,
        _0x42ccde = (_0x42ccde % _0x46d942 + _0x46d942) % _0x46d942,
        _0x46d942 = this.height * this.tilesize * ig.system.scale,
        _0x3b7bb1 = (_0x3b7bb1 % _0x46d942 + _0x46d942) % _0x46d942;
      var _0x46d942 = Math.max(Math.floor(_0x42ccde / this.chunkSize), 0x0),
        _0x2add57 = Math.max(Math.floor(_0x3b7bb1 / this.chunkSize), 0x0),
        _0x4f1d8c = Math.ceil((_0x42ccde + ig.system.realWidth) / this.chunkSize),
        _0x2451e7 = Math.ceil((_0x3b7bb1 + ig.system.realHeight) / this.chunkSize),
        _0x3f5f82 = this.preRenderedChunks[0x0].length,
        _0x26501b = this.preRenderedChunks.length;
      this.repeat || (_0x4f1d8c = Math.min(_0x4f1d8c, _0x3f5f82), _0x2451e7 = Math.min(_0x2451e7, _0x26501b));
      for (var _0x2f71fb = 0x0, _0x4ed3ca = _0x2add57; _0x4ed3ca < _0x2451e7; _0x4ed3ca++) {
        for (var _0x385dd7 = 0x0, _0x55b92d = _0x46d942; _0x55b92d < _0x4f1d8c; _0x55b92d++) {
          var _0x327508 = this.preRenderedChunks[_0x4ed3ca % _0x26501b][_0x55b92d % _0x3f5f82],
            _0xcd85e2 = -_0x42ccde + _0x55b92d * this.chunkSize - _0x385dd7,
            _0x2bf6d4 = -_0x3b7bb1 + _0x4ed3ca * this.chunkSize - _0x2f71fb;
          ig.system.context.drawImage(_0x327508, _0xcd85e2, _0x2bf6d4), ig.Image.drawCount++, this.debugChunks && (ig.system.context.strokeStyle = '#f0f', ig.system.context.strokeRect(_0xcd85e2, _0x2bf6d4, this.chunkSize, this.chunkSize)), this.repeat && _0x327508.width < this.chunkSize && _0xcd85e2 + _0x327508.width < ig.system.realWidth && (_0x385dd7 += this.chunkSize - _0x327508.width, _0x4ed3ca == _0x2add57 && _0x4f1d8c++);
        }
        this.repeat && _0x327508.height < this.chunkSize && _0x2bf6d4 + _0x327508.height < ig.system.realHeight && (_0x2f71fb += this.chunkSize - _0x327508.height, _0x2451e7++);
      }
    },
    'drawTiled': function () {
      for (var _0x30c8e2 = 0x0, _0xee1b40 = null, _0x59ee02 = (this.scroll.x / this.tilesize).toInt(), _0x41d2db = (this.scroll.y / this.tilesize).toInt(), _0x21ef25 = this.scroll.x % this.tilesize, _0x4ea2d2 = this.scroll.y % this.tilesize, _0x53174b = -_0x21ef25 - this.tilesize, _0x21ef25 = ig.system.width + this.tilesize - _0x21ef25, _0x32ce6c = ig.system.height + this.tilesize - _0x4ea2d2, _0x479a2d = -0x1, _0x4ea2d2 = -_0x4ea2d2 - this.tilesize; _0x4ea2d2 < _0x32ce6c; _0x479a2d++, _0x4ea2d2 += this.tilesize) {
        var _0x504db0 = _0x479a2d + _0x41d2db;
        if (_0x504db0 >= this.height || 0x0 > _0x504db0) {
          if (!this.repeat) continue;
          _0x504db0 = (_0x504db0 % this.height + this.height) % this.height;
        }
        for (var _0x5187d6 = -0x1, _0x242bf8 = _0x53174b; _0x242bf8 < _0x21ef25; _0x5187d6++, _0x242bf8 += this.tilesize) {
          _0x30c8e2 = _0x5187d6 + _0x59ee02;
          if (_0x30c8e2 >= this.width || 0x0 > _0x30c8e2) {
            if (!this.repeat) continue;
            _0x30c8e2 = (_0x30c8e2 % this.width + this.width) % this.width;
          }
          if (_0x30c8e2 = this.data[_0x504db0][_0x30c8e2]) (_0xee1b40 = this.anims[_0x30c8e2 - 0x1]) ? _0xee1b40.draw(_0x242bf8, _0x4ea2d2) : this.tiles.drawTile(_0x242bf8, _0x4ea2d2, _0x30c8e2 - 0x1, this.tilesize);
        }
      }
    }
  });
}), ig.baked = !0x0, ig.module('impact.game').requires('impact.impact', 'impact.entity', 'impact.collision-map', 'impact.background-map').defines(function () {
  ig.Game = ig.Class.extend({
    'clearColor': '#000000',
    'gravity': 0x0,
    'screen': {
      'x': 0x0,
      'y': 0x0
    },
    '_rscreen': {
      'x': 0x0,
      'y': 0x0
    },
    'entities': [],
    'namedEntities': {},
    'collisionMap': ig.CollisionMap.staticNoCollision,
    'backgroundMaps': [],
    'backgroundAnims': {},
    'autoSort': !0x1,
    'sortBy': null,
    'cellSize': 0x40,
    '_deferredKill': [],
    '_levelToLoad': null,
    '_doSortEntities': !0x1,
    'staticInstantiate': function () {
      return this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX, ig.game = this, null;
    },
    'loadLevel': function (_0x23bdc6) {
      this.entities = [], this.namedEntities = {};
      for (var _0x15ada5 = 0x0; _0x15ada5 < _0x23bdc6.entities.length; _0x15ada5++) {
        var _0x2ff41b = _0x23bdc6.entities[_0x15ada5];
        this.spawnEntity(_0x2ff41b.type, _0x2ff41b.x, _0x2ff41b.y, _0x2ff41b.settings);
      }
      this.sortEntities(), this.collisionMap = ig.CollisionMap.staticNoCollision, this.backgroundMaps = [];
      for (_0x15ada5 = 0x0; _0x15ada5 < _0x23bdc6.layer.length; _0x15ada5++) if (_0x2ff41b = _0x23bdc6.layer[_0x15ada5], 'collision' == _0x2ff41b.name) this.collisionMap = new ig.CollisionMap(_0x2ff41b.tilesize, _0x2ff41b.data);else {
        var _0x376879 = new ig.BackgroundMap(_0x2ff41b.tilesize, _0x2ff41b.data, _0x2ff41b.tilesetName);
        _0x376879.anims = this.backgroundAnims[_0x2ff41b.tilesetName] || {}, _0x376879.repeat = _0x2ff41b.repeat, _0x376879.distance = _0x2ff41b.distance, _0x376879.foreground = !!_0x2ff41b.foreground, _0x376879.preRender = !!_0x2ff41b.preRender, _0x376879.name = _0x2ff41b.name, this.backgroundMaps.push(_0x376879);
      }
      for (_0x15ada5 = 0x0; _0x15ada5 < this.entities.length; _0x15ada5++) this.entities[_0x15ada5].ready();
    },
    'loadLevelDeferred': function (_0x12e046) {
      this._levelToLoad = _0x12e046;
    },
    'getMapByName': function (_0x348a56) {
      if ('collision' == _0x348a56) return this.collisionMap;
      for (var _0x2939e5 = 0x0; _0x2939e5 < this.backgroundMaps.length; _0x2939e5++) if (this.backgroundMaps[_0x2939e5].name == _0x348a56) return this.backgroundMaps[_0x2939e5];
      return null;
    },
    'getEntityByName': function (_0x4de599) {
      return this.namedEntities[_0x4de599];
    },
    'getEntitiesByType': function (_0x2b823e) {
      _0x2b823e = 'string' === typeof _0x2b823e ? ig.global[_0x2b823e] : _0x2b823e;
      for (var _0x58f709 = [], _0x13bd7 = 0x0; _0x13bd7 < this.entities.length; _0x13bd7++) {
        var _0x15022d = this.entities[_0x13bd7];
        _0x15022d instanceof _0x2b823e && !_0x15022d._killed && _0x58f709.push(_0x15022d);
      }
      return _0x58f709;
    },
    'spawnEntity': function (_0x519748, _0x50ac1a, _0x2fac68, _0x20ad10) {
      var _0x327e38 = 'string' === typeof _0x519748 ? ig.global[_0x519748] : _0x519748;
      if (!_0x327e38) throw "Can't spawn entity of type " + _0x519748;
      return _0x519748 = new _0x327e38(_0x50ac1a, _0x2fac68, _0x20ad10 || {}), this.entities.push(_0x519748), _0x519748.name && (this.namedEntities[_0x519748.name] = _0x519748), _0x519748;
    },
    'sortEntities': function () {
      this.entities.sort(this.sortBy);
    },
    'sortEntitiesDeferred': function () {
      this._doSortEntities = !0x0;
    },
    'removeEntity': function (_0x54f335) {
      _0x54f335.name && delete this.namedEntities[_0x54f335.name], _0x54f335._killed = !0x0, _0x54f335.type = ig.Entity.TYPE.NONE, _0x54f335.checkAgainst = ig.Entity.TYPE.NONE, _0x54f335.collides = ig.Entity.COLLIDES.NEVER, this._deferredKill.push(_0x54f335);
    },
    'run': function () {
      this.update(), this.draw();
    },
    'update': function () {
      this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null), this.updateEntities(), this.checkEntities();
      for (var _0x3b8bed = 0x0; _0x3b8bed < this._deferredKill.length; _0x3b8bed++) this._deferredKill[_0x3b8bed].erase(), this.entities.erase(this._deferredKill[_0x3b8bed]);
      this._deferredKill = [];
      if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !0x1;
      for (var _0x42bbd7 in this.backgroundAnims) {
        var _0x3b8bed = this.backgroundAnims[_0x42bbd7],
          _0x42c7fa;
        for (_0x42c7fa in _0x3b8bed) _0x3b8bed[_0x42c7fa].update();
      }
    },
    'updateEntities': function () {
      for (var _0x1f21c9 = 0x0; _0x1f21c9 < this.entities.length; _0x1f21c9++) {
        var _0x43b97c = this.entities[_0x1f21c9];
        _0x43b97c._killed || _0x43b97c.update();
      }
    },
    'draw': function () {
      this.clearColor && ig.system.clear(this.clearColor), this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale, this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
      var _0x321696;
      for (_0x321696 = 0x0; _0x321696 < this.backgroundMaps.length; _0x321696++) {
        var _0x44c205 = this.backgroundMaps[_0x321696];
        if (_0x44c205.foreground) break;
        _0x44c205.setScreenPos(this.screen.x, this.screen.y), _0x44c205.draw();
      }
      this.drawEntities();
      for (_0x321696; _0x321696 < this.backgroundMaps.length; _0x321696++) _0x44c205 = this.backgroundMaps[_0x321696], _0x44c205.setScreenPos(this.screen.x, this.screen.y), _0x44c205.draw();
    },
    'drawEntities': function () {
      for (var _0x185611 = 0x0; _0x185611 < this.entities.length; _0x185611++) this.entities[_0x185611].draw();
    },
    'checkEntities': function () {
      for (var _0x4862a8 = {}, _0x36b5f8 = 0x0; _0x36b5f8 < this.entities.length; _0x36b5f8++) {
        var _0xc474fd = this.entities[_0x36b5f8];
        if (!(_0xc474fd.type == ig.Entity.TYPE.NONE && _0xc474fd.checkAgainst == ig.Entity.TYPE.NONE && _0xc474fd.collides == ig.Entity.COLLIDES.NEVER)) {
          for (var _0x2ad56f = {}, _0x1ceb8f = Math.floor(_0xc474fd.pos.y / this.cellSize), _0x192c18 = Math.floor((_0xc474fd.pos.x + _0xc474fd.size.x) / this.cellSize) + 0x1, _0x16cdec = Math.floor((_0xc474fd.pos.y + _0xc474fd.size.y) / this.cellSize) + 0x1, _0x2b021c = Math.floor(_0xc474fd.pos.x / this.cellSize); _0x2b021c < _0x192c18; _0x2b021c++) for (var _0x292651 = _0x1ceb8f; _0x292651 < _0x16cdec; _0x292651++) if (_0x4862a8[_0x2b021c]) {
            if (_0x4862a8[_0x2b021c][_0x292651]) {
              for (var _0x364c3d = _0x4862a8[_0x2b021c][_0x292651], _0x3340b8 = 0x0; _0x3340b8 < _0x364c3d.length; _0x3340b8++) _0xc474fd.touches(_0x364c3d[_0x3340b8]) && !_0x2ad56f[_0x364c3d[_0x3340b8].id] && (_0x2ad56f[_0x364c3d[_0x3340b8].id] = !0x0, ig.Entity.checkPair(_0xc474fd, _0x364c3d[_0x3340b8]));
              _0x364c3d.push(_0xc474fd);
            } else _0x4862a8[_0x2b021c][_0x292651] = [_0xc474fd];
          } else _0x4862a8[_0x2b021c] = {}, _0x4862a8[_0x2b021c][_0x292651] = [_0xc474fd];
        }
      }
    }
  }), ig.Game.SORT = {
    'Z_INDEX': function (_0x36df3e, _0x56842b) {
      return _0x36df3e.zIndex - _0x56842b.zIndex;
    },
    'POS_X': function (_0x2d58c3, _0x2ffa0c) {
      return _0x2d58c3.pos.x + _0x2d58c3.size.x - (_0x2ffa0c.pos.x + _0x2ffa0c.size.x);
    },
    'POS_Y': function (_0x452011, _0x4ae7ac) {
      return _0x452011.pos.y + _0x452011.size.y - (_0x4ae7ac.pos.y + _0x4ae7ac.size.y);
    }
  };
}), ig.baked = !0x0, ig.module('plugins.patches.fps-limit-patch').requires('impact.system', 'impact.impact').defines(function () {
  ig.System.inject({
    'fps': 0x3c
  }), ig.system && (ig.system.fps = 0x3c), ig.normalizeVendorAttribute(window, 'requestAnimationFrame');
  if (window.requestAnimationFrame) {
    var _0x472eb9 = 0x1,
      _0x4e9ab3 = {};
    window.ig.setAnimation = function (_0x4edd88, _0x35bb8f) {
      var _0x2b08ed = _0x472eb9++;
      _0x4e9ab3[_0x2b08ed] = !0x0;
      var _0x22a330 = 0x3e8 / 0x3c,
        _0x235a8a = 0x3c,
        _0xa0ac30 = 0x0,
        _0x49b5ae = 0x0,
        _0x3b0ab3 = 0x0,
        _0x402e07 = 0x0,
        _0x7d0742 = function () {
          _0x4e9ab3[_0x2b08ed] && (timestamp = Date.now(), _0x49b5ae = _0xa0ac30, _0xa0ac30 = timestamp, _0x402e07 = _0xa0ac30 - _0x49b5ae, _0x235a8a = 0.8 * _0x235a8a + 0.2 * (0x3e8 / _0x402e07), 0x3c < _0x235a8a && 0x3f <= _0x235a8a ? (_0x3b0ab3 = Math.min(Math.max(0x2 * _0x22a330 + _0x49b5ae - timestamp, 0x0), _0x22a330), setTimeout(function () {
            window.requestAnimationFrame(_0x7d0742, _0x35bb8f);
          }, _0x3b0ab3), _0x4edd88(timestamp)) : (window.requestAnimationFrame(_0x7d0742, _0x35bb8f), _0x4edd88()));
        };
      return window.requestAnimationFrame(_0x7d0742, _0x35bb8f), _0x2b08ed;
    }, window.ig.clearAnimation = function (_0x5390e2) {
      delete _0x4e9ab3[_0x5390e2];
    };
  } else window.ig.setAnimation = function (_0x351188) {
    return window.setInterval(_0x351188, 0x3e8 / 0x3c);
  }, window.ig.clearAnimation = function (_0x2c4437) {
    window.clearInterval(_0x2c4437);
  };
}), ig.baked = !0x0, ig.module('plugins.patches.timer-patch').requires('impact.timer').defines(function () {
  ig.Timer.step = function () {
    var _0x57637f = Date.now(),
      _0x16493e = (_0x57637f - ig.Timer._last) / 0x3e8;
    0x0 > _0x16493e && (_0x16493e = 0x0), ig.Timer.time += Math.min(_0x16493e, ig.Timer.maxStep) * ig.Timer.timeScale, ig.Timer._last = _0x57637f;
  };
}), ig.baked = !0x0, ig.module('plugins.patches.user-agent-patch').requires('impact.impact').defines(function () {
  ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent), ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent), ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag, ig.ua.iOSgt5 = ig.ua.iOS && 0x5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[0x1]), ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent), ig.ua.Kindle = /Silk/i.test(navigator.userAgent), ig.ua.touchDevice = 'ontouchstart' in window || window.navigator.msMaxTouchPoints || window.navigator.maxTouchPoints, ig.ua.is_mac = 'MacIntel' === navigator.platform, ig.ua.iOS = ig.ua.touchDevice && ig.ua.is_mac || ig.ua.iOS, ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent);
}), ig.baked = !0x0, ig.module('plugins.patches.webkit-image-smoothing-patch').defines(function () {
  ig.System && (ig.System.SCALE = {
    'CRISP': function (_0x359b28, _0x32370b) {
      _0x32370b.imageSmoothingEnabled = _0x32370b.msImageSmoothingEnabled = _0x32370b.mozImageSmoothingEnabled = _0x32370b.oImageSmoothingEnabled = !0x1, _0x359b28.style.imageRendering = '-moz-crisp-edges', _0x359b28.style.imageRendering = '-o-crisp-edges', _0x359b28.style.imageRendering = '-webkit-optimize-contrast', _0x359b28.style.imageRendering = 'crisp-edges', _0x359b28.style.msInterpolationMode = 'nearest-neighbor';
    },
    'SMOOTH': function (_0x1f693f, _0x4b6758) {
      _0x4b6758.imageSmoothingEnabled = _0x4b6758.msImageSmoothingEnabled = _0x4b6758.oImageSmoothingEnabled = !0x0, _0x1f693f.style.imageRendering = '', _0x1f693f.style.msInterpolationMode = '';
    }
  }, ig.System.scaleMode = ig.System.SCALE.SMOOTH);
}), ig.baked = !0x0, ig.module('plugins.patches.windowfocus-onMouseDown-patch').requires('impact.input').defines(function () {
  var _0x18058e = !0x1;
  try {
    _0x18058e = window.self !== window.top, !0x1 === _0x18058e && (_0x18058e = 0x0 < window.frames.length);
  } catch (_0x1b75e6) {
    _0x18058e = !0x0;
  }
  ig.Input.inject({
    'keydown': function (_0x2e2feb) {
      var _0x25a40b = _0x2e2feb.target.tagName;
      if (!('INPUT' == _0x25a40b || 'TEXTAREA' == _0x25a40b)) {
        if (_0x25a40b = 'keydown' == _0x2e2feb.type ? _0x2e2feb.keyCode : 0x2 == _0x2e2feb.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, _0x18058e && 0x0 > _0x25a40b && window.focus(), ('touchstart' == _0x2e2feb.type || 'mousedown' == _0x2e2feb.type) && this.mousemove(_0x2e2feb), _0x25a40b = this.bindings[_0x25a40b]) this.actions[_0x25a40b] = !0x0, this.locks[_0x25a40b] || (this.presses[_0x25a40b] = !0x0, this.locks[_0x25a40b] = !0x0), _0x2e2feb.stopPropagation(), _0x2e2feb.preventDefault();
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.patches.input-patch').requires('impact.input').defines(function () {
  ig.Input.inject({
    'initMouse': function () {
      this.parent(), ig.system.canvas.addEventListener('mouseleave', this.mouseleave.bind(this), !0x1);
    },
    'mousemove': function (_0x5b4df6) {
      this.parent(_0x5b4df6);
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x18cc26) {}
    },
    'mouseleave': function () {
      this.clearState('click');
    },
    'keyup': function (_0x12e4eb) {
      this.parent(_0x12e4eb);
      if (ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x4e2b40) {}
    },
    'clearState': function (_0x4c9322) {
      this.delayedKeyup[_0x4c9322] = !0x0, this.actions[_0x4c9322] = !0x1;
    },
    'clearAllState': function () {
      for (var _0x463b8f in this.actions) this.clearState(_0x463b8f);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.data.vector').defines(function () {
  Vector2 = function (_0x4708b3, _0x4b5df9) {
    this.x = _0x4708b3 || 0x0, this.y = _0x4b5df9 || 0x0;
  }, Vector2.prototype = {
    'valType': 'number',
    'neg': function () {
      return this.x = -this.x, this.y = -this.y, this;
    },
    'row': function (_0x4018f6) {
      return typeof _0x4018f6 === this.valType && (this.y = _0x4018f6), this.y;
    },
    'col': function (_0x1cc7b3) {
      return typeof _0x1cc7b3 === this.valType && (this.x = _0x1cc7b3), this.x;
    },
    'add': function (_0x51e7d5) {
      return _0x51e7d5 instanceof Vector2 ? (this.x += _0x51e7d5.x, this.y += _0x51e7d5.y) : (this.x += _0x51e7d5, this.y += _0x51e7d5), this;
    },
    'sub': function (_0x2b7b07) {
      return _0x2b7b07 instanceof Vector2 ? (this.x -= _0x2b7b07.x, this.y -= _0x2b7b07.y) : (this.x -= _0x2b7b07, this.y -= _0x2b7b07), this;
    },
    'mul': function (_0xd5cf42) {
      return _0xd5cf42 instanceof Vector2 ? (this.x *= _0xd5cf42.x, this.y *= _0xd5cf42.y) : (this.x *= _0xd5cf42, this.y *= _0xd5cf42), this;
    },
    'div': function (_0x7c7de8) {
      return _0x7c7de8 instanceof Vector2 ? (0x0 != _0x7c7de8.x && (this.x /= _0x7c7de8.x), 0x0 != _0x7c7de8.y && (this.y /= _0x7c7de8.y)) : 0x0 != _0x7c7de8 && (this.x /= _0x7c7de8, this.y /= _0x7c7de8), this;
    },
    'equals': function (_0x3503ae) {
      return this.x == _0x3503ae.x && this.y == _0x3503ae.y;
    },
    'dot': function (_0x3f41ec) {
      return this.x * _0x3f41ec.x + this.y * _0x3f41ec.y;
    },
    'cross': function (_0x42b62a) {
      return this.x * _0x42b62a.y - this.y * _0x42b62a.x;
    },
    'length': function () {
      return Math.sqrt(this.dot(this));
    },
    'norm': function () {
      return this.div(this.length());
    },
    'min': function () {
      return Math.min(this.x, this.y);
    },
    'max': function () {
      return Math.max(this.x, this.y);
    },
    'toAngles': function () {
      return -Math.atan2(-this.y, this.x);
    },
    'angleTo': function (_0x55dfeb) {
      return Math.acos(this.dot(_0x55dfeb) / (this.length() * _0x55dfeb.length()));
    },
    'toArray': function (_0x349252) {
      return [this.x, this.y].slice(0x0, _0x349252 || 0x2);
    },
    'clone': function () {
      return new Vector2(this.x, this.y);
    },
    'set': function (_0x16833b, _0x2ba3f5) {
      return this.x = _0x16833b, this.y = _0x2ba3f5, this;
    },
    'unit': function () {
      var _0x57d5b1 = this.length();
      if (0x0 < _0x57d5b1) return new Vector2(this.x / _0x57d5b1, this.y / _0x57d5b1);
      throw "Divide by 0 error in unitVector function of vector:" + this;
    },
    'turnRight': function () {
      var _0x318062 = this.x;
      return this.x = -this.y, this.y = _0x318062, this;
    },
    'turnLeft': function () {
      var _0x5f284b = this.x;
      return this.x = this.y, this.y = -_0x5f284b, this;
    },
    'rotate': function (_0x1ed1b2) {
      var _0x209ada = this.clone();
      return this.x = _0x209ada.x * Math.cos(_0x1ed1b2) - _0x209ada.y * Math.sin(_0x1ed1b2), this.y = _0x209ada.x * Math.sin(_0x1ed1b2) + _0x209ada.y * Math.cos(_0x1ed1b2), this;
    }
  }, Vector2.negative = function (_0x25334e) {
    return new Vector2(-_0x25334e.x, -_0x25334e.y);
  }, Vector2.add = function (_0x264a4d, _0x53366d) {
    return _0x53366d instanceof Vector2 ? new Vector2(_0x264a4d.x + _0x53366d.x, _0x264a4d.y + _0x53366d.y) : new Vector2(_0x264a4d.x + _0x53366d, _0x264a4d.y + _0x53366d);
  }, Vector2.subtract = function (_0x560f8a, _0x5791f3) {
    return _0x5791f3 instanceof Vector2 ? new Vector2(_0x560f8a.x - _0x5791f3.x, _0x560f8a.y - _0x5791f3.y) : new Vector2(_0x560f8a.x - _0x5791f3, _0x560f8a.y - _0x5791f3);
  }, Vector2.multiply = function (_0x5867e3, _0x566d2f) {
    return _0x566d2f instanceof Vector2 ? new Vector2(_0x5867e3.x * _0x566d2f.x, _0x5867e3.y * _0x566d2f.y) : new Vector2(_0x5867e3.x * _0x566d2f, _0x5867e3.y * _0x566d2f);
  }, Vector2.divide = function (_0x52c321, _0x1dcfa8) {
    return _0x1dcfa8 instanceof Vector2 ? new Vector2(_0x52c321.x / _0x1dcfa8.x, _0x52c321.y / _0x1dcfa8.y) : new Vector2(_0x52c321.x / _0x1dcfa8, _0x52c321.y / _0x1dcfa8);
  }, Vector2.equals = function (_0x371ea4, _0x214837) {
    return _0x371ea4.x == _0x214837.x && _0x371ea4.y == _0x214837.y;
  }, Vector2.dot = function (_0x5f042c, _0x1dfe82) {
    return _0x5f042c.x * _0x1dfe82.x + _0x5f042c.y * _0x1dfe82.y;
  }, Vector2.cross = function (_0x4e3e0f, _0x40c788) {
    return _0x4e3e0f.x * _0x40c788.y - _0x4e3e0f.y * _0x40c788.x;
  };
}), ig.baked = !0x0, ig.module('plugins.data.color-rgb').defines(function () {
  ColorRGB = function (_0x1b8e1b, _0x44e6fd, _0x5f1504, _0x44f3f5) {
    this.r = _0x1b8e1b || 0x0, this.g = _0x44e6fd || 0x0, this.b = _0x5f1504 || 0x0, this.a = _0x44f3f5 || 0x0;
  }, ColorRGB.prototype = {
    'setRandomColor': function () {
      this.r = Math.round(0xff * Math.random()), this.g = Math.round(0xff * Math.random()), this.b = Math.round(0xff * Math.random());
    },
    'getStyle': function () {
      return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
    },
    'getHex': function () {
      for (var _0x2382d5 = this.r.toString(0x10), _0x5c0cdc = this.g.toString(0x10), _0x2a0bc9 = this.b.toString(0x10); 0x2 > _0x2382d5.length;) _0x2382d5 = '0' + _0x2382d5;
      for (; 0x2 > _0x5c0cdc.length;) _0x5c0cdc = '0' + _0x5c0cdc;
      for (; 0x2 > _0x2a0bc9.length;) _0x2a0bc9 = '0' + _0x2a0bc9;
      return '#' + _0x2382d5 + _0x5c0cdc + _0x2a0bc9;
    },
    'getInvertedColor': function () {
      return new ColorRGB(0xff - this.r, 0xff - this.g, 0xff - this.b, 0xff - this.a);
    },
    'clone': function () {
      return new ColorRGB(this.r, this.g, this.b, this.a);
    }
  };
}), ig.baked = !0x0, ig.module('plugins.font.font-info').requires('impact.impact').defines(function () {
  ig.FontInfo = ig.Class.extend({
    'fonts': [{
      'name': 'montserrat',
      'source': 'media/fonts/montserrat'
    }],
    'init': function () {
      this.registerCssFont();
    },
    'registerCssFont': function () {
      if (0x0 < this.fonts.length) {
        var _0x2f937f = document.createElement('style');
        _0x2f937f.type = 'text/css';
        for (var _0x34550b = '', _0x31cbe4 = 0x0; _0x31cbe4 < this.fonts.length; _0x31cbe4++) var _0x4cdaea = this.fonts[_0x31cbe4], _0x34550b = _0x34550b + ("@font-face {font-family: '" + _0x4cdaea.name + "';src: url('" + _0x4cdaea.source + ".eot');src: url('" + _0x4cdaea.source + ".eot?#iefix') format('embedded-opentype'),url('" + _0x4cdaea.source + ".woff2') format('woff2'),url('" + _0x4cdaea.source + ".woff') format('woff'),url('" + _0x4cdaea.source + ".ttf') format('truetype'),url('" + _0x4cdaea.source + ".svg#svgFontName') format('svg')}");
        _0x2f937f.appendChild(document.createTextNode(_0x34550b)), document.head.appendChild(_0x2f937f);
      }
    },
    'isValid': function () {
      for (var _0x6e6ab7 = 0x0; _0x6e6ab7 < this.fonts.length; _0x6e6ab7++) if (!this._isValidName(this.fonts[_0x6e6ab7].source)) return !0x1;
      return !0x0;
    },
    '_isValidName': function (_0x52fccc) {
      return -0x1 == _0x52fccc.search(/^[a-z0-9-\/]+$/) ? !0x1 : !0x0;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.font.font-loader').requires('impact.impact', 'plugins.font.font-info', 'impact.loader').defines(function () {
  ig.FontLoader = ig.Class.extend({
    'fontInfo': new ig.FontInfo(),
    'onload': !0x1,
    'onerror': !0x1,
    'init': function (_0x81a59e, _0x54e83c) {
      this.onload = _0x81a59e, this.onerror = _0x54e83c;
    },
    'load': function () {
      this.fontInfo.isValid() ? this._loadByLib() : console.error("Only lowercased alphanumeric and dash are allowed for font file name!. Please check the font path");
    },
    '_loadByLib': function () {
      for (var _0x104999 = [], _0x144364 = 0x0; _0x144364 < this.fontInfo.fonts.length; _0x144364++) {
        var _0x210fe6 = new FontFaceObserver(this.fontInfo.fonts[_0x144364].name);
        _0x104999.push(_0x210fe6.load());
      }
      Promise.all(_0x104999).then(this.onload)['catch'](this.onerror);
    }
  }), ig.Loader.inject({
    'parentLoad': !0x1,
    'load': function () {
      this.parentLoad = this.parent, new ig.FontLoader(this.onFontLoad.bind(this), this.onFontError.bind(this)).load();
    },
    'onFontLoad': function () {
      this.parentLoad();
    },
    'onFontError': function () {
      console.error("Font is not loaded"), this.parentLoad();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.dom-handler').defines(function () {
  ig.DomHandler = ig.Class.extend({
    'version': '1.1.2',
    'JQUERYAVAILABLE': !0x1,
    'init': function () {
      this.JQUERYAVAILABLE = this._jqueryAvailable();
    },
    '_jqueryAvailable': function () {
      return 'undefined' !== typeof jQuery;
    },
    'addEvent': function (_0xf3d3aa, _0x286f11, _0x36cc99, _0xf466b3) {
      if (this.JQUERYAVAILABLE) _0xf3d3aa.on(_0x286f11, _0x36cc99);else _0xf3d3aa.addEventListener(_0x286f11, _0x36cc99, _0xf466b3);
    },
    'create': function (_0x4531e0) {
      return this.JQUERYAVAILABLE ? $('<' + _0x4531e0 + '>') : ig.$new(_0x4531e0);
    },
    'getElementByClass': function (_0x2b08b3) {
      return this.JQUERYAVAILABLE ? $('.' + _0x2b08b3) : document.getElementsByClassName(_0x2b08b3);
    },
    'getElementById': function (_0x1c524c) {
      return this.JQUERYAVAILABLE ? 0x0 < $(_0x1c524c).length ? $(_0x1c524c) : null : ig.$(_0x1c524c);
    },
    'appendChild': function (_0x15aa8c, _0x88a8f3) {
      this.JQUERYAVAILABLE ? _0x15aa8c.append(_0x88a8f3) : _0x15aa8c.appendChild(_0x88a8f3);
    },
    'appendToBody': function (_0x16ad53) {
      this.JQUERYAVAILABLE ? $('body').append(_0x16ad53) : document.body.appendChild(_0x16ad53);
    },
    'appendToHead': function (_0x4eec34) {
      this.JQUERYAVAILABLE ? $('head').append(_0x4eec34) : document.head.appendChild(_0x4eec34);
    },
    'removeChild': function (_0x30c666, _0x6eba72) {
      this.JQUERYAVAILABLE ? _0x30c666.remove(_0x6eba72) : _0x30c666.removeChild(_0x6eba72);
    },
    'removeFromBody': function (_0x5efa94) {
      this.JQUERYAVAILABLE ? $(_0x5efa94).remove() : document.body.removeChild(_0x5efa94);
    },
    'removeFromHead': function (_0x5a4c47) {
      this.JQUERYAVAILABLE ? $(_0x5a4c47).remove() : document.head.removeChild(_0x5a4c47);
    },
    'text': function (_0x3b91d9, _0x1ee444) {
      this.JQUERYAVAILABLE ? _0x3b91d9.text(_0x1ee444) : _0x3b91d9.innerText = _0x1ee444;
    },
    'val': function (_0x335c9a, _0x237c52) {
      this.JQUERYAVAILABLE ? _0x335c9a.val(_0x237c52) : _0x335c9a.value = _0x237c52;
    },
    'getVal': function (_0x561d4d) {
      return this.JQUERYAVAILABLE ? _0x561d4d.val() : _0x561d4d.value;
    },
    'getAttr': function (_0x343c20, _0xc4579a) {
      return this.JQUERYAVAILABLE ? _0x343c20.attr(_0xc4579a) : _0x343c20.getAttribute(_0xc4579a);
    },
    'getText': function (_0x2ba554) {
      return this.JQUERYAVAILABLE ? _0x2ba554.text() : _0x2ba554.innerText;
    },
    'html': function (_0x11fc67, _0xc21b7d) {
      this.JQUERYAVAILABLE ? _0x11fc67.html(_0xc21b7d) : _0x11fc67.innerHTML = _0xc21b7d;
    },
    'resize': function (_0x2384ee, _0x474bc1, _0x349444) {
      if (this.JQUERYAVAILABLE) _0x2384ee.width(_0x474bc1.toFixed(0x2)), _0x2384ee.height(_0x349444.toFixed(0x2));else {
        var _0x92240d = _0x2384ee.style.visibility;
        _0x474bc1 = 'width:' + _0x474bc1.toFixed(0x2) + "px; height:" + _0x349444.toFixed(0x2) + 'px;', this.attr(_0x2384ee, 'style', _0x474bc1), _0x2384ee.style.visibility = _0x92240d;
      }
    },
    'resizeOffsetLeft': function (_0x53a9c8, _0x43f719, _0x2ab6f2, _0x1b7705) {
      if (this.JQUERYAVAILABLE) _0x53a9c8.width(_0x43f719.toFixed(0x2)), _0x53a9c8.height(_0x2ab6f2.toFixed(0x2)), _0x53a9c8.css('left', _0x1b7705);else {
        var _0x35bfff = _0x53a9c8.style.visibility;
        _0x43f719 = 'width:' + _0x43f719.toFixed(0x2) + "px; height:" + _0x2ab6f2.toFixed(0x2) + "px; left: " + _0x1b7705.toFixed(0x2) + 'px;', this.attr(_0x53a9c8, 'style', _0x43f719), _0x53a9c8.style.visibility = _0x35bfff;
      }
    },
    'resizeOffset': function (_0x3feb8f, _0xf426c8, _0x98384a, _0x5e042e, _0x3aa42c) {
      if (this.JQUERYAVAILABLE) _0x3feb8f.width(_0xf426c8.toFixed(0x2)), _0x3feb8f.height(_0x98384a.toFixed(0x2)), _0x3feb8f.css('left', _0x5e042e), _0x3feb8f.css('top', _0x3aa42c);else {
        var _0x40b981 = _0x3feb8f.style.visibility;
        _0xf426c8 = 'width:' + _0xf426c8.toFixed(0x2) + "px; height:" + _0x98384a.toFixed(0x2) + "px; left: " + _0x5e042e.toFixed(0x2) + "px; top: " + _0x3aa42c.toFixed(0x2) + 'px;', this.attr(_0x3feb8f, 'style', _0xf426c8), _0x3feb8f.style.visibility = _0x40b981;
      }
    },
    'css': function (_0x588495, _0x5488be) {
      if (this.JQUERYAVAILABLE) _0x588495.css(_0x5488be);else {
        var _0xfe013c = '',
          _0x113b20;
        for (_0x113b20 in _0x5488be) _0xfe013c += _0x113b20 + ':' + _0x5488be[_0x113b20] + ';';
        this.attr(_0x588495, 'style', _0xfe013c);
      }
    },
    'getOffsets': function (_0x4fce3e) {
      return this.JQUERYAVAILABLE ? (_0x4fce3e = _0x4fce3e.offset(), {
        'left': _0x4fce3e.left,
        'top': _0x4fce3e.top
      }) : {
        'left': _0x4fce3e.offsetLeft,
        'top': _0x4fce3e.offsetTop
      };
    },
    'attr': function (_0x122a67, _0x1487db, _0x5118f4) {
      if ('undefined' === typeof _0x5118f4) return this.JQUERYAVAILABLE ? _0x122a67.attr(_0x1487db) : _0x122a67.getAttribute(_0x1487db);
      this.JQUERYAVAILABLE ? _0x122a67.attr(_0x1487db, _0x5118f4) : _0x122a67.setAttribute(_0x1487db, _0x5118f4);
    },
    'show': function (_0x4ea0fc) {
      _0x4ea0fc && 'undefined' !== typeof _0x4ea0fc && (this.JQUERYAVAILABLE ? (_0x4ea0fc.show(), _0x4ea0fc.css('visibility', 'visible')) : _0x4ea0fc && (_0x4ea0fc.style ? _0x4ea0fc.style.visibility = 'visible' : _0x4ea0fc[0x0] && (_0x4ea0fc[0x0].style.visibility = 'visible')));
    },
    'hide': function (_0x3c60e6) {
      _0x3c60e6 && 'undefined' !== typeof _0x3c60e6 && (this.JQUERYAVAILABLE ? (_0x3c60e6.hide(), _0x3c60e6.css('visibility', 'hidden')) : _0x3c60e6 && (_0x3c60e6.style ? _0x3c60e6.style.visibility = 'hidden' : _0x3c60e6[0x0] && (_0x3c60e6[0x0].style.visibility = 'hidden')));
    },
    'getQueryVariable': function (_0x745070) {
      for (var _0x432d9 = window.location.search.substring(0x1).split('&'), _0x516d08 = 0x0; _0x516d08 < _0x432d9.length; _0x516d08++) {
        var _0x581524 = _0x432d9[_0x516d08].match(/([^=]+?)=(.+)/);
        if (_0x581524 && decodeURIComponent(_0x581524[0x1]) == _0x745070) return decodeURIComponent(_0x581524[0x2]);
      }
    },
    'forcedDeviceDetection': function () {
      var _0x3a8ccf = this.getQueryVariable('device');
      if (_0x3a8ccf) switch (_0x3a8ccf) {
        case 'mobile':
          console.log("serving mobile version ..."), ig.ua.mobile = !0x0;
          break;
        case 'desktop':
          console.log("serving desktop version ..."), ig.ua.mobile = !0x1;
          break;
        default:
          console.log("serving universal version ...");
      } else console.log("serving universal version ...");
    },
    'forcedDeviceRotation': function () {
      var _0xc2cbfb = this.getQueryVariable('force-rotate');
      if (_0xc2cbfb) switch (_0xc2cbfb) {
        case 'portrait':
          console.log("force rotate to portrait"), window.orientation = 0x0;
          break;
        case 'landscape':
          console.log("force rotate to horizontal"), window.orientation = 0x5a;
          break;
        default:
          alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0x0;
      }
    },
    'setZIndex': function (_0x16b4fe, _0x5c4b34) {
      this.JQUERYAVAILABLE ? _0x16b4fe.css('zIndex', _0x5c4b34) : _0x16b4fe && (_0x16b4fe.style ? _0x16b4fe.style.zIndex = _0x5c4b34 : _0x16b4fe[0x0] && (_0x16b4fe[0x0].style.zIndex = _0x5c4b34));
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.howler-player').defines(function () {
  HowlerPlayer = ig.Class.extend({
    'VERSION': '1.0.2',
    'tagName': 'HowlerPlayer',
    'isMuted': !0x1,
    'soundList': {},
    'init': function (_0x46c87b) {
      for (var _0x318ff8 in _0x46c87b) {
        var _0x420a0f = _0x46c87b[_0x318ff8];
        this.soundList[_0x318ff8] = new Howl({
          'src': ['media/audio/' + _0x420a0f.path + '.mp3'],
          'loop': !!_0x420a0f.loop,
          'onend': function () {
            this.seekId = 0x0;
          }
        });
      }
    },
    'play': function (_0x264f4d) {
      if (!this.isMuted && (_0x264f4d = 'string' === typeof _0x264f4d ? this.soundList[_0x264f4d] : _0x264f4d, !_0x264f4d._loop || !_0x264f4d.playing())) _0x264f4d.playId = _0x264f4d.play();
    },
    'stop': function (_0x4eaaa2) {
      _0x4eaaa2 = 'string' === typeof _0x4eaaa2 ? this.soundList[_0x4eaaa2] : _0x4eaaa2, _0x4eaaa2.playing() && (_0x4eaaa2.stop(), _0x4eaaa2.seekId = 0x0);
    },
    'pause': function (_0x241dd0) {
      _0x241dd0 = 'string' === typeof _0x241dd0 ? this.soundList[_0x241dd0] : _0x241dd0, _0x241dd0.pause(_0x241dd0.playId), _0x241dd0.seekId = _0x241dd0.seek(_0x241dd0.playId);
    },
    'resume': function (_0x362dfb) {
      _0x362dfb = 'string' === typeof _0x362dfb ? this.soundList[_0x362dfb] : _0x362dfb, _0x362dfb.play(_0x362dfb.playId), _0x362dfb.seek(_0x362dfb.seekId, _0x362dfb.playId);
    },
    'mute': function (_0x5a352b) {
      _0x5a352b || (this.isMuted = !0x0);
      for (var _0x4f972c in this.soundList) this.soundList[_0x4f972c].playing() && this.pause(_0x4f972c);
    },
    'unmute': function (_0xe80f4f) {
      _0xe80f4f || (this.isMuted = !0x1);
      if (!this.isMuted) {
        for (var _0x22eeda in this.soundList) sound = this.soundList[_0x22eeda], 0x0 < sound.seekId && this.resume(_0x22eeda);
      }
    },
    'volume': function (_0x535121) {
      if ('number' !== typeof _0x535121) console.warn("Argument needs to be a number!");else {
        _0x535121 = _0x535121.limit(0x0, 0x1);
        for (var _0x58f63a in this.soundList) this.soundList[_0x58f63a].volume(_0x535121);
      }
    },
    'getVolume': function () {
      for (var _0x51e720 in this.soundList) return this.soundList[_0x51e720].volume();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.sound-info').defines(function () {
  SoundInfo = ig.Class.extend({
    'sfx': {
      'logosplash1': {
        'path': 'opening/logosplash1'
      },
      'logosplash2': {
        'path': 'opening/logosplash2'
      },
      'buttonClick': {
        'path': 'button-click'
      },
      'playerKO': {
        'path': 'pain_echo'
      },
      'punchNormal': {
        'path': 'button_swing'
      },
      'punchRage': {
        'path': 'basic_whoosh'
      },
      'knockOut1': {
        'path': 'e_punched_1'
      },
      'knockOut2': {
        'path': 'e_punched_2'
      },
      'knockOut3': {
        'path': 'e_punched_3'
      },
      'knockOut4': {
        'path': 'e_punched_4'
      },
      'powerUp': {
        'path': 'powerup_main'
      },
      'scoreCount': {
        'path': 'score_count'
      },
      'highScore': {
        'path': 'bass_boom'
      },
      'boxingBell': {
        'path': 'boxing_bell'
      }
    },
    'bgm': {
      'background': {
        'path': 'fighting1',
        'loop': !0x0
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.sound-handler').requires('plugins.audio.howler-player', 'plugins.audio.sound-info').defines(function () {
  ig.SoundHandler = ig.Class.extend({
    'bgmPlayer': null,
    'sfxPlayer': null,
    'soundInfo': new SoundInfo(),
    'init': function () {
      Howler.autoSuspend = !0x1, this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx), this.bgmPlayer = new HowlerPlayer(this.soundInfo.bgm);
    },
    'unlockWebAudio': function () {},
    'muteSFX': function (_0x599f64) {
      this.sfxPlayer && this.sfxPlayer.mute(_0x599f64);
    },
    'muteBGM': function (_0x366984) {
      this.bgmPlayer && this.bgmPlayer.mute(_0x366984);
    },
    'unmuteSFX': function (_0x83a13a) {
      this.sfxPlayer && ig.game && (ig.game.sessionData.sfx || ig.game.sessionData.sound) && this.sfxPlayer.unmute(_0x83a13a);
    },
    'unmuteBGM': function (_0x488360) {
      if (this.bgmPlayer && ig.game && (ig.game.sessionData.bgm || ig.game.sessionData.music)) this.bgmPlayer.unmute(_0x488360), !_0x488360 && Howler._audioUnlocked && this.bgmPlayer.play('background');
    },
    'muteAll': function (_0x29c788) {
      this.muteSFX(_0x29c788), this.muteBGM(_0x29c788);
    },
    'unmuteAll': function (_0x2ac35c) {
      this.unmuteSFX(_0x2ac35c), this.unmuteBGM(_0x2ac35c);
    },
    'forceMuteAll': function () {
      this.muteAll(!0x0);
    },
    'forceUnMuteAll': function () {
      this.unmuteAll(!0x0);
    },
    'forceLoopBGM': function () {},
    'onSystemPause': function () {},
    'onSystemResume': function () {},
    'getSFX': function (_0x2da43b) {
      return this.sfxPlayer.soundList[_0x2da43b];
    },
    'getBGM': function () {
      return this.bgmPlayer.soundList.background;
    },
    'sfxPlaying': function (_0x3c9328) {
      return this.getSFX(_0x3c9328).playing();
    },
    'bgmPlaying': function () {
      return this.getBGM().playing();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.visibility-handler').requires('plugins.audio.sound-handler').defines(function () {
  ig.VisibilityHandler = ig.Class.extend({
    'version': '1.2.3',
    'config': {
      'muteOnBlur': !0x0,
      'pauseOnBlur': !0x0,
      'clearInputStateOnPause': !0x1,
      'clearInputStateOnResume': !0x0,
      'allowResumeWithoutFocus': {
        'desktop': !0x0,
        'mobile': {
          'kaios': !0x1,
          'default': !0x0
        }
      },
      'handlerDelay': {
        'desktop': 0x0,
        'mobile': {
          'kaios': 0x0,
          'default': 0x0
        }
      },
      'autoFocusOnResume': {
        'desktop': !0x0,
        'mobile': {
          'kaios': !0x1,
          'default': !0x0
        }
      },
      'autoFocusAfterResume': {
        'desktop': !0x0,
        'mobile': {
          'kaios': !0x1,
          'default': !0x0
        }
      }
    },
    'browserPrefixes': ['o', 'ms', 'moz', 'webkit'],
    'activeOverlays': [],
    'browserPrefix': null,
    'hiddenPropertyName': null,
    'visibilityEventName': null,
    'visibilityStateName': null,
    'isShowingOverlay': !0x1,
    'isFocused': !0x1,
    'isPaused': !0x1,
    'init': function () {
      this.initVisibilityHandler(), this.initFocusHandler(), this.initPageTransitionHandler(), ig.visibilityHandler = this;
    },
    'pauseHandler': function () {
      !0x0 === this.config.clearInputStateOnPause && this.clearAllInputState(), !0x0 === this.config.pauseOnBlur && ('undefined' !== typeof wgl && null !== wgl && null !== wgl.system && 'undefined' !== typeof wgl.system && 'function' === typeof wgl.system.stopRender && wgl.system.stopRender(), 'undefined' !== typeof ig.game && null !== ig.game && 'undefined' !== typeof ig.game.pauseGame && ig.game.pauseGame()), !0x0 === this.config.muteOnBlur && 'undefined' !== typeof ig.soundHandler && null !== ig.soundHandler && 'function' === typeof ig.soundHandler.forceMuteAll && ig.soundHandler.forceMuteAll();
    },
    'resumeHandler': function () {
      'undefined' !== typeof ig.game && null !== ig.game && ('undefined' !== typeof ig.game.resumeGame && ig.game.resumeGame(), 'undefined' !== typeof wgl && null !== wgl && null !== wgl.system && 'undefined' !== typeof wgl.system && 'function' === typeof wgl.system.startRender && wgl.system.startRender()), 'undefined' !== typeof ig.soundHandler && null !== ig.soundHandler && 'function' === typeof ig.soundHandler.forceUnMuteAll && ig.soundHandler.forceUnMuteAll(), !0x0 === this.config.clearInputStateOnResume && this.clearAllInputState();
    },
    'initVisibilityHandler': function () {
      this.browserPrefix = this.getBrowserPrefix(), this.hiddenPropertyName = this.getHiddenPropertyName(this.browserPrefix), this.visibilityEventName = this.getVisibilityEventName(this.browserPrefix), this.visibilityStateName = this.getVisibilityStateName(this.browserPrefix), this.visibilityEventName && document.addEventListener(this.visibilityEventName, this.onChange.bind(this), !0x0);
    },
    'initFocusHandler': function () {
      window.addEventListener('blur', this.onChange.bind(this), !0x0), document.addEventListener('blur', this.onChange.bind(this), !0x0), document.addEventListener('focusout', this.onChange.bind(this), !0x0), window.addEventListener('focus', this.onChange.bind(this), !0x0), document.addEventListener('focus', this.onChange.bind(this), !0x0), document.addEventListener('focusin', this.onChange.bind(this), !0x0);
    },
    'initPageTransitionHandler': function () {
      window.addEventListener('pagehide', this.onChange.bind(this), !0x0), window.addEventListener('pageshow', this.onChange.bind(this), !0x0);
    },
    'getBrowserPrefix': function () {
      var _0x3763dc = null;
      return this.browserPrefixes.forEach(function (_0x1c4186) {
        if (this.getHiddenPropertyName(_0x1c4186) in document) return _0x3763dc = _0x1c4186;
      }.bind(this)), _0x3763dc;
    },
    'getHiddenPropertyName': function (_0x335612) {
      return _0x335612 ? _0x335612 + 'Hidden' : 'hidden';
    },
    'getVisibilityEventName': function (_0x10e598) {
      return (_0x10e598 ? _0x10e598 : '') + 'visibilitychange';
    },
    'getVisibilityStateName': function (_0x10df37) {
      return _0x10df37 ? _0x10df37 + 'VisibilityState' : 'visibilityState';
    },
    'hasView': function () {
      return !(document[this.hiddenPropertyName] || 'visible' !== document[this.visibilityStateName]);
    },
    'hasFocus': function () {
      return document.hasFocus() || this.isFocused;
    },
    'addActiveOverlay': function (_0x11f41d) {
      if (null === this.activeOverlays || 'undefined' === typeof this.activeOverlays) this.activeOverlays = [];
      null === _0x11f41d || 'undefined' === typeof _0x11f41d || !0x0 !== this.activeOverlays.includes(_0x11f41d) && this.activeOverlays.push(_0x11f41d);
    },
    'removeActiveOverlay': function (_0x3be3dd) {
      if (null === this.activeOverlays || 'undefined' === typeof this.activeOverlays) this.activeOverlays = [];
      0x0 >= this.activeOverlays.length || null === _0x3be3dd || 'undefined' === typeof _0x3be3dd || !0x0 === this.activeOverlays.includes(_0x3be3dd) && this.activeOverlays.splice(this.activeOverlays.indexOf(_0x3be3dd), 0x1);
    },
    'onOverlayShow': function (_0x5ce96d) {
      null !== _0x5ce96d && 'undefined' !== typeof _0x5ce96d && this.addActiveOverlay(_0x5ce96d), 0x0 < this.activeOverlays.length && (this.systemPaused(), this.isShowingOverlay = !0x0);
    },
    'onOverlayHide': function (_0x297079) {
      null !== _0x297079 && 'undefined' !== typeof _0x297079 && this.removeActiveOverlay(_0x297079), 0x0 >= this.activeOverlays.length && (this.isShowingOverlay = !0x1, this.systemResumed());
    },
    'systemPaused': function () {
      if (this.isPaused) return !0x1;
      return this.pauseHandler(), this.isPaused = !0x0;
    },
    'systemResumed': function () {
      if (!this.isPaused || !this.hasView() || this.isShowingOverlay) return !0x1;
      if (!this.hasFocus()) {
        if (ig.ua.mobile) {
          if (this.isKaiOS()) {
            if (!this.config.allowResumeWithoutFocus.mobile.kaios) return !0x1;
          } else {
            if (!this.config.allowResumeWithoutFocus.mobile['default']) return !0x1;
          }
        } else {
          if (!this.config.allowResumeWithoutFocus.desktop) return !0x1;
        }
      }
      return this.focusOnResume(), this.resumeHandler(), this.focusAfterResume(), this.isPaused = !0x1, !0x0;
    },
    'clearAllInputState': function () {
      'undefined' !== typeof ig.input && null !== ig.input && ('function' === typeof ig.input.clearAllState && ig.input.clearAllState(), 'function' === typeof ig.input.clearPressed && ig.input.clearPressed(), ig.input.locks = {});
    },
    'isKaiOS': function () {
      return /KAIOS/.test(navigator.userAgent) || !0x1;
    },
    'focusOnResume': function () {
      var _0x4ec70c = !0x1,
        _0x4ec70c = ig.ua.mobile ? this.isKaiOS() ? this.config.autoFocusOnResume.mobile.kaios : this.config.autoFocusOnResume.mobile['default'] : this.config.autoFocusOnResume.desktop;
      this.focus(_0x4ec70c);
    },
    'focusAfterResume': function () {
      var _0x5afb6a = !0x1,
        _0x5afb6a = ig.ua.mobile ? this.isKaiOS() ? this.config.autoFocusAfterResume.mobile.kaios : this.config.autoFocusAfterResume.mobile['default'] : this.config.autoFocusAfterResume.desktop;
      this.focus(_0x5afb6a);
    },
    'focus': function (_0x5eea88) {
      window.focus && _0x5eea88 && (document.activeElement && 'function' === typeof document.activeElement.blur && document.activeElement.blur(), window.focus());
    },
    'handleDelayedEvent': function (_0xff131b) {
      if (!this.hasView() || 'pause' === _0xff131b.type || 'pageHide' === _0xff131b.type || 'blur' === _0xff131b.type || 'focusout' === _0xff131b.type) {
        if ('blur' === _0xff131b.type || 'focusout' === _0xff131b.type) {
          var _0x4f8919 = _0xff131b.path || _0xff131b.composedPath && _0xff131b.composedPath();
          if (_0x4f8919 && 0x2 < _0x4f8919.length || _0xff131b.srcElement && ('INPUT' === _0xff131b.srcElement.tagName || 'TEXTAREA' === _0xff131b.srcElement.tagName)) return !0x1;
          this.isFocused = !0x1;
        }
        return this.systemPaused(_0xff131b);
      }
      if ('focus' === _0xff131b.type || 'focusin' === _0xff131b.type) this.isFocused = !0x0;
      return this.systemResumed(_0xff131b);
    },
    'startDelayedEventHandler': function (_0xe857e2) {
      ig.ua.mobile ? this.isKaiOS() ? 0x0 < this.config.handlerDelay.mobile.kaios ? window.setTimeout(function (_0x99149c) {
        this.handleDelayedEvent(_0x99149c);
      }.bind(this, _0xe857e2), this.config.handlerDelay.mobile) : this.handleDelayedEvent(_0xe857e2) : 0x0 < this.config.handlerDelay.mobile['default'] ? window.setTimeout(function (_0x3c7a16) {
        this.handleDelayedEvent(_0x3c7a16);
      }.bind(this, _0xe857e2), this.config.handlerDelay.mobile) : this.handleDelayedEvent(_0xe857e2) : 0x0 < this.config.handlerDelay.desktop ? window.setTimeout(function (_0x30882f) {
        this.handleDelayedEvent(_0x30882f);
      }.bind(this, _0xe857e2), this.config.handlerDelay.desktop) : this.handleDelayedEvent(_0xe857e2);
    },
    'onChange': function (_0x5e56f3) {
      this.startDelayedEventHandler(_0x5e56f3);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.size-handler').requires('plugins.data.vector', 'plugins.handlers.visibility-handler').defines(function () {
  ig.SizeHandler = ig.Class.extend({
    'portraitMode': !0x0,
    'disableStretchToFitOnMobileFlag': !0x0,
    'enableStretchToFitOnAntiPortraitModeFlag': !0x0,
    'enableScalingLimitsOnMobileFlag': !0x1,
    'minScalingOnMobile': 0x0,
    'maxScalingOnMobile': 0x1,
    'enableStretchToFitOnDesktopFlag': !0x1,
    'enableScalingLimitsOnDesktopFlag': !0x1,
    'minScalingOnDesktop': 0x0,
    'maxScalingOnDesktop': 0x1,
    'desktop': {
      'actualSize': new Vector2(window.innerWidth, window.innerHeight),
      'actualResolution': new Vector2(0x3c0, 0x21c)
    },
    'mobile': {
      'actualSize': new Vector2(window.innerWidth, window.innerHeight),
      'actualResolution': new Vector2(0x21c, 0x3c0)
    },
    'windowSize': new Vector2(window.innerWidth, window.innerHeight),
    'scaleRatioMultiplier': new Vector2(0x1, 0x1),
    'sizeRatio': new Vector2(0x1, 0x1),
    'scale': 0x1,
    'domHandler': null,
    'dynamicClickableEntityDivs': {},
    'coreDivsToResize': ['#canvas', '#play', '#orientate'],
    'adsToResize': {
      'MobileAdInGamePreroll': {
        'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 0x14
      },
      'MobileAdInGameEnd': {
        'box-width': _SETTINGS.Ad.Mobile.End.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.End.Height + 0x14
      },
      'MobileAdInGamePreroll2': {
        'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 0x14
      },
      'MobileAdInGameEnd2': {
        'box-width': _SETTINGS.Ad.Mobile.End.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.End.Height + 0x14
      },
      'MobileAdInGamePreroll3': {
        'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 0x14
      },
      'MobileAdInGameEnd3': {
        'box-width': _SETTINGS.Ad.Mobile.End.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.End.Height + 0x14
      }
    },
    'init': function (_0x2cf9c5) {
      this.domHandler = _0x2cf9c5;
      if ('undefined' === typeof _0x2cf9c5) throw "undefined Dom Handler for Size Handler";
      this.sizeCalcs(), this.eventListenerSetup(), this.samsungFix();
    },
    'sizeCalcs': function () {
      this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
      if (ig.ua.mobile) {
        this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
        var _0x325db3 = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
        this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / _0x325db3.x, this.mobile.actualSize.y / _0x325db3.y);
        if (this.disableStretchToFitOnMobileFlag) {
          var _0x59529f = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
          this.enableScalingLimitsOnMobileFlag && (_0x59529f = _0x59529f.limit(this.minScalingOnMobile, this.maxScalingOnMobile)), this.mobile.actualSize.x = _0x325db3.x * _0x59529f, this.mobile.actualSize.y = _0x325db3.y * _0x59529f, this.scaleRatioMultiplier.x = _0x59529f, this.scaleRatioMultiplier.y = _0x59529f;
        } else this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 0x1, this.scaleRatioMultiplier.y = 0x1;
      } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), _0x325db3 = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / _0x325db3.x, this.desktop.actualSize.y / _0x325db3.y), this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 0x1, this.scaleRatioMultiplier.y = 0x1) : (_0x59529f = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag && (_0x59529f = _0x59529f.limit(this.minScalingOnDesktop, this.maxScalingOnDesktop)), this.desktop.actualSize.x = _0x325db3.x * _0x59529f, this.desktop.actualSize.y = _0x325db3.y * _0x59529f, this.scaleRatioMultiplier.x = _0x59529f, this.scaleRatioMultiplier.y = _0x59529f);
    },
    'resizeLayers': function () {
      for (var _0xe40f3e = 0x0; _0xe40f3e < this.coreDivsToResize.length; _0xe40f3e++) {
        var _0xc3b6ed = ig.domHandler.getElementById(this.coreDivsToResize[_0xe40f3e]);
        if (ig.ua.mobile) {
          if (this.disableStretchToFitOnMobileFlag) {
            var _0x162f62 = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - ig.sizeHandler.mobile.actualSize.x / 0x2),
              _0x418b63 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - ig.sizeHandler.mobile.actualSize.y / 0x2);
            0x0 > _0x162f62 && (_0x162f62 = 0x0), 0x0 > _0x418b63 && (_0x418b63 = 0x0), ig.domHandler.resizeOffset(_0xc3b6ed, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), _0x162f62, _0x418b63);
            var _0x363c3e = !0x1;
            if (this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) {
              if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(_0xc3b6ed, Math.floor(window.innerWidth), Math.floor(window.innerHeight), 0x0, 0x0);else {
                var _0x363c3e = new Vector2(window.innerWidth / this.mobile.actualResolution.y, window.innerHeight / this.mobile.actualResolution.x),
                  _0x162f62 = Math.min(_0x363c3e.x, _0x363c3e.y),
                  _0x363c3e = this.mobile.actualResolution.y * _0x162f62,
                  _0x38bc64 = this.mobile.actualResolution.x * _0x162f62,
                  _0x162f62 = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - _0x363c3e / 0x2),
                  _0x418b63 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - _0x38bc64 / 0x2);
                0x0 > _0x162f62 && (_0x162f62 = 0x0), 0x0 > _0x418b63 && (_0x418b63 = 0x0), ig.domHandler.resizeOffset(_0xc3b6ed, Math.floor(_0x363c3e), Math.floor(_0x38bc64), _0x162f62, _0x418b63);
              }
            }
          } else ig.domHandler.resize(_0xc3b6ed, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y));
        } else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(_0xc3b6ed, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (_0x162f62 = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - ig.sizeHandler.desktop.actualSize.x / 0x2), _0x418b63 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - ig.sizeHandler.desktop.actualSize.y / 0x2), 0x0 > _0x162f62 && (_0x162f62 = 0x0), 0x0 > _0x418b63 && (_0x418b63 = 0x0), ig.domHandler.resizeOffset(_0xc3b6ed, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), _0x162f62, _0x418b63));
      }
      for (var _0x338dfa in this.adsToResize) _0xe40f3e = ig.domHandler.getElementById('#' + _0x338dfa), _0xc3b6ed = ig.domHandler.getElementById('#' + _0x338dfa + '-Box'), _0x363c3e = (window.innerWidth - this.adsToResize[_0x338dfa]['box-width']) / 0x2 + 'px', _0x162f62 = (window.innerHeight - this.adsToResize[_0x338dfa]['box-height']) / 0x2 + 'px', _0xe40f3e && ig.domHandler.css(_0xe40f3e, {
        'width': window.innerWidth,
        'height': window.innerHeight
      }), _0xc3b6ed && ig.domHandler.css(_0xc3b6ed, {
        'left': _0x363c3e,
        'top': _0x162f62
      });
      _0x363c3e = ig.domHandler.getElementById('#canvas'), _0x418b63 = ig.domHandler.getOffsets(_0x363c3e), _0x363c3e = _0x418b63.left, _0x418b63 = _0x418b63.top, _0xe40f3e = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      for (_0x338dfa in this.dynamicClickableEntityDivs) {
        _0xc3b6ed = ig.domHandler.getElementById('#' + _0x338dfa);
        if (ig.ua.mobile) {
          var _0xa0ae65 = this.dynamicClickableEntityDivs[_0x338dfa].entity_pos_x,
            _0x27d158 = this.dynamicClickableEntityDivs[_0x338dfa].entity_pos_y,
            _0x38bc64 = this.dynamicClickableEntityDivs[_0x338dfa].width,
            _0x162f62 = this.dynamicClickableEntityDivs[_0x338dfa].height,
            _0x363c3e = ig.domHandler.getElementById('#canvas'),
            _0x418b63 = ig.domHandler.getOffsets(_0x363c3e),
            _0x363c3e = _0x418b63.left,
            _0x418b63 = _0x418b63.top;
          this.disableStretchToFitOnMobileFlag ? (_0xa0ae65 = Math.floor(_0x363c3e + _0xa0ae65 * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0x27d158 = Math.floor(_0x418b63 + _0x27d158 * ig.sizeHandler.scaleRatioMultiplier.y) + 'px', _0x38bc64 = Math.floor(_0x38bc64 * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0x162f62 = Math.floor(_0x162f62 * ig.sizeHandler.scaleRatioMultiplier.y) + 'px') : (_0xa0ae65 = Math.floor(_0xa0ae65 * ig.sizeHandler.sizeRatio.x) + 'px', _0x27d158 = Math.floor(_0x27d158 * ig.sizeHandler.sizeRatio.y) + 'px', _0x38bc64 = Math.floor(_0x38bc64 * ig.sizeHandler.sizeRatio.x) + 'px', _0x162f62 = Math.floor(_0x162f62 * ig.sizeHandler.sizeRatio.y) + 'px');
        } else _0xa0ae65 = this.dynamicClickableEntityDivs[_0x338dfa].entity_pos_x, _0x27d158 = this.dynamicClickableEntityDivs[_0x338dfa].entity_pos_y, _0x38bc64 = this.dynamicClickableEntityDivs[_0x338dfa].width, _0x162f62 = this.dynamicClickableEntityDivs[_0x338dfa].height, this.enableStretchToFitOnDesktopFlag ? (_0xa0ae65 = Math.floor(_0xa0ae65 * this.sizeRatio.x) + 'px', _0x27d158 = Math.floor(_0x27d158 * this.sizeRatio.y) + 'px', _0x38bc64 = Math.floor(_0x38bc64 * this.sizeRatio.x) + 'px', _0x162f62 = Math.floor(_0x162f62 * this.sizeRatio.y) + 'px') : (_0xa0ae65 = Math.floor(_0x363c3e + _0xa0ae65 * this.scaleRatioMultiplier.x) + 'px', _0x27d158 = Math.floor(_0x418b63 + _0x27d158 * this.scaleRatioMultiplier.y) + 'px', _0x38bc64 = Math.floor(_0x38bc64 * this.scaleRatioMultiplier.x) + 'px', _0x162f62 = Math.floor(_0x162f62 * this.scaleRatioMultiplier.y) + 'px');
        ig.domHandler.css(_0xc3b6ed, {
          'float': 'left',
          'position': 'absolute',
          'left': _0xa0ae65,
          'top': _0x27d158,
          'width': _0x38bc64,
          'height': _0x162f62,
          'z-index': 0x3
        }), this.dynamicClickableEntityDivs[_0x338dfa]['font-size'] && ig.domHandler.css(_0xc3b6ed, {
          'font-size': this.dynamicClickableEntityDivs[_0x338dfa]['font-size'] * _0xe40f3e + 'px'
        });
      }
      $('#ajaxbar').width(this.windowSize.x), $('#ajaxbar').height(this.windowSize.y);
    },
    'resize': function () {
      this.sizeCalcs(), this.resizeLayers();
    },
    'reorient': function () {
      console.log("changing orientation ...");
      if (ig.ua.mobile) {
        var _0x5d9038 = !0x1,
          _0x5d9038 = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
          _0x278f8d = this.domHandler.getElementById('#orientate'),
          _0x1484a3 = this.domHandler.getElementById('#game');
        if (_0x5d9038) {
          if (this.domHandler.show(_0x278f8d), this.domHandler.hide(_0x1484a3), null !== ig.visibilityHandler && 'undefined' !== typeof ig.visibilityHandler && null !== ig.visibilityHandler.onOverlayShow && 'function' === typeof ig.visibilityHandler.onOverlayShow) {
            if (0x1 <= _0x278f8d.length) ig.visibilityHandler.onOverlayShow(_0x278f8d[0x0]);else ig.visibilityHandler.onOverlayShow('orientate');
          }
        } else {
          if (this.domHandler.show(_0x1484a3), this.domHandler.hide(_0x278f8d), null !== ig.visibilityHandler && 'undefined' !== typeof ig.visibilityHandler && null !== ig.visibilityHandler.onOverlayHide && 'function' === typeof ig.visibilityHandler.onOverlayHide) {
            if (0x1 <= _0x278f8d.length) ig.visibilityHandler.onOverlayHide(_0x278f8d[0x0]);else ig.visibilityHandler.onOverlayHide('orientate');
          }
        }
      }
      ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize();
    },
    'resizeAds': function () {
      for (var _0x4c2581 in this.adsToResize) {
        var _0xb423ac = ig.domHandler.getElementById('#' + _0x4c2581),
          _0x4b803d = ig.domHandler.getElementById('#' + _0x4c2581 + '-Box'),
          _0x402d98 = (window.innerWidth - this.adsToResize[_0x4c2581]['box-width']) / 0x2 + 'px',
          _0x396a5c = (window.innerHeight - this.adsToResize[_0x4c2581]['box-height']) / 0x2 + 'px';
        _0xb423ac && ig.domHandler.css(_0xb423ac, {
          'width': window.innerWidth,
          'height': window.innerHeight
        }), _0x4b803d && ig.domHandler.css(_0x4b803d, {
          'left': _0x402d98,
          'top': _0x396a5c
        });
      }
    },
    'samsungFix': function () {
      ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf('Android') + 0x8, navigator.userAgent.indexOf('Android') + 0xb))) && !(0x0 > navigator.userAgent.indexOf('GT')) && !(0x0 < navigator.userAgent.indexOf('Chrome')) && !(0x0 < navigator.userAgent.indexOf('Firefox')) && (document.addEventListener('touchstart', function (_0x2efa23) {
        return _0x2efa23.preventDefault(), !0x1;
      }, !0x1), document.addEventListener('touchmove', function (_0x5a60f6) {
        return _0x5a60f6.preventDefault(), !0x1;
      }, !0x1), document.addEventListener('touchend', function (_0x8c09f5) {
        return _0x8c09f5.preventDefault(), !0x1;
      }, !0x1));
    },
    'orientationInterval': null,
    'orientationTimeout': null,
    'orientationHandler': function () {
      this.reorient(), window.scrollTo(0x0, 0x1);
    },
    'orientationDelayHandler': function () {
      null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 0x64)), null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function () {
        this.clearAllIntervals();
      }.bind(this), 0x7d0));
    },
    'clearAllIntervals': function () {
      window.clearInterval(this.orientationInterval), this.orientationInterval = null, window.clearTimeout(this.orientationTimeout), this.orientationTimeout = null;
    },
    'eventListenerSetup': function () {
      ig.ua.iOS ? (window.addEventListener('orientationchange', this.orientationDelayHandler.bind(this)), window.addEventListener('resize', this.orientationDelayHandler.bind(this))) : (window.addEventListener('orientationchange', this.orientationHandler.bind(this)), window.addEventListener('resize', this.orientationHandler.bind(this))), document.addEventListener('touchmove', function (_0x4b54be) {
        window.scrollTo(0x0, 0x1), _0x4b54be.preventDefault();
      }, {
        'passive': !0x1
      }), this.chromePullDownRefreshFix();
    },
    'chromePullDownRefreshFix': function () {
      var _0x20e3dd = window.chrome || navigator.userAgent.match('CriOS'),
        _0x41c7bb = 'ontouchstart' in document.documentElement;
      if (_0x20e3dd && _0x41c7bb) {
        var _0xb49187 = _0x20e3dd = !0x1,
          _0x4908d5 = 0x0,
          _0x3a1eb8 = !0x1;
        try {
          CSS.supports('overscroll-behavior-y', 'contain') && (_0x20e3dd = !0x0);
        } catch (_0x38c200) {}
        try {
          if (_0x20e3dd) return document.body.style.overscrollBehaviorY = 'contain';
        } catch (_0xbcfce2) {}
        _0x20e3dd = document.head || document.body, _0x41c7bb = document.createElement('style'), _0x41c7bb.type = 'text/css', _0x41c7bb.styleSheet ? _0x41c7bb.styleSheet.cssText = "\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    " : _0x41c7bb.appendChild(document.createTextNode("\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    ")), _0x20e3dd.appendChild(_0x41c7bb);
        try {
          addEventListener('test', null, {
            get 'passive'() {
              _0xb49187 = !0x0;
            }
          });
        } catch (_0x10f54b) {}
        document.addEventListener('touchstart', function (_0x355e7b) {
          0x1 === _0x355e7b.touches.length && (_0x4908d5 = _0x355e7b.touches[0x0].clientY, _0x3a1eb8 = 0x0 === window.pageYOffset);
        }, !!_0xb49187 && {
          'passive': !0x0
        }), document.addEventListener('touchmove', function (_0xc2dec5) {
          var _0x4798cf;
          if (_0x4798cf = _0x3a1eb8) {
            _0x3a1eb8 = !0x1, _0x4798cf = _0xc2dec5.touches[0x0].clientY;
            var _0xa9eabd = _0x4798cf - _0x4908d5;
            _0x4798cf = (_0x4908d5 = _0x4798cf, 0x0 < _0xa9eabd);
          }
          if (_0x4798cf) return _0xc2dec5.preventDefault();
        }, !!_0xb49187 && {
          'passive': !0x1
        });
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.api-handler').defines(function () {
  ig.ApiHandler = ig.Class.extend({
    'apiAvailable': {
      'MJSPreroll': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize();
      },
      'MJSHeader': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize();
      },
      'MJSFooter': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize();
      },
      'MJSEnd': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize();
      }
    },
    'run': function (_0x19b58e, _0x204cd5) {
      if (this.apiAvailable[_0x19b58e]) this.apiAvailable[_0x19b58e](_0x204cd5);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.storage').defines(function () {
  ig.Storage = ig.Class.extend({
    'staticInstantiate': function () {
      return !ig.Storage.instance ? null : ig.Storage.instance;
    },
    'init': function () {
      ig.Storage.instance = this;
    },
    'isCapable': function () {
      return 'undefined' !== typeof window.localStorage;
    },
    'isSet': function (_0x2a764b) {
      return null !== this.get(_0x2a764b);
    },
    'initUnset': function (_0x3f3c, _0x57a21b) {
      null === this.get(_0x3f3c) && this.set(_0x3f3c, _0x57a21b);
    },
    'get': function (_0x3fbf93) {
      if (!this.isCapable()) return null;
      try {
        return JSON.parse(localStorage.getItem(_0x3fbf93));
      } catch (_0x3e9d13) {
        return window.localStorage.getItem(_0x3fbf93);
      }
    },
    'getInt': function (_0x2d0bc3) {
      return ~~this.get(_0x2d0bc3);
    },
    'getFloat': function (_0xda26b) {
      return parseFloat(this.get(_0xda26b));
    },
    'getBool': function (_0x5ab4e2) {
      return !!this.get(_0x5ab4e2);
    },
    'key': function (_0x18bae2) {
      return this.isCapable() ? window.localStorage.key(_0x18bae2) : null;
    },
    'set': function (_0x2ff154, _0x12ebba) {
      if (!this.isCapable()) return null;
      try {
        window.localStorage.setItem(_0x2ff154, JSON.stringify(_0x12ebba));
      } catch (_0x1cc622) {
        console.log(_0x1cc622);
      }
    },
    'setHighest': function (_0x1c42e5, _0x27fde8) {
      _0x27fde8 > this.getFloat(_0x1c42e5) && this.set(_0x1c42e5, _0x27fde8);
    },
    'remove': function (_0x10d5f5) {
      if (!this.isCapable()) return null;
      window.localStorage.removeItem(_0x10d5f5);
    },
    'clear': function () {
      if (!this.isCapable()) return null;
      window.localStorage.clear();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.mouse').requires('plugins.data.vector').defines(function () {
  Mouse = ig.Class.extend({
    'pos': new Vector2(0x0, 0x0),
    'bindings': {
      'click': [ig.KEY.MOUSE1]
    },
    'init': function () {
      ig.input.initMouse();
      for (var _0x142f45 in this.bindings) {
        this[_0x142f45] = _0x142f45;
        for (var _0xde6db5 = 0x0; _0xde6db5 < this.bindings[_0x142f45].length; _0xde6db5++) ig.input.bind(this.bindings[_0x142f45][_0xde6db5], _0x142f45);
      }
    },
    'getLast': function () {
      return this.pos;
    },
    'getPos': function () {
      var _0x225fc8 = ig.system.scale * ((ig.system.canvas.offsetWidth || ig.system.realWidth) / ig.system.realWidth);
      return this.pos.set(ig.input.mouse.x * _0x225fc8 / ig.sizeHandler.sizeRatio.x / ig.sizeHandler.scaleRatioMultiplier.x, ig.input.mouse.y * _0x225fc8 / ig.sizeHandler.sizeRatio.y / ig.sizeHandler.scaleRatioMultiplier.y), this.pos.clone();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.keyboard').defines(function () {
  Keyboard = ig.Class.extend({
    'bindings': {
      'PREVENT_PAGE_SCROLLING_OVER_IFRAME': [ig.KEY.UP_ARROW, ig.KEY.DOWN_ARROW, ig.KEY.LEFT_ARROW, ig.KEY.RIGHT_ARROW, ig.KEY.PAGE_UP, ig.KEY.PAGE_DOWN],
      'up': [ig.KEY.W, ig.KEY.UP_ARROW],
      'right': [ig.KEY.D, ig.KEY.RIGHT_ARROW],
      'left': [ig.KEY.A, ig.KEY.LEFT_ARROW],
      'down': [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
    },
    'init': function () {
      for (var _0x5427cd in this.bindings) {
        this[_0x5427cd] = _0x5427cd;
        for (var _0x68c776 = 0x0; _0x68c776 < this.bindings[_0x5427cd].length; _0x68c776++) ig.input.bind(this.bindings[_0x5427cd][_0x68c776], _0x5427cd);
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.gamepad-input').defines(function () {
  ig.PADKEY = {
    'BUTTON_0': 0x0,
    'PADBUTTON_1': 0x1,
    'BUTTON_2': 0x2,
    'BUTTON_3': 0x3,
    'BUTTON_LEFT_BUMPER': 0x4,
    'BUTTON_RIGHT_BUMPER': 0x5,
    'BUTTON_LEFT_TRIGGER': 0x6,
    'BUTTON_RIGHT_TRIGGER': 0x7,
    'BUTTON_LEFT_JOYSTICK': 0xa,
    'BUTTON_RIGHT_JOYSTICK': 0xb,
    'BUTTON_DPAD_UP': 0xc,
    'BUTTON_DPAD_DOWN': 0xd,
    'BUTTON_DPAD_LEFT': 0xe,
    'BUTTON_DPAD_RIGHT': 0xf,
    'BUTTON_MENU': 0x10,
    'AXIS_LEFT_JOYSTICK_X': 0x0,
    'AXIS_LEFT_JOYSTICK_Y': 0x1,
    'AXIS_RIGHT_JOYSTICK_X': 0x2,
    'AXIS_RIGHT_JOYSTICK_Y': 0x3
  }, ig.GamepadInput = ig.Class.extend({
    'isInit': !0x1,
    'isSupported': !0x1,
    'list': [],
    'bindings': {},
    'states': {},
    'presses': {},
    'releases': {},
    'downLocks': {},
    'upLocks': {},
    'leftStick': {
      'x': 0x0,
      'y': 0x0
    },
    'rightStick': {
      'x': 0x0,
      'y': 0x0
    },
    'start': function () {
      if (!this.isInit) {
        this.isInit = !0x0;
        var _0x16dd26 = navigator.getGamepads || navigator.webkitGetGamepads;
        _0x16dd26 && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads()), this.isSupported = _0x16dd26;
      }
    },
    'isAvailable': function () {
      return this.isInit && this.isSupported;
    },
    'buttonPressed': function (_0x54cc37) {
      return 'object' == typeof _0x54cc37 ? _0x54cc37.pressed : 0x1 == _0x54cc37;
    },
    'buttonDown': function (_0xac276d) {
      if (_0xac276d = this.bindings[_0xac276d]) this.states[_0xac276d] = !0x0, this.downLocks[_0xac276d] || (this.presses[_0xac276d] = !0x0, this.downLocks[_0xac276d] = !0x0);
    },
    'buttonUp': function (_0x11b5ed) {
      if ((_0x11b5ed = this.bindings[_0x11b5ed]) && this.downLocks[_0x11b5ed] && !this.upLocks[_0x11b5ed]) this.states[_0x11b5ed] = !0x1, this.releases[_0x11b5ed] = !0x0, this.upLocks[_0x11b5ed] = !0x0;
    },
    'clearPressed': function () {
      for (var _0x2ff316 in this.releases) this.states[_0x2ff316] = !0x1, this.downLocks[_0x2ff316] = !0x1;
      this.releases = {}, this.presses = {}, this.upLocks = {};
    },
    'bind': function (_0x324c29, _0x44ff0c) {
      this.bindings[_0x324c29] = _0x44ff0c;
    },
    'unbind': function (_0x69e8e8) {
      this.releases[this.bindings[_0x69e8e8]] = !0x0, this.bindings[_0x69e8e8] = null;
    },
    'unbindAll': function () {
      this.bindings = {}, this.states = {}, this.presses = {}, this.releases = {}, this.downLocks = {}, this.upLocks = {};
    },
    'state': function (_0x4ce994) {
      return this.states[_0x4ce994];
    },
    'pressed': function (_0x4f9dd9) {
      return this.presses[_0x4f9dd9];
    },
    'released': function (_0x34c920) {
      return this.releases[_0x34c920];
    },
    'clamp': function (_0x2fb280, _0x9f1590, _0x2bbb24) {
      return _0x2fb280 < _0x9f1590 ? _0x9f1590 : _0x2fb280 > _0x2bbb24 ? _0x2bbb24 : _0x2fb280;
    },
    'pollGamepads': function () {
      if (this.isSupported) {
        this.leftStick.x = 0x0, this.leftStick.y = 0x0, this.rightStick.x = 0x0, this.rightStick.y = 0x0, this.list = navigator.getGamepads();
        for (var _0x5ad621 in this.bindings) {
          for (var _0x82e045 = !0x1, _0x59befe = 0x0; _0x59befe < this.list.length; _0x59befe++) {
            var _0x515583 = this.list[_0x59befe];
            if (_0x515583 && _0x515583.buttons && this.buttonPressed(_0x515583.buttons[_0x5ad621])) {
              _0x82e045 = !0x0;
              break;
            }
          }
          _0x82e045 ? this.buttonDown(_0x5ad621) : this.buttonUp(_0x5ad621);
        }
        for (_0x59befe = 0x0; _0x59befe < this.list.length; _0x59befe++) if ((_0x515583 = this.list[_0x59befe]) && _0x515583.axes) {
          _0x5ad621 = _0x515583.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
          var _0x82e045 = _0x515583.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
            _0x3914d0 = _0x515583.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
            _0x515583 = _0x515583.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
          this.leftStick.x += isNaN(_0x5ad621) ? 0x0 : _0x5ad621, this.leftStick.y += isNaN(_0x82e045) ? 0x0 : _0x82e045, this.rightStick.x += isNaN(_0x3914d0) ? 0x0 : _0x3914d0, this.rightStick.y += isNaN(_0x515583) ? 0x0 : _0x515583;
        }
        0x0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -0x1, 0x1), this.leftStick.y = this.clamp(this.leftStick.y, -0x1, 0x1), this.rightStick.x = this.clamp(this.rightStick.x, -0x1, 0x1), this.rightStick.y = this.clamp(this.rightStick.y, -0x1, 0x1));
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.gamepad').requires('plugins.io.gamepad-input').defines(function () {
  Gamepad = ig.Class.extend({
    'bindings': {
      'padJump': [ig.PADKEY.BUTTON_0]
    },
    'init': function () {
      ig.gamepadInput.start();
      for (var _0x57cc32 in this.bindings) for (var _0x4f10d3 = 0x0; _0x4f10d3 < this.bindings[_0x57cc32].length; _0x4f10d3++) ig.gamepadInput.bind(this.bindings[_0x57cc32][_0x4f10d3], _0x57cc32);
    },
    'press': function () {},
    'held': function () {},
    'release': function () {}
  });
}), ig.baked = !0x0, ig.module('plugins.io.multitouch').defines(function () {
  Multitouch = ig.Class.extend({
    'init': function () {
      ig.multitouchInput.start();
    },
    'getTouchesPos': function () {
      if (ig.ua.mobile) {
        if (0x0 < ig.multitouchInput.touches.length) {
          for (var _0x432c79 = [], _0x345f02 = 0x0; _0x345f02 < ig.multitouchInput.touches.length; _0x345f02++) {
            var _0x2039f0 = ig.multitouchInput.touches[_0x345f02];
            _0x432c79.push({
              'x': _0x2039f0.x,
              'y': _0x2039f0.y
            });
          }
          return _0x432c79;
        }
        return null;
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.multitouch-input').defines(function () {
  ig.MultitouchInput = ig.Class.extend({
    'isStart': !0x1,
    'touches': [],
    'multitouchCapable': !0x1,
    'lastEventUp': null,
    'start': function () {
      this.isStart || (this.isStart = !0x0, navigator.maxTouchPoints && 0x1 < navigator.maxTouchPoints && (this.multitouchCapable = !0x0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener('MSPointerDown', this.touchdown.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerUp', this.touchup.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerMove', this.touchmove.bind(this), !0x1), ig.system.canvas.style.msContentZooming = 'none', ig.system.canvas.style.msTouchAction = 'none'), ig.system.canvas.addEventListener('touchstart', this.touchdown.bind(this), !0x1), ig.system.canvas.addEventListener('touchend', this.touchup.bind(this), !0x1), ig.system.canvas.addEventListener('touchmove', this.touchmove.bind(this), !0x1)));
    },
    'touchmove': function (_0x422b8c) {
      if (ig.ua.touchDevice) {
        var _0x5dc872 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
          _0x475d8b = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
          _0x5dc872 = ig.system.scale * (_0x5dc872 / ig.system.realWidth),
          _0x475d8b = ig.system.scale * (_0x475d8b / ig.system.realHeight);
        if (_0x422b8c.touches) {
          for (; 0x0 < this.touches.length;) this.touches.pop();
          !this.multitouchCapable && 0x1 < _0x422b8c.touches.length && (this.multitouchCapable = !0x0);
          var _0x5c8e4f = {
            'left': 0x0,
            'top': 0x0
          };
          ig.system.canvas.getBoundingClientRect && (_0x5c8e4f = ig.system.canvas.getBoundingClientRect());
          for (var _0x1f3bd1 = 0x0; _0x1f3bd1 < _0x422b8c.touches.length; _0x1f3bd1++) {
            var _0x3d6971 = _0x422b8c.touches[_0x1f3bd1];
            _0x3d6971 && this.touches.push({
              'x': (_0x3d6971.clientX - _0x5c8e4f.left) / _0x5dc872,
              'y': (_0x3d6971.clientY - _0x5c8e4f.top) / _0x475d8b
            });
          }
        } else this.windowMove(_0x422b8c);
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x4e16f4) {}
    },
    'touchdown': function (_0x340b5c) {
      var _0x4210f7 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x184245 = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        _0x4210f7 = ig.system.scale * (_0x4210f7 / ig.system.realWidth),
        _0x184245 = ig.system.scale * (_0x184245 / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) this.windowKeyDown(_0x340b5c);else {
        if (ig.ua.touchDevice && _0x340b5c.touches) {
          for (; 0x0 < this.touches.length;) this.touches.pop();
          !this.multitouchCapable && 0x1 < _0x340b5c.touches.length && (this.multitouchCapable = !0x0);
          var _0x236196 = {
            'left': 0x0,
            'top': 0x0
          };
          ig.system.canvas.getBoundingClientRect && (_0x236196 = ig.system.canvas.getBoundingClientRect());
          for (var _0x4e2644 = 0x0; _0x4e2644 < _0x340b5c.touches.length; _0x4e2644++) {
            var _0x28e229 = _0x340b5c.touches[_0x4e2644];
            _0x28e229 && this.touches.push({
              'x': (_0x28e229.clientX - _0x236196.left) / _0x4210f7,
              'y': (_0x28e229.clientY - _0x236196.top) / _0x184245
            });
          }
        }
      }
    },
    'touchup': function (_0x1cb146) {
      var _0x24e9b3 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      parseInt(ig.system.canvas.offsetHeight), _0x24e9b3 = ig.system.scale * (_0x24e9b3 / ig.system.realWidth);
      if (window.navigator.msPointerEnabled) this.windowKeyUp(_0x1cb146);else {
        this.lastEventUp = _0x1cb146;
        var _0x5e5da9 = {
          'left': 0x0,
          'top': 0x0
        };
        ig.system.canvas.getBoundingClientRect && (_0x5e5da9 = ig.system.canvas.getBoundingClientRect());
        if (ig.ua.touchDevice) {
          _0x1cb146 = (_0x1cb146.changedTouches[0x0].clientX - _0x5e5da9.left) / _0x24e9b3;
          for (_0x24e9b3 = 0x0; _0x24e9b3 < this.touches.length; _0x24e9b3++) this.touches[_0x24e9b3].x >= _0x1cb146 - 0x28 && this.touches[_0x24e9b3].x <= _0x1cb146 + 0x28 && this.touches.splice(_0x24e9b3, 0x1);
        }
      }
      if (ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x50bce2) {}
    },
    'windowKeyDown': function (_0x2274c5) {
      var _0x5b4de6 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x3a6f0b = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        _0x5b4de6 = ig.system.scale * (_0x5b4de6 / ig.system.realWidth),
        _0x3a6f0b = ig.system.scale * (_0x3a6f0b / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) {
        var _0x546b5c = {
          'left': 0x0,
          'top': 0x0
        };
        ig.system.canvas.getBoundingClientRect && (_0x546b5c = ig.system.canvas.getBoundingClientRect()), _0x2274c5 = _0x2274c5.changedTouches ? _0x2274c5.changedTouches : [_0x2274c5];
        for (var _0x1fc010 = 0x0; _0x1fc010 < _0x2274c5.length; ++_0x1fc010) {
          for (var _0x32e7cd = _0x2274c5[_0x1fc010], _0x5e09f2 = 'undefined' != typeof _0x32e7cd.identifier ? _0x32e7cd.identifier : 'undefined' != typeof _0x32e7cd.pointerId ? _0x32e7cd.pointerId : 0x1, _0x22f016 = (_0x32e7cd.clientX - _0x546b5c.left) / _0x5b4de6, _0x32e7cd = (_0x32e7cd.clientY - _0x546b5c.top) / _0x3a6f0b, _0x47a817 = 0x0; _0x47a817 < this.touches.length; ++_0x47a817) this.touches[_0x47a817].identifier == _0x5e09f2 && this.touches.splice(_0x47a817, 0x1);
          this.touches.push({
            'x': _0x22f016,
            'y': _0x32e7cd,
            'identifier': _0x5e09f2
          });
        }
        for (_0x5b4de6 = 0x0; _0x5b4de6 < this.touches.length; _0x5b4de6++);
      }
    },
    'windowKeyUp': function (_0x4f4345) {
      _0x4f4345 = 'undefined' != typeof _0x4f4345.identifier ? _0x4f4345.identifier : 'undefined' != typeof _0x4f4345.pointerId ? _0x4f4345.pointerId : 0x1;
      for (var _0x17660d = 0x0; _0x17660d < this.touches.length; ++_0x17660d) this.touches[_0x17660d].identifier == _0x4f4345 && this.touches.splice(_0x17660d, 0x1);
      for (; 0x0 < this.touches.length;) this.touches.pop();
      if (ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x272663) {}
    },
    'windowMove': function (_0x16547d) {
      var _0x4b3dad = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x49a316 = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        _0x4b3dad = ig.system.scale * (_0x4b3dad / ig.system.realWidth),
        _0x49a316 = ig.system.scale * (_0x49a316 / ig.system.realHeight),
        _0x28c2c6 = {
          'left': 0x0,
          'top': 0x0
        };
      ig.system.canvas.getBoundingClientRect && (_0x28c2c6 = ig.system.canvas.getBoundingClientRect());
      if (window.navigator.msPointerEnabled) {
        for (var _0x8e7c57 = 'undefined' != typeof _0x16547d.identifier ? _0x16547d.identifier : 'undefined' != typeof _0x16547d.pointerId ? _0x16547d.pointerId : 0x1, _0xaca077 = 0x0; _0xaca077 < this.touches.length; ++_0xaca077) if (this.touches[_0xaca077].identifier == _0x8e7c57) {
          var _0xf8af1a = (_0x16547d.clientY - _0x28c2c6.top) / _0x49a316;
          this.touches[_0xaca077].x = (_0x16547d.clientX - _0x28c2c6.left) / _0x4b3dad, this.touches[_0xaca077].y = _0xf8af1a;
        }
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x47ea61) {}
    },
    'clear': function () {
      for (var _0xe50789 = 0x0; _0xe50789 < this.released.length; ++_0xe50789) this.released[_0xe50789] && (this.released.splice(_0xe50789, 0x1), _0xe50789--);
    },
    'pollMultitouch': function (_0x3caf7e) {
      !this.multitouchCapable && 0x1 < _0x3caf7e && (this.multitouchCapable = !0x0);
    },
    'spliceFromArray': function (_0x2e2707, _0xe60973) {
      for (var _0x4974ba = 0x0; _0x4974ba < _0xe60973.length; _0x4974ba++) for (var _0x369b8a = 0x0; _0x369b8a < _0x2e2707.length; _0x369b8a++) _0x2e2707[_0x369b8a].identifier === _0xe60973[_0x4974ba].identifier && (_0x2e2707.splice(_0x369b8a, 0x1), _0x369b8a--);
    },
    'updateSizeProperties': function () {
      var _0x3eb525 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x194826 = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
      this.scaleX = ig.system.scale * (_0x3eb525 / ig.system.realWidth), this.scaleY = ig.system.scale * (_0x194826 / ig.system.realHeight);
    },
    'upgrade': function (_0x36095b, _0x5748be, _0x109c0d) {
      var _0x400616 = {
        'left': 0x0,
        'top': 0x0
      };
      ig.system.canvas.getBoundingClientRect && (_0x400616 = ig.system.canvas.getBoundingClientRect());
      for (var _0xb686fa = (_0x109c0d.clientX - _0x400616.left) / this.scaleX, _0x400616 = (_0x109c0d.clientY - _0x400616.top) / this.scaleY, _0x325c6e = 0x0; _0x325c6e < _0x36095b.length; _0x325c6e++) if (void 0x0 !== typeof _0x36095b[_0x325c6e].identifier && void 0x0 !== typeof _0x109c0d.identifier && _0x109c0d.identifier === _0x36095b[_0x325c6e].identifier) {
        _0x36095b.splice(_0x325c6e, 0x1), _0x5748be.push({
          'identifier': _0x109c0d.identifier,
          'x': _0xb686fa,
          'y': _0x400616
        });
        break;
      }
    },
    'updateArray': function (_0x43b786, _0x1fd1d1) {
      var _0x16ac86 = {
        'left': 0x0,
        'top': 0x0
      };
      ig.system.canvas.getBoundingClientRect && (_0x16ac86 = ig.system.canvas.getBoundingClientRect());
      for (var _0x53a8b9 = (_0x1fd1d1.clientX - _0x16ac86.left) / this.scaleX, _0x16ac86 = (_0x1fd1d1.clientY - _0x16ac86.top) / this.scaleY, _0x286f62 = 0x0; _0x286f62 < _0x43b786.length; _0x286f62++) if (void 0x0 !== typeof _0x43b786[_0x286f62].identifier && void 0x0 !== typeof _0x1fd1d1.identifier && _0x1fd1d1.identifier === _0x43b786[_0x286f62].identifier) {
        _0x43b786[_0x286f62].x = _0x53a8b9, _0x43b786[_0x286f62].y = _0x16ac86;
        break;
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.fake-storage').requires('impact.game').defines(function () {
  ig.FakeStorage = ig.Class.extend({
    'tempData': {},
    'init': function () {
      ig.FakeStorage.instance = this;
    },
    'initUnset': function (_0x1ed0d7, _0x437503) {
      null === this.get(_0x1ed0d7) && this.set(_0x1ed0d7, _0x437503);
    },
    'set': function (_0x139bfb, _0x558649) {
      this.tempData[_0x139bfb] = JSON.stringify(_0x558649);
    },
    'setItem': function (_0x5e0b53, _0x54e374) {
      this.tempData[_0x5e0b53] = JSON.stringify(_0x54e374);
    },
    'setHighest': function (_0x3da24c, _0x1dd5db) {
      _0x1dd5db > this.getFloat(_0x3da24c) && this.set(_0x3da24c, _0x1dd5db);
    },
    'get': function (_0x166808) {
      return 'undefined' == typeof this.tempData[_0x166808] ? null : JSON.parse(this.tempData[_0x166808]);
    },
    'getItem': function (_0x45ff74) {
      return 'undefined' == typeof this.tempData[_0x45ff74] ? null : JSON.parse(this.tempData[_0x45ff74]);
    },
    'getInt': function (_0x32446c) {
      return ~~this.get(_0x32446c);
    },
    'getFloat': function (_0x45a673) {
      return parseFloat(this.get(_0x45a673));
    },
    'getBool': function (_0x2bc5) {
      return !!this.get(_0x2bc5);
    },
    'isSet': function (_0x44ef40) {
      return null !== this.get(_0x44ef40);
    },
    'remove': function (_0x7f42cf) {
      delete this.tempData[_0x7f42cf];
    },
    'removeItem': function (_0x56f3e6) {
      delete this.tempData[_0x56f3e6];
    },
    'clear': function () {
      this.tempData = {};
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.io-manager').requires('plugins.io.storage', 'plugins.io.mouse', 'plugins.io.keyboard', 'plugins.io.gamepad', 'plugins.io.multitouch', 'plugins.io.multitouch-input', 'plugins.io.gamepad-input', 'plugins.io.fake-storage').defines(function () {
  IoManager = ig.Class.extend({
    'version': '1.0.0',
    'storage': null,
    'localStorageSupport': !0x1,
    'mouse': null,
    'keyboard': null,
    'multitouch': null,
    'gamepad': null,
    'init': function () {
      ig.multitouchInput = new ig.MultitouchInput(), ig.gamepadInput = new ig.GamepadInput(), this.unbindAll(), this.initStorage(), this.initMouse(), this.initKeyboard();
    },
    'unbindAll': function () {
      ig.input.unbindAll(), ig.gamepadInput.unbindAll();
    },
    'initStorage': function () {
      try {
        window.localStorage.setItem('test', 'test'), window.localStorage.removeItem('test'), this.storage = new ig.Storage();
      } catch (_0x4ea473) {
        console.log("using fake storage"), this.storage = new ig.FakeStorage();
      }
    },
    'initMouse': function () {
      this.mouse = new Mouse();
    },
    'initKeyboard': function () {
      this.keyboard = new Keyboard();
    },
    'initMultitouch': function () {
      this.multitouch = new Multitouch();
    },
    'initGamepad': function () {
      this.gamepad = new Gamepad();
    },
    'press': function (_0x5b5c08) {
      return ig.input.pressed(_0x5b5c08) || this.gamepad && this.gamepad.press(_0x5b5c08) ? !0x0 : !0x1;
    },
    'held': function (_0x897d95) {
      return ig.input.state(_0x897d95) || this.gamepad && this.gamepad.state(_0x897d95) ? !0x0 : !0x1;
    },
    'release': function (_0x3e135a) {
      return ig.input.released(_0x3e135a) || this.gamepad && this.gamepad.released(_0x3e135a) ? !0x0 : !0x1;
    },
    'getClickPos': function () {
      return this.mouse.getPos();
    },
    'getLastClickPos': function () {
      return this.mouse.getLast();
    },
    'getTouchesPos': function () {
      return this.multitouch.getTouchesPos();
    },
    'checkOverlap': function (_0x5b1b53, _0x2f64f8, _0x5b0ff6, _0x5077c3, _0x55f240) {
      return _0x5b1b53.x > _0x2f64f8 + _0x5077c3 || _0x5b1b53.x < _0x2f64f8 || _0x5b1b53.y > _0x5b0ff6 + _0x55f240 || _0x5b1b53.y < _0x5b0ff6 ? !0x1 : !0x0;
    },
    'clear': function () {
      ig.multitouchInput.clear();
    },
    '_supportsLocalStorage': function () {
      try {
        return localStorage.setItem('test', 'test'), localStorage.removeItem('test'), this.localStorageSupport = 'localStorage' in window && null !== window.localStorage;
      } catch (_0x395b60) {
        return this.localStorageSupport;
      }
    },
    'storageIsSet': function (_0x2df736) {
      return 'function' === typeof this.storage.isSet ? this.storage.isSet(_0x2df736) : null;
    },
    'storageGet': function (_0x3574b7) {
      return 'function' === typeof this.storage.get ? this.storage.get(_0x3574b7) : null;
    },
    'storageSet': function (_0x4d169e, _0x4f26c2) {
      return 'function' === typeof this.storage.set ? this.storage.set(_0x4d169e, _0x4f26c2) : null;
    },
    'assert': function (_0x390c9e, _0x5f1503, _0x31d935) {
      if (_0x5f1503 !== _0x31d935) throw 'actualValue:' + _0x5f1503 + " not equal to testValue:" + _0x31d935 + " at " + _0x390c9e;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.secure-ls').requires('plugins.io.fake-storage').defines(function () {
  (function () {
    var _0x26bda6 = function () {
      var _0x5db129 = [function (_0x3f02ee, _0x51b387, _0x1e09b8) {
          function _0x520880(_0x2d878a) {
            return _0x2d878a && _0x2d878a.__esModule ? _0x2d878a : {
              'default': _0x2d878a
            };
          }
          Object.defineProperty(_0x51b387, '__esModule', {
            'value': !0x0
          });
          var _0xf8ee85 = _0x1e09b8(0x1),
            _0x35ccd6 = _0x520880(_0xf8ee85),
            _0xf8ee85 = _0x1e09b8(0x2),
            _0x4911ed = _0x520880(_0xf8ee85),
            _0xf8ee85 = _0x1e09b8(0x8),
            _0x59ddbd = _0x520880(_0xf8ee85),
            _0xf8ee85 = _0x1e09b8(0x9),
            _0x457c6b = _0x520880(_0xf8ee85),
            _0xf8ee85 = _0x1e09b8(0xa),
            _0x245e22 = _0x520880(_0xf8ee85),
            _0xf8ee85 = _0x1e09b8(0xb),
            _0x544571 = _0x520880(_0xf8ee85),
            _0xf8ee85 = _0x1e09b8(0x10),
            _0x19fee9 = _0x520880(_0xf8ee85),
            _0xf8ee85 = _0x1e09b8(0x11),
            _0x38d828 = _0x520880(_0xf8ee85);
          _0x1e09b8 = _0x1e09b8(0x12);
          var _0x77349 = _0x520880(_0x1e09b8),
            _0x5346e3 = function (_0x371882) {
              if (!(this instanceof _0x5346e3)) throw new TypeError("Cannot call a class as a function");
              _0x371882 = _0x371882 || {}, this._name = 'secure-ls', this.utils = _0x35ccd6['default'], this.constants = _0x4911ed['default'], this.Base64 = _0x457c6b['default'], this.LZString = _0x245e22['default'], this.AES = _0x544571['default'], this.DES = _0x19fee9['default'], this.RABBIT = _0x38d828['default'], this.RC4 = _0x77349['default'], this.enc = _0x59ddbd['default'], this.config = {
                'isCompression': !0x0,
                'encodingType': _0x4911ed['default'].EncrytionTypes.BASE64,
                'encryptionSecret': _0x371882.encryptionSecret,
                'encryptionNamespace': _0x371882.encryptionNamespace
              }, this.config.isCompression = 'undefined' == typeof _0x371882.isCompression || _0x371882.isCompression, this.config.encodingType = 'undefined' != typeof _0x371882.encodingType || '' === _0x371882.encodingType ? _0x371882.encodingType.toLowerCase() : _0x4911ed['default'].EncrytionTypes.BASE64;
              try {
                window.localStorage.setItem('test', 'test'), window.localStorage.removeItem('test'), this.ls = localStorage;
              } catch (_0x3166e2) {
                this.ls = new ig.FakeStorage();
              }
              this.init();
            };
          _0x1e09b8 = [{
            'key': 'init',
            'value': function () {
              var _0x1895a5 = this.getMetaData();
              this.WarningEnum = this.constants.WarningEnum, this.WarningTypes = this.constants.WarningTypes, this.EncrytionTypes = this.constants.EncrytionTypes, this._isBase64 = this._isBase64EncryptionType(), this._isAES = this._isAESEncryptionType(), this._isDES = this._isDESEncryptionType(), this._isRabbit = this._isRabbitEncryptionType(), this._isRC4 = this._isRC4EncryptionType(), this._isCompression = this._isDataCompressionEnabled(), this.utils.allKeys = _0x1895a5.keys || this.resetAllKeys();
            }
          }, {
            'key': '_isBase64EncryptionType',
            'value': function () {
              return _0x457c6b['default'] && ('undefined' == typeof this.config.encodingType || this.config.encodingType === this.constants.EncrytionTypes.BASE64);
            }
          }, {
            'key': '_isAESEncryptionType',
            'value': function () {
              return _0x544571['default'] && this.config.encodingType === this.constants.EncrytionTypes.AES;
            }
          }, {
            'key': '_isDESEncryptionType',
            'value': function () {
              return _0x19fee9['default'] && this.config.encodingType === this.constants.EncrytionTypes.DES;
            }
          }, {
            'key': '_isRabbitEncryptionType',
            'value': function () {
              return _0x38d828['default'] && this.config.encodingType === this.constants.EncrytionTypes.RABBIT;
            }
          }, {
            'key': '_isRC4EncryptionType',
            'value': function () {
              return _0x77349['default'] && this.config.encodingType === this.constants.EncrytionTypes.RC4;
            }
          }, {
            'key': '_isDataCompressionEnabled',
            'value': function () {
              return this.config.isCompression;
            }
          }, {
            'key': 'getEncryptionSecret',
            'value': function (_0x851b44) {
              var _0x20c4f7 = this.getMetaData();
              (_0x851b44 = this.utils.getObjectFromKey(_0x20c4f7.keys, _0x851b44)) && (this._isAES || this._isDES || this._isRabbit || this._isRC4) && ('undefined' == typeof this.config.encryptionSecret ? (this.utils.encryptionSecret = _0x851b44.s, this.utils.encryptionSecret || (this.utils.encryptionSecret = this.utils.generateSecretKey(), this.setMetaData())) : this.utils.encryptionSecret = this.config.encryptionSecret || _0x851b44.s || '');
            }
          }, {
            'key': 'get',
            'value': function (_0x5c9f8d, _0x3c29c0) {
              var _0x2182e4 = '',
                _0x342565 = '',
                _0x4112c5 = void 0x0,
                _0x470756 = void 0x0,
                _0x2182e4 = void 0x0;
              if (!this.utils.is(_0x5c9f8d)) return this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED), _0x342565;
              if (_0x2182e4 = this.getDataFromLocalStorage(_0x5c9f8d), !_0x2182e4) return _0x342565;
              _0x4112c5 = _0x2182e4, (this._isCompression || _0x3c29c0) && (_0x4112c5 = _0x245e22['default'].decompressFromUTF16(_0x2182e4)), _0x2182e4 = _0x4112c5, this._isBase64 || _0x3c29c0 ? _0x2182e4 = _0x457c6b['default'].decode(_0x4112c5) : (this.getEncryptionSecret(_0x5c9f8d), this._isAES ? _0x470756 = _0x544571['default'].decrypt(_0x4112c5.toString(), this.utils.encryptionSecret) : this._isDES ? _0x470756 = _0x19fee9['default'].decrypt(_0x4112c5.toString(), this.utils.encryptionSecret) : this._isRabbit ? _0x470756 = _0x38d828['default'].decrypt(_0x4112c5.toString(), this.utils.encryptionSecret) : this._isRC4 && (_0x470756 = _0x77349['default'].decrypt(_0x4112c5.toString(), this.utils.encryptionSecret)), _0x470756 && (_0x2182e4 = _0x470756.toString(_0x59ddbd['default']._Utf8)));
              try {
                _0x342565 = JSON.parse(_0x2182e4);
              } catch (_0xb1aa8b) {
                throw Error("Could not parse JSON");
              }
              return _0x342565;
            }
          }, {
            'key': 'getDataFromLocalStorage',
            'value': function (_0x46dddb) {
              return this.ls.getItem(_0x46dddb, !0x0);
            }
          }, {
            'key': 'getAllKeys',
            'value': function () {
              var _0x4d6ea2 = this.getMetaData();
              return this.utils.extractKeyNames(_0x4d6ea2) || [];
            }
          }, {
            'key': 'set',
            'value': function (_0x49b6f1, _0x5797f3) {
              var _0x3656fa = '';
              return this.utils.is(_0x49b6f1) ? (this.getEncryptionSecret(_0x49b6f1), String(_0x49b6f1) !== String(this.utils.metaKey) && (this.utils.isKeyPresent(_0x49b6f1) || (this.utils.addToKeysList(_0x49b6f1), this.setMetaData())), _0x3656fa = this.processData(_0x5797f3), void this.setDataToLocalStorage(_0x49b6f1, _0x3656fa)) : void this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED);
            }
          }, {
            'key': 'setDataToLocalStorage',
            'value': function (_0x5819fb, _0x232673) {
              this.ls.setItem(_0x5819fb, _0x232673);
            }
          }, {
            'key': 'remove',
            'value': function (_0xb07b09) {
              return this.utils.is(_0xb07b09) ? _0xb07b09 === this.utils.metaKey && this.getAllKeys().length ? void this.utils.warn(this.WarningEnum.META_KEY_REMOVE) : (this.utils.isKeyPresent(_0xb07b09) && (this.utils.removeFromKeysList(_0xb07b09), this.setMetaData()), void this.ls.removeItem(_0xb07b09)) : void this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED);
            }
          }, {
            'key': 'removeAll',
            'value': function () {
              for (var _0x44f356 = void 0x0, _0x135bb9 = void 0x0, _0x44f356 = this.getAllKeys(), _0x135bb9 = 0x0; _0x135bb9 < _0x44f356.length; _0x135bb9++) this.ls.removeItem(_0x44f356[_0x135bb9]);
              this.ls.removeItem(this.utils.metaKey), this.resetAllKeys();
            }
          }, {
            'key': 'clear',
            'value': function () {
              this.ls.clear(), this.resetAllKeys();
            }
          }, {
            'key': 'resetAllKeys',
            'value': function () {
              return this.utils.allKeys = [], [];
            }
          }, {
            'key': 'processData',
            'value': function (_0x3374dd, _0x30f64c) {
              if (null === _0x3374dd || void 0x0 === _0x3374dd || '' === _0x3374dd) return '';
              var _0xe0375b = void 0x0,
                _0x44540f = void 0x0,
                _0x4b3898 = void 0x0;
              try {
                _0xe0375b = JSON.stringify(_0x3374dd);
              } catch (_0x4be535) {
                throw Error("Could not stringify data.");
              }
              return _0x44540f = _0xe0375b, this._isBase64 || _0x30f64c ? _0x44540f = _0x457c6b['default'].encode(_0xe0375b) : (this._isAES ? _0x44540f = _0x544571['default'].encrypt(_0xe0375b, this.utils.encryptionSecret) : this._isDES ? _0x44540f = _0x19fee9['default'].encrypt(_0xe0375b, this.utils.encryptionSecret) : this._isRabbit ? _0x44540f = _0x38d828['default'].encrypt(_0xe0375b, this.utils.encryptionSecret) : this._isRC4 && (_0x44540f = _0x77349['default'].encrypt(_0xe0375b, this.utils.encryptionSecret)), _0x44540f = _0x44540f && _0x44540f.toString()), _0x4b3898 = _0x44540f, (this._isCompression || _0x30f64c) && (_0x4b3898 = _0x245e22['default'].compressToUTF16(_0x44540f)), _0x4b3898;
            }
          }, {
            'key': 'setMetaData',
            'value': function () {
              var _0x2792f5 = this.processData({
                'keys': this.utils.allKeys
              }, !0x0);
              this.setDataToLocalStorage(this.getMetaKey(), _0x2792f5);
            }
          }, {
            'key': 'getMetaData',
            'value': function () {
              return this.get(this.getMetaKey(), !0x0) || {};
            }
          }, {
            'key': 'getMetaKey',
            'value': function () {
              return this.utils.metaKey + (this.config.encryptionNamespace ? '__' + this.config.encryptionNamespace : '');
            }
          }];
          for (var _0xf8ee85 = _0x5346e3.prototype, _0x2e818b = 0x0; _0x2e818b < _0x1e09b8.length; _0x2e818b++) {
            var _0x59fcbf = _0x1e09b8[_0x2e818b];
            _0x59fcbf.enumerable = _0x59fcbf.enumerable || !0x1, _0x59fcbf.configurable = !0x0, 'value' in _0x59fcbf && (_0x59fcbf.writable = !0x0), Object.defineProperty(_0xf8ee85, _0x59fcbf.key, _0x59fcbf);
          }
          _0x51b387['default'] = _0x5346e3, _0x3f02ee.exports = _0x51b387['default'];
        }, function (_0x26cc0f, _0x33c327, _0x451060) {
          function _0x445979(_0xc12cb3) {
            return _0xc12cb3 && _0xc12cb3.__esModule ? _0xc12cb3 : {
              'default': _0xc12cb3
            };
          }
          _0x33c327 = _0x451060(0x2);
          var _0x4856c1 = _0x445979(_0x33c327);
          _0x33c327 = _0x451060(0x3);
          var _0x5701fd = _0x445979(_0x33c327);
          _0x451060 = _0x451060(0x4);
          var _0x30b74c = _0x445979(_0x451060);
          _0x26cc0f.exports = {
            'metaKey': '_secure__ls__metadata',
            'encryptionSecret': '',
            'secretPhrase': 's3cr3t$#@135^&*246',
            'allKeys': [],
            'is': function (_0x2d0a55) {
              return !!_0x2d0a55;
            },
            'warn': function (_0x33bbb3) {
              _0x33bbb3 = _0x33bbb3 ? _0x33bbb3 : _0x4856c1['default'].WarningEnum.DEFAULT_TEXT, console.warn(_0x4856c1['default'].WarningTypes[_0x33bbb3]);
            },
            'generateSecretKey': function () {
              var _0x30724c = _0x5701fd['default'].random(0x10);
              return (_0x30724c = (0x0, _0x30b74c['default'])(this.secretPhrase, _0x30724c, {
                'keySize': 0x4
              })) && _0x30724c.toString();
            },
            'getObjectFromKey': function (_0x12ed74, _0x43d9c4) {
              if (!_0x12ed74 || !_0x12ed74.length) return {};
              for (var _0x536082 = void 0x0, _0x266fd9 = {}, _0x536082 = 0x0; _0x536082 < _0x12ed74.length; _0x536082++) if (_0x12ed74[_0x536082].k === _0x43d9c4) {
                _0x266fd9 = _0x12ed74[_0x536082];
                break;
              }
              return _0x266fd9;
            },
            'extractKeyNames': function (_0x3741d1) {
              return _0x3741d1 && _0x3741d1.keys && _0x3741d1.keys.length ? _0x3741d1.keys.map(function (_0x2a7225) {
                return _0x2a7225.k;
              }) : [];
            },
            'getAllKeys': function () {
              return this.allKeys;
            },
            'isKeyPresent': function (_0x42c7e7) {
              for (var _0x3e27cd = !0x1, _0x4cce93 = 0x0; _0x4cce93 < this.allKeys.length; _0x4cce93++) if (String(this.allKeys[_0x4cce93].k) === String(_0x42c7e7)) {
                _0x3e27cd = !0x0;
                break;
              }
              return _0x3e27cd;
            },
            'addToKeysList': function (_0x2a9e36) {
              this.allKeys.push({
                'k': _0x2a9e36,
                's': this.encryptionSecret
              });
            },
            'removeFromKeysList': function (_0xf4f0c4) {
              for (var _0x189e41 = void 0x0, _0x1b4ddd = -0x1, _0x189e41 = 0x0; _0x189e41 < this.allKeys.length; _0x189e41++) if (this.allKeys[_0x189e41].k === _0xf4f0c4) {
                _0x1b4ddd = _0x189e41;
                break;
              }
              return -0x1 !== _0x1b4ddd && this.allKeys.splice(_0x1b4ddd, 0x1), _0x1b4ddd;
            }
          };
        }, function (_0x380a06) {
          var _0x31da57 = {
              'KEY_NOT_PROVIDED': 'keyNotProvided',
              'META_KEY_REMOVE': 'metaKeyRemove',
              'DEFAULT_TEXT': 'defaultText'
            },
            _0x24e746 = {};
          _0x24e746[_0x31da57.KEY_NOT_PROVIDED] = "Secure LS: Key not provided. Aborting operation!", _0x24e746[_0x31da57.META_KEY_REMOVE] = "Secure LS: Meta key can not be removed\nunless all keys created by Secure LS are removed!", _0x24e746[_0x31da57.DEFAULT_TEXT] = "Unexpected output", _0x380a06.exports = {
            'WarningEnum': _0x31da57,
            'WarningTypes': _0x24e746,
            'EncrytionTypes': {
              'BASE64': 'base64',
              'AES': 'aes',
              'DES': 'des',
              'RABBIT': 'rabbit',
              'RC4': 'rc4'
            }
          };
        }, function (_0x431c62) {
          _0x431c62.exports = {
            'random': function (_0x29ab04) {
              for (var _0x505cf7, _0x362d43 = [], _0x2e0761 = function (_0xa09b96) {
                  var _0x654ee5 = 0x3ade68b1;
                  return function () {
                    _0x654ee5 = 0x9069 * (0xffff & _0x654ee5) + (_0x654ee5 >> 0x10) & 0xffffffff, _0xa09b96 = 0x4650 * (0xffff & _0xa09b96) + (_0xa09b96 >> 0x10) & 0xffffffff;
                    var _0x4e628d = (_0x654ee5 << 0x10) + _0xa09b96 & 0xffffffff;
                    return _0x4e628d /= 0x100000000, _0x4e628d += 0.5, _0x4e628d * (0.5 < Math.random() ? 0x1 : -0x1);
                  };
                }, _0x4ec7c6 = 0x0; _0x4ec7c6 < _0x29ab04; _0x4ec7c6 += 0x4) {
                var _0x3ae8d8 = _0x2e0761(0x100000000 * (_0x505cf7 || Math.random()));
                _0x505cf7 = 0x3ade67b7 * _0x3ae8d8(), _0x362d43.push(0x100000000 * _0x3ae8d8() | 0x0);
              }
              return new this.Set(_0x362d43, _0x29ab04);
            },
            'Set': function (_0x4d3fe9, _0x35a34e) {
              _0x4d3fe9 = this.words = _0x4d3fe9 || [], void 0x0 !== _0x35a34e ? this.sigBytes = _0x35a34e : this.sigBytes = 0x8 * _0x4d3fe9.length;
            }
          };
        }, function (_0x19c6f1, _0x37961f, _0x4e97c7) {
          _0x37961f = _0x4e97c7(0x5), _0x4e97c7(0x6), _0x4e97c7(0x7);
          var _0xc6460b = _0x37961f.lib;
          _0x4e97c7 = _0xc6460b.Base;
          var _0x3e3a70 = _0xc6460b.WordArray,
            _0xc6460b = _0x37961f.algo,
            _0x140807 = _0xc6460b.HMAC,
            _0x11fdfd = _0xc6460b.PBKDF2 = _0x4e97c7.extend({
              'cfg': _0x4e97c7.extend({
                'keySize': 0x4,
                'hasher': _0xc6460b.SHA1,
                'iterations': 0x1
              }),
              'init': function (_0x45dac6) {
                this.cfg = this.cfg.extend(_0x45dac6);
              },
              'compute': function (_0x551c65, _0x8b28e2) {
                for (var _0x226c84 = this.cfg, _0xcf819b = _0x140807.create(_0x226c84.hasher, _0x551c65), _0x5bfd77 = _0x3e3a70.create(), _0x2791a3 = _0x3e3a70.create([0x1]), _0x355d10 = _0x5bfd77.words, _0x3bc304 = _0x2791a3.words, _0x15b55b = _0x226c84.keySize, _0x226c84 = _0x226c84.iterations; _0x355d10.length < _0x15b55b;) {
                  var _0x29589c = _0xcf819b.update(_0x8b28e2).finalize(_0x2791a3);
                  _0xcf819b.reset();
                  for (var _0x34baf6 = _0x29589c.words, _0x4fc76e = _0x34baf6.length, _0x93cfea = _0x29589c, _0x396b0a = 0x1; _0x396b0a < _0x226c84; _0x396b0a++) {
                    _0x93cfea = _0xcf819b.finalize(_0x93cfea), _0xcf819b.reset();
                    for (var _0x452b6d = _0x93cfea.words, _0x187073 = 0x0; _0x187073 < _0x4fc76e; _0x187073++) _0x34baf6[_0x187073] ^= _0x452b6d[_0x187073];
                  }
                  _0x5bfd77.concat(_0x29589c), _0x3bc304[0x0]++;
                }
                return _0x5bfd77.sigBytes = 0x4 * _0x15b55b, _0x5bfd77;
              }
            });
          _0x37961f.PBKDF2 = function (_0x4b892f, _0x41f38e, _0x310375) {
            return _0x11fdfd.create(_0x310375).compute(_0x4b892f, _0x41f38e);
          }, _0x19c6f1.exports = _0x37961f.PBKDF2, !0x0;
        }, function (_0x4a353b) {
          var _0x57759b;
          if (!_0x57759b) {
            var _0x410dc4 = Math;
            if (!(_0x57759b = Object.create)) {
              var _0xa63d8e = function () {};
              _0x57759b = function (_0x1f86ea) {
                var _0x2f7c4b;
                return _0xa63d8e.prototype = _0x1f86ea, _0x2f7c4b = new _0xa63d8e(), _0xa63d8e.prototype = null, _0x2f7c4b;
              };
            }
            var _0x5ba56c = _0x57759b;
            _0x57759b = {};
            var _0x2b6f5c = _0x57759b.lib = {},
              _0xce4418 = _0x2b6f5c.Base = {
                'extend': function (_0xdc404c) {
                  var _0x33c348 = _0x5ba56c(this);
                  return _0xdc404c && _0x33c348.mixIn(_0xdc404c), _0x33c348.hasOwnProperty('init') && this.init !== _0x33c348.init || (_0x33c348.init = function () {
                    _0x33c348.$super.init.apply(this, arguments);
                  }), _0x33c348.init.prototype = _0x33c348, _0x33c348.$super = this, _0x33c348;
                },
                'create': function () {
                  var _0xbb0099 = this.extend();
                  return _0xbb0099.init.apply(_0xbb0099, arguments), _0xbb0099;
                },
                'init': function () {},
                'mixIn': function (_0x5ec504) {
                  for (var _0x16455a in _0x5ec504) _0x5ec504.hasOwnProperty(_0x16455a) && (this[_0x16455a] = _0x5ec504[_0x16455a]);
                  _0x5ec504.hasOwnProperty('toString') && (this.toString = _0x5ec504.toString);
                },
                'clone': function () {
                  return this.init.prototype.extend(this);
                }
              },
              _0x34270e = _0x2b6f5c.WordArray = _0xce4418.extend({
                'init': function (_0x4422e7, _0x3939ae) {
                  _0x4422e7 = this.words = _0x4422e7 || [], void 0x0 != _0x3939ae ? this.sigBytes = _0x3939ae : this.sigBytes = 0x4 * _0x4422e7.length;
                },
                'toString': function (_0x3fa0c2) {
                  return (_0x3fa0c2 || _0x413572).stringify(this);
                },
                'concat': function (_0x231f97) {
                  var _0x383dde = this.words,
                    _0x1c46ea = _0x231f97.words,
                    _0x5d6dd6 = this.sigBytes;
                  _0x231f97 = _0x231f97.sigBytes;
                  if (this.clamp(), _0x5d6dd6 % 0x4) {
                    for (var _0x2a0c7a = 0x0; _0x2a0c7a < _0x231f97; _0x2a0c7a++) _0x383dde[_0x5d6dd6 + _0x2a0c7a >>> 0x2] |= (_0x1c46ea[_0x2a0c7a >>> 0x2] >>> 0x18 - 0x8 * (_0x2a0c7a % 0x4) & 0xff) << 0x18 - 0x8 * ((_0x5d6dd6 + _0x2a0c7a) % 0x4);
                  } else {
                    for (_0x2a0c7a = 0x0; _0x2a0c7a < _0x231f97; _0x2a0c7a += 0x4) _0x383dde[_0x5d6dd6 + _0x2a0c7a >>> 0x2] = _0x1c46ea[_0x2a0c7a >>> 0x2];
                  }
                  return this.sigBytes += _0x231f97, this;
                },
                'clamp': function () {
                  var _0x215888 = this.words,
                    _0x360dc8 = this.sigBytes;
                  _0x215888[_0x360dc8 >>> 0x2] &= 0xffffffff << 0x20 - 0x8 * (_0x360dc8 % 0x4), _0x215888.length = _0x410dc4.ceil(_0x360dc8 / 0x4);
                },
                'clone': function () {
                  var _0x1aad77 = _0xce4418.clone.call(this);
                  return _0x1aad77.words = this.words.slice(0x0), _0x1aad77;
                },
                'random': function (_0x35c0ae) {
                  for (var _0x9ccfe2, _0x139c60 = [], _0x4881ac = function (_0x3e7b3c) {
                      var _0x5b6229 = 0x3ade68b1;
                      return function () {
                        _0x5b6229 = 0x9069 * (0xffff & _0x5b6229) + (_0x5b6229 >> 0x10) & 0xffffffff, _0x3e7b3c = 0x4650 * (0xffff & _0x3e7b3c) + (_0x3e7b3c >> 0x10) & 0xffffffff;
                        var _0x2f81a3 = (_0x5b6229 << 0x10) + _0x3e7b3c & 0xffffffff;
                        return _0x2f81a3 /= 0x100000000, _0x2f81a3 += 0.5, _0x2f81a3 * (0.5 < _0x410dc4.random() ? 0x1 : -0x1);
                      };
                    }, _0xa4ec7b = 0x0; _0xa4ec7b < _0x35c0ae; _0xa4ec7b += 0x4) {
                    var _0x422dea = _0x4881ac(0x100000000 * (_0x9ccfe2 || _0x410dc4.random()));
                    _0x9ccfe2 = 0x3ade67b7 * _0x422dea(), _0x139c60.push(0x100000000 * _0x422dea() | 0x0);
                  }
                  return new _0x34270e.init(_0x139c60, _0x35c0ae);
                }
              }),
              _0x22d6fb = _0x57759b.enc = {},
              _0x413572 = _0x22d6fb.Hex = {
                'stringify': function (_0x8ec980) {
                  var _0x19f2ee = _0x8ec980.words;
                  _0x8ec980 = _0x8ec980.sigBytes;
                  for (var _0x34c43a = [], _0x4716e6 = 0x0; _0x4716e6 < _0x8ec980; _0x4716e6++) {
                    var _0x128f85 = _0x19f2ee[_0x4716e6 >>> 0x2] >>> 0x18 - 0x8 * (_0x4716e6 % 0x4) & 0xff;
                    _0x34c43a.push((_0x128f85 >>> 0x4).toString(0x10)), _0x34c43a.push((0xf & _0x128f85).toString(0x10));
                  }
                  return _0x34c43a.join('');
                },
                'parse': function (_0x59c5fa) {
                  for (var _0x23a250 = _0x59c5fa.length, _0x28c5c2 = [], _0x1159bc = 0x0; _0x1159bc < _0x23a250; _0x1159bc += 0x2) _0x28c5c2[_0x1159bc >>> 0x3] |= parseInt(_0x59c5fa.substr(_0x1159bc, 0x2), 0x10) << 0x18 - 0x4 * (_0x1159bc % 0x8);
                  return new _0x34270e.init(_0x28c5c2, _0x23a250 / 0x2);
                }
              },
              _0x3360ce = _0x22d6fb.Latin1 = {
                'stringify': function (_0x2cc279) {
                  var _0x334738 = _0x2cc279.words;
                  _0x2cc279 = _0x2cc279.sigBytes;
                  for (var _0x3e86cf = [], _0x25de97 = 0x0; _0x25de97 < _0x2cc279; _0x25de97++) _0x3e86cf.push(String.fromCharCode(_0x334738[_0x25de97 >>> 0x2] >>> 0x18 - 0x8 * (_0x25de97 % 0x4) & 0xff));
                  return _0x3e86cf.join('');
                },
                'parse': function (_0x46cff0) {
                  for (var _0x2f54a4 = _0x46cff0.length, _0x3d2948 = [], _0x349c15 = 0x0; _0x349c15 < _0x2f54a4; _0x349c15++) _0x3d2948[_0x349c15 >>> 0x2] |= (0xff & _0x46cff0.charCodeAt(_0x349c15)) << 0x18 - 0x8 * (_0x349c15 % 0x4);
                  return new _0x34270e.init(_0x3d2948, _0x2f54a4);
                }
              },
              _0x537993 = _0x22d6fb.Utf8 = {
                'stringify': function (_0x49ec50) {
                  try {
                    return decodeURIComponent(escape(_0x3360ce.stringify(_0x49ec50)));
                  } catch (_0x6e2c86) {
                    throw Error("Malformed UTF-8 data");
                  }
                },
                'parse': function (_0x50c668) {
                  return _0x3360ce.parse(unescape(encodeURIComponent(_0x50c668)));
                }
              },
              _0x4248bf = _0x2b6f5c.BufferedBlockAlgorithm = _0xce4418.extend({
                'reset': function () {
                  this._data = new _0x34270e.init(), this._nDataBytes = 0x0;
                },
                '_append': function (_0xe2f798) {
                  'string' == typeof _0xe2f798 && (_0xe2f798 = _0x537993.parse(_0xe2f798)), this._data.concat(_0xe2f798), this._nDataBytes += _0xe2f798.sigBytes;
                },
                '_process': function (_0x465225) {
                  var _0x29cbe5 = this._data,
                    _0x17ed47 = _0x29cbe5.words,
                    _0x1f832a = _0x29cbe5.sigBytes,
                    _0x28205f = this.blockSize,
                    _0x45b7fd = _0x1f832a / (0x4 * _0x28205f),
                    _0x45b7fd = _0x465225 ? _0x410dc4.ceil(_0x45b7fd) : _0x410dc4.max((0x0 | _0x45b7fd) - this._minBufferSize, 0x0);
                  _0x465225 = _0x45b7fd * _0x28205f, _0x1f832a = _0x410dc4.min(0x4 * _0x465225, _0x1f832a);
                  if (_0x465225) {
                    for (var _0x15e9ea = 0x0; _0x15e9ea < _0x465225; _0x15e9ea += _0x28205f) this._doProcessBlock(_0x17ed47, _0x15e9ea);
                    _0x15e9ea = _0x17ed47.splice(0x0, _0x465225), _0x29cbe5.sigBytes -= _0x1f832a;
                  }
                  return new _0x34270e.init(_0x15e9ea, _0x1f832a);
                },
                'clone': function () {
                  var _0x13df48 = _0xce4418.clone.call(this);
                  return _0x13df48._data = this._data.clone(), _0x13df48;
                },
                '_minBufferSize': 0x0
              }),
              _0x46fadb = (_0x2b6f5c.Hasher = _0x4248bf.extend({
                'cfg': _0xce4418.extend(),
                'init': function (_0x530f45) {
                  this.cfg = this.cfg.extend(_0x530f45), this.reset();
                },
                'reset': function () {
                  _0x4248bf.reset.call(this), this._doReset();
                },
                'update': function (_0xe868e4) {
                  return this._append(_0xe868e4), this._process(), this;
                },
                'finalize': function (_0x2d9cde) {
                  return _0x2d9cde && this._append(_0x2d9cde), this._doFinalize();
                },
                'blockSize': 0x10,
                '_createHelper': function (_0x53c72b) {
                  return function (_0x1e156a, _0x47e89a) {
                    return new _0x53c72b.init(_0x47e89a).finalize(_0x1e156a);
                  };
                },
                '_createHmacHelper': function (_0xd93ddb) {
                  return function (_0x34d00d, _0x27b759) {
                    return new _0x46fadb.HMAC.init(_0xd93ddb, _0x27b759).finalize(_0x34d00d);
                  };
                }
              }), _0x57759b.algo = {});
          }
          _0x4a353b.exports = _0x57759b, !0x0;
        }, function (_0x1b3435, _0x4117e2, _0xc50fc) {
          _0x4117e2 = _0xc50fc(0x5), _0xc50fc = _0x4117e2.lib;
          var _0x209302 = _0xc50fc.WordArray,
            _0x23f5db = _0xc50fc.Hasher,
            _0x40d156 = [];
          _0xc50fc = _0x4117e2.algo.SHA1 = _0x23f5db.extend({
            '_doReset': function () {
              this._hash = new _0x209302.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
            },
            '_doProcessBlock': function (_0x87568c, _0x39664a) {
              for (var _0x5da073 = this._hash.words, _0xbb404 = _0x5da073[0x0], _0x3352da = _0x5da073[0x1], _0x228b87 = _0x5da073[0x2], _0x5a4838 = _0x5da073[0x3], _0x38d76b = _0x5da073[0x4], _0x29bd2d = 0x0; 0x50 > _0x29bd2d; _0x29bd2d++) {
                if (0x10 > _0x29bd2d) _0x40d156[_0x29bd2d] = 0x0 | _0x87568c[_0x39664a + _0x29bd2d];else {
                  var _0x4baafe = _0x40d156[_0x29bd2d - 0x3] ^ _0x40d156[_0x29bd2d - 0x8] ^ _0x40d156[_0x29bd2d - 0xe] ^ _0x40d156[_0x29bd2d - 0x10];
                  _0x40d156[_0x29bd2d] = _0x4baafe << 0x1 | _0x4baafe >>> 0x1f;
                }
                _0x4baafe = (_0xbb404 << 0x5 | _0xbb404 >>> 0x1b) + _0x38d76b + _0x40d156[_0x29bd2d], _0x4baafe += 0x14 > _0x29bd2d ? (_0x3352da & _0x228b87 | ~_0x3352da & _0x5a4838) + 0x5a827999 : 0x28 > _0x29bd2d ? (_0x3352da ^ _0x228b87 ^ _0x5a4838) + 0x6ed9eba1 : 0x3c > _0x29bd2d ? (_0x3352da & _0x228b87 | _0x3352da & _0x5a4838 | _0x228b87 & _0x5a4838) - 0x70e44324 : (_0x3352da ^ _0x228b87 ^ _0x5a4838) - 0x359d3e2a, _0x38d76b = _0x5a4838, _0x5a4838 = _0x228b87, _0x228b87 = _0x3352da << 0x1e | _0x3352da >>> 0x2, _0x3352da = _0xbb404, _0xbb404 = _0x4baafe;
              }
              _0x5da073[0x0] = _0x5da073[0x0] + _0xbb404 | 0x0, _0x5da073[0x1] = _0x5da073[0x1] + _0x3352da | 0x0, _0x5da073[0x2] = _0x5da073[0x2] + _0x228b87 | 0x0, _0x5da073[0x3] = _0x5da073[0x3] + _0x5a4838 | 0x0, _0x5da073[0x4] = _0x5da073[0x4] + _0x38d76b | 0x0;
            },
            '_doFinalize': function () {
              var _0x1738c6 = this._data,
                _0x53f5e4 = _0x1738c6.words,
                _0x290fdd = 0x8 * this._nDataBytes,
                _0x2efe7b = 0x8 * _0x1738c6.sigBytes;
              return _0x53f5e4[_0x2efe7b >>> 0x5] |= 0x80 << 0x18 - _0x2efe7b % 0x20, _0x53f5e4[(_0x2efe7b + 0x40 >>> 0x9 << 0x4) + 0xe] = Math.floor(_0x290fdd / 0x100000000), _0x53f5e4[(_0x2efe7b + 0x40 >>> 0x9 << 0x4) + 0xf] = _0x290fdd, _0x1738c6.sigBytes = 0x4 * _0x53f5e4.length, this._process(), this._hash;
            },
            'clone': function () {
              var _0x14189a = _0x23f5db.clone.call(this);
              return _0x14189a._hash = this._hash.clone(), _0x14189a;
            }
          }), _0x4117e2.SHA1 = _0x23f5db._createHelper(_0xc50fc), _0x4117e2.HmacSHA1 = _0x23f5db._createHmacHelper(_0xc50fc), _0x1b3435.exports = _0x4117e2.SHA1, !0x0;
        }, function (_0x32eb83, _0x5dd130, _0x43db80) {
          _0x5dd130 = _0x43db80(0x5);
          var _0x299c62 = _0x5dd130.enc.Utf8;
          _0x5dd130.algo.HMAC = _0x5dd130.lib.Base.extend({
            'init': function (_0x31328f, _0x1543e4) {
              _0x31328f = this._hasher = new _0x31328f.init(), 'string' == typeof _0x1543e4 && (_0x1543e4 = _0x299c62.parse(_0x1543e4));
              var _0x3309f3 = _0x31328f.blockSize,
                _0x2efd0a = 0x4 * _0x3309f3;
              _0x1543e4.sigBytes > _0x2efd0a && (_0x1543e4 = _0x31328f.finalize(_0x1543e4)), _0x1543e4.clamp();
              for (var _0x49074a = this._oKey = _0x1543e4.clone(), _0x3244bf = this._iKey = _0x1543e4.clone(), _0x2328db = _0x49074a.words, _0x18bf78 = _0x3244bf.words, _0xcf2554 = 0x0; _0xcf2554 < _0x3309f3; _0xcf2554++) _0x2328db[_0xcf2554] ^= 0x5c5c5c5c, _0x18bf78[_0xcf2554] ^= 0x36363636;
              _0x49074a.sigBytes = _0x3244bf.sigBytes = _0x2efd0a, this.reset();
            },
            'reset': function () {
              var _0x183438 = this._hasher;
              _0x183438.reset(), _0x183438.update(this._iKey);
            },
            'update': function (_0x342f8d) {
              return this._hasher.update(_0x342f8d), this;
            },
            'finalize': function (_0x5e6c60) {
              var _0x12fac8 = this._hasher;
              return _0x5e6c60 = _0x12fac8.finalize(_0x5e6c60), _0x12fac8.reset(), _0x12fac8.finalize(this._oKey.clone().concat(_0x5e6c60));
            }
          }), !0x0, _0x32eb83.exports = void 0x0, !0x0;
        }, function (_0x2ed55c) {
          var _0x146751 = {
            'Latin1': {
              'stringify': function (_0x2485a1) {
                var _0x5aa47f = _0x2485a1.words;
                _0x2485a1 = _0x2485a1.sigBytes;
                for (var _0x3e3201 = [], _0x54be37 = void 0x0, _0x553766 = void 0x0, _0x54be37 = 0x0; _0x54be37 < _0x2485a1; _0x54be37++) _0x553766 = _0x5aa47f[_0x54be37 >>> 0x2] >>> 0x18 - 0x8 * (_0x54be37 % 0x4) & 0xff, _0x3e3201.push(String.fromCharCode(_0x553766));
                return _0x3e3201.join('');
              }
            },
            '_Utf8': {
              'stringify': function (_0x556c34) {
                try {
                  return decodeURIComponent(escape(_0x146751.Latin1.stringify(_0x556c34)));
                } catch (_0x36e9db) {
                  throw Error("Malformed UTF-8 data");
                }
              }
            }
          };
          _0x2ed55c.exports = _0x146751;
        }, function (_0x8badf4) {
          var _0x5c1dab = {
            '_keyStr': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            'encode': function (_0xca6f18) {
              var _0x184f61 = '',
                _0x1078b2 = void 0x0,
                _0x59ae9e = void 0x0,
                _0x29e78d = void 0x0,
                _0x227356 = void 0x0,
                _0x325697 = void 0x0,
                _0x40ccbd = void 0x0,
                _0x4510e5 = 0x0;
              for (_0xca6f18 = _0x5c1dab._utf8Encode(_0xca6f18); _0x4510e5 < _0xca6f18.length;) _0x1078b2 = _0xca6f18.charCodeAt(_0x4510e5++), _0x59ae9e = _0xca6f18.charCodeAt(_0x4510e5++), _0x29e78d = _0xca6f18.charCodeAt(_0x4510e5++), _0x227356 = _0x1078b2 >> 0x2, _0x1078b2 = (0x3 & _0x1078b2) << 0x4 | _0x59ae9e >> 0x4, _0x325697 = (0xf & _0x59ae9e) << 0x2 | _0x29e78d >> 0x6, _0x40ccbd = 0x3f & _0x29e78d, isNaN(_0x59ae9e) ? _0x325697 = _0x40ccbd = 0x40 : isNaN(_0x29e78d) && (_0x40ccbd = 0x40), _0x184f61 = _0x184f61 + this._keyStr.charAt(_0x227356) + this._keyStr.charAt(_0x1078b2) + this._keyStr.charAt(_0x325697) + this._keyStr.charAt(_0x40ccbd);
              return _0x184f61;
            },
            'decode': function (_0x427777) {
              var _0x49038b = '',
                _0x375956 = void 0x0,
                _0x5ad898 = void 0x0,
                _0x167678 = void 0x0,
                _0x34d10e = void 0x0,
                _0x45ac50 = void 0x0,
                _0x20aa84 = 0x0;
              for (_0x427777 = _0x427777.replace(/[^A-Za-z0-9\+\/\=]/g, ''); _0x20aa84 < _0x427777.length;) _0x375956 = this._keyStr.indexOf(_0x427777.charAt(_0x20aa84++)), _0x5ad898 = this._keyStr.indexOf(_0x427777.charAt(_0x20aa84++)), _0x34d10e = this._keyStr.indexOf(_0x427777.charAt(_0x20aa84++)), _0x45ac50 = this._keyStr.indexOf(_0x427777.charAt(_0x20aa84++)), _0x375956 = _0x375956 << 0x2 | _0x5ad898 >> 0x4, _0x5ad898 = (0xf & _0x5ad898) << 0x4 | _0x34d10e >> 0x2, _0x167678 = (0x3 & _0x34d10e) << 0x6 | _0x45ac50, _0x49038b += String.fromCharCode(_0x375956), 0x40 !== _0x34d10e && (_0x49038b += String.fromCharCode(_0x5ad898)), 0x40 !== _0x45ac50 && (_0x49038b += String.fromCharCode(_0x167678));
              return _0x5c1dab._utf8Decode(_0x49038b);
            },
            '_utf8Encode': function (_0x1e710f) {
              _0x1e710f = _0x1e710f.replace(/\r\n/g, "\n");
              for (var _0x205673 = '', _0x11f53c = 0x0; _0x11f53c < _0x1e710f.length; _0x11f53c++) {
                var _0x2e7f4f = _0x1e710f.charCodeAt(_0x11f53c);
                0x80 > _0x2e7f4f ? _0x205673 += String.fromCharCode(_0x2e7f4f) : 0x7f < _0x2e7f4f && 0x800 > _0x2e7f4f ? (_0x205673 += String.fromCharCode(_0x2e7f4f >> 0x6 | 0xc0), _0x205673 += String.fromCharCode(0x3f & _0x2e7f4f | 0x80)) : (_0x205673 += String.fromCharCode(_0x2e7f4f >> 0xc | 0xe0), _0x205673 += String.fromCharCode(_0x2e7f4f >> 0x6 & 0x3f | 0x80), _0x205673 += String.fromCharCode(0x3f & _0x2e7f4f | 0x80));
              }
              return _0x205673;
            },
            '_utf8Decode': function (_0x7a2882) {
              for (var _0x445f97 = '', _0x3e8453 = 0x0, _0x4e3e70 = void 0x0, _0x2690a9 = void 0x0, _0x59342e = void 0x0, _0x2690a9 = 0x0; _0x3e8453 < _0x7a2882.length;) _0x4e3e70 = _0x7a2882.charCodeAt(_0x3e8453), 0x80 > _0x4e3e70 ? (_0x445f97 += String.fromCharCode(_0x4e3e70), _0x3e8453++) : 0xbf < _0x4e3e70 && 0xe0 > _0x4e3e70 ? (_0x2690a9 = _0x7a2882.charCodeAt(_0x3e8453 + 0x1), _0x445f97 += String.fromCharCode((0x1f & _0x4e3e70) << 0x6 | 0x3f & _0x2690a9), _0x3e8453 += 0x2) : (_0x2690a9 = _0x7a2882.charCodeAt(_0x3e8453 + 0x1), _0x59342e = _0x7a2882.charCodeAt(_0x3e8453 + 0x2), _0x445f97 += String.fromCharCode((0xf & _0x4e3e70) << 0xc | (0x3f & _0x2690a9) << 0x6 | 0x3f & _0x59342e), _0x3e8453 += 0x3);
              return _0x445f97;
            }
          };
          _0x8badf4.exports = _0x5c1dab;
        }, function (_0x11b153, _0x5bcffd, _0x183de3) {
          var _0x1ffecb,
            _0x1980c8 = function (_0x31d97c, _0x50faf2) {
              if (!_0x24399f[_0x31d97c]) {
                _0x24399f[_0x31d97c] = {};
                for (var _0x5b304c = 0x0; _0x5b304c < _0x31d97c.length; _0x5b304c++) _0x24399f[_0x31d97c][_0x31d97c.charAt(_0x5b304c)] = _0x5b304c;
              }
              return _0x24399f[_0x31d97c][_0x50faf2];
            },
            _0x3e6740 = String.fromCharCode,
            _0x24399f = {},
            _0x24b08a = {
              'compressToBase64': function (_0x58b197) {
                if (null == _0x58b197) return '';
                _0x58b197 = _0x24b08a._compress(_0x58b197, 0x6, function (_0x409af4) {
                  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(_0x409af4);
                });
                switch (_0x58b197.length % 0x4) {
                  default:
                  case 0x0:
                    return _0x58b197;
                  case 0x1:
                    return _0x58b197 + '===';
                  case 0x2:
                    return _0x58b197 + '==';
                  case 0x3:
                    return _0x58b197 + '=';
                }
              },
              'decompressFromBase64': function (_0x11d7ab) {
                return null == _0x11d7ab ? '' : '' == _0x11d7ab ? null : _0x24b08a._decompress(_0x11d7ab.length, 0x20, function (_0x311f38) {
                  return _0x1980c8('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', _0x11d7ab.charAt(_0x311f38));
                });
              },
              'compressToUTF16': function (_0x2c7fc3) {
                return null == _0x2c7fc3 ? '' : _0x24b08a._compress(_0x2c7fc3, 0xf, function (_0x124fe6) {
                  return _0x3e6740(_0x124fe6 + 0x20);
                }) + " ";
              },
              'decompressFromUTF16': function (_0x3bda79) {
                return null == _0x3bda79 ? '' : '' == _0x3bda79 ? null : _0x24b08a._decompress(_0x3bda79.length, 0x4000, function (_0x475f89) {
                  return _0x3bda79.charCodeAt(_0x475f89) - 0x20;
                });
              },
              'compressToUint8Array': function (_0x590862) {
                _0x590862 = _0x24b08a.compress(_0x590862);
                for (var _0x1cdf38 = new Uint8Array(0x2 * _0x590862.length), _0x503072 = 0x0, _0x3076cc = _0x590862.length; _0x503072 < _0x3076cc; _0x503072++) {
                  var _0x7a3612 = _0x590862.charCodeAt(_0x503072);
                  _0x1cdf38[0x2 * _0x503072] = _0x7a3612 >>> 0x8, _0x1cdf38[0x2 * _0x503072 + 0x1] = _0x7a3612 % 0x100;
                }
                return _0x1cdf38;
              },
              'decompressFromUint8Array': function (_0x2101c3) {
                if (null === _0x2101c3 || void 0x0 === _0x2101c3) return _0x24b08a.decompress(_0x2101c3);
                for (var _0x138a40 = Array(_0x2101c3.length / 0x2), _0x12c838 = 0x0, _0x6351af = _0x138a40.length; _0x12c838 < _0x6351af; _0x12c838++) _0x138a40[_0x12c838] = 0x100 * _0x2101c3[0x2 * _0x12c838] + _0x2101c3[0x2 * _0x12c838 + 0x1];
                var _0x138e61 = [];
                return _0x138a40.forEach(function (_0x452712) {
                  _0x138e61.push(_0x3e6740(_0x452712));
                }), _0x24b08a.decompress(_0x138e61.join(''));
              },
              'compressToEncodedURIComponent': function (_0x47e950) {
                return null == _0x47e950 ? '' : _0x24b08a._compress(_0x47e950, 0x6, function (_0x5b25a7) {
                  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$'.charAt(_0x5b25a7);
                });
              },
              'decompressFromEncodedURIComponent': function (_0x339af7) {
                return null == _0x339af7 ? '' : '' == _0x339af7 ? null : (_0x339af7 = _0x339af7.replace(/ /g, '+'), _0x24b08a._decompress(_0x339af7.length, 0x20, function (_0x4167f4) {
                  return _0x1980c8('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$', _0x339af7.charAt(_0x4167f4));
                }));
              },
              'compress': function (_0x1befc3) {
                return _0x24b08a._compress(_0x1befc3, 0x10, function (_0x23ece6) {
                  return _0x3e6740(_0x23ece6);
                });
              },
              '_compress': function (_0x4a89ef, _0x25f9cc, _0x3f3b7d) {
                if (null == _0x4a89ef) return '';
                var _0x561f16,
                  _0x262bd5,
                  _0x2f7049,
                  _0x54759a = {},
                  _0x3a1559 = {},
                  _0x450957 = '',
                  _0x3082fc = '',
                  _0x1f99d7 = '',
                  _0x3abd78 = 0x2,
                  _0x110ae3 = 0x3,
                  _0x5dd4b8 = 0x2,
                  _0x2251bc = [],
                  _0x4e030e = 0x0,
                  _0x123623 = 0x0;
                for (_0x2f7049 = 0x0; _0x2f7049 < _0x4a89ef.length; _0x2f7049 += 0x1) if (_0x450957 = _0x4a89ef.charAt(_0x2f7049), Object.prototype.hasOwnProperty.call(_0x54759a, _0x450957) || (_0x54759a[_0x450957] = _0x110ae3++, _0x3a1559[_0x450957] = !0x0), _0x3082fc = _0x1f99d7 + _0x450957, Object.prototype.hasOwnProperty.call(_0x54759a, _0x3082fc)) _0x1f99d7 = _0x3082fc;else {
                  if (Object.prototype.hasOwnProperty.call(_0x3a1559, _0x1f99d7)) {
                    if (0x100 > _0x1f99d7.charCodeAt(0x0)) {
                      for (_0x561f16 = 0x0; _0x561f16 < _0x5dd4b8; _0x561f16++) _0x4e030e <<= 0x1, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++;
                      _0x262bd5 = _0x1f99d7.charCodeAt(0x0);
                      for (_0x561f16 = 0x0; 0x8 > _0x561f16; _0x561f16++) _0x4e030e = _0x4e030e << 0x1 | 0x1 & _0x262bd5, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++, _0x262bd5 >>= 0x1;
                    } else {
                      _0x262bd5 = 0x1;
                      for (_0x561f16 = 0x0; _0x561f16 < _0x5dd4b8; _0x561f16++) _0x4e030e = _0x4e030e << 0x1 | _0x262bd5, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++, _0x262bd5 = 0x0;
                      _0x262bd5 = _0x1f99d7.charCodeAt(0x0);
                      for (_0x561f16 = 0x0; 0x10 > _0x561f16; _0x561f16++) _0x4e030e = _0x4e030e << 0x1 | 0x1 & _0x262bd5, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++, _0x262bd5 >>= 0x1;
                    }
                    _0x3abd78--, 0x0 == _0x3abd78 && (_0x3abd78 = Math.pow(0x2, _0x5dd4b8), _0x5dd4b8++), delete _0x3a1559[_0x1f99d7];
                  } else {
                    _0x262bd5 = _0x54759a[_0x1f99d7];
                    for (_0x561f16 = 0x0; _0x561f16 < _0x5dd4b8; _0x561f16++) _0x4e030e = _0x4e030e << 0x1 | 0x1 & _0x262bd5, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++, _0x262bd5 >>= 0x1;
                  }
                  _0x3abd78--, 0x0 == _0x3abd78 && (_0x3abd78 = Math.pow(0x2, _0x5dd4b8), _0x5dd4b8++), _0x54759a[_0x3082fc] = _0x110ae3++, _0x1f99d7 = String(_0x450957);
                }
                if ('' !== _0x1f99d7) {
                  if (Object.prototype.hasOwnProperty.call(_0x3a1559, _0x1f99d7)) {
                    if (0x100 > _0x1f99d7.charCodeAt(0x0)) {
                      for (_0x561f16 = 0x0; _0x561f16 < _0x5dd4b8; _0x561f16++) _0x4e030e <<= 0x1, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++;
                      _0x262bd5 = _0x1f99d7.charCodeAt(0x0);
                      for (_0x561f16 = 0x0; 0x8 > _0x561f16; _0x561f16++) _0x4e030e = _0x4e030e << 0x1 | 0x1 & _0x262bd5, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++, _0x262bd5 >>= 0x1;
                    } else {
                      _0x262bd5 = 0x1;
                      for (_0x561f16 = 0x0; _0x561f16 < _0x5dd4b8; _0x561f16++) _0x4e030e = _0x4e030e << 0x1 | _0x262bd5, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++, _0x262bd5 = 0x0;
                      _0x262bd5 = _0x1f99d7.charCodeAt(0x0);
                      for (_0x561f16 = 0x0; 0x10 > _0x561f16; _0x561f16++) _0x4e030e = _0x4e030e << 0x1 | 0x1 & _0x262bd5, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++, _0x262bd5 >>= 0x1;
                    }
                    _0x3abd78--, 0x0 == _0x3abd78 && (_0x3abd78 = Math.pow(0x2, _0x5dd4b8), _0x5dd4b8++), delete _0x3a1559[_0x1f99d7];
                  } else {
                    _0x262bd5 = _0x54759a[_0x1f99d7];
                    for (_0x561f16 = 0x0; _0x561f16 < _0x5dd4b8; _0x561f16++) _0x4e030e = _0x4e030e << 0x1 | 0x1 & _0x262bd5, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++, _0x262bd5 >>= 0x1;
                  }
                  _0x3abd78--, 0x0 == _0x3abd78 && (Math.pow(0x2, _0x5dd4b8), _0x5dd4b8++);
                }
                _0x262bd5 = 0x2;
                for (_0x561f16 = 0x0; _0x561f16 < _0x5dd4b8; _0x561f16++) _0x4e030e = _0x4e030e << 0x1 | 0x1 & _0x262bd5, _0x123623 == _0x25f9cc - 0x1 ? (_0x123623 = 0x0, _0x2251bc.push(_0x3f3b7d(_0x4e030e)), _0x4e030e = 0x0) : _0x123623++, _0x262bd5 >>= 0x1;
                for (;;) {
                  if (_0x4e030e <<= 0x1, _0x123623 == _0x25f9cc - 0x1) {
                    _0x2251bc.push(_0x3f3b7d(_0x4e030e));
                    break;
                  }
                  _0x123623++;
                }
                return _0x2251bc.join('');
              },
              'decompress': function (_0x12a404) {
                return null == _0x12a404 ? '' : '' == _0x12a404 ? null : _0x24b08a._decompress(_0x12a404.length, 0x8000, function (_0x3aa8e9) {
                  return _0x12a404.charCodeAt(_0x3aa8e9);
                });
              },
              '_decompress': function (_0x1f6086, _0x100bdd, _0x5aa312) {
                var _0x27a5f7,
                  _0x1c646c,
                  _0xf58791,
                  _0x11b1d0,
                  _0x10a2a6,
                  _0xc1c751,
                  _0x91475a = [],
                  _0x5156b5 = 0x4,
                  _0x442c9b = 0x4,
                  _0x4f03f7 = 0x3,
                  _0x1361fb = [],
                  _0x585293 = _0x5aa312(0x0),
                  _0x248942 = _0x100bdd,
                  _0x2653ff = 0x1;
                for (_0x27a5f7 = 0x0; 0x3 > _0x27a5f7; _0x27a5f7 += 0x1) _0x91475a[_0x27a5f7] = _0x27a5f7;
                _0x1c646c = 0x0, _0x11b1d0 = Math.pow(0x2, 0x2);
                for (_0x10a2a6 = 0x1; _0x10a2a6 != _0x11b1d0;) _0xf58791 = _0x585293 & _0x248942, _0x248942 >>= 0x1, 0x0 == _0x248942 && (_0x248942 = _0x100bdd, _0x585293 = _0x5aa312(_0x2653ff++)), _0x1c646c |= (0x0 < _0xf58791 ? 0x1 : 0x0) * _0x10a2a6, _0x10a2a6 <<= 0x1;
                switch (_0x1c646c) {
                  case 0x0:
                    _0x1c646c = 0x0, _0x11b1d0 = Math.pow(0x2, 0x8);
                    for (_0x10a2a6 = 0x1; _0x10a2a6 != _0x11b1d0;) _0xf58791 = _0x585293 & _0x248942, _0x248942 >>= 0x1, 0x0 == _0x248942 && (_0x248942 = _0x100bdd, _0x585293 = _0x5aa312(_0x2653ff++)), _0x1c646c |= (0x0 < _0xf58791 ? 0x1 : 0x0) * _0x10a2a6, _0x10a2a6 <<= 0x1;
                    _0xc1c751 = _0x3e6740(_0x1c646c);
                    break;
                  case 0x1:
                    _0x1c646c = 0x0, _0x11b1d0 = Math.pow(0x2, 0x10);
                    for (_0x10a2a6 = 0x1; _0x10a2a6 != _0x11b1d0;) _0xf58791 = _0x585293 & _0x248942, _0x248942 >>= 0x1, 0x0 == _0x248942 && (_0x248942 = _0x100bdd, _0x585293 = _0x5aa312(_0x2653ff++)), _0x1c646c |= (0x0 < _0xf58791 ? 0x1 : 0x0) * _0x10a2a6, _0x10a2a6 <<= 0x1;
                    _0xc1c751 = _0x3e6740(_0x1c646c);
                    break;
                  case 0x2:
                    return '';
                }
                _0x27a5f7 = _0x91475a[0x3] = _0xc1c751;
                for (_0x1361fb.push(_0xc1c751);;) {
                  if (_0x2653ff > _0x1f6086) return '';
                  _0x1c646c = 0x0, _0x11b1d0 = Math.pow(0x2, _0x4f03f7);
                  for (_0x10a2a6 = 0x1; _0x10a2a6 != _0x11b1d0;) _0xf58791 = _0x585293 & _0x248942, _0x248942 >>= 0x1, 0x0 == _0x248942 && (_0x248942 = _0x100bdd, _0x585293 = _0x5aa312(_0x2653ff++)), _0x1c646c |= (0x0 < _0xf58791 ? 0x1 : 0x0) * _0x10a2a6, _0x10a2a6 <<= 0x1;
                  switch (_0xc1c751 = _0x1c646c) {
                    case 0x0:
                      _0x1c646c = 0x0, _0x11b1d0 = Math.pow(0x2, 0x8);
                      for (_0x10a2a6 = 0x1; _0x10a2a6 != _0x11b1d0;) _0xf58791 = _0x585293 & _0x248942, _0x248942 >>= 0x1, 0x0 == _0x248942 && (_0x248942 = _0x100bdd, _0x585293 = _0x5aa312(_0x2653ff++)), _0x1c646c |= (0x0 < _0xf58791 ? 0x1 : 0x0) * _0x10a2a6, _0x10a2a6 <<= 0x1;
                      _0x91475a[_0x442c9b++] = _0x3e6740(_0x1c646c), _0xc1c751 = _0x442c9b - 0x1, _0x5156b5--;
                      break;
                    case 0x1:
                      _0x1c646c = 0x0, _0x11b1d0 = Math.pow(0x2, 0x10);
                      for (_0x10a2a6 = 0x1; _0x10a2a6 != _0x11b1d0;) _0xf58791 = _0x585293 & _0x248942, _0x248942 >>= 0x1, 0x0 == _0x248942 && (_0x248942 = _0x100bdd, _0x585293 = _0x5aa312(_0x2653ff++)), _0x1c646c |= (0x0 < _0xf58791 ? 0x1 : 0x0) * _0x10a2a6, _0x10a2a6 <<= 0x1;
                      _0x91475a[_0x442c9b++] = _0x3e6740(_0x1c646c), _0xc1c751 = _0x442c9b - 0x1, _0x5156b5--;
                      break;
                    case 0x2:
                      return _0x1361fb.join('');
                  }
                  if (0x0 == _0x5156b5 && (_0x5156b5 = Math.pow(0x2, _0x4f03f7), _0x4f03f7++), _0x91475a[_0xc1c751]) _0x1c646c = _0x91475a[_0xc1c751];else {
                    if (_0xc1c751 !== _0x442c9b) return null;
                    _0x1c646c = _0x27a5f7 + _0x27a5f7.charAt(0x0);
                  }
                  _0x1361fb.push(_0x1c646c), _0x91475a[_0x442c9b++] = _0x27a5f7 + _0x1c646c.charAt(0x0), _0x5156b5--, _0x27a5f7 = _0x1c646c, 0x0 == _0x5156b5 && (_0x5156b5 = Math.pow(0x2, _0x4f03f7), _0x4f03f7++);
                }
              }
            };
          _0x1ffecb = _0x24b08a, _0x5bcffd = function () {
            return _0x1ffecb;
          }.call(_0x5bcffd, _0x183de3, _0x5bcffd, _0x11b153), !(void 0x0 !== _0x5bcffd && (_0x11b153.exports = _0x5bcffd));
        }, function (_0x4f403f, _0x28cc7c, _0x52446f) {
          _0x28cc7c = _0x52446f(0x5), _0x52446f(0xc), _0x52446f(0xd), _0x52446f(0xe), _0x52446f(0xf), _0x52446f = _0x28cc7c.lib.BlockCipher;
          for (var _0x22d0b0 = _0x28cc7c.algo, _0x46f737 = [], _0x5d0444 = [], _0x366999 = [], _0x14054d = [], _0x1c3c42 = [], _0x53d0a1 = [], _0x3caa0a = [], _0x30144b = [], _0x3c0079 = [], _0x501e1e = [], _0x2a06d1 = [], _0x4f6911 = 0x0; 0x100 > _0x4f6911; _0x4f6911++) 0x80 > _0x4f6911 ? _0x2a06d1[_0x4f6911] = _0x4f6911 << 0x1 : _0x2a06d1[_0x4f6911] = _0x4f6911 << 0x1 ^ 0x11b;
          for (var _0x2ccae8 = 0x0, _0x347cd8 = 0x0, _0x4f6911 = 0x0; 0x100 > _0x4f6911; _0x4f6911++) {
            var _0x33df3a = _0x347cd8 ^ _0x347cd8 << 0x1 ^ _0x347cd8 << 0x2 ^ _0x347cd8 << 0x3 ^ _0x347cd8 << 0x4,
              _0x33df3a = _0x33df3a >>> 0x8 ^ 0xff & _0x33df3a ^ 0x63;
            _0x46f737[_0x2ccae8] = _0x33df3a, _0x5d0444[_0x33df3a] = _0x2ccae8;
            var _0x54ce0f = _0x2a06d1[_0x2ccae8],
              _0x342408 = _0x2a06d1[_0x54ce0f],
              _0x4403ef = _0x2a06d1[_0x342408],
              _0x41651f = 0x101 * _0x2a06d1[_0x33df3a] ^ 0x1010100 * _0x33df3a;
            _0x366999[_0x2ccae8] = _0x41651f << 0x18 | _0x41651f >>> 0x8, _0x14054d[_0x2ccae8] = _0x41651f << 0x10 | _0x41651f >>> 0x10, _0x1c3c42[_0x2ccae8] = _0x41651f << 0x8 | _0x41651f >>> 0x18, _0x53d0a1[_0x2ccae8] = _0x41651f, _0x41651f = 0x1010101 * _0x4403ef ^ 0x10001 * _0x342408 ^ 0x101 * _0x54ce0f ^ 0x1010100 * _0x2ccae8, _0x3caa0a[_0x33df3a] = _0x41651f << 0x18 | _0x41651f >>> 0x8, _0x30144b[_0x33df3a] = _0x41651f << 0x10 | _0x41651f >>> 0x10, _0x3c0079[_0x33df3a] = _0x41651f << 0x8 | _0x41651f >>> 0x18, _0x501e1e[_0x33df3a] = _0x41651f, _0x2ccae8 ? (_0x2ccae8 = _0x54ce0f ^ _0x2a06d1[_0x2a06d1[_0x2a06d1[_0x4403ef ^ _0x54ce0f]]], _0x347cd8 ^= _0x2a06d1[_0x2a06d1[_0x347cd8]]) : _0x2ccae8 = _0x347cd8 = 0x1;
          }
          !0x0;
          var _0x18271f = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36],
            _0x22d0b0 = _0x22d0b0.AES = _0x52446f.extend({
              '_doReset': function () {
                if (!this._nRounds || this._keyPriorReset !== this._key) {
                  for (var _0x597113 = this._keyPriorReset = this._key, _0x851f8f = _0x597113.words, _0x132dc5 = _0x597113.sigBytes / 0x4, _0x597113 = 0x4 * ((this._nRounds = _0x132dc5 + 0x6) + 0x1), _0x12d1b2 = this._keySchedule = [], _0x5aab5a = 0x0; _0x5aab5a < _0x597113; _0x5aab5a++) if (_0x5aab5a < _0x132dc5) _0x12d1b2[_0x5aab5a] = _0x851f8f[_0x5aab5a];else {
                    var _0x4fd2f8 = _0x12d1b2[_0x5aab5a - 0x1];
                    _0x5aab5a % _0x132dc5 ? 0x6 < _0x132dc5 && 0x4 == _0x5aab5a % _0x132dc5 && (_0x4fd2f8 = _0x46f737[_0x4fd2f8 >>> 0x18] << 0x18 | _0x46f737[_0x4fd2f8 >>> 0x10 & 0xff] << 0x10 | _0x46f737[_0x4fd2f8 >>> 0x8 & 0xff] << 0x8 | _0x46f737[0xff & _0x4fd2f8]) : (_0x4fd2f8 = _0x4fd2f8 << 0x8 | _0x4fd2f8 >>> 0x18, _0x4fd2f8 = _0x46f737[_0x4fd2f8 >>> 0x18] << 0x18 | _0x46f737[_0x4fd2f8 >>> 0x10 & 0xff] << 0x10 | _0x46f737[_0x4fd2f8 >>> 0x8 & 0xff] << 0x8 | _0x46f737[0xff & _0x4fd2f8], _0x4fd2f8 ^= _0x18271f[_0x5aab5a / _0x132dc5 | 0x0] << 0x18), _0x12d1b2[_0x5aab5a] = _0x12d1b2[_0x5aab5a - _0x132dc5] ^ _0x4fd2f8;
                  }
                  _0x851f8f = this._invKeySchedule = [];
                  for (_0x132dc5 = 0x0; _0x132dc5 < _0x597113; _0x132dc5++) _0x5aab5a = _0x597113 - _0x132dc5, _0x4fd2f8 = _0x132dc5 % 0x4 ? _0x12d1b2[_0x5aab5a] : _0x12d1b2[_0x5aab5a - 0x4], 0x4 > _0x132dc5 || 0x4 >= _0x5aab5a ? _0x851f8f[_0x132dc5] = _0x4fd2f8 : _0x851f8f[_0x132dc5] = _0x3caa0a[_0x46f737[_0x4fd2f8 >>> 0x18]] ^ _0x30144b[_0x46f737[_0x4fd2f8 >>> 0x10 & 0xff]] ^ _0x3c0079[_0x46f737[_0x4fd2f8 >>> 0x8 & 0xff]] ^ _0x501e1e[_0x46f737[0xff & _0x4fd2f8]];
                }
              },
              'encryptBlock': function (_0x4665d9, _0x41c39b) {
                this._doCryptBlock(_0x4665d9, _0x41c39b, this._keySchedule, _0x366999, _0x14054d, _0x1c3c42, _0x53d0a1, _0x46f737);
              },
              'decryptBlock': function (_0x320ed4, _0xcd85d2) {
                var _0x13f764 = _0x320ed4[_0xcd85d2 + 0x1];
                _0x320ed4[_0xcd85d2 + 0x1] = _0x320ed4[_0xcd85d2 + 0x3], _0x320ed4[_0xcd85d2 + 0x3] = _0x13f764, this._doCryptBlock(_0x320ed4, _0xcd85d2, this._invKeySchedule, _0x3caa0a, _0x30144b, _0x3c0079, _0x501e1e, _0x5d0444), _0x13f764 = _0x320ed4[_0xcd85d2 + 0x1], _0x320ed4[_0xcd85d2 + 0x1] = _0x320ed4[_0xcd85d2 + 0x3], _0x320ed4[_0xcd85d2 + 0x3] = _0x13f764;
              },
              '_doCryptBlock': function (_0x400708, _0x3713f7, _0x11f844, _0x7f50c2, _0x2a64e7, _0x5e2a7f, _0x1f79bd, _0x3e9cea) {
                for (var _0x48fb12 = this._nRounds, _0x25e797 = _0x400708[_0x3713f7] ^ _0x11f844[0x0], _0x15889b = _0x400708[_0x3713f7 + 0x1] ^ _0x11f844[0x1], _0xa9ef9b = _0x400708[_0x3713f7 + 0x2] ^ _0x11f844[0x2], _0x2d485d = _0x400708[_0x3713f7 + 0x3] ^ _0x11f844[0x3], _0x445a2a = 0x4, _0x46daa2 = 0x1; _0x46daa2 < _0x48fb12; _0x46daa2++) var _0x4303c0 = _0x7f50c2[_0x25e797 >>> 0x18] ^ _0x2a64e7[_0x15889b >>> 0x10 & 0xff] ^ _0x5e2a7f[_0xa9ef9b >>> 0x8 & 0xff] ^ _0x1f79bd[0xff & _0x2d485d] ^ _0x11f844[_0x445a2a++], _0x2950c1 = _0x7f50c2[_0x15889b >>> 0x18] ^ _0x2a64e7[_0xa9ef9b >>> 0x10 & 0xff] ^ _0x5e2a7f[_0x2d485d >>> 0x8 & 0xff] ^ _0x1f79bd[0xff & _0x25e797] ^ _0x11f844[_0x445a2a++], _0x476f5e = _0x7f50c2[_0xa9ef9b >>> 0x18] ^ _0x2a64e7[_0x2d485d >>> 0x10 & 0xff] ^ _0x5e2a7f[_0x25e797 >>> 0x8 & 0xff] ^ _0x1f79bd[0xff & _0x15889b] ^ _0x11f844[_0x445a2a++], _0x2d485d = _0x7f50c2[_0x2d485d >>> 0x18] ^ _0x2a64e7[_0x25e797 >>> 0x10 & 0xff] ^ _0x5e2a7f[_0x15889b >>> 0x8 & 0xff] ^ _0x1f79bd[0xff & _0xa9ef9b] ^ _0x11f844[_0x445a2a++], _0x25e797 = _0x4303c0, _0x15889b = _0x2950c1, _0xa9ef9b = _0x476f5e;
                _0x4303c0 = (_0x3e9cea[_0x25e797 >>> 0x18] << 0x18 | _0x3e9cea[_0x15889b >>> 0x10 & 0xff] << 0x10 | _0x3e9cea[_0xa9ef9b >>> 0x8 & 0xff] << 0x8 | _0x3e9cea[0xff & _0x2d485d]) ^ _0x11f844[_0x445a2a++], _0x2950c1 = (_0x3e9cea[_0x15889b >>> 0x18] << 0x18 | _0x3e9cea[_0xa9ef9b >>> 0x10 & 0xff] << 0x10 | _0x3e9cea[_0x2d485d >>> 0x8 & 0xff] << 0x8 | _0x3e9cea[0xff & _0x25e797]) ^ _0x11f844[_0x445a2a++], _0x476f5e = (_0x3e9cea[_0xa9ef9b >>> 0x18] << 0x18 | _0x3e9cea[_0x2d485d >>> 0x10 & 0xff] << 0x10 | _0x3e9cea[_0x25e797 >>> 0x8 & 0xff] << 0x8 | _0x3e9cea[0xff & _0x15889b]) ^ _0x11f844[_0x445a2a++], _0x2d485d = (_0x3e9cea[_0x2d485d >>> 0x18] << 0x18 | _0x3e9cea[_0x25e797 >>> 0x10 & 0xff] << 0x10 | _0x3e9cea[_0x15889b >>> 0x8 & 0xff] << 0x8 | _0x3e9cea[0xff & _0xa9ef9b]) ^ _0x11f844[_0x445a2a++], _0x400708[_0x3713f7] = _0x4303c0, _0x400708[_0x3713f7 + 0x1] = _0x2950c1, _0x400708[_0x3713f7 + 0x2] = _0x476f5e, _0x400708[_0x3713f7 + 0x3] = _0x2d485d;
              },
              'keySize': 0x8
            });
          _0x28cc7c.AES = _0x52446f._createHelper(_0x22d0b0), _0x4f403f.exports = _0x28cc7c.AES, !0x0;
        }, function (_0x76394e, _0x35bff7, _0x7da7ef) {
          _0x35bff7 = _0x7da7ef(0x5);
          var _0x1044cd = _0x35bff7.lib.WordArray;
          _0x35bff7.enc.Base64 = {
            'stringify': function (_0x24c22c) {
              var _0x214340 = _0x24c22c.words,
                _0x5376a3 = _0x24c22c.sigBytes,
                _0x61f115 = this._map;
              _0x24c22c.clamp(), _0x24c22c = [];
              for (var _0x15d0d5 = 0x0; _0x15d0d5 < _0x5376a3; _0x15d0d5 += 0x3) for (var _0x34f76b = (_0x214340[_0x15d0d5 >>> 0x2] >>> 0x18 - 0x8 * (_0x15d0d5 % 0x4) & 0xff) << 0x10 | (_0x214340[_0x15d0d5 + 0x1 >>> 0x2] >>> 0x18 - 0x8 * ((_0x15d0d5 + 0x1) % 0x4) & 0xff) << 0x8 | _0x214340[_0x15d0d5 + 0x2 >>> 0x2] >>> 0x18 - 0x8 * ((_0x15d0d5 + 0x2) % 0x4) & 0xff, _0x10ecd3 = 0x0; 0x4 > _0x10ecd3 && _0x15d0d5 + 0.75 * _0x10ecd3 < _0x5376a3; _0x10ecd3++) _0x24c22c.push(_0x61f115.charAt(_0x34f76b >>> 0x6 * (0x3 - _0x10ecd3) & 0x3f));
              if (_0x214340 = _0x61f115.charAt(0x40)) {
                for (; _0x24c22c.length % 0x4;) _0x24c22c.push(_0x214340);
              }
              return _0x24c22c.join('');
            },
            'parse': function (_0x51d5a4) {
              var _0x174df3 = _0x51d5a4.length,
                _0x44b945 = this._map,
                _0xb33fac = this._reverseMap;
              if (!_0xb33fac) {
                for (var _0xb33fac = this._reverseMap = [], _0x2f391c = 0x0; _0x2f391c < _0x44b945.length; _0x2f391c++) _0xb33fac[_0x44b945.charCodeAt(_0x2f391c)] = _0x2f391c;
              }
              if (_0x44b945 = _0x44b945.charAt(0x40)) _0x44b945 = _0x51d5a4.indexOf(_0x44b945), -0x1 !== _0x44b945 && (_0x174df3 = _0x44b945);
              for (var _0x44b945 = [], _0x40b33e = _0x2f391c = 0x0; _0x40b33e < _0x174df3; _0x40b33e++) if (_0x40b33e % 0x4) {
                var _0x54fa96 = _0xb33fac[_0x51d5a4.charCodeAt(_0x40b33e - 0x1)] << 0x2 * (_0x40b33e % 0x4),
                  _0x40512d = _0xb33fac[_0x51d5a4.charCodeAt(_0x40b33e)] >>> 0x6 - 0x2 * (_0x40b33e % 0x4);
                _0x44b945[_0x2f391c >>> 0x2] |= (_0x54fa96 | _0x40512d) << 0x18 - 0x8 * (_0x2f391c % 0x4), _0x2f391c++;
              }
              return _0x1044cd.create(_0x44b945, _0x2f391c);
            },
            '_map': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
          }, _0x76394e.exports = _0x35bff7.enc.Base64, !0x0;
        }, function (_0x1dca4a, _0x4492c4, _0x122e87) {
          _0x4492c4 = _0x122e87(0x5);
          var _0x5383f3 = Math,
            _0x30a0c8 = function (_0x338cf4, _0x1e4c32, _0x9391ba, _0x1935d7, _0x240aa3, _0x1f25dd, _0x1264c7) {
              return _0x338cf4 = _0x338cf4 + (_0x1e4c32 & _0x9391ba | ~_0x1e4c32 & _0x1935d7) + _0x240aa3 + _0x1264c7, (_0x338cf4 << _0x1f25dd | _0x338cf4 >>> 0x20 - _0x1f25dd) + _0x1e4c32;
            },
            _0x210cd8 = function (_0x335a6e, _0x529069, _0x489076, _0x3652cf, _0x22a6dc, _0x30f207, _0x1cc4ac) {
              return _0x335a6e = _0x335a6e + (_0x529069 & _0x3652cf | _0x489076 & ~_0x3652cf) + _0x22a6dc + _0x1cc4ac, (_0x335a6e << _0x30f207 | _0x335a6e >>> 0x20 - _0x30f207) + _0x529069;
            },
            _0x1b0d80 = function (_0x23c996, _0x4dda7d, _0x5640d8, _0x144193, _0x36e5f0, _0x4a43d6, _0x3e6603) {
              return _0x23c996 = _0x23c996 + (_0x4dda7d ^ _0x5640d8 ^ _0x144193) + _0x36e5f0 + _0x3e6603, (_0x23c996 << _0x4a43d6 | _0x23c996 >>> 0x20 - _0x4a43d6) + _0x4dda7d;
            },
            _0x2d40d3 = function (_0x17909d, _0x3e7360, _0x2f2c86, _0x32e584, _0x2a937f, _0x21d84d, _0x3c1f50) {
              return _0x17909d = _0x17909d + (_0x2f2c86 ^ (_0x3e7360 | ~_0x32e584)) + _0x2a937f + _0x3c1f50, (_0x17909d << _0x21d84d | _0x17909d >>> 0x20 - _0x21d84d) + _0x3e7360;
            };
          _0x122e87 = _0x4492c4.lib;
          var _0x43e864 = _0x122e87.WordArray,
            _0x573407 = _0x122e87.Hasher;
          _0x122e87 = _0x4492c4.algo;
          for (var _0xbb4f9 = [], _0x5a8ccb = 0x0; 0x40 > _0x5a8ccb; _0x5a8ccb++) _0xbb4f9[_0x5a8ccb] = 0x100000000 * _0x5383f3.abs(_0x5383f3.sin(_0x5a8ccb + 0x1)) | 0x0;
          !0x0, _0x122e87 = _0x122e87.MD5 = _0x573407.extend({
            '_doReset': function () {
              this._hash = new _0x43e864.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
            },
            '_doProcessBlock': function (_0x54b920, _0x3883f6) {
              for (var _0x12ab0a = 0x0; 0x10 > _0x12ab0a; _0x12ab0a++) {
                var _0x4ab88a = _0x3883f6 + _0x12ab0a,
                  _0x298483 = _0x54b920[_0x4ab88a];
                _0x54b920[_0x4ab88a] = 0xff00ff & (_0x298483 << 0x8 | _0x298483 >>> 0x18) | 0xff00ff00 & (_0x298483 << 0x18 | _0x298483 >>> 0x8);
              }
              var _0x12ab0a = this._hash.words,
                _0x4ab88a = _0x54b920[_0x3883f6 + 0x0],
                _0x298483 = _0x54b920[_0x3883f6 + 0x1],
                _0x5c4088 = _0x54b920[_0x3883f6 + 0x2],
                _0x225c27 = _0x54b920[_0x3883f6 + 0x3],
                _0x5e9ac5 = _0x54b920[_0x3883f6 + 0x4],
                _0x3d16e7 = _0x54b920[_0x3883f6 + 0x5],
                _0x38ee37 = _0x54b920[_0x3883f6 + 0x6],
                _0x33476d = _0x54b920[_0x3883f6 + 0x7],
                _0x524d82 = _0x54b920[_0x3883f6 + 0x8],
                _0x32764a = _0x54b920[_0x3883f6 + 0x9],
                _0x86db50 = _0x54b920[_0x3883f6 + 0xa],
                _0x16497b = _0x54b920[_0x3883f6 + 0xb],
                _0x50f04b = _0x54b920[_0x3883f6 + 0xc],
                _0x5dcb4a = _0x54b920[_0x3883f6 + 0xd],
                _0x54986f = _0x54b920[_0x3883f6 + 0xe],
                _0x92794 = _0x54b920[_0x3883f6 + 0xf],
                _0x20312f = _0x12ab0a[0x0],
                _0x499f10 = _0x12ab0a[0x1],
                _0x2c9382 = _0x12ab0a[0x2],
                _0x3fa031 = _0x12ab0a[0x3],
                _0x20312f = _0x30a0c8(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x4ab88a, 0x7, _0xbb4f9[0x0]),
                _0x3fa031 = _0x30a0c8(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x298483, 0xc, _0xbb4f9[0x1]),
                _0x2c9382 = _0x30a0c8(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x5c4088, 0x11, _0xbb4f9[0x2]),
                _0x499f10 = _0x30a0c8(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x225c27, 0x16, _0xbb4f9[0x3]),
                _0x20312f = _0x30a0c8(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x5e9ac5, 0x7, _0xbb4f9[0x4]),
                _0x3fa031 = _0x30a0c8(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x3d16e7, 0xc, _0xbb4f9[0x5]),
                _0x2c9382 = _0x30a0c8(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x38ee37, 0x11, _0xbb4f9[0x6]),
                _0x499f10 = _0x30a0c8(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x33476d, 0x16, _0xbb4f9[0x7]),
                _0x20312f = _0x30a0c8(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x524d82, 0x7, _0xbb4f9[0x8]),
                _0x3fa031 = _0x30a0c8(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x32764a, 0xc, _0xbb4f9[0x9]),
                _0x2c9382 = _0x30a0c8(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x86db50, 0x11, _0xbb4f9[0xa]),
                _0x499f10 = _0x30a0c8(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x16497b, 0x16, _0xbb4f9[0xb]),
                _0x20312f = _0x30a0c8(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x50f04b, 0x7, _0xbb4f9[0xc]),
                _0x3fa031 = _0x30a0c8(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x5dcb4a, 0xc, _0xbb4f9[0xd]),
                _0x2c9382 = _0x30a0c8(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x54986f, 0x11, _0xbb4f9[0xe]),
                _0x499f10 = _0x30a0c8(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x92794, 0x16, _0xbb4f9[0xf]),
                _0x20312f = _0x210cd8(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x298483, 0x5, _0xbb4f9[0x10]),
                _0x3fa031 = _0x210cd8(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x38ee37, 0x9, _0xbb4f9[0x11]),
                _0x2c9382 = _0x210cd8(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x16497b, 0xe, _0xbb4f9[0x12]),
                _0x499f10 = _0x210cd8(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x4ab88a, 0x14, _0xbb4f9[0x13]),
                _0x20312f = _0x210cd8(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x3d16e7, 0x5, _0xbb4f9[0x14]),
                _0x3fa031 = _0x210cd8(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x86db50, 0x9, _0xbb4f9[0x15]),
                _0x2c9382 = _0x210cd8(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x92794, 0xe, _0xbb4f9[0x16]),
                _0x499f10 = _0x210cd8(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x5e9ac5, 0x14, _0xbb4f9[0x17]),
                _0x20312f = _0x210cd8(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x32764a, 0x5, _0xbb4f9[0x18]),
                _0x3fa031 = _0x210cd8(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x54986f, 0x9, _0xbb4f9[0x19]),
                _0x2c9382 = _0x210cd8(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x225c27, 0xe, _0xbb4f9[0x1a]),
                _0x499f10 = _0x210cd8(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x524d82, 0x14, _0xbb4f9[0x1b]),
                _0x20312f = _0x210cd8(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x5dcb4a, 0x5, _0xbb4f9[0x1c]),
                _0x3fa031 = _0x210cd8(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x5c4088, 0x9, _0xbb4f9[0x1d]),
                _0x2c9382 = _0x210cd8(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x33476d, 0xe, _0xbb4f9[0x1e]),
                _0x499f10 = _0x210cd8(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x50f04b, 0x14, _0xbb4f9[0x1f]),
                _0x20312f = _0x1b0d80(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x3d16e7, 0x4, _0xbb4f9[0x20]),
                _0x3fa031 = _0x1b0d80(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x524d82, 0xb, _0xbb4f9[0x21]),
                _0x2c9382 = _0x1b0d80(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x16497b, 0x10, _0xbb4f9[0x22]),
                _0x499f10 = _0x1b0d80(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x54986f, 0x17, _0xbb4f9[0x23]),
                _0x20312f = _0x1b0d80(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x298483, 0x4, _0xbb4f9[0x24]),
                _0x3fa031 = _0x1b0d80(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x5e9ac5, 0xb, _0xbb4f9[0x25]),
                _0x2c9382 = _0x1b0d80(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x33476d, 0x10, _0xbb4f9[0x26]),
                _0x499f10 = _0x1b0d80(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x86db50, 0x17, _0xbb4f9[0x27]),
                _0x20312f = _0x1b0d80(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x5dcb4a, 0x4, _0xbb4f9[0x28]),
                _0x3fa031 = _0x1b0d80(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x4ab88a, 0xb, _0xbb4f9[0x29]),
                _0x2c9382 = _0x1b0d80(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x225c27, 0x10, _0xbb4f9[0x2a]),
                _0x499f10 = _0x1b0d80(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x38ee37, 0x17, _0xbb4f9[0x2b]),
                _0x20312f = _0x1b0d80(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x32764a, 0x4, _0xbb4f9[0x2c]),
                _0x3fa031 = _0x1b0d80(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x50f04b, 0xb, _0xbb4f9[0x2d]),
                _0x2c9382 = _0x1b0d80(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x92794, 0x10, _0xbb4f9[0x2e]),
                _0x499f10 = _0x1b0d80(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x5c4088, 0x17, _0xbb4f9[0x2f]),
                _0x20312f = _0x2d40d3(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x4ab88a, 0x6, _0xbb4f9[0x30]),
                _0x3fa031 = _0x2d40d3(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x33476d, 0xa, _0xbb4f9[0x31]),
                _0x2c9382 = _0x2d40d3(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x54986f, 0xf, _0xbb4f9[0x32]),
                _0x499f10 = _0x2d40d3(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x3d16e7, 0x15, _0xbb4f9[0x33]),
                _0x20312f = _0x2d40d3(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x50f04b, 0x6, _0xbb4f9[0x34]),
                _0x3fa031 = _0x2d40d3(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x225c27, 0xa, _0xbb4f9[0x35]),
                _0x2c9382 = _0x2d40d3(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x86db50, 0xf, _0xbb4f9[0x36]),
                _0x499f10 = _0x2d40d3(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x298483, 0x15, _0xbb4f9[0x37]),
                _0x20312f = _0x2d40d3(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x524d82, 0x6, _0xbb4f9[0x38]),
                _0x3fa031 = _0x2d40d3(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x92794, 0xa, _0xbb4f9[0x39]),
                _0x2c9382 = _0x2d40d3(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x38ee37, 0xf, _0xbb4f9[0x3a]),
                _0x499f10 = _0x2d40d3(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x5dcb4a, 0x15, _0xbb4f9[0x3b]),
                _0x20312f = _0x2d40d3(_0x20312f, _0x499f10, _0x2c9382, _0x3fa031, _0x5e9ac5, 0x6, _0xbb4f9[0x3c]),
                _0x3fa031 = _0x2d40d3(_0x3fa031, _0x20312f, _0x499f10, _0x2c9382, _0x16497b, 0xa, _0xbb4f9[0x3d]),
                _0x2c9382 = _0x2d40d3(_0x2c9382, _0x3fa031, _0x20312f, _0x499f10, _0x5c4088, 0xf, _0xbb4f9[0x3e]),
                _0x499f10 = _0x2d40d3(_0x499f10, _0x2c9382, _0x3fa031, _0x20312f, _0x32764a, 0x15, _0xbb4f9[0x3f]);
              _0x12ab0a[0x0] = _0x12ab0a[0x0] + _0x20312f | 0x0, _0x12ab0a[0x1] = _0x12ab0a[0x1] + _0x499f10 | 0x0, _0x12ab0a[0x2] = _0x12ab0a[0x2] + _0x2c9382 | 0x0, _0x12ab0a[0x3] = _0x12ab0a[0x3] + _0x3fa031 | 0x0;
            },
            '_doFinalize': function () {
              var _0x1cbcb0 = this._data,
                _0x128f54 = _0x1cbcb0.words,
                _0x41a543 = 0x8 * this._nDataBytes,
                _0x38f1e0 = 0x8 * _0x1cbcb0.sigBytes;
              _0x128f54[_0x38f1e0 >>> 0x5] |= 0x80 << 0x18 - _0x38f1e0 % 0x20;
              var _0x37b589 = _0x5383f3.floor(_0x41a543 / 0x100000000);
              _0x128f54[(_0x38f1e0 + 0x40 >>> 0x9 << 0x4) + 0xf] = 0xff00ff & (_0x37b589 << 0x8 | _0x37b589 >>> 0x18) | 0xff00ff00 & (_0x37b589 << 0x18 | _0x37b589 >>> 0x8), _0x128f54[(_0x38f1e0 + 0x40 >>> 0x9 << 0x4) + 0xe] = 0xff00ff & (_0x41a543 << 0x8 | _0x41a543 >>> 0x18) | 0xff00ff00 & (_0x41a543 << 0x18 | _0x41a543 >>> 0x8), _0x1cbcb0.sigBytes = 0x4 * (_0x128f54.length + 0x1), this._process(), _0x1cbcb0 = this._hash, _0x128f54 = _0x1cbcb0.words;
              for (_0x41a543 = 0x0; 0x4 > _0x41a543; _0x41a543++) _0x38f1e0 = _0x128f54[_0x41a543], _0x128f54[_0x41a543] = 0xff00ff & (_0x38f1e0 << 0x8 | _0x38f1e0 >>> 0x18) | 0xff00ff00 & (_0x38f1e0 << 0x18 | _0x38f1e0 >>> 0x8);
              return _0x1cbcb0;
            },
            'clone': function () {
              var _0x3321e8 = _0x573407.clone.call(this);
              return _0x3321e8._hash = this._hash.clone(), _0x3321e8;
            }
          }), _0x4492c4.MD5 = _0x573407._createHelper(_0x122e87), _0x4492c4.HmacMD5 = _0x573407._createHmacHelper(_0x122e87), _0x1dca4a.exports = _0x4492c4.MD5, !0x0;
        }, function (_0x28776f, _0x2f6b52, _0x107fdd) {
          _0x2f6b52 = _0x107fdd(0x5), _0x107fdd(0x6), _0x107fdd(0x7);
          var _0x327a40 = _0x2f6b52.lib;
          _0x107fdd = _0x327a40.Base;
          var _0x70ea77 = _0x327a40.WordArray,
            _0x327a40 = _0x2f6b52.algo,
            _0x15eb25 = _0x327a40.EvpKDF = _0x107fdd.extend({
              'cfg': _0x107fdd.extend({
                'keySize': 0x4,
                'hasher': _0x327a40.MD5,
                'iterations': 0x1
              }),
              'init': function (_0x48438a) {
                this.cfg = this.cfg.extend(_0x48438a);
              },
              'compute': function (_0x4f5d0c, _0x1a43d3) {
                for (var _0xd086c1 = this.cfg, _0x96818 = _0xd086c1.hasher.create(), _0x2f3b0f = _0x70ea77.create(), _0x5463c4 = _0x2f3b0f.words, _0x15e4eb = _0xd086c1.keySize, _0xd086c1 = _0xd086c1.iterations; _0x5463c4.length < _0x15e4eb;) {
                  _0x2a13d4 && _0x96818.update(_0x2a13d4);
                  var _0x2a13d4 = _0x96818.update(_0x4f5d0c).finalize(_0x1a43d3);
                  _0x96818.reset();
                  for (var _0x2e3882 = 0x1; _0x2e3882 < _0xd086c1; _0x2e3882++) _0x2a13d4 = _0x96818.finalize(_0x2a13d4), _0x96818.reset();
                  _0x2f3b0f.concat(_0x2a13d4);
                }
                return _0x2f3b0f.sigBytes = 0x4 * _0x15e4eb, _0x2f3b0f;
              }
            });
          _0x2f6b52.EvpKDF = function (_0x576c29, _0x4f6a64, _0x2af76e) {
            return _0x15eb25.create(_0x2af76e).compute(_0x576c29, _0x4f6a64);
          }, _0x28776f.exports = _0x2f6b52.EvpKDF, !0x0;
        }, function (_0x2af8ef, _0x4de556, _0x42f1b5) {
          _0x42f1b5 = _0x42f1b5(0x5);
          if (!_0x42f1b5.lib.Cipher) {
            _0x4de556 = _0x42f1b5.lib;
            var _0x544e21 = _0x4de556.Base,
              _0x1f8576 = _0x4de556.WordArray,
              _0x2d00b4 = _0x4de556.BufferedBlockAlgorithm,
              _0x432a78 = _0x42f1b5.enc,
              _0x78a32d = (_0x432a78.Utf8, _0x432a78.Base64),
              _0x328028 = _0x42f1b5.algo.EvpKDF,
              _0x5dd2cf = _0x4de556.Cipher = _0x2d00b4.extend({
                'cfg': _0x544e21.extend(),
                'createEncryptor': function (_0x5afee1, _0x468415) {
                  return this.create(this._ENC_XFORM_MODE, _0x5afee1, _0x468415);
                },
                'createDecryptor': function (_0x486e4d, _0x4ff1e7) {
                  return this.create(this._DEC_XFORM_MODE, _0x486e4d, _0x4ff1e7);
                },
                'init': function (_0xb4cb9f, _0x397b62, _0x36f87b) {
                  this.cfg = this.cfg.extend(_0x36f87b), this._xformMode = _0xb4cb9f, this._key = _0x397b62, this.reset();
                },
                'reset': function () {
                  _0x2d00b4.reset.call(this), this._doReset();
                },
                'process': function (_0x1810b0) {
                  return this._append(_0x1810b0), this._process();
                },
                'finalize': function (_0x111a39) {
                  return _0x111a39 && this._append(_0x111a39), this._doFinalize();
                },
                'keySize': 0x4,
                'ivSize': 0x4,
                '_ENC_XFORM_MODE': 0x1,
                '_DEC_XFORM_MODE': 0x2,
                '_createHelper': function (_0x513104) {
                  return {
                    'encrypt': function (_0x275172, _0x78744, _0x584f2a) {
                      return ('string' == typeof _0x78744 ? _0x50582a : _0x4f39e8).encrypt(_0x513104, _0x275172, _0x78744, _0x584f2a);
                    },
                    'decrypt': function (_0x47a5ad, _0x13f001, _0x4f08ba) {
                      return ('string' == typeof _0x13f001 ? _0x50582a : _0x4f39e8).decrypt(_0x513104, _0x47a5ad, _0x13f001, _0x4f08ba);
                    }
                  };
                }
              }),
              _0x432a78 = (_0x4de556.StreamCipher = _0x5dd2cf.extend({
                '_doFinalize': function () {
                  return this._process(!0x0);
                },
                'blockSize': 0x1
              }), _0x42f1b5.mode = {}),
              _0x2977ed,
              _0x52f495 = function (_0x5e1030, _0x13a675, _0x5ea930) {
                var _0x4c2654 = this._iv;
                _0x4c2654 ? this._iv = void 0x0 : _0x4c2654 = this._prevBlock;
                for (var _0x55503d = 0x0; _0x55503d < _0x5ea930; _0x55503d++) _0x5e1030[_0x13a675 + _0x55503d] ^= _0x4c2654[_0x55503d];
              };
            _0x2977ed = (_0x4de556.BlockCipherMode = _0x544e21.extend({
              'createEncryptor': function (_0x1fc770, _0x2798ba) {
                return this.Encryptor.create(_0x1fc770, _0x2798ba);
              },
              'createDecryptor': function (_0x1b62c0, _0x2b5894) {
                return this.Decryptor.create(_0x1b62c0, _0x2b5894);
              },
              'init': function (_0x25ad4e, _0x37057f) {
                this._cipher = _0x25ad4e, this._iv = _0x37057f;
              }
            })).extend(), _0x2977ed = (_0x2977ed.Encryptor = _0x2977ed.extend({
              'processBlock': function (_0x35d75d, _0x51808a) {
                var _0x5dd465 = this._cipher,
                  _0x1eed50 = _0x5dd465.blockSize;
                _0x52f495.call(this, _0x35d75d, _0x51808a, _0x1eed50), _0x5dd465.encryptBlock(_0x35d75d, _0x51808a), this._prevBlock = _0x35d75d.slice(_0x51808a, _0x51808a + _0x1eed50);
              }
            }), _0x2977ed.Decryptor = _0x2977ed.extend({
              'processBlock': function (_0x2fa5f3, _0x5909f2) {
                var _0x1299ac = this._cipher,
                  _0x5d8e57 = _0x1299ac.blockSize,
                  _0x3e3834 = _0x2fa5f3.slice(_0x5909f2, _0x5909f2 + _0x5d8e57);
                _0x1299ac.decryptBlock(_0x2fa5f3, _0x5909f2), _0x52f495.call(this, _0x2fa5f3, _0x5909f2, _0x5d8e57), this._prevBlock = _0x3e3834;
              }
            }), _0x2977ed), _0x432a78 = _0x432a78.CBC = _0x2977ed, _0x2977ed = (_0x42f1b5.pad = {}).Pkcs7 = {
              'pad': function (_0x17ac0a, _0x4152e4) {
                for (var _0x44f71e = 0x4 * _0x4152e4, _0x44f71e = _0x44f71e - _0x17ac0a.sigBytes % _0x44f71e, _0x8c04e6 = _0x44f71e << 0x18 | _0x44f71e << 0x10 | _0x44f71e << 0x8 | _0x44f71e, _0x33055b = [], _0xf3f8b5 = 0x0; _0xf3f8b5 < _0x44f71e; _0xf3f8b5 += 0x4) _0x33055b.push(_0x8c04e6);
                _0x44f71e = _0x1f8576.create(_0x33055b, _0x44f71e), _0x17ac0a.concat(_0x44f71e);
              },
              'unpad': function (_0x37fca5) {
                _0x37fca5.sigBytes -= 0xff & _0x37fca5.words[_0x37fca5.sigBytes - 0x1 >>> 0x2];
              }
            };
            var _0x14cbef = (_0x4de556.BlockCipher = _0x5dd2cf.extend({
                'cfg': _0x5dd2cf.cfg.extend({
                  'mode': _0x432a78,
                  'padding': _0x2977ed
                }),
                'reset': function () {
                  _0x5dd2cf.reset.call(this);
                  var _0x398819 = this.cfg,
                    _0x3fe49c = _0x398819.iv,
                    _0x398819 = _0x398819.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) var _0x1dd627 = _0x398819.createEncryptor;else _0x1dd627 = _0x398819.createDecryptor, this._minBufferSize = 0x1;
                  this._mode = _0x1dd627.call(_0x398819, this, _0x3fe49c && _0x3fe49c.words);
                },
                '_doProcessBlock': function (_0x3b2030, _0x55f47b) {
                  this._mode.processBlock(_0x3b2030, _0x55f47b);
                },
                '_doFinalize': function () {
                  var _0x2f8c42 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    _0x2f8c42.pad(this._data, this.blockSize);
                    var _0x4f4a93 = this._process(!0x0);
                  } else _0x4f4a93 = this._process(!0x0), _0x2f8c42.unpad(_0x4f4a93);
                  return _0x4f4a93;
                },
                'blockSize': 0x4
              }), _0x4de556.CipherParams = _0x544e21.extend({
                'init': function (_0x2f24bb) {
                  this.mixIn(_0x2f24bb);
                },
                'toString': function (_0x627917) {
                  return (_0x627917 || this.formatter).stringify(this);
                }
              })),
              _0x432a78 = (_0x42f1b5.format = {}).OpenSSL = {
                'stringify': function (_0x1807ff) {
                  var _0x43d2ea = _0x1807ff.ciphertext;
                  return _0x1807ff = _0x1807ff.salt, (_0x1807ff ? _0x1f8576.create([0x53616c74, 0x65645f5f]).concat(_0x1807ff).concat(_0x43d2ea) : _0x43d2ea).toString(_0x78a32d);
                },
                'parse': function (_0x2711ca) {
                  _0x2711ca = _0x78a32d.parse(_0x2711ca);
                  var _0x5190cf = _0x2711ca.words;
                  if (0x53616c74 == _0x5190cf[0x0] && 0x65645f5f == _0x5190cf[0x1]) {
                    var _0x2bddd6 = _0x1f8576.create(_0x5190cf.slice(0x2, 0x4));
                    _0x5190cf.splice(0x0, 0x4), _0x2711ca.sigBytes -= 0x10;
                  }
                  return _0x14cbef.create({
                    'ciphertext': _0x2711ca,
                    'salt': _0x2bddd6
                  });
                }
              },
              _0x4f39e8 = _0x4de556.SerializableCipher = _0x544e21.extend({
                'cfg': _0x544e21.extend({
                  'format': _0x432a78
                }),
                'encrypt': function (_0x5ccfe6, _0x2d03f1, _0x243bf7, _0x48cb5b) {
                  _0x48cb5b = this.cfg.extend(_0x48cb5b);
                  var _0x860807 = _0x5ccfe6.createEncryptor(_0x243bf7, _0x48cb5b);
                  return _0x2d03f1 = _0x860807.finalize(_0x2d03f1), _0x860807 = _0x860807.cfg, _0x14cbef.create({
                    'ciphertext': _0x2d03f1,
                    'key': _0x243bf7,
                    'iv': _0x860807.iv,
                    'algorithm': _0x5ccfe6,
                    'mode': _0x860807.mode,
                    'padding': _0x860807.padding,
                    'blockSize': _0x5ccfe6.blockSize,
                    'formatter': _0x48cb5b.format
                  });
                },
                'decrypt': function (_0x5527c1, _0x548cf8, _0x5c676a, _0x1b7414) {
                  return _0x1b7414 = this.cfg.extend(_0x1b7414), _0x548cf8 = this._parse(_0x548cf8, _0x1b7414.format), _0x5527c1.createDecryptor(_0x5c676a, _0x1b7414).finalize(_0x548cf8.ciphertext);
                },
                '_parse': function (_0x39256c, _0x4ffd7d) {
                  return 'string' == typeof _0x39256c ? _0x4ffd7d.parse(_0x39256c, this) : _0x39256c;
                }
              });
            _0x42f1b5 = (_0x42f1b5.kdf = {}).OpenSSL = {
              'execute': function (_0x3b69aa, _0x22b7e2, _0x56ec27, _0x537a26) {
                return _0x537a26 || (_0x537a26 = _0x1f8576.random(0x8)), _0x3b69aa = _0x328028.create({
                  'keySize': _0x22b7e2 + _0x56ec27
                }).compute(_0x3b69aa, _0x537a26), _0x56ec27 = _0x1f8576.create(_0x3b69aa.words.slice(_0x22b7e2), 0x4 * _0x56ec27), _0x3b69aa.sigBytes = 0x4 * _0x22b7e2, _0x14cbef.create({
                  'key': _0x3b69aa,
                  'iv': _0x56ec27,
                  'salt': _0x537a26
                });
              }
            };
            var _0x50582a = _0x4de556.PasswordBasedCipher = _0x4f39e8.extend({
              'cfg': _0x4f39e8.cfg.extend({
                'kdf': _0x42f1b5
              }),
              'encrypt': function (_0x33d9cf, _0x2d46c7, _0x499bb2, _0x4d61d5) {
                return _0x4d61d5 = this.cfg.extend(_0x4d61d5), _0x499bb2 = _0x4d61d5.kdf.execute(_0x499bb2, _0x33d9cf.keySize, _0x33d9cf.ivSize), _0x4d61d5.iv = _0x499bb2.iv, _0x33d9cf = _0x4f39e8.encrypt.call(this, _0x33d9cf, _0x2d46c7, _0x499bb2.key, _0x4d61d5), _0x33d9cf.mixIn(_0x499bb2), _0x33d9cf;
              },
              'decrypt': function (_0x27dc7e, _0x5dc268, _0x370860, _0x50c461) {
                return _0x50c461 = this.cfg.extend(_0x50c461), _0x5dc268 = this._parse(_0x5dc268, _0x50c461.format), _0x370860 = _0x50c461.kdf.execute(_0x370860, _0x27dc7e.keySize, _0x27dc7e.ivSize, _0x5dc268.salt), _0x50c461.iv = _0x370860.iv, _0x4f39e8.decrypt.call(this, _0x27dc7e, _0x5dc268, _0x370860.key, _0x50c461);
              }
            });
          }
          _0x2af8ef.exports = void 0x0, !0x0;
        }, function (_0x5b8841, _0x41a524, _0xd7b799) {
          _0x41a524 = _0xd7b799(0x5), _0xd7b799(0xc), _0xd7b799(0xd), _0xd7b799(0xe), _0xd7b799(0xf);
          var _0x515c7c = function (_0x330f8b, _0xbb4eed) {
              var _0x5a7bbc = (this._lBlock >>> _0x330f8b ^ this._rBlock) & _0xbb4eed;
              this._rBlock ^= _0x5a7bbc, this._lBlock ^= _0x5a7bbc << _0x330f8b;
            },
            _0x1b054e = function (_0x1e283c, _0x21e855) {
              var _0x17c772 = (this._rBlock >>> _0x1e283c ^ this._lBlock) & _0x21e855;
              this._lBlock ^= _0x17c772, this._rBlock ^= _0x17c772 << _0x1e283c;
            };
          _0xd7b799 = _0x41a524.lib;
          var _0x2863a6 = _0xd7b799.WordArray;
          _0xd7b799 = _0xd7b799.BlockCipher;
          var _0x303341 = _0x41a524.algo,
            _0x43afe5 = [0x39, 0x31, 0x29, 0x21, 0x19, 0x11, 0x9, 0x1, 0x3a, 0x32, 0x2a, 0x22, 0x1a, 0x12, 0xa, 0x2, 0x3b, 0x33, 0x2b, 0x23, 0x1b, 0x13, 0xb, 0x3, 0x3c, 0x34, 0x2c, 0x24, 0x3f, 0x37, 0x2f, 0x27, 0x1f, 0x17, 0xf, 0x7, 0x3e, 0x36, 0x2e, 0x26, 0x1e, 0x16, 0xe, 0x6, 0x3d, 0x35, 0x2d, 0x25, 0x1d, 0x15, 0xd, 0x5, 0x1c, 0x14, 0xc, 0x4],
            _0x545fe = [0xe, 0x11, 0xb, 0x18, 0x1, 0x5, 0x3, 0x1c, 0xf, 0x6, 0x15, 0xa, 0x17, 0x13, 0xc, 0x4, 0x1a, 0x8, 0x10, 0x7, 0x1b, 0x14, 0xd, 0x2, 0x29, 0x34, 0x1f, 0x25, 0x2f, 0x37, 0x1e, 0x28, 0x33, 0x2d, 0x21, 0x30, 0x2c, 0x31, 0x27, 0x38, 0x22, 0x35, 0x2e, 0x2a, 0x32, 0x24, 0x1d, 0x20],
            _0x4c7f71 = [0x1, 0x2, 0x4, 0x6, 0x8, 0xa, 0xc, 0xe, 0xf, 0x11, 0x13, 0x15, 0x17, 0x19, 0x1b, 0x1c],
            _0x312cda = [{
              '0': 0x808200,
              0x10000000: 0x8000,
              0x20000000: 0x808002,
              0x30000000: 0x2,
              0x40000000: 0x200,
              0x50000000: 0x808202,
              0x60000000: 0x800202,
              0x70000000: 0x800000,
              0x80000000: 0x202,
              0x90000000: 0x800200,
              0xa0000000: 0x8200,
              0xb0000000: 0x808000,
              0xc0000000: 0x8002,
              0xd0000000: 0x800002,
              0xe0000000: 0x0,
              0xf0000000: 0x8202,
              0x8000000: 0x0,
              0x18000000: 0x808202,
              0x28000000: 0x8202,
              0x38000000: 0x8000,
              0x48000000: 0x808200,
              0x58000000: 0x200,
              0x68000000: 0x808002,
              0x78000000: 0x2,
              0x88000000: 0x800200,
              0x98000000: 0x8200,
              0xa8000000: 0x808000,
              0xb8000000: 0x800202,
              0xc8000000: 0x800002,
              0xd8000000: 0x8002,
              0xe8000000: 0x202,
              0xf8000000: 0x800000,
              0x1: 0x8000,
              0x10000001: 0x2,
              0x20000001: 0x808200,
              0x30000001: 0x800000,
              0x40000001: 0x808002,
              0x50000001: 0x8200,
              0x60000001: 0x200,
              0x70000001: 0x800202,
              0x80000001: 0x808202,
              0x90000001: 0x808000,
              0xa0000001: 0x800002,
              0xb0000001: 0x8202,
              0xc0000001: 0x202,
              0xd0000001: 0x800200,
              0xe0000001: 0x8002,
              0xf0000001: 0x0,
              0x8000001: 0x808202,
              0x18000001: 0x808000,
              0x28000001: 0x800000,
              0x38000001: 0x200,
              0x48000001: 0x8000,
              0x58000001: 0x800002,
              0x68000001: 0x2,
              0x78000001: 0x8202,
              0x88000001: 0x8002,
              0x98000001: 0x800202,
              0xa8000001: 0x202,
              0xb8000001: 0x808200,
              0xc8000001: 0x800200,
              0xd8000001: 0x0,
              0xe8000001: 0x8200,
              0xf8000001: 0x808002
            }, {
              '0': 0x40084010,
              0x1000000: 0x4000,
              0x2000000: 0x80000,
              0x3000000: 0x40080010,
              0x4000000: 0x40000010,
              0x5000000: 0x40084000,
              0x6000000: 0x40004000,
              0x7000000: 0x10,
              0x8000000: 0x84000,
              0x9000000: 0x40004010,
              0xa000000: 0x40000000,
              0xb000000: 0x84010,
              0xc000000: 0x80010,
              0xd000000: 0x0,
              0xe000000: 0x4010,
              0xf000000: 0x40080000,
              0x800000: 0x40004000,
              0x1800000: 0x84010,
              0x2800000: 0x10,
              0x3800000: 0x40004010,
              0x4800000: 0x40084010,
              0x5800000: 0x40000000,
              0x6800000: 0x80000,
              0x7800000: 0x40080010,
              0x8800000: 0x80010,
              0x9800000: 0x0,
              0xa800000: 0x4000,
              0xb800000: 0x40080000,
              0xc800000: 0x40000010,
              0xd800000: 0x84000,
              0xe800000: 0x40084000,
              0xf800000: 0x4010,
              0x10000000: 0x0,
              0x11000000: 0x40080010,
              0x12000000: 0x40004010,
              0x13000000: 0x40084000,
              0x14000000: 0x40080000,
              0x15000000: 0x10,
              0x16000000: 0x84010,
              0x17000000: 0x4000,
              0x18000000: 0x4010,
              0x19000000: 0x80000,
              0x1a000000: 0x80010,
              0x1b000000: 0x40000010,
              0x1c000000: 0x84000,
              0x1d000000: 0x40004000,
              0x1e000000: 0x40000000,
              0x1f000000: 0x40084010,
              0x10800000: 0x84010,
              0x11800000: 0x80000,
              0x12800000: 0x40080000,
              0x13800000: 0x4000,
              0x14800000: 0x40004000,
              0x15800000: 0x40084010,
              0x16800000: 0x10,
              0x17800000: 0x40000000,
              0x18800000: 0x40084000,
              0x19800000: 0x40000010,
              0x1a800000: 0x40004010,
              0x1b800000: 0x80010,
              0x1c800000: 0x0,
              0x1d800000: 0x4010,
              0x1e800000: 0x40080010,
              0x1f800000: 0x84000
            }, {
              '0': 0x104,
              0x100000: 0x0,
              0x200000: 0x4000100,
              0x300000: 0x10104,
              0x400000: 0x10004,
              0x500000: 0x4000004,
              0x600000: 0x4010104,
              0x700000: 0x4010000,
              0x800000: 0x4000000,
              0x900000: 0x4010100,
              0xa00000: 0x10100,
              0xb00000: 0x4010004,
              0xc00000: 0x4000104,
              0xd00000: 0x10000,
              0xe00000: 0x4,
              0xf00000: 0x100,
              0x80000: 0x4010100,
              0x180000: 0x4010004,
              0x280000: 0x0,
              0x380000: 0x4000100,
              0x480000: 0x4000004,
              0x580000: 0x10000,
              0x680000: 0x10004,
              0x780000: 0x104,
              0x880000: 0x4,
              0x980000: 0x100,
              0xa80000: 0x4010000,
              0xb80000: 0x10104,
              0xc80000: 0x10100,
              0xd80000: 0x4000104,
              0xe80000: 0x4010104,
              0xf80000: 0x4000000,
              0x1000000: 0x4010100,
              0x1100000: 0x10004,
              0x1200000: 0x10000,
              0x1300000: 0x4000100,
              0x1400000: 0x100,
              0x1500000: 0x4010104,
              0x1600000: 0x4000004,
              0x1700000: 0x0,
              0x1800000: 0x4000104,
              0x1900000: 0x4000000,
              0x1a00000: 0x4,
              0x1b00000: 0x10100,
              0x1c00000: 0x4010000,
              0x1d00000: 0x104,
              0x1e00000: 0x10104,
              0x1f00000: 0x4010004,
              0x1080000: 0x4000000,
              0x1180000: 0x104,
              0x1280000: 0x4010100,
              0x1380000: 0x0,
              0x1480000: 0x10004,
              0x1580000: 0x4000100,
              0x1680000: 0x100,
              0x1780000: 0x4010004,
              0x1880000: 0x10000,
              0x1980000: 0x4010104,
              0x1a80000: 0x10104,
              0x1b80000: 0x4000004,
              0x1c80000: 0x4000104,
              0x1d80000: 0x4010000,
              0x1e80000: 0x4,
              0x1f80000: 0x10100
            }, {
              '0': 0x80401000,
              0x10000: 0x80001040,
              0x20000: 0x401040,
              0x30000: 0x80400000,
              0x40000: 0x0,
              0x50000: 0x401000,
              0x60000: 0x80000040,
              0x70000: 0x400040,
              0x80000: 0x80000000,
              0x90000: 0x400000,
              0xa0000: 0x40,
              0xb0000: 0x80001000,
              0xc0000: 0x80400040,
              0xd0000: 0x1040,
              0xe0000: 0x1000,
              0xf0000: 0x80401040,
              0x8000: 0x80001040,
              0x18000: 0x40,
              0x28000: 0x80400040,
              0x38000: 0x80001000,
              0x48000: 0x401000,
              0x58000: 0x80401040,
              0x68000: 0x0,
              0x78000: 0x80400000,
              0x88000: 0x1000,
              0x98000: 0x80401000,
              0xa8000: 0x400000,
              0xb8000: 0x1040,
              0xc8000: 0x80000000,
              0xd8000: 0x400040,
              0xe8000: 0x401040,
              0xf8000: 0x80000040,
              0x100000: 0x400040,
              0x110000: 0x401000,
              0x120000: 0x80000040,
              0x130000: 0x0,
              0x140000: 0x1040,
              0x150000: 0x80400040,
              0x160000: 0x80401000,
              0x170000: 0x80001040,
              0x180000: 0x80401040,
              0x190000: 0x80000000,
              0x1a0000: 0x80400000,
              0x1b0000: 0x401040,
              0x1c0000: 0x80001000,
              0x1d0000: 0x400000,
              0x1e0000: 0x40,
              0x1f0000: 0x1000,
              0x108000: 0x80400000,
              0x118000: 0x80401040,
              0x128000: 0x0,
              0x138000: 0x401000,
              0x148000: 0x400040,
              0x158000: 0x80000000,
              0x168000: 0x80001040,
              0x178000: 0x40,
              0x188000: 0x80000040,
              0x198000: 0x1000,
              0x1a8000: 0x80001000,
              0x1b8000: 0x80400040,
              0x1c8000: 0x1040,
              0x1d8000: 0x80401000,
              0x1e8000: 0x400000,
              0x1f8000: 0x401040
            }, {
              '0': 0x80,
              0x1000: 0x1040000,
              0x2000: 0x40000,
              0x3000: 0x20000000,
              0x4000: 0x20040080,
              0x5000: 0x1000080,
              0x6000: 0x21000080,
              0x7000: 0x40080,
              0x8000: 0x1000000,
              0x9000: 0x20040000,
              0xa000: 0x20000080,
              0xb000: 0x21040080,
              0xc000: 0x21040000,
              0xd000: 0x0,
              0xe000: 0x1040080,
              0xf000: 0x21000000,
              0x800: 0x1040080,
              0x1800: 0x21000080,
              0x2800: 0x80,
              0x3800: 0x1040000,
              0x4800: 0x40000,
              0x5800: 0x20040080,
              0x6800: 0x21040000,
              0x7800: 0x20000000,
              0x8800: 0x20040000,
              0x9800: 0x0,
              0xa800: 0x21040080,
              0xb800: 0x1000080,
              0xc800: 0x20000080,
              0xd800: 0x21000000,
              0xe800: 0x1000000,
              0xf800: 0x40080,
              0x10000: 0x40000,
              0x11000: 0x80,
              0x12000: 0x20000000,
              0x13000: 0x21000080,
              0x14000: 0x1000080,
              0x15000: 0x21040000,
              0x16000: 0x20040080,
              0x17000: 0x1000000,
              0x18000: 0x21040080,
              0x19000: 0x21000000,
              0x1a000: 0x1040000,
              0x1b000: 0x20040000,
              0x1c000: 0x40080,
              0x1d000: 0x20000080,
              0x1e000: 0x0,
              0x1f000: 0x1040080,
              0x10800: 0x21000080,
              0x11800: 0x1000000,
              0x12800: 0x1040000,
              0x13800: 0x20040080,
              0x14800: 0x20000000,
              0x15800: 0x1040080,
              0x16800: 0x80,
              0x17800: 0x21040000,
              0x18800: 0x40080,
              0x19800: 0x21040080,
              0x1a800: 0x0,
              0x1b800: 0x21000000,
              0x1c800: 0x1000080,
              0x1d800: 0x40000,
              0x1e800: 0x20040000,
              0x1f800: 0x20000080
            }, {
              '0': 0x10000008,
              0x100: 0x2000,
              0x200: 0x10200000,
              0x300: 0x10202008,
              0x400: 0x10002000,
              0x500: 0x200000,
              0x600: 0x200008,
              0x700: 0x10000000,
              0x800: 0x0,
              0x900: 0x10002008,
              0xa00: 0x202000,
              0xb00: 0x8,
              0xc00: 0x10200008,
              0xd00: 0x202008,
              0xe00: 0x2008,
              0xf00: 0x10202000,
              0x80: 0x10200000,
              0x180: 0x10202008,
              0x280: 0x8,
              0x380: 0x200000,
              0x480: 0x202008,
              0x580: 0x10000008,
              0x680: 0x10002000,
              0x780: 0x2008,
              0x880: 0x200008,
              0x980: 0x2000,
              0xa80: 0x10002008,
              0xb80: 0x10200008,
              0xc80: 0x0,
              0xd80: 0x10202000,
              0xe80: 0x202000,
              0xf80: 0x10000000,
              0x1000: 0x10002000,
              0x1100: 0x10200008,
              0x1200: 0x10202008,
              0x1300: 0x2008,
              0x1400: 0x200000,
              0x1500: 0x10000000,
              0x1600: 0x10000008,
              0x1700: 0x202000,
              0x1800: 0x202008,
              0x1900: 0x0,
              0x1a00: 0x8,
              0x1b00: 0x10200000,
              0x1c00: 0x2000,
              0x1d00: 0x10002008,
              0x1e00: 0x10202000,
              0x1f00: 0x200008,
              0x1080: 0x8,
              0x1180: 0x202000,
              0x1280: 0x200000,
              0x1380: 0x10000008,
              0x1480: 0x10002000,
              0x1580: 0x2008,
              0x1680: 0x10202008,
              0x1780: 0x10200000,
              0x1880: 0x10202000,
              0x1980: 0x10200008,
              0x1a80: 0x2000,
              0x1b80: 0x202008,
              0x1c80: 0x200008,
              0x1d80: 0x0,
              0x1e80: 0x10000000,
              0x1f80: 0x10002008
            }, {
              '0': 0x100000,
              0x10: 0x2000401,
              0x20: 0x400,
              0x30: 0x100401,
              0x40: 0x2100401,
              0x50: 0x0,
              0x60: 0x1,
              0x70: 0x2100001,
              0x80: 0x2000400,
              0x90: 0x100001,
              0xa0: 0x2000001,
              0xb0: 0x2100400,
              0xc0: 0x2100000,
              0xd0: 0x401,
              0xe0: 0x100400,
              0xf0: 0x2000000,
              0x8: 0x2100001,
              0x18: 0x0,
              0x28: 0x2000401,
              0x38: 0x2100400,
              0x48: 0x100000,
              0x58: 0x2000001,
              0x68: 0x2000000,
              0x78: 0x401,
              0x88: 0x100401,
              0x98: 0x2000400,
              0xa8: 0x2100000,
              0xb8: 0x100001,
              0xc8: 0x400,
              0xd8: 0x2100401,
              0xe8: 0x1,
              0xf8: 0x100400,
              0x100: 0x2000000,
              0x110: 0x100000,
              0x120: 0x2000401,
              0x130: 0x2100001,
              0x140: 0x100001,
              0x150: 0x2000400,
              0x160: 0x2100400,
              0x170: 0x100401,
              0x180: 0x401,
              0x190: 0x2100401,
              0x1a0: 0x100400,
              0x1b0: 0x1,
              0x1c0: 0x0,
              0x1d0: 0x2100000,
              0x1e0: 0x2000001,
              0x1f0: 0x400,
              0x108: 0x100400,
              0x118: 0x2000401,
              0x128: 0x2100001,
              0x138: 0x1,
              0x148: 0x2000000,
              0x158: 0x100000,
              0x168: 0x401,
              0x178: 0x2100400,
              0x188: 0x2000001,
              0x198: 0x2100000,
              0x1a8: 0x0,
              0x1b8: 0x2100401,
              0x1c8: 0x100401,
              0x1d8: 0x400,
              0x1e8: 0x2000400,
              0x1f8: 0x100001
            }, {
              '0': 0x8000820,
              0x1: 0x20000,
              0x2: 0x8000000,
              0x3: 0x20,
              0x4: 0x20020,
              0x5: 0x8020820,
              0x6: 0x8020800,
              0x7: 0x800,
              0x8: 0x8020000,
              0x9: 0x8000800,
              0xa: 0x20800,
              0xb: 0x8020020,
              0xc: 0x820,
              0xd: 0x0,
              0xe: 0x8000020,
              0xf: 0x20820,
              0x80000000: 0x800,
              0x80000001: 0x8020820,
              0x80000002: 0x8000820,
              0x80000003: 0x8000000,
              0x80000004: 0x8020000,
              0x80000005: 0x20800,
              0x80000006: 0x20820,
              0x80000007: 0x20,
              0x80000008: 0x8000020,
              0x80000009: 0x820,
              0x8000000a: 0x20020,
              0x8000000b: 0x8020800,
              0x8000000c: 0x0,
              0x8000000d: 0x8020020,
              0x8000000e: 0x8000800,
              0x8000000f: 0x20000,
              0x10: 0x20820,
              0x11: 0x8020800,
              0x12: 0x20,
              0x13: 0x800,
              0x14: 0x8000800,
              0x15: 0x8000020,
              0x16: 0x8020020,
              0x17: 0x20000,
              0x18: 0x0,
              0x19: 0x20020,
              0x1a: 0x8020000,
              0x1b: 0x8000820,
              0x1c: 0x8020820,
              0x1d: 0x20800,
              0x1e: 0x820,
              0x1f: 0x8000000,
              0x80000010: 0x20000,
              0x80000011: 0x800,
              0x80000012: 0x8020020,
              0x80000013: 0x20820,
              0x80000014: 0x20,
              0x80000015: 0x8020000,
              0x80000016: 0x8000000,
              0x80000017: 0x8000820,
              0x80000018: 0x8020820,
              0x80000019: 0x8000020,
              0x8000001a: 0x8000800,
              0x8000001b: 0x0,
              0x8000001c: 0x20800,
              0x8000001d: 0x820,
              0x8000001e: 0x20020,
              0x8000001f: 0x8020800
            }],
            _0x13f5c5 = [0xf8000001, 0x1f800000, 0x1f80000, 0x1f8000, 0x1f800, 0x1f80, 0x1f8, 0x8000001f],
            _0x28df9f = _0x303341.DES = _0xd7b799.extend({
              '_doReset': function () {
                for (var _0x442d7a = this._key.words, _0x3f719c = [], _0xe494ed = 0x0; 0x38 > _0xe494ed; _0xe494ed++) {
                  var _0x6a6cf3 = _0x43afe5[_0xe494ed] - 0x1;
                  _0x3f719c[_0xe494ed] = _0x442d7a[_0x6a6cf3 >>> 0x5] >>> 0x1f - _0x6a6cf3 % 0x20 & 0x1;
                }
                _0x442d7a = this._subKeys = [];
                for (_0x6a6cf3 = 0x0; 0x10 > _0x6a6cf3; _0x6a6cf3++) {
                  for (var _0x2e6111 = _0x442d7a[_0x6a6cf3] = [], _0x2760d5 = _0x4c7f71[_0x6a6cf3], _0xe494ed = 0x0; 0x18 > _0xe494ed; _0xe494ed++) _0x2e6111[_0xe494ed / 0x6 | 0x0] |= _0x3f719c[(_0x545fe[_0xe494ed] - 0x1 + _0x2760d5) % 0x1c] << 0x1f - _0xe494ed % 0x6, _0x2e6111[0x4 + (_0xe494ed / 0x6 | 0x0)] |= _0x3f719c[0x1c + (_0x545fe[_0xe494ed + 0x18] - 0x1 + _0x2760d5) % 0x1c] << 0x1f - _0xe494ed % 0x6;
                  _0x2e6111[0x0] = _0x2e6111[0x0] << 0x1 | _0x2e6111[0x0] >>> 0x1f;
                  for (_0xe494ed = 0x1; 0x7 > _0xe494ed; _0xe494ed++) _0x2e6111[_0xe494ed] >>>= 0x4 * (_0xe494ed - 0x1) + 0x3;
                  _0x2e6111[0x7] = _0x2e6111[0x7] << 0x5 | _0x2e6111[0x7] >>> 0x1b;
                }
                _0x3f719c = this._invSubKeys = [];
                for (_0xe494ed = 0x0; 0x10 > _0xe494ed; _0xe494ed++) _0x3f719c[_0xe494ed] = _0x442d7a[0xf - _0xe494ed];
              },
              'encryptBlock': function (_0x29a9ef, _0x44f6a5) {
                this._doCryptBlock(_0x29a9ef, _0x44f6a5, this._subKeys);
              },
              'decryptBlock': function (_0x23e7c1, _0x5d00c4) {
                this._doCryptBlock(_0x23e7c1, _0x5d00c4, this._invSubKeys);
              },
              '_doCryptBlock': function (_0x4c3c79, _0x343adb, _0x151deb) {
                this._lBlock = _0x4c3c79[_0x343adb], this._rBlock = _0x4c3c79[_0x343adb + 0x1], _0x515c7c.call(this, 0x4, 0xf0f0f0f), _0x515c7c.call(this, 0x10, 0xffff), _0x1b054e.call(this, 0x2, 0x33333333), _0x1b054e.call(this, 0x8, 0xff00ff), _0x515c7c.call(this, 0x1, 0x55555555);
                for (var _0x27a948 = 0x0; 0x10 > _0x27a948; _0x27a948++) {
                  for (var _0x2fdb94 = _0x151deb[_0x27a948], _0x249e56 = this._lBlock, _0x3759fa = this._rBlock, _0x198d93 = 0x0, _0x46ff4c = 0x0; 0x8 > _0x46ff4c; _0x46ff4c++) _0x198d93 |= _0x312cda[_0x46ff4c][((_0x3759fa ^ _0x2fdb94[_0x46ff4c]) & _0x13f5c5[_0x46ff4c]) >>> 0x0];
                  this._lBlock = _0x3759fa, this._rBlock = _0x249e56 ^ _0x198d93;
                }
                _0x151deb = this._lBlock, this._lBlock = this._rBlock, this._rBlock = _0x151deb, _0x515c7c.call(this, 0x1, 0x55555555), _0x1b054e.call(this, 0x8, 0xff00ff), _0x1b054e.call(this, 0x2, 0x33333333), _0x515c7c.call(this, 0x10, 0xffff), _0x515c7c.call(this, 0x4, 0xf0f0f0f), _0x4c3c79[_0x343adb] = this._lBlock, _0x4c3c79[_0x343adb + 0x1] = this._rBlock;
              },
              'keySize': 0x2,
              'ivSize': 0x2,
              'blockSize': 0x2
            });
          _0x41a524.DES = _0xd7b799._createHelper(_0x28df9f), _0x303341 = _0x303341.TripleDES = _0xd7b799.extend({
            '_doReset': function () {
              var _0x170a70 = this._key.words;
              this._des1 = _0x28df9f.createEncryptor(_0x2863a6.create(_0x170a70.slice(0x0, 0x2))), this._des2 = _0x28df9f.createEncryptor(_0x2863a6.create(_0x170a70.slice(0x2, 0x4))), this._des3 = _0x28df9f.createEncryptor(_0x2863a6.create(_0x170a70.slice(0x4, 0x6)));
            },
            'encryptBlock': function (_0x25f78f, _0x19dbf7) {
              this._des1.encryptBlock(_0x25f78f, _0x19dbf7), this._des2.decryptBlock(_0x25f78f, _0x19dbf7), this._des3.encryptBlock(_0x25f78f, _0x19dbf7);
            },
            'decryptBlock': function (_0x5c5006, _0x4e9c32) {
              this._des3.decryptBlock(_0x5c5006, _0x4e9c32), this._des2.encryptBlock(_0x5c5006, _0x4e9c32), this._des1.decryptBlock(_0x5c5006, _0x4e9c32);
            },
            'keySize': 0x6,
            'ivSize': 0x2,
            'blockSize': 0x2
          }), _0x41a524.TripleDES = _0xd7b799._createHelper(_0x303341), _0x5b8841.exports = _0x41a524.TripleDES, !0x0;
        }, function (_0x411fef, _0x1c8dbd, _0x4f42a5) {
          _0x1c8dbd = _0x4f42a5(0x5), _0x4f42a5(0xc), _0x4f42a5(0xd), _0x4f42a5(0xe), _0x4f42a5(0xf);
          var _0x182c75 = function () {
            for (var _0x4d3fc2 = this._X, _0xbf2085 = this._C, _0x1dae16 = 0x0; 0x8 > _0x1dae16; _0x1dae16++) _0x4c3026[_0x1dae16] = _0xbf2085[_0x1dae16];
            _0xbf2085[0x0] = _0xbf2085[0x0] + 0x4d34d34d + this._b | 0x0, _0xbf2085[0x1] = _0xbf2085[0x1] + 0xd34d34d3 + (_0xbf2085[0x0] >>> 0x0 < _0x4c3026[0x0] >>> 0x0 ? 0x1 : 0x0) | 0x0, _0xbf2085[0x2] = _0xbf2085[0x2] + 0x34d34d34 + (_0xbf2085[0x1] >>> 0x0 < _0x4c3026[0x1] >>> 0x0 ? 0x1 : 0x0) | 0x0, _0xbf2085[0x3] = _0xbf2085[0x3] + 0x4d34d34d + (_0xbf2085[0x2] >>> 0x0 < _0x4c3026[0x2] >>> 0x0 ? 0x1 : 0x0) | 0x0, _0xbf2085[0x4] = _0xbf2085[0x4] + 0xd34d34d3 + (_0xbf2085[0x3] >>> 0x0 < _0x4c3026[0x3] >>> 0x0 ? 0x1 : 0x0) | 0x0, _0xbf2085[0x5] = _0xbf2085[0x5] + 0x34d34d34 + (_0xbf2085[0x4] >>> 0x0 < _0x4c3026[0x4] >>> 0x0 ? 0x1 : 0x0) | 0x0, _0xbf2085[0x6] = _0xbf2085[0x6] + 0x4d34d34d + (_0xbf2085[0x5] >>> 0x0 < _0x4c3026[0x5] >>> 0x0 ? 0x1 : 0x0) | 0x0, _0xbf2085[0x7] = _0xbf2085[0x7] + 0xd34d34d3 + (_0xbf2085[0x6] >>> 0x0 < _0x4c3026[0x6] >>> 0x0 ? 0x1 : 0x0) | 0x0, this._b = _0xbf2085[0x7] >>> 0x0 < _0x4c3026[0x7] >>> 0x0 ? 0x1 : 0x0;
            for (_0x1dae16 = 0x0; 0x8 > _0x1dae16; _0x1dae16++) {
              var _0x5f0463 = _0x4d3fc2[_0x1dae16] + _0xbf2085[_0x1dae16],
                _0xf95258 = 0xffff & _0x5f0463,
                _0xd43d0d = _0x5f0463 >>> 0x10;
              _0x63032e[_0x1dae16] = ((_0xf95258 * _0xf95258 >>> 0x11) + _0xf95258 * _0xd43d0d >>> 0xf) + _0xd43d0d * _0xd43d0d ^ ((0xffff0000 & _0x5f0463) * _0x5f0463 | 0x0) + ((0xffff & _0x5f0463) * _0x5f0463 | 0x0);
            }
            _0x4d3fc2[0x0] = _0x63032e[0x0] + (_0x63032e[0x7] << 0x10 | _0x63032e[0x7] >>> 0x10) + (_0x63032e[0x6] << 0x10 | _0x63032e[0x6] >>> 0x10) | 0x0, _0x4d3fc2[0x1] = _0x63032e[0x1] + (_0x63032e[0x0] << 0x8 | _0x63032e[0x0] >>> 0x18) + _0x63032e[0x7] | 0x0, _0x4d3fc2[0x2] = _0x63032e[0x2] + (_0x63032e[0x1] << 0x10 | _0x63032e[0x1] >>> 0x10) + (_0x63032e[0x0] << 0x10 | _0x63032e[0x0] >>> 0x10) | 0x0, _0x4d3fc2[0x3] = _0x63032e[0x3] + (_0x63032e[0x2] << 0x8 | _0x63032e[0x2] >>> 0x18) + _0x63032e[0x1] | 0x0, _0x4d3fc2[0x4] = _0x63032e[0x4] + (_0x63032e[0x3] << 0x10 | _0x63032e[0x3] >>> 0x10) + (_0x63032e[0x2] << 0x10 | _0x63032e[0x2] >>> 0x10) | 0x0, _0x4d3fc2[0x5] = _0x63032e[0x5] + (_0x63032e[0x4] << 0x8 | _0x63032e[0x4] >>> 0x18) + _0x63032e[0x3] | 0x0, _0x4d3fc2[0x6] = _0x63032e[0x6] + (_0x63032e[0x5] << 0x10 | _0x63032e[0x5] >>> 0x10) + (_0x63032e[0x4] << 0x10 | _0x63032e[0x4] >>> 0x10) | 0x0, _0x4d3fc2[0x7] = _0x63032e[0x7] + (_0x63032e[0x6] << 0x8 | _0x63032e[0x6] >>> 0x18) + _0x63032e[0x5] | 0x0;
          };
          _0x4f42a5 = _0x1c8dbd.lib.StreamCipher;
          var _0x2317ab = [],
            _0x4c3026 = [],
            _0x63032e = [],
            _0x4ae5fc = _0x1c8dbd.algo.Rabbit = _0x4f42a5.extend({
              '_doReset': function () {
                for (var _0x32a8bd = this._key.words, _0x6be05c = this.cfg.iv, _0x2a675b = 0x0; 0x4 > _0x2a675b; _0x2a675b++) _0x32a8bd[_0x2a675b] = 0xff00ff & (_0x32a8bd[_0x2a675b] << 0x8 | _0x32a8bd[_0x2a675b] >>> 0x18) | 0xff00ff00 & (_0x32a8bd[_0x2a675b] << 0x18 | _0x32a8bd[_0x2a675b] >>> 0x8);
                for (var _0x10c766 = this._X = [_0x32a8bd[0x0], _0x32a8bd[0x3] << 0x10 | _0x32a8bd[0x2] >>> 0x10, _0x32a8bd[0x1], _0x32a8bd[0x0] << 0x10 | _0x32a8bd[0x3] >>> 0x10, _0x32a8bd[0x2], _0x32a8bd[0x1] << 0x10 | _0x32a8bd[0x0] >>> 0x10, _0x32a8bd[0x3], _0x32a8bd[0x2] << 0x10 | _0x32a8bd[0x1] >>> 0x10], _0x32a8bd = this._C = [_0x32a8bd[0x2] << 0x10 | _0x32a8bd[0x2] >>> 0x10, 0xffff0000 & _0x32a8bd[0x0] | 0xffff & _0x32a8bd[0x1], _0x32a8bd[0x3] << 0x10 | _0x32a8bd[0x3] >>> 0x10, 0xffff0000 & _0x32a8bd[0x1] | 0xffff & _0x32a8bd[0x2], _0x32a8bd[0x0] << 0x10 | _0x32a8bd[0x0] >>> 0x10, 0xffff0000 & _0x32a8bd[0x2] | 0xffff & _0x32a8bd[0x3], _0x32a8bd[0x1] << 0x10 | _0x32a8bd[0x1] >>> 0x10, 0xffff0000 & _0x32a8bd[0x3] | 0xffff & _0x32a8bd[0x0]], _0x2a675b = this._b = 0x0; 0x4 > _0x2a675b; _0x2a675b++) _0x182c75.call(this);
                for (_0x2a675b = 0x0; 0x8 > _0x2a675b; _0x2a675b++) _0x32a8bd[_0x2a675b] ^= _0x10c766[_0x2a675b + 0x4 & 0x7];
                if (_0x6be05c) {
                  var _0x2a675b = _0x6be05c.words,
                    _0x6be05c = _0x2a675b[0x0],
                    _0x2a675b = _0x2a675b[0x1],
                    _0x6be05c = 0xff00ff & (_0x6be05c << 0x8 | _0x6be05c >>> 0x18) | 0xff00ff00 & (_0x6be05c << 0x18 | _0x6be05c >>> 0x8),
                    _0x2a675b = 0xff00ff & (_0x2a675b << 0x8 | _0x2a675b >>> 0x18) | 0xff00ff00 & (_0x2a675b << 0x18 | _0x2a675b >>> 0x8),
                    _0x10c766 = _0x6be05c >>> 0x10 | 0xffff0000 & _0x2a675b,
                    _0x42ff87 = _0x2a675b << 0x10 | 0xffff & _0x6be05c;
                  _0x32a8bd[0x0] ^= _0x6be05c, _0x32a8bd[0x1] ^= _0x10c766, _0x32a8bd[0x2] ^= _0x2a675b, _0x32a8bd[0x3] ^= _0x42ff87, _0x32a8bd[0x4] ^= _0x6be05c, _0x32a8bd[0x5] ^= _0x10c766, _0x32a8bd[0x6] ^= _0x2a675b, _0x32a8bd[0x7] ^= _0x42ff87;
                  for (_0x2a675b = 0x0; 0x4 > _0x2a675b; _0x2a675b++) _0x182c75.call(this);
                }
              },
              '_doProcessBlock': function (_0x306183, _0x2391be) {
                var _0x297886 = this._X;
                _0x182c75.call(this), _0x2317ab[0x0] = _0x297886[0x0] ^ _0x297886[0x5] >>> 0x10 ^ _0x297886[0x3] << 0x10, _0x2317ab[0x1] = _0x297886[0x2] ^ _0x297886[0x7] >>> 0x10 ^ _0x297886[0x5] << 0x10, _0x2317ab[0x2] = _0x297886[0x4] ^ _0x297886[0x1] >>> 0x10 ^ _0x297886[0x7] << 0x10, _0x2317ab[0x3] = _0x297886[0x6] ^ _0x297886[0x3] >>> 0x10 ^ _0x297886[0x1] << 0x10;
                for (_0x297886 = 0x0; 0x4 > _0x297886; _0x297886++) _0x2317ab[_0x297886] = 0xff00ff & (_0x2317ab[_0x297886] << 0x8 | _0x2317ab[_0x297886] >>> 0x18) | 0xff00ff00 & (_0x2317ab[_0x297886] << 0x18 | _0x2317ab[_0x297886] >>> 0x8), _0x306183[_0x2391be + _0x297886] ^= _0x2317ab[_0x297886];
              },
              'blockSize': 0x4,
              'ivSize': 0x2
            });
          _0x1c8dbd.Rabbit = _0x4f42a5._createHelper(_0x4ae5fc), _0x411fef.exports = _0x1c8dbd.Rabbit, !0x0;
        }, function (_0x3b84b6, _0x46e74b, _0x21548f) {
          _0x46e74b = _0x21548f(0x5), _0x21548f(0xc), _0x21548f(0xd), _0x21548f(0xe), _0x21548f(0xf);
          var _0x5c0817 = function () {
            for (var _0x372f4e = this._S, _0x54b8e5 = this._i, _0x3e1092 = this._j, _0xaac704 = 0x0, _0x2bd0be = 0x0; 0x4 > _0x2bd0be; _0x2bd0be++) {
              var _0x54b8e5 = (_0x54b8e5 + 0x1) % 0x100,
                _0x3e1092 = (_0x3e1092 + _0x372f4e[_0x54b8e5]) % 0x100,
                _0x4b276a = _0x372f4e[_0x54b8e5];
              _0x372f4e[_0x54b8e5] = _0x372f4e[_0x3e1092], _0x372f4e[_0x3e1092] = _0x4b276a, _0xaac704 |= _0x372f4e[(_0x372f4e[_0x54b8e5] + _0x372f4e[_0x3e1092]) % 0x100] << 0x18 - 0x8 * _0x2bd0be;
            }
            return this._i = _0x54b8e5, this._j = _0x3e1092, _0xaac704;
          };
          _0x21548f = _0x46e74b.lib.StreamCipher;
          var _0x5563ef = _0x46e74b.algo,
            _0x194a01 = _0x5563ef.RC4 = _0x21548f.extend({
              '_doReset': function () {
                for (var _0x219a0b = this._key, _0x13904d = _0x219a0b.words, _0x219a0b = _0x219a0b.sigBytes, _0x3a8775 = this._S = [], _0x54bc60 = 0x0; 0x100 > _0x54bc60; _0x54bc60++) _0x3a8775[_0x54bc60] = _0x54bc60;
                for (var _0x12516a = _0x54bc60 = 0x0; 0x100 > _0x54bc60; _0x54bc60++) {
                  var _0x50c9ac = _0x54bc60 % _0x219a0b,
                    _0x12516a = (_0x12516a + _0x3a8775[_0x54bc60] + (_0x13904d[_0x50c9ac >>> 0x2] >>> 0x18 - 0x8 * (_0x50c9ac % 0x4) & 0xff)) % 0x100,
                    _0x50c9ac = _0x3a8775[_0x54bc60];
                  _0x3a8775[_0x54bc60] = _0x3a8775[_0x12516a], _0x3a8775[_0x12516a] = _0x50c9ac;
                }
                this._i = this._j = 0x0;
              },
              '_doProcessBlock': function (_0x3eed33, _0x209610) {
                _0x3eed33[_0x209610] ^= _0x5c0817.call(this);
              },
              'keySize': 0x8,
              'ivSize': 0x0
            });
          _0x46e74b.RC4 = _0x21548f._createHelper(_0x194a01), _0x5563ef = _0x5563ef.RC4Drop = _0x194a01.extend({
            'cfg': _0x194a01.cfg.extend({
              'drop': 0xc0
            }),
            '_doReset': function () {
              _0x194a01._doReset.call(this);
              for (var _0x3605f8 = this.cfg.drop; 0x0 < _0x3605f8; _0x3605f8--) _0x5c0817.call(this);
            }
          }), _0x46e74b.RC4Drop = _0x21548f._createHelper(_0x5563ef), _0x3b84b6.exports = _0x46e74b.RC4, !0x0;
        }],
        _0x3af915 = function (_0x40e292) {
          if (_0x51f48f[_0x40e292]) return _0x51f48f[_0x40e292].exports;
          var _0x4d2cad = _0x51f48f[_0x40e292] = {
            'exports': {},
            'id': _0x40e292,
            'loaded': !0x1
          };
          return _0x5db129[_0x40e292].call(_0x4d2cad.exports, _0x4d2cad, _0x4d2cad.exports, _0x3af915), _0x4d2cad.loaded = !0x0, _0x4d2cad.exports;
        },
        _0x51f48f = {};
      return _0x3af915.m = _0x5db129, _0x3af915.c = _0x51f48f, _0x3af915.p = '', _0x3af915(0x0);
    };
    'object' == typeof exports && 'object' == typeof module ? module.exports = _0x26bda6() : 'function' == typeof define && define.amd ? define('SecureLS', [], _0x26bda6) : 'object' == typeof exports ? exports.SecureLS = _0x26bda6() : this.SecureLS = _0x26bda6(), !0x0;
  })(), null !== SecureLS && 'undefined' !== typeof SecureLS && (ig.global.SecureLS = SecureLS, ig.SecureLS = SecureLS);
}), ig.baked = !0x0, ig.module('plugins.io.storage-manager').requires('impact.game', 'plugins.io.io-manager', 'plugins.secure-ls').defines(function () {
  ig.secure = new SecureLS({
    'encodingType': 'aes'
  }), ig.Game.prototype.name = 'MJS-Game', ig.Game.prototype.version = '1.0.0', ig.Game.prototype.sessionData = {}, ig.Game.prototype.hash = function (_0x193ad7) {
    var _0x3054bd = 0x0,
      _0x531464,
      _0x434b5f;
    if (0x0 === _0x193ad7.length) return _0x3054bd;
    for (_0x531464 = 0x0; _0x531464 < _0x193ad7.length; _0x531464++) _0x434b5f = _0x193ad7.charCodeAt(_0x531464), _0x3054bd = (_0x3054bd << 0x5) - _0x3054bd + _0x434b5f, _0x3054bd |= 0x0;
    return _0x3054bd.toString(0x24);
  }, ig.Game.prototype.initData = function () {
    return this.sessionData = {
      'sfx': 0x1,
      'bgm': 0x1,
      'level': 0x1,
      'score': 0x0
    };
  }, ig.Game.prototype.setupStorageManager = function () {
    'undefined' !== typeof this.name && 'undefined' !== typeof this.version && (this.io || (this.io = new IoManager()), this.storage = this.io.storage, this.storageName = this.hash(this.name + '-v' + this.version).replace('-', 's'), this.loadAll());
  }, ig.Game.prototype.loadAll = function () {
    var _0x4c59cf = ig.secure.get(this.storageName);
    '' == _0x4c59cf ? (this.initData(), this.saveAll()) : this.sessionData = JSON.parse(_0x4c59cf);
  }, ig.Game.prototype.saveAll = function () {
    ig.secure.set(this.storageName, JSON.stringify(this.sessionData));
  }, ig.Game.prototype.load = function (_0x3d8861) {
    return this.sessionData[_0x3d8861];
  }, ig.Game.prototype.save = function (_0x41b78c, _0x445209) {
    this.sessionData[_0x41b78c] = _0x445209, this.saveAll();
  };
}), ig.baked = !0x0, ig.module('plugins.kvn-utility').requires('impact.entity').defines(function () {
  ig.KvnUtility = {
    'getRandomInteger': function (_0x1b0049, _0x4c54bd) {
      return Math.floor(Math.random() * (_0x4c54bd - _0x1b0049)) + _0x1b0049;
    },
    'getRandomNegative': function (_0x1ee3c1) {
      return _0x1ee3c1 * (0x1 == Math.floor(0x2 * Math.random()) ? 0x1 : -0x1);
    },
    'lerp': function (_0x545333, _0x4f60fe, _0x3c4ac3) {
      return (0x1 - _0x3c4ac3) * _0x545333 + _0x3c4ac3 * _0x4f60fe;
    },
    'drawStrokedText': function (_0x26f41e, _0x2e1ff5, _0x3c05b6, _0x3f7eb7, _0x5177df, _0x2b0002) {
      null == _0x5177df && (_0x5177df = 'black'), null == _0x2b0002 && (_0x2b0002 = 0x4), _0x26f41e.save(), _0x26f41e.strokeStyle = _0x5177df, _0x26f41e.lineWidth = _0x2b0002, _0x26f41e.lineJoin = 'round', _0x26f41e.miterLimit = 0x2, _0x26f41e.strokeText(_0x2e1ff5, _0x3c05b6, _0x3f7eb7), _0x26f41e.fillText(_0x2e1ff5, _0x3c05b6, _0x3f7eb7), _0x26f41e.restore();
    },
    'drawShadowedText': function (_0x59c1f5, _0x3d8d4d, _0x215e9d, _0x52f2a5, _0x4812d8, _0x4e0fa5, _0x4c3ef0, _0x22f83c) {
      null == _0x4812d8 && (_0x4812d8 = '#000000'), null == _0x4e0fa5 && (_0x4e0fa5 = 0x3), null == _0x4c3ef0 && (_0x4c3ef0 = 0x4), null == _0x22f83c && (_0x22f83c = 0x4), _0x59c1f5.save(), _0x59c1f5.shadowBlur = _0x4e0fa5, _0x59c1f5.shadowColor = _0x4812d8, _0x59c1f5.shadowOffsetX = _0x4c3ef0, _0x59c1f5.shadowOffsetY = _0x22f83c, _0x59c1f5.fillText(_0x3d8d4d, _0x215e9d, _0x52f2a5), _0x59c1f5.restore();
    },
    'drawGlowingText': function (_0x255891, _0x490501, _0x21276e, _0x420e85, _0x3472cb, _0x125b0a) {
      null == _0x125b0a && (_0x125b0a = 0xa), _0x255891.save(), _0x255891.shadowBlur = _0x125b0a, _0x255891.shadowColor = _0x3472cb, _0x255891.strokeText(_0x490501, _0x21276e, _0x420e85);
      for (_0x3472cb = 0x0; 0x3 > _0x3472cb; _0x3472cb++) _0x255891.fillText(_0x490501, _0x21276e, _0x420e85);
      _0x255891.restore();
    },
    'drawBlurredText': function (_0x105bc4, _0x14db3b, _0x201e17, _0x49e36f, _0x1b3565) {
      null == _0x1b3565 && (_0x1b3565 = 0x5), _0x105bc4.save();
      var _0x341f2f = _0x105bc4.measureText(_0x14db3b).width + 0x2 * _0x1b3565;
      _0x105bc4.shadowColor = _0x105bc4.fillStyle, _0x105bc4.shadowOffsetX = _0x341f2f + _0x201e17 + _0x105bc4.canvas.width, _0x105bc4.shadowOffsetY = 0x0, _0x105bc4.shadowBlur = _0x1b3565, _0x105bc4.fillText(_0x14db3b, -_0x341f2f + -_0x105bc4.canvas.width, _0x49e36f), _0x105bc4.restore();
    },
    'drawReflectedText': function (_0x3e5c6d, _0x2ac61d, _0x103ac9, _0x4e2646, _0x104c38, _0x4c352f) {
      null == _0x104c38 && (_0x104c38 = 0.2), null == _0x4c352f && (_0x4c352f = 0.1), _0x3e5c6d.save(), _0x3e5c6d.fillText(_0x2ac61d, _0x103ac9, _0x4e2646), _0x3e5c6d.scale(0x1, -_0x104c38), _0x3e5c6d.globalAlpha = _0x4c352f, _0x3e5c6d.shadowColor = _0x3e5c6d.fillStyle, _0x3e5c6d.shadowBlur = 0xf, _0x3e5c6d.fillText(_0x2ac61d, _0x103ac9, -(_0x4e2646 * (0x1 / _0x104c38))), _0x3e5c6d.restore();
    }
  };
}), ig.baked = !0x0, ig.module('plugins.splash-loader').requires('impact.loader', 'impact.animation', 'plugins.kvn-utility').defines(function () {
  ig.SplashLoader = ig.Loader.extend({
    'tapToStartDivId': 'tap-to-start',
    'splashDesktop': new ig.Image('media/graphics/splash/desktop/cover.jpg'),
    'splashMobile': new ig.Image('media/graphics/splash/mobile/cover.jpg'),
    'customAnim': new ig.AnimationSheet('media/graphics/splash/loading/anim.png', 0x100, 0xa0),
    'sprite': new ig.Image('media/graphics/backgrounds/bg-scrolling-image.png'),
    'title': new ig.Image('media/graphics/splash/splash-image.png'),
    'barSize': {
      'x': 0x306,
      'y': 0x382
    },
    'init': function (_0x212477, _0x455426) {
      this.parent(_0x212477, _0x455426), this.setupCustomAnimation(), ig.apiHandler.run('MJSPreroll');
    },
    'end': function () {
      this._endParent = this.parent, this._drawStatus = 0x1, _SETTINGS.TapToStartAudioUnlock.Enabled ? this.tapToStartDiv(function () {
        this._endParent(), ('undefined' === typeof ig.game || null == ig.game) && ig.system.setGame(this.gameClass);
      }.bind(this)) : (this._endParent(), ('undefined' === typeof ig.game || null == ig.game) && ig.system.setGame(this.gameClass)), this.draw();
    },
    'tapToStartDiv': function (_0xb0221) {
      this.desktopCoverDIV = document.getElementById(this.tapToStartDivId);
      if (!this.desktopCoverDIV) {
        this.desktopCoverDIV = document.createElement('div'), this.desktopCoverDIV.id = this.tapToStartDivId, this.desktopCoverDIV.setAttribute('class', 'play'), this.desktopCoverDIV.setAttribute('style', "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"), this.desktopCoverDIV.innerHTML = "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: montserrat;'>" + _STRINGS.Splash.TapToStart + '</div></div>', (document.getElementById('play').parentNode || document.getElementById('ajaxbar')).appendChild(this.desktopCoverDIV);
        try {
          'undefined' !== typeof ig.sizeHandler ? 'undefined' !== typeof ig.sizeHandler.coreDivsToResize && (ig.sizeHandler.coreDivsToResize.push('#' + this.tapToStartDivId), 'function' === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient()) : 'undefined' !== typeof coreDivsToResize && (coreDivsToResize.push(this.tapToStartDivId), 'function' === typeof sizeHandler && sizeHandler());
        } catch (_0xa6835) {
          console.log(_0xa6835);
        }
        this.desktopCoverDIV.addEventListener('click', function () {
          ig.soundHandler.unlockWebAudio(), this.setAttribute('style', "visibility: hidden;"), 'function' === typeof _0xb0221 && _0xb0221();
        });
      }
    },
    'setupCustomAnimation': function () {
      this.animHeight = this.customAnim.height, this.animWidth = this.customAnim.width, this.customAnim = new ig.Animation(this.customAnim, 0.025, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
    },
    'animate': function () {
      ig.Timer.step(), this.customAnim.update();
    },
    'drawCheck': 0x0,
    'draw': function () {
      this._drawStatus += (this.status - this._drawStatus) / 0x5, 0x1 === this.drawCheck && console.log("Font should be loaded before loader draw loop"), 0x2 > this.drawCheck && this.drawCheck++, ig.system.context.fillStyle = '#FEC820', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
      var _0x1b0db1 = ig.system.scale,
        _0x334876 = ig.system.realHeight / 0x2,
        _0x4225f0 = ig.system.realWidth / 0x2,
        _0x1e82e2 = _0x334876 - this.barSize.y / 0x2,
        _0x11bd09 = this.barSize.x * this._drawStatus * _0x1b0db1,
        _0x458651 = this.barSize.y,
        _0x1b0db1 = (_0x4225f0 - this.barSize.x / 0x2) * _0x1b0db1,
        _0x490d75 = _0x4225f0 - 0x2bc,
        _0x46341e = _0x334876 - 0x2bc;
      this.sprite.draw(_0x490d75, _0x46341e), this.sprite.draw(_0x490d75 - 0x4b0, _0x46341e), this.sprite.draw(_0x490d75 + 0x4b0, _0x46341e), this.sprite.draw(_0x490d75, _0x46341e + 0x4b0), this.sprite.draw(_0x490d75, _0x46341e - 0x4b0), _0x490d75 = ig.system.context, _0x490d75.save(), _0x490d75.fillStyle = '#fff', this.title.draw(_0x1b0db1, _0x1e82e2, 0x0, 0x0, _0x11bd09, _0x458651), _0x490d75.textAlign = 'center', _0x490d75.font = "80px comicy", _0x1e82e2 = _STRINGS.Splash.Loading, _0x490d75.fillStyle = '#D88D10', _0x490d75.fillText(_0x1e82e2, _0x4225f0, _0x334876 + this.barSize.y / 0x2 + 0xf), _0x490d75.fillStyle = '#FF5129', ig.KvnUtility.drawStrokedText(_0x490d75, _0x1e82e2, _0x4225f0, _0x334876 + this.barSize.y / 0x2, '#000', 0xc), _0x490d75.restore();
    },
    'drawVersion': function () {
      if ('undefined' !== typeof _SETTINGS.Versioning && null !== _SETTINGS.Versioning && _SETTINGS.Versioning.DrawVersion) {
        var _0x2b50de = ig.system.context;
        fontSize = _SETTINGS.Versioning.FontSize, fontFamily = _SETTINGS.Versioning.FontFamily, fillStyle = _SETTINGS.Versioning.FillStyle, _0x2b50de.save(), _0x2b50de.textBaseline = 'bottom', _0x2b50de.textAlign = 'left', _0x2b50de.font = fontSize + " " + fontFamily || "10px Arial", _0x2b50de.fillStyle = fillStyle || '#ffffff', _0x2b50de.fillText('v' + _SETTINGS.Versioning.Version + '+build.' + _SETTINGS.Versioning.Build, 0xa, ig.system.height - 0xa), _0x2b50de.restore();
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.tween').requires('impact.entity').defines(function () {
  Array.prototype.indexOf || (Array.prototype.indexOf = function (_0x391c01) {
    for (var _0x4563d0 = 0x0; _0x4563d0 < this.length; ++_0x4563d0) if (this[_0x4563d0] === _0x391c01) return _0x4563d0;
    return -0x1;
  }), ig.Entity.prototype.tweens = [], ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update, ig.Entity.prototype.update = function () {
    this._preTweenUpdate();
    if (0x0 < this.tweens.length) {
      for (var _0x1f6340 = [], _0x3249bd = 0x0; _0x3249bd < this.tweens.length; _0x3249bd++) this.tweens[_0x3249bd].update(), this.tweens[_0x3249bd].complete || _0x1f6340.push(this.tweens[_0x3249bd]);
      this.tweens = _0x1f6340;
    }
  }, ig.Entity.prototype.tween = function (_0x22f5fd, _0x2845c5, _0x283ae2) {
    return _0x22f5fd = new ig.Tween(this, _0x22f5fd, _0x2845c5, _0x283ae2), this.tweens.push(_0x22f5fd), _0x22f5fd;
  }, ig.Entity.prototype.pauseTweens = function () {
    for (var _0x4cb461 = 0x0; _0x4cb461 < this.tweens.length; _0x4cb461++) this.tweens[_0x4cb461].pause();
  }, ig.Entity.prototype.resumeTweens = function () {
    for (var _0x1f8049 = 0x0; _0x1f8049 < this.tweens.length; _0x1f8049++) this.tweens[_0x1f8049].resume();
  }, ig.Entity.prototype.stopTweens = function (_0x47dd7e) {
    for (var _0x31d88c = 0x0; _0x31d88c < this.tweens.length; _0x31d88c++) this.tweens[_0x31d88c].stop(_0x47dd7e);
  }, ig.Tween = function (_0x12884a, _0x28a94b, _0x46a91a, _0x12f3ca) {
    var _0x1198dc = {},
      _0x33d622 = {},
      _0x3429c6 = {},
      _0x4de900 = 0x0,
      _0x24cb19 = !0x1,
      _0x3c36af = !0x1,
      _0x322715 = !0x1;
    this.duration = _0x46a91a, this.paused = this.complete = !0x1, this.easing = ig.Tween.Easing.Linear.EaseNone, this.onComplete = !0x1, this.loop = this.delay = 0x0, this.loopCount = -0x1, ig.merge(this, _0x12f3ca), this.loopNum = this.loopCount, this.chain = function (_0x11e515) {
      _0x322715 = _0x11e515;
    }, this.initEnd = function (_0x13565e, _0x46b3be, _0x1db4a1) {
      if ('object' !== typeof _0x46b3be[_0x13565e]) _0x1db4a1[_0x13565e] = _0x46b3be[_0x13565e];else {
        for (subprop in _0x46b3be[_0x13565e]) _0x1db4a1[_0x13565e] || (_0x1db4a1[_0x13565e] = {}), this.initEnd(subprop, _0x46b3be[_0x13565e], _0x1db4a1[_0x13565e]);
      }
    }, this.initStart = function (_0x557aa3, _0x15ead0, _0xf11cd7, _0x2e31c0) {
      if ('object' !== typeof _0xf11cd7[_0x557aa3]) 'undefined' !== typeof _0x15ead0[_0x557aa3] && (_0x2e31c0[_0x557aa3] = _0xf11cd7[_0x557aa3]);else {
        for (subprop in _0xf11cd7[_0x557aa3]) _0x2e31c0[_0x557aa3] || (_0x2e31c0[_0x557aa3] = {}), 'undefined' !== typeof _0x15ead0[_0x557aa3] && this.initStart(subprop, _0x15ead0[_0x557aa3], _0xf11cd7[_0x557aa3], _0x2e31c0[_0x557aa3]);
      }
    }, this.start = function () {
      this.paused = this.complete = !0x1, this.loopNum = this.loopCount, _0x4de900 = 0x0, -0x1 == _0x12884a.tweens.indexOf(this) && _0x12884a.tweens.push(this), _0x3c36af = !0x0, _0x24cb19 = new ig.Timer();
      for (var _0x2758be in _0x28a94b) this.initEnd(_0x2758be, _0x28a94b, _0x33d622);
      for (_0x2758be in _0x33d622) this.initStart(_0x2758be, _0x33d622, _0x12884a, _0x1198dc), this.initDelta(_0x2758be, _0x3429c6, _0x12884a, _0x33d622);
    }, this.initDelta = function (_0x364b90, _0x37cf2c, _0x5b65fb, _0x37ddf0) {
      if ('object' !== typeof _0x37ddf0[_0x364b90]) _0x37cf2c[_0x364b90] = _0x37ddf0[_0x364b90] - _0x5b65fb[_0x364b90];else {
        for (subprop in _0x37ddf0[_0x364b90]) _0x37cf2c[_0x364b90] || (_0x37cf2c[_0x364b90] = {}), this.initDelta(subprop, _0x37cf2c[_0x364b90], _0x5b65fb[_0x364b90], _0x37ddf0[_0x364b90]);
      }
    }, this.propUpdate = function (_0x345340, _0x5b7061, _0x2b342f, _0x239d47, _0xda65a7) {
      if ('object' !== typeof _0x2b342f[_0x345340]) _0x5b7061[_0x345340] = 'undefined' != typeof _0x2b342f[_0x345340] ? _0x2b342f[_0x345340] + _0x239d47[_0x345340] * _0xda65a7 : _0x5b7061[_0x345340];else {
        for (subprop in _0x2b342f[_0x345340]) this.propUpdate(subprop, _0x5b7061[_0x345340], _0x2b342f[_0x345340], _0x239d47[_0x345340], _0xda65a7);
      }
    }, this.propSet = function (_0x1ae6a7, _0x42349f, _0x48a5fc) {
      if ('object' !== typeof _0x42349f[_0x1ae6a7]) _0x48a5fc[_0x1ae6a7] = _0x42349f[_0x1ae6a7];else {
        for (subprop in _0x42349f[_0x1ae6a7]) _0x48a5fc[_0x1ae6a7] || (_0x48a5fc[_0x1ae6a7] = {}), this.propSet(subprop, _0x42349f[_0x1ae6a7], _0x48a5fc[_0x1ae6a7]);
      }
    }, this.update = function () {
      if (!_0x3c36af) return !0x1;
      if (this.delay) {
        if (_0x24cb19.delta() < this.delay) return;
        this.delay = 0x0, _0x24cb19.reset();
      }
      if (this.paused || this.complete) return !0x1;
      var _0x64e690 = (_0x24cb19.delta() + _0x4de900) / this.duration,
        _0x64e690 = 0x1 < _0x64e690 ? 0x1 : _0x64e690,
        _0x173341 = this.easing(_0x64e690);
      for (property in _0x3429c6) this.propUpdate(property, _0x12884a, _0x1198dc, _0x3429c6, _0x173341);
      if (0x1 <= _0x64e690) {
        if (0x0 == this.loopNum || !this.loop) {
          this.complete = !0x0;
          if (this.onComplete) this.onComplete();
          return _0x322715 && _0x322715.start(), !0x1;
        }
        if (this.loop == ig.Tween.Loop.Revert) {
          for (property in _0x1198dc) this.propSet(property, _0x1198dc, _0x12884a);
          _0x4de900 = 0x0, _0x24cb19.reset(), -0x1 != this.loopNum && this.loopNum--;
        } else {
          if (this.loop == ig.Tween.Loop.Reverse) {
            _0x64e690 = {}, _0x173341 = {}, ig.merge(_0x64e690, _0x33d622), ig.merge(_0x173341, _0x1198dc), ig.merge(_0x1198dc, _0x64e690), ig.merge(_0x33d622, _0x173341);
            for (property in _0x33d622) this.initDelta(property, _0x3429c6, _0x12884a, _0x33d622);
            _0x4de900 = 0x0, _0x24cb19.reset(), -0x1 != this.loopNum && this.loopNum--;
          }
        }
      }
    }, this.pause = function () {
      this.paused = !0x0, _0x24cb19 && _0x24cb19.delta && (_0x4de900 += _0x24cb19.delta());
    }, this.resume = function () {
      this.paused = !0x1, _0x24cb19 && _0x24cb19.reset && _0x24cb19.reset();
    }, this.stop = function (_0x27c790) {
      _0x27c790 && (this.loop = this.complete = this.paused = !0x1, _0x4de900 += _0x46a91a, this.update()), this.complete = !0x0;
    };
  }, ig.Tween.Loop = {
    'Revert': 0x1,
    'Reverse': 0x2
  }, ig.Tween.Easing = {
    'Linear': {},
    'Quadratic': {},
    'Cubic': {},
    'Quartic': {},
    'Quintic': {},
    'Sinusoidal': {},
    'Exponential': {},
    'Circular': {},
    'Elastic': {},
    'Back': {},
    'Bounce': {}
  }, ig.Tween.Easing.Linear.EaseNone = function (_0x283907) {
    return _0x283907;
  }, ig.Tween.Easing.Quadratic.EaseIn = function (_0x569ee8) {
    return _0x569ee8 * _0x569ee8;
  }, ig.Tween.Easing.Quadratic.EaseOut = function (_0x42adc9) {
    return -_0x42adc9 * (_0x42adc9 - 0x2);
  }, ig.Tween.Easing.Quadratic.EaseInOut = function (_0x4ea29c) {
    return 0x1 > (_0x4ea29c *= 0x2) ? 0.5 * _0x4ea29c * _0x4ea29c : -0.5 * (--_0x4ea29c * (_0x4ea29c - 0x2) - 0x1);
  }, ig.Tween.Easing.Cubic.EaseIn = function (_0x49cf76) {
    return _0x49cf76 * _0x49cf76 * _0x49cf76;
  }, ig.Tween.Easing.Cubic.EaseOut = function (_0x3e95b2) {
    return --_0x3e95b2 * _0x3e95b2 * _0x3e95b2 + 0x1;
  }, ig.Tween.Easing.Cubic.EaseInOut = function (_0x39d11a) {
    return 0x1 > (_0x39d11a *= 0x2) ? 0.5 * _0x39d11a * _0x39d11a * _0x39d11a : 0.5 * ((_0x39d11a -= 0x2) * _0x39d11a * _0x39d11a + 0x2);
  }, ig.Tween.Easing.Quartic.EaseIn = function (_0x5575a9) {
    return _0x5575a9 * _0x5575a9 * _0x5575a9 * _0x5575a9;
  }, ig.Tween.Easing.Quartic.EaseOut = function (_0x33e86a) {
    return -(--_0x33e86a * _0x33e86a * _0x33e86a * _0x33e86a - 0x1);
  }, ig.Tween.Easing.Quartic.EaseInOut = function (_0x2e9f69) {
    return 0x1 > (_0x2e9f69 *= 0x2) ? 0.5 * _0x2e9f69 * _0x2e9f69 * _0x2e9f69 * _0x2e9f69 : -0.5 * ((_0x2e9f69 -= 0x2) * _0x2e9f69 * _0x2e9f69 * _0x2e9f69 - 0x2);
  }, ig.Tween.Easing.Quintic.EaseIn = function (_0x493864) {
    return _0x493864 * _0x493864 * _0x493864 * _0x493864 * _0x493864;
  }, ig.Tween.Easing.Quintic.EaseOut = function (_0x57d5a0) {
    return (_0x57d5a0 -= 0x1) * _0x57d5a0 * _0x57d5a0 * _0x57d5a0 * _0x57d5a0 + 0x1;
  }, ig.Tween.Easing.Quintic.EaseInOut = function (_0x29a0c3) {
    return 0x1 > (_0x29a0c3 *= 0x2) ? 0.5 * _0x29a0c3 * _0x29a0c3 * _0x29a0c3 * _0x29a0c3 * _0x29a0c3 : 0.5 * ((_0x29a0c3 -= 0x2) * _0x29a0c3 * _0x29a0c3 * _0x29a0c3 * _0x29a0c3 + 0x2);
  }, ig.Tween.Easing.Sinusoidal.EaseIn = function (_0x506f15) {
    return -Math.cos(_0x506f15 * Math.PI / 0x2) + 0x1;
  }, ig.Tween.Easing.Sinusoidal.EaseOut = function (_0x176aee) {
    return Math.sin(_0x176aee * Math.PI / 0x2);
  }, ig.Tween.Easing.Sinusoidal.EaseInOut = function (_0x4665f4) {
    return -0.5 * (Math.cos(Math.PI * _0x4665f4) - 0x1);
  }, ig.Tween.Easing.Exponential.EaseIn = function (_0x2aa963) {
    return 0x0 == _0x2aa963 ? 0x0 : Math.pow(0x2, 0xa * (_0x2aa963 - 0x1));
  }, ig.Tween.Easing.Exponential.EaseOut = function (_0x49f4ea) {
    return 0x1 == _0x49f4ea ? 0x1 : -Math.pow(0x2, -0xa * _0x49f4ea) + 0x1;
  }, ig.Tween.Easing.Exponential.EaseInOut = function (_0x3fd308) {
    return 0x0 == _0x3fd308 ? 0x0 : 0x1 == _0x3fd308 ? 0x1 : 0x1 > (_0x3fd308 *= 0x2) ? 0.5 * Math.pow(0x2, 0xa * (_0x3fd308 - 0x1)) : 0.5 * (-Math.pow(0x2, -0xa * (_0x3fd308 - 0x1)) + 0x2);
  }, ig.Tween.Easing.Circular.EaseIn = function (_0x580ccb) {
    return -(Math.sqrt(0x1 - _0x580ccb * _0x580ccb) - 0x1);
  }, ig.Tween.Easing.Circular.EaseOut = function (_0xaaa784) {
    return Math.sqrt(0x1 - --_0xaaa784 * _0xaaa784);
  }, ig.Tween.Easing.Circular.EaseInOut = function (_0x12bed1) {
    return 0x1 > (_0x12bed1 /= 0.5) ? -0.5 * (Math.sqrt(0x1 - _0x12bed1 * _0x12bed1) - 0x1) : 0.5 * (Math.sqrt(0x1 - (_0x12bed1 -= 0x2) * _0x12bed1) + 0x1);
  }, ig.Tween.Easing.Elastic.EaseIn = function (_0x551e42) {
    var _0xc3089a,
      _0xec0236 = 0.1,
      _0x238bcf = 0.4;
    if (0x0 == _0x551e42) return 0x0;
    if (0x1 == _0x551e42) return 0x1;
    return _0x238bcf || (_0x238bcf = 0.3), !_0xec0236 || 0x1 > _0xec0236 ? (_0xec0236 = 0x1, _0xc3089a = _0x238bcf / 0x4) : _0xc3089a = _0x238bcf / (0x2 * Math.PI) * Math.asin(0x1 / _0xec0236), -(_0xec0236 * Math.pow(0x2, 0xa * (_0x551e42 -= 0x1)) * Math.sin(0x2 * (_0x551e42 - _0xc3089a) * Math.PI / _0x238bcf));
  }, ig.Tween.Easing.Elastic.EaseOut = function (_0x321e8b) {
    var _0x1c14cf,
      _0x217317 = 0.1,
      _0x80f04f = 0.4;
    if (0x0 == _0x321e8b) return 0x0;
    if (0x1 == _0x321e8b) return 0x1;
    return _0x80f04f || (_0x80f04f = 0.3), !_0x217317 || 0x1 > _0x217317 ? (_0x217317 = 0x1, _0x1c14cf = _0x80f04f / 0x4) : _0x1c14cf = _0x80f04f / (0x2 * Math.PI) * Math.asin(0x1 / _0x217317), _0x217317 * Math.pow(0x2, -0xa * _0x321e8b) * Math.sin(0x2 * (_0x321e8b - _0x1c14cf) * Math.PI / _0x80f04f) + 0x1;
  }, ig.Tween.Easing.Elastic.EaseInOut = function (_0x1f15b9) {
    var _0x9213c6,
      _0x29deb3 = 0.1,
      _0x2046f1 = 0.4;
    if (0x0 == _0x1f15b9) return 0x0;
    if (0x1 == _0x1f15b9) return 0x1;
    return _0x2046f1 || (_0x2046f1 = 0.3), !_0x29deb3 || 0x1 > _0x29deb3 ? (_0x29deb3 = 0x1, _0x9213c6 = _0x2046f1 / 0x4) : _0x9213c6 = _0x2046f1 / (0x2 * Math.PI) * Math.asin(0x1 / _0x29deb3), 0x1 > (_0x1f15b9 *= 0x2) ? -0.5 * _0x29deb3 * Math.pow(0x2, 0xa * (_0x1f15b9 -= 0x1)) * Math.sin(0x2 * (_0x1f15b9 - _0x9213c6) * Math.PI / _0x2046f1) : 0.5 * _0x29deb3 * Math.pow(0x2, -0xa * (_0x1f15b9 -= 0x1)) * Math.sin(0x2 * (_0x1f15b9 - _0x9213c6) * Math.PI / _0x2046f1) + 0x1;
  }, ig.Tween.Easing.Back.EaseIn = function (_0x354391) {
    return _0x354391 * _0x354391 * (2.70158 * _0x354391 - 1.70158);
  }, ig.Tween.Easing.Back.EaseOut = function (_0x2acc49) {
    return (_0x2acc49 -= 0x1) * _0x2acc49 * (2.70158 * _0x2acc49 + 1.70158) + 0x1;
  }, ig.Tween.Easing.Back.EaseInOut = function (_0x58eaf1) {
    return 0x1 > (_0x58eaf1 *= 0x2) ? 0.5 * _0x58eaf1 * _0x58eaf1 * (3.5949095 * _0x58eaf1 - 2.5949095) : 0.5 * ((_0x58eaf1 -= 0x2) * _0x58eaf1 * (3.5949095 * _0x58eaf1 + 2.5949095) + 0x2);
  }, ig.Tween.Easing.Bounce.EaseIn = function (_0x5a03a2) {
    return 0x1 - ig.Tween.Easing.Bounce.EaseOut(0x1 - _0x5a03a2);
  }, ig.Tween.Easing.Bounce.EaseOut = function (_0x104d4d) {
    return (_0x104d4d /= 0x1) < 0x1 / 2.75 ? 7.5625 * _0x104d4d * _0x104d4d : _0x104d4d < 0x2 / 2.75 ? 7.5625 * (_0x104d4d -= 1.5 / 2.75) * _0x104d4d + 0.75 : _0x104d4d < 2.5 / 2.75 ? 7.5625 * (_0x104d4d -= 2.25 / 2.75) * _0x104d4d + 0.9375 : 7.5625 * (_0x104d4d -= 2.625 / 2.75) * _0x104d4d + 0.984375;
  }, ig.Tween.Easing.Bounce.EaseInOut = function (_0x133afe) {
    return 0.5 > _0x133afe ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(0x2 * _0x133afe) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(0x2 * _0x133afe - 0x1) + 0.5;
  }, ig.Tween.Interpolation = {
    'Linear': function (_0x226496, _0x1a43aa) {
      var _0x10d193 = _0x226496.length - 0x1,
        _0x1d4001 = _0x10d193 * _0x1a43aa,
        _0x163fca = Math.floor(_0x1d4001),
        _0x247084 = TWEEN.Interpolation.Utils.Linear;
      return 0x0 > _0x1a43aa ? _0x247084(_0x226496[0x0], _0x226496[0x1], _0x1d4001) : 0x1 < _0x1a43aa ? _0x247084(_0x226496[_0x10d193], _0x226496[_0x10d193 - 0x1], _0x10d193 - _0x1d4001) : _0x247084(_0x226496[_0x163fca], _0x226496[_0x163fca + 0x1 > _0x10d193 ? _0x10d193 : _0x163fca + 0x1], _0x1d4001 - _0x163fca);
    }
  };
}), ig.baked = !0x0, ig.module('plugins.patches.entity-patch').requires('impact.entity').defines(function () {
  ig.Entity.inject({
    'handleMovementTrace': function (_0x4e245a) {
      this.standing = !0x1, _0x4e245a.collision.y && (0x0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0x0 < this.vel.y && (this.standing = !0x0), this.vel.y = 0x0)), _0x4e245a.collision.x && (this.vel.x = 0x0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0x0);
      if (_0x4e245a.collision.slope) {
        var _0x5a12cd = _0x4e245a.collision.slope;
        if (0x0 < this.bounciness) {
          var _0x46faa0 = this.vel.x * _0x5a12cd.nx + this.vel.y * _0x5a12cd.ny;
          this.vel.x = (this.vel.x - 0x2 * _0x5a12cd.nx * _0x46faa0) * this.bounciness, this.vel.y = (this.vel.y - 0x2 * _0x5a12cd.ny * _0x46faa0) * this.bounciness;
        } else _0x46faa0 = (this.vel.x * _0x5a12cd.x + this.vel.y * _0x5a12cd.y) / (_0x5a12cd.x * _0x5a12cd.x + _0x5a12cd.y * _0x5a12cd.y), this.vel.x = _0x5a12cd.x * _0x46faa0, this.vel.y = _0x5a12cd.y * _0x46faa0, _0x5a12cd = Math.atan2(_0x5a12cd.x, _0x5a12cd.y), _0x5a12cd > this.slopeStanding.min && _0x5a12cd < this.slopeStanding.max && (this.standing = !0x0);
      }
      this.pos.x = _0x4e245a.pos.x, this.pos.y = _0x4e245a.pos.y;
    },
    'update': function () {
      this.parent(), null !== this.clickableLayer && 'undefined' !== typeof this.clickableLayer && null !== this.clickableLayer.update && 'function' === typeof this.clickableLayer.update && this.clickableLayer.update(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.tweens-handler').requires('impact.entity', 'plugins.tween', 'plugins.patches.entity-patch').defines(function () {
  Array.prototype.indexOf || (Array.prototype.indexOf = function (_0x1489ff) {
    for (var _0x3ff32e = 0x0; _0x3ff32e < this.length; ++_0x3ff32e) if (this[_0x3ff32e] === _0x1489ff) return _0x3ff32e;
    return -0x1;
  }), ig.TweensHandler = ig.Class.extend({
    '_tweens': [],
    '_systemPausedTweens': [],
    'init': function () {},
    'getAll': function () {
      return this._tweens;
    },
    'removeAll': function () {
      this._tweens = [];
    },
    'add': function (_0x3cae55) {
      this._tweens.push(_0x3cae55);
    },
    'remove': function (_0x2ed0df) {
      _0x2ed0df = this._tweens.indexOf(_0x2ed0df), -0x1 !== _0x2ed0df && this._tweens.splice(_0x2ed0df, 0x1);
    },
    'onSystemPause': function () {
      if (0x0 === this._tweens.length) return !0x1;
      for (var _0x5dcb5 = 0x0, _0x303ac2 = null; _0x5dcb5 < this._tweens.length;) _0x303ac2 = this._tweens[_0x5dcb5], _0x303ac2._isPlaying && (this._systemPausedTweens.push(_0x303ac2), _0x303ac2.pause()), _0x5dcb5++;
      return !0x0;
    },
    'onSystemResume': function () {
      if (0x0 === this._systemPausedTweens.length) return !0x1;
      for (var _0x402184 = 0x0; _0x402184 < this._systemPausedTweens.length;) this._systemPausedTweens[_0x402184].resume(), _0x402184++;
      return this._systemPausedTweens = [], !0x0;
    },
    'update': function (_0xb790da, _0x10f553) {
      if (0x0 === this._tweens.length) return !0x1;
      var _0xad98de = 0x0;
      for (_0xb790da = void 0x0 !== _0xb790da ? _0xb790da : ig.game.tweens.now(); _0xad98de < this._tweens.length;) this._tweens[_0xad98de].update(_0xb790da) || _0x10f553 ? _0xad98de++ : this._tweens.splice(_0xad98de, 0x1);
      return !0x0;
    },
    'now': function () {
      return Date.now();
    }
  }), ig.TweenDef = ig.Class.extend({
    'version': '1.0.1',
    '_ent': null,
    '_valuesStart': {},
    '_valuesEnd': {},
    '_valuesStartRepeat': {},
    '_duration': 0x3e8,
    '_repeat': 0x0,
    '_yoyo': !0x1,
    '_isPlaying': !0x1,
    '_reversed': !0x1,
    '_delayTime': 0x0,
    '_startTime': null,
    '_pauseTime': null,
    '_easingFunction': ig.Tween.Easing.Linear.EaseNone,
    '_interpolationFunction': ig.Tween.Interpolation.Linear,
    '_chainedTweens': [],
    '_onStartCallback': null,
    '_onStartCallbackFired': !0x1,
    '_onUpdateCallback': null,
    '_onCompleteCallback': null,
    '_onStopCallback': null,
    '_onPauseCallback': null,
    '_onResumeCallback': null,
    '_currentElapsed': 0x0,
    'init': function (_0x59c09e) {
      this._object = _0x59c09e;
    },
    'to': function (_0x3a7524, _0x26db00) {
      return this._valuesEnd = _0x3a7524, void 0x0 !== _0x26db00 && (this._duration = _0x26db00), this;
    },
    'start': function (_0x4c8e8c) {
      if (this._isPlaying) return this;
      ig.game.tweens.add(this), this._isPlaying = !0x0, this._onStartCallbackFired = !0x1, this._startTime = void 0x0 !== _0x4c8e8c ? _0x4c8e8c : ig.game.tweens.now(), this._startTime += this._delayTime;
      for (var _0x84a43c in this._valuesEnd) {
        if (this._valuesEnd[_0x84a43c] instanceof Array) {
          if (0x0 === this._valuesEnd[_0x84a43c].length) continue;
          this._valuesEnd[_0x84a43c] = [this._object[_0x84a43c]].concat(this._valuesEnd[_0x84a43c]);
        }
        void 0x0 !== this._object[_0x84a43c] && (this._valuesStart[_0x84a43c] = this._object[_0x84a43c], !0x1 === this._valuesStart[_0x84a43c] instanceof Array && (this._valuesStart[_0x84a43c] *= 0x1), this._valuesStartRepeat[_0x84a43c] = this._valuesStart[_0x84a43c] || 0x0);
      }
      return this;
    },
    'stop': function () {
      if (!this._isPlaying) return this;
      return ig.game.tweens.remove(this), this._isPlaying = !0x1, null !== this._onStopCallback && this._onStopCallback.call(this._object, this._object), this.stopChainedTweens(), this;
    },
    'pause': function () {
      if (!this._isPlaying) return this;
      return ig.game.tweens.remove(this), this._isPlaying = !0x1, this._pauseTime = ig.game.tweens.now(), null !== this._onPauseCallback && this._onPauseCallback.call(this._object, this._object), this;
    },
    'resume': function () {
      if (this._isPlaying || !this._pauseTime) return this;
      var _0x5804a0 = ig.game.tweens.now() - this._pauseTime;
      return this._startTime += _0x5804a0, ig.game.tweens.add(this), this._isPlaying = !0x0, null !== this._onResumeCallback && this._onResumeCallback.call(this._object, this._object), this._pauseTime = null, this;
    },
    'end': function () {
      return this.update(this._startTime + this._duration), this;
    },
    'stopChainedTweens': function () {
      for (var _0x2a6cc3 = 0x0, _0x713c06 = this._chainedTweens.length; _0x2a6cc3 < _0x713c06; _0x2a6cc3++) this._chainedTweens[_0x2a6cc3].stop();
    },
    'delay': function (_0x572877) {
      return this._delayTime = _0x572877, this;
    },
    'repeat': function (_0x214d8c) {
      return this._repeat = _0x214d8c, this;
    },
    'repeatDelay': function (_0x4ead32) {
      return this._repeatDelayTime = _0x4ead32, this;
    },
    'yoyo': function (_0x466693) {
      return this._yoyo = _0x466693, this;
    },
    'easing': function (_0x327404) {
      return this._easingFunction = _0x327404, this;
    },
    'interpolation': function (_0x1af036) {
      return this._interpolationFunction = _0x1af036, this;
    },
    'chain': function () {
      return this._chainedTweens = arguments, this;
    },
    'onStart': function (_0x3f3bbf) {
      return this._onStartCallback = _0x3f3bbf, this;
    },
    'onUpdate': function (_0x735891) {
      return this._onUpdateCallback = _0x735891, this;
    },
    'onComplete': function (_0x52d6d1) {
      return this._onCompleteCallback = _0x52d6d1, this;
    },
    'onStop': function (_0x2deb1b) {
      return this._onStopCallback = _0x2deb1b, this;
    },
    'onPause': function (_0x3f5302) {
      return this._onPauseCallback = _0x3f5302, this;
    },
    'onResume': function (_0x2667c0) {
      return this._onResumeCallback = _0x2667c0, this;
    },
    'update': function (_0x34aa0a) {
      var _0x48353e, _0x4a1c26, _0x11d7a1;
      if (_0x34aa0a < this._startTime) return !0x0;
      !0x1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback.call(this._object, this._object), this._onStartCallbackFired = !0x0), _0x4a1c26 = (_0x34aa0a - this._startTime) / this._duration, this._currentElapsed = _0x4a1c26 = 0x1 < _0x4a1c26 ? 0x1 : _0x4a1c26, _0x11d7a1 = this._easingFunction(_0x4a1c26);
      for (_0x48353e in this._valuesEnd) if (void 0x0 !== this._valuesStart[_0x48353e]) {
        var _0x57d9ea = this._valuesStart[_0x48353e] || 0x0,
          _0x133c7f = this._valuesEnd[_0x48353e];
        _0x133c7f instanceof Array ? this._object[_0x48353e] = this._interpolationFunction(_0x133c7f, _0x11d7a1) : ('string' === typeof _0x133c7f && (_0x133c7f = '+' === _0x133c7f.charAt(0x0) || '-' === _0x133c7f.charAt(0x0) ? _0x57d9ea + parseFloat(_0x133c7f) : parseFloat(_0x133c7f)), 'number' === typeof _0x133c7f && (this._object[_0x48353e] = _0x57d9ea + (_0x133c7f - _0x57d9ea) * _0x11d7a1));
      }
      null !== this._onUpdateCallback && this._onUpdateCallback.call(this._object, this._object, _0x11d7a1);
      if (0x1 === _0x4a1c26) {
        if (0x0 < this._repeat) {
          isFinite(this._repeat) && this._repeat--;
          for (_0x48353e in this._valuesStartRepeat) 'string' === typeof this._valuesEnd[_0x48353e] && (this._valuesStartRepeat[_0x48353e] = _valuesStartRepeat[_0x48353e] + parseFloat(_valuesEnd[_0x48353e])), this._yoyo && (_0x4a1c26 = this._valuesStartRepeat[_0x48353e], this._valuesStartRepeat[_0x48353e] = this._valuesEnd[_0x48353e], this._valuesEnd[_0x48353e] = _0x4a1c26), this._valuesStart[_0x48353e] = this._valuesStartRepeat[_0x48353e];
          this._yoyo && (this._reversed = !this._reversed), this._startTime = void 0x0 !== this._repeatDelayTime ? _0x34aa0a + this._repeatDelayTime : _0x34aa0a + this._delayTime;
        } else {
          this._isPlaying = !0x1, null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object, this._object), _0x34aa0a = 0x0;
          for (_0x48353e = this._chainedTweens.length; _0x34aa0a < _0x48353e; _0x34aa0a++) this._chainedTweens[_0x34aa0a].start(this._startTime + this._duration);
          return !0x1;
        }
      }
      return !0x0;
    }
  });
  var _0xa6e0c5 = [0x1];
  ig.Tween.Interpolation = {
    'Linear': function (_0x1ebebb, _0x44b7d4) {
      var _0x150582 = _0x1ebebb.length - 0x1,
        _0x3cd343 = _0x150582 * _0x44b7d4,
        _0xc05b59 = Math.floor(_0x3cd343),
        _0x47e361 = ig.Tween.Interpolation.Utils.Linear;
      return 0x0 > _0x44b7d4 ? _0x47e361(_0x1ebebb[0x0], _0x1ebebb[0x1], _0x3cd343) : 0x1 < _0x44b7d4 ? _0x47e361(_0x1ebebb[_0x150582], _0x1ebebb[_0x150582 - 0x1], _0x150582 - _0x3cd343) : _0x47e361(_0x1ebebb[_0xc05b59], _0x1ebebb[_0xc05b59 + 0x1 > _0x150582 ? _0x150582 : _0xc05b59 + 0x1], _0x3cd343 - _0xc05b59);
    },
    'Bezier': function (_0x362ee5, _0x207b09) {
      for (var _0x1f8261 = 0x0, _0x357f18 = _0x362ee5.length - 0x1, _0x5d63a6 = Math.pow, _0x167ca5 = ig.Tween.Interpolation.Utils.Bernstein, _0x1d2743 = 0x0; _0x1d2743 <= _0x357f18; _0x1d2743++) _0x1f8261 += _0x5d63a6(0x1 - _0x207b09, _0x357f18 - _0x1d2743) * _0x5d63a6(_0x207b09, _0x1d2743) * _0x362ee5[_0x1d2743] * _0x167ca5(_0x357f18, _0x1d2743);
      return _0x1f8261;
    },
    'CatmullRom': function (_0x514221, _0x1bb86e) {
      var _0x4fcdfa = _0x514221.length - 0x1,
        _0x598023 = _0x4fcdfa * _0x1bb86e,
        _0x5e0ec3 = Math.floor(_0x598023),
        _0x1b8b00 = ig.Tween.Interpolation.Utils.CatmullRom;
      return _0x514221[0x0] === _0x514221[_0x4fcdfa] ? (0x0 > _0x1bb86e && (_0x5e0ec3 = Math.floor(_0x598023 = _0x4fcdfa * (0x1 + _0x1bb86e))), _0x1b8b00(_0x514221[(_0x5e0ec3 - 0x1 + _0x4fcdfa) % _0x4fcdfa], _0x514221[_0x5e0ec3], _0x514221[(_0x5e0ec3 + 0x1) % _0x4fcdfa], _0x514221[(_0x5e0ec3 + 0x2) % _0x4fcdfa], _0x598023 - _0x5e0ec3)) : 0x0 > _0x1bb86e ? _0x514221[0x0] - (_0x1b8b00(_0x514221[0x0], _0x514221[0x0], _0x514221[0x1], _0x514221[0x1], -_0x598023) - _0x514221[0x0]) : 0x1 < _0x1bb86e ? _0x514221[_0x4fcdfa] - (_0x1b8b00(_0x514221[_0x4fcdfa], _0x514221[_0x4fcdfa], _0x514221[_0x4fcdfa - 0x1], _0x514221[_0x4fcdfa - 0x1], _0x598023 - _0x4fcdfa) - _0x514221[_0x4fcdfa]) : _0x1b8b00(_0x514221[_0x5e0ec3 ? _0x5e0ec3 - 0x1 : 0x0], _0x514221[_0x5e0ec3], _0x514221[_0x4fcdfa < _0x5e0ec3 + 0x1 ? _0x4fcdfa : _0x5e0ec3 + 0x1], _0x514221[_0x4fcdfa < _0x5e0ec3 + 0x2 ? _0x4fcdfa : _0x5e0ec3 + 0x2], _0x598023 - _0x5e0ec3);
    },
    'Utils': {
      'Linear': function (_0x1f9ad9, _0x1d7acb, _0x39404c) {
        return (_0x1d7acb - _0x1f9ad9) * _0x39404c + _0x1f9ad9;
      },
      'Bernstein': function (_0x48bc0e, _0x438caa) {
        var _0x591b85 = ig.Tween.Interpolation.Utils.Factorial;
        return _0x591b85(_0x48bc0e) / _0x591b85(_0x438caa) / _0x591b85(_0x48bc0e - _0x438caa);
      },
      'Factorial': function (_0x503551) {
        var _0x20e487 = 0x1;
        if (_0xa6e0c5[_0x503551]) return _0xa6e0c5[_0x503551];
        for (var _0x1af267 = _0x503551; 0x1 < _0x1af267; _0x1af267--) _0x20e487 *= _0x1af267;
        return _0xa6e0c5[_0x503551] = _0x20e487;
      },
      'CatmullRom': function (_0x50fa0d, _0x1df01b, _0x29c1f0, _0x5adef2, _0x45c1db) {
        _0x50fa0d = 0.5 * (_0x29c1f0 - _0x50fa0d), _0x5adef2 = 0.5 * (_0x5adef2 - _0x1df01b);
        var _0x4ba413 = _0x45c1db * _0x45c1db;
        return (0x2 * _0x1df01b - 0x2 * _0x29c1f0 + _0x50fa0d + _0x5adef2) * _0x45c1db * _0x4ba413 + (-0x3 * _0x1df01b + 0x3 * _0x29c1f0 - 0x2 * _0x50fa0d - _0x5adef2) * _0x4ba413 + _0x50fa0d * _0x45c1db + _0x1df01b;
      }
    }
  };
}), ig.baked = !0x0, ig.module('plugins.url-parameters').defines(function () {
  ig.UrlParameters = ig.Class.extend({
    'init': function () {
      switch (getQueryVariable('iphone')) {
        case 'true':
          ig.ua.iPhone = !0x0, console.log("iPhone mode");
      }
      var _0x584c75 = getQueryVariable('webview');
      if (_0x584c75) switch (_0x584c75) {
        case 'true':
          ig.ua.is_uiwebview = !0x0, console.log("webview mode");
      }
      if (_0x584c75 = getQueryVariable('debug')) switch (_0x584c75) {
        case 'true':
          ig.game.showDebugMenu(), console.log("debug mode");
      }
      switch (getQueryVariable('view')) {
        case 'stats':
          ig.game.resetPlayerStats(), ig.game.endGame();
      }
      getQueryVariable('ad');
    }
  });
}), ig.baked = !0x0, ig.module('plugins.director').requires('impact.impact').defines(function () {
  ig.Director = ig.Class.extend({
    'init': function (_0x2dfe87, _0x329bd5) {
      this.game = _0x2dfe87, this.levels = [], this.currentLevel = 0x0, this.append(_0x329bd5);
    },
    'loadLevel': function (_0x2a25a1) {
      for (var _0x1488c5 in ig.sizeHandler.dynamicClickableEntityDivs) {
        var _0x1f7854 = ig.domHandler.getElementById('#' + _0x1488c5);
        ig.domHandler.hide(_0x1f7854);
      }
      return this.currentLevel = _0x2a25a1, this.game.loadLevel(this.levels[_0x2a25a1]), !0x0;
    },
    'loadLevelWithoutEntities': function (_0x1418b4) {
      return this.currentLevel = _0x1418b4, this.game.loadLevelWithoutEntities(this.levels[_0x1418b4]), !0x0;
    },
    'append': function (_0x39c976) {
      return newLevels = [], 'object' === typeof _0x39c976 ? (_0x39c976.constructor === [].constructor ? newLevels = _0x39c976 : newLevels[0x0] = _0x39c976, this.levels = this.levels.concat(newLevels), !0x0) : !0x1;
    },
    'nextLevel': function () {
      return this.currentLevel + 0x1 < this.levels.length ? this.loadLevel(this.currentLevel + 0x1) : !0x1;
    },
    'previousLevel': function () {
      return 0x0 <= this.currentLevel - 0x1 ? this.loadLevel(this.currentLevel - 0x1) : !0x1;
    },
    'jumpTo': function (_0x2381f1) {
      var _0x25e3d3 = null;
      for (i = 0x0; i < this.levels.length; i++) this.levels[i] == _0x2381f1 && (_0x25e3d3 = i);
      return 0x0 <= _0x25e3d3 ? this.loadLevel(_0x25e3d3) : !0x1;
    },
    'firstLevel': function () {
      return this.loadLevel(0x0);
    },
    'lastLevel': function () {
      return this.loadLevel(this.levels.length - 0x1);
    },
    'reloadLevel': function () {
      return this.loadLevel(this.currentLevel);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.impact-storage').requires('impact.game').defines(function () {
  ig.Storage = ig.Class.extend({
    'staticInstantiate': function () {
      return !ig.Storage.instance ? null : ig.Storage.instance;
    },
    'init': function () {
      ig.Storage.instance = this;
    },
    'isCapable': function () {
      return 'undefined' !== typeof window.localStorage;
    },
    'isSet': function (_0x32e56f) {
      return null !== this.get(_0x32e56f);
    },
    'initUnset': function (_0xf3c161, _0x142a7a) {
      null === this.get(_0xf3c161) && this.set(_0xf3c161, _0x142a7a);
    },
    'get': function (_0x2f4d82) {
      if (!this.isCapable()) return null;
      try {
        return JSON.parse(localStorage.getItem(_0x2f4d82));
      } catch (_0x2181ec) {
        return window.localStorage.getItem(_0x2f4d82);
      }
    },
    'getInt': function (_0x5609d8) {
      return ~~this.get(_0x5609d8);
    },
    'getFloat': function (_0xe935b7) {
      return parseFloat(this.get(_0xe935b7));
    },
    'getBool': function (_0x4926f7) {
      return !!this.get(_0x4926f7);
    },
    'key': function (_0x29a381) {
      return this.isCapable() ? window.localStorage.key(_0x29a381) : null;
    },
    'set': function (_0x4be676, _0x42a88f) {
      if (!this.isCapable()) return null;
      try {
        window.localStorage.setItem(_0x4be676, JSON.stringify(_0x42a88f));
      } catch (_0x1e4f1e) {
        console.log(_0x1e4f1e);
      }
    },
    'setHighest': function (_0x1a37e5, _0x5a9bc4) {
      _0x5a9bc4 > this.getFloat(_0x1a37e5) && this.set(_0x1a37e5, _0x5a9bc4);
    },
    'remove': function (_0x1dbf0a) {
      if (!this.isCapable()) return null;
      window.localStorage.removeItem(_0x1dbf0a);
    },
    'clear': function () {
      if (!this.isCapable()) return null;
      window.localStorage.clear();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.fullscreen').requires('impact.entity', 'plugins.handlers.size-handler', 'plugins.director').defines(function () {
  ig.Fullscreen = {
    'enableFullscreenButton': !0x0,
    '_isEnabled': 'notChecked',
    'isEnabled': function () {
      return 'notChecked' == this._isEnabled && (this._isEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled ? !0x0 : !0x1), this._isEnabled;
    },
    'isFullscreen': function () {
      return ig.Fullscreen.isEnabled() && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) ? !0x0 : !0x1;
    },
    'toggleFullscreen': function () {
      ig.Fullscreen.isFullscreen() ? ig.Fullscreen.exitFullscreen() : ig.Fullscreen.requestFullscreen(), ig.sizeHandler.orientationDelayHandler();
    },
    'requestFullscreen': function () {
      var _0x457597 = document.documentElement;
      _0x457597.requestFullscreen ? _0x457597.requestFullscreen() : _0x457597.webkitRequestFullscreen ? _0x457597.webkitRequestFullscreen() : _0x457597.mozRequestFullScreen ? _0x457597.mozRequestFullScreen() : _0x457597.msRequestFullscreen && _0x457597.msRequestFullscreen();
    },
    'exitFullscreen': function () {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
    },
    'divs': {}
  }, ig.Director.inject({
    'loadLevel': function (_0x556bc0) {
      var _0x562608 = ig.Fullscreen.divs,
        _0x897102;
      for (_0x897102 in _0x562608) _0x562608 = ig.domHandler.getElementById('#' + _0x897102), ig.domHandler.hide(_0x562608);
      return this.parent(_0x556bc0);
    }
  }), ig.FullscreenButton = ig.Entity.extend({
    'enterImage': new ig.Image('media/graphics/sprites/btn-small.png'),
    'exitImage': new ig.Image('media/graphics/sprites/btn-small-resize.png'),
    'isReady': !0x1,
    'isShown': !0x0,
    'zIndex': 0x28,
    'identifier': null,
    'prevPos': {
      'x': 0x0,
      'y': 0x0
    },
    'gap': 0xf,
    'anchor': 0x1,
    'invisImagePath': 'media/graphics/misc/invisible.png',
    'init': function (_0x48e8f7, _0x25ab60, _0x481d88) {
      this.parent(_0x48e8f7, _0x25ab60, _0x481d88), ig.Fullscreen.isEnabled() && ig.Fullscreen.enableFullscreenButton ? (this.enterImage.loaded ? this.initSize() : this.enterImage.loadCallback = function () {
        this.initSize();
      }.bind(this), ig.btFullscreen = this) : (this.kill(), ig.btFullscreen = null);
    },
    'kill': function () {
      this.parent();
      var _0x3a98ac = ig.domHandler.getElementById('#' + this.identifier);
      _0x3a98ac && ig.domHandler.hide(_0x3a98ac);
    },
    'show': function () {
      this.isShown = !0x0;
      var _0x247feb = ig.domHandler.getElementById('#' + this.identifier);
      _0x247feb && ig.domHandler.show(_0x247feb);
    },
    'hide': function () {
      this.isShown = !0x1;
      var _0x468f9b = ig.domHandler.getElementById('#' + this.identifier);
      _0x468f9b && ig.domHandler.hide(_0x468f9b);
    },
    'initSize': function () {
      this.size.x = this.enterImage.width, this.size.y = this.enterImage.height, this.createClickableLayer(), this.isReady = !0x0, this.repos(), ig.sizeHandler.resizeLayers();
    },
    'createClickableLayer': function () {
      this.identifier = 'fullscreen-button-layer';
      var _0xb0dee6 = ig.domHandler.getElementById('#' + this.identifier);
      _0xb0dee6 ? (ig.domHandler.show(_0xb0dee6), ig.domHandler.attr(_0xb0dee6, 'onclick', 'ig.Fullscreen.toggleFullscreen()')) : this.createClickableOutboundLayer();
    },
    'repos': function () {
      0x708 < ig.system.height || 0x578 > ig.system.width ? (this.size.x = this.exitImage.width, this.size.y = this.exitImage.height) : (this.size.x = this.enterImage.width, this.size.y = this.enterImage.height);
      switch (this.anchor) {
        case 0x2:
          this.pos.x = ig.system.width - this.size.x - this.gap, this.pos.y = this.gap;
          break;
        case 0x3:
          this.pos.x = ig.system.width - this.size.x - this.gap, this.pos.y = ig.system.height - this.size.y - this.gap;
          break;
        case 0x4:
          this.pos.x = this.gap, this.pos.y = ig.system.height - this.size.y - this.gap;
          break;
        default:
          this.pos.x = this.gap, this.pos.y = this.gap;
      }
      this.identifier && (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y);
    },
    'draw': function () {
      if (this.isReady && this.isShown) {
        var _0x150c3b = ig.system.context;
        _0x150c3b.save(), _0x150c3b.setTransform(0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
        var _0x6e0b05 = 0x14;
        _0x150c3b.textAlign = 'center';
        var _0x18662f = 0x4;
        _0x150c3b.fillStyle = '#fff';
        var _0x4df598 = _STRINGS.Game.Fullscreen;
        0x708 < ig.system.height || 0x578 > ig.system.width ? (this.exitImage.draw(this.pos.x, this.pos.y), _0x6e0b05 = 0x1e, _0x18662f = 0x6) : this.enterImage.draw(this.pos.x, this.pos.y), _0x150c3b.font = _0x6e0b05 + "px comicy", ig.KvnUtility.drawStrokedText(_0x150c3b, _0x4df598, this.pos.x + this.size.x / 0x2 - 0xa, this.pos.y + this.size.y / 0x2, '#000', _0x18662f), _0x150c3b.restore();
      }
    },
    'createClickableOutboundLayer': function () {
      var _0x59a014 = this.identifier,
        _0x2a10bf = this.invisImagePath,
        _0x57b95e = ig.domHandler.create('div');
      ig.domHandler.attr(_0x57b95e, 'id', _0x59a014), ig.domHandler.attr(_0x57b95e, 'onclick', 'ig.Fullscreen.toggleFullscreen()');
      var _0x5e7cf7 = ig.domHandler.create('a'),
        _0x299332 = ig.domHandler.create('img');
      ig.domHandler.css(_0x299332, {
        'width': '100%',
        'height': '100%'
      }), ig.domHandler.attr(_0x299332, 'src', _0x2a10bf), _0x2a10bf = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      if (ig.ua.mobile) {
        var _0x456a82 = ig.domHandler.getElementById('#canvas'),
          _0x56b91f = ig.domHandler.getOffsets(_0x456a82),
          _0x456a82 = _0x56b91f.left,
          _0x56b91f = _0x56b91f.top;
        if (ig.sizeHandler.disableStretchToFitOnMobileFlag) var _0x456a82 = Math.floor(_0x456a82 + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px',
          _0x56b91f = Math.floor(_0x56b91f + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px',
          _0x40f525 = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px',
          _0x2a10bf = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px';else _0x456a82 = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x56b91f = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x40f525 = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x2a10bf = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px';
      } else _0x456a82 = ig.domHandler.getElementById('#canvas'), _0x56b91f = ig.domHandler.getOffsets(_0x456a82), _0x456a82 = _0x56b91f.left, _0x56b91f = _0x56b91f.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (_0x456a82 = Math.floor(_0x456a82 + this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x56b91f = Math.floor(_0x56b91f + this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x40f525 = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x2a10bf = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px') : (_0x456a82 = Math.floor(_0x456a82 + this.pos.x * _0x2a10bf) + 'px', _0x56b91f = Math.floor(_0x56b91f + this.pos.y * _0x2a10bf) + 'px', _0x40f525 = Math.floor(this.size.x * _0x2a10bf) + 'px', _0x2a10bf = Math.floor(this.size.y * _0x2a10bf) + 'px');
      ig.domHandler.css(_0x57b95e, {
        'float': 'left',
        'position': 'absolute',
        'left': _0x456a82,
        'top': _0x56b91f,
        'width': _0x40f525,
        'height': _0x2a10bf,
        'z-index': 0x3
      }), ig.domHandler.appendChild(_0x5e7cf7, _0x299332), ig.domHandler.appendChild(_0x57b95e, _0x5e7cf7), ig.domHandler.appendToBody(_0x57b95e), ig.Fullscreen.divs[_0x59a014] = {}, ig.Fullscreen.divs[_0x59a014].width = this.size.x, ig.Fullscreen.divs[_0x59a014].height = this.size.y, ig.Fullscreen.divs[_0x59a014].entity_pos_x = this.pos.x, ig.Fullscreen.divs[_0x59a014].entity_pos_y = this.pos.y;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.responsive').requires('plugins.handlers.size-handler').defines(function () {
  ig.SizeHandler.inject({
    'minW': 0x578,
    'minH': 0x578,
    'firstResize': !0x0,
    'sizeCalcs': function () {
      var _0x34b262 = window.innerWidth,
        _0x4a40a8 = window.innerHeight,
        _0x90f732,
        _0x48ecfb;
      this.r0 = this.minW / this.minH;
      var _0x3049d5 = _0x34b262 / _0x4a40a8;
      _0x3049d5 < this.r0 ? (_0x90f732 = this.minW, _0x48ecfb = Math.round(_0x90f732 / _0x3049d5)) : (_0x48ecfb = this.minH, _0x90f732 = Math.round(_0x48ecfb * _0x3049d5)), ig.system && (this.dx = (ig.system.width - _0x90f732) / 0x2, this.dy = (ig.system.height - _0x48ecfb) / 0x2, ig.system.resize(_0x90f732, _0x48ecfb, this.scale)), this.windowSize = new Vector2(_0x34b262, _0x4a40a8), this.scaleRatioMultiplier = new Vector2(_0x34b262 / _0x90f732, _0x4a40a8 / _0x48ecfb), this.desktop.actualResolution = new Vector2(_0x34b262, _0x4a40a8), this.mobile.actualResolution = new Vector2(_0x34b262, _0x4a40a8), this.desktop.actualSize = new Vector2(_0x34b262, _0x4a40a8), this.mobile.actualSize = new Vector2(_0x34b262, _0x4a40a8), ig.game ? (ig.game.midX = ig.system.width / 0x2, ig.game.midY = ig.system.height / 0x2, this.firstResize && (this.firstResize = !0x1, this.dx = (this.minW - _0x90f732) / 0x2, this.dy = (this.minH - _0x48ecfb) / 0x2), ig.game.screen.x += this.dx, ig.game.screen.y += this.dy, ig.game.update(), this.repositionEntities(), ig.game.draw()) : ig.loader && ig.loader.draw();
    },
    'repositionEntities': function () {
      ig.game.entities.forEach(function (_0x1030e1) {
        _0x1030e1 && 'function' === typeof _0x1030e1.repos && _0x1030e1.repos();
      });
    },
    'reorient': function () {
      this.resize(), ig.ua.mobile && this.resizeAds();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.scale').requires('impact.entity').defines(function () {
  ig.Entity.inject({
    'scale': {
      'x': 0x1,
      'y': 0x1
    },
    '_offset': {
      'x': 0x0,
      'y': 0x0
    },
    '_scale': {
      'x': 0x1,
      'y': 0x1
    },
    '_size': {
      'x': 0x0,
      'y': 0x0
    },
    'init': function (_0x21000b, _0x388167, _0x5a30d5) {
      this.parent(_0x21000b, _0x388167, _0x5a30d5), this._offset.x = this.offset.x, this._offset.y = this.offset.y, this._size.x = this.size.x, this._size.y = this.size.y, this.setScale(this.scale.x, this.scale.y);
    },
    'draw': function () {
      var _0x3172c6 = ig.system.context;
      _0x3172c6.save(), _0x3172c6.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() - this.offset.y - ig.game.screen.y)), _0x3172c6.scale(this._scale.x, this._scale.y), null != this.currentAnim && this.currentAnim.draw(0x0, 0x0), _0x3172c6.restore();
    },
    'setScale': function (_0x681018, _0x5b762f) {
      var _0x48c450 = this.size.x,
        _0x36a97b = this.size.y;
      this.scale.x = _0x681018 || this.scale.x, this.scale.y = _0x5b762f || this.scale.y, this._scale.x = this.scale.x / ig.system.scale, this._scale.y = this.scale.y / ig.system.scale, this.offset.x = this._offset.x * this._scale.x, this.offset.y = this._offset.y * this._scale.y, this.size.x = this._size.x * this._scale.x, this.size.y = this._size.y * this._scale.y, this.pos.x += (_0x48c450 - this.size.x) / 0x2, this.pos.y += (_0x36a97b - this.size.y) / 0x2;
    }
  });
}), this.START_BRANDING_SPLASH, ig.baked = !0x0, ig.module('plugins.branding.splash').requires('impact.impact', 'impact.entity').defines(function () {
  ig.BrandingSplash = ig.Class.extend({
    'init': function () {
      ig.game.spawnEntity(EntityBranding, 0x0, 0x0), console.log("spawn branding");
    }
  }), EntityBranding = ig.Entity.extend({
    'autoUpdateScale': !0x1,
    'gravityFactor': 0x0,
    'size': {
      'x': 0x20,
      'y': 0x20
    },
    'splash': new ig.Image('branding/splash1.png'),
    'init': function (_0x45140a, _0x5171be, _0x4cf985) {
      this.parent(_0x45140a, _0x5171be, _0x4cf985), 0x140 >= ig.system.width ? (this.size.x = 0x140, this.size.y = 0xc8) : (this.size.x = 0x1e0, this.size.y = 0xf0), this.pos.x = (ig.system.width - this.size.x) / 0x2, this.pos.y = -this.size.y - 0xc8, this.endPosY = (ig.system.height - this.size.y) / 0x2, _0x45140a = this.tween({
        'pos': {
          'y': this.endPosY
        }
      }, 0.5, {
        'easing': ig.Tween.Easing.Bounce.EaseIn
      }), _0x5171be = this.tween({}, 2.5, {
        'onComplete': function () {
          ig.game.director.loadLevel(ig.game.director.currentLevel);
        }
      }), _0x45140a.chain(_0x5171be), _0x45140a.start(), this.currentAnim = this.anims.idle;
    },
    'createClickableLayer': function () {
      console.log("Build clickable layer"), this.checkClickableLayer('branding-splash', _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow);
    },
    'doesClickableLayerExist': function (_0x3d2624) {
      for (k in dynamicClickableEntityDivs) if (k == _0x3d2624) return !0x0;
      return !0x1;
    },
    'checkClickableLayer': function (_0x2a2e44, _0x20fc4e, _0x5ebaf8) {
      'undefined' == typeof wm && (this.doesClickableLayerExist(_0x2a2e44) ? (ig.game.showOverlay([_0x2a2e44]), $('#' + _0x2a2e44).find('[href]').attr('href', _0x20fc4e)) : this.createClickableOutboundLayer(_0x2a2e44, _0x20fc4e, 'media/graphics/misc/invisible.png', _0x5ebaf8));
    },
    'createClickableOutboundLayer': function (_0x1c045c, _0x5c38af, _0x3b0c24, _0x16993e) {
      var _0x3d54c6 = ig.$new('div');
      _0x3d54c6.id = _0x1c045c, document.body.appendChild(_0x3d54c6), _0x3d54c6 = $('#' + _0x3d54c6.id), _0x3d54c6.css('float', 'left'), _0x3d54c6.css('position', 'absolute');
      if (ig.ua.mobile) {
        var _0xd598cf = window.innerHeight / mobileHeight,
          _0x44d4ac = window.innerWidth / mobileWidth;
        _0x3d54c6.css('left', this.pos.x * _0x44d4ac), _0x3d54c6.css('top', this.pos.y * _0xd598cf), _0x3d54c6.css('width', this.size.x * _0x44d4ac), _0x3d54c6.css('height', this.size.y * _0xd598cf);
      } else _0xd598cf = w / 0x2 - destW / 0x2, _0x44d4ac = h / 0x2 - destH / 0x2, console.log(_0xd598cf, _0x44d4ac), _0x3d54c6.css('left', _0xd598cf + this.pos.x * multiplier), _0x3d54c6.css('top', _0x44d4ac + this.pos.y * multiplier), _0x3d54c6.css('width', this.size.x * multiplier), _0x3d54c6.css('height', this.size.y * multiplier);
      _0x16993e ? _0x3d54c6.html("<a target='_blank' href='" + _0x5c38af + "'><img style='width:100%;height:100%' src='" + _0x3b0c24 + "'></a>") : _0x3d54c6.html("<a href='" + _0x5c38af + "'><img style='width:100%;height:100%' src='" + _0x3b0c24 + "'></a>"), dynamicClickableEntityDivs[_0x1c045c] = {}, dynamicClickableEntityDivs[_0x1c045c].width = this.size.x * multiplier, dynamicClickableEntityDivs[_0x1c045c].height = this.size.y * multiplier, dynamicClickableEntityDivs[_0x1c045c].entity_pos_x = this.pos.x, dynamicClickableEntityDivs[_0x1c045c].entity_pos_y = this.pos.y;
    },
    'draw': function () {
      ig.system.context.fillStyle = '#ffffff', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height), ig.system.context.fillStyle = '#000', ig.system.context.font = "12px Arial", ig.system.context.textAlign = 'left', 0x140 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 0x96, ig.system.height - 0xf) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 0xa0, ig.system.height - 0xf), this.parent(), this.splash && ig.system.context.drawImage(this.splash.data, 0x0, 0x0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  });
}), this.END_BRANDING_SPLASH, ig.baked = !0x0, ig.module('game.entities.buttons.button').requires('impact.entity', 'plugins.data.vector').defines(function () {
  EntityButton = ig.Entity.extend({
    'collides': ig.Entity.COLLIDES.NEVER,
    'type': ig.Entity.TYPE.A,
    'size': {
      'x': 0x96,
      'y': 0x96
    },
    'fillColor': null,
    'zIndex': 0x17318,
    'isTweening': !0x1,
    'scaling': !0x0,
    'bodyScale': 0x1,
    'offsetScale': 0x1,
    'disable': !0x1,
    'init': function (_0x41a1a2, _0x3f265f, _0x2f288f) {
      this.parent(_0x41a1a2, _0x3f265f, _0x2f288f), !ig.global.wm && !isNaN(_0x2f288f.zIndex) && (this.zIndex = _0x2f288f.zIndex), this.btnImage && (this.size = {
        'x': this.btnImage.width,
        'y': this.btnImage.height
      }, this.animSheet = new ig.AnimationSheet(this.btnImage.path, this.size.x, this.size.y), this.addAnim('idle', 0x1, [0x0], !0x0), this.setScale(this.bodyScale, this.bodyScale));
    },
    'update': function () {
      this.parent(), !0x0 == this.scaling && this.setScale(this.bodyScale * this.offsetScale, this.bodyScale * this.offsetScale);
    },
    'repo': function () {
      this.pos.x += ig.game.screen.x, this.pos.y += ig.game.screen.y;
    },
    'clicked': function () {
      !this.disable && !this.isTweening && (this.isTweening = !0x0, this.onClicked ? this.onClicked() : '', ig.soundHandler.sfxPlayer.play('buttonClick'), this.tween({
        'bodyScale': this.bodyScale - 0.1
      }, 0.1, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          this.tween({
            'bodyScale': this.bodyScale + 0.1
          }, 0.1, {
            'easing': ig.Tween.Easing.Linear.EaseNone,
            'onComplete': function () {
              this.isTweening = !0x1;
            }.bind(this)
          }).start();
        }.bind(this)
      }).start());
    },
    'clicking': function () {
      this.disable || (this.onClicking ? this.onClicking() : '');
    },
    'released': function () {
      this.disable || (this.onReleased ? this.onReleased() : '');
    },
    'over': function () {
      this.disable || (this.onOver ? this.onOver() : '');
    },
    'leave': function () {
      this.disable || (this.onLeave ? this.onLeave() : '');
    }
  });
}), ig.baked = !0x0, ig.module('plugins.clickable-div-layer').requires('plugins.data.vector').defines(function () {
  ClickableDivLayer = ig.Class.extend({
    'pos': new Vector2(0x0, 0x0),
    'size': new Vector2(0x0, 0x0),
    'identifier': null,
    'invisImagePath': 'media/graphics/misc/invisible.png',
    'init': function (_0x4e1bc8) {
      this.pos = new Vector2(_0x4e1bc8.pos.x, _0x4e1bc8.pos.y), this.size = new Vector2(_0x4e1bc8.size.x, _0x4e1bc8.size.y);
      var _0x17bb4f = 'more-games',
        _0x183ccb = 'https://www.marketjs.com',
        _0x309fa8 = !0x1;
      _0x4e1bc8.div_layer_name && (_0x17bb4f = _0x4e1bc8.div_layer_name), _0x4e1bc8.link && (_0x183ccb = _0x4e1bc8.link), _0x4e1bc8.newWindow && (_0x309fa8 = _0x4e1bc8.newWindow), this.createClickableLayer(_0x17bb4f, _0x183ccb, _0x309fa8);
    },
    'createClickableLayer': function (_0x14a6a3, _0xa84faf, _0x8144bf) {
      this.identifier = _0x14a6a3;
      var _0x35e489 = ig.domHandler.getElementById('#' + _0x14a6a3);
      _0x35e489 ? (ig.domHandler.show(_0x35e489), ig.domHandler.attr(_0x35e489, 'href', _0xa84faf)) : this.createClickableOutboundLayer(_0x14a6a3, _0xa84faf, this.invisImagePath, _0x8144bf);
    },
    'update': function (_0x28f13e, _0x53b954) {
      this.pos.x === _0x28f13e && this.pos.y === _0x53b954 || this.updatePos(_0x28f13e, _0x53b954);
    },
    'updatePos': function (_0x12ac35, _0xc77343) {
      this.pos.x = _0x12ac35, this.pos.y = _0xc77343, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y;
    },
    'createClickableOutboundLayer': function (_0x4c426b, _0x2644b6, _0x50eb0a, _0x2d02db) {
      var _0x21c328 = ig.domHandler.create('div');
      ig.domHandler.attr(_0x21c328, 'id', _0x4c426b);
      var _0x32f23d = ig.domHandler.create('a');
      ig.domHandler.addEvent(_0x21c328, 'mousedown', function (_0x4fb3a0) {
        _0x4fb3a0.preventDefault();
      }), _0x2d02db ? (ig.domHandler.attr(_0x32f23d, 'href', _0x2644b6), ig.domHandler.attr(_0x32f23d, 'target', '_blank')) : ig.domHandler.attr(_0x32f23d, 'href', _0x2644b6), _0x2644b6 = ig.domHandler.create('img'), ig.domHandler.css(_0x2644b6, {
        'width': '100%',
        'height': '100%'
      }), ig.domHandler.attr(_0x2644b6, 'src', _0x50eb0a), _0x50eb0a = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      if (ig.ua.mobile) {
        _0x2d02db = ig.domHandler.getElementById('#canvas');
        var _0x1e369d = ig.domHandler.getOffsets(_0x2d02db);
        _0x2d02db = _0x1e369d.left, _0x1e369d = _0x1e369d.top;
        if (ig.sizeHandler.disableStretchToFitOnMobileFlag) {
          _0x2d02db = Math.floor(_0x2d02db + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px';
          var _0x1e369d = Math.floor(_0x1e369d + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px',
            _0x1c69a0 = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px';
          _0x50eb0a = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px';
        } else _0x2d02db = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x1e369d = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x1c69a0 = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x50eb0a = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px';
      } else _0x2d02db = ig.domHandler.getElementById('#canvas'), _0x1e369d = ig.domHandler.getOffsets(_0x2d02db), _0x2d02db = _0x1e369d.left, _0x1e369d = _0x1e369d.top, _0x2d02db = Math.floor(_0x2d02db + this.pos.x * _0x50eb0a) + 'px', _0x1e369d = Math.floor(_0x1e369d + this.pos.y * _0x50eb0a - ig.game.screen.y) + 'px', _0x1c69a0 = Math.floor(this.size.x * _0x50eb0a) + 'px', _0x50eb0a = Math.floor(this.size.y * _0x50eb0a) + 'px';
      ig.domHandler.css(_0x21c328, {
        'float': 'left',
        'position': 'absolute',
        'left': _0x2d02db,
        'top': _0x1e369d,
        'width': _0x1c69a0,
        'height': _0x50eb0a,
        'z-index': 0x3
      }), ig.domHandler.addEvent(_0x21c328, 'mousemove', ig.input.mousemove.bind(ig.input), !0x1), ig.domHandler.appendChild(_0x32f23d, _0x2644b6), ig.domHandler.appendChild(_0x21c328, _0x32f23d), ig.domHandler.appendToBody(_0x21c328), ig.sizeHandler.dynamicClickableEntityDivs[_0x4c426b] = {}, ig.sizeHandler.dynamicClickableEntityDivs[_0x4c426b].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[_0x4c426b].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[_0x4c426b].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[_0x4c426b].entity_pos_y = this.pos.y;
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-branding-logo').requires('game.entities.buttons.button', 'plugins.clickable-div-layer').defines(function () {
  EntityButtonBrandingLogo = EntityButton.extend({
    'type': ig.Entity.TYPE.A,
    'gravityFactor': 0x0,
    'logo': new ig.AnimationSheet('branding/logo.png', _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
    'zIndex': 0x2711,
    'size': {
      'x': 0x40,
      'y': 0x42
    },
    'clickableLayer': null,
    'link': null,
    'newWindow': !0x1,
    'div_layer_name': 'branding-logo',
    'name': 'brandinglogo',
    'init': function (_0x3a4e42, _0x41fb70, _0x333127) {
      this.parent(_0x3a4e42, _0x41fb70, _0x333127);
      if (!ig.global.wm) {
        if ('undefined' == typeof wm) {
          if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0x0, [0x0], !0x0), this.currentAnim = this.anims.idle, _0x333127 && _0x333127.centralize && (this.pos.x = ig.system.width / 0x2 - this.size.x / 0x2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer = new ClickableDivLayer(this));else {
            this.kill();
            return;
          }
        }
        this.div_layer_name = _0x333127.div_layer_name ? _0x333127.div_layer_name : 'branding-logo';
      }
    },
    'show': function () {
      var _0x3da5b8 = ig.domHandler.getElementById('#' + this.div_layer_name);
      ig.domHandler.show(_0x3da5b8);
    },
    'hide': function () {
      var _0x4cba6f = ig.domHandler.getElementById('#' + this.div_layer_name);
      ig.domHandler.hide(_0x4cba6f);
    },
    'clicked': function () {},
    'clicking': function () {},
    'released': function () {}
  });
}), ig.baked = !0x0, ig.module('game.entities.branding-logo-placeholder').requires('impact.entity', 'game.entities.buttons.button-branding-logo').defines(function () {
  EntityBrandingLogoPlaceholder = ig.Entity.extend({
    'gravityFactor': 0x0,
    'size': {
      'x': 0x20,
      'y': 0x20
    },
    '_wmDrawBox': !0x0,
    '_wmBoxColor': "rgba(0, 0, 255, 0.7)",
    'init': function (_0x7c2454, _0x13e5ef, _0x60041e) {
      this.parent(_0x7c2454, _0x13e5ef, _0x60041e);
      if (_0x60041e) switch (console.log("settings found ... using that div layer name"), _0x7c2454 = _0x60041e.div_layer_name, console.log('settings.centralize:', _0x60041e.centralize), _0x60041e.centralize) {
        case 'true':
          console.log("centralize true"), centralize = !0x0;
          break;
        case 'false':
          console.log("centralize false"), centralize = !0x1;
          break;
        default:
          console.log("default ... centralize false"), centralize = !0x1;
      } else _0x7c2454 = 'branding-logo', centralize = !0x1;
      if ('undefined' == typeof wm) {
        if (_SETTINGS.Branding.Logo.Enabled) try {
          ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
            'div_layer_name': _0x7c2454,
            'centralize': centralize
          });
        } catch (_0x4828da) {
          console.log(_0x4828da);
        }
        this.kill();
      }
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.kvn-delay-execution').requires('impact.entity').defines(function () {
  EntityKvnDelayExecution = ig.Entity.extend({
    'timer': null,
    'delay': null,
    'callback': null,
    'init': function (_0x2320a8, _0x33a4da, _0x2750b2) {
      this.parent(_0x2320a8, _0x33a4da, _0x2750b2);
    },
    'setTimeOut': function (_0x326286, _0x522def) {
      this.timer = new ig.Timer(), this.delay = _0x326286, this.callback = _0x522def;
    },
    'update': function () {
      this.parent(), this.timer.delta() > this.delay && (this.callback ? this.callback() : '', this.kill());
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-more-games').requires('game.entities.buttons.button', 'plugins.clickable-div-layer', 'game.entities.kvn-delay-execution').defines(function () {
  EntityButtonMoreGames = EntityButton.extend({
    'type': ig.Entity.TYPE.A,
    'gravityFactor': 0x0,
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/btn-small.png', 0x107, 0x5d),
    'size': {
      'x': 0x107,
      'y': 0x5d
    },
    'zIndex': 0x28,
    'clickableLayer': null,
    'link': null,
    'newWindow': !0x1,
    'div_layer_name': 'more-games',
    'name': 'moregames',
    'init': function (_0x47b8ad, _0x525e36, _0x389946) {
      this.parent(_0x47b8ad, _0x525e36, _0x389946), ig.global.wm || (_SETTINGS.MoreGames.Enabled ? (this.bodyScale = 0x708 < ig.system.height || 0x578 > ig.system.width ? 1.5 : 0x1, this.setScale(this.bodyScale, this.bodyScale), _0x47b8ad = ig.system.width - this.size.x - 0xf, this.pos.x = _0x47b8ad + ig.game.screen.x, this.pos.y = 0xf + ig.game.screen.y, this.div_layer_name = _0x389946.div_layer_name ? _0x389946.div_layer_name : 'more-games', _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.addAnim('idle', 0x1, [0x0], !0x0), this.clickableLayer = new ClickableDivLayer(this), this.repos()) : this.kill());
    },
    'show': function () {
      var _0x205c98 = ig.domHandler.getElementById('#' + this.div_layer_name);
      _0x205c98 && ig.domHandler.show(_0x205c98);
    },
    'hide': function () {
      var _0xf26e60 = ig.domHandler.getElementById('#' + this.div_layer_name);
      _0xf26e60 && ig.domHandler.hide(_0xf26e60);
    },
    'repos': function () {
      this.bodyScale = 0x708 < ig.system.height || 0x578 > ig.system.width ? 1.5 : 0x1, this.setScale(this.bodyScale, this.bodyScale);
      var _0x505bea = ig.system.width - this.size.x - 0xf;
      this.pos.x = _0x505bea + ig.game.screen.x, this.pos.y = 0xf + ig.game.screen.y, this.clickableLayer.size.x = this.size.x, this.clickableLayer.size.y = this.size.y, this.clickableLayer && this.clickableLayer.updatePos(_0x505bea, 0xf);
    },
    'draw': function () {
      this.parent();
      var _0x3c17f9 = ig.system.context;
      _0x3c17f9.save();
      var _0x3789f0 = 0x14 * this.bodyScale;
      _0x3c17f9.textAlign = 'center', _0x3c17f9.font = _0x3789f0 + "px comicy", _0x3789f0 = 0x4 * this.bodyScale, _0x3c17f9.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x3c17f9, _STRINGS.Game.MoreGame, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 0x2 - ig.game.screen.y, '#000', _0x3789f0), _0x3c17f9.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.pointer').requires('impact.entity').defines(function () {
  EntityPointer = ig.Entity.extend({
    'checkAgainst': ig.Entity.TYPE.BOTH,
    'size': new Vector2(0x1, 0x1),
    'isFirstPressed': !0x1,
    'isPressed': !0x1,
    'isReleased': !0x1,
    'isHovering': !0x1,
    'hoveringItem': null,
    'objectArray': [],
    'clickedObjectList': [],
    'ignorePause': !0x0,
    'zIndex': 0x157c,
    'check': function (_0x246ef4) {
      this.objectArray.push(_0x246ef4);
    },
    'clickObject': function (_0x38df37) {
      this.isFirstPressed && 'function' == typeof _0x38df37.clicked && (_0x38df37.clicked(), this.addToClickedObjectList(_0x38df37)), this.isPressed && !this.isReleased && 'function' == typeof _0x38df37.clicking && _0x38df37.clicking(), this.isReleased && 'function' == typeof _0x38df37.released && (_0x38df37.released(), this.removeFromClickedObjectList(_0x38df37));
    },
    'refreshPos': function () {
      this.pos.x = ig.game.io.getClickPos().x + ig.game.screen.x, this.pos.y = ig.game.io.getClickPos().y + ig.game.screen.y;
    },
    'update': function () {
      this.parent(), this.refreshPos();
      var _0x2b4fd2 = null,
        _0xca134b = -0x1;
      for (a = this.objectArray.length - 0x1; -0x1 < a; a--) this.objectArray[a].zIndex > _0xca134b && (_0xca134b = this.objectArray[a].zIndex, _0x2b4fd2 = this.objectArray[a]);
      if (null != _0x2b4fd2) null != this.hoveringItem ? this.hoveringItem != _0x2b4fd2 && ('function' == typeof this.hoveringItem.leave && this.hoveringItem.leave(), 'function' == typeof _0x2b4fd2.over && _0x2b4fd2.over()) : 'function' == typeof _0x2b4fd2.over && _0x2b4fd2.over(), this.hoveringItem = _0x2b4fd2, this.clickObject(_0x2b4fd2), this.objectArray = [];else {
        if (null != this.hoveringItem && 'function' == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
          for (_0x2b4fd2 = 0x0; _0x2b4fd2 < this.clickedObjectList.length; _0x2b4fd2++) _0xca134b = this.clickedObjectList[_0x2b4fd2], 'function' == typeof _0xca134b.releasedOutside && _0xca134b.releasedOutside();
          this.clickedObjectList = [];
        }
      }
      this.isFirstPressed = ig.input.pressed('click'), this.isReleased = ig.input.released('click'), this.isPressed = ig.input.state('click');
    },
    'addToClickedObjectList': function (_0x276773) {
      this.clickedObjectList.push(_0x276773);
    },
    'removeFromClickedObjectList': function (_0x4ee76f) {
      for (var _0x3260bb = [], _0x2a7f58 = 0x0; _0x2a7f58 < this.clickedObjectList.length; _0x2a7f58++) {
        var _0x2db0ea = this.clickedObjectList[_0x2a7f58];
        _0x2db0ea != _0x4ee76f && _0x3260bb.push(_0x2db0ea);
      }
      this.clickedObjectList = _0x3260bb;
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.pointer-selector').requires('game.entities.pointer').defines(function () {
  EntityPointerSelector = EntityPointer.extend({
    'zIndex': 0x3e8,
    '_wmDrawBox': !0x0,
    '_wmBoxColor': "rgba(0, 0, 255, 0.7)",
    'size': {
      'x': 0x14,
      'y': 0x14
    },
    'init': function (_0x22b47f, _0x1b8a9f, _0x357b29) {
      this.parent(_0x22b47f, _0x1b8a9f, _0x357b29);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.select').requires('impact.entity').defines(function () {
  EntitySelect = ig.Entity.extend({
    'type': ig.Entity.TYPE.B,
    'checkAgainst': ig.Entity.TYPE.A,
    'collides': ig.Entity.COLLIDES.NEVER,
    'canSelect': !0x1,
    'canSelectTimerDuration': 0.35,
    'zIndex': 0x1869f,
    'isHovering': !0x1,
    'isSelected': !0x1,
    'init': function (_0x2e8294, _0x2e5724, _0x8929d1) {
      this.parent(_0x2e8294, _0x2e5724, _0x8929d1), this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration);
    },
    'doesClickableLayerExist': function (_0x3cb05b) {
      for (k in dynamicClickableEntityDivs) if (k == _0x3cb05b) return !0x0;
      return !0x1;
    },
    'checkClickableLayer': function (_0x475870, _0x59df6b, _0x15e25d) {
      'undefined' == typeof wm && (this.doesClickableLayerExist(_0x475870) ? (ig.game.showOverlay([_0x475870]), $('#' + _0x475870).find('[href]').attr('href', _0x59df6b)) : this.createClickableOutboundLayer(_0x475870, _0x59df6b, 'media/graphics/misc/invisible.png', _0x15e25d));
    },
    'createClickableOutboundLayer': function (_0x3c97b2, _0x1594cd, _0x11a955, _0x367a24) {
      var _0x97a81d = ig.$new('div');
      _0x97a81d.id = _0x3c97b2, document.body.appendChild(_0x97a81d), $('#' + _0x97a81d.id).css('float', 'left'), $('#' + _0x97a81d.id).css('width', this.size.x * multiplier), $('#' + _0x97a81d.id).css('height', this.size.y * multiplier), $('#' + _0x97a81d.id).css('position', 'absolute');
      var _0x211e79 = w / 0x2 - destW / 0x2,
        _0x3997f1 = h / 0x2 - destH / 0x2;
      w == mobileWidth ? ($('#' + _0x97a81d.id).css('left', this.pos.x), $('#' + _0x97a81d.id).css('top', this.pos.y)) : ($('#' + _0x97a81d.id).css('left', _0x211e79 + this.pos.x * multiplier), $('#' + _0x97a81d.id).css('top', _0x3997f1 + this.pos.y * multiplier)), _0x367a24 ? $('#' + _0x97a81d.id).html("<a target='_blank' href='" + _0x1594cd + "'><img style='width:100%;height:100%' src='" + _0x11a955 + "'></a>") : $('#' + _0x97a81d.id).html("<a href='" + _0x1594cd + "'><img style='width:100%;height:100%' src='" + _0x11a955 + "'></a>"), dynamicClickableEntityDivs[_0x3c97b2] = {}, dynamicClickableEntityDivs[_0x3c97b2].width = $('#' + _0x97a81d.id).width(), dynamicClickableEntityDivs[_0x3c97b2].height = $('#' + _0x97a81d.id).height(), dynamicClickableEntityDivs[_0x3c97b2].entity_pos_x = this.pos.x, dynamicClickableEntityDivs[_0x3c97b2].entity_pos_y = this.pos.y;
    },
    'hovered': function () {
      this.isHovering = !0x0, this.dehoverOthers();
    },
    'dehoverOthers': function () {
      var _0x10fdec = ig.game.getEntitiesByType(EntitySelect);
      for (i = 0x0; i < _0x10fdec.length; i++) _0x10fdec[i] != this && (_0x10fdec[i].isHovering = !0x1);
    },
    'deselectOthers': function () {
      var _0xaef798 = ig.game.getEntitiesByType(EntitySelect);
      for (i = 0x0; i < _0xaef798.length; i++) _0xaef798[i] != this && (_0xaef798[i].isSelected = !0x1);
    },
    'update': function () {
      this.parent(), this.canSelectTimer && 0x0 < this.canSelectTimer.delta() && (this.canSelect = !0x0, this.canSelectTimer = null);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.marketjs-splash').requires('impact.entity').defines(function () {
  EntityMarketJSSplash = ig.Entity.extend({
    'logoImage': new ig.Image('media/graphics/splash/marketjs/logo.png'),
    'letterImage': new ig.Image('media/graphics/splash/marketjs/letter-m.png'),
    'brandingText': new ig.Image('media/graphics/splash/marketjs/branding-text.png'),
    'scale': {
      'x': 0x1,
      'y': 0x1
    },
    'init': function () {
      if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
        this.updateScale(), this.originX = 0x0, this.logo = {
          'scale': 0.02,
          'alpha': 0x0,
          'x': -this.logoImage.width / 0x2,
          'y': -this.logoImage.height / 0x2
        };
        var _0x1aa2b0 = this.tween({
          'logo': {
            'scale': 0x1,
            'alpha': 0x1
          }
        }, 0.48, {
          'delay': 0.3,
          'easing': ig.Tween.Easing.Back.EaseOut,
          'onComplete': function () {
            ig.soundHandler.sfxPlayer.play('logosplash1'), this.tween({}, 0.59, {
              'onComplete': function () {
                ig.soundHandler.sfxPlayer.play('logosplash2');
              }
            }).start();
          }.bind(this)
        });
        this.letterM = {
          'scale': 0.02,
          'alpha': 0x0,
          'x': -this.letterImage.width / 0x2,
          'y': -this.letterImage.height / 0x2 - 0xa
        };
        var _0x480b24 = this.tween({
          'letterM': {
            'scale': 0x1,
            'alpha': 0x1
          }
        }, 0.48, {
          'easing': ig.Tween.Easing.Back.EaseOut
        });
        this.text = {
          'alpha': 0x1,
          'x': -this.brandingText.width / 0x2,
          'y': -this.brandingText.height / 0x2,
          'coverW': 0x2 * this.brandingText.width,
          'coverH': 0x2 * this.brandingText.height
        }, this.text.originX = -this.brandingText.width / 0x2 - 0x10e, this.text.cx = -this.text.coverW - 0x104, this.text.cy = -this.brandingText.height;
        var _0xae12d9 = this.tween({
            'originX': -0x1c2,
            'logo': {
              'scale': 0.82
            },
            'letterM': {
              'scale': 0.82
            },
            'text': {
              'originX': 0x96
            }
          }, 0.78, {
            'delay': 0.4,
            'easing': ig.Tween.Easing.Back.EaseOut
          }),
          _0x29a9af = this.tween({
            'logo': {
              'alpha': 0x0
            },
            'letterM': {
              'alpha': 0x0
            },
            'text': {
              'alpha': 0x0
            }
          }, 0.9, {
            'delay': 1.5,
            'onComplete': function () {
              this.goToMenu();
            }.bind(this)
          });
        _0x1aa2b0.chain(_0x480b24), _0x480b24.chain(_0xae12d9), _0xae12d9.chain(_0x29a9af), _0x1aa2b0.start(), this.tween({}, 0.25, {
          'onComplete': function () {
            ig.soundHandler.sfxPlayer.play('logosplash1');
          }
        }).start();
      } else this.goToMenu();
    },
    'goToMenu': function () {
      ig.soundHandler.sfxPlayer.soundList.logosplash1.mute(!0x0), ig.soundHandler.sfxPlayer.soundList.logosplash2.mute(!0x0), ig.soundHandler.bgmPlayer.play('background'), ig.game.director.nextLevel(), this.kill();
    },
    'update': function () {
      if (0x0 < this.tweens.length) {
        for (var _0x3209d7 = [], _0x17492b = 0x0; _0x17492b < this.tweens.length; _0x17492b++) this.tweens[_0x17492b].update(), this.tweens[_0x17492b].complete || _0x3209d7.push(this.tweens[_0x17492b]);
        this.tweens = _0x3209d7;
      }
      this.updateScale();
    },
    'draw': function () {
      var _0x55c01e = ig.system.context;
      _0x55c01e.fillStyle = '#FFF', _0x55c01e.fillRect(0x0, 0x0, ig.system.width, ig.system.height), _0x55c01e.save(), _0x55c01e.translate(ig.system.width / 0x2, ig.system.height / 0x2), _0x55c01e.scale(this.scale.x, this.scale.y), _0x55c01e.imageSmoothingEnabled = !0x0, _0x55c01e.globalAlpha = this.text.alpha, this.brandingText.draw(this.text.originX + this.text.x, this.text.y), _0x55c01e.globalAlpha = 0x1, _0x55c01e.fillRect(this.text.cx, this.text.cy, this.originX - this.text.cx, this.text.coverH), _0x55c01e.save(), _0x55c01e.globalAlpha = this.logo.alpha, _0x55c01e.scale(this.logo.scale, this.logo.scale), this.logoImage.draw(this.originX + this.logo.x, this.logo.y), _0x55c01e.restore(), _0x55c01e.save(), _0x55c01e.globalAlpha = this.letterM.alpha, _0x55c01e.scale(this.letterM.scale, this.letterM.scale), this.letterImage.draw(this.originX + this.letterM.x, this.letterM.y), _0x55c01e.restore(), _0x55c01e.restore();
    },
    'updateScale': function () {
      if (!this.skipUpdateScale) {
        var _0x126083 = window.innerWidth / window.innerHeight,
          _0x2a5975 = ig.system.height / 0x500,
          _0xce5fe3 = ig.system.width / 0x500;
        if (ig.responsive) this.scale.x = this.scale.y = 0x1 < _0x126083 ? _0x2a5975 : _0xce5fe3;else {
          if (ig.ua.mobile && !ig.sizeHandler.disableStretchToFitOnMobileFlag) {
            var _0x5afced = ig.system.width / ig.system.height;
            0x1 < _0x126083 ? (this.scale.x = _0x5afced / _0x126083 * _0x2a5975, this.scale.y = _0x2a5975) : (this.scale.x = _0xce5fe3, this.scale.y = _0x126083 / _0x5afced * _0xce5fe3);
          } else this.skipUpdateScale = !0x0, _0xce5fe3 = ig.system.width / 0x438, this.scale.x = this.scale.y = _0x2a5975 < _0xce5fe3 ? _0x2a5975 : _0xce5fe3;
        }
        0x1 < this.scale.x && (this.scale.x = 0x1), 0x1 < this.scale.y && (this.scale.y = 0x1);
      }
    }
  });
}), ig.baked = !0x0, ig.module('game.levels.opening').requires('impact.image', 'game.entities.marketjs-splash').defines(function () {
  LevelOpening = {
    'entities': [{
      'type': 'EntityMarketJSSplash',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-sound').requires('game.entities.buttons.button').defines(function () {
  EntityButtonSound = EntityButton.extend({
    'type': ig.Entity.TYPE.A,
    'gravityFactor': 0x0,
    'logo': new ig.AnimationSheet('branding/logo.png', _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
    'zIndex': 0x2711,
    'size': {
      'x': 0x32,
      'y': 0x32
    },
    'volume': 0.5,
    'mutedFlag': !0x1,
    'name': 'soundtest',
    'init': function (_0x1ef8fd, _0x200be2, _0x7cc613) {
      this.parent(_0x1ef8fd, _0x200be2, _0x7cc613), this.mutedFlag = !!(0x0 === ig.game.sessionData.music || 0x0 === ig.game.sessionData.sound);
    },
    'draw': function () {
      this.parent(), ig.system.context.fillRect(this.pos.x, this.pos.y, 0x32, 0x32);
    },
    'clicked': function () {
      console.log('pressed'), this.mutedFlag ? (console.log('unmute'), ig.soundHandler.bgmPlayer.volume(this.volume), ig.soundHandler.sfxPlayer.volume(this.volume), ig.game.save('music', 0.5), ig.game.save('sound', 0.5), ig.soundHandler.unmuteAll(), this.mutedFlag = !0x1) : (console.log('mute'), ig.soundHandler.muteAll(), ig.soundHandler.bgmPlayer.volume(0x0), ig.soundHandler.sfxPlayer.volume(0x0), ig.game.save('music', 0x0), ig.game.save('sound', 0x0), this.mutedFlag = !0x0);
    },
    'clicking': function () {},
    'released': function () {}
  });
}), ig.baked = !0x0, ig.module('game.entities.test').requires('game.entities.buttons.button', 'plugins.clickable-div-layer').defines(function () {
  EntityTest = EntityButton.extend({
    'zIndex': 0x1869f,
    'pos': new Vector2(0x0, 0x0),
    'size': new Vector2(0x14, 0x14),
    'color': new ColorRGB(0x7d, 0xff, 0x7d, 0x1),
    'clickableLayer': null,
    'div_layer_name': 'test-entity',
    'name': 'test-entity',
    'newWindow': !0x0,
    'init': function (_0xed3e4c, _0x1bdbc2, _0x766eea) {
      this.parent(_0xed3e4c, _0x1bdbc2, _0x766eea), ig.global.wm || (this.div_layer_name = _0x766eea.div_layer_name ? _0x766eea.div_layer_name : 'test-entity', this.clickableLayer = new ClickableDivLayer(this));
    },
    'show': function () {
      var _0x2c23cc = ig.domHandler.getElementById('#' + this.div_layer_name);
      _0x2c23cc && ig.domHandler.show(_0x2c23cc);
    },
    'hide': function () {
      var _0x29b6eb = ig.domHandler.getElementById('#' + this.div_layer_name);
      _0x29b6eb && ig.domHandler.hide(_0x29b6eb);
    },
    'update': function () {
      this.parent();
    },
    'draw': function () {
      this.parent();
      var _0x27b515 = ig.system.context;
      _0x27b515.fillStyle = this.color.getHex(), _0x27b515.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.test-control').requires('impact.entity', 'game.entities.test').defines(function () {
  EntityTestControl = ig.Entity.extend({
    'zIndex': 0x1869f,
    'size': new Vector2(0x14, 0x14),
    'testEnt': null,
    'tween': null,
    'init': function (_0x28cc5f, _0x54c0b9, _0x2dd6d8) {
      this.parent(_0x28cc5f, _0x54c0b9, _0x2dd6d8), ig.global.wm || (ig.game.testControl = this, this.initTestCase3(), ig.game.spawnEntity(ig.FullscreenButton, 0x5, 0x5, {
        'enterImage': new ig.Image('media/graphics/misc/enter-fullscreen-transparent.png'),
        'exitImage': new ig.Image('media/graphics/misc/exit-fullscreen-transparent.png')
      }));
    },
    'ready': function () {
      this.parent(), console.log('ready');
    },
    'initTestCase1': function () {
      this.initTestCase1Initialized = !0x0, this.testEnt = ig.game.spawnEntity(EntityTest, 0xc8, 0xc8), this.tweenSlow = new ig.TweenDef(this.testEnt.pos).to({
        'x': 0x64,
        'y': 0x64
      }, 0x7d0).easing(ig.Tween.Easing.Bounce.EaseOut).interpolation(ig.Tween.Interpolation.Bezier).repeat(0x2).yoyo(!0x0), this.tweenFast = new ig.TweenDef(this.testEnt.pos).to({
        'x': 0x12c,
        'y': 0x12c
      }, 0x1f4).repeat(0x4).yoyo(!0x0), this.tweenSlow.chain(this.tweenFast), this.tweenFast.chain(this.tweenSlow), this.tweenFast.start();
    },
    'initTestCase2': function () {
      this.initTestCase2Initialized = !0x0, this.coordsTween = new ig.TweenDef({
        'x': 0x0,
        'y': 0x0
      }).to({
        'x': 0x64,
        'y': 0x64
      }, 0x3e8).easing(ig.Tween.Easing.Bounce.EaseInOut).onStart(function (_0x1b4595) {
        console.log('Start', _0x1b4595), this.coordsTween.pause();
      }.bind(this)).onUpdate(function () {
        0.5 <= this.coordsTween._currentElapsed && this.coordsTween.stop();
      }.bind(this)).onStop(function (_0x10922a) {
        console.log('Stop', _0x10922a);
      }.bind(this)).onComplete(function (_0x2ded8e) {
        console.log('Complete', _0x2ded8e);
      }.bind(this)).onPause(function (_0x700164) {
        console.log('Pause', _0x700164), this.coordsTween.resume();
      }.bind(this)).onResume(function (_0x2b7981) {
        console.log('Resume', _0x2b7981);
      }.bind(this)).start();
    },
    'initTestCase3': function () {
      this.initTestCase3Initialized = !0x0, this.spawnTweenEntity(), this.spawnTweenControlButtons();
    },
    'initTestCase4': function () {
      this.initTestCase4Initialized = !0x0, this.testEntityA = ig.game.spawnEntity(EntityTest, 0x1c2, 0xc8, {
        'control': this,
        'size': new Vector2(0x14, 0x28)
      }), this.testEntityB = ig.game.spawnEntity(EntityTest, 0x1db, 0xc8, {
        'control': this,
        'size': new Vector2(0x28, 0x14)
      }), this.testEntityB.color.r = 0xff, this.testEntityB.color.g = 0x0, this.testEntityB.color.b = 0x0;
    },
    'spawnTweenEntity': function () {
      this.tweenEntity = ig.game.spawnEntity(EntityTest, 0x37f, 0x31, {
        'control': this,
        'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
      }), this.tweenControl = new ig.TweenDef(this.tweenEntity.pos).to({
        'y': 0x14a
      }, 0x1388);
    },
    'spawnTweenControlButtons': function () {
      this.tweenControlButtons = {
        'start': ig.game.spawnEntity(EntityButton, 0x2ee, 0x32, {
          'control': this,
          'size': new Vector2(0x80, 0x30),
          'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
        }),
        'stop': ig.game.spawnEntity(EntityButton, 0x2ee, 0x64, {
          'control': this,
          'size': new Vector2(0x80, 0x30),
          'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
        }),
        'pause': ig.game.spawnEntity(EntityButton, 0x2ee, 0x96, {
          'control': this,
          'size': new Vector2(0x80, 0x30),
          'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
        }),
        'resume': ig.game.spawnEntity(EntityButton, 0x2ee, 0xc8, {
          'control': this,
          'size': new Vector2(0x80, 0x30),
          'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
        }),
        'end': ig.game.spawnEntity(EntityButton, 0x2ee, 0xfa, {
          'control': this,
          'size': new Vector2(0x80, 0x30),
          'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
        }),
        'systemPause': ig.game.spawnEntity(EntityButton, 0x2ee, 0x12c, {
          'control': this,
          'size': new Vector2(0x80, 0x30),
          'color': new ColorRGB(0xff, 0x7d, 0x7d, 0x1)
        })
      }, this.setupTweenControlButtons();
    },
    'setupTweenControlButtons': function () {
      var _0x5cc888 = null;
      for (buttonKey in this.tweenControlButtons) _0x5cc888 = this.tweenControlButtons[buttonKey], _0x5cc888.name = buttonKey, _0x5cc888.backgroundColor = _0x5cc888.color.getStyle(), _0x5cc888.foregroundColor = _0x5cc888.color.getInvertedColor().getStyle(), _0x5cc888.draw = function () {
        ig.system.context.fillStyle = this.backgroundColor, ig.system.context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y), ig.system.context.fillStyle = this.foregroundColor, ig.system.context.font = "18px Arial", ig.system.context.textBaseline = 'middle', ig.system.context.textAlign = 'center', ig.system.context.fillText(this.name, this.pos.x + 0.5 * this.size.x, this.pos.y + 0.5 * this.size.y);
      };
      this.tweenControlButtons.start.clicked = function () {
        ig.soundHandler.sfxPlayer.play('logosplash1'), console.log('start'), this.control.tweenControl.start();
      }, this.tweenControlButtons.start.clicking = function () {}, this.tweenControlButtons.start.released = function () {}, this.tweenControlButtons.stop.clicked = function () {
        ig.soundHandler.sfxPlayer.play('logosplash1'), console.log('stop'), this.control.tweenControl.stop();
      }, this.tweenControlButtons.stop.clicking = function () {}, this.tweenControlButtons.stop.released = function () {}, this.tweenControlButtons.pause.clicked = function () {
        ig.soundHandler.sfxPlayer.play('logosplash1'), console.log('pause'), this.control.tweenControl.pause();
      }, this.tweenControlButtons.pause.clicking = function () {}, this.tweenControlButtons.pause.released = function () {}, this.tweenControlButtons.resume.clicked = function () {
        ig.soundHandler.sfxPlayer.play('logosplash1'), console.log('resume'), this.control.tweenControl.resume();
      }, this.tweenControlButtons.resume.clicking = function () {}, this.tweenControlButtons.resume.released = function () {}, this.tweenControlButtons.end.clicked = function () {
        ig.soundHandler.sfxPlayer.play('logosplash1'), console.log('end'), this.control.tweenControl.end();
      }, this.tweenControlButtons.end.clicking = function () {}, this.tweenControlButtons.end.released = function () {}, this.tweenControlButtons.systemPause.clicked = function () {
        ig.soundHandler.sfxPlayer.play('logosplash1'), ig.game.pauseGame();
      }, this.tweenControlButtons.systemPause.clicking = function () {}, this.tweenControlButtons.systemPause.released = function () {};
    },
    'update': function () {
      this.parent();
    },
    'draw': function () {
      this.parent(), null !== this.drawTestCase3Info && 'function' === typeof this.drawTestCase3Info && this.drawTestCase3Info();
    },
    'drawTestCase3Info': function () {
      ig.system.context.save(), ig.system.context.fillStyle = this.foregroundColor, ig.system.context.font = "18px Arial", ig.system.context.textBaseline = 'middle', ig.system.context.textAlign = 'center', ig.system.context.fillText("Tween control test", 0x320, 0x19), ig.system.context.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.levels.test-desktop').requires('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.buttons.button-sound', 'game.entities.test-control').defines(function () {
  LevelTestDesktop = {
    'entities': [{
      'type': 'EntityBrandingLogoPlaceholder',
      'x': 0x128,
      'y': 0x18c,
      'settings': {
        'div_layer_name': 'layer_mainmenu',
        'centralize': 'true'
      }
    }, {
      'type': 'EntityButtonMoreGames',
      'x': 0x244,
      'y': 0x11c,
      'settings': {
        'div_layer_name': 'layer_moregames_mainmenu'
      }
    }, {
      'type': 'EntityPointer',
      'x': 0x260,
      'y': 0x78
    }, {
      'type': 'EntityButtonSound',
      'x': 0x14c,
      'y': 0x11c
    }, {
      'type': 'EntityTestControl',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': [{
      'name': 'background',
      'width': 0x10,
      'height': 0x9,
      'linkWithCollision': !0x1,
      'visible': 0x1,
      'tilesetName': 'media/graphics/backgrounds/desktop/background.jpg',
      'repeat': !0x1,
      'preRender': !0x0,
      'distance': '1',
      'tilesize': 0x3c,
      'foreground': !0x1,
      'data': [[0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10], [0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20], [0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30], [0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f, 0x40], [0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50], [0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60], [0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70], [0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80], [0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90]]
    }]
  }, LevelTestDesktopResources = [new ig.Image('media/graphics/backgrounds/desktop/background.jpg')];
}), ig.baked = !0x0, ig.module('game.levels.test-mobile').requires('impact.image', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.buttons.button-sound', 'game.entities.test-control').defines(function () {
  LevelTestMobile = {
    'entities': [{
      'type': 'EntityBrandingLogoPlaceholder',
      'x': 0xd8,
      'y': 0x224,
      'settings': {
        'div_layer_name': 'layer_mainmenu',
        'centralize': 'true'
      }
    }, {
      'type': 'EntityButtonMoreGames',
      'x': 0xee,
      'y': 0x271,
      'settings': {
        'div_layer_name': 'layer_moregames_mainmenu'
      }
    }, {
      'type': 'EntityPointer',
      'x': 0x1bc,
      'y': 0xc0
    }, {
      'type': 'EntityButtonSound',
      'x': 0xf5,
      'y': 0x1ea
    }, {
      'type': 'EntityTestControl',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': [{
      'name': 'background',
      'width': 0x9,
      'height': 0x10,
      'linkWithCollision': !0x1,
      'visible': 0x1,
      'tilesetName': 'media/graphics/backgrounds/mobile/background.jpg',
      'repeat': !0x1,
      'preRender': !0x0,
      'distance': '1',
      'tilesize': 0x3c,
      'foreground': !0x1,
      'data': [[0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9], [0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12], [0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b], [0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24], [0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d], [0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36], [0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f], [0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48], [0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51], [0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a], [0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63], [0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c], [0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75], [0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e], [0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87], [0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90]]
    }]
  }, LevelTestMobileResources = [new ig.Image('media/graphics/backgrounds/mobile/background.jpg')];
}), ig.baked = !0x0, ig.module('game.entities.ingame.punch').requires('impact.entity').defines(function () {
  EntityPunch = ig.Entity.extend({
    'sprite': new ig.Image('media/graphics/sprites/effect_punch.png'),
    'zIndex': 0x2,
    'size': {
      'x': 0x96,
      'y': 0x36
    },
    'checkAgainst': ig.Entity.TYPE.A,
    'isTweening': !0x1,
    'scaling': !0x0,
    'bodyScale': 0.8,
    'moveSpeed': 0.2,
    'direction': 0x0,
    'alpha': 0x1,
    'moveSpace': 0x1,
    'hit': 0x1,
    'init': function (_0x124498, _0xdd74b7, _0x1840dc) {
      this.parent(_0x124498, _0xdd74b7, _0x1840dc), this.pos.x -= this.size.x / 0x2, this.pos.y -= this.size.y / 0x2, this.animSheet = new ig.AnimationSheet(this.sprite.path, this.size.x, this.size.y), this.addAnim('idle', 0.2, [0x0]), this.setScale(this.bodyScale * ig.game.ingame.bodyScale, this.bodyScale * ig.game.ingame.bodyScale), _0x124498 = 0x0, _0xdd74b7 = this.moveSpeed - 0.002 * ig.game.ingame.level, 0.02 >= _0xdd74b7 && (_0xdd74b7 = 0.02);
      switch (this.direction) {
        case 0x1:
          this.currentAnim.flip.x = !0x0, this.endPoint = this.pos.x - ig.game.ingame.tileSize * this.moveSpace - 0xa, this.startMoveX(_0xdd74b7);
          break;
        case 0x2:
          this.currentAnim.flip.x = !0x1, this.endPoint = this.pos.x + ig.game.ingame.tileSize * this.moveSpace - this.size.x / 1.5, this.startMoveX(_0xdd74b7);
          break;
        case 0x3:
          _0x124498 = -0x5a, this.endPoint = this.pos.y - ig.game.ingame.tileSize * this.moveSpace + 0x46, this.startMoveY(_0xdd74b7);
          break;
        case 0x4:
          _0x124498 = 0x5a, this.endPoint = this.pos.y + ig.game.ingame.tileSize * this.moveSpace - 0x8c, this.startMoveY(_0xdd74b7);
      }
      this.currentAnim.angle = _0x124498.toRad();
    },
    'update': function () {
      this.parent(), !0x0 == this.scaling && this.setScale(this.bodyScale * ig.game.ingame.bodyScale, this.bodyScale * ig.game.ingame.bodyScale), this.currentAnim.alpha = this.alpha;
    },
    'check': function (_0x2edfd5) {
      this.parent(), 'enemy' == _0x2edfd5.name && !_0x2edfd5.knockout && 0x1 <= this.hit && (_0x2edfd5.isHit(this.direction), this.hit--);
    },
    'startMoveX': function (_0x394721) {
      this.isTweening || (this.isTweening = !0x0, this.tween({
        'pos': {
          'x': this.endPoint
        },
        'bodyScale': this.bodyScale + 0.2
      }, _0x394721, {
        'easing': ig.Tween.Easing.Circular.EaseOut,
        'onComplete': function () {
          this.isTweening = !0x1, this.fadeOut();
        }.bind(this)
      }).start());
    },
    'startMoveY': function (_0x30e722) {
      this.isTweening || (this.isTweening = !0x0, this.tween({
        'pos': {
          'y': this.endPoint
        },
        'bodyScale': this.bodyScale + 0.2
      }, _0x30e722, {
        'easing': ig.Tween.Easing.Circular.EaseOut,
        'onComplete': function () {
          this.isTweening = !0x1, this.fadeOut();
        }.bind(this)
      }).start());
    },
    'fadeOut': function () {
      this.isTweening || (this.isTweening = !0x0, this.tween({
        'alpha': 0x0
      }, 0.15, {
        'easing': ig.Tween.Easing.Circular.EaseOut,
        'onComplete': function () {
          this.isTweening = !0x1, this.kill();
        }.bind(this)
      }).start());
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.punch-ulti').requires('impact.entity').defines(function () {
  EntityPunchUlti = ig.Entity.extend({
    'sprite': new ig.Image('media/graphics/sprites/rage-projectile.png'),
    'size': {
      'x': 0x8c,
      'y': 0xee
    },
    'checkAgainst': ig.Entity.TYPE.A,
    'isTweening': !0x1,
    'scaling': !0x0,
    'bodyScale': 0.8,
    'direction': 0x0,
    'alpha': 0x1,
    'moveSpace': 0x4,
    'moveSpeed': 0.5,
    'hit': 0x4,
    'init': function (_0x27b0ee, _0x10ab11, _0x770d51) {
      this.parent(_0x27b0ee, _0x10ab11, _0x770d51), this.pos.x -= this.size.x / 0x2, this.pos.y -= this.size.y / 0x2, this.animSheet = new ig.AnimationSheet(this.sprite.path, this.size.x, this.size.y), this.addAnim('idle', 0.1, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]), this.setScale(this.bodyScale * ig.game.ingame.bodyScale, this.bodyScale * ig.game.ingame.bodyScale), _0x27b0ee = 0x0, _0x10ab11 = this.moveSpeed - 0.002 * ig.game.ingame.level, 0.02 >= _0x10ab11 && (_0x10ab11 = 0.02);
      switch (this.direction) {
        case 0x1:
          _0x27b0ee = 0x5a, this.endPoint = this.pos.x - ig.game.ingame.tileSize * this.moveSpace - 0xa, this.startMoveX(_0x10ab11);
          break;
        case 0x2:
          _0x27b0ee = -0x5a, this.endPoint = this.pos.x + ig.game.ingame.tileSize * this.moveSpace - this.size.x / 1.5, this.startMoveX(_0x10ab11);
          break;
        case 0x3:
          _0x27b0ee = -0xb4, this.endPoint = this.pos.y - ig.game.ingame.tileSize * this.moveSpace + 0x46, this.startMoveY(_0x10ab11);
          break;
        case 0x4:
          this.endPoint = this.pos.y + ig.game.ingame.tileSize * this.moveSpace, this.startMoveY(_0x10ab11);
      }
      this.currentAnim.angle = _0x27b0ee.toRad();
    },
    'update': function () {
      this.parent(), !0x0 == this.scaling && this.setScale(this.bodyScale * ig.game.ingame.bodyScale, this.bodyScale * ig.game.ingame.bodyScale), this.currentAnim.alpha = this.alpha;
    },
    'check': function (_0x2885fb) {
      this.parent(), 'enemy' == _0x2885fb.name && !_0x2885fb.knockout && _0x2885fb.isHit(this.direction);
    },
    'startMoveX': function (_0x37ed24) {
      this.isTweening || (this.isTweening = !0x0, this.tween({
        'pos': {
          'x': this.endPoint
        },
        'bodyScale': this.bodyScale + 0.2
      }, _0x37ed24, {
        'easing': ig.Tween.Easing.Circular.EaseInOut,
        'onComplete': function () {
          this.isTweening = !0x1, this.fadeOut();
        }.bind(this)
      }).start());
    },
    'startMoveY': function (_0x4c3fa1) {
      this.isTweening || (this.isTweening = !0x0, this.tween({
        'pos': {
          'y': this.endPoint
        },
        'bodyScale': this.bodyScale + 0.2
      }, _0x4c3fa1, {
        'easing': ig.Tween.Easing.Circular.EaseInOut,
        'onComplete': function () {
          this.isTweening = !0x1, this.fadeOut();
        }.bind(this)
      }).start());
    },
    'fadeOut': function () {
      this.isTweening || (this.isTweening = !0x0, this.tween({
        'alpha': 0x0
      }, 0.15, {
        'easing': ig.Tween.Easing.Circular.EaseOut,
        'onComplete': function () {
          this.isTweening = !0x1, this.kill();
        }.bind(this)
      }).start());
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.menu.flex-image').requires('impact.entity').defines(function () {
  EntityFlexImage = ig.Entity.extend({
    'zIndex': 0xf,
    'sprite': null,
    'bodyScale': 0x1,
    'xScale': !0x0,
    'yScale': !0x0,
    'opacity': 0x1,
    'rotation': 0x0,
    'size': {
      'x': 0x87,
      'y': 0x74
    },
    'init': function (_0x38a0c8, _0x5b997d, _0x5568ff) {
      this.parent(_0x38a0c8, _0x5b997d, _0x5568ff), this.animSheet = new ig.AnimationSheet(this.sprite.path, this.size.x, this.size.y), this.addAnim('idle', 0.2, [0x0]);
    },
    'update': function () {
      this.parent(), this.currentAnim.alpha = this.opacity, this.setScale(this.xScale ? this.bodyScale : 0x1, this.yScale ? this.bodyScale : 0x1), this.currentAnim.angle = this.rotation.toRad();
    },
    'show': function (_0xb7f21e, _0x1dbad0) {
      null == _0xb7f21e && (_0xb7f21e = 0.5), this.pos.x = this.__oldX, this.tween({
        'opacity': 0x1
      }, _0xb7f21e, {
        'onComplete': function () {
          _0x1dbad0 ? _0x1dbad0() : '';
        }.bind(this),
        'easing': ig.Tween.Easing.Cubic.EaseInOut,
        'delay': 0x0
      }).start();
    },
    'hide': function (_0x4281fa, _0x4c3e10) {
      this.tween({
        'opacity': 0x0
      }, _0x4281fa, {
        'onComplete': function () {
          this.__oldX = this.pos.x, this.pos.x = -0x270f, _0x4c3e10 ? _0x4c3e10() : '';
        }.bind(this),
        'easing': ig.Tween.Easing.Cubic.EaseInOut,
        'delay': 0x0
      }).start();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.rage-aura').requires('impact.entity').defines(function () {
  EntityRageAura = ig.Entity.extend({
    'sprite': new ig.Image('media/graphics/sprites/rage-aura.png'),
    'zIndex': 0x2,
    'rotation': 0x0,
    'size': {
      'x': 0x1a4,
      'y': 0x20d
    },
    'init': function (_0x3c8539, _0x25f2ac, _0x3071b0) {
      this.parent(_0x3c8539, _0x25f2ac, _0x3071b0), this.animSheet = new ig.AnimationSheet(this.sprite.path, this.size.x, this.size.y), this.addAnim('idle', 0.08, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]), this.repos();
    },
    'update': function () {
      this.parent(), this.currentAnim.angle = this.rotation.toRad();
    },
    'repos': function () {
      this.setScale(ig.game.ingame.bodyScale, ig.game.ingame.bodyScale);
    },
    'draw': function () {
      ig.game.ingame.isRage && this.parent();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.player').requires('impact.entity', 'game.entities.ingame.punch', 'game.entities.ingame.punch-ulti', 'game.entities.menu.flex-image', 'game.entities.ingame.rage-aura', 'game.entities.kvn-delay-execution').defines(function () {
  EntityPlayer = ig.Entity.extend({
    'zIndex': 0x3,
    'sprite': new ig.Image('media/graphics/sprites/trump.png'),
    'rageSprite': new ig.Image('media/graphics/sprites/trump-rage.png'),
    'shadowSprite': new ig.Image('media/graphics/sprites/shadow.png'),
    'size': {
      'x': 0x28,
      'y': 0x28
    },
    'offset': {
      'x': 0x64,
      'y': 0x78
    },
    'type': ig.Entity.TYPE.A,
    'checkAgainst': ig.Entity.TYPE.A,
    'isTweening': !0x1,
    'scaling': !0x0,
    'bodyScale': 0x1,
    'spriteFrame': 0.08,
    'knockout': !0x1,
    'rotation': 0x0,
    'attackInterval': 0.3,
    'name': 'player',
    'init': function (_0x368c03, _0x325fc6, _0x183ea7) {
      this.parent(_0x368c03, _0x325fc6, _0x183ea7), ig.game.player = this, this.animSheet = new ig.AnimationSheet(this.sprite.path, 0xf0, 0xf1), this.addAnim('idle', 0.2, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]), this.addAnim('front', this.spriteFrame, [0x6, 0x7, 0x8, 0x9, 0xa, 0xb], !0x0), this.addAnim('up', this.spriteFrame, [0xc, 0xd, 0xe, 0xf, 0x10, 0x11], !0x0), this.addAnim('side', this.spriteFrame, [0x12, 0x13, 0x14, 0x15, 0x16, 0x17], !0x0), this.animSheet = new ig.AnimationSheet(this.rageSprite.path, 0x1a4, 0x1a5), this.addAnim('idleRage', 0.2, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]), this.addAnim('frontRage', this.spriteFrame, [0x6, 0x7, 0x8, 0x9, 0xa, 0xb], !0x0), this.addAnim('upRage', this.spriteFrame, [0xc, 0xd, 0xe, 0xf, 0x10, 0x11], !0x0), this.addAnim('sideRage', this.spriteFrame, [0x12, 0x13, 0x14, 0x15, 0x16, 0x17], !0x0), this.currentAnim = this.anims.idle, this.setScale(this.bodyScale, this.bodyScale), this.attackTimer = new ig.Timer(), this.resetTimer = new ig.Timer(), this.clickTime = new ig.Timer(), this.clickTime.pause(), ig.game.spawnEntity(EntityKvnDelayExecution, 0x0, 0x0, {
        'controller': this
      }).setTimeOut(0.1, function () {
        this.shadow = ig.game.spawnEntity(EntityFlexImage, this.pos.x - 0x1e * ig.game.ingame.bodyScale, this.pos.y + 2.5 * this.size.y, {
          'sprite': this.shadowSprite,
          'bodyScale': 0x1,
          'size': {
            'x': 0x78,
            'y': 0x2a
          },
          'zIndex': this.zIndex - 0x1
        }), this.rageAura = ig.game.spawnEntity(EntityRageAura, ig.system.width / 0x2 + ig.game.screen.x, ig.system.height / 0x2 + ig.game.screen.y + 0x64), this.repos(), ig.game.sortEntitiesDeferred();
      }.bind(this));
    },
    'update': function () {
      this.parent(), this.currentAnim.angle = this.rotation.toRad(), this.rageAura && (this.rageAura.pos.x = this.pos.x - this.rageAura.size.x / 0x2 + 0xf, this.rageAura.pos.y = this.pos.y - this.rageAura.size.y / 1.5 - 0x14, this.rageAura.rotation = this.rotation);
      if (!ig.game.ingame.isGamePause && !ig.game.ingame.isGameOver) {
        this.handlePlayerInput(), this.detectGesture(), this.resetTimer.delta() > 0x6 * this.spriteFrame && this.resetPlayer();
        if (ig.game.ingame.isRage) {
          this.offset.x = 0xbe * ig.game.ingame.bodyScale, this.offset.y = 0x113 * ig.game.ingame.bodyScale;
          if (this.currentAnim == this.anims.side) {
            var _0x3c7a77 = !0x0 == this.currentAnim.flip.x ? !0x0 : !0x1;
            this.currentAnim = this.anims.sideRage.rewind(), this.currentAnim.flip.x = _0x3c7a77;
          }
          this.currentAnim == this.anims.front && (this.currentAnim = this.anims.frontRage.rewind()), this.currentAnim == this.anims.up && (this.currentAnim = this.anims.upRage.rewind()), this.currentAnim == this.anims.idle && (this.currentAnim = this.anims.idleRage);
        } else this.offset.x = 0x64 * ig.game.ingame.bodyScale, this.offset.y = 0x78 * ig.game.ingame.bodyScale, this.currentAnim == this.anims.idleRage && (this.currentAnim = this.anims.idle), this.currentAnim == this.anims.sideRage && (_0x3c7a77 = !0x0 == this.currentAnim.flip.x ? !0x0 : !0x1, this.currentAnim = this.anims.side.rewind(), this.currentAnim.flip.x = _0x3c7a77), this.currentAnim == this.anims.frontRage && (this.currentAnim = this.anims.front.rewind()), this.currentAnim == this.anims.upRage && (this.currentAnim = this.anims.up.rewind());
        this.shadow && (ig.game.ingame.isRage ? (this.shadow.pos.x = this.pos.x - 0x55 * ig.game.ingame.bodyScale, this.shadow.bodyScale = 1.75 * ig.game.ingame.bodyScale) : (this.shadow.pos.x = this.pos.x - 0x28 * ig.game.ingame.bodyScale, this.shadow.bodyScale = 0x1 * ig.game.ingame.bodyScale), this.shadow.pos.y = this.pos.y + 2.5 * this.size.y);
      }
    },
    'check': function () {
      this.parent();
    },
    'checkAttackInterval': function () {
      var _0x7e2abc = this.attackInterval - 0.01 * ig.game.ingame.level;
      return 0.05 >= _0x7e2abc && (_0x7e2abc = 0.05), this.attackTimer.delta() > _0x7e2abc ? !0x0 : !0x1;
    },
    'handlePlayerInput': function () {
      this.checkAttackInterval() && (ig.input.pressed('left') ? this.attackLeft() : ig.input.pressed('right') ? this.attackRight() : ig.input.pressed('up') ? this.attackUp() : ig.input.pressed('down') && this.attackDown());
    },
    'attackLeft': function () {
      var _0xaf1117 = this.getPunchType();
      this.attackTimer.reset(), this.resetTimer.reset(), this.currentAnim = ig.game.ingame.isRage ? this.anims.sideRage.rewind() : this.anims.side.rewind(), this.currentAnim.flip.x = !0x0, ig.game.spawnEntity(_0xaf1117, this.pos.x + ig.game.ingame.tileSize / 0x2 - this.offset.x / 0x2, this.pos.y + ig.game.ingame.tileSize / 0x2 - 0x5a * ig.game.ingame.bodyScale, {
        'direction': 0x1
      });
    },
    'attackRight': function () {
      var _0x4b941a = this.getPunchType();
      this.attackTimer.reset(), this.resetTimer.reset(), this.currentAnim = ig.game.ingame.isRage ? this.anims.sideRage.rewind() : this.anims.side.rewind(), this.currentAnim.flip.x = !0x1, ig.game.spawnEntity(_0x4b941a, this.pos.x + ig.game.ingame.tileSize / 0x2 - this.offset.x / 0x2, this.pos.y + ig.game.ingame.tileSize / 0x2 - 0x5a * ig.game.ingame.bodyScale, {
        'direction': 0x2
      });
    },
    'attackUp': function () {
      var _0x21ecf2 = this.getPunchType();
      this.attackTimer.reset(), this.resetTimer.reset(), this.currentAnim = ig.game.ingame.isRage ? this.anims.upRage.rewind() : this.anims.up.rewind(), this.currentAnim.flip.x = !0x1, ig.game.spawnEntity(_0x21ecf2, this.pos.x + ig.game.ingame.tileSize / 0x2 - 0x46 * ig.game.ingame.bodyScale, this.pos.y + ig.game.ingame.tileSize / 0x2 - this.offset.y + 0x14 * ig.game.ingame.bodyScale, {
        'direction': 0x3
      });
    },
    'attackDown': function () {
      var _0x36ae38 = this.getPunchType();
      this.attackTimer.reset(), this.resetTimer.reset(), this.currentAnim = ig.game.ingame.isRage ? this.anims.frontRage.rewind() : this.anims.front.rewind(), this.currentAnim.flip.x = !0x1, ig.game.spawnEntity(_0x36ae38, this.pos.x + ig.game.ingame.tileSize / 0x2 - 0x46 * ig.game.ingame.bodyScale, this.pos.y + ig.game.ingame.tileSize / 0x2 - this.offset.y + 0x8c * ig.game.ingame.bodyScale, {
        'direction': 0x4
      });
    },
    'getPunchType': function () {
      if (ig.game.ingame.isRage) return ig.soundHandler.sfxPlayer.play('punchRage'), EntityPunchUlti;
      return ig.soundHandler.sfxPlayer.play('punchNormal'), EntityPunch;
    },
    'detectGesture': function () {
      if (this.checkAttackInterval()) {
        if (ig.input.pressed('click')) this.gestureStartX = ig.game.io.getClickPos().x, this.gestureStartY = ig.game.io.getClickPos().y, this.gestureStartX += ig.game.screen.x, this.gestureStartY += ig.game.screen.y, delete this.__triggerSwipeUpDown, delete this.__triggerSwipeLeftRight, delete this.___lastTrigger, this.clickTime.unpause();else {
          if (ig.input.state('click')) {
            this.isClicking = !0x0, this.gestureEndX = ig.game.io.getClickPos().x, this.gestureEndY = ig.game.io.getClickPos().y, this.gestureEndX += ig.game.screen.x, this.gestureEndY += ig.game.screen.y;
            var _0xd702e = this.gestureStartX - this.gestureEndX,
              _0x148466 = Math.abs(_0xd702e),
              _0x4d6702 = this.gestureStartY - this.gestureEndY,
              _0x234d0d = Math.abs(_0x4d6702),
              _0x568eed = 0xa,
              _0x4b3f93 = 0xa;
            ig.ua.mobile ? (_0x568eed = ig.system.width / 0xa, _0x4b3f93 = ig.system.height / 0x8) : (_0x568eed = ig.system.width / 0x64, _0x4b3f93 = ig.system.height / 0x5);
            if (!this.__triggerSwipeLeftRight && _0x148466 >= _0x568eed && _0x148466 > _0x234d0d && (!this.___lastTrigger || "SWIPE LEFT/RIGHT" === this.___lastTrigger)) this.executeGesture(0x1 < _0xd702e ? "SWIPE LEFT" : "SWIPE RIGHT"), this.__triggerSwipeLeftRight = !0x0, this.gestureStartX = ig.game.io.getClickPos().x, this.gestureStartY = ig.game.io.getClickPos().y, this.gestureStartX += ig.game.screen.x, this.gestureStartY += ig.game.screen.y, this.___lastTrigger = "SWIPE LEFT/RIGHT";else {
              if (!this.__triggerSwipeUpDown && _0x234d0d >= _0x4b3f93 && _0x234d0d > _0x148466 && (!this.___lastTrigger || "SWIPE UP/DOWN" === this.___lastTrigger)) this.executeGesture(0x1 < _0x4d6702 ? "SWIPE UP" : "SWIPE DOWN"), this.__triggerSwipeUpDown = !0x0, this.gestureStartX = ig.game.io.getClickPos().x, this.gestureStartY = ig.game.io.getClickPos().y, this.gestureStartX += ig.game.screen.x, this.gestureStartY += ig.game.screen.y, this.___lastTrigger = "SWIPE DOWN/UP";
            }
          } else this.isClicking && !ig.input.state('click') && (this.isClicking = null, this.gestureEndX = ig.game.io.getClickPos().x, this.gestureEndY = ig.game.io.getClickPos().y, this.gestureEndX += ig.game.screen.x, this.gestureEndY += ig.game.screen.y, _0xd702e = ig.game.io.getClickPos().x, ig.game.io.getClickPos(), _0xd702e.x += ig.game.screen.x, _0xd702e.y += ig.game.screen.y, !this.overDrop && !this.overButtons && 0.3 > this.clickTime.delta() && !this.___lastTrigger && this.executeGesture('TAP'), this.clickTime.reset(), this.clickTime.pause(), this.clearGesture());
        }
      }
    },
    'clearGesture': function () {
      this.gestureEndY = this.gestureStartY = this.gestureStartX = this.gestureEndX = null, this.gesturesReady = !0x1;
    },
    'executeGesture': function (_0x2557a5) {
      switch (_0x2557a5) {
        case "SWIPE LEFT":
          this.attackLeft();
          break;
        case "SWIPE RIGHT":
          this.attackRight();
          break;
        case "SWIPE DOWN":
          this.attackDown();
          break;
        case "SWIPE UP":
          this.attackUp();
      }
    },
    'resetPlayer': function () {
      this.currentAnim = this.anims.idle, this.resetTimer.reset(), this.currentAnim.flip.x = !0x1;
    },
    'knockOut': function (_0x4ae3f8) {
      this.shadow && this.shadow.kill(), ig.soundHandler.sfxPlayer.play('playerKO');
      var _0x987fb = 0x0,
        _0x29fb88 = 0x0;
      switch (_0x4ae3f8) {
        case 0x1:
          _0x987fb = -ig.system.width / 0x2, _0x29fb88 = this.getRandomInteger(-0xc8, 0x640), ig.game.ingame.shakingX(-ig.game.ingame.shakePower);
          break;
        case 0x2:
          _0x987fb = 0x2 * ig.system.width - ig.system.width / 0x2, _0x29fb88 = this.getRandomInteger(-0xc8, 0x640), ig.game.ingame.shakingX(ig.game.ingame.shakePower);
          break;
        case 0x3:
          _0x987fb = this.getRandomInteger(-0xc8, 0x640), _0x29fb88 = -ig.system.height / 0x2, ig.game.ingame.shakingY(-ig.game.ingame.shakePower);
          break;
        case 0x4:
          _0x987fb = this.getRandomInteger(-0xc8, 0x640), _0x29fb88 = 0x2 * ig.system.height - ig.system.height / 0x2, ig.game.ingame.shakingY(ig.game.ingame.shakePower);
      }
      (this.isTweening = !0x1) || (this.isTweening = !0x0, this.tween({
        'pos': {
          'x': _0x987fb,
          'y': _0x29fb88
        },
        'rotation': 0x438
      }, 0x3, {
        'easing': ig.Tween.Easing.Quartic.EaseOut,
        'onComplete': function () {
          this.isTweening = !0x1, ig.game.ingame.isRage = !0x1, ig.game.ingame.rageMeter = 0x0, this.kill();
        }.bind(this)
      }).start());
    },
    'shakingX': function (_0x2719d6, _0x36b8d8) {
      !this.knockout && !this.isTweening && (this.isTweening = !0x0, this.tween({
        'pos': {
          'x': this.pos.x + _0x2719d6
        }
      }, _0x36b8d8, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          this.tween({
            'pos': {
              'x': this.pos.x - _0x2719d6
            }
          }, _0x36b8d8, {
            'easing': ig.Tween.Easing.Linear.EaseNone,
            'onComplete': function () {
              this.isTweening = !0x1;
            }.bind(this)
          }).start();
        }.bind(this)
      }).start());
    },
    'shakingY': function (_0x1da0f9, _0x3c8b1a) {
      !this.knockout && !this.isTweening && (this.isTweening = !0x0, this.tween({
        'pos': {
          'y': this.pos.y + _0x1da0f9
        }
      }, _0x3c8b1a, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          this.tween({
            'pos': {
              'y': this.pos.y - _0x1da0f9
            }
          }, _0x3c8b1a, {
            'easing': ig.Tween.Easing.Linear.EaseNone,
            'onComplete': function () {
              this.isTweening = !0x1;
            }.bind(this)
          }).start();
        }.bind(this)
      }).start());
    },
    'kill': function () {
      this.parent(), this.rageAura && this.rageAura.kill(), this.shadow && this.shadow.kill();
    },
    'getRandomInteger': function (_0xc30d43, _0xe6cb71) {
      return Math.floor(Math.random() * (_0xe6cb71 - _0xc30d43)) + _0xc30d43;
    },
    'repos': function () {
      this.pos.x = ig.system.width / 0x2 - this.size.x / 0x2 + 0x5 * ig.game.ingame.bodyScale + ig.game.screen.x, this.pos.y = ig.system.height / 0x2 - this.size.y / 0x2 - 0x19 * ig.game.ingame.bodyScale + ig.game.screen.y, this.setScale(ig.game.ingame.bodyScale, ig.game.ingame.bodyScale), this.shadow && (this.shadow.bodyScale = ig.game.ingame.bodyScale);
    },
    'draw': function () {
      this.parent();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.effect-particle').requires('impact.entity').defines(function () {
  EntityEffectParticle = ig.Entity.extend({
    'sprite': new ig.Image('media/graphics/sprites/effect_particle.png'),
    'zIndex': 0x4,
    'size': {
      'x': 0x42,
      'y': 0x42
    },
    'checkAgainst': ig.Entity.TYPE.A,
    'isTweening': !0x1,
    'moveSpeed': 0.15,
    'scaling': !0x0,
    'bodyScale': 0x1,
    'alpha': 0x1,
    'rotation': 0x0,
    'direction': 0x0,
    'init': function (_0x1a261b, _0x483b15, _0x2e44eb) {
      this.parent(_0x1a261b, _0x483b15, _0x2e44eb), this.pos.x -= this.size.x / 0x2, this.pos.y -= this.size.y / 0x2, this.animSheet = new ig.AnimationSheet(this.sprite.path, this.size.x, this.size.y), this.addAnim('idle', 0.2, [0x0]), this.bodyScale = this.getRandomInteger(0x7, 0xa) / 0xa, _0x483b15 = _0x1a261b = 0x0;
      switch (this.direction) {
        case 0x1:
          _0x1a261b = this.pos.x + this.getRandomInteger(-0x1e, 0x0), _0x483b15 = this.pos.y + this.getRandomInteger(0x0, 0x1f);
          break;
        case 0x2:
          _0x1a261b = this.pos.x + this.getRandomInteger(0x0, 0x1f), _0x483b15 = this.pos.y + this.getRandomInteger(0x0, 0x1f);
          break;
        case 0x3:
          _0x1a261b = this.pos.x + this.getRandomInteger(-0x1e, 0x0), _0x483b15 = this.pos.y + this.getRandomInteger(-0x1e, 0x0);
          break;
        case 0x4:
          _0x1a261b = this.pos.x + this.getRandomInteger(-0x1e, 0x0), _0x483b15 = this.pos.y + this.getRandomInteger(0x0, 0x1f);
      }
      this.startMove(_0x1a261b, _0x483b15);
    },
    'update': function () {
      this.parent(), !0x0 == this.scaling && this.setScale(this.bodyScale * ig.game.ingame.bodyScale, this.bodyScale * ig.game.ingame.bodyScale), this.currentAnim.alpha = this.alpha, this.currentAnim.angle = this.rotation.toRad();
    },
    'getRandomInteger': function (_0x4e3a26, _0x8a8c92) {
      return Math.floor(Math.random() * (_0x8a8c92 - _0x4e3a26)) + _0x4e3a26;
    },
    'startMove': function (_0x490053, _0x14d4ec) {
      this.isTweening || (this.isTweening = !0x0, this.tween({
        'pos': {
          'x': _0x490053,
          'y': _0x14d4ec
        },
        'rotation': 0xb4
      }, this.moveSpeed, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          this.isTweening = !0x1, this.fadeOut();
        }.bind(this)
      }).start());
    },
    'fadeOut': function () {
      var _0x33e7b3 = 0x0,
        _0x5aa444 = 0x0;
      switch (this.direction) {
        case 0x1:
          _0x33e7b3 = this.pos.x + this.getRandomInteger(-0x14, 0x0), _0x5aa444 = this.pos.y + this.getRandomInteger(0x0, 0x15);
          break;
        case 0x2:
          _0x33e7b3 = this.pos.x + this.getRandomInteger(0x0, 0x15), _0x5aa444 = this.pos.y + this.getRandomInteger(0x0, 0x15);
          break;
        case 0x3:
          _0x33e7b3 = this.pos.x + this.getRandomInteger(-0x14, 0x0), _0x5aa444 = this.pos.y + this.getRandomInteger(-0x14, 0x0);
          break;
        case 0x4:
          _0x33e7b3 = this.pos.x + this.getRandomInteger(-0x14, 0x0), _0x5aa444 = this.pos.y + this.getRandomInteger(0x0, 0x15);
      }
      this.isTweening || (this.isTweening = !0x0, this.tween({
        'pos': {
          'x': _0x33e7b3,
          'y': _0x5aa444
        },
        'alpha': 0x0,
        'bodyScale': this.bodyScale / 0x2,
        'rotation': 0x168
      }, this.moveSpeed, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          this.isTweening = !0x1, this.kill();
        }.bind(this)
      }).start());
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.enemy').requires('impact.entity', 'game.entities.ingame.effect-particle', 'game.entities.menu.flex-image').defines(function () {
  EntityEnemy = ig.Entity.extend({
    'zIndex': 0x5,
    'sprite': new ig.Image('media/graphics/sprites/enemy-1.png'),
    'shadowSprite': new ig.Image('media/graphics/sprites/shadow.png'),
    'size': {
      'x': 0xf0,
      'y': 0xf0
    },
    'type': ig.Entity.TYPE.A,
    'checkAgainst': ig.Entity.TYPE.A,
    'isTweening': !0x1,
    'scaling': !0x0,
    'bodyScale': 0x1,
    'rotation': 0x0,
    'knockout': !0x1,
    'dx': 0x0,
    'dy': 0x0,
    'direction': 0x0,
    'offSetX': 0x0,
    'offSetY': 0x0,
    'name': 'enemy',
    'init': function (_0xf15178, _0x4389ff, _0x53b6b8) {
      this.parent(_0xf15178, _0x4389ff, _0x53b6b8), this.animSheet = new ig.AnimationSheet(this.sprite.path, this.size.x, this.size.y + 0x1), this.addAnim('front', 0.2, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]), this.addAnim('back', 0.2, [0x6, 0x7, 0x8, 0x9, 0xa, 0xb]), this.addAnim('side', 0.2, [0xc, 0xd, 0xe, 0xf, 0x10, 0x11]), this.setScale(this.bodyScale * ig.game.ingame.bodyScale, this.bodyScale * ig.game.ingame.bodyScale), this.dy == Math.floor(ig.game.ingame.crossroadHeight / 0x2) ? (this.currentAnim = this.anims.side, this.direction = 0x2, this.dx == ig.game.ingame.crossroadWidth && (this.currentAnim.flip.x = !0x0, this.direction = 0x1)) : -0x1 == this.dy ? (this.currentAnim = this.anims.front, this.direction = 0x4) : this.dy == ig.game.ingame.crossroadHeight && (this.currentAnim = this.anims.back, this.direction = 0x3), this.pos.x = this.dx * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale, this.pos.y = this.dy * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale, this.currentAnim.angle = this.rotation.toRad(), this.shadow = ig.game.spawnEntity(EntityFlexImage, this.pos.x + this.size.x / 0x4, this.pos.y + this.size.y - 0x19, {
        'sprite': this.shadowSprite,
        'bodyScale': 0x1,
        'size': {
          'x': 0x78,
          'y': 0x2a
        },
        'zIndex': this.zIndex - 0x1
      }), this.shadow.bodyScale = this.bodyScale * ig.game.ingame.bodyScale, this.repos();
    },
    'update': function () {
      if (!ig.game.ingame.isGamePause && !ig.game.ingame.isGameOver && (this.parent(), this.currentAnim.angle = this.rotation.toRad(), this.shadow)) {
        var _0x1eb009 = 0x0;
        switch (this.direction) {
          case 0x1:
            _0x1eb009 = -0x14 * ig.game.ingame.bodyScale;
            break;
          case 0x2:
            _0x1eb009 = 0x14 * ig.game.ingame.bodyScale;
        }
        this.shadow.pos.x = this.pos.x + this.size.x / 0x4 + _0x1eb009, this.shadow.pos.y = this.pos.y + this.size.y - 0x19 * ig.game.ingame.bodyScale;
      }
    },
    'check': function (_0x1400e3) {
      this.parent(), 'player' == _0x1400e3.name && !_0x1400e3.knockout && (_0x1400e3.knockout = !0x0, _0x1400e3.knockOut(this.direction), _SETTINGS.RewardedVideo.Enabled ? ig.game.ingame.gameOverRV() : ig.game.ingame.gameOver());
    },
    'startMove': function () {
      var _0x1fad56 = this.dx * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale,
        _0x2de3cb = this.dy * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale,
        _0x3a6c00 = ig.game.ingame.spawnInterval / 0x2 - 0.02 * ig.game.ingame.level;
      0.05 >= _0x3a6c00 && (_0x3a6c00 = 0.05), this.isTweening || (this.isTweening = !0x0, this.tween({
        'pos': {
          'x': _0x1fad56,
          'y': _0x2de3cb
        }
      }, _0x3a6c00, {
        'easing': ig.Tween.Easing.Quartic.EaseOut,
        'onComplete': function () {
          this.isTweening = !0x1;
        }.bind(this)
      }).start());
    },
    'isHit': function (_0x377f82) {
      this.knockout = !0x0, ig.game.ingame.score++, ig.game.ingame.killCount++, ig.game.ingame.isRage || (ig.game.ingame.rageMeter += 0xa, 0x50 <= ig.game.ingame.rageMeter && (ig.soundHandler.sfxPlayer.play('powerUp'), ig.game.ingame.isRage = !0x0));
      for (var _0x122766 = 0x0; 0x4 > _0x122766; _0x122766++) ig.game.spawnEntity(EntityEffectParticle, this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2, {
        'direction': _0x122766 + 0x1
      });
      this.knockOut(_0x377f82), this.shadow && this.shadow.kill();
    },
    'knockOut': function (_0x394753) {
      var _0x152512 = 0x0,
        _0x108840 = 0x0,
        _0x4744af = this.getRandomInteger(0x1, 0x5);
      ig.soundHandler.sfxPlayer.play('knockOut' + _0x4744af);
      switch (_0x394753) {
        case 0x1:
          _0x152512 = -ig.system.width / 0x2, _0x108840 = this.getRandomInteger(-0xc8, 0x640), ig.game.ingame.shakingX(-ig.game.ingame.shakePower * ig.game.ingame.bodyScale);
          break;
        case 0x2:
          _0x152512 = 0x2 * ig.system.width - ig.system.width / 0x2, _0x108840 = this.getRandomInteger(-0xc8, 0x640), ig.game.ingame.shakingX(ig.game.ingame.shakePower * ig.game.ingame.bodyScale);
          break;
        case 0x3:
          _0x152512 = this.getRandomInteger(-0xc8, 0x640), _0x108840 = -ig.system.height / 0x2, ig.game.ingame.shakingY(-ig.game.ingame.shakePower * ig.game.ingame.bodyScale);
          break;
        case 0x4:
          _0x152512 = this.getRandomInteger(-0xc8, 0x640), _0x108840 = 0x2 * ig.system.height - ig.system.height / 0x2, ig.game.ingame.shakingY(ig.game.ingame.shakePower * ig.game.ingame.bodyScale);
      }
      (this.isTweening = !0x1) || (this.isTweening = !0x0, this.tween({
        'pos': {
          'x': _0x152512,
          'y': _0x108840
        },
        'rotation': 0x438
      }, 0x4, {
        'easing': ig.Tween.Easing.Quartic.EaseOut,
        'onComplete': function () {
          this.isTweening = !0x1, this.kill();
        }.bind(this)
      }).start());
    },
    'kill': function () {
      this.parent(), this.shadow.kill();
    },
    'shakingX': function (_0x2e8a53, _0x101213) {
      this.knockout || this.tween({
        'pos': {
          'x': this.pos.x + _0x2e8a53
        }
      }, _0x101213, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          this.tween({
            'pos': {
              'x': this.pos.x - _0x2e8a53
            }
          }, _0x101213, {
            'easing': ig.Tween.Easing.Linear.EaseNone,
            'onComplete': function () {}.bind(this)
          }).start();
        }.bind(this)
      }).start();
    },
    'shakingY': function (_0x444ae4, _0x3144ce) {
      this.knockout || this.tween({
        'pos': {
          'y': this.pos.y + _0x444ae4
        }
      }, _0x3144ce, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          this.tween({
            'pos': {
              'y': this.pos.y - _0x444ae4
            }
          }, _0x3144ce, {
            'easing': ig.Tween.Easing.Linear.EaseNone,
            'onComplete': function () {}.bind(this)
          }).start();
        }.bind(this)
      }).start();
    },
    'getRandomInteger': function (_0x52f6f5, _0x258bd1) {
      return Math.floor(Math.random() * (_0x258bd1 - _0x52f6f5)) + _0x52f6f5;
    },
    'draw': function () {
      this.parent();
    },
    'repos': function () {
      this.setScale(ig.game.ingame.bodyScale, ig.game.ingame.bodyScale), this.shadow && (this.shadow.bodyScale = ig.game.ingame.bodyScale);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.enemy1').requires('game.entities.ingame.enemy').defines(function () {
  EntityEnemy1 = EntityEnemy.extend({
    'sprite': new ig.Image('media/graphics/sprites/enemy-1.png')
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.enemy2').requires('game.entities.ingame.enemy').defines(function () {
  EntityEnemy2 = EntityEnemy.extend({
    'sprite': new ig.Image('media/graphics/sprites/enemy-2.png')
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.enemy-tutotrial').requires('game.entities.ingame.enemy', 'game.entities.menu.flex-image').defines(function () {
  EntityEnemyTutotrial = EntityEnemy.extend({
    'sprite': new ig.Image('media/graphics/sprites/enemy-1.png'),
    'arrowKey': new ig.Image('media/graphics/sprites/btn-arrow-key.png'),
    'pointerSprite': new ig.Image('media/graphics/sprites/pointer.png'),
    'tutorialIndex': 0x0,
    'init': function (_0x157d36, _0x2d16c9, _0x594169) {
      this.arrow = ig.game.spawnEntity(EntityFlexImage, this.pos.x, this.pos.y, {
        'sprite': this.arrowKey,
        'bodyScale': 0x1,
        'size': {
          'x': 0xb4,
          'y': 0x78
        },
        'zIndex': this.zIndex + 0x1
      }), this.arrow.pos.x = ig.system.width / 0x2 - this.arrow.size.x / 0x2 + 0x5 * ig.game.ingame.bodyScale + ig.game.screen.x, this.arrow.pos.y = ig.system.height / 0x2 + 0x12c + ig.game.screen.y, this.parent(_0x157d36, _0x2d16c9, _0x594169);
      switch (this.direction) {
        case 0x1:
          this.pos.x = 0x4 * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale, this.pos.y = 0x3 * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale, this.arrow.rotation = 0x5a, this.text2 = _STRINGS.Game.Right, this.text1 = ig.ua.mobile ? _STRINGS.Game.Right : _STRINGS.Game.Right + " / D";
          break;
        case 0x2:
          this.pos.x = 0x2 * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale, this.pos.y = 0x3 * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale, this.arrow.rotation = -0x5a, this.text2 = _STRINGS.Game.Left, this.text1 = ig.ua.mobile ? _STRINGS.Game.Left : _STRINGS.Game.Left + " / A";
          break;
        case 0x3:
          this.pos.x = 0x3 * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale, this.pos.y = 0x4 * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale, this.arrow.rotation = 0xb4, this.text2 = _STRINGS.Game.Down, this.text1 = ig.ua.mobile ? _STRINGS.Game.Down : _STRINGS.Game.Down + " / S";
          break;
        case 0x4:
          this.pos.x = 0x3 * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale, this.pos.y = 0x2 * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale, this.text2 = _STRINGS.Game.Up, this.text1 = ig.ua.mobile ? _STRINGS.Game.Up : _STRINGS.Game.Up + " / W";
      }
    },
    'isHit': function (_0x2ac13b) {
      this.knockout = !0x0;
      for (var _0x19babf = 0x0; 0x4 > _0x19babf; _0x19babf++) ig.game.spawnEntity(EntityEffectParticle, this.pos.x + this.size.x / 0x2, this.pos.y + this.size.y / 0x2, {
        'direction': _0x19babf + 0x1
      });
      this.knockOut(_0x2ac13b), this.shadow && this.shadow.kill(), ig.game.ingame.startTutorial(this.tutorialIndex - 0x1), this.arrow.kill();
    },
    'draw': function () {
      this.parent();
      if (!this.knockout) {
        var _0x529cca = ig.system.context;
        _0x529cca.save();
        var _0x1d06e5 = 0x28 * ig.game.ingame.bodyScale;
        _0x529cca.textAlign = 'center', _0x529cca.font = _0x1d06e5 + "px comicy";
        var _0x1d06e5 = ig.ua.mobile ? _STRINGS.Game.Tutorial3 + " [ " + this.text1 + " ] " + _STRINGS.Game.Tutorial2 + " " + this.text2 : _STRINGS.Game.Tutorial1 + " [ " + this.text1 + " ] " + _STRINGS.Game.Tutorial2 + " " + this.text2,
          _0x24b4ad = 0x7 * ig.game.ingame.bodyScale;
        _0x529cca.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x529cca, _0x1d06e5, ig.system.width / 0x2, ig.system.height / 0x2 + 0x1f4 * ig.game.ingame.bodyScale, '#000', _0x24b4ad), _0x529cca.restore();
      }
    },
    'repos': function () {
      this.parent(), this.arrow.bodyScale = ig.game.ingame.bodyScale, this.arrow.pos.y = ig.system.height / 0x2 + 0x12c * ig.game.ingame.bodyScale + ig.game.screen.y;
      switch (this.direction) {
        case 0x1:
          this.pos.x = 0x4 * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale, this.pos.y = 0x3 * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale;
          break;
        case 0x2:
          this.pos.x = 0x2 * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale, this.pos.y = 0x3 * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale;
          break;
        case 0x3:
          this.pos.x = 0x3 * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale, this.pos.y = 0x4 * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale;
          break;
        case 0x4:
          this.pos.x = 0x3 * ig.game.ingame.tileSize + ig.system.width / 0x2 - ig.game.ingame.crossroadWidth * ig.game.ingame.tileSize / 0x2 + ig.game.screen.x - this.offSetX * ig.game.ingame.bodyScale, this.pos.y = 0x2 * ig.game.ingame.tileSize + ig.system.height / 0x2 - ig.game.ingame.crossroadHeight * ig.game.ingame.tileSize / 0x2 + ig.game.screen.y - this.offSetY * ig.game.ingame.bodyScale;
      }
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.btn-menu').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnMenu = EntityButton.extend({
    'btnMenuImage': new ig.Image('media/graphics/sprites/btn-small.png'),
    'overlayAlpha': 0x0,
    'size': {
      'x': 0x107,
      'y': 0x5d
    },
    'init': function (_0x3a065a, _0x5b2a59, _0x3d4703) {
      _0x3d4703 = _0x3d4703 || {}, _0x3d4703.btnImage = this.btnMenuImage, this.parent(_0x3a065a, _0x5b2a59, _0x3d4703);
    },
    'update': function () {
      this.parent(), this.colorBG && (this.colorBG.overlayAlpha = this.overlayAlpha);
    },
    'onClicked': function () {
      this.colorBG = ig.game.spawnEntity(EntityColorBackground, 0x0, 0x0, {
        'zIndex': 0x64,
        'color': 'rgba(254,200,32,'
      }), this.tween({
        'overlayAlpha': 0x1
      }, 0.2, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          ig.game.gotoMenu();
        }.bind(this)
      }).start();
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x5a2347 = ig.system.context;
      _0x5a2347.save();
      var _0x26fd89 = 0x1e * this.bodyScale;
      _0x5a2347.textAlign = 'center', _0x5a2347.font = _0x26fd89 + "px comicy", _0x26fd89 = 0x5 * this.bodyScale, _0x5a2347.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x5a2347, _STRINGS.Game.Home, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 1.8 - ig.game.screen.y, '#000', _0x26fd89), _0x5a2347.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.btn-restart').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnRestart = EntityButton.extend({
    'btnRestartImage': new ig.Image('media/graphics/sprites/btn-medium.png'),
    'overlayAlpha': 0x0,
    'size': {
      'x': 0x18b,
      'y': 0x8b
    },
    'init': function (_0x47165b, _0x1a9bd5, _0x3feaac) {
      _0x3feaac = _0x3feaac || {}, _0x3feaac.btnImage = this.btnRestartImage, this.parent(_0x47165b, _0x1a9bd5, _0x3feaac);
    },
    'update': function () {
      this.parent(), this.colorBG && (this.colorBG.overlayAlpha = this.overlayAlpha);
    },
    'onClicked': function () {
      this.colorBG = ig.game.spawnEntity(EntityColorBackground, 0x0, 0x0, {
        'zIndex': 0x64,
        'color': 'rgba(254,200,32,'
      }), this.tween({
        'overlayAlpha': 0x1
      }, 0.2, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          ig.game.ingame.restartGame();
        }.bind(this)
      }).start();
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x14ec7a = ig.system.context;
      _0x14ec7a.save();
      var _0x283d56 = 0x28 * this.bodyScale;
      _0x14ec7a.textAlign = 'center', _0x14ec7a.font = _0x283d56 + "px comicy", _0x283d56 = 0x7 * this.bodyScale, _0x14ec7a.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x14ec7a, _STRINGS.Game.Restart, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 1.8 - ig.game.screen.y, '#000', _0x283d56), _0x14ec7a.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.menu.color-bg').requires('impact.entity').defines(function () {
  EntityColorBackground = ig.Entity.extend({
    'sprite': new ig.Image('media/graphics/backgrounds/bg-scrolling-image.png'),
    'overlayAlpha': 0x0,
    'color': 'rgba(0,0,0,',
    'usePos': !0x1,
    'init': function (_0x13cc06, _0x5e7310, _0x56b1d7) {
      this.parent(_0x13cc06, _0x5e7310, _0x56b1d7);
    },
    'draw': function () {
      this.parent();
      var _0x2c92df = ig.system.context;
      _0x2c92df.fillStyle = this.color + this.overlayAlpha + ')', this.usePos ? _0x2c92df.fillRect(this.pos.x, this.pos.y - 0x4b0, ig.system.width, ig.system.height + 0x4b0) : _0x2c92df.fillRect(0x0, 0x0, ig.system.width, ig.system.height), 0x1 != this.overlayAlpha && (ig.system.context.globalAlpha = this.overlayAlpha), this.sprite.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y + 0x12c * ig.game.scollValue), this.sprite.draw(-0x4b0 - ig.game.screen.x, this.pos.y - ig.game.screen.y + 0x12c * ig.game.scollValue), this.sprite.draw(0x4b0 - ig.game.screen.x, this.pos.y - ig.game.screen.y + 0x12c * ig.game.scollValue), this.sprite.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y + 0x4b0 + 0x12c * ig.game.scollValue), this.sprite.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y - 0x4b0 + 0x12c * ig.game.scollValue), this.sprite.draw(-0x4b0 - ig.game.screen.x, this.pos.y - ig.game.screen.y - 0x4b0 + 0x12c * ig.game.scollValue), this.sprite.draw(0x4b0 - ig.game.screen.x, this.pos.y - ig.game.screen.y - 0x4b0 + 0x12c * ig.game.scollValue), 0x1 != this.overlayAlpha && (ig.system.context.globalAlpha = 0x1);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.panel-gameover').requires('impact.entity', 'game.entities.buttons.btn-menu', 'game.entities.buttons.btn-restart', 'game.entities.menu.color-bg', 'game.entities.kvn-delay-execution').defines(function () {
  EntityPanelGameover = ig.Entity.extend({
    'zIndex': 0x32,
    'sprite': new ig.Image('media/graphics/backgrounds/bg-scrolling-image.png'),
    'size': {
      'x': 0x578,
      'y': 0x578
    },
    'moveSpace': 0x0,
    'originalPos': 0x0,
    'isTweening': !0x1,
    'overlayAlpha': 0x0,
    'counting': !0x1,
    'init': function (_0x46d416, _0x5c4b09, _0x31f8f1) {
      this.parent(_0x46d416, _0x5c4b09, _0x31f8f1), this.originalPos = this.pos.y, this.pos.y += 0x2 * ig.system.realHeight, this.btnRestart = ig.game.spawnEntity(EntityBtnRestart, ig.system.width, ig.system.height, {
        'zIndex': this.zIndex + 0x1
      }), this.btnMenu = ig.game.spawnEntity(EntityBtnMenu, ig.system.width, ig.system.height, {
        'zIndex': this.zIndex + 0x1
      }), this.colorBG = ig.game.spawnEntity(EntityColorBackground, 0x0, this.pos.y, {
        'zIndex': this.zIndex - 0x1,
        'color': 'rgba(254,200,32,',
        'usePos': !0x0
      }), this.setAllButton(!0x1), this.scoreTimer = new ig.Timer(), this.tempScore = this.highScore = this.score = 0x0, this.highScore = parseInt(ig.game.ingame.getHighscore() || 0x0);
    },
    'update': function () {
      this.parent(), this.isTweening && this.resetButtonPos(), this.colorBG.overlayAlpha = this.overlayAlpha, this.countScoreSound();
    },
    'countScoreSound': function () {
      0.1 < this.scoreTimer.delta() && Math.floor(this.score) > this.tempScore && (ig.soundHandler.sfxPlayer.play('scoreCount'), this.scoreTimer.reset()), this.tempScore = Math.floor(this.score);
    },
    'draw': function () {
      this.parent();
      var _0x2dd228 = ig.system.context;
      _0x2dd228.save();
      var _0x1a1804 = 0x78 * ig.game.ingame.bodyScale;
      _0x2dd228.textAlign = 'center', _0x2dd228.font = _0x1a1804 + "px comicy", _0x1a1804 = _STRINGS.Game.GameOver, _0x2dd228.fillStyle = '#D88D10', _0x2dd228.fillText(_0x1a1804, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 - 0x15e * ig.game.ingame.bodyScale - ig.game.screen.y + 0xf * ig.game.ingame.bodyScale);
      var _0x565dd7 = 0xa * ig.game.ingame.bodyScale;
      _0x2dd228.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x2dd228, _0x1a1804, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 - 0x15e * ig.game.ingame.bodyScale - ig.game.screen.y, '#000', _0x565dd7), _0x1a1804 = 0x8c * ig.game.ingame.bodyScale, _0x2dd228.font = _0x1a1804 + "px comicy", _0x2dd228.fillStyle = '#D2FFAB', _0x565dd7 = 0xb * ig.game.ingame.bodyScale, _0x1a1804 = Math.floor(this.score), ig.KvnUtility.drawStrokedText(_0x2dd228, _0x1a1804.toLocaleString(), this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 - 0x32 * ig.game.ingame.bodyScale - ig.game.screen.y, '#000', _0x565dd7), _0x2dd228.fillStyle = '#61FF62', _0x1a1804 = this.highScore, ig.KvnUtility.drawStrokedText(_0x2dd228, _0x1a1804, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 + 0xc8 * ig.game.ingame.bodyScale - ig.game.screen.y, '#000', _0x565dd7), _0x1a1804 = 0x3c * ig.game.ingame.bodyScale, _0x2dd228.font = _0x1a1804 + "px comicy", _0x2dd228.fillStyle = '#D2FFAB', _0x565dd7 = 0x8 * ig.game.ingame.bodyScale, _0x1a1804 = _STRINGS.Game.Score, ig.KvnUtility.drawStrokedText(_0x2dd228, _0x1a1804, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 - 0xc8 * ig.game.ingame.bodyScale - ig.game.screen.y, '#000', _0x565dd7), _0x2dd228.fillStyle = '#61FF62', _0x1a1804 = _STRINGS.Game.Best, ig.KvnUtility.drawStrokedText(_0x2dd228, _0x1a1804, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 + 0x32 * ig.game.ingame.bodyScale - ig.game.screen.y, '#000', _0x565dd7), _0x2dd228.restore();
    },
    'easeOut': function () {
      this.isTweening || (this.isTweening = !0x0, this.overlayAlpha = 0x1, this.setAllButton(!0x1), this.tween({
        'pos': {
          'y': this.moveSpace
        },
        'overlayAlpha': 0x0
      }, 0.5, {
        'easing': ig.Tween.Easing.Circular.EaseIn,
        'onComplete': function () {
          this.pos.y = this.moveSpace, this.isTweening = !0x1, this.resetButtonPos();
        }.bind(this)
      }).start());
    },
    'easeIn': function () {
      this.isTweening || (this.isTweening = !0x0, ig.game.spawnEntity(EntityKvnDelayExecution, 0x0, 0x0, {
        'controller': this
      }).setTimeOut(0.8, function () {
        this.countScore();
      }.bind(this)), this.overlayAlpha = 0x1, this.moveSpace = this.pos.y, this.colorBG.pos.y = this.pos.y + 0x4b0, this.tween({
        'pos': {
          'y': this.originalPos
        },
        'colorBG': {
          'pos': {
            'y': this.originalPos
          }
        }
      }, 0x1, {
        'easing': ig.Tween.Easing.Circular.EaseInOut,
        'onComplete': function () {
          this.isTweening = !0x1, this.resetButtonPos();
        }.bind(this)
      }).start());
    },
    'countScore': function () {
      this.counting || (this.counting = !0x0, this.tween({
        'score': ig.game.ingame.score
      }, 0x1, {
        'easing': ig.Tween.Easing.Quadratic.EaseOut,
        'onComplete': function () {
          this.counting = !0x1, this.setAllButton(!0x0), this.score == ig.game.ingame.getHighscore() && (ig.soundHandler.sfxPlayer.play('highScore'), this.highScore = this.score);
        }.bind(this)
      }).start());
    },
    'resetButtonPos': function () {
      var _0xe6e596 = this.pos.x + this.size.x / 0x2,
        _0x242265 = this.pos.y + this.size.y / 0x2;
      this.btnMenu.pos.x = _0xe6e596 - this.btnMenu.size.x / 0x2, this.btnMenu.pos.y = _0x242265 + 0x1c2 * ig.game.ingame.bodyScale, this.btnRestart.pos.x = _0xe6e596 - this.btnRestart.size.x / 0x2, this.btnRestart.pos.y = _0x242265 + 0x118 * ig.game.ingame.bodyScale;
    },
    'setAllButton': function (_0x473dfc) {
      _0x473dfc = !0x0 == _0x473dfc ? !0x1 : !0x0, this.btnRestart.disable = _0x473dfc, this.btnMenu.disable = _0x473dfc;
    },
    'repos': function () {
      this.btnMenu.bodyScale = ig.game.ingame.bodyScale, this.btnRestart.bodyScale = ig.game.ingame.bodyScale, this.resetButtonPos();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.btn-cancel').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnCancel = EntityButton.extend({
    'btnMenuImage': new ig.Image('media/graphics/sprites/btn-small.png'),
    'overlayAlpha': 0x0,
    'size': {
      'x': 0x107,
      'y': 0x5d
    },
    'init': function (_0x38e712, _0xf39f2, _0x438a7c) {
      _0x438a7c = _0x438a7c || {}, _0x438a7c.btnImage = this.btnMenuImage, this.parent(_0x38e712, _0xf39f2, _0x438a7c);
    },
    'update': function () {
      this.parent();
    },
    'onClicked': function () {
      ig.game.ingame.gameOver();
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x4f4a75 = ig.system.context;
      _0x4f4a75.save();
      var _0x315c37 = 0x1e * this.bodyScale;
      _0x4f4a75.textAlign = 'center', _0x4f4a75.font = _0x315c37 + "px comicy", _0x315c37 = 0x5 * this.bodyScale, _0x4f4a75.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x4f4a75, ig.game.ingame.rvFail ? _STRINGS.Game.Ok : _STRINGS.Game.Cancel, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 1.8 - ig.game.screen.y, '#000', _0x315c37), _0x4f4a75.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.btn-revive').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnRevive = EntityButton.extend({
    'zIndex': 0x28,
    'btnPlayImage': new ig.Image('media/graphics/sprites/btn-medium.png'),
    'overlayAlpha': 0x0,
    'size': {
      'x': 0x18b,
      'y': 0x8b
    },
    'init': function (_0x55dece, _0xed8b7, _0xcec472) {
      _0xcec472 = _0xcec472 || {}, _0xcec472.btnImage = this.btnPlayImage, this.parent(_0x55dece, _0xed8b7, _0xcec472);
    },
    'update': function () {
      this.parent();
    },
    'onClicked': function () {
      ig.game.menu.isSetting || ig.game.ingame.showRewardedVideo(function () {
        ig.game.ingame.revive();
      }.bind(this));
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0xcbd415 = ig.system.context;
      _0xcbd415.save();
      var _0x2d257b = 0x28 * this.bodyScale;
      _0xcbd415.textAlign = 'center', _0xcbd415.font = _0x2d257b + "px comicy", _0x2d257b = 0x7 * this.bodyScale, _0xcbd415.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0xcbd415, _STRINGS.Game.Ok, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 1.8 - ig.game.screen.y, '#000', _0x2d257b), this.showRV && (_0xcbd415.fillStyle = 'rgba(0,0,0,0.8)', _0xcbd415.fillRect(0x0, 0x0, ig.system.width, ig.system.height), _0x2d257b = 0x3c * ig.game.ingame.bodyScale, _0xcbd415.textAlign = 'center', _0xcbd415.font = _0x2d257b + "px comicy", _0xcbd415.fillStyle = '#D88D10', _0xcbd415.fillText(_STRINGS.Game.RV, ig.system.width / 0x2, ig.system.height / 0x2), _0x2d257b = 0xa * ig.game.ingame.bodyScale, _0xcbd415.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0xcbd415, _STRINGS.Game.RV, ig.system.width / 0x2, ig.system.height / 0x2, '#000', _0x2d257b)), _0xcbd415.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.gameover-rv').requires('impact.entity', 'game.entities.buttons.btn-cancel', 'game.entities.buttons.btn-revive').defines(function () {
  EntityPanelGameoverRV = ig.Entity.extend({
    'zIndex': 0x32,
    'size': {
      'x': 0x4b0,
      'y': 0x320
    },
    'moveSpace': 0x0,
    'originalPos': 0x0,
    'isTweening': !0x1,
    'overlayAlpha': 0x0,
    'init': function (_0x5a311c, _0x2cfafc, _0x4f6546) {
      this.parent(_0x5a311c, _0x2cfafc, _0x4f6546), this.originalPos = this.pos.y, this.pos.y += 0x2 * ig.system.realHeight, this.btnCancel = ig.game.spawnEntity(EntityBtnCancel, ig.system.width, ig.system.height, {
        'zIndex': this.zIndex + 0x1
      }), this.btnRevive = ig.game.spawnEntity(EntityBtnRevive, ig.system.width, ig.system.height, {
        'zIndex': this.zIndex + 0x1
      }), this.setAllButton(!0x1);
    },
    'update': function () {
      this.parent(), this.isTweening && this.resetButtonPos();
    },
    'draw': function () {
      this.parent();
      var _0x47ba77 = ig.system.context;
      _0x47ba77.save(), _0x47ba77.fillStyle = '#000', _0x47ba77.beginPath(), _0x47ba77.roundRect(this.pos.x - ig.game.screen.x - 0xa, this.pos.y - ig.game.screen.y - 0xa, this.size.x + 0x14, this.size.y + 0x14, [0x28]), _0x47ba77.fill(), _0x47ba77.fillStyle = 'rgba(254,200,32,1)', _0x47ba77.beginPath(), _0x47ba77.roundRect(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y, this.size.x, this.size.y, [0x28]), _0x47ba77.fill(), _0x47ba77.textAlign = 'center', _0x47ba77.font = "60px comicy", _0x47ba77.fillStyle = '#D88D10';
      var _0x27dcfc = 0xa * ig.game.ingame.bodyScale;
      if (ig.game.ingame.rvFail) {
        var _0x36d639 = _STRINGS.Game.RVFail2,
          _0x4fd9cd = _STRINGS.Game.RVFail1;
        _0x47ba77.fillText(_0x4fd9cd, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 - 0xfa * ig.game.ingame.bodyScale - ig.game.screen.y + 0xf * ig.game.ingame.bodyScale), _0x47ba77.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x47ba77, _0x4fd9cd, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 - 0xfa * ig.game.ingame.bodyScale - ig.game.screen.y, '#000', _0x27dcfc);
      } else _0x36d639 = _STRINGS.Game.GameOverRV;
      _0x47ba77.fillStyle = '#D88D10', _0x47ba77.fillText(_0x36d639, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 - 0x96 * ig.game.ingame.bodyScale - ig.game.screen.y + 0xf * ig.game.ingame.bodyScale), _0x47ba77.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x47ba77, _0x36d639, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x2 - 0x96 * ig.game.ingame.bodyScale - ig.game.screen.y, '#000', _0x27dcfc), _0x47ba77.restore();
    },
    'easeOut': function () {
      this.isTweening || (this.isTweening = !0x0, this.setAllButton(!0x1), this.tween({
        'pos': {
          'y': this.moveSpace
        }
      }, 0.5, {
        'easing': ig.Tween.Easing.Circular.EaseIn,
        'onComplete': function () {
          this.pos.y = this.moveSpace, this.isTweening = !0x1, this.resetButtonPos();
        }.bind(this)
      }).start());
    },
    'easeIn': function () {
      this.isTweening || (this.isTweening = !0x0, this.moveSpace = this.pos.y, this.tween({
        'pos': {
          'y': this.originalPos
        }
      }, 0.5, {
        'easing': ig.Tween.Easing.Circular.EaseOut,
        'onComplete': function () {
          this.isTweening = ig.game.easing = !0x1, this.resetButtonPos(), this.setAllButton(!0x0);
        }.bind(this)
      }).start());
    },
    'resetButtonPos': function () {
      var _0x4592af = this.pos.x + this.size.x / 0x2,
        _0x17d847 = this.pos.y + this.size.y / 0x2;
      ig.game.ingame.rvFail ? (this.btnRevive.pos.x = 0x2 * ig.system.width, this.btnRevive.pos.y = 0x2 * ig.system.height, this.btnCancel.pos.x = _0x4592af - this.btnCancel.size.x / 0x2, this.btnCancel.pos.y = _0x17d847 + 0x32 * ig.game.ingame.bodyScale) : (this.btnRevive.pos.x = _0x4592af - this.btnRevive.size.x / 0x2, this.btnRevive.pos.y = _0x17d847 - 0x32 * ig.game.ingame.bodyScale, this.btnCancel.pos.x = _0x4592af - this.btnCancel.size.x / 0x2, this.btnCancel.pos.y = _0x17d847 + 0x96 * ig.game.ingame.bodyScale);
    },
    'setAllButton': function (_0x15f9ab) {
      _0x15f9ab = !0x0 == _0x15f9ab ? !0x1 : !0x0, this.btnCancel.disable = _0x15f9ab, this.btnRevive.disable = _0x15f9ab;
    },
    'toggleRV': function (_0x32bca9) {
      this.btnRevive.showRV = _0x32bca9;
    },
    'repos': function () {
      this.btnCancel.bodyScale = ig.game.ingame.bodyScale, this.btnRevive.bodyScale = ig.game.ingame.bodyScale, this.resetButtonPos();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.ingame-ui').requires('impact.entity', 'plugins.kvn-utility').defines(function () {
  EntityGameUI = ig.Entity.extend({
    'zIndex': 0x2d,
    'rageBar': new ig.Image('media/graphics/sprites/rage_bg.png'),
    'rageMeter': new ig.Image('media/graphics/sprites/rage_meter.png'),
    'init': function (_0x105bea, _0x10f1f1, _0x269d28) {
      this.parent(_0x105bea, _0x10f1f1, _0x269d28), ig.game.ui = this, this.repos();
    },
    'repos': function () {
      this.scoreX = ig.system.width - 0x19;
    },
    'draw': function () {
      this.parent();
      var _0x1fc09c = ig.system.context;
      this.rageBar.draw(0x19, 0x19);
      var _0x244008 = (ig.game.ingame.rageMeter + 0xa) / 0x64 * this.rageMeter.width,
        _0x1f9888 = this.rageMeter.height;
      _0x1fc09c.drawImage(this.rageMeter.data, 0x0, 0x0, _0x244008, _0x1f9888, 0x19, 0x19, _0x244008, _0x1f9888), _0x1fc09c.textAlign = 'right', _0x1fc09c.font = "110px comicy", _0x1fc09c.lineWidth = 0xf, _0x1fc09c.fillStyle = '#FEC820', _0x1fc09c.strokeStyle = '#000', _0x244008 = ig.game.ingame.score.toLocaleString(), _0x1fc09c.strokeText(_0x244008, this.scoreX, 0x78), _0x1fc09c.fillText(_0x244008, this.scoreX, 0x78);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.btn-skip').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnSkip = EntityButton.extend({
    'btnMenuImage': new ig.Image('media/graphics/sprites/btn-small.png'),
    'overlayAlpha': 0x0,
    'zIndex': 0x32,
    'size': {
      'x': 0x107,
      'y': 0x5d
    },
    'init': function (_0x25a24f, _0x391b86, _0x1847ad) {
      _0x1847ad = _0x1847ad || {}, _0x1847ad.btnImage = this.btnMenuImage, this.parent(_0x25a24f, _0x391b86, _0x1847ad), this.repos();
    },
    'update': function () {
      this.parent(), this.colorBG && (this.colorBG.overlayAlpha = this.overlayAlpha);
    },
    'onClicked': function () {
      this.colorBG = ig.game.spawnEntity(EntityColorBackground, 0x0, 0x0, {
        'zIndex': 0x64,
        'color': 'rgba(254,200,32,'
      }), this.tween({
        'overlayAlpha': 0x1
      }, 0.2, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          ig.game.save('tutorial', !0x1), ig.game.ingame.restartGame();
        }.bind(this)
      }).start();
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x2b68b3 = ig.system.context;
      _0x2b68b3.save();
      var _0x2478f8 = 0x1e * this.bodyScale;
      _0x2b68b3.textAlign = 'center', _0x2b68b3.font = _0x2478f8 + "px comicy", _0x2478f8 = 0x5 * this.bodyScale, _0x2b68b3.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x2b68b3, _STRINGS.Game.Skip, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 1.8 - ig.game.screen.y, '#000', _0x2478f8), _0x2b68b3.restore();
    },
    'repos': function () {
      this.pos.x = ig.system.width / 0x2 - this.size.x / 0x2 + ig.game.screen.x, this.pos.y = ig.system.height / 0x2 - 0x1c2 * ig.game.ingame.bodyScale + ig.game.screen.y;
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ingame.ingame').requires('impact.entity', 'game.entities.ingame.player', 'game.entities.ingame.enemy1', 'game.entities.ingame.enemy2', 'game.entities.ingame.enemy-tutotrial', 'game.entities.menu.flex-image', 'game.entities.ingame.panel-gameover', 'game.entities.ingame.gameover-rv', 'game.entities.ingame.ingame-ui', 'game.entities.buttons.btn-skip', 'game.entities.kvn-delay-execution').defines(function () {
  EntityIngame = ig.Entity.extend({
    'zIndex': -0xa,
    'sprite': new ig.Image('media/graphics/backgrounds/bg-scrolling-image.png'),
    'arenaSprite': new ig.Image('media/graphics/backgrounds/bg-arena.png'),
    'bodyScale': 0x1,
    'scaling': !0x0,
    'shakeX': 0x0,
    'shakeY': 0x0,
    'shakePower': 0x5,
    'overlayAlpha': 0x1,
    'size': {
      'x': 0xaf0,
      'y': 0xaf0
    },
    'rageMeter': 0x0,
    'rageDecreaseRate': 0x3,
    'isRage': !0x1,
    'level': 0x1,
    'isGameOver': !0x1,
    'isGamePause': !0x1,
    'score': 0x0,
    'hightScore': 0x0,
    'tutorial': !0x0,
    'tileSize': 0xc8,
    'crossroadWidth': 0x7,
    'crossroadHeight': 0x7,
    'enemies': [],
    'killCount': 0x0,
    'maxEnemy': 0x0,
    'spawnIndex': 0x0,
    'spawnInterval': 0.8,
    'moveInterval': 0.8,
    'lastPos': 0x0,
    'rvFail': !0x1,
    'init': function (_0x5a30dd, _0x371dd9, _0x236a34) {
      this.parent(_0x5a30dd, _0x371dd9, _0x236a34), ig.global.wm || (ig.game.ingame = this, this.tutorial = ig.game.sessionData.tutorial, this.animSheet = new ig.AnimationSheet(this.sprite.path, this.size.x, this.size.y), this.addAnim('idle', 0.2, [0x0]), ig.input.bind(ig.KEY.LEFT_ARROW, 'left'), ig.input.bind(ig.KEY.A, 'left'), ig.input.bind(ig.KEY.RIGHT_ARROW, 'right'), ig.input.bind(ig.KEY.D, 'right'), ig.input.bind(ig.KEY.UP_ARROW, 'up'), ig.input.bind(ig.KEY.W, 'up'), ig.input.bind(ig.KEY.DOWN_ARROW, 'down'), ig.input.bind(ig.KEY.S, 'down'), ig.input.bind(ig.KEY.MOUSE1, 'click'), this.colorBG = ig.game.spawnEntity(EntityColorBackground, 0x0, 0x0, {
        'zIndex': 0x64,
        'overlayAlpha': 0x1,
        'color': 'rgba(254,200,32,',
        'usePos': !0x0
      }), this.tween({
        'colorBG': {
          'pos': {
            'y': ig.system.height + 0x4b0
          }
        }
      }, 0x1, {
        'easing': ig.Tween.Easing.Circular.EaseInOut,
        'delay': 0.1,
        'onComplete': function () {
          this.colorBG.kill();
        }.bind(this)
      }).start(), ig.game.spawnEntity(EntityPlayer, ig.system.width / 0x2 - 0x3c + ig.game.screen.x, ig.system.height / 0x2 - 0x3c + ig.game.screen.y), this.arena = ig.game.spawnEntity(EntityFlexImage, 0x0, 0x0, {
        'sprite': this.arenaSprite,
        'bodyScale': 0x1,
        'size': {
          'x': 0xaf0,
          'y': 0xaf0
        },
        'zIndex': this.zIndex + 0x1
      }), ig.game.spawnEntity(EntityPointerSelector, 0x0, 0x0), ig.game.spawnEntity(EntityGameUI, 0x0, 0x0), this.panelGameover = ig.game.spawnEntity(EntityPanelGameover, ig.system.realWidth / 0x2 + ig.game.screen.x - 0x2bc, ig.system.realHeight / 0x2 + ig.game.screen.y - 0x2bc), this.panelGameoverRV = ig.game.spawnEntity(EntityPanelGameoverRV, ig.system.realWidth / 0x2 + ig.game.screen.x - 0x258, ig.system.realHeight / 0x2 + ig.game.screen.y - 0x190), this.timerSpawn = new ig.Timer(), this.timerMove = new ig.Timer(), this.spawnPatternX = [this.crossroadWidth, Math.floor(this.crossroadWidth / 0x2), -0x1, Math.floor(this.crossroadWidth / 0x2)], this.spawnPatternY = [Math.floor(this.crossroadHeight / 0x2), -0x1, Math.floor(this.crossroadHeight / 0x2), this.crossroadHeight], this.offsetPatternX = [0x0, 0xf, 0x28, 0xf], this.offsetPatternY = [0x3c, 0x50, 0x3c, 0x50], this.startTileSize = this.tileSize, this.repos(), ig.game.spawnEntity(EntityKvnDelayExecution, 0x0, 0x0, {
        'controller': this
      }).setTimeOut(0.1, function () {
        this.tutorial ? (this.startTutorial(0x3), this.btnSkip = ig.game.spawnEntity(EntityBtnSkip, ig.system.width - this.size.x - 0xa + ig.game.screen.x, ig.system.height - this.size.y - 0xa + ig.game.screen.y)) : (this.moveEnemies(), this.spawnEnemy(this.level), ig.soundHandler.sfxPlayer.play('boxingBell'));
      }.bind(this)));
    },
    'update': function () {
      this.parent();
      if (!ig.global.wm) {
        this.colorBG.overlayAlpha = this.overlayAlpha;
        var _0x495da9 = this.moveInterval - 0.02 * ig.game.ingame.level;
        0.1 >= _0x495da9 && (_0x495da9 = 0.1), !this.isGamePause && !this.isGameOver && !this.tutorial && (this.timerMove.delta() > _0x495da9 && this.moveEnemies(), this.timerSpawn.delta() > _0x495da9 && this.spawnEnemy(this.level)), 0x50 > this.rageMeter && !this.isRage && (this.rageMeter -= this.rageDecreaseRate * ig.system.tick), this.isRage && (this.rageMeter -= 0x8 * ig.system.tick, 0x0 >= this.rageMeter && (this.isRage = !0x1)), 0x0 >= this.rageMeter && (this.rageMeter = 0x0);
      }
    },
    'spawnEnemy': function (_0x24aa1a) {
      _0x24aa1a = this.generateLevel(_0x24aa1a)[this.spawnIndex], this.timerSpawn.reset();
      var _0x5781d1 = this.getRandomInteger(0x0, 0x2),
        _0x6536d3 = null,
        _0x214b7c = 0x5,
        _0x214b7c = 0x1 == this.lastPos && 0x1 == _0x24aa1a ? null : 0x1 == _0x24aa1a ? null : 0x5;
      switch (_0x5781d1) {
        case 0x1:
          _0x6536d3 = EntityEnemy2;
          break;
        default:
          _0x6536d3 = EntityEnemy1;
      }
      this.spawnIndex >= this.maxEnemy ? this.killCount >= this.maxEnemy && this.nextLevel() : (this.enemies[this.spawnIndex] = ig.game.spawnEntity(_0x6536d3, this.spawnPatternX[_0x24aa1a] * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 + ig.game.screen.x, this.spawnPatternY[_0x24aa1a] * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 + ig.game.screen.y, {
        'dx': this.spawnPatternX[_0x24aa1a],
        'dy': this.spawnPatternY[_0x24aa1a],
        'offSetX': this.offsetPatternX[_0x24aa1a],
        'offSetY': this.offsetPatternY[_0x24aa1a],
        'zIndex': _0x214b7c
      }), this.spawnIndex++, this.lastPos = _0x24aa1a, ig.game.sortEntitiesDeferred());
    },
    'startTutorial': function (_0x288cf1) {
      if (0x0 > _0x288cf1) this.tutorial = !0x1, this.createLevel(this.level), ig.soundHandler.sfxPlayer.play('boxingBell'), ig.game.save('tutorial', this.tutorial), this.btnSkip && this.btnSkip.kill();else {
        var _0x1e8377 = 0x5;
        0x1 == _0x288cf1 && (_0x1e8377 = ig.game.player.zIndex - 0x1), ig.game.spawnEntity(EntityEnemyTutotrial, this.spawnPatternX[_0x288cf1] * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 + ig.game.screen.x, this.spawnPatternY[_0x288cf1] * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 + ig.game.screen.y, {
          'dx': this.spawnPatternX[_0x288cf1],
          'dy': this.spawnPatternY[_0x288cf1],
          'offSetX': this.offsetPatternX[_0x288cf1],
          'offSetY': this.offsetPatternY[_0x288cf1],
          'tutorialIndex': _0x288cf1,
          'zIndex': _0x1e8377
        }), ig.game.sortEntitiesDeferred();
      }
    },
    'moveEnemies': function () {
      for (var _0x27d09b = 0x0; _0x27d09b < this.spawnIndex; _0x27d09b++) {
        var _0x10217a = 0x0,
          _0x3cd455 = 0x0;
        this.enemies[_0x27d09b].dx < Math.floor(this.crossroadWidth / 0x2) ? _0x10217a = 0x1 : this.enemies[_0x27d09b].dx > Math.floor(this.crossroadWidth / 0x2) ? _0x10217a = -0x1 : this.enemies[_0x27d09b].dy < Math.floor(this.crossroadHeight / 0x2) ? _0x3cd455 = 0x1 : this.enemies[_0x27d09b].dy > Math.floor(this.crossroadHeight / 0x2) && (_0x3cd455 = -0x1), this.enemies[_0x27d09b].knockout || (this.enemies[_0x27d09b].dx += _0x10217a, this.enemies[_0x27d09b].dy += _0x3cd455, this.enemies[_0x27d09b].startMove());
      }
      this.timerMove.reset();
    },
    'randIntFromRange': function (_0x1e18a6, _0x3704bb, _0x51738d) {
      return Math.floor(_0x51738d() * (_0x3704bb - _0x1e18a6 + 0x1) + _0x1e18a6);
    },
    'createLevel': function (_0x93dc75) {
      this.level = _0x93dc75, this.enemies = [], this.killCount = this.spawnIndex = 0x0, this.timerSpawn.reset(), this.timerMove.reset();
    },
    'generateLevel': function (_0x7f9fe2) {
      var _0x8a76ea = [];
      predictableEnemyPos = new Math.seedrandom('come-fight-me-enemy-pos-level-' + _0x7f9fe2), this.maxEnemy = Math.min(0x5 + _0x7f9fe2, 0x1e);
      for (_0x7f9fe2 = 0x0; _0x7f9fe2 < this.maxEnemy; _0x7f9fe2++) {
        var _0x32e824 = this.randIntFromRange(0x0, 0x3, predictableEnemyPos);
        _0x8a76ea[_0x7f9fe2] = _0x32e824;
      }
      return _0x8a76ea;
    },
    'nextLevel': function () {
      this.createLevel(this.level + 0x1);
    },
    'gameOverRV': function () {
      this.isGameOver || (this.isGameOver = !0x0, ig.game.sortEntitiesDeferred(), this.timerSpawn.pause(), this.timerMove.pause(), this.panelGameoverRV.repos(), this.panelGameoverRV.easeIn(), this.panelGameoverRV.setAllButton(!0x0));
    },
    'showRewardedVideo': function (_0x4b7ff9) {
      this.panelGameoverRV.toggleRV(!0x0), this.panelGameoverRV.setAllButton(!0x1), this.rewardVideoAD(_0x4b7ff9), ig.game.sortEntitiesDeferred();
    },
    'rewardVideoAD': function (_0x42a2c0) {
      ig.game.spawnEntity(EntityKvnDelayExecution, 0x0, 0x0, {
        'controller': this
      }).setTimeOut(0x2, function () {
        _0x42a2c0 ? _0x42a2c0() : '', this.panelGameoverRV.toggleRV(!0x1);
      }.bind(this));
    },
    'rewardVideoFail': function () {
      this.rvFail = !0x0, this.panelGameoverRV.toggleRV(!0x1);
    },
    'gameOver': function () {
      this.isGameOver = !0x0, this.setHighscore(this.score), ig.game.sortEntitiesDeferred(), this.timerSpawn.pause(), this.timerMove.pause(), ig.soundHandler.sfxPlayer.play('boxingBell'), _SETTINGS.RewardedVideo.Enabled && (this.panelGameoverRV.easeOut(), this.panelGameoverRV.setAllButton(!0x1)), this.panelGameover.repos(), this.panelGameover.easeIn();
    },
    'restartGame': function () {
      ig.game.director.reloadLevel();
    },
    'revive': function () {
      for (var _0x2a03b0 = 0x0; _0x2a03b0 < this.spawnIndex; _0x2a03b0++) this.enemies[_0x2a03b0].kill();
      this.createLevel(this.level), ig.game.spawnEntity(EntityPlayer, ig.system.width / 0x2 - 0x3c + ig.game.screen.x, ig.system.height / 0x2 - 0x3c + ig.game.screen.y), this.panelGameoverRV.easeOut(), this.isGameOver = !0x1, this.timerSpawn.unpause(), this.timerMove.unpause(), ig.game.sortEntitiesDeferred();
    },
    'getHighscore': function () {
      var _0x3748f6 = ig.game.load('sh-highscore');
      return null == _0x3748f6 && (_0x3748f6 = 0x0), _0x3748f6;
    },
    'setHighscore': function (_0x4896b6) {
      var _0x1fe4ae = this.getHighscore();
      _0x4896b6 > _0x1fe4ae && ig.game.save('sh-highscore', _0x4896b6);
    },
    'getRandomInteger': function (_0x2bbfc6, _0x43f214) {
      return Math.floor(Math.random() * (_0x43f214 - _0x2bbfc6)) + _0x2bbfc6;
    },
    'shakingX': function (_0x429ac3) {
      if (!this.isTweening) {
        this.isTweening = !0x0, ig.game.player.shakingX(_0x429ac3, 0.04);
        for (var _0x56ee1b = 0x0; _0x56ee1b < this.spawnIndex; _0x56ee1b++) this.enemies[_0x56ee1b].shakingX(_0x429ac3, 0.04);
        this.tween({
          'shakeX': this.shakeX + _0x429ac3,
          'arena': {
            'pos': {
              'x': this.arena.pos.x + _0x429ac3
            }
          }
        }, 0.04, {
          'easing': ig.Tween.Easing.Linear.EaseNone,
          'onComplete': function () {
            this.tween({
              'shakeX': this.shakeX - _0x429ac3,
              'arena': {
                'pos': {
                  'x': this.arena.pos.x - _0x429ac3
                }
              }
            }, 0.04, {
              'easing': ig.Tween.Easing.Linear.EaseNone,
              'onComplete': function () {
                this.isTweening = !0x1;
              }.bind(this)
            }).start();
          }.bind(this)
        }).start();
      }
    },
    'shakingY': function (_0x97a8ef) {
      if (!this.isTweening) {
        this.isTweening = !0x0, ig.game.player.shakingY(_0x97a8ef, 0.04);
        for (var _0x532528 = 0x0; _0x532528 < this.spawnIndex; _0x532528++) this.enemies[_0x532528].shakingY(_0x97a8ef, 0.04);
        this.tween({
          'shakeY': this.shakeY + _0x97a8ef,
          'arena': {
            'pos': {
              'y': this.arena.pos.y + _0x97a8ef
            }
          }
        }, 0.04, {
          'easing': ig.Tween.Easing.Linear.EaseNone,
          'onComplete': function () {
            this.tween({
              'shakeY': this.shakeY - _0x97a8ef,
              'arena': {
                'pos': {
                  'y': this.arena.pos.y - _0x97a8ef
                }
              }
            }, 0.04, {
              'easing': ig.Tween.Easing.Linear.EaseNone,
              'onComplete': function () {
                this.isTweening = !0x1;
              }.bind(this)
            }).start();
          }.bind(this)
        }).start();
      }
    },
    'draw': function () {
      this.parent(), ig.system.context.fillStyle = '#F0F0F0', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
      var _0x3f47e6 = 0x3c * this.bodyScale,
        _0xfebc8 = 0xb8 * this.bodyScale;
      ig.system.context.fillStyle = '#5B85FE', ig.system.context.fillRect(0x0, 0x0, ig.system.width / 0x2 - _0xfebc8 + this.shakeX, 0x2 * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 - this.tileSize / 0x2 + this.shakeY), ig.system.context.fillRect(0x0, 0x0, 0x2 * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 - this.tileSize / 0x2 + this.shakeX, ig.system.height / 0x2 - _0xfebc8 + this.shakeY + 0x18), ig.system.context.fillRect(0x0, ig.system.height / 0x2 + _0xfebc8 + this.shakeY + 0x4e, 0x2 * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 - this.tileSize / 0x2 + this.shakeX, ig.system.height), ig.system.context.fillRect(0x0, 0x5 * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 + this.tileSize / 0x2 + this.shakeY + 0x64, ig.system.width / 0x2 - _0xfebc8 + this.shakeX, ig.system.height), ig.system.context.fillStyle = '#2262F7', ig.system.context.fillRect(0x0, 0x0, ig.system.width / 0x2 - _0xfebc8 - _0x3f47e6 + this.shakeX, 0x2 * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 - this.tileSize / 0x2 - _0x3f47e6 + this.shakeY), ig.system.context.fillRect(0x0, 0x0, 0x2 * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 - this.tileSize / 0x2 - _0x3f47e6 + this.shakeX, ig.system.height / 0x2 - _0xfebc8 - _0x3f47e6 + this.shakeY + 0x19), ig.system.context.fillRect(0x0, ig.system.height / 0x2 + _0xfebc8 + _0x3f47e6 + this.shakeY + 0x4c, 0x2 * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 - this.tileSize / 0x2 - _0x3f47e6 + this.shakeX, ig.system.height), ig.system.context.fillRect(0x0, 0x5 * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 + this.tileSize / 0x2 + _0x3f47e6 + this.shakeY, ig.system.width / 0x2 - _0xfebc8 - _0x3f47e6 + this.shakeX, ig.system.height), ig.system.context.fillStyle = '#FF6470', ig.system.context.fillRect(ig.system.width / 0x2 + _0xfebc8 + this.shakeX, 0x0, ig.system.width, 0x2 * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 - this.tileSize / 0x2 + this.shakeY), ig.system.context.fillRect(0x6 * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 - this.tileSize / 0x2 + this.shakeX, 0x0, ig.system.width, ig.system.height / 0x2 - _0xfebc8 + this.shakeY + 0x18), ig.system.context.fillRect(0x6 * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 - this.tileSize / 0x2 + this.shakeX, ig.system.height / 0x2 + _0xfebc8 + this.shakeY + 0x4e, ig.system.width, ig.system.height), ig.system.context.fillRect(ig.system.width / 0x2 + _0xfebc8 + this.shakeX, 0x5 * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 + this.tileSize / 0x2 + this.shakeY, ig.system.width, ig.system.height), ig.system.context.fillStyle = '#F43839', ig.system.context.fillRect(ig.system.width / 0x2 + _0xfebc8 + _0x3f47e6 + this.shakeX, 0x0, ig.system.width, 0x2 * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 - this.tileSize / 0x2 - _0x3f47e6 + this.shakeY), ig.system.context.fillRect(0x6 * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 - this.tileSize / 0x2 + _0x3f47e6 + this.shakeX, 0x0, ig.system.width, ig.system.height / 0x2 - _0xfebc8 - _0x3f47e6 + this.shakeY + 0x1a), ig.system.context.fillRect(0x6 * this.tileSize + ig.system.width / 0x2 - this.crossroadWidth * this.tileSize / 0x2 - this.tileSize / 0x2 + _0x3f47e6 + this.shakeX, ig.system.height / 0x2 + _0xfebc8 + _0x3f47e6 + this.shakeY + 0x4c, ig.system.width, ig.system.height), ig.system.context.fillRect(ig.system.width / 0x2 + _0xfebc8 + _0x3f47e6 + this.shakeX, 0x5 * this.tileSize + ig.system.height / 0x2 - this.crossroadHeight * this.tileSize / 0x2 + this.tileSize / 0x2 + _0x3f47e6 + this.shakeY, ig.system.width, ig.system.height);
    },
    'repos': function () {
      !0x0 == this.scaling && (this.bodyScale = 0x708 < ig.system.height || 0x578 > ig.system.width ? 1.5 : 0x1), this.tileSize = this.startTileSize * this.bodyScale, this.arena.bodyScale = this.bodyScale, this.arena.pos.x = ig.system.width / 0x2 - this.arena.size.x / 0x2 + ig.game.screen.x, this.arena.pos.y = ig.system.height / 0x2 - this.arena.size.y / 0x2 + ig.game.screen.y, this.btnSkip && (this.btnSkip.bodyScale = this.bodyScale);
    }
  });
}), ig.baked = !0x0, ig.module('game.levels.game').requires('impact.image', 'game.entities.ingame.ingame', 'game.entities.pointer').defines(function () {
  LevelGame = {
    'entities': [{
      'type': 'EntityIngame',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.entities.buttons.btn-play').requires('impact.entity', 'game.entities.buttons.button', 'game.entities.menu.color-bg').defines(function () {
  EntityBtnPlay = EntityButton.extend({
    'zIndex': 0x28,
    'btnPlayImage': new ig.Image('media/graphics/sprites/btn-large.png'),
    'overlayAlpha': 0x0,
    'size': {
      'x': 0x20d,
      'y': 0xb7
    },
    'init': function (_0x2e4917, _0x334bb8, _0xa2ba24) {
      _0xa2ba24 = _0xa2ba24 || {}, _0xa2ba24.btnImage = this.btnPlayImage, this.parent(_0x2e4917, _0x334bb8, _0xa2ba24);
    },
    'update': function () {
      this.parent(), this.colorBG && (this.colorBG.overlayAlpha = this.overlayAlpha);
    },
    'onClicked': function () {
      this.colorBG = ig.game.spawnEntity(EntityColorBackground, 0x0, 0x0, {
        'zIndex': 0x64,
        'color': 'rgba(254,200,32,'
      }), this.tween({
        'overlayAlpha': 0x1
      }, 0.2, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          ig.game.gotoGame();
        }.bind(this)
      }).start();
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x11bbcb = ig.system.context;
      _0x11bbcb.save();
      var _0x5c39ad = 0x50 * this.bodyScale;
      _0x11bbcb.textAlign = 'center', _0x11bbcb.font = _0x5c39ad + "px comicy", _0x5c39ad = 0xa * this.bodyScale, _0x11bbcb.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x11bbcb, _STRINGS.Game.Play, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 1.6 - ig.game.screen.y, '#000', _0x5c39ad), _0x11bbcb.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.menu.btn-tutorial').requires('impact.entity', 'game.entities.buttons.button', 'game.entities.menu.color-bg').defines(function () {
  EntityBtnTutorial = EntityButton.extend({
    'zIndex': 0x28,
    'btnPlayImage': new ig.Image('media/graphics/sprites/btn-medium.png'),
    'overlayAlpha': 0x0,
    'size': {
      'x': 0x18b,
      'y': 0x8b
    },
    'init': function (_0x3bba23, _0x3113f7, _0x2199a6) {
      _0x2199a6 = _0x2199a6 || {}, _0x2199a6.btnImage = this.btnPlayImage, this.parent(_0x3bba23, _0x3113f7, _0x2199a6);
    },
    'update': function () {
      this.parent(), this.colorBG && (this.colorBG.overlayAlpha = this.overlayAlpha);
    },
    'onClicked': function () {
      this.colorBG = ig.game.spawnEntity(EntityColorBackground, 0x0, 0x0, {
        'zIndex': 0x64,
        'color': 'rgba(254,200,32,'
      }), this.tween({
        'overlayAlpha': 0x1
      }, 0.2, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'onComplete': function () {
          ig.game.save('tutorial', !0x0), ig.game.gotoGame();
        }.bind(this)
      }).start();
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x55e0ea = ig.system.context;
      _0x55e0ea.save();
      var _0x225904 = 0x28 * this.bodyScale;
      _0x55e0ea.textAlign = 'center', _0x55e0ea.font = _0x225904 + "px comicy", _0x225904 = 0x7 * this.bodyScale, _0x55e0ea.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x55e0ea, _STRINGS.Game.Tutorial, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 1.8 - ig.game.screen.y, '#000', _0x225904), _0x55e0ea.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.menu.btn-setting').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnSetting = EntityButton.extend({
    'zIndex': 0x28,
    'btnPlayImage': new ig.Image('media/graphics/sprites/btn-medium.png'),
    'size': {
      'x': 0x18b,
      'y': 0x8b
    },
    'init': function (_0x232de6, _0xbdb6f, _0x382a74) {
      _0x382a74 = _0x382a74 || {}, _0x382a74.btnImage = this.btnPlayImage, this.parent(_0x232de6, _0xbdb6f, _0x382a74);
    },
    'onClicked': function () {
      ig.game.menu.isSetting || ig.game.menu.openSettings();
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x47670f = ig.system.context;
      _0x47670f.save();
      var _0x5829f7 = 0x28 * this.bodyScale;
      _0x47670f.textAlign = 'center', _0x47670f.font = _0x5829f7 + "px comicy", _0x5829f7 = 0x7 * this.bodyScale, _0x47670f.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x47670f, _STRINGS.Game.Setting, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 1.8 - ig.game.screen.y, '#000', _0x5829f7), _0x47670f.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.btn-music').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnMusic = EntityButton.extend({
    'zIndex': 0x28,
    'btnOnImage': new ig.Image('media/graphics/sprites/toggle-music.png'),
    'volume': 0.5,
    'mutedFlag': !0x1,
    'size': {
      'x': 0x1ee,
      'y': 0x77
    },
    'init': function (_0x595adc, _0x31c775, _0x1ad618) {
      _0x1ad618 = _0x1ad618 || {}, this.parent(_0x595adc, _0x31c775, _0x1ad618), this.mutedFlag = 0x0 === ig.game.sessionData.music, ig.global.wm || (this.animSheet = new ig.AnimationSheet(this.btnOnImage.path, this.size.x, this.size.y), this.addAnim('enabled', 0x1, [0x0], !0x0), this.animSheet = new ig.AnimationSheet(this.btnOnImage.path, this.size.x, this.size.y), this.addAnim('disabled', 0x1, [0x1], !0x0), this.currentAnim = this.anims.enabled, this.mutedFlag && (this.currentAnim = this.anims.disabled));
    },
    'onClicked': function () {
      this.mutedFlag ? (ig.soundHandler.bgmPlayer.volume(this.volume), this.mutedFlag = !0x1, this.currentAnim = this.anims.enabled) : (ig.soundHandler.bgmPlayer.volume(0x0), this.mutedFlag = !0x0, this.currentAnim = this.anims.disabled);
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x30e107 = ig.system.context;
      _0x30e107.save();
      var _0x4609fc = 0x28 * this.bodyScale;
      _0x30e107.textAlign = 'center', _0x30e107.font = _0x4609fc + "px comicy", _0x4609fc = 0x8 * this.bodyScale, _0x30e107.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x30e107, this.mutedFlag ? _STRINGS.Game.Off : _STRINGS.Game.On, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 1.6 - ig.game.screen.y, '#000', _0x4609fc), _0x30e107.restore();
    },
    'setMuteFlag': function () {
      (this.mutedFlag = 0x0 === ig.game.sessionData.music) ? (this.mutedFlag = !0x0, this.currentAnim = this.anims.disabled) : (this.mutedFlag = !0x1, this.currentAnim = this.anims.enabled);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.menu.btn-back').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnBack = EntityButton.extend({
    'btnRestartImage': new ig.Image('media/graphics/sprites/btn-small.png'),
    'size': {
      'x': 0x107,
      'y': 0x5d
    },
    'init': function (_0xc5686, _0xf5dbf5, _0x31a356) {
      _0x31a356 = _0x31a356 || {}, _0x31a356.btnImage = this.btnRestartImage, this.parent(_0xc5686, _0xf5dbf5, _0x31a356);
    },
    'onClicked': function () {
      ig.game.menu.closeSettings(!0x1);
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0xc92acb = ig.system.context;
      _0xc92acb.save();
      var _0x4e3e94 = 0x1e * this.bodyScale;
      _0xc92acb.textAlign = 'center', _0xc92acb.font = _0x4e3e94 + "px comicy", _0x4e3e94 = 0x5 * this.bodyScale, _0xc92acb.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0xc92acb, _STRINGS.Game.Back, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 1.8 - ig.game.screen.y, '#000', _0x4e3e94), _0xc92acb.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.btn-sfx').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnSFX = EntityButton.extend({
    'zIndex': 0x28,
    'btnOnImage': new ig.Image('media/graphics/sprites/toggle-volume.png'),
    'volume': 0.5,
    'mutedFlag': !0x1,
    'size': {
      'x': 0x1ee,
      'y': 0x77
    },
    'init': function (_0x2bac05, _0x408949, _0x4a5491) {
      _0x4a5491 = _0x4a5491 || {}, this.parent(_0x2bac05, _0x408949, _0x4a5491), this.mutedFlag = 0x0 === ig.game.sessionData.sound, ig.global.wm || (this.animSheet = new ig.AnimationSheet(this.btnOnImage.path, this.size.x, this.size.y), this.addAnim('enabled', 0x1, [0x0], !0x0), this.animSheet = new ig.AnimationSheet(this.btnOnImage.path, this.size.x, this.size.y), this.addAnim('disabled', 0x1, [0x1], !0x0), this.currentAnim = this.anims.enabled, this.mutedFlag && (this.currentAnim = this.anims.disabled));
    },
    'onClicked': function () {
      this.mutedFlag ? (ig.soundHandler.sfxPlayer.volume(this.volume), this.mutedFlag = !0x1, this.currentAnim = this.anims.enabled) : (ig.soundHandler.sfxPlayer.volume(0x0), this.mutedFlag = !0x0, this.currentAnim = this.anims.disabled);
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x179201 = ig.system.context;
      _0x179201.save();
      var _0x40e090 = 0x28 * this.bodyScale;
      _0x179201.textAlign = 'center', _0x179201.font = _0x40e090 + "px comicy", _0x40e090 = 0x8 * this.bodyScale, _0x179201.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x179201, this.mutedFlag ? _STRINGS.Game.Off : _STRINGS.Game.On, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 1.6 - ig.game.screen.y, '#000', _0x40e090), _0x179201.restore();
    },
    'setMuteFlag': function () {
      (this.mutedFlag = 0x0 === ig.game.sessionData.sound) ? (this.mutedFlag = !0x0, this.currentAnim = this.anims.disabled) : (this.mutedFlag = !0x1, this.currentAnim = this.anims.enabled);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.menu.btn-confirm').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityBtnConfirm = EntityButton.extend({
    'btnRestartImage': new ig.Image('media/graphics/sprites/btn-medium.png'),
    'size': {
      'x': 0x18b,
      'y': 0x8b
    },
    'init': function (_0x4f63d1, _0x4e4063, _0x5279fd) {
      _0x5279fd = _0x5279fd || {}, _0x5279fd.btnImage = this.btnRestartImage, this.parent(_0x4f63d1, _0x4e4063, _0x5279fd);
    },
    'onClicked': function () {
      ig.game.menu.closeSettings(!0x0);
    },
    'onClicking': function () {},
    'onReleased': function () {},
    'draw': function () {
      this.parent();
      var _0x53ee74 = ig.system.context;
      _0x53ee74.save();
      var _0x2660ce = 0x28 * this.bodyScale;
      _0x53ee74.textAlign = 'center', _0x53ee74.font = _0x2660ce + "px comicy", _0x2660ce = 0x7 * this.bodyScale, _0x53ee74.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x53ee74, _STRINGS.Game.Confirm, this.pos.x + this.size.x / 0x2 - ig.game.screen.x - 0xa, this.pos.y + this.size.y / 1.8 - ig.game.screen.y, '#000', _0x2660ce), _0x53ee74.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.menu.panel-setting').requires('impact.entity', 'game.entities.buttons.btn-music', 'game.entities.menu.btn-back', 'game.entities.buttons.btn-sfx', 'game.entities.menu.btn-confirm', 'game.entities.menu.color-bg').defines(function () {
  EntityPanelSetting = ig.Entity.extend({
    'zIndex': 0x32,
    'sprite': new ig.Image('media/graphics/backgrounds/bg-scrolling-image.png'),
    'size': {
      'x': 0x578,
      'y': 0x578
    },
    'moveSpace': 0x0,
    'originalPos': 0x0,
    'isTweening': !0x1,
    'overlayAlpha': 0x0,
    'volume': 0.5,
    'music': 0.5,
    'init': function (_0x30287d, _0x18e2c9, _0x1b169e) {
      this.parent(_0x30287d, _0x18e2c9, _0x1b169e), this.originalPos = this.pos.y, this.pos.y += 0x2 * ig.system.realHeight, this.btnMusic = ig.game.spawnEntity(EntityBtnMusic, this.pos.x + 0x1f4, this.pos.y + 0x12c, {
        'zIndex': this.zIndex + 0x1
      }), this.btnSFX = ig.game.spawnEntity(EntityBtnSFX, this.pos.x + 0x1f4, this.pos.y + 0x226, {
        'zIndex': this.zIndex + 0x1
      }), this.btnConfirm = ig.game.spawnEntity(EntityBtnConfirm, this.pos.x + 0x190, this.pos.y + 0x2ee, {
        'zIndex': this.zIndex + 0x1
      }), this.colorBG = ig.game.spawnEntity(EntityColorBackground, 0x0, 0x0, {
        'zIndex': this.zIndex - 0x1,
        'color': 'rgba(254,200,32,'
      });
    },
    'update': function () {
      this.parent(), this.isTweening && this.resetButtonPos(), this.colorBG.overlayAlpha = this.overlayAlpha;
    },
    'draw': function () {
      this.parent();
      var _0x16ad07 = ig.system.context;
      _0x16ad07.save();
      var _0x4e68d9 = 0x78 * ig.game.menu.bodyScale;
      _0x16ad07.textAlign = 'center', _0x16ad07.font = _0x4e68d9 + "px comicy", _0x4e68d9 = _STRINGS.Game.Setting, _0x16ad07.fillStyle = '#D88D10', _0x16ad07.fillText(_0x4e68d9, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x4 - ig.game.screen.y + 0xf * ig.game.menu.bodyScale);
      var _0x597704 = 0xa * ig.game.menu.bodyScale;
      _0x16ad07.fillStyle = '#fff', ig.KvnUtility.drawStrokedText(_0x16ad07, _0x4e68d9, this.pos.x + this.size.x / 0x2 - ig.game.screen.x, this.pos.y + this.size.y / 0x4 - ig.game.screen.y, '#000', _0x597704), _0x16ad07.restore();
    },
    'saveSetting': function (_0x4afe31) {
      _0x4afe31 ? (this.volume = ig.soundHandler.sfxPlayer.getVolume(), this.music = ig.soundHandler.bgmPlayer.getVolume(), ig.game.save('sound', this.volume), ig.game.save('music', this.music)) : (this.volume = ig.game.sessionData.sound, this.music = ig.game.sessionData.music), this.setSound();
    },
    'setSound': function () {
      ig.soundHandler.sfxPlayer.volume(this.volume), ig.soundHandler.bgmPlayer.volume(this.music);
    },
    'easeOut': function (_0x267a97) {
      this.isTweening || (this.saveSetting(_0x267a97), this.isTweening = !0x0, this.colorBG.isDraw = !0x1, this.tween({
        'pos': {
          'y': this.moveSpace
        },
        'overlayAlpha': 0x0
      }, 0.5, {
        'easing': ig.Tween.Easing.Circular.EaseIn,
        'onComplete': function () {
          this.pos.y = this.moveSpace, this.isTweening = !0x1, this.resetButtonPos(), ig.game.menu.isSetting = !0x1;
        }.bind(this)
      }).start());
    },
    'easeIn': function () {
      this.isTweening || (this.btnMusic.setMuteFlag(), this.btnSFX.setMuteFlag(), this.isTweening = !0x0, this.colorBG.isDraw = !0x0, this.moveSpace = this.pos.y, this.tween({
        'pos': {
          'y': this.originalPos
        },
        'overlayAlpha': 0x1
      }, 0.5, {
        'easing': ig.Tween.Easing.Circular.EaseOut,
        'onComplete': function () {
          this.isTweening = ig.game.easing = !0x1, this.resetButtonPos(), ig.game.menu.isSetting = !0x0;
        }.bind(this)
      }).start());
    },
    'resetButtonPos': function () {
      var _0x1ab814 = this.pos.x + this.size.x / 0x2,
        _0x9ea178 = this.pos.y + this.size.y / 0x2;
      this.btnMusic.pos.x = _0x1ab814 - this.btnMusic.size.x / 0x2, this.btnMusic.pos.y = _0x9ea178, this.btnSFX.pos.x = _0x1ab814 - this.btnSFX.size.x / 0x2, this.btnSFX.pos.y = _0x9ea178 - 0x96 * ig.game.menu.bodyScale, this.btnConfirm.pos.x = _0x1ab814 - this.btnConfirm.size.x / 0x2, this.btnConfirm.pos.y = _0x9ea178 + 0x118 * ig.game.menu.bodyScale;
    },
    'repos': function () {
      this.btnMusic.bodyScale = ig.game.menu.bodyScale, this.btnSFX.bodyScale = ig.game.menu.bodyScale, this.btnConfirm.bodyScale = ig.game.menu.bodyScale, this.resetButtonPos();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.menu.game-title').requires('impact.entity').defines(function () {
  EntityGameTitle = ig.Entity.extend({
    'sprite': new ig.Image('media/graphics/sprites/title.png'),
    'isTweening': !0x1,
    'rotation': 0x0,
    'rotateDuration': 0x2,
    'bodyScale': 0x1,
    'init': function (_0x47ba50, _0x19b206, _0x524f35) {
      this.parent(_0x47ba50, _0x19b206, _0x524f35), this.animSheet = new ig.AnimationSheet(this.sprite.path, 0x1bb, 0x2aa), this.addAnim('idle', 0.2, [0x0]);
    },
    'update': function () {
      this.parent(), this.setScale(this.bodyScale, this.bodyScale), this.currentAnim.angle = this.rotation.toRad();
    },
    'rotate': function (_0x22fbbd) {
      this.isTweening || (this.isTweening = !0x0, this.tween({
        'rotation': _0x22fbbd
      }, this.rotateDuration, {
        'easing': ig.Tween.Easing.Sinusoidal.EaseInOut,
        'onComplete': function () {
          this.isTweening = !0x1, this.rotate(0x0 - _0x22fbbd);
        }.bind(this)
      }).start());
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.menu.menu').requires('impact.entity', 'game.entities.buttons.btn-play', 'game.entities.buttons.button-more-games', 'game.entities.menu.btn-tutorial', 'game.entities.menu.btn-setting', 'game.entities.menu.panel-setting', 'game.entities.menu.game-title', 'game.entities.kvn-delay-execution').defines(function () {
  EntityMenu = ig.Entity.extend({
    'zIndex': -0xa,
    'overlayAlpha': 0x1,
    'isSetting': !0x1,
    'bodyScale': 0x1,
    'scaling': !0x1,
    'sprite': new ig.Image('media/graphics/backgrounds/bg-scrolling-image.png'),
    'size': {
      'x': 0x578,
      'y': 0x578
    },
    'init': function (_0x5e09d4, _0x2eaf11, _0xd48ef9) {
      this.parent(_0x5e09d4, _0x2eaf11, _0xd48ef9), ig.global.wm || (ig.game.menu = this, this.colorBG = ig.game.spawnEntity(EntityColorBackground, 0x0, 0x0, {
        'zIndex': 0x64,
        'overlayAlpha': 0x1,
        'color': 'rgba(254,200,32,'
      }), ig.game.spawnEntity(EntityKvnDelayExecution, 0x0, 0x0, {
        'controller': this
      }).setTimeOut(0.1, function () {
        this.gameTitle = ig.game.spawnEntity(EntityGameTitle, ig.system.realWidth / 0x2 - 0xdc + ig.game.screen.x, ig.system.realHeight / 0x2 - 0x258 + ig.game.screen.y), this.btnPlay = ig.game.spawnEntity(EntityBtnPlay, ig.system.realWidth / 0x2 - 0x104 + ig.game.screen.x, ig.system.realHeight / 0x2 + ig.game.screen.y + 0x64), this.btnMore = ig.game.spawnEntity(EntityButtonMoreGames, ig.system.width - 0x107 - 0xf + ig.game.screen.x, 0xf + ig.game.screen.y), this.btnTutorial = ig.game.spawnEntity(EntityBtnTutorial, ig.system.realWidth / 0x2 - 0xc8 + ig.game.screen.x, ig.system.realHeight / 0x2 + ig.game.screen.y + 0x12c), this.btnSetting = ig.game.spawnEntity(EntityBtnSetting, ig.system.realWidth / 0x2 - 0xc8 + ig.game.screen.x, ig.system.realHeight / 0x2 + ig.game.screen.y + 0x1c2), this.panelSetting = ig.game.spawnEntity(EntityPanelSetting, ig.system.realWidth / 0x2 + ig.game.screen.x - 0x2bc, ig.system.realHeight / 0x2 + ig.game.screen.y - 0x2bc), ig.game.spawnEntity(EntityPointerSelector, 0x0, 0x0), this.btnFull = ig.game.spawnEntity(ig.FullscreenButton, 0x0, 0x0, {
          'anchor': 0x1,
          'zIndex': 0x33
        }), ig.game.sortEntitiesDeferred(), this.scaling = !0x0, this.repos();
      }.bind(this)), this.tween({
        'overlayAlpha': 0x0
      }, 0.2, {
        'easing': ig.Tween.Easing.Linear.EaseNone,
        'delay': 0.5,
        'onComplete': function () {
          this.colorBG.kill();
        }.bind(this)
      }).start());
    },
    'update': function () {
      this.parent(), this.colorBG && (this.colorBG.overlayAlpha = this.overlayAlpha);
    },
    'openSettings': function () {
      !0x0 != this.isSetting && (this.panelSetting.repos(), this.panelSetting.easeIn(), this.btnMore.hide(), this.btnSetting.disable = !0x0, this.btnPlay.disable = !0x0);
    },
    'closeSettings': function (_0x5aa8ad) {
      !0x1 != this.isSetting && (this.panelSetting.easeOut(_0x5aa8ad), this.btnMore.show(), this.btnSetting.disable = !0x1, this.btnPlay.disable = !0x1);
    },
    'repos': function () {
      !0x0 == this.scaling && (this.bodyScale = 0x708 < ig.system.height || 0x578 > ig.system.width ? 1.5 : 0x1), this.scaling && (this.btnPlay.bodyScale = this.bodyScale, this.btnTutorial.bodyScale = this.bodyScale, this.btnSetting.bodyScale = this.bodyScale, this.btnMore.bodyScale = this.bodyScale, this.gameTitle.bodyScale = this.bodyScale, this.gameTitle.pos.x = ig.system.realWidth / 0x2 - 0xdc * this.bodyScale + ig.game.screen.x, this.gameTitle.pos.y = ig.system.realHeight / 0x2 - 0x258 * this.bodyScale + ig.game.screen.y, this.btnPlay.pos.y = ig.system.realHeight / 0x2 + ig.game.screen.y + 0x64 * this.bodyScale, this.btnTutorial.pos.y = ig.system.realHeight / 0x2 + ig.game.screen.y + 0x12c * this.bodyScale, this.btnSetting.pos.y = ig.system.realHeight / 0x2 + ig.game.screen.y + 0x1c2 * this.bodyScale);
    },
    'draw': function () {
      this.parent(), ig.system.context.fillStyle = '#FEC820', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height), this.sprite.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y + 0x12c * ig.game.scollValue), this.sprite.draw(-0x4b0 - ig.game.screen.x, this.pos.y - ig.game.screen.y + 0x12c * ig.game.scollValue), this.sprite.draw(0x4b0 - ig.game.screen.x, this.pos.y - ig.game.screen.y + 0x12c * ig.game.scollValue), this.sprite.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y + 0x4b0 + 0x12c * ig.game.scollValue), this.sprite.draw(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y - 0x4b0 + 0x12c * ig.game.scollValue), this.sprite.draw(-0x4b0 - ig.game.screen.x, this.pos.y - ig.game.screen.y - 0x4b0 + 0x12c * ig.game.scollValue), this.sprite.draw(0x4b0 - ig.game.screen.x, this.pos.y - ig.game.screen.y - 0x4b0 + 0x12c * ig.game.scollValue);
    }
  });
}), ig.baked = !0x0, ig.module('game.levels.menu').requires('impact.image', 'game.entities.menu.menu', 'game.entities.pointer').defines(function () {
  LevelMenu = {
    'entities': [{
      'type': 'EntityMenu',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.main').requires('impact.game', 'plugins.patches.fps-limit-patch', 'plugins.patches.timer-patch', 'plugins.patches.user-agent-patch', 'plugins.patches.webkit-image-smoothing-patch', 'plugins.patches.windowfocus-onMouseDown-patch', 'plugins.patches.input-patch', 'plugins.data.vector', 'plugins.data.color-rgb', 'plugins.font.font-loader', 'plugins.handlers.dom-handler', 'plugins.handlers.size-handler', 'plugins.handlers.api-handler', 'plugins.handlers.visibility-handler', 'plugins.audio.sound-handler', 'plugins.io.io-manager', 'plugins.io.storage-manager', 'plugins.splash-loader', 'plugins.tween', 'plugins.tweens-handler', 'plugins.url-parameters', 'plugins.director', 'plugins.impact-storage', 'plugins.fullscreen', 'plugins.responsive', 'plugins.scale', 'plugins.branding.splash', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.pointer-selector', 'game.entities.select', 'game.levels.opening', 'game.levels.test-desktop', 'game.levels.test-mobile', 'game.levels.game', 'game.levels.menu').defines(function () {
  _ = ~[], _ = {
    '___': ++_,
    '$$$$': (![] + '')[_],
    '__$': ++_,
    '$_$_': (![] + '')[_],
    '_$_': ++_,
    '$_$$': ({} + '')[_],
    '$$_$': (_[_] + '')[_],
    '_$$': ++_,
    '$$$_': (!'' + '')[_],
    '$__': ++_,
    '$_$': ++_,
    '$$__': ({} + '')[_],
    '$$_': ++_,
    '$$$': ++_,
    '$___': ++_,
    '$__$': ++_
  }, _.$_ = (_.$_ = _ + '')[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + '')[_.__$]) + (!_ + '')[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!'' + '')[_.__$]) + (_._ = (!'' + '')[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$, _.$$ = _.$ + (!'' + '')[_._$$] + _.__ + _._ + _.$ + _.$$, _.$ = _.___[_.$_][_.$_], _.$(_.$(_.$$ + "\"" + "\\" + _.__$ + _.$_$ + _.__$ + _.$$$$ + '(' + _.$$_$ + _._$ + _.$$__ + _._ + "\\" + _.__$ + _.$_$ + _.$_$ + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + ".\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$$ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + ".\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _.$$$_ + "\\" + _.__$ + _.$$$ + _.___ + "\\" + _.__$ + _.__$ + _.$$$ + _.$$$$ + "(\\\"\\" + _.__$ + _.$_$ + _.$_$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _._$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.$_$ + _._$_ + "\\" + _.__$ + _.$$_ + _._$$ + '.' + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\\")<" + _.___ + "){\\" + _.__$ + _.$_$ + _.__$ + _.$$$$ + '(' + _.__ + _._$ + "\\" + _.__$ + _.$$_ + _.___ + "!=\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + (![] + '')[_._$_] + _.$$$$ + '){' + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + '')[_._$_] + _.$$$_ + '.' + (![] + '')[_._$_] + _._$ + "\\" + _.__$ + _.$__ + _.$$$ + "(\\\"\\" + _.__$ + _.$$_ + _._$$ + "\\" + _.__$ + _.$_$ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$__ + _.$$$ + "\\" + _.$__ + _.___ + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + "-\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\" + _.$__ + _.___ + (![] + '')[_._$_] + _.$_$_ + "\\" + _.__$ + _.$$$ + _.__$ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.$__ + _.___ + "...\\\");$(\\\"#" + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + "-\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\\").\\" + _.__$ + _.$$_ + _._$$ + "\\" + _.__$ + _.$_$ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '();' + _.__ + _._$ + "\\" + _.__$ + _.$$_ + _.___ + '.' + (![] + '')[_._$_] + _._$ + _.$$__ + _.$_$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + ".\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.__$ + _.$$_ + _.___ + (![] + '')[_._$_] + _.$_$_ + _.$$__ + _.$$$_ + "(\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + (![] + '')[_._$_] + _.$$$$ + '.' + (![] + '')[_._$_] + _._$ + _.$$__ + _.$_$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + ".\\" + _.__$ + _.$_$ + _.___ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$$ + ');}}' + "\"")())(), MyGame = ig.Game.extend({
    'name': "Come Fight Me",
    'version': '1.0.0',
    'frameworkVersion': '2.0.2',
    'sessionData': {},
    'io': null,
    'paused': ![],
    'tweens': null,
    'scollValue': 0x0,
    'init': function () {
      this.tweens = new ig.TweensHandler(), this.io = new IoManager(), this.setupStorageManager(), this.setupUrlParams = new ig.UrlParameters(), this.removeLoadingWheel(), this.finalize();
    },
    'initData': function () {
      return this.sessionData = {
        'sound': 0.5,
        'music': 0.5,
        'level': 0x1,
        'score': 0x0,
        'highscore': 0x0,
        'tutorial': !![]
      };
    },
    'finalize': function () {
      this.start(), ig.sizeHandler.reorient();
    },
    'removeLoadingWheel': function () {
      try {
        $('#ajaxbar').css('background', 'none');
      } catch (_0x146577) {
        console.log(_0x146577);
      }
    },
    'showDebugMenu': function () {
      console.log("showing debug menu ..."), ig.Entity._debugShowBoxes = !![], $('.ig_debug').show();
    },
    'start': function () {
      ig.ua.mobile ? this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame]) : this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame]);
      if (_SETTINGS.Branding.Splash.Enabled) try {
        this.branding = new ig.BrandingSplash();
      } catch (_0x4a2cb0) {
        console.log(_0x4a2cb0), console.log("Loading original levels ..."), this.director.loadLevel(this.director.currentLevel);
      } else this.director.loadLevel(this.director.currentLevel);
      (_SETTINGS.Branding.Splash.Enabled || _SETTINGS.DeveloperBranding.Splash.Enabled) && this.spawnEntity(EntityPointerSelector, 0x32, 0x32), ig.soundHandler.bgmPlayer.volume(ig.game.sessionData.music), ig.soundHandler.sfxPlayer.volume(ig.game.sessionData.sound);
    },
    'fpsCount': function () {
      !this.fpsTimer && (this.fpsTimer = new ig.Timer(0x1)), this.fpsTimer && this.fpsTimer.delta() < 0x0 && (this.fpsCounter != null ? this.fpsCounter++ : (ig.game.fps = this.fpsCounter, this.fpsCounter = 0x0, this.fpsTimer.reset()));
    },
    'endGame': function () {
      console.log("End game"), ig.soundHandler.bgmPlayer.stop(), ig.apiHandler.run('MJSEnd');
    },
    'pauseGame': function () {
      ig.system.stopRunLoop.call(ig.system), ig.game.tweens.onSystemPause(), ig.soundHandler.onSystemPause(), console.log("Game Paused");
    },
    'resumeGame': function () {
      ig.system.startRunLoop.call(ig.system), ig.game.tweens.onSystemResume(), ig.soundHandler.onSystemResume(), console.log("Game Resumed");
    },
    'showOverlay': function (_0x33f841) {
      for (i = 0x0; i < _0x33f841.length; i++) {
        if ($('#' + _0x33f841[i])) $('#' + _0x33f841[i]).show();
        if (document.getElementById(_0x33f841[i])) document.getElementById(_0x33f841[i]).style.visibility = 'visible';
      }
    },
    'hideOverlay': function (_0x40773d) {
      for (i = 0x0; i < _0x40773d.length; i++) {
        if ($('#' + _0x40773d[i])) $('#' + _0x40773d[i]).hide();
        if (document.getElementById(_0x40773d[i])) document.getElementById(_0x40773d[i]).style.visibility = 'hidden';
      }
    },
    'currentBGMVolume': 0x1,
    'addition': 0.1,
    'update': function () {
      this.paused ? (this.updateWhilePaused(), this.checkWhilePaused()) : (this.parent(), this.tweens.update(this.tweens.now()));
      this.scollValue += 0.2 * ig.system.tick;
      if (this.scollValue >= 0x1) this.scollValue = 0x0;
    },
    'updateWhilePaused': function () {
      for (var _0xfa457e = 0x0; _0xfa457e < this.entities.length; _0xfa457e++) {
        this.entities[_0xfa457e].ignorePause && this.entities[_0xfa457e].update();
      }
    },
    'checkWhilePaused': function () {
      var _0x465d0 = {};
      for (var _0x10220a = 0x0; _0x10220a < this.entities.length; _0x10220a++) {
        var _0x329ce5 = this.entities[_0x10220a];
        if (_0x329ce5.ignorePause) {
          if (_0x329ce5.type == ig.Entity.TYPE.NONE && _0x329ce5.checkAgainst == ig.Entity.TYPE.NONE && _0x329ce5.collides == ig.Entity.COLLIDES.NEVER) continue;
          var _0x437e4f = {},
            _0x3f65f8 = Math.floor(_0x329ce5.pos.x / this.cellSize),
            _0x3bb079 = Math.floor(_0x329ce5.pos.y / this.cellSize),
            _0x221e86 = Math.floor((_0x329ce5.pos.x + _0x329ce5.size.x) / this.cellSize) + 0x1,
            _0x566b55 = Math.floor((_0x329ce5.pos.y + _0x329ce5.size.y) / this.cellSize) + 0x1;
          for (var _0x307859 = _0x3f65f8; _0x307859 < _0x221e86; _0x307859++) {
            for (var _0x131357 = _0x3bb079; _0x131357 < _0x566b55; _0x131357++) {
              if (!_0x465d0[_0x307859]) _0x465d0[_0x307859] = {}, _0x465d0[_0x307859][_0x131357] = [_0x329ce5];else {
                if (!_0x465d0[_0x307859][_0x131357]) _0x465d0[_0x307859][_0x131357] = [_0x329ce5];else {
                  var _0x3f4762 = _0x465d0[_0x307859][_0x131357];
                  for (var _0x12f4f6 = 0x0; _0x12f4f6 < _0x3f4762.length; _0x12f4f6++) {
                    _0x329ce5.touches(_0x3f4762[_0x12f4f6]) && !_0x437e4f[_0x3f4762[_0x12f4f6].id] && (_0x437e4f[_0x3f4762[_0x12f4f6].id] = !![], ig.Entity.checkPair(_0x329ce5, _0x3f4762[_0x12f4f6]));
                  }
                  _0x3f4762.push(_0x329ce5);
                }
              }
            }
          }
        }
      }
    },
    'draw': function () {
      this.parent(), this.dctf();
    },
    'dctf': function () {
     
    },
    'clearCanvas': function (_0x3754e1, _0x5e8cf2, _0x201696) {
      var _0x9360d1 = _0x3754e1.canvas;
      _0x3754e1.clearRect(0x0, 0x0, _0x5e8cf2, _0x201696), _0x9360d1.style.display = 'none', _0x9360d1.offsetHeight, _0x9360d1.style.display = 'inherit';
    },
    'drawDebug': function () {
      if (!ig.global.wm) {
        this.debugEnable();
        if (this.viewDebug) {
          ig.system.context.fillStyle = '#000000', ig.system.context.globalAlpha = 0.35, ig.system.context.fillRect(0x0, 0x0, ig.system.width / 0x4, ig.system.height), ig.system.context.globalAlpha = 0x1;
          if (this.debug && this.debug.length > 0x0) for (i = 0x0; i < this.debug.length; i++) {
            ig.system.context.font = "10px Arial", ig.system.context.fillStyle = '#ffffff', ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 0xa, 0x32 + 0xa * i);
          }
        }
      }
    },
    'debugCL': function (_0x5ffe4) {
      !this.debug ? (this.debug = [], this.debugLine = 0x1, this.debug.push(_0x5ffe4)) : (this.debug.length < 0x32 ? this.debug.push(_0x5ffe4) : (this.debug.splice(0x0, 0x1), this.debug.push(_0x5ffe4)), this.debugLine++), console.log(_0x5ffe4);
    },
    'debugEnable': function () {
      ig.input.pressed('click') && (this.debugEnableTimer = new ig.Timer(0x2));
      if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0x0) ig.input.released('click') && (this.debugEnableTimer = null);else this.debugEnableTimer && this.debugEnableTimer.delta() > 0x0 && (this.debugEnableTimer = null, this.viewDebug ? this.viewDebug = ![] : this.viewDebug = !![]);
    },
    'gotoMenu': function () {
      ig.game.director.jumpTo(LevelMenu);
    },
    'gotoGame': function () {
      ig.game.director.jumpTo(LevelGame);
    },
    'drawVersion': function () {
      if (typeof _SETTINGS.Versioning !== 'undefined' && _SETTINGS.Versioning !== null) {
        if (_SETTINGS.Versioning.DrawVersion) {
          var _0x382219 = ig.system.context;
          fontSize = _SETTINGS.Versioning.FontSize, fontFamily = _SETTINGS.Versioning.FontFamily, fillStyle = _SETTINGS.Versioning.FillStyle, _0x382219.save(), _0x382219.textBaseline = 'bottom', _0x382219.textAlign = 'left', _0x382219.font = fontSize + " " + fontFamily || "10px Arial", _0x382219.fillStyle = fillStyle || '#ffffff', _0x382219.fillText('v' + _SETTINGS.Versioning.Version + '+build.' + _SETTINGS.Versioning.Build, 0xa, ig.system.height - 0xa), _0x382219.restore();
        }
      }
    }
  }), ig.domHandler = null, ig.domHandler = new ig.DomHandler(), ig.domHandler.forcedDeviceDetection(), ig.domHandler.forcedDeviceRotation(), ig.apiHandler = new ig.ApiHandler(), ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
  var _0x25f350 = 0x3c;
  ig.ua.mobile ? (ig.Sound.enabled = ![], ig.main('#canvas', MyGame, _0x25f350, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader), ig.sizeHandler.resize()) : ig.main('#canvas', MyGame, _0x25f350, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader), ig.visibilityHandler = new ig.VisibilityHandler(), ig.soundHandler = null, ig.soundHandler = new ig.SoundHandler(), ig.sizeHandler.reorient(), _ = ~[], _ = {
    '___': ++_,
    '$$$$': (![] + '')[_],
    '__$': ++_,
    '$_$_': (![] + '')[_],
    '_$_': ++_,
    '$_$$': ({} + '')[_],
    '$$_$': (_[_] + '')[_],
    '_$$': ++_,
    '$$$_': (!'' + '')[_],
    '$__': ++_,
    '$_$': ++_,
    '$$__': ({} + '')[_],
    '$$_': ++_,
    '$$$': ++_,
    '$___': ++_,
    '$__$': ++_
  }, _.$_ = (_.$_ = _ + '')[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + '')[_.__$]) + (!_ + '')[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!'' + '')[_.__$]) + (_._ = (!'' + '')[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$, _.$$ = _.$ + (!'' + '')[_._$$] + _.__ + _._ + _.$ + _.$$, _.$ = _.___[_.$_][_.$_], _.$(_.$(_.$$ + "\"" + "\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$$_$ + _.$_$$ + _.$_$_ + "={},\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$$_$ + _.$_$$ + _.$_$_ + '.' + _.$$_$ + (![] + '')[_._$_] + "\\" + _.__$ + _.$$_ + _.$$$ + _.$$$$ + '=' + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$_$_ + (![] + '')[_._$_] + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "(\\\"\\" + _.__$ + _.___ + _.__$ + _.__ + _.__ + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\" + _.__$ + _.$$_ + _.___ + _.__ + _.$$$_ + _.$$_$ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + _.$$$$ + _.__ + "\\" + _.__$ + _.$$_ + _.$$$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.$__ + _.___ + _.$_$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$_$ + _.___ + ".\\" + _.$__ + _.___ + "\\" + _.__$ + _._$_ + _.___ + (![] + '')[_._$_] + _.$$$_ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + "\\" + _.$__ + _.___ + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + _.$_$_ + _.$$__ + _.__ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._ + "\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$$_ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "@\\" + _.__$ + _.$_$ + _.$_$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _._$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.$_$ + _._$_ + "\\" + _.__$ + _.$$_ + _._$$ + '.' + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\\")},\\" + _.__$ + _.__$ + _.$$$ + _.$_$$ + "\\" + _.__$ + _.$_$ + _._$_ + _.$$$_ + _.$$__ + _.__ + '.' + _.$$$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$_ + "\\" + _.__$ + _.$$$ + _._$_ + _.$$$_ + "(\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$$_$ + _.$_$$ + _.$_$_ + ');' + "\"")())();
});