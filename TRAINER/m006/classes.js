"use strict";
console.log('\n\n CLASSES');
var Table = /** @class */ (function () {
    function Table(name, material, height, width, depth) {
        var _this = this;
        this.name = name;
        this.material = material;
        this.height = height;
        this.width = width;
        this.depth = depth;
        // wenn irgendwo später Probleme mit 'this' auftauchen, 
        // wäre das die sichere Variante
        this.getPrice2 = function () {
            return _this.price;
        };
    }
    Table.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Table.prototype.getPrice = function () {
        return this.price;
    };
    return Table;
}());
var myTable2 = new Table('IkeaTable', 'Plastik', 50, 50, 50);
// myTable2.price // ist als Prop von myTable2 nicht sichtbar
myTable2.setPrice(20);
console.log('myTable2.getPrice() :>> ', myTable2.getPrice());
// myTable2.material = 'holz' // Cannot assign to 'material' because it is a read-only property.
