// players list in and array inside each of the clubs of the Premier League

'use strict';

export {
	playersList
};

const playersList = [
	// Arsenal
	{
		club: "Arsenal",
		stadium: "Emirates Stadium",
		city: "London",
		color: "#F81A08",
		manager: {
			name: "Unai Emery",
			age: 47,
			nationality: "Spain",
			joined: "23 May 2018"
		},
		players: [
			{
				name: "Petr Cech",
				position: "Goalkeeper",
				number: 1,
				age: 36,
				height: 196,
				nationality: "Czech Republic",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Bernd Leno",
				position: "Goalkeeper",
				number: 19,
				age: 26,
				height: 190,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Emiliano Martínez",
				position: "Goalkeeper",
				number: 26,
				age: 26,
				height: 195,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Héctor Bellerín",
				position: "Defender",
				number: 2,
				age: 23,
				height: 178,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Laurent Koscielny",
				position: "Defender",
				number: 6,
				age: 33,
				height: 186,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Rob Holding",
				position: "Defender",
				number: 16,
				age: 23,
				height: 189,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Nacho Monreal",
				position: "Defender",
				number: 18,
				age: 32,
				height: 179,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Shkodran Mustafi",
				position: "Defender",
				number: 20,
				age: 26,
				height: 184,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Konstantinos Mavropanos",
				position: "Defender",
				number: 27,
				age: 20,
				height: 194,
				nationality: "Greece",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Sead Kolasinac",
				position: "Defender",
				number: 31,
				age: 25,
				height: 183,
				nationality: "Bosnia And Herzegovina",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Stephan Lichtsteiner",
				position: "Defender",
				number: 12,
				age: 34,
				height: 182,
				nationality: "Switzerland",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Carl Jenkinson",
				position: "Defender",
				number: 22,
				age: 26,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Sokratis",
				position: "Defender",
				number: 5,
				age: 30,
				height: 186,
				nationality: "Greece",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Zech Medley",
				position: "Defender",
				number: 47,
				age: 18,
				height: 195,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Mohamed Elneny",
				position: "Midfielder",
				number: 4,
				age: 26,
				height: 180,
				nationality: "Egypt",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Henrikh Mkhitaryan",
				position: "Midfielder",
				number: 7,
				age: 29,
				height: 177,
				nationality: "Armenia",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Aaron Ramsey",
				position: "Midfielder",
				number: 8,
				age: 27,
				height: 178,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Mesut Özil",
				position: "Midfielder",
				number: 10,
				age: 30,
				height: 180,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Alex Iwobi",
				position: "Midfielder",
				number: 17,
				age: 22,
				height: 180,
				nationality: "Nigeria",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Ainsley Maitland-Niles",
				position: "Midfielder",
				number: 15,
				age: 21,
				height: 177,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Granit Xhaka",
				position: "Midfielder",
				number: 34,
				age: 26,
				height: 185,
				nationality: "Switzerland",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Lucas Torreira",
				position: "Midfielder",
				number: 11,
				age: 22,
				height: 168,
				nationality: "Uruguay",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Matteo Guendouzi",
				position: "Midfielder",
				number: 29,
				age: 19,
				height: 185,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Emile Smith-Rowe",
				position: "Midfielder",
				number: 55,
				age: 18,
				height: 182,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Alexandre Lacazette",
				position: "Forward",
				number: 9,
				age: 27,
				height: 175,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Pierre-Emerick Aubameyang",
				position: "Forward",
				number: 14,
				age: 29,
				height: 187,
				nationality: "Gabon",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Danny Welbeck",
				position: "Forward",
				number: 23,
				age: 27,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}, {
				name: "Eddie Nketiah",
				position: "Forward",
				number: 49,
				age: 19,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Arsenal"
			}
		]
	},
	// AFC Bournemouth
	{
		club: "AFC Bournemouth",
		stadium: "Vitality Stadium",
		city: "Bournemouth",
		color: "#E62333",
		manager: {
			name: "Eddie Howe",
			age: 40,
			nationality: "England",
			joined: "11 October 2012"
		},
		players: [
			{
				name: "Artur Boruc",
				position: "Goalkeeper",
				number: 1,
				age: 38,
				height: 193,
				nationality: "Poland",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Asmir Begovic",
				position: "Goalkeeper",
				number: 27,
				age: 31,
				height: 199,
				nationality: "Bosnia And Herzegovina",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Aaron Ramsdale",
				position: "Goalkeeper",
				number: 12,
				age: 20,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Mark Travers",
				position: "Goalkeeper",
				number: 42,
				age: 19,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Simon Francis",
				position: "Defender",
				number: 2,
				age: 33,
				height: 193,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Steve Cook",
				position: "Defender",
				number: 3,
				age: 27,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Nathan Aké",
				position: "Defender",
				number: 5,
				age: 23,
				height: 180,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Charlie Daniels",
				position: "Defender",
				number: 11,
				age: 32,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Adam Smith",
				position: "Defender",
				number: 15,
				age: 27,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Tyrone Mings",
				position: "Defender",
				number: 26,
				age: 25,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Jack Simpson",
				position: "Defender",
				number: 25,
				age: 21,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Diego Rico",
				position: "Defender",
				number: 21,
				age: 25,
				height: 183,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Dan Gosling",
				position: "Midfielder",
				number: 4,
				age: 28,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Andrew Surman",
				position: "Midfielder",
				number: 6,
				age: 32,
				height: 78,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Marc Pugh",
				position: "Midfielder",
				number: 7,
				age: 31,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Lewis Cook",
				position: "Midfielder",
				number: 16,
				age: 21,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Junior Stanislas",
				position: "Midfielder",
				number: 19,
				age: 28,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Ryan Fraser",
				position: "Midfielder",
				number: 24,
				age: 24,
				height: 163,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Jordon Ibe",
				position: "Midfielder",
				number: 10,
				age: 22,
				height: 176,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "David Brooks",
				position: "Midfielder",
				number: 20,
				age: 21,
				height: 173,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Jefferson Lerma",
				position: "Midfielder",
				number: 8,
				age: 23,
				height: 179,
				nationality: "Colombia",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Kyle Taylor",
				position: "Midfielder",
				number: 28,
				age: 19,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Mihai-Alexandru Dobre",
				position: "Midfielder",
				number: 54,
				age: 20,
				height: 178,
				nationality: "Romania",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Nnamdi Ofoborh",
				position: "Midfielder",
				number: 59,
				age: 18,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Callum Wilson",
				position: "Forward",
				number: 13,
				age: 26,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Joshua King",
				position: "Forward",
				number: 17,
				age: 26,
				height: 180,
				nationality: "Norway",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Jermain Defoe",
				position: "Forward",
				number: 18,
				age: 38,
				height: 171,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}, {
				name: "Lys Mousset",
				position: "France",
				number: 9,
				age: 22,
				height: 184,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "AFC Bournemouth"
			}
		]
	},
	// Brighton and Hove Albion
	{
		club: "Brighton and Hove Albion",
		stadium: "Amex Stadium",
		city: "Falmer",
		color: "#1F4EA3",
		manager: {
			name: "Chris Hughton",
			age: 59,
			nationality: "Ireland",
			joined: "31 December 2014"
		},
		players: [
			{
				name: "Mat Ryan",
				position: "Goalkeeper",
				number: 1,
				age: 26,
				height: 184,
				nationality: "Australia",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Jason Steele",
				position: "Goalkeeper",
				number: 23,
				age: 28,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "David Button",
				position: "Goalkeeper",
				number: 27,
				age: 29,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Bruno",
				position: "Defender",
				number: 2,
				age: 38,
				height: 181,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Gaëtan Bong",
				position: "Defender",
				number: 3,
				age: 30,
				height: 187,
				nationality: "Cameroon",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Lewis Dunk",
				position: "Defender",
				number: 5,
				age: 26,
				height: 192,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Ezequiel Schelotto",
				position: "Defender",
				number: 21,
				age: 29,
				height: 187,
				nationality: "Italy",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Shane Duffy",
				position: "Defender",
				number: 4,
				age: 26,
				height: 193,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Markus Suttner",
				position: "Defender",
				number: 29,
				age: 31,
				height: 179,
				nationality: "Austria",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Leon Balogun",
				position: "Defender",
				number: 14,
				age: 30,
				height: 190,
				nationality: "Nigeria",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Bernardo",
				position: "Defender",
				number: 30,
				age: 23,
				height: 186,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Martín Montoya",
				position: "Defender",
				number: 22,
				age: 27,
				height: 175,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Ben Barclay",
				position: "Defender",
				number: 35,
				age: 22,
				height: 181,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Dale Stephens",
				position: "Midfielder",
				number: 6,
				age: 29,
				height: 169,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Beram Kayal",
				position: "Midfielder",
				number: 7,
				age: 30,
				height: 178,
				nationality: "Israel",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Anthony Knockaert",
				position: "Midfielder",
				number: 11,
				age: 26,
				height: 172,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Pascal Groß",
				position: "Midfielder",
				number: 13,
				age: 27,
				height: 181,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Solly March",
				position: "Midfielder",
				number: 20,
				age: 24,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Davy Pröpper",
				position: "Midfielder",
				number: 24,
				age: 27,
				height: 185,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Yves Bissouma",
				position: "Midfielder",
				number: 8,
				age: 22,
				height: 182,
				nationality: "Mali",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Will Collar",
				position: "Midfielder",
				number: 58,
				age: 21,
				height: 173,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Glenn Murray",
				position: "Forward",
				number: 17,
				age: 35,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "José Izquierdo",
				position: "Forward",
				number: 19,
				age: 26,
				height: 171,
				nationality: "Colombia",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Jürgen Locadia",
				position: "Forward",
				number: 9,
				age: 24,
				height: 185,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Florin Andone",
				position: "Forward",
				number: 10,
				age: 25,
				height: 180,
				nationality: "Romania",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Alireza Jahanbakhsh",
				position: "Forward",
				number: 16,
				age: 25,
				height: 180,
				nationality: "Iran",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Viktor Gyokeres",
				position: "Forward",
				number: 42,
				age: 20,
				height: 187,
				nationality: "Sweden",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}, {
				name: "Aaron Connolly",
				position: "Forward",
				number: 44,
				age: 18,
				height: 180,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Brighton and Hove Albion"
			}
		]
	},
	// Burnley
	{
		club: "Burnley",
		stadium: "Turf Moor",
		city: "Burnley",
		color: "#680139",
		manager: {
			name: "Sean Dyche",
			age: 47,
			nationality: "England",
			joined: "30 October 2012"
		},
		players: [
			{
				name: "Tom Heaton",
				position: "Goalkeeper",
				number: 1,
				age: 32,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Anders Lindegaard",
				position: "Goalkeeper",
				number: 22,
				age: 31,
				height: 193,
				nationality: "Denmark",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Nick Pope",
				position: "Goalkeeper",
				number: 29,
				age: 26,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Adam Legzdins",
				position: "Goalkeeper",
				number: 30,
				age: 31,
				height: 190,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Joe Hart",
				position: "Goalkeeper",
				number: 20,
				age: 31,
				height: 196,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Matthew Lowton",
				position: "Defender",
				number: 2,
				age: 29,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Charlie Taylor",
				position: "Defender",
				number: 3,
				age: 25,
				height: 176,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "James Tarkowski",
				position: "Defender",
				number: 5,
				age: 25,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Ben Mee",
				position: "Defender",
				number: 6,
				age: 29,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Stephen Ward",
				position: "Defender",
				number: 23,
				age: 33,
				height: 184,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Phil Bardsley",
				position: "Defender",
				number: 26,
				age: 33,
				height: 180,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Kevin Long",
				position: "Defender",
				number: 28,
				age: 28,
				height: 188,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Ben Gibson",
				position: "Defender",
				number: 14,
				age: 25,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Jack Cork",
				position: "Midfielder",
				number: 4,
				age: 29,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Robbie Brady",
				position: "Midfielder",
				number: 12,
				age: 26,
				height: 176,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Jeff Hendrick",
				position: "Midfielder",
				number: 13,
				age: 26,
				height: 185,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Steven Defour",
				position: "Midfielder",
				number: 16,
				age: 30,
				height: 173,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Johann Berg Gudmundsson",
				position: "Midfielder",
				number: 7,
				age: 28,
				height: 186,
				nationality: "Iceland",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Ashley Westwood",
				position: "Midfielder",
				number: 18,
				age: 28,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Aaron Lennon",
				position: "Midfielder",
				number: 25,
				age: 31,
				height: 165,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Sam Vokes",
				position: "Forward",
				number: 9,
				age: 29,
				height: 186,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Ashley Barnes",
				position: "Forward",
				number: 10,
				age: 29,
				height: 186,
				nationality: "Austria",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Chris Wood",
				position: "Forward",
				number: 11,
				age: 26,
				height: 191,
				nationality: "New Zealand",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Daniel Agyei",
				position: "Forward",
				number: 22,
				age: 21,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Matej Vydra",
				position: "Forward",
				number: 27,
				age: 26,
				height: 180,
				nationality: "Czech Republic",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}, {
				name: "Dwight McNeil",
				position: "Forward",
				number: 31,
				age: 18,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Burnley"
			}
		]
	},
	// Cardiff City
	{
		club: "Cardiff City",
		stadium: "Cardif City Stadium",
		city: "Cardiff",
		color: "#2257A7",
		manager: {
			name: "Neil Warnock",
			age: 69,
			nationality: "England",
			joined: "5 October 2016"
		},
		players: [
			{
				name: "Neil Etheridge",
				position: "Goalkeeper",
				number: 1,
				age: 28,
				height: 188,
				nationality: "Philippines",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Alex Smithies",
				position: "Goalkeeper",
				number: 12,
				age: 28,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Brian Murphy",
				position: "Goalkeeper",
				number: 28,
				age: 35,
				height: 183,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Lee Peltier",
				position: "Defender",
				number: 2,
				age: 31,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Joe Bennett",
				position: "Defender",
				number: 3,
				age: 28,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Sean Morrison",
				position: "Defender",
				number: 4,
				age: 27,
				height: 193,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Bruno Ecuele Manga",
				position: "Defender",
				number: 5,
				age: 30,
				height: 186,
				nationality: "Gaban",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Jazz Richards",
				position: "Defender",
				number: 6,
				age: 27,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Sol Bamba",
				position: "Defender",
				number: 22,
				age: 33,
				height: 190,
				nationality: "Cota D'Ivoire",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Matthew Connolly",
				position: "Defender",
				number: 16,
				age: 31,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Callum Paterson",
				position: "Defender",
				number: 13,
				age: 24,
				height: 183,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Greg Cunningham",
				position: "Defender",
				number: 18,
				age: 27,
				height: 183,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Joe Ralls",
				position: "MidFielder",
				number: 8,
				age: 25,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Kadeem Harris",
				position: "MidFielder",
				number: 23,
				age: 25,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Loïc Damour",
				position: "MidFielder",
				number: 20,
				age: 27,
				height: 180,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Josh Murphy",
				position: "MidFielder",
				number: 11,
				age: 23,
				height: 173,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Bobby Reid",
				position: "MidFielder",
				number: 14,
				age: 25,
				height: 170,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Aron Gunnarsson",
				position: "MidFielder",
				number: 17,
				age: 29,
				height: 178,
				nationality: "Iceland",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Víctor Camarasa",
				position: "MidFielder",
				number: 21,
				age: 24,
				height: 183,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Harry Arter",
				position: "MidFielder",
				number: 7,
				age: 28,
				height: 176,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Danny Ward",
				position: "Forward",
				number: 9,
				age: 26,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Kenneth Zohore",
				position: "Forward",
				number: 10,
				age: 24,
				height: 187,
				nationality: "Denmark",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Nathaniel Mendez-Laing",
				position: "Forward",
				number: 19,
				age: 26,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "David Junior Hoilett",
				position: "Forward",
				number: 33,
				age: 28,
				height: 173,
				nationality: "Canada",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}, {
				name: "Gary Madine",
				position: "Forward",
				number: 24,
				age: 28,
				height: 193,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Cardiff City"
			}
		]
	},
	// Chelsea
	{
		club: "Chelsea",
		stadium: "Stamford Bridge",
		city: "London",
		color: "#1D4092",
		manager: {
			name: "Maurizio Sarri",
			age: 59,
			nationality: "Italy",
			joined: "14 July 2018"
		},
		players: [
			{
				name: "Willy Caballero",
				position: "Goalkeeper",
				number: 13,
				age: 37,
				height: 186,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Robert Green",
				position: "Goalkeeper",
				number: 31,
				age: 38,
				height: 187,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Marcin Bulka",
				position: "Goalkeeper",
				number: 59,
				age: 19,
				height: 196,
				nationality: "Poland",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Kepa Arrizabalaga",
				position: "Goalkeeper",
				number: 1,
				age: 24,
				height: 189,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Antonio Rüdiger",
				position: "Defender",
				number: 2,
				age: 25,
				height: 190,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Marcos Alonso",
				position: "Defender",
				number: 3,
				age: 27,
				height: 188,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Victor Moses",
				position: "Defender",
				number: 15,
				age: 27,
				height: 177,
				nationality: "Nigeria",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Davide Zappacosta",
				position: "Defender",
				number: 21,
				age: 26,
				height: 185,
				nationality: "Italy",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Gary Cahill",
				position: "Defender",
				number: 24,
				age: 32,
				height: 193,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Andreas Christensen",
				position: "Defender",
				number: 27,
				age: 22,
				height: 188,
				nationality: "Denmark",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "César Azpilicueta",
				position: "Defender",
				number: 28,
				age: 29,
				height: 178,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "David Luiz",
				position: "Defender",
				number: 30,
				age: 31,
				height: 189,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Emerson",
				position: "Defender",
				number: 33,
				age: 24,
				height: 176,
				nationality: "Italy",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Ethan Ampadu",
				position: "Defender",
				number: 44,
				age: 18,
				height: 183,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Cesc Fàbregas",
				position: "Midfielder",
				number: 4,
				age: 31,
				height: 180,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Daniel Drinkwater",
				position: "Midfielder",
				number: 6,
				age: 28,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "N'Golo Kanté",
				position: "Midfielder",
				number: 7,
				age: 27,
				height: 168,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Ross Barkley",
				position: "Midfielder",
				number: 8,
				age: 24,
				height: 189,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Ruben Loftus-Cheek",
				position: "Midfielder",
				number: 12,
				age: 22,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Jorginho",
				position: "Midfielder",
				number: 5,
				age: 26,
				height: 180,
				nationality: "Italy",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Mateo Kovacic",
				position: "Midfielder",
				number: 17,
				age: 24,
				height: 178,
				nationality: "Croatia",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Álvaro Morata",
				position: "Forward",
				number: 29,
				age: 26,
				height: 189,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Eden Hazard",
				position: "Forward",
				number: 10,
				age: 27,
				height: 173,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Pedro",
				position: "Forward",
				number: 11,
				age: 31,
				height: 169,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Olivier Giroud",
				position: "Forward",
				number: 18,
				age: 32,
				height: 192,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Willian",
				position: "Forward",
				number: 22,
				age: 30,
				height: 175,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}, {
				name: "Callum Hudson-Odoi",
				position: "Forward",
				number: 20,
				age: 17,
				height: 182,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Chelsea"
			}
		]
	},
	// Crystal Palace
	{
		club: "Crystal Palace",
		stadium: "Selhurst Park",
		city: "London",
		color: "#E53D2A",
		manager: {
			name: "Roy Hodgson",
			age: 71,
			nationality: "England",
			joined: "12 September 2017"
		},
		players: [
			{
				name: "Julian Speroni",
				position: "Goalkeeper",
				number: 1,
				age: 39,
				height: 186,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Wayne Hennessey",
				position: "Goalkeeper",
				number: 13,
				age: 31,
				height: 198,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Vicente Guaita",
				position: "Goalkeeper",
				number: 31,
				age: 31,
				height: 190,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Dion Henry",
				position: "Goalkeeper",
				number: 30,
				age: 21,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Patrick van Aanholt",
				position: "Defender",
				number: 3,
				age: 28,
				height: 176,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "James Tomkins",
				position: "Defender",
				number: 5,
				age: 29,
				height: 192,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Scott Dann",
				position: "Defender",
				number: 6,
				age: 31,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Mamadou Sakho",
				position: "Defender",
				number: 12,
				age: 28,
				height: 187,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Jeffrey Schlupp",
				position: "Defender",
				number: 15,
				age: 25,
				height: 178,
				nationality: "Ghana",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Pape Souaré",
				position: "Defender",
				number: 27,
				age: 28,
				height: 178,
				nationality: "Senegal",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Aaron Wan-Bissaka",
				position: "Defender",
				number: 29,
				age: 20,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Martin Kelly",
				position: "Defender",
				number: 34,
				age: 28,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Jairo Riedewald",
				position: "Defender",
				number: 44,
				age: 22,
				height: 182,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Joel Ward",
				position: "Defender",
				number: 2,
				age: 29,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Sam Woods",
				position: "Defender",
				number: 35,
				age: 20,
				height: 186,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Luka Milivojevic",
				position: "Midfielder",
				number: 4,
				age: 27,
				height: 186,
				nationality: "Serbia",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Andros Townsend",
				position: "Midfielder",
				number: 10,
				age: 27,
				height: 181,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "James McArthur",
				position: "Midfielder",
				number: 18,
				age: 31,
				height: 178,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Jason Puncheon",
				position: "Midfielder",
				number: 42,
				age: 32,
				height: 173,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Sullay Kaikai",
				position: "Midfielder",
				number: 11,
				age: 23,
				height: 182,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Jonathan Williams",
				position: "Midfielder",
				number: 20,
				age: 25,
				height: 168,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Cheikhou Kouyaté",
				position: "Midfielder",
				number: 8,
				age: 28,
				height: 189,
				nationality: "Senegal",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Max Meyer",
				position: "Midfielder",
				number: 7,
				age: 23,
				height: 173,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Gio McGregor",
				position: "Midfielder",
				number: 36,
				age: 19,
				height: 176,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Alexander Sørloth",
				position: "Forward",
				number: 9,
				age: 22,
				height: 193,
				nationality: "Norway",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Wilfried Zaha",
				position: "Forward",
				number: 11,
				age: 25,
				height: 180,
				nationality: "Cota D'Ivoire",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Christian Benteke",
				position: "Forward",
				number: 17,
				age: 27,
				height: 190,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Connor Wickham",
				position: "Forward",
				number: 21,
				age: 25,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}, {
				name: "Jordan Ayew",
				position: "Forward",
				number: 14,
				age: 27,
				height: 182,
				nationality: "Ghana",
				goals: 0,
				assists: 0,
				club: "Crystal Palace"
			}
		]
	},
	// Everton
	{
		club: "Everton",
		stadium: "Goodison Park",
		city: "Liverpool",
		color: "#1C1E99",
		manager: {
			name: "Marco Silva",
			age: 41,
			nationality: "Portugal",
			joined: "31 May 2018"
		},
		players: [
			{
				name: "Jordan Pickford",
				position: "Goalkeeper",
				number: 1,
				age: 24,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Maarten Stekelenburg",
				position: "Goalkeeper",
				number: 22,
				age: 36,
				height: 197,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Mateusz Hewelt",
				position: "Goalkeeper",
				number: 41,
				age: 22,
				height: 186,
				nationality: "Poland",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "João Virgínia",
				position: "Goalkeeper",
				number: 33,
				age: 19,
				height: 191,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Leighton Baines",
				position: "Defender",
				number: 3,
				age: 33,
				height: 170,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Michael Keane",
				position: "Defender",
				number: 4,
				age: 25,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Phil Jagielka",
				position: "Defender",
				number: 6,
				age: 36,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Seamus Coleman",
				position: "Defender",
				number: 23,
				age: 30,
				height: 177,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Mason Holgate",
				position: "Defender",
				number: 2,
				age: 22,
				height: 184,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Jonjoe Kenny",
				position: "Defender",
				number: 43,
				age: 21,
				height: 176,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Lucas Digne",
				position: "Defender",
				number: 12,
				age: 25,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Yerry Mina",
				position: "Defender",
				number: 13,
				age: 24,
				height: 195,
				nationality: "Colombia",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Kurt Zouma",
				position: "Defender",
				number: 5,
				age: 24,
				height: 190,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Tyias Browning",
				position: "Defender",
				number: 18,
				age: 24,
				height: 181,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Morgan Schneiderlin",
				position: "Midfielder",
				number: 18,
				age: 28,
				height: 181,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "James McCarthy",
				position: "Midfielder",
				number: 16,
				age: 27,
				height: 180,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Idrissa Gueye",
				position: "Midfielder",
				number: 17,
				age: 29,
				height: 174,
				nationality: "Senegal",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Gylfi Sigurdsson",
				position: "Midfielder",
				number: 10,
				age: 29,
				height: 186,
				nationality: "Iceland",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Tom Davies",
				position: "Midfielder",
				number: 26,
				age: 20,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Beni Baningime",
				position: "Midfielder",
				number: 34,
				age: 20,
				height: 178,
				nationality: "The Democratic Republic Of Congo",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Kieran Dowell",
				position: "Midfielder",
				number: 20,
				age: 21,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Bernard",
				position: "Midfielder",
				number: 20,
				age: 26,
				height: 166,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "André Gomes",
				position: "Midfielder",
				number: 8,
				age: 25,
				height: 188,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Theo Walcott",
				position: "Forward",
				number: 11,
				age: 29,
				height: 176,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Cenk Tosun",
				position: "Forward",
				number: 14,
				age: 27,
				height: 183,
				nationality: "Turkey",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Oumar Niasse",
				position: "Forward",
				number: 34,
				age: 28,
				height: 182,
				nationality: "Senegal",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Dominic Calvert-Lewin",
				position: "Forward",
				number: 29,
				age: 21,
				height: 176,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Ademola Lookman",
				position: "Forward",
				number: 31,
				age: 21,
				height: 174,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Everton"
			}, {
				name: "Richarlison",
				position: "Forward",
				number: 30,
				age: 21,
				height: 179,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Everton"
			}
		]
	},
	// Fulham
	{
		club: "Fulham",
		stadium: "Craven Cottage",
		city: "London",
		color: "#F5F5F5",
		manager: {
			name: "Slavisa Jokanovic",
			age: 50,
			nationality: "Serbia",
			joined: "27 December 2015"
		},
		players: [
			{
				name: "Marcus Bettinelli",
				position: "Goalkeeper",
				number: 1,
				age: 26,
				height: 194,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Fabri",
				position: "Goalkeeper",
				number: 31,
				age: 30,
				height: 185,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Sergio Rico",
				position: "Goalkeeper",
				number: 25,
				age: 25,
				height: 194,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Luca Ashby-Hammond",
				position: "Defender",
				number: 50,
				age: 17,
				height: 174,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Denis Odoi",
				position: "Defender",
				number: 4,
				age: 30,
				height: 177,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Tim Ream",
				position: "Defender",
				number: 13,
				age: 31,
				height: 186,
				nationality: "United States",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Cyrus Christie",
				position: "Defender",
				number: 22,
				age: 26,
				height: 188,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Maxime Le Marchand",
				position: "Defender",
				number: 20,
				age: 29,
				height: 185,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Alfie Mawson",
				position: "Defender",
				number: 26,
				age: 24,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Calum Chambers",
				position: "Defender",
				number: 5,
				age: 23,
				height: 182,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Timothy Fosu-Mensah",
				position: "Defender",
				number: 21,
				age: 20,
				height: 190,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Joe Bryan",
				position: "Defender",
				number: 23,
				age: 25,
				height: 170,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Steven Sessegnon",
				position: "Defender",
				number: 43,
				age: 18,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Ryan Sessegnon",
				position: "Midfielder",
				number: 3,
				age: 18,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Kevin McDonald",
				position: "Midfielder",
				number: 6,
				age: 29,
				height: 192,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Neeskens Kebano",
				position: "Midfielder",
				number: 7,
				age: 26,
				height: 170,
				nationality: "The Democratic Republic Of Congo",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Stefan Johansen",
				position: "Midfielder",
				number: 8,
				age: 27,
				height: 182,
				nationality: "Norway",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Tom Cairney",
				position: "Midfielder",
				number: 10,
				age: 27,
				height: 185,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Ibrahima Cissé",
				position: "Midfielder",
				number: 44,
				age: 24,
				height: 184,
				nationality: "Ghana",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Jean Michael Seri",
				position: "Midfielder",
				number: 24,
				age: 27,
				height: 168,
				nationality: "Cote D'Ivoire",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "André Schürrle",
				position: "Midfielder",
				number: 14,
				age: 27,
				height: 184,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "André-Frank Zambo Anguissa",
				position: "Midfielder",
				number: 29,
				age: 22,
				height: 184,
				nationality: "Cameroon",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Luca De La Torre",
				position: "Midfielder",
				number: 36,
				age: 20,
				height: 178,
				nationality: "United States",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Matt O'Riley",
				position: "Midfielder",
				number: 33,
				age: 17,
				height: 187,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Harvey Elliott",
				position: "Midfielder",
				number: 56,
				age: 15,
				height: null,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Floyd Ayité",
				position: "Forward",
				number: 11,
				age: 29,
				height: 175,
				nationality: "Togo",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Aboubakar Kamara",
				position: "Forward",
				number: 47,
				age: 23,
				height: 177,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Aleksandar Mitrovic",
				position: "Forward",
				number: 9,
				age: 24,
				height: 187,
				nationality: "Serbia",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}, {
				name: "Luciano Vietto",
				position: "Forward",
				number: 19,
				age: 24,
				height: 174,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Fulham"
			}
		]
	},
	// Huddersfield Town
	{
		club: "Huddersfield Town",
		stadium: "John Smith's Stadium",
		city: "Huddersfield",
		color: "#F5F5F5",
		manager: {
			name: "David Wagner",
			age: 47,
			nationality: "United States",
			joined: "9 November 2015"
		},
		players: [
			{
				name: "Jonas Lössl",
				position: "Goalkeeper",
				number: 1,
				age: 29,
				height: 195,
				nationality: "Denmark",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Ben Hamer",
				position: "Goalkeeper",
				number: 12,
				age: 30,
				height: 192,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Ryan Schofield",
				position: "Goalkeeper",
				number: 31,
				age: 18,
				height: 190,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Tommy Smith",
				position: "Defender",
				number: 2,
				age: 26,
				height: 186,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Chris Löwe",
				position: "Defender",
				number: 15,
				age: 29,
				height: 175,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Zanka",
				position: "Defender",
				number: 25,
				age: 28,
				height: 191,
				nationality: "Denmark",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Christopher Schindler",
				position: "Defender",
				number: 26,
				age: 28,
				height: 189,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Jon Gorenc Stankovic",
				position: "Defender",
				number: 27,
				age: 22,
				height: 190,
				nationality: "Slovenia",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Terence Kongolo",
				position: "Defender",
				number: 5,
				age: 24,
				height: 188,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Florent Hadergjonaj",
				position: "Defender",
				number: 33,
				age: 24,
				height: 182,
				nationality: "Switzerland",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Erik Durm",
				position: "Defender",
				number: 1,
				age: 26,
				height: 183,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Jonathan Hogg",
				position: "Midfielder",
				number: 6,
				age: 29,
				height: 170,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Philip Billing",
				position: "Midfielder",
				number: 8,
				age: 22,
				height: 193,
				nationality: "Denmark",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Aaron Mooy",
				position: "Midfielder",
				number: 10,
				age: 28,
				height: 174,
				nationality: "Australia",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Abdelhamid Sabiri",
				position: "Midfielder",
				number: 27,
				age: 21,
				height: 183,
				nationality: "Morocco",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Rajiv van La Parra",
				position: "Midfielder",
				number: 17,
				age: 27,
				height: 181,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Danny Williams",
				position: "Midfielder",
				number: 19,
				age: 29,
				height: 182,
				nationality: "United States",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Alex Pritchard",
				position: "Midfielder",
				number: 21,
				age: 25,
				height: 171,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Ramadan Sobhi",
				position: "Midfielder",
				number: 14,
				age: 21,
				height: 183,
				nationality: "Egypt",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Juninho Bacuna",
				position: "Midfielder",
				number: 7,
				age: 21,
				height: 178,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Isaac Mbenza",
				position: "Midfielder",
				number: 18,
				age: 22,
				height: 187,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Elias Kachunga",
				position: "Forward",
				number: 9,
				age: 26,
				height: 178,
				nationality: "The Democratic Republic Of Congo",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Laurent Depoitre",
				position: "Forward",
				number: 20,
				age: 29,
				height: 191,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Collin Quaner",
				position: "Forward",
				number: 23,
				age: 27,
				height: 191,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Steve Mounie",
				position: "Forward",
				number: 24,
				age: 24,
				height: 190,
				nationality: "Benin",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}, {
				name: "Adama Diakhaby",
				position: "Forward",
				number: 11,
				age: 22,
				height: 188,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Huddersfield Town"
			}
		]
	},
	// Leicester City
	{
		club: "Leicester City",
		stadium: "King Power Stadium",
		city: "Leicester",
		color: "#2F3388",
		manager: {
			name: "Claude Puel",
			age: 57,
			nationality: "France",
			joined: "25 October 2017"
		},
		players: [
			{
				name: "Kasper Schmeichel",
				position: "Goalkeeper",
				number: 1,
				age: 31,
				height: 189,
				nationality: "Denmark",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Eldin Jakupovic",
				position: "Goalkeeper",
				number: 17,
				age: 34,
				height: 191,
				nationality: "Switzerland",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Danny Ward",
				position: "Goalkeeper",
				number: 12,
				age: 25,
				height: 191,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Danny Simpson",
				position: "Defender",
				number: 2,
				age: 31,
				height: 176,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Ben Chilwell",
				position: "Defender",
				number: 3,
				age: 21,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Wes Morgan",
				position: "Defender",
				number: 5,
				age: 34,
				height: 186,
				nationality: "Jamaica",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Harry Maguire",
				position: "Defender",
				number: 15,
				age: 25,
				height: 194,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Christian Fuchs",
				position: "Defender",
				number: 28,
				age: 32,
				height: 187,
				nationality: "Austria",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Yohan Benalouane",
				position: "Defender",
				number: 29,
				age: 31,
				height: 185,
				nationality: "Tunisia",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Ricardo Pereira",
				position: "Defender",
				number: 14,
				age: 25,
				height: 175,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Jonny Evans",
				position: "Defender",
				number: 6,
				age: 30,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Caglar Söyüncü",
				position: "Defender",
				number: 4,
				age: 22,
				height: 185,
				nationality: "Turkey",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Josh Knight",
				position: "Defender",
				number: 34,
				age: 21,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Demarai Gray",
				position: "Midfielder",
				number: 7,
				age: 22,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Marc Albrighton",
				position: "Midfielder",
				number: 11,
				age: 28,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Adrien Silva",
				position: "Midfielder",
				number: 23,
				age: 29,
				height: 175,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Daniel Amartey",
				position: "Midfielder",
				number: 18,
				age: 23,
				height: 186,
				nationality: "Ghana",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Vicente Iborra",
				position: "Midfielder",
				number: 21,
				age: 30,
				height: 190,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Matty James",
				position: "Midfielder",
				number: 22,
				age: 27,
				height: 181,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Wilfred Ndidi",
				position: "Midfielder",
				number: 25,
				age: 21,
				height: 183,
				nationality: "Nigeria",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "James Maddison",
				position: "Midfielder",
				number: 10,
				age: 21,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Andy King",
				position: "Midfielder",
				number: 24,
				age: 30,
				height: 184,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Nampalys Mendy",
				position: "Midfielder",
				number: 24,
				age: 26,
				height: 167,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Rachid Ghezzal",
				position: "Midfielder",
				number: 31,
				age: 26,
				height: 182,
				nationality: "Algeria",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Hamza Choudhury",
				position: "Midfielder",
				number: 38,
				age: 21,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Kelechi Iheanacho",
				position: "Forward",
				number: 8,
				age: 22,
				height: 185,
				nationality: "Nigeria",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Jamie Vardy",
				position: "Forward",
				number: 9,
				age: 31,
				height: 179,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Shinji Okazaki",
				position: "Forward",
				number: 20,
				age: 32,
				height: 174,
				nationality: "Japan",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}, {
				name: "Fousseni Diabaté",
				position: "Forward",
				number: 27,
				age: 23,
				height: 175,
				nationality: "Mali",
				goals: 0,
				assists: 0,
				club: "Leicester City"
			}
		]
	},
	// Liverpool
	{
		club: "Liverpool",
		stadium: "Anfield",
		city: "Liverpool",
		color: "#DD221C",
		manager: {
			name: "Jürgen Klopp",
			age: 51,
			nationality: "Germany",
			joined: "8 October 2015"
		},
		players: [
			{
				name: "Simon Mignolet",
				position: "Goalkeeper",
				number: 22,
				age: 30,
				height: 193,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Alisson",
				position: "Goalkeeper",
				number: 13,
				age: 26,
				height: 191,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Kamil Grabara",
				position: "Goalkeeper",
				number: 73,
				age: 19,
				height: 190,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Nathaniel Clyne",
				position: "Defender",
				number: 2,
				age: 27,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Virgil van Dijk",
				position: "Defender",
				number: 4,
				age: 27,
				height: 193,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Dejan Lovren",
				position: "Defender",
				number: 6,
				age: 29,
				height: 188,
				nationality: "Croatia",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Joseph Gomez",
				position: "Defender",
				number: 12,
				age: 21,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Alberto Moreno",
				position: "Defender",
				number: 18,
				age: 26,
				height: 171,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Andrew Robertson",
				position: "Defender",
				number: 26,
				age: 24,
				height: 178,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Joel Matip",
				position: "Defender",
				number: 32,
				age: 27,
				height: 195,
				nationality: "Cameroon",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Trent Alexander-Arnold",
				position: "Defender",
				number: 66,
				age: 20,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Georginio Wijnaldum",
				position: "Midfielder",
				number: 5,
				age: 27,
				height: 175,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "James Milner",
				position: "Midfielder",
				number: 7,
				age: 32,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Jordan Henderson",
				position: "Midfielder",
				number: 14,
				age: 28,
				height: 182,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Adam Lallana",
				position: "Midfielder",
				number: 20,
				age: 30,
				height: 172,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Alex Oxlade-Chamberlain",
				position: "Midfielder",
				number: 21,
				age: 25,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Fabinho",
				position: "Midfielder",
				number: 25,
				age: 188,
				height: 188,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Naby Keita",
				position: "Midfielder",
				number: 8,
				age: 23,
				height: 172,
				nationality: "Guinea",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Lazar Markovic",
				position: "Midfielder",
				number: 50,
				age: 24,
				height: 175,
				nationality: "Serbia",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Curtis Jones",
				position: "Midfielder",
				number: 48,
				age: 17,
				height: 182,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Roberto Firmino",
				position: "Forward",
				number: 9,
				age: 27,
				height: 181,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Mohamed Salah",
				position: "Forward",
				number: 11,
				age: 26,
				height: 175,
				nationality: "Egypt",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Sadio Mané",
				position: "Forward",
				number: 10,
				age: 26,
				height: 175,
				nationality: "Senegal",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Dominic Solanke",
				position: "Forward",
				number: 29,
				age: 21,
				height: 187,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Daniel Sturridge",
				position: "Forward",
				number: 15,
				age: 29,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Divock Origi",
				position: "Forward",
				number: 27,
				age: 23,
				height: 185,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Xherdan Shaqiri",
				position: "Forward",
				number: 23,
				age: 27,
				height: 169,
				nationality: "Switzerland",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}, {
				name: "Rhian Brewster",
				position: "Forward",
				number: 24,
				age: 18,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Liverpool"
			}
		]
	},
	// Manchester City
	{
		club: "Manchester City",
		stadium: "Etihad Stadium",
		city: "Manchester",
		color: "#76A9DE",
		manager: {
			name: "Josep Guardiola",
			age: 47,
			nationality: "Spain",
			joined: "1 July 2016"
		},
		players: [
			{
				name: "Claudio Bravo",
				position: "Goalkeeper",
				number: 1,
				age: 35,
				height: 184,
				nationality: "Chile",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Ederson",
				position: "Goalkeeper",
				number: 31,
				age: 25,
				height: 188,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Daniel Grimshaw",
				position: "Goalkeeper",
				number: 32,
				age: 20,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Arijanet Muric",
				position: "Goalkeeper",
				number: 47,
				age: 19,
				height: 198,
				nationality: "Montenegro",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Kyle Walker",
				position: "Defender",
				number: 2,
				age: 28,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Danilo",
				position: "Defender",
				number: 3,
				age: 27,
				height: 184,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Vincent Kompany",
				position: "Defender",
				number: 4,
				age: 32,
				height: 190,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "John Stones",
				position: "Defender",
				number: 5,
				age: 24,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Aymeric Laporte",
				position: "Defender",
				number: 14,
				age: 24,
				height: 191,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Benjamin Mendy",
				position: "Defender",
				number: 22,
				age: 24,
				height: 184,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Nicolás Otamendi",
				position: "Defender",
				number: 30,
				age: 30,
				height: 183,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Eliaquim Mangala",
				position: "Defender",
				number: 15,
				age: 27,
				height: 188,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Philippe Sandler",
				position: "Defender",
				number: 34,
				age: 21,
				height: 188,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Ilkay Gündogan",
				position: "Midfielder",
				number: 8,
				age: 28,
				height: 180,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Kevin De Bruyne",
				position: "Midfielder",
				number: 17,
				age: 27,
				height: 181,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Fabian Delph",
				position: "Midfielder",
				number: 18,
				age: 28,
				height: 174,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Bernardo Silva",
				position: "Midfielder",
				number: 20,
				age: 24,
				height: 173,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "David Silva",
				position: "Midfielder",
				number: 21,
				age: 32,
				height: 173,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Fernandinho",
				position: "Midfielder",
				number: 25,
				age: 33,
				height: 179,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Oleksandr Zinchenko",
				position: "Midfielder",
				number: 35,
				age: 21,
				height: 175,
				nationality: "Ukraine",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Phil Foden",
				position: "Midfielder",
				number: 47,
				age: 18,
				height: 171,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Riyad Mahrez",
				position: "Midfielder",
				number: 26,
				age: 27,
				height: 179,
				nationality: "Algeria",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Adrian Bernabe",
				position: "Midfielder",
				number: 82,
				age: 17,
				height: 170,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Raheem Sterling",
				position: "Forward",
				number: 7,
				age: 23,
				height: 170,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Sergio Agüero",
				position: "Forward",
				number: 10,
				age: 30,
				height: 173,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Leroy Sané",
				position: "Forward",
				number: 19,
				age: 22,
				height: 183,
				nationality: "Germany",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Gabriel Jesus",
				position: "Forward",
				number: 33,
				age: 21,
				height: 175,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}, {
				name: "Brahim Diaz",
				position: "Forward",
				number: 55,
				age: 19,
				height: 170,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Manchester City"
			}
		]
	},
	// Manchester United
	{
		club: "Manchester United",
		stadium: "Old Trafford",
		city: "Manchester",
		color: "#D21F18",
		manager: {
			name: "José Mourinho",
			age: 55,
			nationality: "Portugal",
			joined: "27 May 2016"
		},
		players: [
			{
				name: "David De Gea",
				position: "Goalkeeper",
				number: 1,
				age: 27,
				height: 192,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Sergio Romero",
				position: "Goalkeeper",
				number: 22,
				age: 31,
				height: 192,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Lee Grant",
				position: "Goalkeeper",
				number: 13,
				age: 35,
				height: 193,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Matej Kovar",
				position: "Goalkeeper",
				number: 51,
				age: 18,
				height: 185,
				nationality: "Czech Republic",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Victor Lindelöf",
				position: "Defender",
				number: 2,
				age: 24,
				height: 187,
				nationality: "Sweden",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Eric Bailly",
				position: "Defender",
				number: 3,
				age: 24,
				height: 187,
				nationality: "Cote D'Ivoire",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Phil Jones",
				position: "Defender",
				number: 4,
				age: 26,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Marcos Rojo",
				position: "Defender",
				number: 16,
				age: 28,
				height: 187,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Chris Smalling",
				position: "Defender",
				number: 12,
				age: 28,
				height: 194,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Ashley Young",
				position: "Defender",
				number: 18,
				age: 33,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Luke Shaw",
				position: "Defender",
				number: 23,
				age: 23,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Antonio Valencia",
				position: "Defender",
				number: 25,
				age: 33,
				height: 180,
				nationality: "Ecuador",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Matteo Darmian",
				position: "Defender",
				number: 36,
				age: 28,
				height: 182,
				nationality: "Italy",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Diogo Dalot",
				position: "Defender",
				number: 20,
				age: 19,
				height: 183,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Paul Pogba",
				position: "Midfielder",
				number: 6,
				age: 25,
				height: 191,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Juan Mata",
				position: "Midfielder",
				number: 8,
				age: 30,
				height: 170,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Jesse Lingard",
				position: "Midfielder",
				number: 14,
				age: 25,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Ander Herrera",
				position: "Midfielder",
				number: 21,
				age: 29,
				height: 182,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Marouane Fellaini",
				position: "Midfielder",
				number: 27,
				age: 30,
				height: 194,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Nemanja Matic",
				position: "Midfielder",
				number: 31,
				age: 30,
				height: 194,
				nationality: "Serbia",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Scott McTominay",
				position: "Midfielder",
				number: 39,
				age: 21,
				height: 193,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Fred",
				position: "Midfielder",
				number: 17,
				age: 25,
				height: 169,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Andreas Pereira",
				position: "Midfielder",
				number: 15,
				age: 22,
				height: 178,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Tahith Chong",
				position: "Midfielder",
				number: 44,
				age: 18,
				height: 185,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Angel Gomes",
				position: "Midfielder",
				number: 47,
				age: 18,
				height: 161,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Ethan Hamilton",
				position: "Midfielder",
				number: 48,
				age: 20,
				height: 187,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Alexis Sánchez",
				position: "Forward",
				number: 7,
				age: 29,
				height: 169,
				nationality: "Chile",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Romelu Lukaku",
				position: "Forward",
				number: 9,
				age: 25,
				height: 190,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Anthony Martial",
				position: "Forward",
				number: 11,
				age: 22,
				height: 181,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}, {
				name: "Marcus Rashford",
				position: "Forward",
				number: 10,
				age: 21,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Manchester United"
			}
		]
	},
	// Newcastle United
	{
		club: "Newcastle United",
		stadium: "St. Jame's Park",
		city: "Newcastle",
		color: "#353535",
		manager: {
			name: "Rafael Benítez",
			age: 58,
			nationality: "Spain",
			joined: "11 March 2016"
		},
		players: [
			{
				name: "Robert Elliot",
				position: "Goalkeeper",
				number: 1,
				age: 32,
				height: 190,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Martin Dubravka",
				position: "Goalkeeper",
				number: 12,
				age: 29,
				height: 190,
				nationality: "Slovakia",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Karl Darlow",
				position: "Goalkeeper",
				number: 26,
				age: 28,
				height: 190,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Freddy Woodman",
				position: "Goalkeeper",
				number: 41,
				age: 21,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Ciaran Clark",
				position: "Defender",
				number: 2,
				age: 29,
				height: 185,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Paul Dummett",
				position: "Goalkeeper",
				number: 3,
				age: 27,
				height: 183,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Jamaal Lascelles",
				position: "Defender",
				number: 6,
				age: 24,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Javier Manquillo",
				position: "Defender",
				number: 19,
				age: 24,
				height: 178,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Florian Lejeune",
				position: "Defender",
				number: 20,
				age: 27,
				height: 189,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "DeAndre Yedlin",
				position: "Defender",
				number: 22,
				age: 25,
				height: 172,
				nationality: "United States",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Jamie Sterry",
				position: "Defender",
				number: 42,
				age: 22,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Fabian Schär",
				position: "Defender",
				number: 5,
				age: 26,
				height: 188,
				nationality: "Switzerland",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Federico Fernández",
				position: "Defender",
				number: 18,
				age: 29,
				height: 190,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Jacob Murphy",
				position: "Midfielder",
				number: 7,
				age: 23,
				height: 179,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Jonjo Shelvey",
				position: "Midfielder",
				number: 8,
				age: 26,
				height: 184,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Mohamed Diamé",
				position: "Midfielder",
				number: 10,
				age: 31,
				height: 184,
				nationality: "Senegal",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Matt Ritchie",
				position: "Midfielder",
				number: 11,
				age: 29,
				height: 172,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Isaac Hayden",
				position: "Midfielder",
				number: 14,
				age: 23,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Christian Atsu",
				position: "Midfielder",
				number: 30,
				age: 26,
				height: 165,
				nationality: "Ghana",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Ki Sung-yueng",
				position: "Midfielder",
				number: 4,
				age: 29,
				height: 189,
				nationality: "South Korea",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Kenedy",
				position: "Midfielder",
				number: 15,
				age: 22,
				height: 182,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Sean Longstaff",
				position: "Midfielder",
				number: 36,
				age: 21,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Callum Roberts",
				position: "Midfielder",
				number: 37,
				age: 21,
				height: 173,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Ayoze Pérez",
				position: "Forward",
				number: 17,
				age: 25,
				height: 178,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Joselu",
				position: "Forward",
				number: 21,
				age: 28,
				height: 192,
				nationality: "Sain",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Yoshinori Muto",
				position: "Forward",
				number: 13,
				age: 26,
				height: 178,
				nationality: "Japan",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}, {
				name: "Salomón Rondón",
				position: "Forward",
				number: 9,
				age: 29,
				height: 186,
				nationality: "Venezuela",
				goals: 0,
				assists: 0,
				club: "Newcastle United"
			}
		]
	},
	// Southampton
	{
		club: "Southampton",
		stadium: "St. Mary's Stadium",
		city: "Southampton",
		color: "#D11E18",
		manager: {
			name: "Mark Hughes",
			age: 55,
			nationality: "Wales",
			joined: "14 March 2018"
		},
		players: [
			{
				name: "Alex McCarthy",
				position: "Goalkeeper",
				number: 1,
				age: 28,
				height: 193,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Fraser Forster",
				position: "Goalkeeper",
				number: 44,
				age: 30,
				height: 201,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Angus Gunn",
				position: "Goalkeeper",
				number: 28,
				age: 22,
				height: 196,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Harry Lewis",
				position: "Goalkeeper",
				number: 41,
				age: 20,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Cédric Soares",
				position: "Defender",
				number: 2,
				age: 27,
				height: 172,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Maya Yoshida",
				position: "Defender",
				number: 3,
				age: 30,
				height: 189,
				nationality: "Japan",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Jack Stephens",
				position: "Defender",
				number: 5,
				age: 24,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Wesley Hoedt",
				position: "Defender",
				number: 6,
				age: 24,
				height: 188,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Ryan Bertrand",
				position: "Defender",
				number: 21,
				age: 29,
				height: 179,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Jan Bednarek",
				position: "Defender",
				number: 35,
				age: 22,
				height: 189,
				nationality: "Poland",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Matt Targett",
				position: "Defender",
				number: 33,
				age: 23,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Yan Valery",
				position: "Defender",
				number: 43,
				age: 19,
				height: 180,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Alfie Jones",
				position: "Defender",
				number: 32,
				age: 21,
				height: 182,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Jannik Vestergaard",
				position: "Defender",
				number: 4,
				age: 26,
				height: 199,
				nationality: "Denmark",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Steven Davis",
				position: "Midfielder",
				number: 8,
				age: 33,
				height: 173,
				nationality: "Northern Ireland",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Oriol Romeu",
				position: "Midfielder",
				number: 14,
				age: 27,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "James Ward-Prowse",
				position: "Midfielder",
				number: 16,
				age: 24,
				height: 173,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Mario Lemina",
				position: "Midfielder",
				number: 18,
				age: 25,
				height: 184,
				nationality: "Gabon",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Nathan Redmond",
				position: "Midfielder",
				number: 22,
				age: 24,
				height: 173,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Stuart Armstrong",
				position: "Midfielder",
				number: 17,
				age: 26,
				height: 183,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Mohamed Elyounoussi",
				position: "Midfielder",
				number: 11,
				age: 24,
				height: 178,
				nationality: "Norway",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Shane Long",
				position: "Forward",
				number: 7,
				age: 31,
				height: 178,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Charlie Austin",
				position: "Forward",
				number: 10,
				age: 29,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Manolo Gabbiadini",
				position: "Forward",
				number: 20,
				age: 26,
				height: 181,
				nationality: "Italy",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Sam Gallagher",
				position: "Forward",
				number: 18,
				age: 23,
				height: 194,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}, {
				name: "Danny Ings",
				position: "Forward",
				number: 9,
				age: 26,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Southampton"
			}
		]
	},
	// Tottenham Hotspur
	{
		club: "Tottenham Hotspur",
		stadium: "Wembley Stadium",
		city: "London",
		color: "#F5F5F5",
		manager: {
			name: "Mauricio Pochettino",
			age: 46,
			nationality: "Argentina",
			joined: "27 May 2014"
		},
		players: [
			{
				name: "Hugo Lloris",
				position: "Goalkeeper",
				number: 1,
				age: 31,
				height: 188,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Michel Vorm",
				position: "Goalkeeper",
				number: 13,
				age: 35,
				height: 183,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Paulo Gazzaniga",
				position: "Goalkeeper",
				number: 22,
				age: 26,
				height: 196,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Alfie Whiteman",
				position: "Goalkeeper",
				number: 41,
				age: 20,
				height: 189,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Kieran Trippier",
				position: "Defender",
				number: 2,
				age: 28,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Danny Rose",
				position: "Defender",
				number: 3,
				age: 28,
				height: 173,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Toby Alderweireld",
				position: "Defender",
				number: 4,
				age: 29,
				height: 187,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Jan Vertonghen",
				position: "Defender",
				number: 5,
				age: 31,
				height: 189,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Davinson Sánchez",
				position: "Defender",
				number: 6,
				age: 22,
				height: 187,
				nationality: "Colombia",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Juan Foyth",
				position: "Defender",
				number: 21,
				age: 20,
				height: 179,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Serge Aurier",
				position: "Defender",
				number: 24,
				age: 25,
				height: 176,
				nationality: "Cote D'Ivoire",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Ben Davies",
				position: "Defender",
				number: 33,
				age: 25,
				height: 181,
				nationality: "Wales",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Kyle Walker-Peters",
				position: "Defender",
				number: 16,
				age: 21,
				height: 173,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Erik Lamela",
				position: "Midfielder",
				number: 11,
				age: 26,
				height: 181,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Victor Wanyama",
				position: "Midfielder",
				number: 12,
				age: 27,
				height: 188,
				nationality: "Kenya",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Eric Dier",
				position: "Midfielder",
				number: 15,
				age: 24,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Moussa Sissoko",
				position: "Midfielder",
				number: 17,
				age: 29,
				height: 187,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Mousa Dembélé",
				position: "Midfielder",
				number: 19,
				age: 31,
				height: 185,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Dele Alli",
				position: "Midfielder",
				number: 20,
				age: 22,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Christian Eriksen",
				position: "Midfielder",
				number: 23,
				age: 26,
				height: 182,
				nationality: "Denmark",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Lucas Moura",
				position: "Midfielder",
				number: 27,
				age: 26,
				height: 172,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Harry Winks",
				position: "Midfielder",
				number: 8,
				age: 22,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Georges-Kévin Nkoudou",
				position: "Midfielder",
				number: 14,
				age: 23,
				height: 174,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Luke Amos",
				position: "Midfielder",
				number: 14,
				age: 21,
				height: 179,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Oliver Skipp",
				position: "Midfielder",
				number: 52,
				age: 17,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Son Heung-Min",
				position: "Forward",
				number: 7,
				age: 26,
				height: 183,
				nationality: "South Korea",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Harry Kane",
				position: "Forward",
				number: 10,
				age: 26,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Fernando Llorente",
				position: "Forward",
				number: 18,
				age: 33,
				height: 193,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}, {
				name: "Vincent Janssen",
				position: "Forward",
				number: 9,
				age: 24,
				height: 180,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Tottenham Hotspur"
			}
		]
	},
	// Watford
	{
		club: "Watford",
		stadium: "Vicarage Road",
		city: "Watford",
		color: "#F8F31D",
		manager: {
			name: "Javier Gracia",
			age: 48,
			nationality: "Spain",
			joined: "21 January 2018"
		},
		players: [
			{
				name: "Heurelho Gomes",
				position: "Goalkeeper",
				number: 1,
				age: 37,
				height: 191,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Pontus Dahlberg",
				position: "Goalkeeper",
				number: 30,
				age: 19,
				height: 194,
				nationality: "Sweden",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Ben Foster",
				position: "Goalkeeper",
				number: 26,
				age: 35,
				height: 193,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Ben Wilmot",
				position: "Defender",
				number: 24,
				age: 18,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Daryl Janmaat",
				position: "Defender",
				number: 2,
				age: 29,
				height: 185,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Miguel Britos",
				position: "Defender",
				number: 3,
				age: 33,
				height: 188,
				nationality: "Uruguay",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Younes Kaboul",
				position: "Defender",
				number: 4,
				age: 32,
				height: 193,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Sebastian Prödl",
				position: "Defender",
				number: 5,
				age: 31,
				height: 194,
				nationality: "Austria",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Adrian Mariappa",
				position: "Defender",
				number: 6,
				age: 32,
				height: 180,
				nationality: "Jamaica",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Craig Cathcart",
				position: "Defender",
				number: 15,
				age: 29,
				height: 188,
				nationality: "Northern Ireland",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Kiko Femenía",
				position: "Defender",
				number: 21,
				age: 27,
				height: 176,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Marvin Zeegelaar",
				position: "Defender",
				number: 22,
				age: 28,
				height: 186,
				nationality: "Netherlands",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "José Holebas",
				position: "Defender",
				number: 25,
				age: 34,
				height: 184,
				nationality: "Greece",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Christian Kabasele",
				position: "Defender",
				number: 27,
				age: 27,
				height: 188,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Marc Navarro",
				position: "Defender",
				number: 23,
				age: 23,
				height: 188,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Adam Masina",
				position: "Defender",
				number: 11,
				age: 24,
				height: 189,
				nationality: "Italy",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Tom Cleverley",
				position: "Midfielder",
				number: 8,
				age: 29,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Nathaniel Chalobah",
				position: "Midfielder",
				number: 14,
				age: 23,
				height: 187,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Abdoulaye Doucouré",
				position: "Midfielder",
				number: 16,
				age: 25,
				height: 184,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Will Hughes",
				position: "Midfielder",
				number: 19,
				age: 23,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Etienne Capoue",
				position: "Midfielder",
				number: 29,
				age: 30,
				height: 189,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Roberto Pereyra",
				position: "Midfielder",
				number: 37,
				age: 27,
				height: 182,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Ken Sema",
				position: "Midfielder",
				number: 12,
				age: 25,
				height: 180,
				nationality: "Sweden",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Domingos Quina",
				position: "Midfielder",
				number: 20,
				age: 18,
				height: 179,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Troy Deeney",
				position: "Forward",
				number: 9,
				age: 30,
				height: 183,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Andre Gray",
				position: "Forward",
				number: 18,
				age: 27,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Stefano Okaka",
				position: "Forward",
				number: 33,
				age: 29,
				height: 186,
				nationality: "Italy",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Gerard Deulofeu",
				position: "Forward",
				number: 7,
				age: 24,
				height: 177,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Isaac Success",
				position: "Forward",
				number: 10,
				age: 22,
				height: 186,
				nationality: "Nigeria",
				goals: 0,
				assists: 0,
				club: "Watford"
			}, {
				name: "Adalberto Peñaranda",
				position: "Forward",
				number: 11,
				age: 21,
				height: 185,
				nationality: "Venezuela",
				goals: 0,
				assists: 0,
				club: "Watford"
			}
		]
	},
	// West Ham United
	{
		club: "West Ham United",
		stadium: "London Stadium",
		city: "London",
		color: "#7A253C",
		manager: {
			name: "Manuel Pellegrini",
			age: 65,
			nationality: "Chile",
			joined: "22 May 2018"
		},
		players: [
			{
				name: "Adrián",
				position: "Goalkeeper",
				number: 13,
				age: 31,
				height: 190,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Lukasz Fabianski",
				position: "Goalkeeper",
				number: 1,
				age: 33,
				height: 190,
				nationality: "Poland",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Winston Reid",
				position: "Defender",
				number: 2,
				age: 30,
				height: 190,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Aaron Cresswell",
				position: "Defender",
				number: 3,
				age: 28,
				height: 170,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Pablo Zabaleta",
				position: "Defender",
				number: 5,
				age: 33,
				height: 176,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Angelo Ogbonna",
				position: "Defender",
				number: 21,
				age: 30,
				height: 191,
				nationality: "Italy",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Arthur Masuaku",
				position: "Defender",
				number: 26,
				age: 24,
				height: 179,
				nationality: "The Democratic Republic Of Congo",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Ryan Fredericks",
				position: "Defender",
				number: 24,
				age: 26,
				height: 181,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Issa Diop",
				position: "Defender",
				number: 23,
				age: 21,
				height: 194,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Reece Oxford",
				position: "Defender",
				number: 35,
				age: 19,
				height: 191,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Fabián Balbuena",
				position: "Defender",
				number: 4,
				age: 27,
				height: 188,
				nationality: "Paraguay",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Manuel Lanzini",
				position: "Midfielder",
				number: 10,
				age: 25,
				height: 167,
				nationality: "Argentina",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Pedro Obiang",
				position: "Midfielder",
				number: 14,
				age: 26,
				height: 185,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Mark Noble",
				position: "Midfielder",
				number: 16,
				age: 31,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Michail Antonio",
				position: "Midfielder",
				number: 30,
				age: 28,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Declan Rice",
				position: "Midfielder",
				number: 41,
				age: 19,
				height: 185,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Robert Snodgrass",
				position: "Midfielder",
				number: 7,
				age: 31,
				height: 182,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Jack Wilshere",
				position: "Midfielder",
				number: 19,
				age: 26,
				height: 172,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Felipe Anderson",
				position: "Midfielder",
				number: 8,
				age: 25,
				height: 175,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Nathan Holland",
				position: "Midfielder",
				number: 37,
				age: 20,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Carlos Sánchez",
				position: "Midfielder",
				number: 15,
				age: 32,
				height: 182,
				nationality: "Colombia",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Grady Diangana",
				position: "Midfielder",
				number: 45,
				age: 20,
				height: 180,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Joe Powell",
				position: "Midfielder",
				number: 50,
				age: 20,
				height: 178,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Conor Coventry",
				position: "Midfielder",
				number: 54,
				age: 18,
				height: 175,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Marko Arnautovic",
				position: "Forward",
				number: 7,
				age: 29,
				height: 192,
				nationality: "Austria",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Andy Carroll",
				position: "Forward",
				number: 9,
				age: 29,
				height: 193,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Chicharito",
				position: "Forward",
				number: 17,
				age: 30,
				height: 175,
				nationality: "Mexico",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Andriy Yarmolenko",
				position: "Forward",
				number: 20,
				age: 29,
				height: 189,
				nationality: "Ukraine",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}, {
				name: "Lucas Pérez",
				position: "Forward",
				number: 27,
				age: 30,
				height: 180,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "West Ham United"
			}
		]
	},
	// Wolverhampton Wanderers
	{
		club: "Wolverhampton Wanderers",
		stadium: "Molineux Stadium",
		city: "Wolverhampton",
		color: "#F2A41E",
		manager: {
			name: "Nuno Espírito Santo",
			age: 44,
			nationality: "Portugal",
			joined: "31 May 2017"
		},
		players: [
			{
				name: "John Ruddy",
				position: "Goalkeeper",
				number: 21,
				age: 32,
				height: 193,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Will Norris",
				position: "Goalkeeper",
				number: 31,
				age: 25,
				height: 195,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Rui Patrício",
				position: "Goalkeeper",
				number: 11,
				age: 30,
				height: 190,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Matt Doherty",
				position: "Defender",
				number: 2,
				age: 26,
				height: 182,
				nationality: "Ireland",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Ryan Bennett",
				position: "Defender",
				number: 5,
				age: 28,
				height: 188,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Conor Coady",
				position: "Defender",
				number: 16,
				age: 25,
				height: 185,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Kortney Hause",
				position: "Defender",
				number: 30,
				age: 23,
				height: 189,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Willy Boly",
				position: "Defender",
				number: 15,
				age: 27,
				height: 195,
				nationality: "France",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Rúben Vinagre",
				position: "Defender",
				number: 29,
				age: 19,
				height: 174,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Jonny",
				position: "Defender",
				number: 19,
				age: 24,
				height: 175,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Rúben Neves",
				position: "Midfielder",
				number: 8,
				age: 21,
				height: 180,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Morgan Gibbs-White",
				position: "Midfielder",
				number: 17,
				age: 18,
				height: 171,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Romain Saïss",
				position: "Midfielder",
				number: 27,
				age: 28,
				height: 190,
				nationality: "Morocco",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Diogo Jota",
				position: "Midfielder",
				number: 18,
				age: 21,
				height: 178,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "João Moutinho",
				position: "Midfielder",
				number: 28,
				age: 32,
				height: 170,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Leander Dendoncker",
				position: "Midfielder",
				number: 32,
				age: 23,
				height: 188,
				nationality: "Belgium",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Ryan John Giles",
				position: "Midfielder",
				number: 23,
				age: 18,
				height: 179,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Elliot Watt",
				position: "Midfielder",
				number: 25,
				age: 18,
				height: 181,
				nationality: "Scotland",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Pote",
				position: "Midfielder",
				number: 26,
				age: 20,
				height: 173,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Ivan Cavaleiro",
				position: "Forward",
				number: 7,
				age: 25,
				height: 175,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Hélder Costa",
				position: "Forward",
				number: 10,
				age: 24,
				height: 178,
				nationality: "Portugal",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Léo Bonatini",
				position: "Forward",
				number: 33,
				age: 24,
				height: 185,
				nationality: "Brazil",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Raúl Jiménez",
				position: "Forward",
				number: 9,
				age: 27,
				height: 190,
				nationality: "Mexico",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Adama Traoré",
				position: "Forward",
				number: 37,
				age: 22,
				height: 178,
				nationality: "Spain",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}, {
				name: "Ben Ashley-Seal",
				position: "Forward",
				number: 24,
				age: 19,
				height: 187,
				nationality: "England",
				goals: 0,
				assists: 0,
				club: "Wolverhampton Wanderers"
			}
		]
	}
]