odoo.define("pos_action_button.ActionButton", function(require) {
"use strict";

var pos_screens = require('point_of_sale.screens');
var models = require('point_of_sale.models');
console.log("Models".models)
// module.load_fields("product.product",['price','category'])
models.load_fields("hotel.folio",['name'])
console.log("Models".models)


var core = require('web.core');
var QWeb = core.qweb;
var _t = core._t;



// Create New Button by extending the base ActionButtonWidget
var DashboardButton = pos_screens.ActionButtonWidget.extend({
    template: 'DashBoardButton',
    // button_click: function() {
    //     alert("Ini Tes Booking Room");
    // },
    button_click: function(){
        if (this.pos.get_order().get_orderlines().length === 0){
            console.log('ini test true');
            this.gui.show_screen('FavoriteProductScreen');
        }
        else{
            console.log('ini test false');
            this.gui.show_popup('error',{
                title :_t('Process Only one operation at a time'),
                body  :_t('Process the current order first'),
            });
        }
    }
});

// Define the dashboard button
pos_screens.define_action_button({
    'name':'Dashboard', 
    // 'description': 'Go to Dashboard Screen',
    // 'icon' : 'fa-th',
    'widget': DashboardButton,
    'condition':function(){
        return this.pos;
    },
});

});