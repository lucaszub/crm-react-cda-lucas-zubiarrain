# Étape 1 : Build de l'application React avec Vite
FROM node:18 AS build

WORKDIR /app

# Copier package.json et package-lock.json et installer les dépendances
COPY package*.json ./ 
RUN npm install

# Copier le reste de l'application et faire le build
COPY . .
RUN npm run build

# Étape 2 : Servir les fichiers statiques avec Nginx
FROM nginx:alpine

# Copier les fichiers générés dans le dossier dist vers le répertoire Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer uniquement le port 80 test
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
