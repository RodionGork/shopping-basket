var goods = [
    [0, 'Пирожок с клюквой', 1.5],
    [1, 'Жбанчик пива', 5],
    [2, 'Кулебяки с курабяками', 3.5],
    [3, 'Штоф с водкой', 7],
    [4, 'Гороховая каша', 1],
    [5, 'Суши с семгой', 8.5],
    [6, 'Кувшин кваса', 4],
    [7, 'Каша из конопли', 6.5],
    [8, 'Непонятная размазня', 2.5],
    [9, 'Котлеты столовские', 5],
    [10, 'Кукиш с маслом', 11],
    [11, 'Булка хлеба', 2],
    [12, 'Батон крошеный', 4],
];

var basket = {
};

$(function() {

    window.addItem = function(item) {
        $('#add-modal [name=item]').val(goods[item][1]);
        $('#add-modal [name=id]').val(item);
        $('#add-modal').modal();
    }
    
    window.doAdd = function() {
        var id = $('#add-modal [name=id]').val();
        var qty = $('#add-modal [name=qty]').val() * 1;
        basket[id] = qty;
        redrawBasket();
        $('#add-modal').modal('hide');
    }
    
    function redrawBasket() {
        var table = $("#basket");
        table.find("tbody").empty();
        var sum = 0;
        for (var i in basket) {
            var g = goods[i * 1];
            var cost = basket[i] * g[2];
            sum += cost;
            var tr = $('<tr><td>' + g[1] + '</td><td>' + basket[i] +'</td><td>' + cost + '$</td></tr>');
            tr.appendTo(table.find("tbody"));
        }
        $('#total').html(sum);
    }
    
    var goodsTable = $("#goods");
    
    for (var i in goods) {
        var g = goods[i];
        var tr = $('<tr><td><a href="#" onclick="addItem(' + g[0] + ')">' + g[1] + '</a></td><td>' + g[2] +'$</td></tr>');
        tr.appendTo(goodsTable.find("tbody"));
    }
    
    $('#btn-order').click(function() {
        alert('to be implemented yet');
        return false;
    });
});

