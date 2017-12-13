var iShop = React.createClass({
    
    displayName: 'Sportgoods',

    propTypes: {
        items:React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code:React.PropTypes.number.isRequired,
                item:React.PropTypes.string.isRequired,
                count:React.PropTypes.number.isRequired,
                price:React.PropTypes.number.isRequired,
                url:React.PropTypes.string.isRequired,
            })
        )

    },

    render: function(){
        var itemList=[];
        this.props.items.forEach(function(v){
            var itemStr=React.DOM.tr({key:v.code},
                React.DOM.td(null, v.code),
                React.DOM.td(null, v.item),
                React.DOM.td(null, 
                React.DOM.a({href:v.url}, 'смотреть')),
                React.DOM.td(null, v.price),
                React.DOM.td(null, v.count),
            )  
        itemList.push(itemStr); 
        });

        return React.DOM.table(null,
            React.DOM.caption(null, 'Спорттовары.Склад'),
            React.DOM.tbody(null,
                React.DOM.tr(null,
                    React.DOM.th(null, 'Инв. №'),
                    React.DOM.th(null, 'Наименование'),
                    React.DOM.th(null, 'Фото'),
                    React.DOM.th(null, 'Цена, руб.'),
                    React.DOM.th(null, 'Остаток'),),
                itemList
            )
        )
   
    },


})