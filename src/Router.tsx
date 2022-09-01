import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { UserList } from "./pages/UserList";
import { UserRegistration } from "./pages/UserRegistration";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
        <Route path="/users" element={<UserList />} />
        <Route path="/register" element={<UserRegistration />} />
      </Route>
    </Routes>
  );
}
