# Svelte project - QualyCloud

Explication générale du projet Qualycloud sur le front en Svelte.

## Comment ajouter une feature à votre projet?

Voici une méthode complète:

1. Est-ce que c'est une page ou un composant?
2. Est-ce que je peux utiliser des éléments qui existent déjà?
3. Comment réaliser cette feature le plus rapidement et le plus efficacement?

### Methode globale de développement

1. Je découpe ma maquette en éléments: ex Page Contracts, Composant Formulaire
2. Je crée ma page d'entrée (design): ex Contracts
3. Je crée mon composant (design) correspondant dans le dossier composant: ex Composant Formulaire
4. J'intègre la partie fonctionnelle (mes calls à l'API etc...)
5. Je teste mon process d'intégration de données


### Approche globale de réception des données dans Svelte

1. J'ai une vue qui affiche des données
2. De base, cette vue est en mode loading
3. Mon fetch se lance dès l'affichage
4. Dès que mon fetch est terminé, mon loading passe à false et affiche ma page