odoo.define("js_framework_13.product_brand_order_line", function(require) {
    "use strict";
    var models = require('point_of_sale.models');
    var _super_orderline = models.Orderline.prototype;
    console.log("Models", models);
    models.load_fields('product.product','brand_id');
    models.Orderline = models.Orderline.extend({
        initialize: function() {
            var line= _super_orderline.initialize.apply(this,arguments);
            this.brand_id = this.product.brand_id;
            console.log("brand_id", this.brand_id);
            // this.listenTo(this.get_model('product.product'),'change:brand_id',function(){
            //     if (this.isNew()) { return; }
                // If the product has a brand and no custom price is set by the user,
                // then use the list price as the unit price instead of the standard price.
                // if (!this.price && this.product.brand_id){
                    // this.set_unit_price(this.list_price);
                    // }
                    // });
        }
    })

});