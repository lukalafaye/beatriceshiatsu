# beatriceshiatsu.fr

Site vitrine de **Shiatsu Être et Sens** — Béatrice Morel, praticienne shiatsu et énergéticienne à Confrançon (01310), dans l'Ain.

HTML/CSS/JS statique, sans étape de build. Servi par GitHub Pages sur le domaine `beatriceshiatsu.fr`.

## Structure

```
index.html              gabarit de la page unique — ne contient pas de texte, seulement des variables
_data/content.yml       TOUT le texte du site (édité via Pages CMS ou à la main)
.pages.yml              configuration de l'interface d'édition Pages CMS
_config.yml             configuration Jekyll (GitHub Pages assemble le gabarit + le contenu)
mentions-legales.html   obligatoire (LCEN) — contient des champs à compléter
404.html
assets/css/style.css
assets/js/main.js       menu mobile, header au scroll, lien actif
assets/img/             hero.jpg, logo.png, favicon.png, apple-touch-icon.png
assets/fonts/           Montserrat + Allura auto-hébergées (woff2, licence OFL)
CNAME robots.txt sitemap.xml
```

## Déroulement de la page

Une seule page, six sections dans cet ordre :

| Section | Ancre | Contenu |
|---|---|---|
| À propos | `#a-propos` | le parcours de Béatrice + sa photo |
| Activité | `#activite` | définition du shiatsu + le logo en illustration |
| Prestations | `#prestations` | les séances (cartes, durées, tarifs) |
| Événements | `#evenements` | ateliers, salons |
| Partage | `#partage` | « info du moment », librement éditable |
| Contact | `#contact` | téléphone, commune, déplacement |

## Modifier le texte du site

Le texte ne vit plus dans le HTML. Deux façons de le changer :

1. **Interface d'édition** — [pagescms.org](https://pagescms.org), se connecter avec GitHub,
   ouvrir ce dépôt : chaque section du site devient un formulaire. Enregistrer crée un commit,
   le site se reconstruit tout seul en une à deux minutes.
2. **À la main** — éditer `_data/content.yml`.

Dans les textes, `[tel]` est remplacé automatiquement par le numéro cliquable.
`&nbsp;` sert à coller l'espace insécable avant un `?` (typographie française).

## Développement

GitHub Pages assemble le site avec Jekyll. Pour prévisualiser un changement localement :

```sh
gem install jekyll     # une seule fois
jekyll serve           # http://localhost:4000
```

Sans Jekyll, ouvrir `index.html` directement n'affiche que le gabarit (les variables
`{{ … }}` ne sont pas remplacées).

## Déploiement

Push sur `main`. Dans **Settings → Pages**, choisir *Deploy from a branch* → `main` / `/ (root)`.
Le `CNAME` pointe déjà sur `beatriceshiatsu.fr` ; côté registrar il faut les enregistrements DNS
`A` de GitHub Pages (185.199.108–111.153) et un `CNAME` sur `www` vers `lukalafaye.github.io`.

## Personnalisation

Toutes les couleurs sont des variables CSS en haut de `style.css` (palette reprise du flyer papier) :

| Variable | Valeur | Usage |
|---|---|---|
| `--plum` | `#7b3f7d` | titres, liens, boutons |
| `--mauve` | `#c9a3c4` | bandeaux, filets |
| `--blush` / `--blush-deep` | `#f6ebf3` / `#e8cfe0` | fonds de sections |
| `--ink` | `#3b2d3a` | texte, pied de page |
| `--chakra-*` | 7 couleurs | pastilles des prestations |

## À faire / à valider

- [ ] **Favicon et image de partage** : `favicon.png`, `apple-touch-icon.png` et `og-image.jpg`
  portent encore l'ancien logo aux sept chakras, alors que l'en-tête affiche l'arbre.
  À régénérer depuis `logo-arbre.png` pour être cohérent.
- [ ] **Séance de magnétisme** : le sous-titre et la description ont été rédigés faute
  d'information, la durée et le tarif sont vides. À relire et compléter (`_data/content.yml`,
  section `prestations`, ou via Pages CMS).
- [ ] **Portrait** : champ `apropos.portrait` vide → un visuel de remplacement s'affiche.
  Déposer la photo depuis Pages CMS pour qu'elle apparaisse.
- [ ] **Photo d'accueil** : `assets/img/hero.jpg` fait 740×416 px — trop petit pour du plein écran, l'image est visiblement adoucie sur un grand écran. Remplacer par la même photo en ≥ 1920 px de large (même nom de fichier, rien d'autre à changer).
- [ ] **Licence des visuels** : la photo et l'illustration des sept chakras viennent de sites tiers. Vérifier la licence d'usage commercial, ou les remplacer.
- [ ] **Logos** : `logo-arbre.png` (en-tête) et `logo.png` (l'ancien, illustrant la section
  Activité) sont tous deux raster. Des versions vectorielles (SVG) seraient plus nettes et
  plus légères.
- [ ] **Portrait** : `.about__portrait` est un dégradé de remplacement. Fournir une photo de Béatrice ou du cabinet.
- [ ] **Texte « À propos »** : fourni par Béatrice, repris tel quel à quelques corrections
  de typographie près. Aucun diplôme ni certification n'y est mentionné — à ajouter si elle le souhaite.
- [ ] **Mentions légales** : il reste l'adresse e-mail et le médiateur de la consommation
  (nom, adresse, site). L'identité, l'adresse professionnelle et le SIRET (499 714 335 00027)
  proviennent du registre officiel des entreprises.
- [ ] **Événements** : la section contient un atelier d'exemple sans date. Mettre à jour ou retirer.
- [ ] **E-mail** : aucun n'était fourni ; le site ne propose que le téléphone, et les mentions légales portent un champ à compléter.

## Choix techniques

- **Pas de formulaire de contact** : GitHub Pages ne traite pas les requêtes POST. Un formulaire imposerait
  un service tiers et une politique de confidentialité. Les rendez-vous se prennent par téléphone.
- **Polices auto-hébergées** plutôt que le CDN Google Fonts : appeler `fonts.googleapis.com` transmet
  l'adresse IP des visiteurs à Google, ce qui a été jugé contraire au RGPD (Landgericht München, 2022).
  `montserrat-latin.woff2` est un sous-ensemble de la police variable officielle. Pour le
  régénérer (si de nouveaux caractères apparaissent dans le texte) :

  ```sh
  pip3 install fonttools brotli
  curl -sLO "https://github.com/google/fonts/raw/main/ofl/montserrat/Montserrat%5Bwght%5D.ttf"
  python3 -m fontTools.subset "Montserrat[wght].ttf" \
    --unicodes="U+0020-007F,U+00A0-00FF,U+2018-201D,U+2013,U+2014,U+2026,U+00AB,U+00BB,U+20AC,U+0152-0153" \
    --flavor=woff2 --layout-features='kern,liga,clig,calt,ccmp,locl,mark,mkmk' \
    --output-file=assets/fonts/montserrat-latin.woff2
  ```

  Vérifier ensuite la couverture — un sous-ensemble amputé fait basculer le texte
  dans la police système sans prévenir, lettre par lettre.
- **Aucun cookie, aucun traceur** : pas de bandeau de consentement nécessaire.
- **Données structurées** `HealthAndBeautyBusiness` (JSON-LD) pour le référencement local autour de Confrançon et Bourg-en-Bresse. Elles sont générées depuis `_data/content.yml`, donc elles ne peuvent pas se désynchroniser du texte affiché.
- **Contenu séparé du gabarit** : `_data/content.yml` d'un côté, `index.html` de l'autre. C'est ce qui rend l'édition possible sans toucher au HTML.
