/**
 * User: Johan
 * Date: 03/09/11
 * Main application
 */
Ext.require('Ext.container.Viewport');
Ext.application({
    name: 'JiGoLo',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'JiGoLo',
                    html : 'Première pierre à l\'édifice'
                }
            ]
        });
    }
});