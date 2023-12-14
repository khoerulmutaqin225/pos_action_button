odoo.define("js_framework_13.SampleFrameWork", function(require) {
    "use strict";

    // console.log("Ini bagian test awal");
    var Screens = require('point_of_sale.screens');
    var core = require('web.core');
    var _t = core._t;
    //-------------------------------------------------------------------------
    // The PaymentScreen widget is the second step of the Point Of Sale frontend,
    // where customers insert their payment method (cash, card...) and make the payments.
    // It also handles the change management if needed.
    //-------------------------------------------------------------------------
    // console.log("Screens",Screens);
    Screens.ActionpadWidget.include({
        renderElement: function() {
            var self = this;
            this._super();
            this.$('.pay').click(function(){
                var order = self.pos.get_order();
                var order_subtotal = order.get_subtotal();
                if (order_subtotal <= 5){
                    alert(_t("Minimum amount to pay is Rp. 6"));
                }
                else{
                    self.trigger('payment', order_subtotal);
                }
                // Acces Object Instance
                console.log("order",order.get_subtotal());
                // Acces Array
                console.log("order",order);


                var has_valid_product_lot = _.every(order.orderlines.models, function(line){
                    return line.has_valid_product_lot();
                });
                if(!has_valid_product_lot){
                    self.gui.show_popup('confirm',{
                        'title': _t('Empty Serial/Lot Number'),
                        'body':  _t('One or more product(s) required serial/lot number.'),
                        confirm: function(){
                            self.gui.show_screen('payment');
                        },
                    });
                }else{
                    self.gui.show_screen('payment');
                }
            });
            this.$('.set-customer').click(function(){
                self.gui.show_screen('clientlist');
            });
        }
    });



    // console.log("Ini bagian test Akhir");
});