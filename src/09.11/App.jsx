import { Outlet, Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

function MainLayout() {
  const location = useLocation();
  const checkIsActive = (path) => location.pathname === path;

  return (
    <>
      <Navbar bg="secondary" expand="lg" className="rounded">
        <Nav className="mx-auto d-flex flex-column gap-1 justify-items-center align-items-center">
          <div className="d-flex gap-2">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/searchparams-solutions/search-params-display?param1=value1&param2=value2"
                style={checkIsActive('/search-params-display') ? { color: 'white' } : {}}
              >
                URL Params Display
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/searchparams-solutions/search-query-input"
                style={checkIsActive('/search-query-input') ? { color: 'white' } : {}}
              >
                Query Input
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/searchparams-solutions/navigation-filter"
                style={checkIsActive('/navigation-filter') ? { color: 'white' } : {}}
              >
                Navigation Filter
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/searchparams-solutions/synchronized-inputs"
                style={checkIsActive('/synchronized-inputs') ? { color: 'white' } : {}}
              >
                Synchronized Inputs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/searchparams-solutions/pagination"
                style={checkIsActive('/pagination') ? { color: 'white' } : {}}
              >
                Pagination
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/searchparams-solutions/search-filters"
                style={checkIsActive('/search-filters') ? { color: 'white' } : {}}
              >
                Search Filters
              </Nav.Link>
            </Nav.Item>
          </div>
          <div className="d-flex gap-2">
            <Nav.Link
              as={Link}
              to="/searchparams-solutions/dynamic-form-fields?fields=text,number"
              style={checkIsActive('/dynamic-form-fields') ? { color: 'white' } : {}}
            >
              DynamicFormFields
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/searchparams-solutions/tab-navigation"
              style={checkIsActive('/tab-navigation') ? { color: 'white' } : {}}
            >
              TabNavigation
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/searchparams-solutions/advanced-filters"
              style={checkIsActive('/advanced-filters') ? { color: 'white' } : {}}
            >
              AdvancedFilters
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/searchparams-solutions/form-state-preservation"
              style={checkIsActive('/form-state-preservation') ? { color: 'white' } : {}}
            >
              FormStatePreservation
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/searchparams-solutions/complex-form-dynamic-fields"
              style={checkIsActive('/complex-form-dynamic-fields') ? { color: 'white' } : {}}
            >
              ComplexFormWithDynamicFields
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/searchparams-solutions/multi-page-form"
              style={checkIsActive('/multi-page-form') ? { color: 'white' } : {}}
            >
              MultiPageForm
            </Nav.Link>
          </div>
        </Nav>
      </Navbar>
      <Container style={{ marginTop: '20px' }}>
        <Outlet />
      </Container>
    </>
  );
}

export default MainLayout;
