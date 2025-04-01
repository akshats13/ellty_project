import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface CheckboxItem {
  id: string;
  label: string;
  checked: boolean;
}

function App() {
  const [items, setItems] = useState<CheckboxItem[]>([
    { id: 'all', label: 'All pages', checked: false },
    { id: 'page1', label: 'Page 1', checked: false },
    { id: 'page2', label: 'Page 2', checked: false },
    { id: 'page3', label: 'Page 3', checked: false },
    { id: 'page4', label: 'Page 4', checked: false },
  ]);

  const handleCheckboxChange = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleDone = () => {
    console.log('Selected items:', items.filter(item => item.checked));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
        <div className="space-y-4">
          <label
            className="flex items-center justify-between py-2 cursor-pointer group"
          >
            <span className="text-gray-700 text-sm">All pages</span>
            <div 
              className={`w-5 h-5 rounded border ${
                items[0].checked 
                  ? 'bg-blue-500 border-blue-500' 
                  : 'border-gray-300 group-hover:border-gray-400'
              } flex items-center justify-center transition-colors`}
              onClick={() => handleCheckboxChange('all')}
            >
              {items[0].checked && (
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              )}
            </div>
          </label>

          <hr className="border-gray-200" />

          {items.slice(1).map(item => (
            <label
              key={item.id}
              className="flex items-center justify-between py-2 cursor-pointer group"
            >
              <span className="text-gray-700 text-sm">{item.label}</span>
              <div 
                className={`w-5 h-5 rounded border ${
                  item.checked 
                    ? 'bg-blue-500 border-blue-500' 
                    : 'border-gray-300 group-hover:border-gray-400'
                } flex items-center justify-center transition-colors`}
                onClick={() => handleCheckboxChange(item.id)}
              >
                {item.checked && (
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                )}
              </div>
            </label>
          ))}
        </div>
        
        <hr className="border-gray-200 mt-4" />
        
        <button
          onClick={handleDone}
          className="mt-6 w-full bg-yellow-400 text-black py-2.5 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default App;