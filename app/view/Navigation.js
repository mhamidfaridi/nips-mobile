Ext.define('SlideNav.view.Navigation', {
    extend: 'Ext.List',
    xtype: 'navigation',
    requires : ['Ext.data.Store'],
    config: {
        cls : 'nav-list',
        itemTpl : '{title}',
        data : [{
            title : 'All'
        },{
            title : 'Breaks'
        },{
            title : 'Conference Overview'
        },{
            title : 'Demonstrations'
        },{
            title : 'Invited Talks'
        },{
            title : 'Orals'
        },{
            title : 'Posner Lecture'
        },{
            title : 'Posters'
        },{
            title : 'Receptions'
        },{
            title : 'Registration Desk'
        },{
            title : 'Spotlight'
        },{
            title : 'Talks'
        },{
            title : 'Tutorials'
        },{
            title : 'Workshops'
        }]
    }
});