!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=332)}({332:function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t.r(e);var o=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,o;return e=n,(t=[{key:"post",value:function(n,e,t){return new Promise(function(t,r){fetch(n,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then(function(n){return n.json()}).then(function(n){return t(n)}).catch(function(n){return r(n)})})}},{key:"get",value:function(n,e,t){return new Promise(function(t,r){fetch(n,{headers:{"x-access-token":e}}).then(function(n){return n.json()}).then(function(n){return t(n)}).catch(function(n){return r(n)})})}}])&&r(e.prototype,t),o&&r(e,o),n}(),a="https://mostlikedperson-api.herokuapp.com/api";function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var c=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"login",value:function(n,e){var t=new o;return new Promise(function(r,o){t.post("".concat(a,"/public/auth/login"),{email:n,password:e}).then(function(n){if(!n.auth)return o(n);localStorage.setItem("sn_user_id",n.id),localStorage.setItem("sn_user_token",n.token),r(n)}).catch(function(n){return o(n)})})}},{key:"signup",value:function(n){var e=new o;return new Promise(function(t,r){e.post("".concat(a,"/public/auth/signup"),n).then(function(n){if(!n.auth)return r(n);localStorage.setItem("sn_user_id",n.id),localStorage.setItem("sn_user_token",n.token),t(n)}).catch(function(n){return r(n)})})}},{key:"token",get:function(){return localStorage.getItem("sn_user_token")}},{key:"userId",get:function(){return localStorage.getItem("sn_user_id")}}])&&i(e.prototype,t),r&&i(e,r),n}();function s(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var u=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"navigate",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;location.appData=e,location.hash=n}}])&&s(e.prototype,t),r&&s(e,r),n}();function l(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,o)}function f(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var d=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._autService=new c,this._routing=new u}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this._autService.token&&this._routing.navigate("/users/".concat(this._autService.userId));case 1:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){l(a,r,o,i,c,"next",n)}function c(n){l(a,r,o,i,c,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex mt-5">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Login to Social.</h3>\n                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>\n                <form name="loginForm" novalidate>\n                    <div class="form-group">\n                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="S+">\n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm">Login</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            \x3c!-- /.auth-form --\x3e\n            <div class="auth-bg col col-6">\n            </div>\n            \x3c!-- /.auth-bg --\x3e\n        </div>\n        \x3c!-- /.auth-wrap --\x3e\n        '}},{key:"afterRender",value:function(){var n=this;document.forms.loginForm.addEventListener("submit",function(e){e.preventDefault();var t=e.target.elements.email.value,r=e.target.elements.password.value;t&&r&&n._autService.login(t,r).then(function(e){n._routing.navigate("/users/".concat(e.id),{myData:"My data"})}).catch(function(n){console.log(n)})})}}])&&f(e.prototype,t),r&&f(e,r),n}();function v(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,o)}function p(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var h=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._autService=new c}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){v(a,r,o,i,c,"next",n)}function c(n){v(a,r,o,i,c,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Sign Up to Social.</h3>\n                <p class="text-secondary">It\'s awesome here... Enter.</p>\n                <form name="signUpForm" novalidate>\n                    <div class="form-group">\n                        <div class="row">\n                            <div class="col col-6">\n                                <input type="text" class="form-control form-control-sm" id="first_name" placeholder="First Name">\n                            </div>\n                            <div class="col col-6">\n                                <input type="text" class="form-control form-control-sm" id="last_name" placeholder="Last Name">\n                            </div>\n                        </div>\n                        <input type="text" class="form-control form-control-sm mt-3" id="nick_name" placeholder="Nick Name">\n                        <div class="row mt-3">\n                            <div class="col col-4">\n                                <input type="text" class="form-control form-control-sm" id="day_of_birth" placeholder="Day">\n                            </div>\n                            <div class="col col-4">\n                                <input type="text" class="form-control form-control-sm" id="month_of_birth" placeholder="Month">\n                            </div>\n                            <div class="col col-4">\n                                <input type="text" class="form-control form-control-sm" id="year_of_birth" placeholder="Year">\n                            </div>\n                        </div>\n                        <div class="row mt-3">\n                            <div class="col col-6">\n                                <input type="text" class="form-control form-control-sm" id="country" placeholder="Country">\n                            </div>\n                            <div class="col col-6">\n                                <input type="text" class="form-control form-control-sm" id="city" placeholder="City">\n                            </div>\n                        </div>\n                        <select name="gender" id="gender" class="form-control form-control-sm mt-3">\n                            <option value="male">Male</option>\n                            <option value="male">Female</option>\n                        </select>\n                        <input type="email" class="form-control form-control-sm mt-3" id="email" placeholder="name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="text" class="form-control form-control-sm mt-3" id="phone" placeholder="Phone number">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="S+">\n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>\n                            <a href="login.html" class="btn btn-link btn-sm ml-auto">Already have an account? Sign in</a>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            \x3c!-- /.auth-form --\x3e\n            <div class="auth-bg col col-6">\n            </div>\n            \x3c!-- /.auth-bg --\x3e\n        </div>\n        \x3c!-- /.auth-wrap --\x3e\n        '}},{key:"afterRender",value:function(){var n=this;document.forms.signUpForm.addEventListener("submit",function(e){e.preventDefault();var t={};t.first_name=e.target.elements.first_name.value,t.last_name=e.target.elements.last_name.value,t.nickname=e.target.elements.nick_name.value,t.date_of_birth_day=e.target.elements.day_of_birth.value,t.date_of_birth_month=e.target.elements.month_of_birth.value,t.date_of_birth_year=e.target.elements.year_of_birth.value,t.country=e.target.elements.country.value,t.city=e.target.elements.city.value,t.gender_orientation=e.target.elements.gender.value,t.email=e.target.elements.email.value,t.phone=e.target.elements.phone.value,t.password=e.target.elements.password.value,n._userData=t,t.email&&t.password&&t.nickname&&t.first_name&&t.last_name&&t.gender_orientation&&n._autService.signup(t).then(function(n){console.log(n)}).catch(function(n){console.log(n)})})}}])&&p(e.prototype,t),r&&p(e,r),n}();function m(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var y=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getInfo",value:function(){var n=new o;return new Promise(function(e,t){n.get("".concat(a,"/public/home")).then(function(n){e(n)}).catch(function(n){return t(n)})})}}])&&m(e.prototype,t),r&&m(e,r),n}();function g(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,o)}function w(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var b=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._homeService=new y,this._info}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._homeService.getInfo();case 2:this._info=n.sent;case 3:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){g(a,r,o,i,c,"next",n)}function c(n){g(a,r,o,i,c,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            \x3c!-- Component styles --\x3e\n            <style>\n                ".concat(this.style(),'\n            </style>\n            \x3c!-- Component html --\x3e\n            <section class="inner">\n                <div class="inner-main">\n                    <div class="container">\n                        <div class="inner-content">\n                            <h1>Most Liked Person</h1>\n                            <span>Be Most Wanted</span>\n                            <p>').concat(this._info.innerText,'</p>\n                        </div>\n                    </div>\n                </div>\n                <div class="inner-desc">\n                    <div class="container">\n                        <ul class="inner-desc-stats">\n                            <li>').concat(this._info.cities," cities</li>\n                            <li>").concat(this._info.countries," countries</li>\n                            <li>").concat(this._info.regions," regions</li>\n                        </ul>\n                        <span>You can be one of the winners and we will introduce you to the world</span>\n                    </div>\n                </div>\n            </section>\n        ")}},{key:"style",value:function(){return"\n            .inner-main {\n                background-image: url(".concat(this._info.homeBackground,");\n                background-size: cover;\n            }\n            .container {\n                max-width: 1200px;\n                height: 600px;\n            }\n            .inner-content {\n                width: 38%;\n                color: #ffffff;\n                background-color: #282828;\n                opacity: 0.8;\n                padding: 50px;\n                height: inherit;\n            }\n            .inner-content span {\n                font-size: 22px;\n                font-style: italic;\n            }\n            .inner-content p {\n                padding: 20px 0;\n                font-size: 18px;\n            }\n            .inner-desc {\n                text-align: center;\n                color: #ffffff;                \n                background-color: #333333;\n                font-size: 18px;\n                font-weight: 400;\n                padding: 25px;\n                height: 120px;\n            }\n            .inner-desc-stats li {\n                padding: 0 25px;\n                display: inline-block;\n            }\n        ")}},{key:"afterRender",value:function(){}}])&&w(e.prototype,t),r&&w(e,r),n}();function x(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,o)}function _(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var k=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){x(a,r,o,i,c,"next",n)}function c(n){x(a,r,o,i,c,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            <div>404</div>\n        "}},{key:"afterRender",value:function(){}}])&&_(e.prototype,t),r&&_(e,r),n}();function P(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var S=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"parseRequestURL",value:function(){var n=location.hash.slice(1).toLowerCase()||"/",e=n.split("/");return{resourse:e[1],id:e[2],url:n}}}])&&P(e.prototype,t),r&&P(e,r),n}();function R(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var C=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getUser",value:function(n){var e=new o;return new Promise(function(t,r){e.get("".concat(a,"/public/users/get-info/").concat(n)).then(function(n){t(n)}).catch(function(n){return r(n)})})}}])&&R(e.prototype,t),r&&R(e,r),n}();function j(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,o)}function E(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var O=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._activeRoute=new S,this._authService=new c,this._userService=new C,this._authUserId=this._authService.userId,this._activeUserId=this._activeRoute.parseRequestURL().id,this._user}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._userService.getUser(this._activeUserId);case 2:this._user=n.sent;case 3:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){j(a,r,o,i,c,"next",n)}function c(n){j(a,r,o,i,c,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            \x3c!-- Component styles --\x3e\n            <style>\n                ".concat(this.style(),'\n            </style>\n            \x3c!-- Component html --\x3e\n            <div class="user-cover-container"\n                style="background: url(').concat(this._user.cover,') no-repeat center / cover;"\n            >\n            </div>\n            <div class="user-avatar-container d-flex justify-content-center">\n                <div class="user-avatar">\n                    <img src="').concat(this._user.avatar,'">\n                </div>\n            </div>\n        ')}},{key:"style",value:function(){return"\n            img {\n                max-width: 100%;\n            }\n            .user-cover-container {\n                height: 400px;\n                width: 100%;\n            }\n            .user-avatar-container {\n                transform: translateY(-50%);\n            }\n            .user-avatar {\n                width: 138px;\n                height: 138px;\n                border-radius: 50%;\n                overflow: hidden;\n            }\n        "}},{key:"afterRender",value:function(){}}])&&E(e.prototype,t),r&&E(e,r),n}();function T(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var I=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getNews",value:function(n){var e=new o;return new Promise(function(t,r){e.get("".concat(a,"/public/news"),n).then(function(n){t(n)}).catch(function(n){return r(n)})})}}])&&T(e.prototype,t),r&&T(e,r),n}(),L=document.querySelector("app-container");function M(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,o)}function U(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var z=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._authService=new c,this._newsService=new I,this._newsContainer=L,this._news}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){var e=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!this._authService.token){n.next=4;break}return n.next=3,this._newsService.getNews(this._authService.token);case 3:this._news=n.sent;case 4:this.clearContainer(),document.body.insertAdjacentHTML("afterBegin",this.stylesAdd()),this._news.news.forEach(function(n){return e.addNews(n)});case 7:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){M(a,r,o,i,c,"next",n)}function c(n){M(a,r,o,i,c,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"clearContainer",value:function(){for(var n=this._newsContainer.firstElementChild;n;)this._newsContainer.removeChild(n),n=this._newsContainer.firstElementChild}},{key:"addNews",value:function(n){var e=this.render(n);this._newsContainer.insertAdjacentHTML("beforeend",e)}},{key:"render",value:function(n){return'\n            <div class="news-item">\n                <div class="item-info">\n                    <div class="user-avatar">\n                        <img src="'.concat(n.owner.avatar,'">\n                    </div>\n                    <div class="user-info">\n                        <div class="user-name">\n                            <span>').concat(n.owner.full_name,'</span> \n                        </div>\n                        <div class="user-country">\n                            <span>').concat(n.owner.country,'</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="item-content">\n                    <div class="item-photo">\n                        <img src="').concat(n.pictures[0].url,'">\n                    </div>\n                </div>\n            </div>\n        ')}},{key:"stylesAdd",value:function(){return"\n            \x3c!-- Component styles --\x3e\n            <style>\n                ".concat(this.style(),"\n            </style>\n            \x3c!-- Component html --\x3e\n        ")}},{key:"style",value:function(){return"\n            .news-item {\n                text-align: center;\n                max-width: 1200px;\n                margin: 50px;                \n                padding: 50px 0;\n                padding-right: 25px;\n                background-color: #F5F5F5;\n            }\n            .item-info {\n                display: inline-block;\n                width: 20%;\n                vertical-align: top;\n            }\n            .user-avatar img {\n                text-align: center;\n                width: 138px;\n                height: 138px;\n                border-radius: 50%;\n                overflow: hidden;\n            }\n            .user-info {\n                padding: 10px 0;\n                font-weight: 500;\n            }\n            .user-name {\n                font-size: 18px;\n            }\n            .item-content {\n                display: inline-block;\n                width: 75%;\n                max-height: 400px;\n            }\n            .item-photo {\n                max-height: 400px;\n                border: 1px solid;\n            }\n            .item-photo img {\n                max-height: inherit;\n                width: 100%;\n            }\n        "}},{key:"afterRender",value:function(){}}])&&U(e.prototype,t),r&&U(e,r),n}();function F(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,o)}var N={"/":new b,"/login":new d,"/signup":new h,"/users/:id":new O,"/news":new z,"**":new k},q=new S,D=function(){var n,e=(n=regeneratorRuntime.mark(function n(){var e,t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=q.parseRequestURL(),t=(e.resourse?"/"+e.resourse:"/")+(e.id?"/:id":""),r=N[t]||N["**"],n.next=5,r.beforeRender();case 5:"/news"!==t&&(L.innerHTML=r.render()),r.afterRender();case 8:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){F(a,r,o,i,c,"next",n)}function c(n){F(a,r,o,i,c,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}();window.addEventListener("load",D),window.addEventListener("hashchange",D)}});