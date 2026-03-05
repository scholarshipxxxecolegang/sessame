# Configuration de l'envoi d'emails SESSAME (SendGrid)

## Systeme configure

Le formulaire de retours est configure pour envoyer les messages via une Netlify Function et **SendGrid**.

## Etapes de configuration sur Netlify

### 1. Creer la configuration SendGrid

1. Cree un compte sur https://sendgrid.com si besoin.
2. Dans SendGrid, cree une **API Key** avec permission `Mail Send`.
3. Verifie une adresse expediteur (Sender Identity), par exemple `tonemailverifie@tondomaine.com`.

### 2. Configurer les variables d'environnement dans Netlify

1. Va sur ton site dans [Netlify Dashboard](https://app.netlify.com).
2. Ouvre **Site settings** -> **Build & deploy** -> **Environment**.
3. Ajoute les variables:
   - `SENDGRID_API_KEY` -> ta cle API SendGrid
   - `SENDGRID_FROM_EMAIL` -> email expediteur verifie dans SendGrid
   - `SENDGRID_TO_EMAIL` -> email de reception (ex: `appexdev4@gmail.com`)

### 3. Deployer sur Netlify

```bash
git add .
git commit -m "feat: use SendGrid for Netlify email function"
git push
```

Netlify redeploie automatiquement et prend en compte les variables.

## Test du formulaire

1. Ouvre le site deploye.
2. Soumets un message via le formulaire.
3. Verifie la reception sur `SENDGRID_TO_EMAIL`.

## Depannage

- Erreur `SENDGRID_API_KEY is not configured`: verifie la variable dans Netlify.
- Erreur `SENDGRID_FROM_EMAIL is not configured`: ajoute un expediteur dans Netlify.
- Erreur 401/403 SendGrid: API key invalide ou permissions insuffisantes.
- Erreur "from address does not match a verified Sender Identity": adresse non verifiee dans SendGrid.

## Fichiers concernes

- `netlify/functions/send-comment.js`
- `.env.example`
- `SETUP_EMAIL.md`
