exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

const getArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles",
    params
  });
};
const getYourFeedArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles/feed",
    params
  });
};
const addFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: `/api/articles/${slug}/favorite`
  });
};
const deleteFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`
  });
};
const getArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}`
  });
};
const getComments = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}/comments`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=0236be00&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'your_feed' },attrs:{"to":{ query: { tab: 'your_feed' } },"exact":""}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'global_feed' },attrs:{"to":{ query: { tab: 'global_feed' } },"exact":""}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'tag' },attrs:{"to":{ query: { tab: 'tag', tag: _vm.tag } },"exact":""}},[_vm._v(_vm._s("#" + _vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":("profile/" + (article.author.username))}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("profile/" + (article.author.username))}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormate")(article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":("article/" + (article.slug))}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(p){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: _vm.page === p }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                name: 'home',
                query: {
                  page: p,
                  tag: _vm.$route.query.tag,
                  tab: _vm.tab,
                },
              }}},[_vm._v("\n              "+_vm._s(p)+"\n            ")])],1)}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(tag){return _c('nuxt-link',{key:tag,staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query: {
                  tag: tag,
                  tab: 'tag',
                },
              }}},[_vm._v(_vm._s(tag))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=0236be00&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./api/tag.js

const getTags = () => {
  return Object(request["b" /* request */])({
    method: "GET",
    url: "/api/tags"
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomePage",

  async asyncData({
    query
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 20;
    const tab = query.tab || "global_feed";
    const tag = query.tag;
    const loadArticles = tab === "global_feed" ? api_article["d" /* getArticles */] : api_article["f" /* getYourFeedArticles */];
    const [artRes, tagRes] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = artRes.data;
    articles.forEach(article => article.favoriteDisabled = false);
    const {
      tags
    } = tagRes.data;
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tab,
      tag
    };
  },

  watchQuery: ["page", "tag", "tab"],
  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavorite(article) {
      const {
        favorited,
        slug
      } = article;
      article.favoriteDisabled = true;

      if (article.favorited) {
        await Object(api_article["b" /* deleteFavorite */])(slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(api_article["a" /* addFavorite */])(slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "606680b4"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map