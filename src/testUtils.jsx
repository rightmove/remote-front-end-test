import React from 'react';
import PropTypes from 'prop-types';
import { render, renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: { retry: false },
        },
    });

const createWrapper = () => {
    const queryClient = createTestQueryClient();
    const QueryClientWrapper = ({ children }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    QueryClientWrapper.propTypes = { children: PropTypes.node.isRequired };

    return QueryClientWrapper;
};

export const renderWithClient = (ui, options) => render(ui, { wrapper: createWrapper(), ...options });
export const renderHookWithClient = (hook, options) => renderHook(hook, { wrapper: createWrapper(), ...options });
