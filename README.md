# Frontend - Outil de Gestion pour Petites Entreprises  (en cours)

## **Présentation**  
Ce frontend, développé avec **React** et le design system **ShadCN/UI**, offre une interface moderne et intuitive pour gérer efficacement les fonctionnalités principales de l'application :  
- **Gestion des clients** : Consultation, ajout, modification et suppression de fiches clients.  
- **Prise de rendez-vous** : Planification via un calendrier interactif (en cours de développement).  
- **Rapports et visualisations** : Accès simplifié aux rapports d’activité (en cours).  

---

## **Technologies Utilisées**  
- **React** : Librairie JavaScript pour construire des interfaces utilisateur réactives.  
- **ShadCN/UI** : Composants et styles pour créer une interface esthétique et uniforme.  
- **Vite** : Outil de développement rapide pour React.  
- **Axios** : Gestion des requêtes API vers le backend FastAPI.  

---

## **Structure du Projet** 
Le projet suit une structure modulaire pour une meilleure maintenabilité :  
- **components/** : Composants réutilisables (boutons, formulaires, modales, etc.).  
- **pages/** : Pages principales de l’application (tableau de bord, gestion des clients, etc.).  
- **services/** : Gestion des appels API (e.g., `clientsService.js`, `rendezvousService.js`).  
- **utils/** : Fonctions utilitaires partagées (e.g., formatage de dates).  

---

## **Fonctionnalités Actuelles**  
### **Gestion des Clients**  
- Affichage de la liste des clients avec options de recherche et tri.  
- Formulaire interactif pour ajouter ou modifier un client.  
- Suppression de clients avec confirmation.  

### **Prise de Rendez-vous** (en cours)  
- Interface utilisateur pour visualiser et planifier des rendez-vous.  

### **Rapports et Données** (en cours)  
- Tableau de bord simple pour consulter des indicateurs clés.  

---

## **Prochaines Améliorations**  
- Ajout d’une authentification utilisateur et d’un système de permissions.  
- Intégration de notifications (par email ou in-app).  
- Tests end-to-end avec **Playwright** ou **Cypress**.  
- Optimisation des performances et support mobile (responsive).  

---

## **Développement Actuel**  
Le frontend est en phase active de développement et sera régulièrement mis à jour pour ajouter des fonctionnalités et améliorer l’expérience utilisateur.  

