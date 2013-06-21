Ext.define('ListItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['text']
    }
});

var treeStore = Ext.create('Ext.data.TreeStore', {
    model: 'ListItem',
    defaultRootProperty: 'items',
    proxy: {
        type: 'ajax',
		dataType: "jsonp",
        url: 'http://daca.dhcp.snl.salk.edu:8000/blog'
    }
});

var detailContainer = Ext.create('Ext.Container', {
    layout: 'card'
});

nlist = Ext.define('NestedList', {
	extend: "Ext.NestedList",
	scrollable: true,
    store: treeStore,
	alias: "widget.nestedlist",
	text: "SChedule"
});




var snv = Ext.define('SlideNav.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    config: {
        tabBarPosition : 'bottom',
        items : [{
            title : 'Schedule',
            iconCls : 'list',
            xtype : 'panel',
			html : ['This is SlideNavs HTML'].join(''),
            styleHtmlContent : true,
            items : [{
                xtype : 'titlebar',
                title : 'NIPS 2012 titlebar',
                items :[{
                    align : 'left',
                    name : 'nav_btn',
                    iconCls : 'list',
                    ui : 'plain'
				}]
            },{
                xtype : 'nestedlist',
                title : 'Filtered Schedule Goes Here',
				ui : "plain",
                items :[{
                	detailCard: {
                		xtype: 'panel',
						html: "Detail CARD"
                	},
					listeners: {
						itemtap: function (nextedList, list, index, target, record, e, eOpts) {
							var name = record.get('text');
							var html = Ext.String.format("This is the leaf node card of {0}", name);
							this.getDetailCard().setHtml(html);
						}
					},
					store: {
						//??
					}
                }]
            }]
        },{
        	title:"Hotels",
			xtype:"panel",
			iconCls: "home",
			// The Hotels tab will hold just a panel with static html.
			html : "This is HTML"
        },{
        	title:"Transportation",
			xtype:"nestedlist",
			iconCls: "anchor"
        },{
        	title:"Internet",
			xtype:"nestedlist",
			iconCls: "network"
        }]
    }
});





