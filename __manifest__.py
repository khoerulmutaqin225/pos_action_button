# -*- coding: utf-8 -*-
{
    'name': "JS Framework 13 Module",
    
    'summary': "JS Framework 13 Module",


    'description': """
        Test JS Framework
    """,
    
    'author': "Mas Muttaqin",
    'website': "https://khoerulmutaqin225.github.io/",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
