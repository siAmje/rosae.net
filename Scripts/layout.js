// crétaion des boutons pour chaque fonctionnalité
var variablesGlobales=new Object();
function accueil(){
$('#menu-principal').append('<button id="but1">Accueil</button>');
$('#but1').button(
{
	icons: {primary:"ui-icon-home"},
	text: false
});
}
//-----------------------------------------------
function mission(){
$('#menu-principal').append('<button id="but2">Gestion des missions</button>');
$('#but2').button(
{
	icons: {primary:"ui-icon-suitcase", secondary: "ui-icon-triangle-1-s"}
});
$("#but2").click(menuMissionAdmin);
}
//menu des missions pour un administrateur
function menuMissionAdmin(){
var menuModule=[]
		menuModule.push('<div id="tabsMissions"><ul><li>');
		menuModule.push('<a href="#creerMiss">Creer une nouvelle missions</a></li>');
		menuModule.push('<li><a href="#modifMiss">Remplir des questionnaires</a>');
		menuModule.push('</li><li><a href="#suppMiss">Supprimer un module</a></li></ul>');
		menuModule.push('<div id="creerMiss"><p>ici se trouveront les fonctions pour la creation des module</p></div>');
		menuModule.push('<div id="modifMiss"><p> ici pour la modif des modules</p></div>');
		menuModule.push('<div id="suppMiss"><p>ici la suppression</p><div></div>');
		$("#container").html(menuModule.join(''));
		$("#tabsMissions").tabs();
}
//--------------------------------------------------------------------------------
function module(){
$('#menu-principal').append('<button id="but3">Gestion des modules</button>');
$('#but3').button(
{
	icons: {primary:"ui-icon-clipboard", secondary: "ui-icon-triangle-1-s"}
});
$("#but3").click(function(){
	var menuModule=[]
		menuModule.push('<div id="tabsModule"><ul><li>');
		menuModule.push('<a href="#creerM">Creer un module</a></li>');
		menuModule.push('<li><a href="#modifM">Modifier un module</a>');
		menuModule.push('</li><li><a href="#suppM">Supprimer un module</a></li></ul>');
		menuModule.push('<div id="creerM"><p>ici se trouveront les fonctions pour la creation des module</p></div>');
		menuModule.push('<div id="modifM"><p> ici pour la modif des modules</p></div>');
		menuModule.push('<div id="suppM"><p>ici la suppression</p><div></div>');
		$("#container").html(menuModule.join(''));
		$("#tabsModule").tabs();
		creerModule("#creerM");
		$('#tabsModule').append('<div id="creationChamp"></div>');
		
});
}
function creerModule(divCont){// fonctionnalité pour créer un module
//un champ text, un bouton
var cont=[];
variablesGlobales.validerMod= 0;
cont.push('<div id="nomModule"><label for="champMod">Nom du Module:</label><input id="champMod">');
cont.push('<button id="butonCreerModule">Valider</button></div>');
$(divCont).html(cont.join(''));
$('#butonCreerModule').button(
{
	icons: {primary:"ui-icon-circle-check"}
});
$('#butonCreerModule').css("left","27px");
$('#butonCreerModule').click(function(){
 if(variablesGlobales.validerMod==0){
	creerChampModule();
	variablesGlobales.validerMod= 1;
	}
});
}
function validerCreationModule(){
//verifierSiLeNomEstDispo() requete mySql
// si dispo, structurerPage(): creer un tableau pour afficher les champs et type de champs qui vont être crées!
// creerChampModule()
}
function creerChampModule(){
var champ=[];
champ.push('<label for="nomChampModule">Nom du Champ:</label><input id="nomChampModule">');
champ.push('<label for="choixTypeChamp">Type du champ:</label>');
champ.push('<select name="choixTypeChamp">');
champ.push('<option value="champText">Champ Text</label>');
champ.push('<option value="champNumerique">Champ Numérique</label>');
champ.push('<option value="champDate">Champ Date</label>');
champ.push('<option value="champRadio">Boutons radio</label></select>');
$('#creerM').append(champ.join(''));
$('#choixTypeCham').change(function(){
	if($(this).val='champText'){
		alert("champ crée youpi");
	}
});
}
function analyse(){
$('#menu-principal').append('<button id="but5">Analyse des données</button>');
$('#but5').button(
{
	icons: {primary:"ui-icon-calculator", secondary: "ui-icon-triangle-1-s"}
});
}
function norme(){
$('#menu-principal').append('<button id="but4">Gestion des normes</button>');
$('#but4').button(
{
	icons: {primary:"ui-icon-document", secondary: "ui-icon-triangle-1-s"}
});
}
function admin(){
$('#menu-principal').append('<button id="but6">Administration des profils</button>');
$('#but6').button(
{
	icons: {primary:"ui-icon-pencil", secondary: "ui-icon-triangle-1-s"}
});
}

//};