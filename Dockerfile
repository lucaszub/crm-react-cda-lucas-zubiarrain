# Étape 1 : Build de l'application React avec Vite
FROM node:18 AS build

WORKDIR /app

# Copier package.json et package-lock.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste de l'application et faire le build
COPY . .
RUN npm run build
         #t
# Étape 2 : Serve les fichiers statiques générés (généralement le dossier dist) avec un serveur simple
FROM nginx:alpine

# Copier les fichiers générés dans le dossier dist vers le répertoire Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80 pour le front-end
EXPOSE 80

# Démarrer Nginx (par défaut Nginx écoute déjà sur le port 80)
CMD ["nginx", "-g", "daemon off;"]
