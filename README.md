# 💚 Good Price

**FR** — Good Price est un site web qui estime le **juste prix de vente** de vos commissions en ligne : commissions VRChat (textures, avatars, assets 3D, mondes, scripts Udon, shaders…) et prestations créatives classiques (logo, illustration, montage vidéo, dev web…).

**EN** — Good Price is a website that estimates the **fair selling price** of your online commissions: VRChat commissions (textures, avatars, 3D assets, worlds, Udon scripts, shaders…) and classic online creative services (logo, illustration, video editing, web dev…).

## ✨ Fonctionnalités / Features

- 🧮 **Calculateur de prix** : temps estimé × taux horaire, ajusté par l'expérience, la complexité, les options (rush, droits commerciaux, fichiers sources, exclusivité, NDA), les révisions et une marge de sécurité.
- 📊 **Comparaison au marché** : positionne votre prix dans la fourchette constatée pour chaque service.
- 🌍 **Bilingue** : français pour les navigateurs francophones, anglais pour les autres (bascule manuelle possible).
- 💶 **Devises** : EUR / USD.
- 🔒 **100 % local** : aucun serveur, aucune donnée envoyée — tout se calcule dans le navigateur.

## 🚀 Lancer le site / Run the site

Site statique, aucun build nécessaire. Ouvrez simplement `index.html`, ou servez le dossier :

```bash
npx serve .
```

## 🗂️ Structure

```
index.html          — page unique (hero, calculateur, tarifs, conseils)
assets/css/style.css — styles (thème sombre, accents menthe/cyan)
assets/js/i18n.js   — traductions FR/EN + détection de langue
assets/js/data.js   — base de tarifs de référence (17 services)
assets/js/app.js    — logique du calculateur et rendu
assets/img/logo.svg — logo
```

> ⚠️ Les fourchettes de prix sont indicatives et ne constituent pas un conseil juridique ou fiscal.
