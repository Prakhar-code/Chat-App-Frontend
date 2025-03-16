import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import { HomePage, SignUpPage, LoginPage, SettingsPage, ProfilePage } from './pages'
const App = () => {
  return (
    <div>
 
      <Navbar />

      <Routes> 

        {/* Routes component will render the appropriate component based on the URL */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
      </Routes>

    </div>

  )
};

export default App