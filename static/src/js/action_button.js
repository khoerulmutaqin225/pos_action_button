odoo.define("pos_action_button.ActionButton", function(require) {
"use strict";

var pos_screens = require('point_of_sale.screens');

// Create New Button by extending the base ActionButtonWidget
var DashboardButton = pos_screens.ActionButtonWidget.extend({
    template: 'DashBoardButton',
    button_click: function() {
        alert("Ini Tes Booking Room");
    },
});

// Define the dashboard button
pos_screens.define_action_button({
    'name':'Dashboard', 
    // 'description': 'Go to Dashboard Screen',
    // 'icon' : 'fa-th',
    'widget': DashboardButton,
    'condition':function(){return this.pos;},
});

});