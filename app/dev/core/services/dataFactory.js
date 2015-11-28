//in deze factory wordt de active user en active modus bijgehouden. Ook kan er worden gewisseld van gebruiker en modus
angular.module('ipot.services').factory('dataFactory', function(){
	var result = {};
	var currentUser = {};
	var currentMode = '';

	var securityLevels = [1, 2, 3, 4, 5]; //1 = gebruiker zonder management, 2 gebruiker met profiel met management, 3 groepsadmin, 4 dokter, 5 admin

	var user1 = {
		voornaam: 'Bob',
		achternaam: 'Goosens',
		dashboard: false
	};

	var user2 = {
		voornaam: 'Erik',
		achternaam: 'van den Broek',
		dashboard: false
	};

	var user3 = {
		voornaam: 'Bob',
		achternaam: 'Goosens',
		dashboard: true
	};

	var modussen = ['demo1', 'demo2', 'user1', 'user2', 'user3', 'mobile', 'dashboard'];

	result.setUser = function(){

	};

	result.getUser = function(){

	};

	result.setMode = function(){

	};

	result.getMode = function(){

	};

    return result;
});