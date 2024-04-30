/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TempRouteRouteImport } from './routes/tempRoute/route'
import { Route as LoginRouteImport } from './routes/login/route'
import { Route as AuthRouteImport } from './routes/_auth/route'
import { Route as UsersIndexImport } from './routes/users/index'
import { Route as ProductsIndexImport } from './routes/products/index'
import { Route as ProductsProductIdImport } from './routes/products/$productId'
import { Route as AuthProfileIndexImport } from './routes/_auth/profile/index'
import { Route as ProductsProductIdEditImport } from './routes/products_/$productId/edit'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TempRouteRouteRoute = TempRouteRouteImport.update({
  path: '/tempRoute',
  getParentRoute: () => rootRoute,
} as any)

const LoginRouteRoute = LoginRouteImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthRouteRoute = AuthRouteImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const UsersIndexRoute = UsersIndexImport.update({
  path: '/users/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsIndexRoute = ProductsIndexImport.update({
  path: '/products/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsProductIdRoute = ProductsProductIdImport.update({
  path: '/products/$productId',
  getParentRoute: () => rootRoute,
} as any)

const AuthProfileIndexRoute = AuthProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => AuthRouteRoute,
} as any)

const ProductsProductIdEditRoute = ProductsProductIdEditImport.update({
  path: '/products/$productId/edit',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRoute
    }
    '/tempRoute': {
      preLoaderRoute: typeof TempRouteRouteImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId': {
      preLoaderRoute: typeof ProductsProductIdImport
      parentRoute: typeof rootRoute
    }
    '/products/': {
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof rootRoute
    }
    '/users/': {
      preLoaderRoute: typeof UsersIndexImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId/edit': {
      preLoaderRoute: typeof ProductsProductIdEditImport
      parentRoute: typeof rootRoute
    }
    '/_auth/profile/': {
      preLoaderRoute: typeof AuthProfileIndexImport
      parentRoute: typeof AuthRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AuthRouteRoute.addChildren([AuthProfileIndexRoute]),
  LoginRouteRoute,
  TempRouteRouteRoute,
  ProductsProductIdRoute,
  ProductsIndexRoute,
  UsersIndexRoute,
  ProductsProductIdEditRoute,
])

/* prettier-ignore-end */
