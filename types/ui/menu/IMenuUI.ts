import { ReactNode } from "react";

// Type cho một mục con trong menu (submenu items)
interface ISubMenuItem {
    id: string;
    name: string;
    link: string;
    icon: ReactNode;
    description: string;
    typeIcon: string;
    typeLink?: string;
}

// Type cho từng nội dung trong tab
interface SubMenuContent {
    image: string;
    items: ISubMenuItem[];
}

// Type cho SubMenu
interface SubMenu {
    tabs: string[];
    activeTab: string;
    content: Record<string, SubMenuContent>; // Object chứa các nội dung theo tab
}

// Type cho một mục trong `dataHeader`
interface IMenuHeader {
    id: string;
    name: string;
    link: string;
    type?: "default" | "products" | "resource" ;
    description?: string;
    subMenu?: SubMenu;
    visible: boolean;
}


export type { IMenuHeader, ISubMenuItem };
