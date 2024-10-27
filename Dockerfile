# Imagem base do Node
FROM node:20

# Diretório onde vai ficar o projeto dentro do container
WORKDIR /usr/src/app

# Copio o package.json e package-lock.json do projeto
COPY package*.json ./

# Instalo o conteúdo do JSON
RUN npm install

# Copio o código fonte do projeto
COPY . .

# Exponho a porta
EXPOSE 1337

# Comando que será executado quando o contêiner for iniciado
CMD ["npm", "run", "develop"]