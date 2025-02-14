interface IMenuHeader {
    id: string;
    name: string;
    link: string;
    children: any[];
    visible: boolean;
}

interface IMenuSidebar {
    id: string;
    icon: string;
    name: string;
    link: string;
    parent_link: string;
}

export type { IMenuHeader, IMenuSidebar };
