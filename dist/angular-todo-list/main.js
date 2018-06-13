(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#todo-list{\n    margin-top: 5%;\n    background: #ffffff;\n    box-shadow: -1px 1px 6px 2px #969696;\n    padding: 25px;\n    min-height: 500px;\n    position: relative;\n}\n\n#todo-list .header img{\n    width: 100px;\n}\n\n#todo-list .content .add-todo-form{\n    padding: 20px 0;\n}\n\n#todo-list .content .list-todos{\n    margin-top: 65px;\n}\n\n#todo-list .content .list-todos ul{\n    padding: 0;\n}\n\n#todo-list .content .list-todos ul li{\n    padding: 10px 0;\n    border-bottom: 0.5px solid #929292;\n}\n\n#todo-list .content .list-todos .todo-title{\n    display: block;\n    font-weight: 700;\n    margin-bottom: 5px;\n    //color: #CC0032;\n    color: #16a085;\n    cursor: pointer;\n}\n\n#todo-list .content .list-todos .todo-title.done{\n    text-decoration: line-through;\n    opacity: 0.8;\n}\n\n#todo-list .content .list-todos .todo-description.done{\n    text-decoration: line-through;\n    opacity: 0.8;\n}\n\n#todo-list .content .list-todos .todo-actions button{\n    margin-left: 5px;\n}\n\n#todo-list .footer{\n    margin-top: 20px;\n    padding: 10px;\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    background: #f6f6f6;\n}\n\n#todo-list .footer p{\n    margin: 0;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"todo-list\" class=\"container text-center\">\n  <div class=\"row\">\n    <div class=\"col-md-12 header\">\n      <img alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n      <h1>\n        {{ title }}\n      </h1>\n      <hr />\n    </div>\n    <div class=\"col-md-12 content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 offset-md-2 add-todo-form\">\n            <form class=\"form-inline\" #frm=\"ngForm\" (ngSubmit)=\"onTodoAddFormSubmitted(frm)\">\n              <input type=\"text\"\n                     class=\"form-control  ml-sm-2\"\n                     placeholder=\"Title\"\n                     name=\"title\"\n                     [ngModel]=\"formData.title\"\n                     required>\n              <input type=\"text\"\n                     class=\"form-control  ml-sm-2\"\n                     placeholder=\"Description\"\n                     name=\"description\"\n                     [ngModel]=\"formData.description\"\n                     required>\n              <select class=\"custom-select ml-sm-2\"\n                      name=\"category\"\n                      [ngModel]=\"formData.category\"\n                      required>\n                <option value = '' disabled selected>Category...</option>\n                <option value=\"1\">Home</option>\n                <option value=\"2\">Office</option>\n                <option value=\"3\">Other</option>\n              </select>\n\n              <button type=\"submit\" class=\"btn btn-primary  ml-sm-2\" [disabled]=\"!frm.valid\">Add</button>\n            </form>\n          </div>\n          <div class=\"col-md-12 list-todos text-left\">\n            <ul>\n              <li *ngFor=\"let todo of todoList\" class=\"row\" (mouseenter)=\"todo.showAction = true\" (mouseleave)=\"todo.showAction = false\">\n                <div class=\"col-md-1 todo-categ-icon\">\n                  <i class=\"fa fa-3x fa-home\" *ngIf=\"todo.category==1\"></i>\n                  <i class=\"fa fa-3x fa-building\" *ngIf=\"todo.category==2\"></i>\n                  <i class=\"fab fa-3x fa-react\" *ngIf=\"todo.category==3\"></i>\n                </div>\n                <div class=\"col-md-7 todo-details\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <span class=\"todo-title\" [ngClass]=\"{'done':todo.is_marked_done}\" *ngIf=\"!todo.in_edit_mode\" (click)=\"todo.in_edit_mode=true\">\n                        {{todo.title}}\n                      </span>\n                      <input type=\"text\" [value]=\"todo.title\" [(ngModel)]=\"todo.title\" *ngIf=\"todo.in_edit_mode\">\n                    </div>\n                    <div class=\"col-md-12\">\n                      <p  class=\"todo-description\" [ngClass]=\"{'done':todo.is_marked_done}\" *ngIf=\"!todo.in_edit_mode\" (click)=\"todo.in_edit_mode=true\">\n                        {{todo.description}}\n                      </p>\n                      <input type=\"text\" class=\"col-md-10\" [value]=\"todo.description\" [(ngModel)]=\"todo.description\" *ngIf=\"todo.in_edit_mode\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4 todo-actions mt-2 text-right\" [ngClass]=\"{'d-block':todo.showAction===true,'d-none':todo.showAction !==true}\">\n                  <button class=\"btn btn-warning\" *ngIf=\"todo.in_edit_mode!==true && todo.is_marked_done!==true\" (click)=\"todo.in_edit_mode=true\" >Edit</button>\n                  <button class=\"btn btn-success\" *ngIf=\"todo.in_edit_mode===true\" (click)=\"todo.in_edit_mode=false; updateTodo(todo)\" >Update</button>\n                  <button class=\"btn btn-success\" *ngIf=\"todo.in_edit_mode!==true && todo.is_marked_done!==true\" (click)=\"markAsDone(todo)\">Mark as Done</button>\n                  <button class=\"btn btn-danger\" *ngIf=\"todo.in_edit_mode!==true\" (click)=\"deleteTodo(todo)\">Remove</button>\n                </div>\n              </li>\n              <!--<li class=\"row\">-->\n                <!--<div class=\"col-md-1 todo-categ-icon\">-->\n                  <!--<i class=\"fa fa-3x fa-home\"></i>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-9 todo-details\">-->\n                  <!--<div class=\"row\">-->\n                    <!--<div class=\"col-md-12\">-->\n                      <!--<span class=\"todo-title\">-->\n                        <!--How mutual fund SIPs help investors buy low and sell high despite unpredictability of stock market-->\n                      <!--</span>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-12\">-->\n                      <!--<p  class=\"todo-description\">-->\n                        <!--Lorem Ipsum is simply dummy text of the printing and typesetting industry.-->\n                        <!--Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,-->\n                        <!--when an unknown printer took a galley-->\n                      <!--</p>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-2 todo-actions mt-4\">-->\n                  <!--<button class=\"btn btn-warning\">Edit</button>-->\n                  <!--<button class=\"btn btn-danger\">Delete</button>-->\n                <!--</div>-->\n              <!--</li>-->\n              <!--<li class=\"row\">-->\n                <!--<div class=\"col-md-1 todo-categ-icon\">-->\n                  <!--<i class=\"fa fa-3x fa-home\"></i>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-9 todo-details\">-->\n                  <!--<div class=\"row\">-->\n                    <!--<div class=\"col-md-12\">-->\n                      <!--<span class=\"todo-title\">-->\n                        <!--How mutual fund SIPs help investors buy low and sell high despite unpredictability of stock market-->\n                      <!--</span>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-12\">-->\n                      <!--<p  class=\"todo-description\">-->\n                        <!--Lorem Ipsum is simply dummy text of the printing and typesetting industry.-->\n                        <!--Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,-->\n                        <!--when an unknown printer took a galley-->\n                      <!--</p>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"col-md-2 todo-actions mt-4\">-->\n                  <!--<button class=\"btn btn-warning\">Edit</button>-->\n                  <!--<button class=\"btn btn-danger\">Delete</button>-->\n                <!--</div>-->\n              <!--</li>-->\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 footer\">\n      <p>\n        2018 | Authored by <a href=\"http://ronitmukherjee.com\">Ronit Mukherjee</a>\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/todo */ "./src/app/services/todo.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
        this.title = 'Angular Todo List';
        this.todoList = [];
        this.formData = {
            "title": "",
            "description": "",
            "category": "",
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    AppComponent.prototype.onTodoAddFormSubmitted = function (f) {
        var _this = this;
        this.todoService.add(f.value)
            .subscribe(function (response) {
            var todo = __assign({}, f.value, { id: response["name"] });
            console.log(todo);
            _this.todoList = [todo].concat(_this.todoList);
            _this.frm.resetForm();
            _this.frm.setValue(_this.formData);
        }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.get()
            .subscribe(function (response) { console.log(response); _this.todoList = _this.todoList.concat(response); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.updateTodo = function (todo) {
        console.log(todo);
        this.todoService.update(todo).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.deleteTodo = function (todo) {
        if (confirm("Are you sure to delete the selected todo?")) {
            this.todoList = this.todoList.filter(function (t) { return t.id !== todo.id; });
            this.todoService.delete(todo).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
    };
    AppComponent.prototype.markAsDone = function (todo) {
        todo.is_marked_done = true;
        this.updateTodo(todo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("frm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AppComponent.prototype, "frm", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_todo__WEBPACK_IMPORTED_MODULE_2__["Todo"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/todo */ "./src/app/services/todo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_services_todo__WEBPACK_IMPORTED_MODULE_4__["Todo"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/todo.ts":
/*!**********************************!*\
  !*** ./src/app/services/todo.ts ***!
  \**********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Todo = /** @class */ (function () {
    function Todo(http) {
        this.http = http;
    }
    Todo.prototype.add = function (todo) {
        return this.http.post('https://angular-todo-list-b9867.firebaseio.com/todos.json', todo);
    };
    Todo.prototype.get = function () {
        return this.http.get('https://angular-todo-list-b9867.firebaseio.com/todos.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(Object.keys(response));
            return Object.keys(response).map(function (i) { return (__assign({}, response[i], { id: i })); }).reverse();
        }));
    };
    Todo.prototype.update = function (todo) {
        var td = __assign({}, todo);
        delete td["showAction"];
        delete td["in_edit_mode"];
        return this.http.put('https://angular-todo-list-b9867.firebaseio.com/todos/' + todo.id + ".json", td);
    };
    Todo.prototype.delete = function (todo) {
        return this.http.delete('https://angular-todo-list-b9867.firebaseio.com/todos/' + todo.id + ".json");
    };
    Todo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Todo);
    return Todo;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ronit/projects/angular-todo-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map