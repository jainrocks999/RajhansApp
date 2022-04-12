import { createSwitchNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SplashScreen from './Authscreens/Splash';
import LoginScreen from './Authscreens/Login';
import AboutUsScreen from './Mainscreens/Aboutus';
import FaqScreen from './Mainscreens/Faq';
import HiringScreen from './Mainscreens/Hiringofhall'; 
import Drawer from './Drawer/Drawerscreen';
import ForgetScreen from './Authscreens/Forgetpassword';
import FeedbackScreen from './Mainscreens/Feedback';
import SuggestionScreen from './Mainscreens/Suggestion';
import HomeScreen from './Mainscreens/Home';
import PersonalScreen from './Mainscreens/Personal_info';
import PreviewScreen from './Mainscreens/Preview';
import BookScreen from './Mainscreens/Book_ticket';
import TrailerScreen from './Mainscreens/Trailer';
import Mapscreen from './Mainscreens/Map';
import OrderHistoryScreen from './Mainscreens/OrderHistory';
import CancelorderScreen from './Mainscreens/Cancelorder';
import OrderPageScreen from './Mainscreens/OrderPage';
import ConfirmBookingScreen from './Mainscreens/ConfirmBooking';
import Announcement from './Mainscreens/Announcement';
import ContactUs from './Mainscreens/Contact_us';
import ChangePassword from './Mainscreens/ChangePassword';

const LoginStack = createStackNavigator({
    LoginsScreen: {
        screen: LoginScreen,
    },
    ForgetScreen: {
        screen: ForgetScreen,
    },
})

const AboutusStack = createStackNavigator({
    ABOUT: {
        screen: AboutUsScreen,
    },
})
const HiringStack = createStackNavigator({
    HIRING: {
        screen: HiringScreen,
    },
})
const FaqStack = createStackNavigator({
    FAQ: {
        screen: FaqScreen,

    },
})

const FeedbackStack = createStackNavigator({
    FEEDBACK: {
        screen: FeedbackScreen,

    },
})

const SuggestionStack = createStackNavigator({
    SUGGESTION: {
        screen: SuggestionScreen,
    },
})

const HomeStack = createStackNavigator({
    HOME: {
        screen: HomeScreen,
    },
    PREVIEW: {
        screen: PreviewScreen,
    },
    TrailerScreen:{
        screen: TrailerScreen
    },
    BOOK: {
        screen: BookScreen,
    },
    MAP:{
        screen: Mapscreen
    },
    ORDERPAGE: {
        screen: OrderPageScreen,

    },
    CONFIRMBOOK: {
        screen: ConfirmBookingScreen,

    },
},{
    initialRouteName: 'HOME'
})
const AnnouncementStack = createStackNavigator({
    Announcement: {
        screen: Announcement,
    },
   
},{
    initialRouteName: 'Announcement'
})
const ContactUsStack = createStackNavigator({
    ContactUs: {
        screen: ContactUs,
    },
   
},{
    initialRouteName: 'ContactUs'
})

const PersonalStack = createStackNavigator({
    PERSONAL: {
        screen: PersonalScreen,
    },
    Password: {
        screen: ChangePassword,
    },
},{
    initialRouteName: 'PERSONAL'
})

const OrderStack = createStackNavigator({
    ORDER: {
        screen: OrderHistoryScreen,
    },
    CANCELORDER:{
        screen: CancelorderScreen
    },
    
},{
    initialRouteName: 'ORDER'
})

const AppStack = createDrawerNavigator(
    {
        Login: LoginStack,
        About_Us:AboutusStack,
        Hiring :HiringStack,
        Faq:FaqStack,
        Feedback: FeedbackStack,
        Suggestion: SuggestionStack,
        Announcement: AnnouncementStack,
        ContactUs:ContactUsStack,
    },
    {
        initialRouteName: 'Login',
        contentComponent: Drawer,
    }
);
const MainStack = createDrawerNavigator(
    {
        About_Us:AboutusStack,
        Hiring :HiringStack,
        Faq:FaqStack,
        Feedback: FeedbackStack,
        Suggestion: SuggestionStack,
        Home: HomeStack,
        Personal: PersonalStack,
        OrderHistory: OrderStack,
        Announcement: AnnouncementStack,
        ContactUs:ContactUsStack,
        
    },
    {
        initialRouteName: 'Home',
        contentComponent: Drawer,
    }
);

const APP= createSwitchNavigator(
    {
        AuthLoading: SplashScreen,
        App: AppStack,
        Main: MainStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(APP)