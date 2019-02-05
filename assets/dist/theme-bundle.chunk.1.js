webpackJsonp([1],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_manager__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_reviews__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_collapsible__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_product_details__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_video_gallery__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_admin_images__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_form_utils__ = __webpack_require__(142);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}/*
 Import all product specific js
 */var Product=function(_PageManager){_inherits(Product,_PageManager);function Product(context){_classCallCheck(this,Product);var _this=_possibleConstructorReturn(this,_PageManager.call(this,context));_this.url=window.location.href;_this.$reviewLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-reveal-id="modal-review-form"]');return _this}Product.prototype.before=function before(next){var _this2=this;// Listen for foundation modal close events to sanitize URL after review.
__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('close.fndtn.reveal',function(){if(_this2.url.indexOf('#write_review')!==-1&&typeof window.history.replaceState==='function'){window.history.replaceState(null,document.title,window.location.pathname)}});next()};Product.prototype.loaded=function loaded(next){var _this3=this;var validator=void 0;// Init collapsible
Object(__WEBPACK_IMPORTED_MODULE_3__common_collapsible__["b" /* default */])();this.productDetails=new __WEBPACK_IMPORTED_MODULE_4__common_product_details__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-productPage]'),this.context,window.BCData.product_attributes);Object(__WEBPACK_IMPORTED_MODULE_5__product_video_gallery__["a" /* default */])();Object(__WEBPACK_IMPORTED_MODULE_6__product_admin_images__["a" /* default */])();var $reviewForm=Object(__WEBPACK_IMPORTED_MODULE_7__common_form_utils__["b" /* classifyForm */])('.writeReview-form');var review=new __WEBPACK_IMPORTED_MODULE_2__product_reviews__["a" /* default */]($reviewForm);__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click','[data-reveal-id="modal-review-form"]',function(){validator=review.registerValidation(_this3.context)});$reviewForm.on('submit',function(){if(validator){validator.performCheck();return validator.areAll('valid')}return false});next()};Product.prototype.after=function after(next){this.productReviewHandler();next()};Product.prototype.productReviewHandler=function productReviewHandler(){if(this.url.indexOf('#write_review')!==-1){this.$reviewLink.trigger('click')}};return Product}(__WEBPACK_IMPORTED_MODULE_1__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_nod__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_collapsible__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_models_forms__ = __webpack_require__(213);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var _class=function(){function _class($reviewForm){_classCallCheck(this,_class);this.validator=Object(__WEBPACK_IMPORTED_MODULE_1__common_nod__["a" /* default */])({submit:$reviewForm.find('input[type="submit"]')});this.$reviewsContent=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#product-reviews');this.$collapsible=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-collapsible]',this.$reviewsContent);this.initLinkBind();this.injectPaginationLink();this.collapseReviews()}/**
     * On initial page load, the user clicks on "(12 Reviews)" link
     * The browser jumps to the review page and should expand the reviews section
     */_class.prototype.initLinkBind=function initLinkBind(){var _this=this;var $content=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#productReviews-content',this.$reviewsContent);__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-reviewLink').on('click',function(){if(!$content.hasClass('is-open')){_this.$collapsible.trigger(__WEBPACK_IMPORTED_MODULE_2__common_collapsible__["a" /* CollapsibleEvents */].click)}})};_class.prototype.collapseReviews=function collapseReviews(){// We're in paginating state, do not collapse
if(window.location.hash&&window.location.hash.indexOf('#product-reviews')===0){return}// force collapse on page load
this.$collapsible.trigger(__WEBPACK_IMPORTED_MODULE_2__common_collapsible__["a" /* CollapsibleEvents */].click)};/**
     * Inject ID into the pagination link
     */_class.prototype.injectPaginationLink=function injectPaginationLink(){var $nextLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination-item--next .pagination-link',this.$reviewsContent);var $prevLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination-item--previous .pagination-link',this.$reviewsContent);if($nextLink.length){$nextLink.attr('href',$nextLink.attr('href')+' #product-reviews')}if($prevLink.length){$prevLink.attr('href',$prevLink.attr('href')+' #product-reviews')}};_class.prototype.registerValidation=function registerValidation(context){this.context=context;this.validator.add([{selector:'[name="revrating"]',validate:'presence',errorMessage:this.context.reviewRating},{selector:'[name="revtitle"]',validate:'min-length:2',errorMessage:this.context.reviewSubject},{selector:'[name="revtext"]',validate:'min-length:2',errorMessage:this.context.reviewComment},{selector:'[name="email"]',validate:function validate(cb,val){var result=__WEBPACK_IMPORTED_MODULE_3__common_models_forms__["a" /* default */].email(val);cb(result)},errorMessage:this.context.reviewEmail}]);return this.validator};_class.prototype.validate=function validate(){return this.validator.performCheck()};return _class}();/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VideoGallery */
/* harmony export (immutable) */ __webpack_exports__["a"] = videoGallery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var VideoGallery=function(){function VideoGallery($element){_classCallCheck(this,VideoGallery);this.$player=$element.find('[data-video-player]');this.$videos=$element.find('[data-video-item]');this.currentVideo={};this.bindEvents()}VideoGallery.prototype.selectNewVideo=function selectNewVideo(e){e.preventDefault();var $target=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget);this.currentVideo={id:$target.data('videoId'),$selectedThumb:$target};this.setMainVideo();this.setActiveThumb()};VideoGallery.prototype.setMainVideo=function setMainVideo(){this.$player.attr('src','//www.youtube.com/embed/'+this.currentVideo.id)};VideoGallery.prototype.setActiveThumb=function setActiveThumb(){this.$videos.removeClass('is-active');this.currentVideo.$selectedThumb.addClass('is-active')};VideoGallery.prototype.bindEvents=function bindEvents(){this.$videos.on('click',this.selectNewVideo.bind(this))};return VideoGallery}();function videoGallery(){var pluginKey='videoGallery';var $videoGallery=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-'+pluginKey+']');$videoGallery.each(function(index,element){var $el=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);var isInitialized=$el.data(pluginKey)instanceof VideoGallery;if(isInitialized){return}$el.data(pluginKey,new VideoGallery($el))})}

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["a"] = admin_images;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dropzone__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_firebase__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_isadmin__ = __webpack_require__(212);
var id=$('[dz]').attr('dz');function admin_images(){// fb.write('images/test_sku/', {'hello': 'world'})
getImages(id);__WEBPACK_IMPORTED_MODULE_2__common_isadmin__["a" /* IsAdmin */].check(function(authorized){console.info('admin: ',authorized);if(authorized){createDropzones();$('.admin-add').removeClass('hide');// reveal Plus
removeListen()}});feature_overlay()}function createDropzones(){$('[dz-alter]').click(function(){$('[dz]').click()});var home=this;var dz_configs={url:'/file/post',maxFilesize:10,maxFiles:20,addRemoveLinks:true,dictResponseError:'Server not Configured',acceptedFiles:'.png,.jpg,.gif,.bmp,.jpeg',// previewTemplate: $('.prevv').html(),
autoProcessQueue:true,init:function init(){var self=this;var el=self.options.el;var id=self.options.id;// config
self.options.addRemoveLinks=true;self.options.dictRemoveFile='Delete';//New file added
self.on('addedfile',function(file){// if (this.files[1]!=null){
//        this.removeFile(this.files[0]);
//    }
if(this.files.length){var _i,_len;for(_i=0,_len=this.files.length;_i<_len-1;_i++)// -1 to exclude current file
{if(this.files[_i].name===file.name&&this.files[_i].size===file.size&&this.files[_i].lastModifiedDate.toString()===file.lastModifiedDate.toString()){this.removeFile(file)}}}});// Send file starts
self.on('sending',function(file){$('.meter').show();var ths=this;setTimeout(function(){// preview
// $(el).find('.button.save').click( function(){
addProductImage(file,id);ths.removeFile(ths.files[0]);// });
},1000)})}};// creatDropzones
$('[dz]').dropzone(Object.assign({el:'[dz]',id:$('[dz]').attr('dz')},dz_configs))}function getImages(id){__WEBPACK_IMPORTED_MODULE_1__common_firebase__["a" /* fb */].subscribe('products/'+id).on('value',function(product){try{var images=product.val().images;placeImages(images)}catch(err){console.log('NO IMAGES');var imgwrap=$('.productView-thumbnails .databased').html('')}})}function placeImages(images){var imgwrap=$('.productView-thumbnails .databased');imgwrap.html('');$.each(images,function(index,image){// var $img = document.createElement("IMG");
// $img.setAttribute("src", image.url);
//    $img.setAttribute("width", "304");
//    $img.setAttribute("height", "228");
// $img.setAttribute("alt", "The Pulpit Rock");
var $img='<li class="productView-thumbnail">\n            <span dz-rm="'+image.id+'"><i class="fa fa-trash"></i></span>\n            <a class="productView-thumbnail-link" href="'+image.url+'" data-image-gallery-item="" data-image-gallery-new-image-url="'+image.url+'" data-image-gallery-zoom-image-url="'+image.url+'">\n                <img class="lazyautosizes lazyloaded" data-sizes="auto" src="'+image.url+'" data-src="'+image.url+'" alt="Collins (Youth)" title="Collins (Youth)" sizes="50px">\n            </a>\n        </li>';imgwrap.append($img)});removeListen()}function addProductImage(file,i){__WEBPACK_IMPORTED_MODULE_1__common_firebase__["a" /* fb */].addProductImage('product',file,'products/'+i+'/images',i)}function toArray(obj_obj){return Object.keys(obj_obj).map(function(i){return obj_obj[i]})}function pretty(obj){return JSON.stringify(obj,null,2)}function removeListen(){var btn=$('[dz-rm]');btn.unbind();btn.click(function(e){btn.unbind();removeImage($(this).attr('dz-rm'))})}function removeImage(key){var db_path='products/'+id+'/images/'+key;__WEBPACK_IMPORTED_MODULE_1__common_firebase__["a" /* fb */].remove(db_path);removeListen()}function feature_overlay(){var trigger=$('a.features');trigger.click(function(){$('.productView-images').unbind();var $overlay=$('.overlay-feat');var main_thumb=$('li.productView-thumbnail:first-child a');if($overlay.hasClass('act')){$overlay.fadeOut().removeClass('act');trigger.removeClass('blue');return}main_thumb.click();$overlay.fadeIn().addClass('act');trigger.addClass('blue');setTimeout(function(){$('.productView-images').click(function(){$overlay.fadeOut().removeClass('act');trigger.removeClass('blue')})},1000)})}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.1.js.map