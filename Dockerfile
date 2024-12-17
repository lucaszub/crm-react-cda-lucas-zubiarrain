# Étape 1 : Construction de l'application
FROM node:18 AS build

WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le code source et construire l'application
COPY . .
RUN npm run build

# Étape 2 : Serveur de production (Nginx)
FROM nginx:alpine

# Copier le build de l'étape précédente dans le répertoire où Nginx s'attend à trouver les fichiers
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80 pour l'accès HTTP
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
