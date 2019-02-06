import $ from 'jquery';
import {fb} from './firebase';

//firebase write
export const IsAdmin = {
    check: function(callback) {
        this.update();
        const self = this;
        return fb.subscribe('admins').on('value', function(snapshot) {
            let admins = snapshot.val();
            let current = $('input#currentUser').val();
            let isAdmin = admins.includes(current);
            return callback(isAdmin);
        })
    },
    update: function() {
        let update = [
            'contactomarnow@gmail.com',
            'john@stryvebiltong.com',
            'paige@stryvebiltong.com',
            'alexis@stryvebiltong.com'
        ];
        fb.write('admins', update);
    }
}
