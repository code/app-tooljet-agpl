import React from 'react';
import cx from 'classnames';
import { Breadcrumbs } from '../Breadcrumbs';
import { useLocation } from 'react-router-dom';
import { ButtonSolid } from '@/_ui/AppButton/AppButton';

function Header({ enableCollapsibleSidebar = false, collapseSidebar = false, toggleCollapsibleSidebar = () => {} }) {
  const currentVersion = localStorage.getItem('currentVersion');
  const darkMode = localStorage.getItem('darkMode') === 'true';

  const routes = (path) => {
    switch (path) {
      case 'workspaceId':
        return 'Applications';
      case 'database':
        return 'Database';
      case 'workspace-settings':
        return 'Workspace settings';
      case 'data-sources':
        return 'Data sources';
      case 'settings':
        return 'Profile settings';
      case 'integrations':
        return 'Integrations';
      default:
        return 'Applications';
    }
  };
  const location = useLocation();

  return (
    <header className="layout-header">
      <div className="row w-100 gx-0">
        {!collapseSidebar && (
          <div className="tj-dashboard-section-header">
            <div className="row">
              <div className="col-9">
                <p className="tj-text-md font-weight-500" data-cy="dashboard-section-header">
                  {routes(location?.pathname.split('/').pop())}
                </p>
              </div>
              <div className="col-3 px-3">
                {enableCollapsibleSidebar && !collapseSidebar && (
                  <ButtonSolid
                    variant="ghostBlue"
                    className="tj-text-xsm"
                    style={{
                      minWidth: '28px',
                      width: '28px',
                      height: '28px',
                      padding: '7px',
                      borderRadius: '6px',
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    leftIcon="cheveronleftdouble"
                    fill="#3E63DD"
                    iconWidth="14"
                    size="md"
                    onClick={toggleCollapsibleSidebar}
                  ></ButtonSolid>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="col tj-dashboard-header-wrap">
          <div className="d-flex justify-content-sm-between">
            {enableCollapsibleSidebar && collapseSidebar && (
              <div className="pe-3">
                <ButtonSolid
                  variant="ghostBlue"
                  className="tj-text-xsm"
                  style={{
                    minWidth: '28px',
                    width: '28px',
                    height: '28px',
                    padding: '7px',
                    borderRadius: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  leftIcon="cheveronrightdouble"
                  fill="#3E63DD"
                  iconWidth="14"
                  size="md"
                  onClick={toggleCollapsibleSidebar}
                ></ButtonSolid>
              </div>
            )}
            <div className="app-header-label" data-cy="app-header-label">
              <Breadcrumbs darkMode={darkMode} />
            </div>
            <div
              className={cx('ms-auto tj-version tj-text-xsm', {
                'color-muted-darkmode': darkMode,
                'color-disabled': !darkMode,
              })}
              data-cy="version-label"
            >
              Version {currentVersion}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
