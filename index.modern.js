import React, { Fragment, Component } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

var Option = function Option(object) {
  if (typeof object === "string") {
    this.name = object || "";
    this.label = object || "";
    this.value = object || "";
    this.checked = false;
    this.defaultChecked = false;
    this.disabled = false;
    this.backgroundColor = "inherit";
  } else if (typeof object === "object") {
    this.id = (object === null || object === void 0 ? void 0 : object.id) || "";
    this.name = (object === null || object === void 0 ? void 0 : object.name) || (object === null || object === void 0 ? void 0 : object.label) || (object === null || object === void 0 ? void 0 : object.value) || "";
    this.label = (object === null || object === void 0 ? void 0 : object.label) || (object === null || object === void 0 ? void 0 : object.name) || (object === null || object === void 0 ? void 0 : object.value) || "";
    this.value = (object === null || object === void 0 ? void 0 : object.value) || (object === null || object === void 0 ? void 0 : object.label) || (object === null || object === void 0 ? void 0 : object.name) || "";
    this.checked = (object === null || object === void 0 ? void 0 : object.checked) || false;
    this.defaultChecked = (object === null || object === void 0 ? void 0 : object.defaultChecked) || false;
    this.disabled = (object === null || object === void 0 ? void 0 : object.disabled) || false;
    this.backgroundColor = (object === null || object === void 0 ? void 0 : object.backgroundColor) || "inherit";
  }
};
var Options = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Options, _Array);

  function Options(array) {
    var _this;

    _this = _Array.call(this, array) || this;

    _this.pop();

    for (var i = 0; i < (array === null || array === void 0 ? void 0 : array.length); i++) {
      var element = new Option(array[i]);

      _this.push(element);
    }

    return _this;
  }

  var _proto = Options.prototype;

  _proto.setDefault = function setDefault(selected) {
    for (var i = 0; i < selected.length; i++) {
      var option = selected[i];
      this.setChecked(option);
    }
  };

  _proto.setChecked = function setChecked(option) {
    var checkValue = this.valueExists(option);

    if ((checkValue === null || checkValue === void 0 ? void 0 : checkValue.exists) === true) {
      this[checkValue.index].checked = true;
    } else if ((checkValue === null || checkValue === void 0 ? void 0 : checkValue.exists) === false) {
      this[checkValue.index].checked = false;
    }
  };

  _proto.toggleChecked = function toggleChecked(index) {
    this[index].checked = !this[index].checked;
  };

  _proto.valueExists = function valueExists(option) {
    var option_01 = option;

    if (!(option instanceof Option)) {
      option_01 = new Option(option);
    }

    var exists = false;
    var index = undefined;

    for (var i = 0; i < (this === null || this === void 0 ? void 0 : this.length); i++) {
      var _this$i, _option_, _this$i2, _option_2;

      console.log(((_this$i = this[i]) === null || _this$i === void 0 ? void 0 : _this$i.value) === ((_option_ = option_01) === null || _option_ === void 0 ? void 0 : _option_.value));

      if (((_this$i2 = this[i]) === null || _this$i2 === void 0 ? void 0 : _this$i2.value) === ((_option_2 = option_01) === null || _option_2 === void 0 ? void 0 : _option_2.value)) {
        exists = true;
        index = i;
        break;
      }
    }

    return {
      exists: exists,
      index: index
    };
  };

  _proto.setSelected = function setSelected(option) {
    var option_01 = new Option(option);

    if (this !== undefined && Array.isArray(this)) {
      for (var i = 0; i < (this === null || this === void 0 ? void 0 : this.length); i++) {
        var _this$i3;

        if (((_this$i3 = this[i]) === null || _this$i3 === void 0 ? void 0 : _this$i3.value) === (option_01 === null || option_01 === void 0 ? void 0 : option_01.value)) {
          this[i].checked = true;
        } else {
          this[i].checked = false;
        }
      }

      return this;
    }
  };

  _proto.returnSelected = function returnSelected() {
    var filtered = [];

    for (var i = 0; i < this.length; i++) {
      if (this[i].checked === true) {
        filtered.push(this[i].label);
      }
    }

    return filtered;
  };

  Options.getSelected = function getSelected(array) {
    var filtered = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i].checked === true) {
        filtered.push(array[i].label);
      }
    }

    return filtered;
  };

  Options.deleteProps = function deleteProps(array, optionProps) {
    var filtered = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i].checked === true) {
        for (var key in array[i]) {
          if (!optionProps.includes(key)) {
            delete array[i][key];
          }
        }

        filtered.push(array[i]);
      }
    }

    return filtered;
  };

  return Options;
}( /*#__PURE__*/_wrapNativeSuper(Array));

var RadioButtons = /*#__PURE__*/function (_Component) {
  _inheritsLoose(RadioButtons, _Component);

  function RadioButtons(props) {
    var _this$props, _this$props2;

    var _this;

    _this = _Component.call(this, props) || this;

    _this.componentDidMount = function () {
      var options = _this.state.options;

      if (!(options instanceof Options)) {
        options = new Options(_this.state.options);
      }

      if (_this.props.selected) {
        options.setSelected(_this.props.selected[0]);
      }

      _this.setState({
        options: options
      });
    };

    _this.getSelected = function (option, index) {
      var options = _this.state.options;

      if (!(options instanceof Options)) {
        options = new Options(_this.state.options);
      }

      options.setSelected(option);

      _this.setState({
        options: options
      });

      var newOptions = new Options(options);

      if (_this.props.getSelected) {
        var result = Options.getSelected(newOptions);

        _this.props.getSelected(result);
      }

      if (_this.props.getSelectedOptions) {
        if (_this.props.optionProps) {
          var _result = Options.deleteProps(newOptions, _this.props.optionProps);

          _this.props.getSelectedOptions(_result);
        } else {
          _this.props.getSelectedOptions(newOptions);
        }
      }
    };

    _this.state = {
      options: new Options((_this$props = _this.props) === null || _this$props === void 0 ? void 0 : _this$props.options) || [],
      prevOptions: new Options((_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.options) || []
    };
    return _this;
  }

  var _proto = RadioButtons.prototype;

  _proto.render = function render() {
    var _this$props3,
        _this$props4,
        _this$props5,
        _this$props6,
        _this$props7,
        _this$state,
        _this$state$options,
        _this$state$options$m,
        _this2 = this;

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: (((_this$props3 = this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.containerWidth) || "w-fill") + " " + (((_this$props4 = this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.direction) === "rows" ? "flex flex-row justify-start content-start items-start" : ((_this$props5 = this.props) === null || _this$props5 === void 0 ? void 0 : _this$props5.direction) === "columns" ? "flex flex-col" : "flex flex-col justify-start content-start items-start") + " " + (((_this$props6 = this.props) === null || _this$props6 === void 0 ? void 0 : _this$props6.containerClass) || ""),
      style: (_this$props7 = this.props) === null || _this$props7 === void 0 ? void 0 : _this$props7.containerStyle
    }, (_this$state = this.state) === null || _this$state === void 0 ? void 0 : (_this$state$options = _this$state.options) === null || _this$state$options === void 0 ? void 0 : (_this$state$options$m = _this$state$options.map) === null || _this$state$options$m === void 0 ? void 0 : _this$state$options$m.call(_this$state$options, function (option, index) {
      var _this2$props, _this2$props2, _this2$props3;

      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "w-fit px-1 flex flex-row justify-center content-center items-center",
        onClick: function onClick() {
          _this2.getSelected(option, index);
        },
        style: _extends({
          backgroundColor: "" + option.backgroundColor
        }, _this2.props.wrapperStyle)
      }, /*#__PURE__*/React.createElement("input", {
        type: "radio",
        className: "pr-2 " + ((_this2$props = _this2.props) === null || _this2$props === void 0 ? void 0 : _this2$props.checkboxClass),
        name: "" + (option === null || option === void 0 ? void 0 : option.name),
        label: "" + (option === null || option === void 0 ? void 0 : option.label),
        value: option === null || option === void 0 ? void 0 : option.value,
        checked: option === null || option === void 0 ? void 0 : option.checked,
        defaultChecked: option === null || option === void 0 ? void 0 : option.defaultChecked,
        disabled: (_this2$props2 = _this2.props) === null || _this2$props2 === void 0 ? void 0 : _this2$props2.disabled
      }), /*#__PURE__*/React.createElement("label", {
        className: "pl-2 " + ((_this2$props3 = _this2.props) === null || _this2$props3 === void 0 ? void 0 : _this2$props3.labelClass)
      }, "" + ((option === null || option === void 0 ? void 0 : option.label) || (option === null || option === void 0 ? void 0 : option.name) || (option === null || option === void 0 ? void 0 : option.value))));
    })));
  };

  return RadioButtons;
}(Component);

RadioButtons.getDerivedStateFromProps = function (props, state) {
  if (state.prevOptions !== props.options) {
    state.options = props.options;
    state.prevOptions = props.options;
    return state;
  }

  return null;
};

var Option$1 = function Option(object) {
  if (typeof object === "string") {
    this.name = object || "";
    this.label = object || "";
    this.value = object || "";
    this.checked = false;
    this.defaultChecked = false;
    this.disabled = false;
    this.backgroundColor = "inherit";
  } else if (typeof object === "object") {
    this.id = (object === null || object === void 0 ? void 0 : object.id) || "";
    this.name = (object === null || object === void 0 ? void 0 : object.name) || (object === null || object === void 0 ? void 0 : object.label) || (object === null || object === void 0 ? void 0 : object.value) || "";
    this.label = (object === null || object === void 0 ? void 0 : object.label) || (object === null || object === void 0 ? void 0 : object.name) || (object === null || object === void 0 ? void 0 : object.value) || "";
    this.value = (object === null || object === void 0 ? void 0 : object.value) || (object === null || object === void 0 ? void 0 : object.label) || (object === null || object === void 0 ? void 0 : object.name) || "";
    this.checked = (object === null || object === void 0 ? void 0 : object.checked) || false;
    this.defaultChecked = (object === null || object === void 0 ? void 0 : object.defaultChecked) || false;
    this.disabled = (object === null || object === void 0 ? void 0 : object.disabled) || false;
    this.backgroundColor = (object === null || object === void 0 ? void 0 : object.backgroundColor) || "inherit";
  }
};
var Options$1 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Options, _Array);

  function Options(array) {
    var _this;

    _this = _Array.call(this, array) || this;

    _this.pop();

    for (var i = 0; i < (array === null || array === void 0 ? void 0 : array.length); i++) {
      var element = new Option$1(array[i]);

      _this.push(element);
    }

    return _this;
  }

  var _proto = Options.prototype;

  _proto.setDefault = function setDefault(selected) {
    for (var i = 0; i < selected.length; i++) {
      var option = selected[i];
      this.setChecked(option);
    }
  };

  _proto.setChecked = function setChecked(option) {
    var checkValue = this.valueExists(option);

    if ((checkValue === null || checkValue === void 0 ? void 0 : checkValue.exists) === true) {
      this[checkValue.index].checked = true;
    } else if ((checkValue === null || checkValue === void 0 ? void 0 : checkValue.exists) === false) {
      this[checkValue.index].checked = false;
    }
  };

  _proto.toggleChecked = function toggleChecked(index) {
    this[index].checked = !this[index].checked;
  };

  _proto.valueExists = function valueExists(option) {
    var option_01 = option;

    if (!(option instanceof Option$1)) {
      option_01 = new Option$1(option);
    }

    var exists = false;
    var index = undefined;

    for (var i = 0; i < (this === null || this === void 0 ? void 0 : this.length); i++) {
      var _this$i, _option_, _this$i2, _option_2;

      console.log(((_this$i = this[i]) === null || _this$i === void 0 ? void 0 : _this$i.value) === ((_option_ = option_01) === null || _option_ === void 0 ? void 0 : _option_.value));

      if (((_this$i2 = this[i]) === null || _this$i2 === void 0 ? void 0 : _this$i2.value) === ((_option_2 = option_01) === null || _option_2 === void 0 ? void 0 : _option_2.value)) {
        exists = true;
        index = i;
        break;
      }
    }

    return {
      exists: exists,
      index: index
    };
  };

  _proto.setSelected = function setSelected(option) {
    var option_01 = new Option$1(option);

    if (this !== undefined && Array.isArray(this)) {
      var exists = false;
      var index = undefined;

      for (var i = 0; i < (this === null || this === void 0 ? void 0 : this.length); i++) {
        var _this$i3;

        if (((_this$i3 = this[i]) === null || _this$i3 === void 0 ? void 0 : _this$i3.value) === (option_01 === null || option_01 === void 0 ? void 0 : option_01.value)) {
          exists = true;
          index = i;
          break;
        }
      }

      if (exists === false) {
        option_01.checked = true;
        this.push(option_01);
      } else if (exists === true) {
        option_01.checked = false;
        this.splice(index, 1);
      }

      return this;
    }
  };

  _proto.returnSelected = function returnSelected() {
    var filtered = [];

    for (var i = 0; i < this.length; i++) {
      if (this[i].checked === true) {
        filtered.push(this[i].label);
      }
    }

    return filtered;
  };

  Options.getSelected = function getSelected(array) {
    var filtered = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i].checked === true) {
        filtered.push(array[i].label);
      }
    }

    return filtered;
  };

  Options.deleteProps = function deleteProps(array, optionProps) {
    var filtered = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i].checked === true) {
        for (var key in array[i]) {
          if (!optionProps.includes(key)) {
            delete array[i][key];
          }
        }

        filtered.push(array[i]);
      }
    }

    return filtered;
  };

  return Options;
}( /*#__PURE__*/_wrapNativeSuper(Array));
var Selected = /*#__PURE__*/function (_Options) {
  _inheritsLoose(Selected, _Options);

  function Selected(array) {
    var _this2;

    _this2 = _Options.call(this, array) || this;

    _this2.pop();

    for (var i = 0; i < (array === null || array === void 0 ? void 0 : array.length); i++) {
      var element = new Option$1(array[i]);
      element.checked = true;
      element.defaultChecked = true;

      _this2.push(element);
    }

    return _this2;
  }

  return Selected;
}(Options$1);

var Checkboxes = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Checkboxes, _Component);

  function Checkboxes(props) {
    var _this$props2, _this$props3, _this$props4, _this$props5;

    var _this;

    _this = _Component.call(this, props) || this;

    _this.componentDidMount = function () {
      var _this$props;

      var options = _this.state.options;

      if (!(options instanceof Options$1)) {
        options = new Options$1(_this.state.options);
      }

      if ((_this$props = _this.props) !== null && _this$props !== void 0 && _this$props.selected) {
        var _this$state;

        options.setDefault((_this$state = _this.state) === null || _this$state === void 0 ? void 0 : _this$state.selected);
      }

      _this.setState({
        options: options
      });
    };

    _this.getSelected = function (option, index) {
      var selected = _this.state.selected;

      if (!(selected instanceof Selected)) {
        selected = new Selected(_this.state.selected);
      }

      selected.setSelected(option);
      var options = _this.state.options;

      if (!(options instanceof Options$1)) {
        options = new Options$1(_this.state.options);
      }

      options.toggleChecked(index);

      _this.setState({
        options: options,
        selected: selected
      });

      var newOptions = new Options$1(selected);

      if (_this.props.getSelected) {
        var result = Options$1.getSelected(newOptions);

        _this.props.getSelected(result);
      }

      if (_this.props.getSelectedOptions) {
        if (_this.props.optionProps) {
          var _result = Options$1.deleteProps(newOptions, _this.props.optionProps);

          _this.props.getSelectedOptions(_result);
        } else {
          _this.props.getSelectedOptions(newOptions);
        }
      }
    };

    _this.state = {
      options: new Options$1((_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.options) || [],
      selected: new Selected((_this$props3 = _this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.selected) || [],
      prevOptions: new Options$1((_this$props4 = _this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.options) || [],
      prevSelected: new Selected((_this$props5 = _this.props) === null || _this$props5 === void 0 ? void 0 : _this$props5.selected) || []
    };
    return _this;
  }

  var _proto = Checkboxes.prototype;

  _proto.render = function render() {
    var _this$props6,
        _this$props7,
        _this$props8,
        _this$props9,
        _this$props10,
        _this$state2,
        _this$state2$options,
        _this$state2$options$,
        _this2 = this;

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: (((_this$props6 = this.props) === null || _this$props6 === void 0 ? void 0 : _this$props6.containerWidth) || "w-fill") + " " + (((_this$props7 = this.props) === null || _this$props7 === void 0 ? void 0 : _this$props7.direction) === "rows" ? "flex flex-row justify-start content-start items-start" : ((_this$props8 = this.props) === null || _this$props8 === void 0 ? void 0 : _this$props8.direction) === "columns" ? "flex flex-col" : "flex flex-col justify-start content-start items-start") + " " + (((_this$props9 = this.props) === null || _this$props9 === void 0 ? void 0 : _this$props9.containerClass) || ""),
      style: (_this$props10 = this.props) === null || _this$props10 === void 0 ? void 0 : _this$props10.containerStyle
    }, (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : (_this$state2$options = _this$state2.options) === null || _this$state2$options === void 0 ? void 0 : (_this$state2$options$ = _this$state2$options.map) === null || _this$state2$options$ === void 0 ? void 0 : _this$state2$options$.call(_this$state2$options, function (option, index) {
      var _this2$props, _this2$props2, _this2$props3;

      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "w-fit px-1 flex flex-row justify-center content-center items-center",
        onClick: function onClick() {
          _this2.getSelected(option, index);
        },
        style: _extends({
          backgroundColor: "" + option.backgroundColor
        }, _this2.props.wrapperStyle)
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        className: "pr-2 " + ((_this2$props = _this2.props) === null || _this2$props === void 0 ? void 0 : _this2$props.checkboxClass),
        name: "" + (option === null || option === void 0 ? void 0 : option.name),
        label: "" + (option === null || option === void 0 ? void 0 : option.label),
        value: option === null || option === void 0 ? void 0 : option.value,
        checked: option === null || option === void 0 ? void 0 : option.checked,
        defaultChecked: option === null || option === void 0 ? void 0 : option.defaultChecked,
        disabled: (_this2$props2 = _this2.props) === null || _this2$props2 === void 0 ? void 0 : _this2$props2.disabled
      }), /*#__PURE__*/React.createElement("label", {
        className: "pl-2 " + ((_this2$props3 = _this2.props) === null || _this2$props3 === void 0 ? void 0 : _this2$props3.labelClass)
      }, "" + ((option === null || option === void 0 ? void 0 : option.label) || (option === null || option === void 0 ? void 0 : option.name) || (option === null || option === void 0 ? void 0 : option.value))));
    })));
  };

  return Checkboxes;
}(Component);

Checkboxes.getDerivedStateFromProps = function (props, state) {
  if (state.prevSelected !== props.selected || state.prevOptions !== props.options) {
    if (state.prevSelected !== props.selected) {
      state.selected = props.selected;
      state.prevSelected = props.selected;
    }

    if (state.prevOptions !== props.options) {
      state.options = props.options;
      state.prevOptions = props.options;
    }

    return state;
  }

  return null;
};

export { Checkboxes, RadioButtons };
//# sourceMappingURL=index.modern.js.map
