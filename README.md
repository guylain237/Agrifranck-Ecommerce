# Agrifranck-Ecommerce
# Démarrage de l'Application Web

Ce projet est une application e-commerce construite avec **Node.js** pour le backend et **React** pour le frontend.

## Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants :
- [Node.js](https://nodejs.org/) (v16+ recommandé)
- [npm](https://www.npmjs.com/) (fourni avec Node.js)
- [MongoDB](https://www.mongodb.com/) installé et en cours d'exécution (ou un compte MongoDB Atlas pour l'utilisation en ligne)

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
4. Configurez l'URL de la base de données MongoDB dans le fichier `.env` :
   ```ini
   MONGODB_URI=mongodb://localhost:27017/nom_de_votre_base
   ```
5. Démarrez le serveur :
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

## Configuration de MongoDB

MongoDB est utilisé comme base de données pour ce projet. Il existe deux façons de l'utiliser :

### 1. Utilisation en local

1. Installez MongoDB en suivant les instructions sur le [site officiel](https://www.mongodb.com/try/download/community).
2. Assurez-vous que le service MongoDB est en cours d'exécution :
   ```sh
   mongod --dbpath /chemin/vers/votre/dossier/de/donnees
   ```
3. Vérifiez que MongoDB fonctionne correctement en vous connectant au shell MongoDB :
   ```sh
   mongo
   ```
4. Dans le fichier `.env` du dossier `api`, assurez-vous que l'URL de connexion est bien définie :
   ```ini
   MONGODB_URI=mongodb://localhost:27017/nom_de_votre_base
   ```

### 2. Utilisation en ligne (MongoDB Atlas)

1. Créez un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Créez un cluster et ajoutez un utilisateur avec les permissions nécessaires.
3. Récupérez l'URI de connexion dans la section "Connect" et utilisez-la dans le fichier `.env` :
   ```ini
   MONGODB_URI=mongodb+srv://nom_utilisateur:mot_de_passe@cluster.mongodb.net/nom_de_votre_base?retryWrites=true&w=majority
   ```
4. Assurez-vous d'ajouter votre adresse IP dans les paramètres de sécurité de MongoDB Atlas pour autoriser l'accès.

---

## Informations Supplémentaires
- Assurez-vous que votre fichier `.env` est bien configuré dans les dossiers `api` et `agrifranck`.
- En cas d'erreur, vérifiez les messages affichés et assurez-vous que toutes les dépendances sont bien installées.

Bonne utilisation ! 🚀

