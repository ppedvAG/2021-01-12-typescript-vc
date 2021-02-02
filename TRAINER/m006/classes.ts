console.log('\n\n CLASSES');

class Table implements IFurniture {
    // wenn eine Prop private sein muss, dann ist sie im Interface nicht erwähnt
    private price!: number;    
    constructor(
        public name: string, 
        readonly material: string, 
        public height: number,
        public width: number,
        public depth: number        
    ){}
    setPrice(newPrice: number){
        this.price = newPrice
    }
    getPrice(){ // eine Methode
        return this.price
    }
    // wenn irgendwo später Probleme mit 'this' auftauchen, 
    // wäre das die sichere Variante
    getPrice2 = () => { // eine Property, die als Methode genutzt wird
        return this.price
    }
}

let myTable2 = new Table('IkeaTable', 'Plastik', 50, 50, 50)
// myTable2.price // ist als Prop von myTable2 nicht sichtbar
myTable2.setPrice(20)
console.log('myTable2.getPrice() :>> ', myTable2.getPrice());
// myTable2.material = 'holz' // Cannot assign to 'material' because it is a read-only property.