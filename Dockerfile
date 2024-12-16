# Étape 1 : Build de l'application React avec Vite
FROM node:18 AS build

WORKDIR /app

# Copier package.json et package-lock.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste de l'application et faire le build
COPY . .

# Générer les fichiers statiques de l'application
RUN npm run build

# Étape 2 : Serve les fichiers statiques générés avec Nginx
FROM nginx:alpine

# Copier le fichier nginx.conf personnalisé
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers générés dans le dossier dist vers le répertoire Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer les ports 80 (HTTP) et 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Démarrer Nginx (par défaut Nginx écoute déjà sur le port 80 et 443)
CMD ["nginx", "-g", "daemon off;"]
