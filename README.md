# Secure Access Platform — Version Publique  
### Aperçu professionnel d’un système d’authentification moderne (version limitée)

Cette **version publique** présente l’architecture générale, le concept et une partie du code frontend de la **Secure Access Platform**, 
un système moderne d’authentification et de gestion d’accès conçu pour des environnements professionnels.

Elle permet de visualiser :

- le design  
- la structure frontend  
- l’expérience utilisateur  
- l’architecture React/Vite  
- la logique de navigation  

**La version complète (backend + sécurité + RBAC + tokens) n’est pas incluse.**

---

# Objectif de cette version publique

L’objectif est d’offrir un **aperçu professionnel** du projet tout en protégeant :

- la logique métier  
- les mécanismes de sécurité  
- les tokens cryptographiques  
- les intercepteurs Axios  
- les permissions et rôles  
- l’architecture backend complète  

Cette version est **volontairement limitée** pour éviter toute exposition de la partie sensible du système.

---

# Démo en ligne (Frontend uniquement)

https://secure-access-platform.vercel.app/

**Important :**  
La connexion ne fonctionne pas dans cette version publique car **le backend sécurisé n’est pas inclus**.  
Le backend complet est disponible **uniquement sur demande professionnelle**.

---

# À quoi correspond réellement cette application ?

La **Secure Access Platform** utilise la même architecture d’authentification que les grandes plateformes modernes telles que :

- **Google**
- **Slack**
- **Stripe**
- **GitHub**
- **Notion**
- **Intercom**
- **Airtable**
- **Supabase Auth**
- **Auth0**

Ces entreprises utilisent toutes un système basé sur :

- **Access Token court**
- **Refresh Token long**
- **Rotation automatique**
- **Blacklist des anciens tokens**
- **Cookies HttpOnly**
- **RBAC (Role‑Based Access Control)**

**La Secure Access Platform implémente exactement ce modèle professionnel.**

---

# Pourquoi ce système est-il sécurisé ?

Le système repose sur **deux niveaux de tokens**, chacun ayant un rôle précis :

---

## 1. Access Token — durée très courte  
- Durée de vie : quelques secondes / minutes  
- Utilisé pour chaque requête API  
- Si un hacker le vole → il expire très vite  
- Impossible de prolonger la session avec lui  

**C’est un badge temporaire.**

---

## 2. Refresh Token — durée longue, mais protégé  
- Stocké en **cookie HttpOnly** (invisible en JavaScript)  
- Durée de vie : jours / semaines  
- Permet d’obtenir un nouveau access token  
- Jamais exposé au frontend  
- Protégé contre XSS  
- Utilisé uniquement par le backend  

**C’est la clé maîtresse, mais elle reste dans un coffre.**

---

# Cycle de sécurité automatique

À chaque expiration :

1. L’access token expire  
2. Le système détecte l’erreur 401  
3. Il génère automatiquement un **nouveau access token**  
4. Il génère un **nouveau refresh token crypté**  
5. Il **blackliste l’ancien refresh token**  
6. L’utilisateur reste connecté sans interruption  

**Même en cas d’attaque, l’ancien token est inutilisable.**

---

# Pourquoi ce système est idéal pour les entreprises ?

Parce qu’il offre :

### ✔ Sécurité niveau entreprise  
- Cookies HttpOnly  
- Rotation des tokens  
- Blacklist automatique  
- Protection XSS  
- Protection CSRF  
- Protection contre le token replay  

### ✔ Intégration simple  
Ce module peut être intégré dans n’importe quelle application :

- SaaS  
- Dashboard interne  
- CRM  
- ERP  
- Application mobile  
- Plateforme d’entreprise  
- API REST existante  
- **Systèmes hospitaliers (DPI, Dossier Patient Informatisé)**  
- **Applications médicales (accès médecins / infirmiers)**  
- **Plateformes RH / paie / planning**  
- **Systèmes d’assurance / mutuelle**  
- **Plateformes immobilières / foncières**  
- **Applications bancaires internes**  
- **Outils de gestion de cabinet médical**  
- **Systèmes d’accès pour collectivités / mairies**  
- **Logiciels de gestion scolaire / universitaire**  
- **Plateformes de réservation / logistique / transport**  
- **Solutions de cybersécurité / audit interne**  

**C’est un module universel, compatible avec tous les secteurs.**

---

# Intégration dans les hôpitaux (exemples concrets)

La Secure Access Platform peut sécuriser :

- l’accès des médecins aux dossiers patients  
- les comptes infirmiers / internes / secrétaires  
- les accès administratifs (RH, planning, paie)  
- les accès aux logiciels internes (radiologie, laboratoire)  
- les accès aux API internes (HL7, FHIR)  
- les accès aux portails patients  

Pourquoi c’est adapté aux hôpitaux ?

- **sécurité renforcée** (obligatoire dans le médical)  
- **sessions courtes** → limite les risques  
- **refresh sécurisé** → pas de déconnexion intempestive  
- **RBAC** → médecin ≠ infirmier ≠ admin  
- **audit / traçabilité** → essentiel pour conformité  
- **protection contre attaques XSS / CSRF**  

**C’est exactement le type de système utilisé dans les hôpitaux modernes.**

---

# Nos offres

### Offre 1 — Code source complet (version professionnelle)
**Prix fixe : 2 500 €**

Vous recevez la technologie prête à l’emploi :
- architecture complète  
- authentification JWT (access + refresh)  
- cookies HttpOnly  
- rotation + blacklist  
- RBAC  
- API sécurisée  
- documentation technique  

Le code source est un **produit standardisé**, livré tel quel.

---

### Offre 2 — Intégration dans votre application
**Prix fixe : 7 500 €**

Service d’intégration sur mesure :
- adaptation à votre architecture  
- intégration backend/frontend  
- migration utilisateurs  
- configuration des rôles  
- sécurisation API  
- audit de sécurité  
- tests + validation  
- documentation interne  

L’intégration est un **service personnalisé**, adapté à votre environnement.

---

### Pourquoi deux prix distincts ?
Parce que :

- **le code source est un produit**  
- **l’intégration est un service sur mesure**  
- chaque entreprise possède une architecture différente  
- les besoins varient selon le secteur (SaaS, hôpital, banque, assurance, immobilier, etc.)

Ces deux prestations sont donc proposées à des **prix fixes et transparents**.

---

# Contenu de la version complète (non publié)

La version complète inclut :

### Backend sécurisé (Django REST Framework)
- Authentification JWT (access + refresh)  
- Refresh token en cookie HttpOnly  
- Rotation + blacklist  
- Permissions avancées (DRF)  
- Rôles et contrôle d’accès (RBAC)  
- API REST complète  
- Logs, audit, traçabilité  
- Séparation stricte des privilèges  

### Frontend avancé (React)
- Intercepteurs Axios intelligents  
- Gestion automatique des tokens  
- Relance automatique des requêtes  
- Protection contre les race conditions  
- Routes protégées (Private, Premium, Admin)  
- Dashboard complet  

Disponible uniquement sur demande :  
https://www.linkedin.com/in/simohamedmnari/

---

# Installation locale (version publique)

Cette version publique contient uniquement le **frontend minimal**.

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

### 3. Ouvrir dans le navigateur
http://localhost:5173

Le bouton de connexion est désactivé dans cette version publique.

---

# Accès au code complet

Le code source complet (backend Django, logique d’authentification, tokens, sécurité, architecture, API, base de données) est disponible **uniquement sur demande professionnelle**.

Contact :  
https://www.linkedin.com/in/simohamedmnari/
