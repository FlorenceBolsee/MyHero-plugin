# MyHero-plugin
Exercice de création d'un plugin pour gérer l'image de background d'un header

## Prérequis :
Gulp (pour utiliser le fichier variable scss)

## Installation :
- Téléchargez le .zip
- Liez le fichier *myHero.min.css* dans le head de votre html :
<link rel="stylesheet" href="css/myHero.min.css">
- Dans votre dossier src vous aurez besoin du fichier *_variables.scss* pour changer les couleurs et le chemin vers votre image de fond, et du fichier *myHero.scss* qui doit être au même niveau que *style.scss* pour être minifié dans dist et qui doit importer le fichier variable.

## Utilisation :

### Dans le fichier html
Vous pouvez ajouter les classes du plugin sur un div ou le header.  Voici les classes disponibles et leurs effets :

#### Effets de base
- heroplugin : configuration par défaut, l'image est centrée et rempli le bloc quoiqu'il arrive.
- hero--overlay : ajoute une couleur en transparence par-dessus l'image.
- hero--gradient : ajoute un dégradé en transparence par-dessus l'image.
- hero--fixed : l'image se fixe et ne réagit plus au scroll.

Ces effets peuvent tous être combinés avec la gestion de la position de l'image d'après son conteneur :

#### Gestion de la position

- hero--lefttop : en haut à gauche
- hero--centertop : en haut au centre
- hero--righttop : en haut à droite
- hero--leftcenter: centré verticalement et calé à gauche
- hero--centercenter : centré
- hero--rightcenter : centré verticalement et calé à droite
- hero--leftbottom : en bas à gauche
- hero--centerbottom : en bas au centre
- hero--rightbottom : en bas à droite

Pour l'effet dégradé, la direction du dégradé peut être modifiée en ajoutant ces classes :

#### Direction du dégradé

- gradient--totop : vers le haut 
- gradient--tobottom : vers le bas 
- gradient--toleft : vers la gauche 
- gradient--toright : vers la droite 

### Les variables

Dans *_variables.scss* vous pouvez changer :

- le chemin vers votre image par rapport à votre css dans dist ou une adresse absolue dans $heroBackground
- la couleur de l'effet overlay dans $heroOverlayColor
- Les deux couleurs du dégradé dans $heroGradientColor1 et $heroGradientColor2
