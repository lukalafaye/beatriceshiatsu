# beatriceshiatsu.fr

Site vitrine de **Shiatsu Être et Sens** — Béatrice Morel, praticienne shiatsu et énergéticienne à Polliat (01310), dans l'Ain.

HTML/CSS/JS statique, sans étape de build. Servi par GitHub Pages sur le domaine `beatriceshiatsu.fr`.

## Structure

```
index.html              page unique (Accueil, À propos, Activité, Événements, Contact, Partage)
mentions-legales.html   obligatoire (LCEN) — contient des champs à compléter
404.html
assets/css/style.css
assets/js/main.js       menu mobile, header au scroll, lien actif
assets/img/             hero.jpg, logo.png, favicon.png, apple-touch-icon.png
assets/fonts/           Quicksand + Montserrat auto-hébergées (woff2, licence OFL)
CNAME .nojekyll robots.txt sitemap.xml
```

## Développement

Aucune dépendance. Ouvrir `index.html`, ou servir le dossier :

```sh
python3 -m http.server 8000
```

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

- [ ] **Photo d'accueil** : `assets/img/hero.jpg` fait 740×416 px — trop petit pour du plein écran, l'image est visiblement adoucie sur un grand écran. Remplacer par la même photo en ≥ 1920 px de large (même nom de fichier, rien d'autre à changer).
- [ ] **Licence des visuels** : la photo et l'illustration des sept chakras viennent de sites tiers. Vérifier la licence d'usage commercial, ou les remplacer.
- [ ] **Logo** : `logo.png` est un détourage automatique du JPEG scanné (fond blanc supprimé). Propre, mais raster. Une version vectorielle (SVG) serait plus nette et plus légère.
- [ ] **Portrait** : `.about__portrait` est un dégradé de remplacement. Fournir une photo de Béatrice ou du cabinet.
- [ ] **Texte « À propos »** : rédigé à partir du flyer, à relire et valider par Béatrice. Aucun diplôme ni certification n'y est mentionné — à ajouter par elle si elle le souhaite.
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
- **Aucun cookie, aucun traceur** : pas de bandeau de consentement nécessaire.
- **Données structurées** `HealthAndBeautyBusiness` (JSON-LD) pour le référencement local autour de Polliat et Bourg-en-Bresse.
