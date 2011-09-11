/**
 * User: Johan
 * Date: 03/09/11
 * Main application
 */
Ext.require('Ext.container.Viewport');
Ext.application({
    name: 'GO',
    appFolder: 'app',

    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userlist'
            }
        });
    }
});