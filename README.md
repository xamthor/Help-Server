# Help Server API

**Setup**

`npm install`

`cp .env.example .env`

Generate Keys

`ssh-keygen -t rsa -b 2048 -m PEM -f jwtRS256.key`

Don't add passphrase

`openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub`

`cat jwtRS256.key | base64`

`cat jwtRS256.key.pub | base64`

**start the server and watch for changes**

Dev

`npm run dev `

Pro

`npm run build `

`npm run start `