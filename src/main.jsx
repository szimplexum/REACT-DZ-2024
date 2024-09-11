import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './09.05/lecture/App';
import Bevezetes from './08.07/App';
import JsxKomponensek from './08.08/lecture/App';
import Propok from './08.12/lecture/App';
import ListaelemekMegjelenitese from './08.14/lecture/App';
import DinamikusLista from './08.15/lecture/App';
import EventekTodo from './08.22/TodoApp';
import KontrollaltInputok from './08.24/App';
import FeltetelesMegjelenitesEffektek from './08.26/lecture/App';
import Refek from './08.28/lecture/App';
import Context from './08.29/lecture/App';
import ContextGyakorlas from './08.31/bookshop/BookShopApp';
import Formok from './09.02/lecture/App';
import Styling from './09.04/lecture/App';
import RouterLesson from './09.05/exercies/App';
import './index.css';
import ParamComponent from './09.05/lecture/ParamComponent';
import Home from './09.05/exercies/Home';
import About from './09.05/exercies/About';
import Todos from './09.05/exercies/Todos';
import TodoDetail from './09.05/exercies/TodoDetail';
import PostLayout from './09.07/exercises/solution/PostLayout';
import Posts from './09.07/exercises/solution/Posts';
import PostDetail from './09.07/exercises/solution/PostDetail';
import PostAbout from './09.07/exercises/solution/PostAbout';
import SearchParams from './09.09/lecture/App';
import SearchParamsExample from './09.09/lecture/SearchParamsExample';
import BurgerApp from './09.09/lecture/BurgerApp';
import SearchParamsSolutionLayout from './09.11/App';
import SearchParamsHome from './09.11/SearchParamsHome';
import SearchQueryInput from './09.11/components/SearchQueryInput';
import NavigationFilter from './09.11/components/NavigationFilter';
import SynchronizedInputs from './09.11/components/SynchronizedInputs';
import PaginationComponent from './09.11/components/PaginationComponent';
import SearchFilters from './09.11/components/SearchFilters';
import DynamicFormFields from './09.11/components/DynamicFormFields';
import TabNavigation from './09.11/components/TabNavigation';
import AdvancedFilters from './09.11/components/AdvancedFilters';
import FormStatePreservation from './09.11/components/FormStatePreservation';
import ComplexFormWithDynamicFields from './09.11/components/ComplexFormWithDynamicFields';
import MultiPageForm from './09.11/components/MultiPageForm';
import SeachParamsDisplay from './09.11/components/SeachParamsDisplay';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/bevezetes', element: <Bevezetes /> },
      { path: '/jsx-komponensek', element: <JsxKomponensek /> },
      { path: '/propok', element: <Propok /> },
      {
        path: '/listaelemek-megjelenitese',
        element: <ListaelemekMegjelenitese />,
      },
      { path: '/dinamikus-lista', element: <DinamikusLista /> },
      { path: '/eventek-todo', element: <EventekTodo /> },
      { path: '/kontrollalt-inputok', element: <KontrollaltInputok /> },
      {
        path: '/felteteles-megjelenites-effektek',
        element: <FeltetelesMegjelenitesEffektek />,
      },
      { path: '/refek', element: <Refek /> },
      { path: '/context', element: <Context /> },
      { path: '/context-gyakorlas', element: <ContextGyakorlas /> },
      { path: '/formok', element: <Formok /> },
      { path: '/styling', element: <Styling /> },
      {
        path: '/router',
        element: <RouterLesson />,
        children: [
          { path: '/router/home', element: <Home /> },
          { path: '/router/about', element: <About /> },
          { path: '/router/todos', element: <Todos /> },
          { path: '/router/todos/:todoId', element: <TodoDetail /> },
        ],
      },
      {
        path: '/router-gyakorlas',
        element: <PostLayout />,
        children: [
          { path: '/router-gyakorlas', element: <Posts /> },
          { path: '/router-gyakorlas/posts/:postId', element: <PostDetail /> },
          { path: '/router-gyakorlas/about', element: <PostAbout /> },
        ],
      },
      {
        path: '/searchparams',
        element: <SearchParams />,
        children: [
          { path: '/searchparams', element: <SearchParamsExample /> },
          { path: '/searchparams/burgers', element: <BurgerApp /> },
        ],
      },
      {
        path: '/searchparams-solutions',
        element: <SearchParamsSolutionLayout />,
        children: [
          { path: '', element: <SearchParamsHome /> },
          { path: 'search-params-display', element: <SeachParamsDisplay /> },
          { path: 'search-query-input', element: <SearchQueryInput /> },
          { path: 'navigation-filter', element: <NavigationFilter /> },
          { path: 'synchronized-inputs', element: <SynchronizedInputs /> },
          { path: 'pagination', element: <PaginationComponent /> },
          { path: 'search-filters', element: <SearchFilters /> },
          {
            path: 'dynamic-form-fields',
            element: <DynamicFormFields />,
          },
          {
            path: 'tab-navigation',
            element: <TabNavigation />,
          },
          {
            path: 'advanced-filters',
            element: <AdvancedFilters />,
          },
          {
            path: 'form-state-preservation',
            element: <FormStatePreservation />,
          },
          {
            path: 'complex-form-dynamic-fields',
            element: <ComplexFormWithDynamicFields />,
          },
          {
            path: 'multi-page-form',
            element: <MultiPageForm />,
          },
        ],
      },
    ],
  },
  {
    path: 'users/:userId',
    element: <ParamComponent />,
  },
  {
    path: '*',
    element: <h1>Nincs ilyen útvonal</h1>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
