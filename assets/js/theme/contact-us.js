import PageManager from './page-manager';
import nod from './common/nod';
import $ from 'jquery';
import forms from './common/models/forms';


export default class ContactUs extends PageManager {

    loaded(context1) {
        this.registerContactFormValidation(context1);
    }
    
    registerContactFormValidation(context1) {
        console.log("form loaded ===> ", context1);
        this.context = (context1) ? context1 : this.context; 
        const formSelector = 'form[data-contact-form]';
        const contactUsValidator = nod({
            submit: `${formSelector} input[type="submit"]`,
        });
        const $contactForm = $(formSelector);

        contactUsValidator.add([
            {
                selector: `${formSelector} input[name="contact_email"]`,
                validate: (cb, val) => {
                    const result = forms.email(val);

                    cb(result);
                },
                errorMessage: this.context.contactEmail,
            },
            {
                selector: `${formSelector} textarea[name="contact_question"]`,
                validate: (cb, val) => {
                    const result = forms.notEmpty(val);

                    cb(result);
                },
                errorMessage: this.context.contactQuestion,
            },
        ]);

        $contactForm.on('submit', event => {
            // event.preventDefault();
            
            contactUsValidator.performCheck();

            if (contactUsValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    }
}
