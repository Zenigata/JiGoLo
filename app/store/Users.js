/**
 * User: Johan
 * Date: 04/09/11
 * Store the user content
 */
Ext.define('GO.store.Users', {
    extend: 'Ext.data.Store',
    model: 'GO.model.User',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});