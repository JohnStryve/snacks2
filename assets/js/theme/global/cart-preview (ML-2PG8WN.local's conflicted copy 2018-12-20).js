import $ from 'jquery';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import addtocart_deadsoxy from './addtocart-deadsoxy'

export const CartPreviewEvents = {
    close: 'closed.fndtn.dropdown',
    open: 'opened.fndtn.dropdown',
};
 
export default function () {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cartDropdown = $('[data-dropdown-content]');
    const $closeCart = $('[data-close-cart]');
    const $cartLoading = $('<div class="loadingOverlay"></div>');
    const options = {
        template: 'deadsoxy/cart-preview',
        config: {
            products: {
                featured: {
                    limit: 10,
                    include: options,
                },
            },
        }
    };
    bindEvents();

    // var jsContext = JSON.parse({{jsContext}});
    
    function cartRemoveItem(itemId) {
        // this.$overlay.show();
        utils.api.cart.itemRemove(itemId, (err, response) => {
            console.log('remove response', response);
            if (response.data.status === 'succeed') {
                getCart();
            } else {
                swal({
                    text: response.data.errors.join('\n'),
                    type: 'error',
                });
            }
        });
    }

    setTimeout( function() { // auto load cart so user dont have to get cart on click
        getCart(true);
    },500);

    function getCart(skipQty) {
        utils.api.cart.getContent(options, (err, response) => {
            $cartDropdown
                .removeClass(loadingClass)
                .html(response);
            $cartLoading
                .hide();
            bindEvents();
            addtocart_deadsoxy(true);

            if(skipQty) { return; }

            // qty
            const quantity = $('[data-cartQuantity]').text() || 0;
            $('body').trigger('cart-quantity-update', quantity);

        });
    };


    


    function bindEvents() {

        $('.delete_item').on('click', event => {
            const itemId = $(event.currentTarget).data('cartItemid');
            const string = $(event.currentTarget).data('confirmDelete');
            event.preventDefault();
            // remove item from cart
            cartRemoveItem(itemId);
        });
        $cart.unbind();
        $cart.on('click', event => {
            console.log('CLICK')
            showCart();
            // if($cart.hasClass('is-open'))
                // Redirect to full cart page
                //
                // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
                // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
                // if (/Mobi/i.test(navigator.userAgent)) {
                //     return event.stopPropagation();
                // }

                // event.preventDefault();

                // $cartDropdown
                //     .addClass(loadingClass)
                //     .html($cartLoading);
                // $cartLoading
                //     .show();

                getCart();
        });

    }


    setTimeout( function() {
        $('body').on('cart-quantity-update', (event, quantity) => {
            showCart();
            getCart(true);
            $('.cart-quantity')
                .text(quantity)
                .toggleClass('countPill--positive', quantity > 0);
            $('.badge.qty')
                .text(quantity)
                .toggleClass('countPill--positive', quantity > 0);
        });
    },2000);

    function showCart() {
        // $cart.click();
        $cartDropdown
            .addClass(loadingClass + " is-open")
            .html($cartLoading);
        $cartLoading
            .show();

        // hide cart listener
        setTimeout(() => {
            const $closeCart = $('[data-close-cart]');
            $closeCart.unbind();
            $closeCart.click(e=> {
                console.log('CLICK close Cart');
                hideCart();
            });
        }, 1500); // wait for cart elements
    }
    
    function hideCart() {
        $cartDropdown
            .removeClass(loadingClass + " is-open")
        $cartLoading
            .hide();
    }



}
