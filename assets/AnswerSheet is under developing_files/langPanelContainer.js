define('translation:widget/translate/translang/langPanelContainer.jsx', function(require, exports, module) {

  'use strict';
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  /**
   * @file
   * @author 姚伟 <yaowei02@baidu.com>
   */
  
  var React = require('translation:node_modules/react/index');
  var ReactDOM = require('translation:node_modules/react-dom/index');
  var Component = React.Component;
  
  var LangPanel = require('translation:widget/translate/translang/LangPanel/LangPanel.jsx');
  var env = require('translation:widget/common/environment');
  
  var langPanelContainerRef = null;
  
  var LangPanelContainer = function (_Component) {
      _inherits(LangPanelContainer, _Component);
  
      function LangPanelContainer() {
          var _ref;
  
          _classCallCheck(this, LangPanelContainer);
  
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }
  
          var _this = _possibleConstructorReturn(this, (_ref = LangPanelContainer.__proto__ || Object.getPrototypeOf(LangPanelContainer)).call.apply(_ref, [this].concat(args)));
  
          var isShowEnLang = false;
          var oftenList = {
              from: ['en', 'zh'],
              to: ['en', 'zh']
          };
          try {
              var str = localStorage.getItem('langDisplayLang');
              if (str === 'en') {
                  isShowEnLang = true;
              }
              localStorage.setItem('langDisplayLang', isShowEnLang ? 'en' : 'zh');
              ['from', 'to'].forEach(function (langType) {
                  var str = localStorage.getItem(langType + 'OftenList');
                  if (typeof str === 'string' && str.length > 0) {
                      var currOftenList = JSON.parse(str);
                      if (Array.isArray(currOftenList) && currOftenList.length > 0) {
                          oftenList[langType] = currOftenList;
                          return;
                      }
                  }
                  // 读不到的情况一律把默认的常用语种写进localStorage
                  localStorage.setItem(langType + 'OftenList', JSON.stringify(oftenList[langType]));
              });
          } catch (e) {}
          _this.state = {
              isShowEnLang: isShowEnLang,
              // 0-不显示 1-源语言 2-目标语言
              currLangType: 0,
              currFrom: 'auto',
              currTo: 'zh',
              fromOftenList: oftenList.from,
              toOftenList: oftenList.to
          };
          return _this;
      }
  
      _createClass(LangPanelContainer, [{
          key: 'render',
          value: function render() {
              var _state = this.state,
                  isShowEnLang = _state.isShowEnLang,
                  currLangType = _state.currLangType,
                  currFrom = _state.currFrom,
                  currTo = _state.currTo,
                  fromOftenList = _state.fromOftenList,
                  toOftenList = _state.toOftenList;
  
              if (currLangType === 0) {
                  return null;
              }
              var isFrom = currLangType === 1;
              var selectedLang = isFrom ? currFrom : currTo;
              var oppoLang = isFrom ? currTo : currFrom;
              var oftenList = isFrom ? fromOftenList : toOftenList;
              return React.createElement(LangPanel, {
                  onLangItemClick: this.onLangItemClick.bind(this),
                  toggleIsShowEnLang: this.toggleIsShowEnLang.bind(this),
                  isShowEnLang: isShowEnLang,
                  isFrom: isFrom,
                  selectedLang: selectedLang,
                  oppoLang: oppoLang,
                  oftenList: oftenList
              });
          }
      }, {
          key: 'toggleIsShowEnLang',
          value: function toggleIsShowEnLang(isShowEnLang) {
              this.setState({
                  isShowEnLang: isShowEnLang
              });
              try {
                  localStorage.setItem('langDisplayLang', isShowEnLang ? 'en' : 'zh');
              } catch (e) {}
          }
      }, {
          key: 'componentDidUpdate',
          value: function componentDidUpdate(prevProps, prevState, snapshot) {
              var currLangType = this.state.currLangType;
  
              var $fromArrow = $('.select-from-language .arrow-down');
              var $toArrow = $('.select-to-language .arrow-down');
              if (prevState.currLangType !== currLangType) {
                  if (currLangType === 1) {
                      $fromArrow.addClass('lang-arrow-up');
                      $toArrow.removeClass('lang-arrow-up');
                  } else if (currLangType === 2) {
                      $toArrow.addClass('lang-arrow-up');
                      $fromArrow.removeClass('lang-arrow-up');
                  } else if (currLangType === 0) {
                      $toArrow.removeClass('lang-arrow-up');
                      $fromArrow.removeClass('lang-arrow-up');
                  }
              }
          }
      }, {
          key: 'onLangItemClick',
          value: function onLangItemClick(key) {
              if (this.state.currLangType === 1) {
                  // 用户选择源语言不触发A/B策略
                  env.set('langChangedByUser', true);
                  var fromlang = require('translation:widget/translate/translang/fromlang');
                  fromlang.fromlangItemSelect({
                      value: key,
                      trans: true
                  });
                  /* global _hmt */
                  _hmt.push(['_trackEvent', '首页', 'web端点击源语言列表item']);
                  this.updateOftenList(key, true);
              } else if (this.state.currLangType === 2) {
                  var tolang = require('translation:widget/translate/translang/tolang');
                  tolang.tolangItemSelect({
                      value: key,
                      trans: true
                  });
                  /* global _hmt */
                  _hmt.push(['_trackEvent', '首页', 'web端点击目标语言列表item']);
                  this.updateOftenList(key, false);
              }
          }
      }, {
          key: 'updateOftenList',
          value: function updateOftenList(key, isFrom) {
              if (key === 'auto') {
                  return;
              }
              var propertyName = isFrom ? 'fromOftenList' : 'toOftenList';
              var oftenList = [].concat(_toConsumableArray(this.state[propertyName]));
              if (oftenList.indexOf(key) !== -1) {
                  oftenList.splice(oftenList.indexOf(key), 1);
              }
              oftenList.push(key);
              // 只保存最近3个常用语种
              while (oftenList.length > 3) {
                  oftenList.shift();
              }
              this.setState(_defineProperty({}, propertyName, oftenList));
              try {
                  localStorage.setItem(propertyName, JSON.stringify(oftenList));
              } catch (e) {}
          }
      }]);
  
      return LangPanelContainer;
  }(Component);
  
  ReactDOM.render(React.createElement(LangPanelContainer, {
      ref: function ref(ele) {
          langPanelContainerRef = ele;
      }
  }), document.getElementById('lang-panel-container'));
  
  module.exports = {
      getCurrLangType: function getCurrLangType() {
          return langPanelContainerRef.state.currLangType;
      },
      hideFromWrap: function hideFromWrap() {
          var currLangType = langPanelContainerRef.state.currLangType;
  
          var newLangType = currLangType === 1 ? 0 : currLangType;
          langPanelContainerRef.setState({
              currLangType: newLangType
          });
      },
      hideToWrap: function hideToWrap() {
          var currLangType = langPanelContainerRef.state.currLangType;
  
          var newLangType = currLangType === 2 ? 0 : currLangType;
          langPanelContainerRef.setState({
              currLangType: newLangType
          });
      },
      changeFrom: function changeFrom(key) {
          langPanelContainerRef.setState({
              currFrom: key
          });
      },
      changeTo: function changeTo(key) {
          langPanelContainerRef.setState({
              currTo: key
          });
      },
  
      /**
       * 源语言按钮点击,切换按钮上的箭头展开/收起状态
       */
      fromBtnClicked: function fromBtnClicked() {
          var currLangType = langPanelContainerRef.state.currLangType;
  
          var newLangType = currLangType === 1 ? 0 : 1;
          langPanelContainerRef.setState({
              currLangType: newLangType
          });
      },
  
      /**
       * 目标语言按钮点击
       */
      toBtnClicked: function toBtnClicked() {
          var currLangType = langPanelContainerRef.state.currLangType;
  
          var newLangType = currLangType === 2 ? 0 : 2;
          langPanelContainerRef.setState({
              currLangType: newLangType
          });
      }
  };

});
