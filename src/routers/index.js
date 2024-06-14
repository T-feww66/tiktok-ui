import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profiles from "@/pages/Profiles";
import Upload from "@/pages/Upload";
import { HeaderOnly } from "@/Layouts";

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/following",
        component: Following,
    },
    {
        path: "/profiles",
        component: Profiles,
        layout: HeaderOnly,
    },
    {
        path: "/upload",
        component: Upload,
        layout: null,
    },
];

export { publicRoutes };
