/**
 * User: Johan
 * Date: 04/09/11
 * Controller of Users
 */
Ext.define('GO.controller.Users', {
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },
    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});