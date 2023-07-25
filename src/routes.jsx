import Ss from "./componenets/Ss";
import Cardid from "./pages/Cardid";
import Home from "./pages/Home";
import Kampaniyalar from "./pages/Kampaniyalar";
import Kartlar from "./pages/Kartlar";
import Kocurmeler from "./pages/Kocurmeler";
import Komp from "./pages/Komp";
import Kreditler from "./pages/Kreditler";
import Newspage from "./pages/Newspage";
import Odenisid from "./pages/Odenisid";
import Odenisler from "./pages/Odenisler";
import Partnyorlar from "./pages/Partnyorlar";
import Xeberler from "./pages/Xeberler";
import Partnyorname from "./pages/page components/partnyorlar/Partnyorname";
import Security from "./pages/page components/partnyorlar/Security";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tetbiq from "./Tetbiq";
import DarkLight from "./pages/DarkMod";


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
        path:'/ödənişlər/:id',
        element:<Odenisid></Odenisid>
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
        path:'/kampaniyalar/:id',
        element:<Komp></Komp>
    },
    {
        path:'/xəbərlər',
        element:<Xeberler></Xeberler>
    },
    {
        path:'/xəbərlər/:id',
        element:<Newspage></Newspage>
    },
    {
        path:'/security/:id',
        element:<Security></Security>
    },
    {
        path:'/attributes/information/:id',
        element:<Ss></Ss>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/tetbiqiyukle',
        element:<Tetbiq></Tetbiq>
    },
    {
        path:'/dark',
        element:<DarkLight></DarkLight>
    }
];