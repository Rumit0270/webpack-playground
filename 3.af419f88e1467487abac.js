(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "TASX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sbe7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Vg22");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("l2sx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9At1");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ArtistDetail = /*#__PURE__*/function (_Component) {
  _inherits(ArtistDetail, _Component);

  var _super = _createSuper(ArtistDetail);

  function ArtistDetail() {
    _classCallCheck(this, ArtistDetail);

    return _super.apply(this, arguments);
  }

  _createClass(ArtistDetail, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.findArtist(this.props.params.id);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.params.id !== this.props.params.id) {
        this.props.findArtist(nextProps.params.id);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.resetArtist();
    }
  }, {
    key: "onDeleteClick",
    value: function onDeleteClick() {
      this.props.deleteArtist(this.props.params.id);
    }
  }, {
    key: "renderAlbums",
    value: function renderAlbums() {
      var albums = this.props.artist.albums;

      if (!albums || !albums.map) {
        return;
      }

      return albums.map(function (album) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card album",
          key: album.title
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card-image"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: album.image
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "card-title"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, album.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, album.copiesSold), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "copies sold")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, album.numberTracks), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "tracks"))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.artist) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Todo: implement \"FindArtist\" query");
      }

      var _this$props$artist = this.props.artist,
          name = _this$props$artist.name,
          age = _this$props$artist.age,
          genre = _this$props$artist.genre,
          image = _this$props$artist.image,
          yearsActive = _this$props$artist.yearsActive,
          netWorth = _this$props$artist.netWorth,
          labelName = _this$props$artist.labelName,
          _id = _this$props$artist._id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "spacer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/"
      }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/artists/".concat(_id, "/edit")
      }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.onDeleteClick.bind(this)
      }, "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "collection artist-detail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "collection-item header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Master of ", genre)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
        src: image,
        className: "right"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "collection-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, yearsActive), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Years Active"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "collection-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Years Old"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "collection-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "$", netWorth), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Net Worth"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "collection-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, labelName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Label"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "flex wrap"
      }, this.renderAlbums())));
    }
  }]);

  return ArtistDetail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var artists = _ref.artists;
  return {
    artist: artists.artist
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _actions__WEBPACK_IMPORTED_MODULE_3__)(ArtistDetail));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcnRpc3RzL0FydGlzdERldGFpbC5qcyJdLCJuYW1lcyI6WyJBcnRpc3REZXRhaWwiLCJwcm9wcyIsImZpbmRBcnRpc3QiLCJwYXJhbXMiLCJpZCIsIm5leHRQcm9wcyIsInJlc2V0QXJ0aXN0IiwiZGVsZXRlQXJ0aXN0IiwiYWxidW1zIiwiYXJ0aXN0IiwibWFwIiwiYWxidW0iLCJ0aXRsZSIsImltYWdlIiwiY29waWVzU29sZCIsIm51bWJlclRyYWNrcyIsIm5hbWUiLCJhZ2UiLCJnZW5yZSIsInllYXJzQWN0aXZlIiwibmV0V29ydGgiLCJsYWJlbE5hbWUiLCJfaWQiLCJvbkRlbGV0ZUNsaWNrIiwiYmluZCIsInJlbmRlckFsYnVtcyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImFydGlzdHMiLCJjb25uZWN0IiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7eUNBQ2lCO0FBQ25CLFdBQUtDLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQixLQUFLRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLEVBQXhDO0FBQ0Q7Ozs4Q0FFeUJDLFMsRUFBVztBQUNuQyxVQUFJQSxTQUFTLENBQUNGLE1BQVYsQ0FBaUJDLEVBQWpCLEtBQXdCLEtBQUtILEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsRUFBOUMsRUFBa0Q7QUFDaEQsYUFBS0gsS0FBTCxDQUFXQyxVQUFYLENBQXNCRyxTQUFTLENBQUNGLE1BQVYsQ0FBaUJDLEVBQXZDO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUNyQixXQUFLSCxLQUFMLENBQVdLLFdBQVg7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0wsS0FBTCxDQUFXTSxZQUFYLENBQXdCLEtBQUtOLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsRUFBMUM7QUFDRDs7O21DQUVjO0FB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QUNELENBRkQ7O0FBSWVvQiwwSEFBTyxDQUFDRixlQUFELEVBQWtCRyxxQ0FBbEIsQ0FBUCxDQUFrQzlCLFlBQWxDLENBQWYsRSIsImZpbGUiOiIzLmFmNDE5Zjg4ZTE0Njc0ODdhYmFjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5cbmNsYXNzIEFydGlzdERldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZpbmRBcnRpc3QodGhpcy5wcm9wcy5wYXJhbXMuaWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnBhcmFtcy5pZCAhPT0gdGhpcy5wcm9wcy5wYXJhbXMuaWQpIHtcbiAgICAgIHRoaXMucHJvcHMuZmluZEFydGlzdChuZXh0UHJvcHMucGFyYW1zLmlkKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlc2V0QXJ0aXN0KCk7XG4gIH1cblxuICBvbkRlbGV0ZUNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlQXJ0aXN0KHRoaXMucHJvcHMucGFyYW1zLmlkKTtcbiAgfVxuXG4gIHJlbmRlckFsYnVtcygpIHtcbiAgICBjb25zdCB7IGFsYnVtcyB9ID0gdGhpcy5wcm9wcy5hcnRpc3Q7XG5cbiAgICBpZiAoIWFsYnVtcyB8fCAhYWxidW1zLm1hcCkgeyByZXR1cm47IH1cblxuICAgIHJldHVybiBhbGJ1bXMubWFwKGFsYnVtID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBhbGJ1bVwiIGtleT17YWxidW0udGl0bGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2FsYnVtLmltYWdlfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICA8aDQ+e2FsYnVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoNT57YWxidW0uY29waWVzU29sZH08L2g1PlxuICAgICAgICAgICAgICA8aT5jb3BpZXMgc29sZDwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg1PnthbGJ1bS5udW1iZXJUcmFja3N9PC9oNT5cbiAgICAgICAgICAgICAgPGk+dHJhY2tzPC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuYXJ0aXN0KSB7IHJldHVybiA8ZGl2PlRvZG86IGltcGxlbWVudCBcIkZpbmRBcnRpc3RcIiBxdWVyeTwvZGl2PjsgfVxuXG4gICAgY29uc3QgeyBhcnRpc3Q6IHsgbmFtZSwgYWdlLCBnZW5yZSwgaW1hZ2UsIHllYXJzQWN0aXZlLCBuZXRXb3J0aCwgbGFiZWxOYW1lLCBfaWQgfSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkJhY2s8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89e2AvYXJ0aXN0cy8ke19pZH0vZWRpdGB9PkVkaXQ8L0xpbms+XG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5vbkRlbGV0ZUNsaWNrLmJpbmQodGhpcyl9PkRlbGV0ZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uIGFydGlzdC1kZXRhaWxcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtIGhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPntuYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxoNT5NYXN0ZXIgb2Yge2dlbnJlfTwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWFnZSBzcmM9e2ltYWdlfSBjbGFzc05hbWU9XCJyaWdodFwiIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtXCI+XG4gICAgICAgICAgICA8aDU+e3llYXJzQWN0aXZlfTwvaDU+XG4gICAgICAgICAgICA8cD48aT5ZZWFycyBBY3RpdmU8L2k+PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbVwiPlxuICAgICAgICAgICAgPGg1PnthZ2V9PC9oNT5cbiAgICAgICAgICAgIDxwPjxpPlllYXJzIE9sZDwvaT48L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtXCI+XG4gICAgICAgICAgICA8aDU+JHtuZXRXb3J0aH08L2g1PlxuICAgICAgICAgICAgPHA+PGk+TmV0IFdvcnRoPC9pPjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgIDxoNT57bGFiZWxOYW1lfTwvaDU+XG4gICAgICAgICAgICA8cD48aT5MYWJlbDwvaT48L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCB3cmFwXCI+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJBbGJ1bXMoKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBhcnRpc3RzIH0pID0+IHtcbiAgcmV0dXJuIHsgYXJ0aXN0OiBhcnRpc3RzLmFydGlzdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKEFydGlzdERldGFpbCk7XG4iXSwic291cmNlUm9vdCI6IiJ9