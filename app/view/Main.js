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
            styleHtmlContent : true,
            items : [{
                xtype : 'titlebar',
                title : 'NIPS 2012',
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
			html : JSON.parse('["<h1 class=\\"PageTitle\\">Hotels</h1><p>Harrah\'s and Harveys, site of both the Conference and Workshops, are directly across the street from each other and are connected via underground tunnel which you will use to commute between the two.</p>", "", "<h2>Address for the hotels:</h2>", "", "<p>Harveys Resort &amp; Casino<br />", "18 US Highway 50<br />", "Stateline, NV 89449 </p>", "", "<p>Please download <a href=\\"http://media.nips.cc/Conferences/2012/Harrahs-Harveys-Room-Info.pdf\\">this PDF for room information</a>.</p>", "", "<h2>Harrah\'s</h2>", "", "<p>Make a reservation at the NIPS rate: <a href=\\"http://www.totalrewards.com/hotel-reservations?propCode=TAH&amp;groupCode=S12NIPS\\">http://www.totalrewards.com/hotel-reservations?propCode=TAH&amp;groupCode=S12NIPS</a></p>", "", "<table>", "  <tr>", "    <th>", "      Type", "    </th>", "    ", "    <th>", "      Sunday - Thursday", "    </th>", "    ", "    <th>", "      Friday - Saturday", "    </th>", "  </tr>", "  ", "  <tr>", "    <td>", "      Luxury Room", "    </td>", "    ", "    <td>", "      $89.00", "    </td>", "    ", "    <td>", "      <span style=\\"text-decoration: line-through;\\">$179.00</span> <span style=\\"color: red; font-weight: bold;\\">sold out</span>", "    </td>", "  </tr>", "  ", "  <tr>", "    <td>", "      Premium Room", "    </td>", "    ", "    <td>", "      $89.00", "    </td>", "    ", "    <td>", "      <span style=\\"text-decoration: line-through;\\">$179.00</span> <span style=\\"color: red; font-weight: bold;\\">sold out</span>", "    </td>", "  </tr>", "</table>", "", "<h2>Harveys</h2>", "", "<p>Harveys is completely <span style=\\"color: red; font-weight: bold;\\">sold out</span> of the NIPS group rate, but rooms may still be booked at the current market rate.</p>", "", "<p>Make a reservation at market price: <a href=\\"http://www.totalrewards.com/hotel-reservations?propCode=HLT&amp;groupCode=S12NIPS\\">http://www.totalrewards.com/hotel-reservations?propCode=HLT&amp;groupCode=S12NIPS</a></p>", "", "<table>", "  <tr>", "    <th>", "      Type", "    </th>", "    ", "    <th>", "      Sunday - Thursday", "    </th>", "    ", "    <th>", "      Friday - Saturday", "    </th>", "  </tr>", "  ", "  <tr>", "    <td>", "      Lake Tower - Luxary Room", "    </td>", "    ", "    <td>", "      <span style=\\"text-decoration: line-through;\\">$79.00</span> <span style=\\"color: red; font-weight: bold;\\">sold out</span>", "    </td>", "    ", "    <td>", "      <span style=\\"text-decoration: line-through;\\">$149.00</span> <span style=\\"color: red; font-weight: bold;\\">sold out</span>", "    </td>", "  </tr>", "  ", "  <tr>", "    <td>", "      Lake Tower - Premium Room", "    </td>", "    ", "    <td>", "      <span style=\\"text-decoration: line-through;\\">$79.00</span> <span style=\\"color: red; font-weight: bold;\\">sold out</span>", "    </td>", "    ", "    <td>", "      <span style=\\"text-decoration: line-through;\\">$149.00</span> <span style=\\"color: red; font-weight: bold;\\">sold out</span>", "    </td>", "  </tr>", "  ", "  <tr>", "    <td>", "      Mountain Tower - Deluxe Room", "    </td>", "    ", "    <td>", "      <span style=\\"text-decoration: line-through;\\">$59.00</span> <span style=\\"color: red; font-weight: bold;\\">sold out</span>", "    </td>", "    ", "    <td>", "      <span style=\\"text-decoration: line-through;\\">$119.00</span> <span style=\\"color: red; font-weight: bold;\\">sold out</span>", "    </td>", "  </tr>", "</table>", "", "<h2>Embassy Suites</h2>", "", "<p>Embassy Suites is an overflow hotel directly across the street from Harrah\'s.</p>", "", "<p><a href=\\"http://embassysuites.hilton.com/en/es/groups/personalized/T/TAHCAES-NIP-20121202/index.jhtml?WT.mc_id=POG\\">Make a reservation at Embassy Suites</a></p>", "", "<h3>Room Descriptions</h3>", "", "<p>Premium rooms at Harvey\'s are on higher floors and tend to be newer and they apparently have larger beds, compared to luxury rooms.</p>", "", "<p>Given that prices are the same, you will probably want the premium rooms above the luxury rooms, while availability lasts.</p>", "", "<p>Most conference events will be at Harveys, except posters, demos, and some workshops. So if being nearby the conference is important, you may want to book at Harveys - however it only takes about 5 minutes to walk from one venue to the other.</p>", "", "<h3>Room Sharing</h3>", "", "<p>Harrah\'s is particularly well-suited for sharing a room because every room has two bathrooms.</p>", "", "<p>NIPS cannot help you find a roommate, but we suggest you look on <a href=\\"https://twitter.com/search/%23NIPS2012\\">twitter</a>.</p>", "", "<h2>Restaurants and Hours</h2>", "", "<p>For on-site restaurants and hours please see <a href=\\"http://media.nips.cc/Conferences/2012/Harrahs-Harveys-Restaurants.pdf\\">http://media.nips.cc/Conferences/2012/Harrahs-Harveys-Restaurants.pdf</a>.</p>", "\\t\\t\\t\\t\\t"]').join(''),
        },{
        	title:"Transportation",
			xtype:"nestedlist",
			iconCls: "home"
        },{
        	title:"Internet",
			xtype:"nestedlist",
			iconCls: "home"
        }]
    }
});





