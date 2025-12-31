# CRM Reco Frontend

Frontend React moderne pour la plateforme CRM avec système de recommandations produits.

## 🛠️ Stack Technique

- **React 18** avec TypeScript
- **Vite** pour le build ultra-rapide
- **React Router** pour la navigation
- **TailwindCSS** pour le style
- **Axios** pour les appels API
- **Lucide React** pour les icônes

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Configurer l'URL de l'API
echo "VITE_API_URL=https://reco-crm.aubach.fr" > .env

# Lancer en développement
npm run dev

# Build pour production
npm run build
```

## 💻 Développement

Le serveur de développement démarre sur `http://localhost:3000`

### Identifiants de test

- **Email**: admin@example.com
- **Password**: admin123

## 📦 Déploiement

```bash
# Build
npm run build

# Le dossier dist/ contient les fichiers statiques prêts à déployer
```

### Déploiement sur serveur

```bash
# Sur le serveur
cd /var/www
sudo git clone https://github.com/Slyven-test/crm-reco-frontend.git
cd crm-reco-frontend

# Configuration
echo "VITE_API_URL=https://reco-crm.aubach.fr" | sudo tee .env

# Installation et build
sudo npm install
sudo npm run build

# Déploiement
sudo rm -rf /var/www/reco-crm/*
sudo cp -r dist/* /var/www/reco-crm/
sudo chown -R www-data:www-data /var/www/reco-crm
```

## 📁 Structure

```
src/
├── components/      # Composants réutilisables
│   ├── Layout.tsx
│   └── ProtectedRoute.tsx
├── contexts/       # Contextes React
│   └── AuthContext.tsx
├── pages/          # Pages de l'application
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   ├── CustomersPage.tsx
│   ├── ProductsPage.tsx
│   ├── RecommendationsPage.tsx
│   └── CampaignsPage.tsx
├── services/       # Services API
│   ├── api.ts
│   └── auth.ts
├── App.tsx         # Composant racine
└── main.tsx        # Point d'entrée
```

## ✨ Fonctionnalités

- ✅ Authentification JWT
- ✅ Navigation protégée
- ✅ Design responsive
- ✅ Interface moderne avec TailwindCSS
- 🚧 Gestion des clients (en cours)
- 🚧 Gestion des produits (en cours)
- 🚧 Moteur de recommandations (en cours)
- 🚧 Campagnes email (en cours)

## 🔗 API Backend

Le frontend communique avec l'API backend sur `https://reco-crm.aubach.fr`

Endpoints disponibles :
- `POST /auth/login` - Connexion
- `GET /auth/me` - Profil utilisateur
- `/customers/*` - Gestion clients
- `/products/*` - Gestion produits
- `/recommendations/*` - Recommandations
- `/campaigns/*` - Campagnes

## 📝 Licence

Propriétaire - Tous droits réservés
