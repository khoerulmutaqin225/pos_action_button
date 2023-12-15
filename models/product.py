from odoo import api, fields, models, _
    
class ProductTemplate(models.Model):
    _inherit = 'product.template'        
    brand_id = fields.Many2one('product.brand', string='Brand')
    

class ProductBrand(models.Model):
    _name = 'product.brand'
    
    name = fields.Char('Brand')
