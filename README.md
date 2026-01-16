# IPL Social

## Informations de l'étudiant
- **Nom, Prénom:** Lamrini Nawfal
- **Email Vinci:** nawfal.lamrini@student.vinci.be
- **URL GitHub:** https://github.com/nawfal-lamrini-vinci/ipl-social

## Description du projet

Ce projet implémente une fonction de validation d'adresses email en TypeScript dans le cadre du cours BIMV2190 - DevOps. Le projet suit les principes du Test Driven Development (TDD) et utilise GitHub Actions pour l'intégration continue.

### Fonctionnalité principale

La fonction `validateEmail(email: string): boolean` valide une adresse email selon les critères suivants :
- Doit contenir au moins un caractère `@`
- Doit contenir au moins un point `.` dans le nom de domaine (après le @)
- Le point ne peut pas être le dernier caractère
- Ne peut contenir aucun espace
- Doit avoir du texte avant et après le `@`

### Structure du projet

```
ipl-social/
├── src/
│   └── emailValidator.ts    # Fonction de validation
├── tests/
│   └── emailValidator.test.ts  # Tests unitaires
├── .github/
│   └── workflows/
│       └── ci.yml           # Pipeline CI/CD
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

```bash
# Cloner le repository
git clone https://github.com/nawfal-lamrini-vinci/ipl-social.git

# Installer les dépendances
cd ipl-social
npm install
```

## Exécution des tests

Pour lancer l'exécution des tests :

```bash
npm test
```

## Pipeline CI/CD

Le projet utilise GitHub Actions pour automatiser les tests. À chaque push ou pull request sur la branche `main`, le pipeline :
1. Configure l'environnement Node.js
2. Installe les dépendances
3. Exécute les tests unitaires
4. Vérifie la compilation TypeScript

## Technologies utilisées

- **TypeScript** : Langage de programmation
- **Jest** : Framework de tests
- **GitHub Actions** : CI/CD
- **Node.js** : Environnement d'exécution

## Approche TDD

Le développement a suivi l'approche Test Driven Development :
1. Écriture des tests en premier
2. Implémentation du code minimum pour passer les tests
3. Refactorisation et amélioration
4. Validation continue via CI/CD

## Auteur

Projet réalisé dans le cadre de l'examen de DevOps - Janvier 2026 - Lamrini Nawfal