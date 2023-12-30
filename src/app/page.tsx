import AdminMenu from "./components/admin-menu";
import { PageProvider } from "./components/currentPageContext";

export default function Home() {
  return (
    <main>
      <PageProvider>
        <AdminMenu />
      </PageProvider>
    </main>
  );
}
