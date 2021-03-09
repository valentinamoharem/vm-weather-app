import './App.css';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import React from 'react';
// import InputContent from './content/inputContent';
import OutputContent from './content/outputContent';

function App() {
  const [mainContent] = React.useState<{}>(<OutputContent />);
  // const [city, setCity] = useState<String | null>(null)

  // missing global context for city value to pass down into 
  // dropdown menu and textfield and set city method to make request

  // missing submit button to get city forecast

  // then missing data display for city forecast and return button
  // to come back to original page

  // render title and description and change main content based on state
  // missing main content state to display forecast data input and output

  // missing topbar and footer
  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        {mainContent}        
      </header>
      <Footer />
    </div>
  );
}

export default App;
