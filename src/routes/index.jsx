import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Layouts & Common Components
import MainLayout from '../layouts/MainLayout';
import LoadingScreen from '../components/common/LoadingScreen';
import ProtectedRoute from './ProtectedRoute';
import NotFoundPage from '../pages/NotFoundPage';

// Lazy loading pages for optimal performance (Code Splitting)
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ServiceDetailsPage = lazy(() => import('../pages/ServiceDetailsPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage')); // Example Protected Route

// Dummy auth state for future expansion
const isAuthenticated = false;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <NotFoundPage />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: 'services/:slug',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ServiceDetailsPage />
          </Suspense>
        ),
      },
      {
        path: 'gallery',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      }
    ],
  },
  // Example of a protected routing block for future expansion (e.g. Admin Panel)
  {
    path: '/admin',
    element: <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/" />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <DashboardPage />
          </Suspense>
        ),
      }
    ]
  }
]);
