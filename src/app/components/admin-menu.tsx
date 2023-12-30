// AdminMenu.tsx
"use client";
import { usePage } from "./currentPageContext";

class MenuItem {
  title: string;
  desc: string;
  pageSelector: string;

  constructor(title: string, desc: string, pageSelector: string) {
    this.title = title;
    this.desc = desc;
    this.pageSelector = pageSelector;
  }
}

const menuItemList = [
  new MenuItem(
    "Analytics",
    "View an overview of your analytics here",
    "viewAnalyticsPage"
  ),
  new MenuItem("Orders", "Manage customer orders here.", "manageOrdersPage"),
  new MenuItem(
    "Products",
    "Update your product selection here",
    "manageProductsPage"
  ),
  new MenuItem(
    "Notification Center",
    "View your notifications here",
    "viewNotificationsPage"
  ),
  new MenuItem("Blog", "Add a blog post here", "manageBlogPage"),
  new MenuItem(
    "Workshops",
    "Manage your workshops here",
    "manageWorkshopsPage"
  ),
  new MenuItem("Customers", "View customers here", "manageCustomersPage"),
];

const AdminMenuSetup = () => {
  const { pageType, setPageType } = usePage();
  console.log("pageType", pageType);
  const handleCardClick = (pageSelector: any) => {
    setPageType(pageSelector);
  };

  return (
    <>
      {menuItemList.map((item, index) => (
        <div key={index} onClick={() => handleCardClick(item.pageSelector)}>
          <p>This is A Card {item.title}</p>
        </div>
      ))}
    </>
  );
};

const AdminMenu = () => {
  return (
    <div className="w-full min-h-screen flex flex-grow flex-col flex-1 bg-white">
      <AdminMenuSetup />
    </div>
  );
};

export default AdminMenu;
