import { ErrorBoundary } from 'react-error-boundary';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from 'react-router-dom';
import Comments from '../components/Comments';
import AppBar from '../components/navs/AppBar';
import { NotFound } from '../components/NotFound';
import Story from '../components/Story';
import ErrorFallback from '../Errors/ErrorFallback';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppBar />}>
      <Route path="/" element={<Navigate to="/stories/top" />} />
      <Route
        path="/stories/:category"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Story />
          </ErrorBoundary>
        }
      />

      <Route
        path="comment"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Comments />
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
