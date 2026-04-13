# 🚀 API Backend avec NestJS

## 📌 Description

Ce projet est une API backend développée avec **NestJS** dans le but d'apprendre et maîtriser la création d'API modernes, sécurisées et scalables.

Il couvre plusieurs concepts essentiels du développement backend tels que :

* Architecture modulaire avec NestJS
* Gestion des utilisateurs
* Authentification sécurisée (JWT)
* Hash des mots de passe avec bcrypt
* Validation des données avec class-validator
* Interaction avec une base de données MySQL via TypeORM

---

## 🎯 Objectif du projet

Ce projet a été réalisé dans un cadre d’apprentissage afin de :

* Comprendre le fonctionnement de NestJS
* Construire une API REST complète
* Implémenter une authentification sécurisée
* Manipuler une base de données relationnelle
* Appliquer les bonnes pratiques backend

---

## ⚙️ Technologies utilisées

* NestJS
* TypeScript
* MySQL
* TypeORM
* JWT (Json Web Token)
* Bcrypt
* Class-validator

---

## 📂 Fonctionnalités

* 👤 Gestion des utilisateurs (CRUD)
* 🔐 Authentification (login sécurisé)
* 📅 Gestion des réservations (booking)
* 💰 Gestion des transactions
* ✅ Validation des données
* 🔒 Sécurisation des mots de passe

---

## 🛠️ Installation

```bash
npm install
```

---

## ▶️ Lancer le projet

```bash
# développement
npm run start:dev

# production
npm run start:prod
```

---

## 🔑 Variables d’environnement

Créer un fichier `.env` à la racine :

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=nestuser
DB_PASSWORD=1234
DB_NAME=crud

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=3600s
```

---

## 📌 Auteur

**Mor Mbathie**
Développeur Backend / DevOps en apprentissage

---

## 📈 Améliorations futures

* Ajout de refresh token
* Mise en place de rôles (RBAC)
* Dockerisation de l’application
* Déploiement sur AWS

---

## 📄 Licence

Ce projet est open-source et disponible pour apprentissage.
