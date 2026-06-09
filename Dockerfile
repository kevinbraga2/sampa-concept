FROM node:20-alpine

WORKDIR /app

# Copia os arquivos de dependências primeiro (aproveita o cache do Docker)
COPY package*.json ./

# Instala as dependências normais
RUN npm install

# Copia o restante do código (incluindo a pasta prisma)
COPY . .

# Gera o cliente do Prisma baseado no seu schema.prisma
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]
