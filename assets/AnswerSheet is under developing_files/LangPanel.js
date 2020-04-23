define('translation:widget/translate/translang/LangPanel/LangPanel.jsx', function(require, exports, module) {

  'use strict';
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
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
  
  var _require = require('translation:node_modules/react-custom-scrollbars/lib/index'),
      Scrollbars = _require.Scrollbars;
  
  var classNames = require('translation:node_modules/classnames/index');
  var Component = React.Component;
  
  var langMap = require('translation:widget/common/config/langMap');
  // @require translation:widget/translate/translang/LangPanel/LangPanel.scss
  
  var alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  /*
  * isShowEnLang,
  * isFrom,
  * selectedLang,
  * oppoLang
  * */
  
  var LangPanel = function (_Component) {
      _inherits(LangPanel, _Component);
  
      function LangPanel() {
          var _ref;
  
          _classCallCheck(this, LangPanel);
  
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }
  
          var _this = _possibleConstructorReturn(this, (_ref = LangPanel.__proto__ || Object.getPrototypeOf(LangPanel)).call.apply(_ref, [this].concat(args)));
  
          _this.alphabetEleObj = {};
          _this.langTableRef = React.createRef();
          _this.searchInputRef = React.createRef();
          _this.state = {
              query: ''
          };
          return _this;
      }
  
      _createClass(LangPanel, [{
          key: 'render',
          value: function render() {
              var _this2 = this;
  
              var _props = this.props,
                  isShowEnLang = _props.isShowEnLang,
                  isFrom = _props.isFrom,
                  selectedLang = _props.selectedLang,
                  oppoLang = _props.oppoLang,
                  oftenList = _props.oftenList;
              var query = this.state.query;
  
              var newLangMap = this.genNewLangMap();
              var propertyName = this.props.isShowEnLang ? 'enName' : 'zhName';
              var filteredAlphabetArr = alphabetArr.filter(function (letter) {
                  return newLangMap[letter];
              });
              var newOftenList = [].concat(_toConsumableArray(oftenList));
              if (isFrom) {
                  newOftenList.unshift('auto');
              }
              return React.createElement(
                  'div',
                  {
                      className: classNames('lang-panel', 'lang-panel-' + (isFrom ? 'from' : 'to'), { searching: query.trim().length > 0 }) },
                  React.createElement(
                      'div',
                      { className: 'lang-show-lang-switch-container' },
                      React.createElement(
                          'div',
                          {
                              onClick: function onClick() {
                                  _this2.props.toggleIsShowEnLang(false);
                              },
                              className: classNames('lang-show-lang-switch', {
                                  'selected': !isShowEnLang
                              })
                          },
                          '\u4E2D',
                          React.createElement(
                              'div',
                              { className: 'switch-tip' },
                              '\u5207\u6362\u4E2D\u6587\u8BED\u79CD'
                          )
                      ),
                      React.createElement(
                          'div',
                          {
                              onClick: function onClick() {
                                  _this2.props.toggleIsShowEnLang(true);
                              },
                              className: classNames('lang-show-lang-switch', {
                                  'selected': isShowEnLang
                              })
                          },
                          'EN',
                          React.createElement(
                              'div',
                              { className: 'switch-tip' },
                              '\u5207\u6362\u82F1\u6587\u8BED\u79CD'
                          )
                      )
                  ),
                  React.createElement('div', { id: (isFrom ? 'from' : 'to') + '-cover-line' }),
                  React.createElement(
                      'ol',
                      { className: 'often-list' },
                      newOftenList.map(function (key) {
                          return React.createElement(
                              'li',
                              {
                                  onClick: _this2.onOftenLangItemClick.bind(_this2, key),
                                  key: key,
                                  className: classNames('lang-item', {
                                      'selected': selectedLang === key,
                                      'disabled': oppoLang === key
                                  }) },
                              langMap[key][propertyName]
                          );
                      })
                  ),
                  React.createElement(
                      'div',
                      {
                          onClick: function onClick() {
                              _this2.searchInputRef.current.focus();
                          },
                          className: 'search-container' },
                      React.createElement(
                          'div',
                          { className: 'search-wrapper' },
                          React.createElement('input', {
                              ref: this.searchInputRef,
                              placeholder: '\u641C\u7D22\u8BED\u8A00',
                              className: 'search-input',
                              value: query,
                              onChange: function onChange(e) {
                                  _this2.setState({
                                      query: e.target.value
                                  });
                              },
                              type: 'text' })
                      )
                  ),
                  React.createElement(
                      Scrollbars,
                      {
                          className: 'search-result',
                          autoHide: true,
                          autoHeight: true,
                          autoHeightMax: 31 * 12
                      },
                      this.genSearchResult().map(function (key) {
                          return React.createElement(
                              'div',
                              {
                                  onClick: _this2.onLangItemClick.bind(_this2, key),
                                  key: key,
                                  className: 'search-result-item' },
                              langMap[key]['zhName'],
                              '\xA0\xA0',
                              langMap[key]['enName']
                          );
                      })
                  ),
                  React.createElement(
                      Scrollbars,
                      {
                          ref: this.langTableRef,
                          className: 'lang-table',
                          autoHide: true,
                          style: { height: 488.425 }
                      },
                      filteredAlphabetArr.map(function (letter) {
                          return React.createElement(
                              'div',
                              {
                                  ref: function ref(ele) {
                                      _this2.alphabetEleObj[letter] = ele;
                                  },
                                  className: 'letter-block',
                                  key: letter },
                              React.createElement(
                                  'p',
                                  { className: 'letter-title' },
                                  letter.toUpperCase()
                              ),
                              React.createElement(
                                  'div',
                                  null,
                                  newLangMap[letter].map(function (key) {
                                      return React.createElement(
                                          'span',
                                          {
                                              onClick: _this2.onLangItemClick.bind(_this2, key),
                                              className: classNames('lang-item', {
                                                  'selected': selectedLang === key,
                                                  'disabled': oppoLang === key
                                              }),
                                              key: key },
                                          langMap[key][propertyName]
                                      );
                                  })
                              )
                          );
                      })
                  ),
                  React.createElement(
                      'ol',
                      { className: 'letter-index-ol' },
                      filteredAlphabetArr.map(function (letter) {
                          return React.createElement(
                              'li',
                              {
                                  onClick: _this2.onLetterIndexClick.bind(_this2, letter),
                                  key: letter,
                                  className: 'letter-index' },
                              letter.toUpperCase()
                          );
                      })
                  )
              );
          }
      }, {
          key: 'onOftenLangItemClick',
          value: function onOftenLangItemClick(key) {
              if (this.props.isFrom) {
                  /* global _hmt */
                  _hmt.push(['_trackEvent', '首页', 'web端常用语种区域点击量（源语言）']);
              } else {
                  /* global _hmt */
                  _hmt.push(['_trackEvent', '首页', 'web端常用语种区域点击量（目标语言）']);
              }
              this.onLangItemClick(key);
          }
      }, {
          key: 'onLangItemClick',
          value: function onLangItemClick(key) {
              if (key === this.props.selectedLang || key === this.props.oppoLang) {
                  return;
              }
              this.props.onLangItemClick(key);
          }
      }, {
          key: 'onLetterIndexClick',
          value: function onLetterIndexClick(letter) {
              var langItemTop = this.alphabetEleObj[letter].getBoundingClientRect().top;
              var langTableTop = this.langTableRef.current.view.getBoundingClientRect().top;
              var langTableScrollTop = this.langTableRef.current.getScrollTop();
              this.langTableRef.current.scrollTop(langItemTop - langTableTop + langTableScrollTop);
          }
      }, {
          key: 'genNewLangMap',
  
          // 属性名为a-z
          value: function genNewLangMap() {
              var result = {};
              var propertyName = this.props.isShowEnLang ? 'enName' : 'pinyin';
              var popularityPropertyName = this.props.isShowEnLang ? 'en' : 'zh';
              alphabetArr.forEach(function (letter) {
                  var keysForThisLetter = Object.keys(langMap).filter(function (key) {
                      return langMap[key][propertyName].charAt(0).toLowerCase() === letter && key !== 'auto';
                  });
                  if (keysForThisLetter.length > 0) {
                      result[letter] = keysForThisLetter.sort(function (firstKey, secondKey) {
                          return langMap[firstKey].popularity[popularityPropertyName] - langMap[secondKey].popularity[popularityPropertyName];
                      });
                  }
              });
              return result;
          }
      }, {
          key: 'genSearchResult',
          value: function genSearchResult() {
              var query = this.state.query;
  
              query = query.trim().toLowerCase();
              if (!query) {
                  return [];
              }
              var filteredKeys = Object.keys(langMap).filter(function (key) {
                  return key !== 'auto';
              }).filter(function (key) {
                  var _langMap$key = langMap[key],
                      zhName = _langMap$key.zhName,
                      enName = _langMap$key.enName,
                      pinyin = _langMap$key.pinyin;
  
                  enName = enName.toLowerCase();
                  return zhName.indexOf(query) !== -1 || enName.indexOf(query) === 0 || pinyin.indexOf(query) === 0;
              });
              var sortedKeys = [];
              var newLangMap = this.genNewLangMap();
              alphabetArr.forEach(function (letter) {
                  if (Array.isArray(newLangMap[letter])) {
                      newLangMap[letter].forEach(function (key) {
                          if (filteredKeys.indexOf(key) !== -1) {
                              sortedKeys.push(key);
                          }
                      });
                  }
              });
              return sortedKeys;
          }
      }]);
  
      return LangPanel;
  }(Component);
  
  module.exports = LangPanel;

});
