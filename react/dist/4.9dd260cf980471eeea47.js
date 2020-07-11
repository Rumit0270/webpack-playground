(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "d/m/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sbe7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Vg22");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9At1");
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





var ArtistEdit = /*#__PURE__*/function (_Component) {
  _inherits(ArtistEdit, _Component);

  var _super = _createSuper(ArtistEdit);

  function ArtistEdit(props) {
    var _this;

    _classCallCheck(this, ArtistEdit);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(ArtistEdit, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.findArtist(this.props.params.id);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var artist = _ref.artist;

      if (artist) {
        var name = artist.name,
            age = artist.age,
            yearsActive = artist.yearsActive,
            genre = artist.genre;
        this.setState({
          name: name,
          age: age,
          yearsActive: yearsActive,
          genre: genre
        });
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      if (nextProps.params.id !== this.props.params.id) {
        this.props.findArtist(nextProps.params.id);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearError();
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      this.props.editArtist(this.props.params.id, this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.name,
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        placeholder: "Name"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.age,
        onChange: function onChange(e) {
          return _this2.setState({
            age: e.target.value
          });
        },
        placeholder: "Age"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.yearsActive,
        onChange: function onChange(e) {
          return _this2.setState({
            yearsActive: e.target.value
          });
        },
        placeholder: "Years Active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.genre,
        onChange: function onChange(e) {
          return _this2.setState({
            genre: e.target.value
          });
        },
        placeholder: "Genre"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "has-error"
      }, this.props.errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn"
      }, "Submit"));
    }
  }]);

  return ArtistEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    artist: state.artists.artist,
    errorMessage: state.errors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _actions__WEBPACK_IMPORTED_MODULE_2__)(ArtistEdit));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcnRpc3RzL0FydGlzdEVkaXQuanMiXSwibmFtZXMiOlsiQXJ0aXN0RWRpdCIsInByb3BzIiwic3RhdGUiLCJmaW5kQXJ0aXN0IiwicGFyYW1zIiwiaWQiLCJhcnRpc3QiLCJuYW1lIiwiYWdlIiwieWVhcnNBY3RpdmUiLCJnZW5yZSIsInNldFN0YXRlIiwibmV4dFByb3BzIiwiY2xlYXJFcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QXJ0aXN0Iiwib25TdWJtaXQiLCJiaW5kIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiYXJ0aXN0cyIsImVycm9ycyIsImNvbm5lY3QiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxVOzs7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFIaUI7QUFJbEI7Ozs7eUNBRW9CO0FBQ25CLFdBQUtELEtBQUwsQ0FBV0UsVUFBWCxDQUFzQixLQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JDLEVBQXhDO0FBQ0Q7OztvREFFcUM7QUFBQSxVQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQ3BDLFVBQUlBLE1BQUosRUFBWTtBQUFBLFlBQ0ZDLElBREUsR0FDZ0NELE1BRGhDLENBQ0ZDLElBREU7QUFBQSxZQUNJQyxHQURKLEdBQ2dDRixNQURoQyxDQUNJRSxHQURKO0FBQUEsWUFDU0MsV0FEVCxHQUNnQ0gsTUFEaEMsQ0FDU0csV0FEVDtBQUFBLFlBQ3NCQyxLQUR0QixHQUNnQ0osTUFEaEMsQ0FDc0JJLEtBRHRCO0FBR1YsYUFBS0MsUUFBTCxDQUFjO0FBQUVK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Q0FBa0M3QixVQUFsQyxDQUFmLEUiLCJmaWxlIjoiNC45ZGQyNjBjZjk4MDQ3MWVlZWE0Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcblxuY2xhc3MgQXJ0aXN0RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmluZEFydGlzdCh0aGlzLnByb3BzLnBhcmFtcy5pZCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgYXJ0aXN0IH0pIHtcbiAgICBpZiAoYXJ0aXN0KSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGFnZSwgeWVhcnNBY3RpdmUsIGdlbnJlIH0gPSBhcnRpc3Q7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lLCBhZ2UsIHllYXJzQWN0aXZlLCBnZW5yZSB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMucGFyYW1zLmlkICE9PSB0aGlzLnByb3BzLnBhcmFtcy5pZCkge1xuICAgICAgdGhpcy5wcm9wcy5maW5kQXJ0aXN0KG5leHRQcm9wcy5wYXJhbXMuaWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpO1xuICB9XG5cbiAgb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5wcm9wcy5lZGl0QXJ0aXN0KHRoaXMucHJvcHMucGFyYW1zLmlkLCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgYWdlOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUueWVhcnNBY3RpdmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgeWVhcnNBY3RpdmU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZZWFycyBBY3RpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZW5yZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBnZW5yZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdlbnJlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYXJ0aXN0OiBzdGF0ZS5hcnRpc3RzLmFydGlzdCxcbiAgICBlcnJvck1lc3NhZ2U6IHN0YXRlLmVycm9yc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKEFydGlzdEVkaXQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==