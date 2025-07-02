import Header from './components/Header';
import Toolbar from './components/Toolbar';
import ActionButtons from './components/ActionButtons';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Toolbar />
      <ActionButtons />
      <div className="bg-white shadow-sm">
        <DataTable />
       
      </div>
    </div>
  );
}

export default App;