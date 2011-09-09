/**
 * User: Johan
 * Date: 04/09/11
 * View that lists the users
 */
Ext.define('GO.view.user.List', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',
    title : 'All Users',

    initComponent: function() {
        this.store = {
            fields: ['name', 'email'],
            data  : [
                {name: 'Socrate', email: 'socrate@yopmail.com'},
                {name: 'Platon', email: 'platon@yopmail.com'}
            ]
        };

        this.columns = [
            {header: 'Name', dateIndex: 'name', flex: 1},
            {header: 'Email', dateIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});