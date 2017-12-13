var iShop = React.createClass({
    
    displayName: 'Sportgoods',

    propTypes: {
        items:React.propTypes.arrayOf(
            React.propTypes.shape({
                code:React.propTypes.number.isRequired,
                item:React.propTypes.string.isRequired,
                count:React.propTypes.number.isRequired,
                price:React.propTypes.number.isRequired,
                url:React.propTypes.string.isRequired,
            })
        )

    },

    render: function(){
        var itemList=[];
        this.props.items.forEach(function(v,i,a){
            var itStr=React.DOM.tr({key:v.code},
                React.DOM.td(null, v.item),
                React.DOM.td(null, v.url),
                React.DOM.td(null, v.price),
                React.DOM.td(null, v.count),
            )  
        itemList.push(itStr); 
        }
        );

        return React.DOM.table(null,
            React.DOM.caption(null, 'Спорттовары.Склад'),
            React.DOM.tbody(null,
                React.DOM.tr(null,
                    React.DOM.th(null, 'Наименование'),
                    React.DOM.th(null, 'Фото'),
                    React.DOM.th(null, 'Цена, руб.'),
                    React.DOM.th(null, 'Остаток'),),
                itemList
            )
        )
   
    }


})