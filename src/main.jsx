import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./RTK/store.js";
import { SupabaseProvider } from "./supabase/index.js";
import { AuthProvider } from "./components/Auth/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SupabaseProvider>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </SupabaseProvider>
  </BrowserRouter>
);
