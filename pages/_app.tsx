import { ErrorBoundary } from "components/ErrorBoundary";
import { Layout } from "components/Layout";
import { createDependencies } from "context/DependencyContainer/createDependenciesApp";
import { DependencyContainerContext } from "context/DependencyContainer/DependencyContainerContext";
import { ErrorProvider } from "context/Error";
import { GlobalParamsContextProvider } from "context/GlobalParamsContext";
import { usePersistLocaleCookie } from "hooks/usePersistedLocale";
import { AppProps } from "next/app";
import { useRef } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { globalStyles } from "stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  const dependencies = createDependencies();
  const queryClientRef = useRef<QueryClient>();

  globalStyles();
  usePersistLocaleCookie();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <>
      <ErrorProvider>
        <GlobalParamsContextProvider>
          <DependencyContainerContext.Provider value={dependencies}>
            <QueryClientProvider client={queryClientRef.current}>
              <Hydrate state={pageProps.dehydratedState}>
                <Layout>
                  <ErrorBoundary>
                    <Component {...pageProps} />
                  </ErrorBoundary>
                </Layout>
              </Hydrate>
            </QueryClientProvider>
          </DependencyContainerContext.Provider>
        </GlobalParamsContextProvider>
      </ErrorProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
