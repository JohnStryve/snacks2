__webpack_public_path__ = window.__webpack_public_path__; // eslint-disable-line

import 'babel-polyfill';
import $ from 'jquery';
import 'jquery-migrate';
import Global from './theme/global';


 // polyfill for formData.entries
// if (window.navigator.userAgent.indexOf("Edge") > -1) {
    
//     formdata.entries = function( obj ){
//         console.info('=====polyfill for Object.entries=====')
//         var ownProps = Object.keys( obj ),
//             i = ownProps.length,
//             resArray = new Array(i); // preallocate the Array
//         while (i--)
//           resArray[i] = [ownProps[i], obj[ownProps[i]]];
        
//         return resArray;
//     };
// }else {
//     console.log('======no need for polyfill======');
// }
scrolled();


function scrolled() {
    $(window).scroll(function () {
        var y_scroll_pos = window.pageYOffset;
        var topBarHeight = $('header').height();
        var scroll_pos_test = topBarHeight;
        var promoHeight = '-' + $('.above-nav-info').outerHeight() + 'px';
        // var promoHeight = "32px";

        if (y_scroll_pos > scroll_pos_test) {
            $('.above-nav-info').css('margin-top', promoHeight);
            $("body").addClass('scrolled');
        } else {
            $('.above-nav-info').css('margin-top', 0 + 'px');
            $("body").removeClass('scrolled');
        }

    });
    // ghost
    setTimeout(() => {
        // $('.inside-header').css('margin-top', $('header').height() + 'px');
        $('.ghost-header').css('height', $('header').height() + 'px');
    }, 800);
}


const getAccount = () => import('./theme/account');
const getLogin = () => import('./theme/auth');
const pageClasses = {
    account_orderstatus: getAccount,
    account_order: getAccount,
    account_addressbook: getAccount,
    shippingaddressform: getAccount,
    account_new_return: getAccount,
    'add-wishlist': () => import('./theme/wishlist'),
    account_recentitems: getAccount,
    account_downloaditem: getAccount,
    editaccount: getAccount,
    account_inbox: getAccount,
    account_saved_return: getAccount,
    account_returns: getAccount,
    login: getLogin,
    createaccount_thanks: getLogin,
    createaccount: getLogin,
    getnewpassword: getLogin,
    forgotpassword: getLogin,
    blog: () => import('./theme/blog'),
    blog_post: () => import('./theme/blog'),
    brand: () => import('./theme/brand'),
    brands: () => import('./theme/brands'),
    cart: () => import('./theme/cart'),
    category: () => import('./theme/category'),
    compare: () => import('./theme/compare'),
    page_contact_form: () => import('./theme/contact-us'),
    error: () => import('./theme/errors'),
    404: () => import('./theme/404-error'),
    giftcertificates: () => import('./theme/gift-certificate'),
    giftcertificates_balance: () => import('./theme/gift-certificate'),
    giftcertificates_redeem: () => import('./theme/gift-certificate'),
    default: () => import('./theme/home'),
    page: () => import('./theme/page'),
    product: () => import('./theme/product'),
    amp_product_options: () => import('./theme/product'),
    search: () => import('./theme/search'),
    rss: () => import('./theme/rss'),
    sitemap: () => import('./theme/sitemap'),
    newsletter_subscribe: () => import('./theme/subscribe'),
    wishlist: () => import('./theme/wishlist'),
    wishlists: () => import('./theme/wishlist'),
    faq: () => import('./theme/faq'),
    b2b: () => import('./theme/b2b'),
};

/**
 * This function gets added to the global window and then called
 * on page load with the current template loaded and JS Context passed in
 * @param pageType String
 * @param contextJSON
 * @returns {*}
 */
window.stencilBootstrap = function stencilBootstrap(pageType, contextJSON = null, loadGlobal = true) {
    const context = JSON.parse(contextJSON || '{}');
    return {
        load() {
            $(async () => {
                let globalClass;
                let pageClass;
                let PageClass;

                if (context.template === 'pages/custom/page/faq') {
                   pageType = "faq"        
                }

                if (context.template === 'pages/custom/page/b2b_template') {
                   pageType = "b2b"        
                }
                
                // Finds the appropriate class from the pageType.
                const pageClassImporter = pageClasses[pageType];
                // console.log({
                //     'context':context,
                //     'pageType':pageType,
                // });

                // shop link
                let buyLink = (pageType !== 'default') ? '/shop-all/' : '#buy'
                $('[data-shopRef]').attr('href', buyLink)
                
                // contact link
                let contactLink = (pageType !== 'default') ? '/contact-us/' : '#contact'
                $('[data-contactRef]').attr('href', contactLink)

                
                if (typeof pageClassImporter === 'function') {
                    PageClass = (await pageClassImporter()).default;
                }

                if (loadGlobal) {
                    globalClass = new Global();
                    globalClass.context = context;
                }

                if (PageClass) {
                    pageClass = new PageClass(context);
                    pageClass.context = context;
                }

                if (globalClass) {
                    globalClass.load();
                }

                if (pageClass) {
                    pageClass.load();
                }
            });
        },
    };
};

