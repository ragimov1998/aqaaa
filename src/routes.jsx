import Cardid from "./pages/Cardid";
import Home from "./pages/Home";
import Kampaniyalar from "./pages/Kampaniyalar";
import Kartlar from "./pages/Kartlar";
import Kocurmeler from "./pages/Kocurmeler";
import Kreditler from "./pages/Kreditler";
import Odenisler from "./pages/Odenisler";
import Partnyorlar from "./pages/Partnyorlar";
import Xeberler from "./pages/Xeberler";
import Partnyorname from "./pages/page components/partnyorlar/Partnyorname";


export const routes = [
    {
        path:'/',
        element: <Home></Home>
    },
    {
        path:'/kartlar',
        element:<Kartlar></Kartlar>
    },
    {
        path:'/kartlar/:id',
        element:<Cardid></Cardid>
    },
    {
        path:'/kreditler',
        element:<Kreditler></Kreditler>
    },
    {
        path:'/ödənişlər',
        element:<Odenisler></Odenisler>
    },
    {
        path:'/köçürmələr',
        element:<Kocurmeler></Kocurmeler>
    },
    {
        path:'/partnyorlar',
        element:<Partnyorlar></Partnyorlar>
    },
    {
        path:'/partnyorlar/:id',
        element:<Partnyorname></Partnyorname>
    },
    {
        path:'/kampaniyalar',
        element:<Kampaniyalar></Kampaniyalar>
    },
    {
        path:'/xəbərlər',
        element:<Xeberler></Xeberler>
    },
    
];