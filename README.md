Run step
make sure open Docker local

1. Migrate DB
   yarn db:dev:rm && yarn db:dev:up && sleep 1 && yarn prisma migrate deploy

2. install dependencies
   yarn install

3. Start BE
   yarn run start:dev

4. Open DB
   yarn prisma studio
