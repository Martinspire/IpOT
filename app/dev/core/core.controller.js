angular.module('ipot').controller('coreController', ['$rootScope', '$state', 'dataFactory', function($rootScope, $state, dataFactory){
    console.log('core');
    $rootScope.mode = {};
    $rootScope.user = {};

    $rootScope.$on('changeMode', function(ev, newMode, redirect){
    	console.log('new mode', newMode);
    	$rootScope.mode = newMode;
        if(redirect !== false){
            $state.go(newMode.pagina, {}, { reload: true});
        }
    });

    $rootScope.$on('changeUser', function(ev, newUser){
    	console.log('new user', newUser);
    	$rootScope.user = newUser;
    });

    $rootScope.defaultMode = function(){
    	dataFactory.setMode('demo1');
    	console.log('default mode enabled');
    };
    //$rootScope.defaultMode();

    //tijdelijk even de state naar een standaard modus/user zetten. TODO: Straks middels cookie oid
    if($state.current !== 'base.start'){
        switch($state.current){
            case 'advies':
            case 'contact':
            case 'help':
            case 'instellingen':
            case 'profiel':
            case 'start':
            case 'stats':
            case 'toilet':
            case 'welke':
            case 'color':
            case 'start':
                dataFactory.setMode('user1', false);
                break;
            case 'dashboard':
            case 'patienten':
            case 'patient':
                dataFactory.setMode('user3', false);
                break;
            case 'aanmelden':
                dataFactory.setMode('user4', false);
                break;
            default:                
                dataFactory.setMode('user1', false);
        }
    }

    $rootScope.showSideMenu = false;

    $rootScope.toggleSideMenu = function(toggle){
        if(toggle !== undefined){
            $rootScope.showSideMenu = toggle;
        }
        else{
            $rootScope.showSideMenu = !$rootScope.showSideMenu;
        }
    };

    $rootScope.$on('$stateChangeStart', function(){
        $rootScope.toggleSideMenu(false);
    });

}]);