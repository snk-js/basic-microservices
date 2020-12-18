import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';

import cors from 'cors';
import express from 'express';
// @ts-ignore
import accessEnv from '#root/helpers/accessEnv';

const PORT = accessEnv("PORT", 7000);