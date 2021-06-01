
// Añadir los imports
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema/schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import expressPlayground from 'graphql-playground-middleware-express';
import './services/database';
// Inicializamos la aplicación express

const app = express();

// Añadimos configuración de Cors y compression
app.use(cors());
app.use(compression());

// Inicializamos el servidor de Apollo
const server = new ApolloServer({
    schema: schema,
    introspection: true, // Necesario
});

server.applyMiddleware({ app });

app.use('/', expressPlayground({
    endpoint: '/graphql'
}
));

//Iniciamos el servidor
const PORT = 8000;

const httpServer = createServer(app);

httpServer.listen({ port: PORT }, (): void => console.log(`http://localhost:${PORT}/graphql`));
