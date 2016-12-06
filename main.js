function Contact (name, phone, address, added, id) {
	this.name = name
	this.phone = phone
	this.address = address
	this.added = new Date
	this.id= id
	this.create = function () {
		return `${this.name} ${this.phone} ${this.address}`}
}

function ContactList () {
	this.contacts = []
	this.add = function (contact) {
    contact.id = Math.random() * 1000
    this.contacts.push(contact)
    }
	this.people = []
    this.find = function (name) {
	this.myContact.name
console.log(name)
	this.people.push(name)
    }
}

var alex = new Contact ('Alex Thomas', 48287382828, {street:'swag road', city:'Orlando', state:'FL'})
var huy = new Contact ('Huy', 4917291791, {street:'sample street', city:'Orlando', state:'FL'})
var adam = new Contact ('Adam', 9729791371, {street:'trial trail', city:'Orlando', state:'FL'})
var adams = new Contact ('Adam', 1234434344, {street:'trial trails', city:'Orlando', state:'FL'})
var myContact = new ContactList()
myContact.add(alex)
myContact.add(huy)
myContact.add(adam)
myContact.add(adams)
