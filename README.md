# Petit Détail Boutique

Prompt — Site e-commerce petitdétail.

Crée un site e-commerce complet pour "petitdétail.", une marque d'accessoires (bracelets, colliers, bagues), basée à Cotonou, Bénin.

Stack imposée

Next.js (App Router, TypeScript)

Tailwind CSS pour le style

Déploiement prévu sur Netlify

Pas de base de données pour l'instant — toutes les données (produits, catégories, commandes) sont des données mockup, stockées dans des fichiers JSON/TypeScript côté code

Pas de module de paiement pour l'instant — commande enregistrée localement, paiement géré hors ligne (à la livraison ou par contact direct)

Important : structure les données mockup exactement comme si elles venaient d'une vraie base de données (mêmes champs, mêmes types), pour pouvoir brancher Supabase plus tard sans tout réécrire.

Identité visuelle

Fond blanc dominant sur tout le site

Navbar en noir (fond noir, texte/logo blanc), fixe en haut

Hero en noir (fond noir, texte blanc), avec le texte "Le petit détail qui compte pour votre look", + animation discrète d'icônes de bijoux (collier, chaîne, bague) en ligne fine qui apparaissent et disparaissent en fondu

Reste du site (catalogue, fiches produit, à propos, footer) : fond blanc, texte noir

Typographie : une police serif élégante pour les titres (type Cormorant Garamond ou Playfair Display), une police sans-serif fine pour le texte courant

Logo : "petitdétail." en minuscules avec baseline "qualité – originalité – charme"

Pages / fonctionnalités côté client

Accueil : hero + catégories (colliers, bracelets, bagues) + produits mis en avant

Catalogue : liste des produits (données mockup) avec filtres par catégorie, tri par prix

Fiche produit : photos (placeholders si pas d'images réelles), nom, description, prix en FCFA, sélection de quantité, bouton ajouter au panier

Panier : liste des articles, quantités modifiables, total, bouton commander (état géré côté client, ex. Context/Zustand)

Checkout : formulaire livraison (nom, téléphone, adresse à Cotonou/Bénin), validation de la commande sans paiement en ligne — la commande s'ajoute à la liste mockup des commandes, statut "en attente"

Optimisation mobile — priorité absolue

Catalogue en grille 2 colonnes sur mobile, 3-4 sur desktop

Navbar mobile avec menu burger, panier accessible en un tap

Images responsives via next/image

Boutons et zones tactiles assez grands (min 44px)

Lazy loading des images hors écran

Back-office admin

Espace /admin (authentification simple en dur pour l'instant, un mot de passe admin) :

Produits : créer, modifier, supprimer, assigner une catégorie — modifications appliquées à l'état mockup en mémoire (ou localStorage pour persister entre rechargements)

Catégories : créer/modifier les catégories

Commandes : liste des commandes mockup reçues, changer leur statut

Tableau de bord simple : nombre de commandes, produits les plus ajoutés au panier

Préciser clairement dans le code (commentaires) que ces actions admin ne persistent pas dans une vraie base — c'est prévu pour être branché sur Supabase plus tard.

Structure des données mockup — à respecter pour la migration future

products: id, nom, description, prix, category_id, images[], stock, actif

categories: id, nom, slug

orders: id, client_nom, client_téléphone, adresse, statut, total, créé_le

order_items: id, order_id, product_id, quantité, prix_unitaire

Contraintes techniques

Code propre, componentisé, réutilisable

Bien séparer la couche données (mock) du reste, pour pouvoir remplacer facilement par des appels Supabase plus tard

Prix affichés en FCFA, format "15 000 FCFA"

Tout le contenu en français

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ec7d3191-a3bc-4615-a65e-89791422eaac).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
