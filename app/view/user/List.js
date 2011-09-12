/**
 * User: Johan
 * Date: 04/09/11
 * View that lists the users
 */
Ext.define('GO.view.user.List', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',

    title : 'All Users',
    store: 'Users',

    initComponent: function() {
        this.columns = [
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});