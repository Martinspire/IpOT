angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/error/error.html","<h2>Er ging wat fout</h2>\r\n<p>Probeer het opnieuw of ga terug.</p>");
$templateCache.put("core/loading/loading.html","<h2>Loading</h2>\r\n<p>Bezig met laden...</p>");
$templateCache.put("dashboard/patient/patient.html","<div class=\"panel\">\r\n    <header>Patient</header>\r\n    <section>\r\n	    <div class=\"start-chart\">\r\n	        <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\"\r\n	            chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\"\r\n	            chart-click=\"onClick\" >\r\n	        </canvas>\r\n	    </div>\r\n	    <p>	    	\r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Diverse grafieken en tabellen. De denken valt aan:\r\n			    	<ul>\r\n				    	<li>Reden tot contact/meldingen\r\n				    	<ul>\r\n					    	<li>Stuur vragenlijst</li>\r\n				    	</ul>\r\n				    	</li>\r\n				    	<li>Laatste resultaten\r\n				    	<ul>\r\n					    	<li>trend</li>\r\n					    	<li>laatste waarde</li>\r\n					    	<li>status</li>\r\n					    	<li>datum/tijd</li>\r\n					    	<li>diagnose</li>\r\n				    	</ul></li>\r\n				    	<li>Tijdslijn met waarden en de bijbehorende marge/norm</li>\r\n				    	<li>Tijdslijn van wijzigingen (ziekenhuisopnames, medicijnen, contact ivm klachten, etc)</li>\r\n				    	<li>Laatst gegeven diagnoses</li>\r\n				    </ul>\r\n		    	</li>\r\n		    	<li>Patientinformatie (NAW, contactgegevens, betrokken artsen, verzekering, ziektes en aandoeningen, historie)</li>\r\n		    	<li>Notities</li>\r\n		    	<li>Filteren op bepaalde resultaten en betrokken informatie (bv alles in relatie tot suikerziekte)</li>\r\n			    	\r\n		    	<li>Filter, zoeken, paginering</li>\r\n	    	</ul>\r\n	    </p>\r\n    </section>\r\n</div>");
$templateCache.put("dashboard/patienten/patienten.html","<div class=\"panel\">\r\n    <header>Patienten</header>\r\n    <section>\r\n	    <p>Linkje naar: patient (<a ui-sref=\"base.patient\">patient</a>)</p>\r\n	    <p>\r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Overzicht van patienten om door te bladeren</li>\r\n		    	<li>Zoekformulier</li>\r\n		    	<li>Filters en paginering</li>\r\n	    	</ul>\r\n	    </p>\r\n    </section>\r\n</div>");
$templateCache.put("dashboard/start/start.html","<div class=\"panel\">\r\n    <header>Dashboard</header>\r\n    <section>\r\n	    <div class=\"start-chart\">\r\n	        <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\"\r\n	            chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\"\r\n	            chart-click=\"onClick\" >\r\n	        </canvas>\r\n	    </div>\r\n	    <p>	    	\r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Globale statistieken</li>\r\n				<li>Grafiek met aantal zieken per dag/week/maand</li>\r\n		    	<li>Kaart voor epidemiën</li>\r\n		    	<li>Aantal patienten met openstaande klachten</li>\r\n				<li>Afspraken van vandaag</li>\r\n		    	<li>Snelle navigatie naar patienten</li>\r\n	    	</ul>\r\n	    </p>\r\n    </section>\r\n</div>");
$templateCache.put("login/aanmelden/aanmelden.html","<div class=\"panel\">\r\n    <header>Aanmelden</header>\r\n    <section>\r\n	    <div class=\"profiel\">	        \r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Aanmeldformulier</li>\r\n		    	<li>Informatie over gebruik van app</li>\r\n		    	<li>Link: naar FAQ, voorwaarden en (privacy) statements</li>\r\n		    	<li>Link: product/leverancier/sogeti</li>\r\n	    	</ul>\r\n	    </div>\r\n    </section>\r\n</div>");
$templateCache.put("login/login/login.html","<div class=\"panel\">\r\n    <header>Inloggen</header>\r\n    <section>\r\n	    <div class=\"profiel\">\r\n	        \r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Inlogscherm</li>\r\n				<li>Link: login vergeten</li>\r\n		    	<li>Link: naar aanmelden, productinformatie en voorwaarden</li>\r\n				<li>Mooie animatie voor betreden van app</li>\r\n	    	</ul>\r\n	    </div>\r\n    </section>\r\n</div>");
$templateCache.put("mobile/advies/advies.html","<div class=\"panel\">\r\n    <header>Advies</header>\r\n    <section>\r\n	    <div class=\"profiel\">\r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Laatste advies</li>\r\n		    	<li>Generieke adviezen</li>\r\n		    	<li>Help database en FAQ</li>\r\n	    	</ul>\r\n	    </div>\r\n    </section>\r\n</div>");
$templateCache.put("mobile/contact/contact.html","<div class=\"panel\">\r\n    <header>Contact</header>\r\n    <section>\r\n	    <div class=\"profiel\">\r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Contact met huisarts of specialist</li>\r\n		    	<li>Overzicht van toegang tot gegevens</li>\r\n		    	<li>Link: naar instellingen</li>\r\n	    	</ul>\r\n	    </div>\r\n    </section>\r\n</div>");
$templateCache.put("mobile/help/help.html","<div class=\"panel\">\r\n    <header>Help</header>\r\n    <section>\r\n	    <div class=\"profiel\">\r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Uitleg van de app</li>\r\n		    	<li>FAQ</li>\r\n		    	<li>Link: voorwaarden en statements</li>\r\n				<li>Link: ondersteuningsite</li>\r\n	    	</ul>\r\n	    </div>\r\n    </section>\r\n</div>");
$templateCache.put("mobile/instellingen/instellingen.html","<div class=\"panel\">\r\n    <header>Instellingen</header>\r\n    <section>\r\n	    <div class=\"instellingen\">\r\n	    	Hier komen instellingen voor:\r\n	    	<ul>\r\n		    	<li>Profiel</li>\r\n		    	<li>Communicatie en privacy</li>\r\n		    	<li>Meldingen</li>\r\n		    	<li>Gebruik van de app</li>\r\n	    	</ul>\r\n	    </div>\r\n    </section>\r\n</div>");
$templateCache.put("mobile/profiel/profiel.html","<div class=\"panel\">\r\n    <header>Profiel</header>\r\n    <section>\r\n	    <div class=\"profiel\">\r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Overzicht eigen profiel</li>\r\n		    	<li>Link: advies, statistieken</li>\r\n		    	<li>Overzicht profielen</li>\r\n		    	<li>Toevoegen profiel (kind, partner, ouder, etc)</li>\r\n				<li>Toevoegen contactgegevens noodsituaties (of linkje delen en mailen oid)</li>\r\n	    	</ul>\r\n	    </div>\r\n    </section>\r\n</div>");
$templateCache.put("mobile/start/start.html","<div class=\"panel\">\r\n    <header>Overzicht</header>\r\n    <section>\r\n	    <div class=\"start-chart\">\r\n	        <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\"\r\n	            chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\"\r\n	            chart-click=\"onClick\" >\r\n	        </canvas>\r\n	    </div>\r\n	    <p>Linkjes naar: toiletgang (<a ui-sref=\"base.toilet\">toilet</a>), statistieken (<a ui-sref=\"base.stats\">stats</a>), profiel (<a ui-sref=\"base.profiel\">profiel</a>), advies (<a ui-sref=\"base.advies\">advies</a>)</p>\r\n	    <p>\r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Huidige uitslag</li>\r\n		    	<li>Advies</li>\r\n		    	<li>Indien nodig: melding over resultaat met doorsturen</li>\r\n		    	<li>Nieuwe toiletgang</li>\r\n	    	</ul>\r\n	    </p>\r\n    </section>\r\n</div>");
$templateCache.put("mobile/stats/stats.html","<div class=\"panel\">\r\n    <header>Statistieken</header>\r\n    <section>\r\n	    <div class=\"profiel\">\r\n	        \r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Langere termijn data samen met min/max en gemiddelden van geaccepteerde data.</li>\r\n		    	<li>Navigatie/selectie (zoeken, paginering)</li>\r\n		    	<li>Categorieën</li>\r\n		    	<li>Doel/vergelijkingsniveau\'s (marge)</li>\r\n	    	</ul>\r\n	    </div>\r\n    </section>\r\n</div>");
$templateCache.put("mobile/toilet/toilet.html","<div class=\"panel\">\r\n    <header>Toiletgang</header>\r\n    <section>\r\n	    <div class=\"toiletgang\">\r\n	        \r\n	    	Hier komt:\r\n	    	<ul>\r\n		    	<li>Start</li>\r\n		    	<li>Bezig met detecteren</li>\r\n		    	<li>Bezig met analyseren</li>\r\n		    	<li>resultaat\r\n			    	<ul>\r\n				    	<li>Detail</li>\r\n				    	<li>Advies</li>\r\n				    	<li>Doorsturen</li>\r\n				    	<li>Link: Statistieken</li>\r\n			    	</ul>\r\n		    	</li>\r\n	    	</ul>\r\n	    </div>\r\n    </section>\r\n</div>");
$templateCache.put("start/start/start.html","<div class=\"panel\">\r\n    <header>Start</header>\r\n    <section>\r\n	    <div class=\"demo-select\" data-ng-click=\"setMode(\'demo1\')\">Demo 1</div>\r\n	    <div class=\"demo-select\" data-ng-click=\"setMode(\'demo2\')\">Demo 2</div>\r\n	    <div class=\"demo-select\" data-ng-click=\"setMode(\'demo3\')\">Demo 3</div>\r\n	    <div class=\"demo-select\" data-ng-click=\"setMode(\'demo4\')\">Demo 4</div>\r\n	    <div class=\"demo-select\" data-ng-click=\"setMode(\'demo5\')\">Demo 5</div>\r\n	    <div class=\"demo-select\" data-ng-click=\"setMode(\'demo6\')\">Demo 6</div>\r\n	    <div class=\"demo-select\" data-ng-click=\"setMode(\'user1\')\">User 1</div>\r\n	    <div class=\"demo-select\" data-ng-click=\"setMode(\'user2\')\">User 2</div>\r\n	    <div class=\"demo-select\" data-ng-click=\"setMode(\'user3\')\">User 3</div>\r\n	    <div class=\"clear-fix\"></div>\r\n    </section>\r\n</div>");
$templateCache.put("test/color/color.html","<div class=\"panel\">\r\n    <header class=\"white\">Colors</header>\r\n    <section>\r\n    	<p>Laatste kleur: <span ng-bind=\"myColorText\"></span></p>\r\n    	<div class=\"color-box\" data-ng-style=\"{\'background-color\': myColor}\" data-ng-class=\"{\'no-color\': noColor}\"></div>\r\n	    <br/><br/>\r\n	    <p><button type=\"button\" class=\"button\" data-ng-click=\"update()\" data-ng-class=\"{success: autoUpdate}\">Autoupdate</button> <button type=\"button\" class=\"button\" data-ng-click=\"stop()\" data-ng-class=\"{alert: !autoUpdate}\">Stop</button></p>\r\n    </section>\r\n</div>");
$templateCache.put("test/welke/welke.html","<div class=\"panel\">\r\n    <header>Wat is het?</header>\r\n    <section>\r\n    	<p>Is het:</p>\r\n    	<div class=\"item-box small cola\"><span>Cola</span></div>\r\n    	<div class=\"item-box small sinas\"><span>Sinas</span></div>\r\n    	<div class=\"item-box small water\"><span>Water</span></div>\r\n    	<br/><br/>\r\n    	<p>Laatste selectie: <span ng-bind=\"itemText\"></span></p>\r\n    	<div class=\"item-box\" data-ng-class=\"itemClass\"><span data-ng-bind=\"itemText\"></span></div>\r\n	    <br/><br/>\r\n	    <p><button type=\"button\" class=\"button\" data-ng-click=\"update()\" data-ng-class=\"{success: autoUpdate}\">Autoupdate</button> <button type=\"button\" class=\"button\" data-ng-click=\"stop()\" data-ng-class=\"{alert: !autoUpdate}\">Stop</button></p>\r\n    </section>\r\n</div>");
$templateCache.put("core/structure/footer/footer.html","<footer>\r\n\r\n</footer>");
$templateCache.put("core/structure/header/header.html","<div class=\"title-bar\">\r\n    <div class=\"title-bar-left\">\r\n	    <button class=\"menu-icon\" type=\"button\" data-ng-click=\"toggleSideMenu()\"></button>\r\n	    <span class=\"title-bar-title\">IpOT</span>\r\n    </div>\r\n    <div class=\"title-bar-right\">\r\n    	<ul class=\"horizontal menu\">\r\n    		<li data-ng-show=\"user.voornaam !== undefined && user.voornaam !== \'\'\">Hi <span data-ng-bind=\"user.voornaam\"></span>!</li>\r\n	      	<li>\r\n	    		<a data-ng-click=\"toggleModeSwitcher()\" data-ng-class=\"{active: modeSwitcher === true}\">\r\n		      		<span class=\"fa fa-sitemap\"></span>	    		\r\n		        </a>\r\n		        <ul class=\"vertical menu\" data-ng-class=\"{show: modeSwitcher === true}\">\r\n		        	<li><a data-ng-click=\"setMode(\'start\')\">Start</a></li>\r\n		        	<li><a data-ng-click=\"setMode(\'demo1\')\">Demo1 - Color</a></li>\r\n		        	<li><a data-ng-click=\"setMode(\'demo2\')\">Demo2 - Welke</a></li>\r\n		        	<li><a data-ng-click=\"setMode(\'demo3\')\">Demo3 - Gebruiker goed</a></li>\r\n		        	<li><a data-ng-click=\"setMode(\'demo4\')\">Demo4 - Gebruiker slecht</a></li>\r\n		        	<li><a data-ng-click=\"setMode(\'demo5\')\">Demo5 - Dokter</a></li>\r\n		        	<li><a data-ng-click=\"setMode(\'demo6\')\">Demo6 - Aanmelden</a></li>\r\n		        	<li><a data-ng-click=\"setMode(\'user1\')\">User1 - Gebruiker goed</a></li>\r\n		        	<li><a data-ng-click=\"setMode(\'user2\')\">User2 - Gebruiker slecht</a></li>\r\n		        	<li><a data-ng-click=\"setMode(\'user3\')\">User3 - Dokter</a></li>\r\n		        </ul>\r\n	        </li>\r\n	      	<li><a href=\"#\"><span class=\"fa fa-comment\"></span></a></li>\r\n	      	<li><a href=\"#\"><span class=\"fa fa-newspaper-o\"></span></a></li>\r\n	    </ul>\r\n    </div>\r\n</div>");
$templateCache.put("core/structure/layout/layout.html","<div ui-view=\"\"></div>");
$templateCache.put("core/structure/navigation/navigation.html","<nav>\r\n    <ul class=\"vertical menu\" data-ng-if=\"mode.platform === \'login\'\">\r\n        <li><a ui-sref=\"base.aanmelden\" ui-sref-active=\"active\">Aanmelden</a></li>\r\n    </ul>\r\n    <ul class=\"vertical menu\" data-ng-if=\"mode.platform === \'mobile\'\">\r\n        <li><a ui-sref=\"base.mobile\" ui-sref-active=\"active\">Start</a></li>\r\n        <li><a ui-sref=\"base.profiel\" ui-sref-active=\"active\">Profiel</a></li>\r\n        <li><a ui-sref=\"base.stats\" ui-sref-active=\"active\">Statistieken</a></li>\r\n        <li><a ui-sref=\"base.advies\" ui-sref-active=\"active\">Advies</a></li>\r\n        <li><a ui-sref=\"base.contact\" ui-sref-active=\"active\">Contact</a></li>\r\n        <li><a ui-sref=\"base.instellingen\" ui-sref-active=\"active\">Instellingen</a></li>\r\n        <li><a ui-sref=\"base.help\" ui-sref-active=\"active\">Help</a></li>\r\n    </ul>\r\n    <ul class=\"vertical menu\" data-ng-if=\"mode.platform === \'dashboard\'\">\r\n        <li><a ui-sref=\"base.dashboard\" ui-sref-active=\"active\">Dashboard</a></li>\r\n        <li><a ui-sref=\"base.patienten\" ui-sref-active=\"active\">Patienten</a></li>\r\n    </ul>\r\n    <ul class=\"vertical menu\" data-ng-if=\"mode.platform === \'test\'\">\r\n        <li><a ui-sref=\"base.color\" ui-sref-active=\"active\">Kleurensensor</a></li>\r\n        <li><a ui-sref=\"base.welke\" ui-sref-active=\"active\">Welke van de 2</a></li>\r\n    </ul>\r\n</nav>");}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy5qcyIsImNvcmUvZXJyb3IvZXJyb3IuaHRtbCIsImNvcmUvbG9hZGluZy9sb2FkaW5nLmh0bWwiLCJkYXNoYm9hcmQvcGF0aWVudC9wYXRpZW50Lmh0bWwiLCJkYXNoYm9hcmQvcGF0aWVudGVuL3BhdGllbnRlbi5odG1sIiwiZGFzaGJvYXJkL3N0YXJ0L3N0YXJ0Lmh0bWwiLCJsb2dpbi9hYW5tZWxkZW4vYWFubWVsZGVuLmh0bWwiLCJsb2dpbi9sb2dpbi9sb2dpbi5odG1sIiwibW9iaWxlL2Fkdmllcy9hZHZpZXMuaHRtbCIsIm1vYmlsZS9jb250YWN0L2NvbnRhY3QuaHRtbCIsIm1vYmlsZS9oZWxwL2hlbHAuaHRtbCIsIm1vYmlsZS9pbnN0ZWxsaW5nZW4vaW5zdGVsbGluZ2VuLmh0bWwiLCJtb2JpbGUvcHJvZmllbC9wcm9maWVsLmh0bWwiLCJtb2JpbGUvc3RhcnQvc3RhcnQuaHRtbCIsIm1vYmlsZS9zdGF0cy9zdGF0cy5odG1sIiwibW9iaWxlL3RvaWxldC90b2lsZXQuaHRtbCIsInN0YXJ0L3N0YXJ0L3N0YXJ0Lmh0bWwiLCJ0ZXN0L2NvbG9yL2NvbG9yLmh0bWwiLCJ0ZXN0L3dlbGtlL3dlbGtlLmh0bWwiLCJjb3JlL3N0cnVjdHVyZS9mb290ZXIvZm9vdGVyLmh0bWwiLCJjb3JlL3N0cnVjdHVyZS9oZWFkZXIvaGVhZGVyLmh0bWwiLCJjb3JlL3N0cnVjdHVyZS9sYXlvdXQvbGF5b3V0Lmh0bWwiLCJjb3JlL3N0cnVjdHVyZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQSIsImZpbGUiOiJ0ZW1wbGF0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIjxoMj5FciBnaW5nIHdhdCBmb3V0PC9oMj5cclxuPHA+UHJvYmVlciBoZXQgb3BuaWV1dyBvZiBnYSB0ZXJ1Zy48L3A+IiwiPGgyPkxvYWRpbmc8L2gyPlxyXG48cD5CZXppZyBtZXQgbGFkZW4uLi48L3A+IiwiPGRpdiBjbGFzcz1cInBhbmVsXCI+XHJcbiAgICA8aGVhZGVyPlBhdGllbnQ8L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uPlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwic3RhcnQtY2hhcnRcIj5cclxuXHQgICAgICAgIDxjYW52YXMgaWQ9XCJsaW5lXCIgY2xhc3M9XCJjaGFydCBjaGFydC1saW5lXCIgY2hhcnQtZGF0YT1cImRhdGFcIlxyXG5cdCAgICAgICAgICAgIGNoYXJ0LWxhYmVscz1cImxhYmVsc1wiIGNoYXJ0LWxlZ2VuZD1cInRydWVcIiBjaGFydC1zZXJpZXM9XCJzZXJpZXNcIlxyXG5cdCAgICAgICAgICAgIGNoYXJ0LWNsaWNrPVwib25DbGlja1wiID5cclxuXHQgICAgICAgIDwvY2FudmFzPlxyXG5cdCAgICA8L2Rpdj5cclxuXHQgICAgPHA+XHQgICAgXHRcclxuXHQgICAgXHRIaWVyIGtvbXQ6XHJcblx0ICAgIFx0PHVsPlxyXG5cdFx0ICAgIFx0PGxpPkRpdmVyc2UgZ3JhZmlla2VuIGVuIHRhYmVsbGVuLiBEZSBkZW5rZW4gdmFsdCBhYW46XHJcblx0XHRcdCAgICBcdDx1bD5cclxuXHRcdFx0XHQgICAgXHQ8bGk+UmVkZW4gdG90IGNvbnRhY3QvbWVsZGluZ2VuXHJcblx0XHRcdFx0ICAgIFx0PHVsPlxyXG5cdFx0XHRcdFx0ICAgIFx0PGxpPlN0dXVyIHZyYWdlbmxpanN0PC9saT5cclxuXHRcdFx0XHQgICAgXHQ8L3VsPlxyXG5cdFx0XHRcdCAgICBcdDwvbGk+XHJcblx0XHRcdFx0ICAgIFx0PGxpPkxhYXRzdGUgcmVzdWx0YXRlblxyXG5cdFx0XHRcdCAgICBcdDx1bD5cclxuXHRcdFx0XHRcdCAgICBcdDxsaT50cmVuZDwvbGk+XHJcblx0XHRcdFx0XHQgICAgXHQ8bGk+bGFhdHN0ZSB3YWFyZGU8L2xpPlxyXG5cdFx0XHRcdFx0ICAgIFx0PGxpPnN0YXR1czwvbGk+XHJcblx0XHRcdFx0XHQgICAgXHQ8bGk+ZGF0dW0vdGlqZDwvbGk+XHJcblx0XHRcdFx0XHQgICAgXHQ8bGk+ZGlhZ25vc2U8L2xpPlxyXG5cdFx0XHRcdCAgICBcdDwvdWw+PC9saT5cclxuXHRcdFx0XHQgICAgXHQ8bGk+VGlqZHNsaWpuIG1ldCB3YWFyZGVuIGVuIGRlIGJpamJlaG9yZW5kZSBtYXJnZS9ub3JtPC9saT5cclxuXHRcdFx0XHQgICAgXHQ8bGk+VGlqZHNsaWpuIHZhbiB3aWp6aWdpbmdlbiAoemlla2VuaHVpc29wbmFtZXMsIG1lZGljaWpuZW4sIGNvbnRhY3QgaXZtIGtsYWNodGVuLCBldGMpPC9saT5cclxuXHRcdFx0XHQgICAgXHQ8bGk+TGFhdHN0IGdlZ2V2ZW4gZGlhZ25vc2VzPC9saT5cclxuXHRcdFx0XHQgICAgPC91bD5cclxuXHRcdCAgICBcdDwvbGk+XHJcblx0XHQgICAgXHQ8bGk+UGF0aWVudGluZm9ybWF0aWUgKE5BVywgY29udGFjdGdlZ2V2ZW5zLCBiZXRyb2trZW4gYXJ0c2VuLCB2ZXJ6ZWtlcmluZywgemlla3RlcyBlbiBhYW5kb2VuaW5nZW4sIGhpc3RvcmllKTwvbGk+XHJcblx0XHQgICAgXHQ8bGk+Tm90aXRpZXM8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPkZpbHRlcmVuIG9wIGJlcGFhbGRlIHJlc3VsdGF0ZW4gZW4gYmV0cm9ra2VuIGluZm9ybWF0aWUgKGJ2IGFsbGVzIGluIHJlbGF0aWUgdG90IHN1aWtlcnppZWt0ZSk8L2xpPlxyXG5cdFx0XHQgICAgXHRcclxuXHRcdCAgICBcdDxsaT5GaWx0ZXIsIHpvZWtlbiwgcGFnaW5lcmluZzwvbGk+XHJcblx0ICAgIFx0PC91bD5cclxuXHQgICAgPC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2Rpdj4iLCI8ZGl2IGNsYXNzPVwicGFuZWxcIj5cclxuICAgIDxoZWFkZXI+UGF0aWVudGVuPC9oZWFkZXI+XHJcbiAgICA8c2VjdGlvbj5cclxuXHQgICAgPHA+TGlua2plIG5hYXI6IHBhdGllbnQgKDxhIHVpLXNyZWY9XCJiYXNlLnBhdGllbnRcIj5wYXRpZW50PC9hPik8L3A+XHJcblx0ICAgIDxwPlxyXG5cdCAgICBcdEhpZXIga29tdDpcclxuXHQgICAgXHQ8dWw+XHJcblx0XHQgICAgXHQ8bGk+T3ZlcnppY2h0IHZhbiBwYXRpZW50ZW4gb20gZG9vciB0ZSBibGFkZXJlbjwvbGk+XHJcblx0XHQgICAgXHQ8bGk+Wm9la2Zvcm11bGllcjwvbGk+XHJcblx0XHQgICAgXHQ8bGk+RmlsdGVycyBlbiBwYWdpbmVyaW5nPC9saT5cclxuXHQgICAgXHQ8L3VsPlxyXG5cdCAgICA8L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgPGhlYWRlcj5EYXNoYm9hcmQ8L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uPlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwic3RhcnQtY2hhcnRcIj5cclxuXHQgICAgICAgIDxjYW52YXMgaWQ9XCJsaW5lXCIgY2xhc3M9XCJjaGFydCBjaGFydC1saW5lXCIgY2hhcnQtZGF0YT1cImRhdGFcIlxyXG5cdCAgICAgICAgICAgIGNoYXJ0LWxhYmVscz1cImxhYmVsc1wiIGNoYXJ0LWxlZ2VuZD1cInRydWVcIiBjaGFydC1zZXJpZXM9XCJzZXJpZXNcIlxyXG5cdCAgICAgICAgICAgIGNoYXJ0LWNsaWNrPVwib25DbGlja1wiID5cclxuXHQgICAgICAgIDwvY2FudmFzPlxyXG5cdCAgICA8L2Rpdj5cclxuXHQgICAgPHA+XHQgICAgXHRcclxuXHQgICAgXHRIaWVyIGtvbXQ6XHJcblx0ICAgIFx0PHVsPlxyXG5cdFx0ICAgIFx0PGxpPkdsb2JhbGUgc3RhdGlzdGlla2VuPC9saT5cclxuXHRcdFx0XHQ8bGk+R3JhZmllayBtZXQgYWFudGFsIHppZWtlbiBwZXIgZGFnL3dlZWsvbWFhbmQ8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPkthYXJ0IHZvb3IgZXBpZGVtacOrbjwvbGk+XHJcblx0XHQgICAgXHQ8bGk+QWFudGFsIHBhdGllbnRlbiBtZXQgb3BlbnN0YWFuZGUga2xhY2h0ZW48L2xpPlxyXG5cdFx0XHRcdDxsaT5BZnNwcmFrZW4gdmFuIHZhbmRhYWc8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPlNuZWxsZSBuYXZpZ2F0aWUgbmFhciBwYXRpZW50ZW48L2xpPlxyXG5cdCAgICBcdDwvdWw+XHJcblx0ICAgIDwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuPC9kaXY+IiwiPGRpdiBjbGFzcz1cInBhbmVsXCI+XHJcbiAgICA8aGVhZGVyPkFhbm1lbGRlbjwvaGVhZGVyPlxyXG4gICAgPHNlY3Rpb24+XHJcblx0ICAgIDxkaXYgY2xhc3M9XCJwcm9maWVsXCI+XHQgICAgICAgIFxyXG5cdCAgICBcdEhpZXIga29tdDpcclxuXHQgICAgXHQ8dWw+XHJcblx0XHQgICAgXHQ8bGk+QWFubWVsZGZvcm11bGllcjwvbGk+XHJcblx0XHQgICAgXHQ8bGk+SW5mb3JtYXRpZSBvdmVyIGdlYnJ1aWsgdmFuIGFwcDwvbGk+XHJcblx0XHQgICAgXHQ8bGk+TGluazogbmFhciBGQVEsIHZvb3J3YWFyZGVuIGVuIChwcml2YWN5KSBzdGF0ZW1lbnRzPC9saT5cclxuXHRcdCAgICBcdDxsaT5MaW5rOiBwcm9kdWN0L2xldmVyYW5jaWVyL3NvZ2V0aTwvbGk+XHJcblx0ICAgIFx0PC91bD5cclxuXHQgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgPGhlYWRlcj5JbmxvZ2dlbjwvaGVhZGVyPlxyXG4gICAgPHNlY3Rpb24+XHJcblx0ICAgIDxkaXYgY2xhc3M9XCJwcm9maWVsXCI+XHJcblx0ICAgICAgICBcclxuXHQgICAgXHRIaWVyIGtvbXQ6XHJcblx0ICAgIFx0PHVsPlxyXG5cdFx0ICAgIFx0PGxpPklubG9nc2NoZXJtPC9saT5cclxuXHRcdFx0XHQ8bGk+TGluazogbG9naW4gdmVyZ2V0ZW48L2xpPlxyXG5cdFx0ICAgIFx0PGxpPkxpbms6IG5hYXIgYWFubWVsZGVuLCBwcm9kdWN0aW5mb3JtYXRpZSBlbiB2b29yd2FhcmRlbjwvbGk+XHJcblx0XHRcdFx0PGxpPk1vb2llIGFuaW1hdGllIHZvb3IgYmV0cmVkZW4gdmFuIGFwcDwvbGk+XHJcblx0ICAgIFx0PC91bD5cclxuXHQgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgPGhlYWRlcj5BZHZpZXM8L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uPlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwicHJvZmllbFwiPlxyXG5cdCAgICBcdEhpZXIga29tdDpcclxuXHQgICAgXHQ8dWw+XHJcblx0XHQgICAgXHQ8bGk+TGFhdHN0ZSBhZHZpZXM8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPkdlbmVyaWVrZSBhZHZpZXplbjwvbGk+XHJcblx0XHQgICAgXHQ8bGk+SGVscCBkYXRhYmFzZSBlbiBGQVE8L2xpPlxyXG5cdCAgICBcdDwvdWw+XHJcblx0ICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2Rpdj4iLCI8ZGl2IGNsYXNzPVwicGFuZWxcIj5cclxuICAgIDxoZWFkZXI+Q29udGFjdDwvaGVhZGVyPlxyXG4gICAgPHNlY3Rpb24+XHJcblx0ICAgIDxkaXYgY2xhc3M9XCJwcm9maWVsXCI+XHJcblx0ICAgIFx0SGllciBrb210OlxyXG5cdCAgICBcdDx1bD5cclxuXHRcdCAgICBcdDxsaT5Db250YWN0IG1ldCBodWlzYXJ0cyBvZiBzcGVjaWFsaXN0PC9saT5cclxuXHRcdCAgICBcdDxsaT5PdmVyemljaHQgdmFuIHRvZWdhbmcgdG90IGdlZ2V2ZW5zPC9saT5cclxuXHRcdCAgICBcdDxsaT5MaW5rOiBuYWFyIGluc3RlbGxpbmdlbjwvbGk+XHJcblx0ICAgIFx0PC91bD5cclxuXHQgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgPGhlYWRlcj5IZWxwPC9oZWFkZXI+XHJcbiAgICA8c2VjdGlvbj5cclxuXHQgICAgPGRpdiBjbGFzcz1cInByb2ZpZWxcIj5cclxuXHQgICAgXHRIaWVyIGtvbXQ6XHJcblx0ICAgIFx0PHVsPlxyXG5cdFx0ICAgIFx0PGxpPlVpdGxlZyB2YW4gZGUgYXBwPC9saT5cclxuXHRcdCAgICBcdDxsaT5GQVE8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPkxpbms6IHZvb3J3YWFyZGVuIGVuIHN0YXRlbWVudHM8L2xpPlxyXG5cdFx0XHRcdDxsaT5MaW5rOiBvbmRlcnN0ZXVuaW5nc2l0ZTwvbGk+XHJcblx0ICAgIFx0PC91bD5cclxuXHQgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgPGhlYWRlcj5JbnN0ZWxsaW5nZW48L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uPlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiaW5zdGVsbGluZ2VuXCI+XHJcblx0ICAgIFx0SGllciBrb21lbiBpbnN0ZWxsaW5nZW4gdm9vcjpcclxuXHQgICAgXHQ8dWw+XHJcblx0XHQgICAgXHQ8bGk+UHJvZmllbDwvbGk+XHJcblx0XHQgICAgXHQ8bGk+Q29tbXVuaWNhdGllIGVuIHByaXZhY3k8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPk1lbGRpbmdlbjwvbGk+XHJcblx0XHQgICAgXHQ8bGk+R2VicnVpayB2YW4gZGUgYXBwPC9saT5cclxuXHQgICAgXHQ8L3VsPlxyXG5cdCAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuPC9kaXY+IiwiPGRpdiBjbGFzcz1cInBhbmVsXCI+XHJcbiAgICA8aGVhZGVyPlByb2ZpZWw8L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uPlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwicHJvZmllbFwiPlxyXG5cdCAgICBcdEhpZXIga29tdDpcclxuXHQgICAgXHQ8dWw+XHJcblx0XHQgICAgXHQ8bGk+T3ZlcnppY2h0IGVpZ2VuIHByb2ZpZWw8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPkxpbms6IGFkdmllcywgc3RhdGlzdGlla2VuPC9saT5cclxuXHRcdCAgICBcdDxsaT5PdmVyemljaHQgcHJvZmllbGVuPC9saT5cclxuXHRcdCAgICBcdDxsaT5Ub2V2b2VnZW4gcHJvZmllbCAoa2luZCwgcGFydG5lciwgb3VkZXIsIGV0Yyk8L2xpPlxyXG5cdFx0XHRcdDxsaT5Ub2V2b2VnZW4gY29udGFjdGdlZ2V2ZW5zIG5vb2RzaXR1YXRpZXMgKG9mIGxpbmtqZSBkZWxlbiBlbiBtYWlsZW4gb2lkKTwvbGk+XHJcblx0ICAgIFx0PC91bD5cclxuXHQgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgPGhlYWRlcj5PdmVyemljaHQ8L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uPlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwic3RhcnQtY2hhcnRcIj5cclxuXHQgICAgICAgIDxjYW52YXMgaWQ9XCJsaW5lXCIgY2xhc3M9XCJjaGFydCBjaGFydC1saW5lXCIgY2hhcnQtZGF0YT1cImRhdGFcIlxyXG5cdCAgICAgICAgICAgIGNoYXJ0LWxhYmVscz1cImxhYmVsc1wiIGNoYXJ0LWxlZ2VuZD1cInRydWVcIiBjaGFydC1zZXJpZXM9XCJzZXJpZXNcIlxyXG5cdCAgICAgICAgICAgIGNoYXJ0LWNsaWNrPVwib25DbGlja1wiID5cclxuXHQgICAgICAgIDwvY2FudmFzPlxyXG5cdCAgICA8L2Rpdj5cclxuXHQgICAgPHA+TGlua2plcyBuYWFyOiB0b2lsZXRnYW5nICg8YSB1aS1zcmVmPVwiYmFzZS50b2lsZXRcIj50b2lsZXQ8L2E+KSwgc3RhdGlzdGlla2VuICg8YSB1aS1zcmVmPVwiYmFzZS5zdGF0c1wiPnN0YXRzPC9hPiksIHByb2ZpZWwgKDxhIHVpLXNyZWY9XCJiYXNlLnByb2ZpZWxcIj5wcm9maWVsPC9hPiksIGFkdmllcyAoPGEgdWktc3JlZj1cImJhc2UuYWR2aWVzXCI+YWR2aWVzPC9hPik8L3A+XHJcblx0ICAgIDxwPlxyXG5cdCAgICBcdEhpZXIga29tdDpcclxuXHQgICAgXHQ8dWw+XHJcblx0XHQgICAgXHQ8bGk+SHVpZGlnZSB1aXRzbGFnPC9saT5cclxuXHRcdCAgICBcdDxsaT5BZHZpZXM8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPkluZGllbiBub2RpZzogbWVsZGluZyBvdmVyIHJlc3VsdGFhdCBtZXQgZG9vcnN0dXJlbjwvbGk+XHJcblx0XHQgICAgXHQ8bGk+TmlldXdlIHRvaWxldGdhbmc8L2xpPlxyXG5cdCAgICBcdDwvdWw+XHJcblx0ICAgIDwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuPC9kaXY+IiwiPGRpdiBjbGFzcz1cInBhbmVsXCI+XHJcbiAgICA8aGVhZGVyPlN0YXRpc3RpZWtlbjwvaGVhZGVyPlxyXG4gICAgPHNlY3Rpb24+XHJcblx0ICAgIDxkaXYgY2xhc3M9XCJwcm9maWVsXCI+XHJcblx0ICAgICAgICBcclxuXHQgICAgXHRIaWVyIGtvbXQ6XHJcblx0ICAgIFx0PHVsPlxyXG5cdFx0ICAgIFx0PGxpPkxhbmdlcmUgdGVybWlqbiBkYXRhIHNhbWVuIG1ldCBtaW4vbWF4IGVuIGdlbWlkZGVsZGVuIHZhbiBnZWFjY2VwdGVlcmRlIGRhdGEuPC9saT5cclxuXHRcdCAgICBcdDxsaT5OYXZpZ2F0aWUvc2VsZWN0aWUgKHpvZWtlbiwgcGFnaW5lcmluZyk8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPkNhdGVnb3JpZcOrbjwvbGk+XHJcblx0XHQgICAgXHQ8bGk+RG9lbC92ZXJnZWxpamtpbmdzbml2ZWF1J3MgKG1hcmdlKTwvbGk+XHJcblx0ICAgIFx0PC91bD5cclxuXHQgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgPGhlYWRlcj5Ub2lsZXRnYW5nPC9oZWFkZXI+XHJcbiAgICA8c2VjdGlvbj5cclxuXHQgICAgPGRpdiBjbGFzcz1cInRvaWxldGdhbmdcIj5cclxuXHQgICAgICAgIFxyXG5cdCAgICBcdEhpZXIga29tdDpcclxuXHQgICAgXHQ8dWw+XHJcblx0XHQgICAgXHQ8bGk+U3RhcnQ8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPkJlemlnIG1ldCBkZXRlY3RlcmVuPC9saT5cclxuXHRcdCAgICBcdDxsaT5CZXppZyBtZXQgYW5hbHlzZXJlbjwvbGk+XHJcblx0XHQgICAgXHQ8bGk+cmVzdWx0YWF0XHJcblx0XHRcdCAgICBcdDx1bD5cclxuXHRcdFx0XHQgICAgXHQ8bGk+RGV0YWlsPC9saT5cclxuXHRcdFx0XHQgICAgXHQ8bGk+QWR2aWVzPC9saT5cclxuXHRcdFx0XHQgICAgXHQ8bGk+RG9vcnN0dXJlbjwvbGk+XHJcblx0XHRcdFx0ICAgIFx0PGxpPkxpbms6IFN0YXRpc3RpZWtlbjwvbGk+XHJcblx0XHRcdCAgICBcdDwvdWw+XHJcblx0XHQgICAgXHQ8L2xpPlxyXG5cdCAgICBcdDwvdWw+XHJcblx0ICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2Rpdj4iLCI8ZGl2IGNsYXNzPVwicGFuZWxcIj5cclxuICAgIDxoZWFkZXI+U3RhcnQ8L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uPlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZWxlY3RcIiBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgnZGVtbzEnKVwiPkRlbW8gMTwvZGl2PlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZWxlY3RcIiBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgnZGVtbzInKVwiPkRlbW8gMjwvZGl2PlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZWxlY3RcIiBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgnZGVtbzMnKVwiPkRlbW8gMzwvZGl2PlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZWxlY3RcIiBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgnZGVtbzQnKVwiPkRlbW8gNDwvZGl2PlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZWxlY3RcIiBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgnZGVtbzUnKVwiPkRlbW8gNTwvZGl2PlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZWxlY3RcIiBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgnZGVtbzYnKVwiPkRlbW8gNjwvZGl2PlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZWxlY3RcIiBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgndXNlcjEnKVwiPlVzZXIgMTwvZGl2PlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZWxlY3RcIiBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgndXNlcjInKVwiPlVzZXIgMjwvZGl2PlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiZGVtby1zZWxlY3RcIiBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgndXNlcjMnKVwiPlVzZXIgMzwvZGl2PlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiY2xlYXItZml4XCI+PC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cIndoaXRlXCI+Q29sb3JzPC9oZWFkZXI+XHJcbiAgICA8c2VjdGlvbj5cclxuICAgIFx0PHA+TGFhdHN0ZSBrbGV1cjogPHNwYW4gbmctYmluZD1cIm15Q29sb3JUZXh0XCI+PC9zcGFuPjwvcD5cclxuICAgIFx0PGRpdiBjbGFzcz1cImNvbG9yLWJveFwiIGRhdGEtbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtY29sb3InOiBteUNvbG9yfVwiIGRhdGEtbmctY2xhc3M9XCJ7J25vLWNvbG9yJzogbm9Db2xvcn1cIj48L2Rpdj5cclxuXHQgICAgPGJyLz48YnIvPlxyXG5cdCAgICA8cD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIGRhdGEtbmctY2xpY2s9XCJ1cGRhdGUoKVwiIGRhdGEtbmctY2xhc3M9XCJ7c3VjY2VzczogYXV0b1VwZGF0ZX1cIj5BdXRvdXBkYXRlPC9idXR0b24+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uXCIgZGF0YS1uZy1jbGljaz1cInN0b3AoKVwiIGRhdGEtbmctY2xhc3M9XCJ7YWxlcnQ6ICFhdXRvVXBkYXRlfVwiPlN0b3A8L2J1dHRvbj48L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgPGhlYWRlcj5XYXQgaXMgaGV0PzwvaGVhZGVyPlxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICBcdDxwPklzIGhldDo8L3A+XHJcbiAgICBcdDxkaXYgY2xhc3M9XCJpdGVtLWJveCBzbWFsbCBjb2xhXCI+PHNwYW4+Q29sYTwvc3Bhbj48L2Rpdj5cclxuICAgIFx0PGRpdiBjbGFzcz1cIml0ZW0tYm94IHNtYWxsIHNpbmFzXCI+PHNwYW4+U2luYXM8L3NwYW4+PC9kaXY+XHJcbiAgICBcdDxkaXYgY2xhc3M9XCJpdGVtLWJveCBzbWFsbCB3YXRlclwiPjxzcGFuPldhdGVyPC9zcGFuPjwvZGl2PlxyXG4gICAgXHQ8YnIvPjxici8+XHJcbiAgICBcdDxwPkxhYXRzdGUgc2VsZWN0aWU6IDxzcGFuIG5nLWJpbmQ9XCJpdGVtVGV4dFwiPjwvc3Bhbj48L3A+XHJcbiAgICBcdDxkaXYgY2xhc3M9XCJpdGVtLWJveFwiIGRhdGEtbmctY2xhc3M9XCJpdGVtQ2xhc3NcIj48c3BhbiBkYXRhLW5nLWJpbmQ9XCJpdGVtVGV4dFwiPjwvc3Bhbj48L2Rpdj5cclxuXHQgICAgPGJyLz48YnIvPlxyXG5cdCAgICA8cD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIGRhdGEtbmctY2xpY2s9XCJ1cGRhdGUoKVwiIGRhdGEtbmctY2xhc3M9XCJ7c3VjY2VzczogYXV0b1VwZGF0ZX1cIj5BdXRvdXBkYXRlPC9idXR0b24+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uXCIgZGF0YS1uZy1jbGljaz1cInN0b3AoKVwiIGRhdGEtbmctY2xhc3M9XCJ7YWxlcnQ6ICFhdXRvVXBkYXRlfVwiPlN0b3A8L2J1dHRvbj48L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvZGl2PiIsIjxmb290ZXI+XHJcblxyXG48L2Zvb3Rlcj4iLCI8ZGl2IGNsYXNzPVwidGl0bGUtYmFyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGUtYmFyLWxlZnRcIj5cclxuXHQgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtaWNvblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLW5nLWNsaWNrPVwidG9nZ2xlU2lkZU1lbnUoKVwiPjwvYnV0dG9uPlxyXG5cdCAgICA8c3BhbiBjbGFzcz1cInRpdGxlLWJhci10aXRsZVwiPklwT1Q8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1iYXItcmlnaHRcIj5cclxuICAgIFx0PHVsIGNsYXNzPVwiaG9yaXpvbnRhbCBtZW51XCI+XHJcbiAgICBcdFx0PGxpIGRhdGEtbmctc2hvdz1cInVzZXIudm9vcm5hYW0gIT09IHVuZGVmaW5lZCAmJiB1c2VyLnZvb3JuYWFtICE9PSAnJ1wiPkhpIDxzcGFuIGRhdGEtbmctYmluZD1cInVzZXIudm9vcm5hYW1cIj48L3NwYW4+ITwvbGk+XHJcblx0ICAgICAgXHQ8bGk+XHJcblx0ICAgIFx0XHQ8YSBkYXRhLW5nLWNsaWNrPVwidG9nZ2xlTW9kZVN3aXRjaGVyKClcIiBkYXRhLW5nLWNsYXNzPVwie2FjdGl2ZTogbW9kZVN3aXRjaGVyID09PSB0cnVlfVwiPlxyXG5cdFx0ICAgICAgXHRcdDxzcGFuIGNsYXNzPVwiZmEgZmEtc2l0ZW1hcFwiPjwvc3Bhbj5cdCAgICBcdFx0XHJcblx0XHQgICAgICAgIDwvYT5cclxuXHRcdCAgICAgICAgPHVsIGNsYXNzPVwidmVydGljYWwgbWVudVwiIGRhdGEtbmctY2xhc3M9XCJ7c2hvdzogbW9kZVN3aXRjaGVyID09PSB0cnVlfVwiPlxyXG5cdFx0ICAgICAgICBcdDxsaT48YSBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgnc3RhcnQnKVwiPlN0YXJ0PC9hPjwvbGk+XHJcblx0XHQgICAgICAgIFx0PGxpPjxhIGRhdGEtbmctY2xpY2s9XCJzZXRNb2RlKCdkZW1vMScpXCI+RGVtbzEgLSBDb2xvcjwvYT48L2xpPlxyXG5cdFx0ICAgICAgICBcdDxsaT48YSBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgnZGVtbzInKVwiPkRlbW8yIC0gV2Vsa2U8L2E+PC9saT5cclxuXHRcdCAgICAgICAgXHQ8bGk+PGEgZGF0YS1uZy1jbGljaz1cInNldE1vZGUoJ2RlbW8zJylcIj5EZW1vMyAtIEdlYnJ1aWtlciBnb2VkPC9hPjwvbGk+XHJcblx0XHQgICAgICAgIFx0PGxpPjxhIGRhdGEtbmctY2xpY2s9XCJzZXRNb2RlKCdkZW1vNCcpXCI+RGVtbzQgLSBHZWJydWlrZXIgc2xlY2h0PC9hPjwvbGk+XHJcblx0XHQgICAgICAgIFx0PGxpPjxhIGRhdGEtbmctY2xpY2s9XCJzZXRNb2RlKCdkZW1vNScpXCI+RGVtbzUgLSBEb2t0ZXI8L2E+PC9saT5cclxuXHRcdCAgICAgICAgXHQ8bGk+PGEgZGF0YS1uZy1jbGljaz1cInNldE1vZGUoJ2RlbW82JylcIj5EZW1vNiAtIEFhbm1lbGRlbjwvYT48L2xpPlxyXG5cdFx0ICAgICAgICBcdDxsaT48YSBkYXRhLW5nLWNsaWNrPVwic2V0TW9kZSgndXNlcjEnKVwiPlVzZXIxIC0gR2VicnVpa2VyIGdvZWQ8L2E+PC9saT5cclxuXHRcdCAgICAgICAgXHQ8bGk+PGEgZGF0YS1uZy1jbGljaz1cInNldE1vZGUoJ3VzZXIyJylcIj5Vc2VyMiAtIEdlYnJ1aWtlciBzbGVjaHQ8L2E+PC9saT5cclxuXHRcdCAgICAgICAgXHQ8bGk+PGEgZGF0YS1uZy1jbGljaz1cInNldE1vZGUoJ3VzZXIzJylcIj5Vc2VyMyAtIERva3RlcjwvYT48L2xpPlxyXG5cdFx0ICAgICAgICA8L3VsPlxyXG5cdCAgICAgICAgPC9saT5cclxuXHQgICAgICBcdDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtY29tbWVudFwiPjwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICBcdDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtbmV3c3BhcGVyLW9cIj48L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IiwiPGRpdiB1aS12aWV3PVwiXCI+PC9kaXY+IiwiPG5hdj5cclxuICAgIDx1bCBjbGFzcz1cInZlcnRpY2FsIG1lbnVcIiBkYXRhLW5nLWlmPVwibW9kZS5wbGF0Zm9ybSA9PT0gJ2xvZ2luJ1wiPlxyXG4gICAgICAgIDxsaT48YSB1aS1zcmVmPVwiYmFzZS5hYW5tZWxkZW5cIiB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiPkFhbm1lbGRlbjwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDx1bCBjbGFzcz1cInZlcnRpY2FsIG1lbnVcIiBkYXRhLW5nLWlmPVwibW9kZS5wbGF0Zm9ybSA9PT0gJ21vYmlsZSdcIj5cclxuICAgICAgICA8bGk+PGEgdWktc3JlZj1cImJhc2UubW9iaWxlXCIgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIj5TdGFydDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSB1aS1zcmVmPVwiYmFzZS5wcm9maWVsXCIgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIj5Qcm9maWVsPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIHVpLXNyZWY9XCJiYXNlLnN0YXRzXCIgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIj5TdGF0aXN0aWVrZW48L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgdWktc3JlZj1cImJhc2UuYWR2aWVzXCIgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIj5BZHZpZXM8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgdWktc3JlZj1cImJhc2UuY29udGFjdFwiIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSB1aS1zcmVmPVwiYmFzZS5pbnN0ZWxsaW5nZW5cIiB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiPkluc3RlbGxpbmdlbjwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSB1aS1zcmVmPVwiYmFzZS5oZWxwXCIgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIj5IZWxwPC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPHVsIGNsYXNzPVwidmVydGljYWwgbWVudVwiIGRhdGEtbmctaWY9XCJtb2RlLnBsYXRmb3JtID09PSAnZGFzaGJvYXJkJ1wiPlxyXG4gICAgICAgIDxsaT48YSB1aS1zcmVmPVwiYmFzZS5kYXNoYm9hcmRcIiB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiPkRhc2hib2FyZDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSB1aS1zcmVmPVwiYmFzZS5wYXRpZW50ZW5cIiB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiPlBhdGllbnRlbjwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDx1bCBjbGFzcz1cInZlcnRpY2FsIG1lbnVcIiBkYXRhLW5nLWlmPVwibW9kZS5wbGF0Zm9ybSA9PT0gJ3Rlc3QnXCI+XHJcbiAgICAgICAgPGxpPjxhIHVpLXNyZWY9XCJiYXNlLmNvbG9yXCIgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIj5LbGV1cmVuc2Vuc29yPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIHVpLXNyZWY9XCJiYXNlLndlbGtlXCIgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIj5XZWxrZSB2YW4gZGUgMjwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuPC9uYXY+Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
