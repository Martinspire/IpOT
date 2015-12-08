//in deze factory wordt de active user en active modus bijgehouden. Ook kan er worden gewisseld van gebruiker en modus
angular.module('ipot.services').factory('dataFactory', ['$rootScope', function($rootScope){
	var result = {};
	var currentUser = '';
	var currentMode = '';

	var securityLevels = [1, 2, 3, 4, 5]; //1 = gebruiker zonder management, 2 gebruiker met profiel met management, 3 groepsadmin, 4 dokter, 5 admin

	var users = {};
	users.user1 = {
		voornaam: 'Bob',
		achternaam: 'Goosens',
		geslacht: 'man',
		leeftijd: '43',
		lengte: '177',
		gewicht: '89',
		klachten: [
			{
				soort: 'eten',
				type: 'allergische reactie',
				product: 'melk'
			}
		],
		niveau: '2',
		dashboard: false
	};

	users.user2 = {
		voornaam: 'Erik',
		achternaam: 'van den Broek',
		geslacht: 'man',
		leeftijd: '43',
		lengte: '177',
		gewicht: '89',
		klachten: [
			{
				soort: 'lichamelijk',
				type: 'levensbedreigend',
				product: 'hartaanval',
				datum: '19-06-2013'
			},{
				soort: 'lichamelijk',
				type: 'mild',
				product: 'nierstenen',
				datum: '19-06-2015'
			},{
				soort: 'eten',
				type: 'allergische reactie',
				product: 'noten'
			}
		],
		metingen: [],
		adviezen: [],
		niveau: '2',
		dashboard: false
	};

	users.user3 = {
		voornaam: 'Karen',
		achternaam: 'Bosma',
		geslacht: 'vrouw',
		leeftijd: '56',
		lengte: '164',
		gewicht: '72',
		klachten: [],
		metingen: [],
		adviezen: [],
		niveau: '4',
		dashboard: true
	};

	users.user4 = {
		voornaam: '',
		achternaam: '',
		geslacht: '',
		leeftijd: '',
		lengte: '',
		gewicht: '',
		klachten: [],
		metingen: [],
		adviezen: [],
		niveau: '0',
		dashboard: false
	};

	var modi = [];
	modi.start = {
		currentUser: 'user1',
		platform: 'start',
		pagina: 'base.start',
		mobile: false
	};
	modi.demo1 = {
		currentUser: 'user1',
		platform: 'test',
		pagina: 'base.color',
		mobile: false
	};
	modi.demo2 = {
		currentUser: 'user1',
		platform: 'test',
		pagina: 'base.welke',
		mobile: false
	};
	modi.demo3 = {
		currentUser: 'user1',
		platform: 'mobile',
		pagina: 'base.mobile',
		mobile: true
	};
	modi.demo4 = {
		currentUser: 'user2',
		platform: 'mobile',
		pagina: 'base.mobile',
		mobile: true
	};
	modi.demo5 = {
		currentUser: 'user3',
		platform: 'dashboard',
		pagina: 'base.dashboard',
		mobile: false
	};
	modi.demo6 = {
		currentUser: 'user5',
		platform: 'login',
		pagina: 'base.aanmelden',
		mobile: false
	};
	modi.user1 = {
		currentUser: 'user1',
		platform: 'mobile',
		pagina: 'base.mobile',
		mobile: false
	};
	modi.user2 = {
		currentUser: 'user2',
		platform: 'mobile',
		pagina: 'base.mobile',
		mobile: false
	};
	modi.user3 = {
		currentUser: 'user3',
		platform: 'dashboard',
		pagina: 'base.dashboard',
		mobile: false
	};

	//nieuwe gebruiker instellen
	result.setUser = function(user, redirect){
		if (users[user] !== undefined){
			currentUser = user;
			$rootScope.$emit('changeUser', users[user], redirect);
			return true;
		}
		else{
			return false;
		}
	};

	//huidige gebruiker ophalen
	result.getUser = function(){
		return users[currentUser];
	};

	//nieuwe modus instellen
	result.setMode = function(modus, redirect){
		if(modi[modus] !== undefined){
			currentMode = modus;

			result.setUser(modi[currentMode].currentUser);
			$rootScope.$emit('changeMode', modi[currentMode], redirect);
			return true;
		}
		else{
			return false;
		}
	};

	//huidige modus ophalen
	result.getMode = function(){
		return modi[currentMode];
	};

	//functies in factory beschikbaar maken.
    return result;
}]);