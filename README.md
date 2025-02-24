# Agrifranck-Ecommerce
# Démarrage de l'Application Web

Ce projet est une application e-commerce construite avec **Node.js** pour le backend et **React** pour le frontend.

## Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants :
- [Node.js](https://nodejs.org/) (v16+ recommandé)
- [npm](https://www.npmjs.com/) (fourni avec Node.js)

---

## Installation et Démarrage

### 1. Backend (Node.js)

1. Accédez au dossier `api` :
   ```sh
   cd api
   ```
2. Installez les dépendances :
   ```sh
   npm install
   ```
3. Créez un fichier `.env` en vous basant sur `.env.example` :
   ```sh
   cp .env.example .env
   ```
4. Démarrez le serveur :
   ```sh
   npm run server
   ```

Le backend devrait maintenant être accessible à l'adresse `http://localhost:5000` (ou autre port défini dans votre configuration).

---

### 2. Frontend (React)

1. Accédez au dossier `agrifranck` :
   ```sh
   cd agrifranck
   ```
2. Installez les dépendances :
   ```sh
   npm install
   ```
3. Créez un fichier `.env` en vous basant sur `.env.example` :
   ```sh
   cp .env.example .env
   ```
4. Lancez l'application :
   ```sh
   npm start
   ```

L'application frontend devrait maintenant être accessible à `http://localhost:3000` (ou autre port configuré).

---

## Informations Supplémentaires
- Assurez-vous que votre fichier `.env` est bien configuré dans les dossiers `api` et `agrifranck`.
- En cas d'erreur, vérifiez les messages affichés et assurez-vous que toutes les dépendances sont bien installées.

Bonne utilisation ! 🚀

