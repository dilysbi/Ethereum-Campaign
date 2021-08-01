/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/campaigns/show";
exports.ids = ["pages/campaigns/show"];
exports.modules = {

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Volumes/Root/WORK/BLOCKCHAIN/Ethereum/kickstart/solidity/components/ContributeForm.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nclass ContributeForm extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      value: \"\",\n      errorMessage: \"\",\n      loading: false\n    });\n\n    _defineProperty(this, \"onSubmit\", async event => {\n      event.preventDefault();\n      this.setState({\n        loading: true,\n        errorMessage: \"\"\n      });\n\n      try {\n        const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.address);\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();\n        await campaign.methods.contribute().send({\n          from: accounts[0],\n          value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(this.state.value, \"ether\")\n        });\n        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.replaceRoute(`/campaigns/${this.props.address}`);\n      } catch (error) {\n        this.setState({\n          loading: false,\n          errorMessage: error.message\n        });\n      }\n\n      this.setState({\n        loading: false,\n        errorMessage: \"\"\n      });\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {\n      onSubmit: this.onSubmit,\n      error: !!this.state.errorMessage,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Amount to Contribute\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n          value: this.state.value,\n          onChange: event => this.setState({\n            value: event.target.value\n          }),\n          label: \"ether\",\n          labelPosition: \"right\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {\n        error: true,\n        header: \"Oops!\",\n        content: this.state.errorMessage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n          primary: true,\n          loading: this.state.loading,\n          children: \"Contribute!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzPzBiMjAiXSwibmFtZXMiOlsiQ29udHJpYnV0ZUZvcm0iLCJDb21wb25lbnQiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiYWNjb3VudHMiLCJ3ZWIzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInN0YXRlIiwiUm91dGVyIiwiZXJyb3IiLCJtZXNzYWdlIiwicmVuZGVyIiwib25TdWJtaXQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQU4sU0FBNkJDLDRDQUE3QixDQUF1QztBQUFBO0FBQUE7O0FBQUEsbUNBQzdCO0FBQ05DLFdBQUssRUFBRSxFQUREO0FBRU5DLGtCQUFZLEVBQUUsRUFGUjtBQUdOQyxhQUFPLEVBQUU7QUFISCxLQUQ2Qjs7QUFBQSxzQ0FPMUIsTUFBT0MsS0FBUCxJQUFpQjtBQUMxQkEsV0FBSyxDQUFDQyxjQUFOO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQUVILGVBQU8sRUFBRSxJQUFYO0FBQWlCRCxvQkFBWSxFQUFFO0FBQS9CLE9BQWQ7O0FBRUEsVUFBSTtBQUNGLGNBQU1LLFFBQVEsR0FBR0MsMkRBQVEsQ0FBQyxLQUFLQyxLQUFMLENBQVdDLE9BQVosQ0FBekI7QUFFQSxjQUFNQyxRQUFRLEdBQUcsTUFBTUMsbUVBQUEsRUFBdkI7QUFFQSxjQUFNTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixDQUFtQztBQUN2Q0MsY0FBSSxFQUFFTCxRQUFRLENBQUMsQ0FBRCxDQUR5QjtBQUV2Q1YsZUFBSyxFQUFFVywrREFBQSxDQUFpQixLQUFLSyxLQUFMLENBQVdoQixLQUE1QixFQUFtQyxPQUFuQztBQUZnQyxTQUFuQyxDQUFOO0FBS0FpQixnRUFBQSxDQUFxQixjQUFhLEtBQUtULEtBQUwsQ0FBV0MsT0FBUSxFQUFyRDtBQUNELE9BWEQsQ0FXRSxPQUFPUyxLQUFQLEVBQWM7QUFDZCxhQUFLYixRQUFMLENBQWM7QUFBRUgsaUJBQU8sRUFBRSxLQUFYO0FBQWtCRCxzQkFBWSxFQUFFaUIsS0FBSyxDQUFDQztBQUF0QyxTQUFkO0FBQ0Q7O0FBQ0QsV0FBS2QsUUFBTCxDQUFjO0FBQUVILGVBQU8sRUFBRSxLQUFYO0FBQWtCRCxvQkFBWSxFQUFFO0FBQWhDLE9BQWQ7QUFDRCxLQTFCb0M7QUFBQTs7QUE0QnJDbUIsUUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBS0MsUUFBckI7QUFBK0IsV0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLTCxLQUFMLENBQVdmLFlBQW5EO0FBQUEsOEJBQ0UsOERBQUMseURBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLG9EQUFEO0FBQ0UsZUFBSyxFQUFFLEtBQUtlLEtBQUwsQ0FBV2hCLEtBRHBCO0FBRUUsa0JBQVEsRUFBR0csS0FBRCxJQUFXLEtBQUtFLFFBQUwsQ0FBYztBQUFFTCxpQkFBSyxFQUFFRyxLQUFLLENBQUNtQixNQUFOLENBQWF0QjtBQUF0QixXQUFkLENBRnZCO0FBR0UsZUFBSyxFQUFDLE9BSFI7QUFJRSx1QkFBYSxFQUFDO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSw4REFBQyxzREFBRDtBQUFTLGFBQUssTUFBZDtBQUFlLGNBQU0sRUFBQyxPQUF0QjtBQUE4QixlQUFPLEVBQUUsS0FBS2dCLEtBQUwsQ0FBV2Y7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLGVBV0UsOERBQUMseURBQUQ7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFRLGlCQUFPLE1BQWY7QUFBZ0IsaUJBQU8sRUFBRSxLQUFLZSxLQUFMLENBQVdkLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBaUJEOztBQTlDb0M7O0FBaUR2QywrREFBZUosY0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuXG5jbGFzcyBDb250cmlidXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIlwiLFxuICAgIGVycm9yTWVzc2FnZTogXCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKHRoaXMuc3RhdGUudmFsdWUsIFwiZXRoZXJcIiksXG4gICAgICB9KTtcblxuICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPkFtb3VudCB0byBDb250cmlidXRlPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5Db250cmlidXRlITwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ }),

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Volumes/Root/WORK/BLOCKCHAIN/Ethereum/kickstart/solidity/pages/campaigns/show.js\";\n\n\n\n\n\n\n\n\nclass CampaignShow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  static async getInitialProps(props) {\n    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(props.query.address);\n    const summary = await campaign.methods.getSummary().call();\n    return {\n      address: props.query.address,\n      minimumContribution: summary[0],\n      balance: summary[1],\n      requestsCount: summary[2],\n      approversCount: summary[3],\n      manager: summary[4]\n    };\n  }\n\n  renderCard() {\n    const {\n      balance,\n      manager,\n      minimumContribution,\n      requestsCount,\n      approversCount\n    } = this.props;\n    const items = [{\n      header: manager,\n      meta: \"Address of Manager\",\n      description: \"The manager created this campaign and can request balance.\",\n      style: {\n        overflowWrap: 'break-word'\n      }\n    }, {\n      header: minimumContribution,\n      meta: \"Minimum Contribution (wei)\",\n      description: \"Your must contribute at least this much wei to become an approver\",\n      style: {\n        overflowWrap: 'break-word'\n      }\n    }, {\n      header: requestsCount,\n      meta: \"Number of Requests\",\n      description: \"A request tries to withdraw money from the contract.\",\n      style: {\n        overflowWrap: 'break-word'\n      }\n    }, {\n      header: approversCount,\n      meta: \"Address of Approvers\",\n      description: \"Number of people who have already donated to campaign.\",\n      style: {\n        overflowWrap: 'break-word'\n      }\n    }, {\n      header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.utils.fromWei(balance, 'ether') + \" (ether)\",\n      meta: \"Campaign balance (ether)\",\n      description: \"The balance is how much money this campaign has left to spend.\"\n    }];\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {\n      items: items\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this);\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Campaign Detail\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {\n            width: 10,\n            children: this.renderCard()\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {\n            width: 6,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__.default, {\n              address: this.props.address\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_7__.Link, {\n              route: `/campaigns/${this.props.address}/requests`,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                  primary: true,\n                  children: \"View Requests\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz80Zjg1Il0sIm5hbWVzIjpbIkNhbXBhaWduU2hvdyIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsInN1bW1hcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJyZW5kZXJDYXJkIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsIndlYjMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQU4sU0FBMkJDLDRDQUEzQixDQUFxQztBQUNuQyxlQUFhQyxlQUFiLENBQTZCQyxLQUE3QixFQUFvQztBQUNsQyxVQUFNQyxRQUFRLEdBQUdDLDJEQUFRLENBQUNGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxPQUFiLENBQXpCO0FBRUEsVUFBTUMsT0FBTyxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsVUFBakIsR0FBOEJDLElBQTlCLEVBQXRCO0FBRUEsV0FBTztBQUNMSixhQUFPLEVBQUVKLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxPQURoQjtBQUVMSyx5QkFBbUIsRUFBRUosT0FBTyxDQUFDLENBQUQsQ0FGdkI7QUFHTEssYUFBTyxFQUFFTCxPQUFPLENBQUMsQ0FBRCxDQUhYO0FBSUxNLG1CQUFhLEVBQUVOLE9BQU8sQ0FBQyxDQUFELENBSmpCO0FBS0xPLG9CQUFjLEVBQUVQLE9BQU8sQ0FBQyxDQUFELENBTGxCO0FBTUxRLGFBQU8sRUFBRVIsT0FBTyxDQUFDLENBQUQ7QUFOWCxLQUFQO0FBUUQ7O0FBRURTLFlBQVUsR0FBRztBQUNYLFVBQU07QUFDSkosYUFESTtBQUVKRyxhQUZJO0FBR0pKLHlCQUhJO0FBSUpFLG1CQUpJO0FBS0pDO0FBTEksUUFNRixLQUFLWixLQU5UO0FBUUEsVUFBTWUsS0FBSyxHQUFHLENBQ1o7QUFDRUMsWUFBTSxFQUFFSCxPQURWO0FBRUVJLFVBQUksRUFBRSxvQkFGUjtBQUdFQyxpQkFBVyxFQUFFLDREQUhmO0FBSUVDLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBSlQsS0FEWSxFQU9aO0FBQ0VKLFlBQU0sRUFBRVAsbUJBRFY7QUFFRVEsVUFBSSxFQUFFLDRCQUZSO0FBR0VDLGlCQUFXLEVBQUUsbUVBSGY7QUFJRUMsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7QUFBaEI7QUFKVCxLQVBZLEVBYVo7QUFDRUosWUFBTSxFQUFFTCxhQURWO0FBRUVNLFVBQUksRUFBRSxvQkFGUjtBQUdFQyxpQkFBVyxFQUFFLHNEQUhmO0FBSUVDLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBSlQsS0FiWSxFQW1CWjtBQUNFSixZQUFNLEVBQUVKLGNBRFY7QUFFRUssVUFBSSxFQUFFLHNCQUZSO0FBR0VDLGlCQUFXLEVBQUUsd0RBSGY7QUFJRUMsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7QUFBaEI7QUFKVCxLQW5CWSxFQXlCWjtBQUNFSixZQUFNLEVBQUVLLGlFQUFBLENBQW1CWCxPQUFuQixFQUE0QixPQUE1QixJQUF1QyxVQURqRDtBQUVFTyxVQUFJLEVBQUUsMEJBRlI7QUFHRUMsaUJBQVcsRUFBRTtBQUhmLEtBekJZLENBQWQ7QUErQkEsd0JBQVEsOERBQUMseURBQUQ7QUFBWSxXQUFLLEVBQUVIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQUNEOztBQUVETyxRQUFNLEdBQUc7QUFDUCx3QkFDRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxtREFBRDtBQUFBLGdDQUNFLDhEQUFDLHVEQUFEO0FBQUEsa0NBQ0UsOERBQUMsMERBQUQ7QUFBYSxpQkFBSyxFQUFFLEVBQXBCO0FBQUEsc0JBQ0csS0FBS1IsVUFBTDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSw4REFBQywwREFBRDtBQUFhLGlCQUFLLEVBQUUsQ0FBcEI7QUFBQSxtQ0FDRSw4REFBQywrREFBRDtBQUFnQixxQkFBTyxFQUFFLEtBQUtkLEtBQUwsQ0FBV0k7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0UsOERBQUMsdURBQUQ7QUFBQSxpQ0FDRSw4REFBQywwREFBRDtBQUFBLG1DQUNFLDhEQUFDLHlDQUFEO0FBQU0sbUJBQUssRUFBRyxjQUFhLEtBQUtKLEtBQUwsQ0FBV0ksT0FBUSxXQUE5QztBQUFBLHFDQUNFO0FBQUEsdUNBQ0UsOERBQUMscURBQUQ7QUFBUSx5QkFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXdCRDs7QUFwRmtDOztBQXVGckMsK0RBQWVQLFlBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm1cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XG5cbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuICAgIFxuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcbiAgICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXG4gICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcbiAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxuICAgIH07ICBcbiAgfVxuXG4gIHJlbmRlckNhcmQoKSB7XG4gICAgY29uc3QgeyBcbiAgICAgIGJhbGFuY2UsXG4gICAgICBtYW5hZ2VyLFxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgIHJlcXVlc3RzQ291bnQsXG4gICAgICBhcHByb3ZlcnNDb3VudFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIFxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIHJlcXVlc3QgYmFsYW5jZS5cIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgICBtZXRhOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyXCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC5cIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcbiAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIEFwcHJvdmVyc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOdW1iZXIgb2YgcGVvcGxlIHdobyBoYXZlIGFscmVhZHkgZG9uYXRlZCB0byBjYW1wYWlnbi5cIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfSxcbiAgICAgIH0sIFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCAnZXRoZXInKSArIFwiIChldGhlcilcIixcbiAgICAgICAgbWV0YTogXCJDYW1wYWlnbiBiYWxhbmNlIChldGhlcilcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC5cIlxuICAgICAgfVxuICAgIF07XG4gICAgcmV0dXJuICA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+OyAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+IFxuICAgICAgICA8aDM+Q2FtcGFpZ24gRGV0YWlsPC9oMz5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmQoKX1cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfSAvPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PiBcbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5WaWV3IFJlcXVlc3RzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPiBcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_web3_js","ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/show.js"); });
module.exports = __webpack_exports__;

})();