import Header from "./Header"
import Footer from "./Footer";
import '../index.css';

const Layout = ({children})=>{
return (
    <div id="layout">
    <Header> </Header>
     <main>{children}</main>
    <Footer />      
    
    </div>
)

}
export default Layout;