class Player {

	constructor(name, type)

	{
		console.log(this);

		this.name = name;
		this.type = type;
	}

	introduce(){

		console.log(`Hi I am ${this.name}, I am ${this.type}` )
	}

}

class Wizard extends Player{

	constructor(name, type){

		super(name, type)

		console.log(this)
	}

	play(){

	console.log(`Weeeeeee I am a ${this.type}`);

}

}

const wizard1 = new Wizard('Shally', 'Healer');
const wizard1 = new Wizard('shawn', 'Dark Magic');



//my Practice work on Instatiation.



class Location {

		constructor(name, type)

		{

			console.log(this)

			this.name= name;
			this.type= type;

		}

		address(){

			console.log(`My name is ${this.name}, an indigine of ${this.type} state.`)
		}
}

class Wizard extends Location {

		constructor(name, type)

		{
			super(name, type)

			console.log(this)

		}

		getMyLocation(){

			console.log(`I am from ${this.type} State.`)
		}
}

let candidate1 = new Wizard('Ibrahim', 'Osun');
let candidate2 = new Wizard('Abdurrahman', 'Ogun');



//Solution to the Exercise

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 


class Animal {
		constructor(name, type, color)
		{
			console.log(this)

			this.name= name;
			this.type= type;
			this.color= color;
		}

		cow(){
			
			console.log(`My cow name is ${this.name}, is ${this.type} and ${this.color} in color.`)
		}
}
class Mamal extends Animal {
		constructor(name, type, color) 
		{   super (name, type, color)
			console.log(this)
		}

		sound(){
					console.log(`Moo's I am ${this.name} and have a ${this.color} ${this.type}`)

				}
}

const mamal1 = new Mamal('Popopo', 'Calf', 'Red');












































