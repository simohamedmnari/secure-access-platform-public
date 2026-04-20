# Secure Access Platform — Version Publique

Cette version publique présente l’architecture générale, le concept et une partie du code frontend de la **Secure Access Platform**, un système moderne d’authentification et de gestion d’accès conçu pour des environnements professionnels.

## Objectif de cette version publique

Offrir un aperçu du projet, de son design et de sa structure, **tout en protégeant la logique métier, la sécurité et les éléments sensibles**.

Cette version est volontairement limitée afin d’éviter l’exposition du backend complet, des mécanismes d’authentification, des rôles, des permissions et de l’architecture sécurisée.

---

## Démo en ligne (Frontend)

La version déployée du frontend est accessible ici :

https://secure-access-platform.vercel.app/

> **Note :** La connexion ne fonctionne pas dans cette version publique car le backend complet n’est pas inclus.  
> Le backend est disponible **uniquement sur demande professionnelle**.

---

## Fonctionnalités visibles dans cette version publique

- Interface moderne et responsive  
- Page de connexion professionnelle  
- Gestion des erreurs frontend  
- Structure React/Vite propre et scalable  
- Aperçu du design et de l’expérience utilisateur  

---

## Pourquoi la version publique est limitée

Cette version publique ne contient **volontairement** que l’interface et la structure frontend.

Pour des raisons de sécurité, de confidentialité et de protection de la propriété intellectuelle, la version complète n’expose pas :

- la logique d’authentification (JWT access/refresh)  
- les intercepteurs Axios (gestion automatique des 401, refresh, retry)  
- la mitigation des race conditions  
- la gestion des rôles (user / premium / admin)  
- les permissions DRF personnalisées  
- la logique métier backend  
- la structure complète de l’API  
- les schémas de sécurité et de validation  
- la configuration serveur et base de données  
- les logs et la traçabilité des accès  
- les protections contre les attaques courantes (CSRF, brute force, token replay, etc.)

Ces éléments sont réservés à la **version complète**, fournie uniquement dans un cadre professionnel ou sur demande motivée.

---

## Contenu de la version complète (non publié)

La version complète inclut :

- Backend Django REST Framework sécurisé  
- Authentification JWT (access + refresh)  
- Intercepteurs Axios avec gestion automatique des tokens  
- Protection contre les race conditions  
- Permissions avancées (DRF)  
- Rôles et contrôle d’accès (RBAC)  
- Architecture frontend/backend cohérente et sécurisée  
- API REST complète  
- Base de données structurée  
- Logs, audit et traçabilité  
- Séparation stricte des privilèges  
- Gestion des erreurs et des statuts HTTP  
- Workflow complet d’accès sécurisé pour environnements professionnels  

Disponible uniquement sur demande :  
https://www.linkedin.com/in/simohamedmnari/

---

## Captures d’écran

<img width="1114" height="644" alt="image" src="https://github.com/user-attachments/assets/21944aed-8c19-4f30-b2c9-397fdce70c29" />

---

## Installation locale (version publique)

Cette version publique contient uniquement le frontend minimal.

### 1. Installer les dépendances
npm install

2. Lancer le serveur de développement
npm run dev

3. Ouvrir dans le navigateur
http://localhost:5173

Le bouton de connexion est désactivé dans cette version publique.

Architecture (version publique)

secure-access-platform-public/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── LICENSE
└── README.md

Cette version publique expose uniquement :

l’UI de connexion
la structure React minimale
aucun appel API
aucune logique d’authentification
aucun secret

Accès au code complet
Le code source complet (backend Django, logique d’authentification, tokens, sécurité, architecture, API, base de données) est disponible uniquement sur demande.

Contact :
https://www.linkedin.com/in/simohamedmnari/


