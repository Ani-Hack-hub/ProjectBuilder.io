import React, { useState } from 'react';
import axios from 'axios';

const TechnologiesSelector = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleCheckboxChange = (technology) => {
    if (selectedTechnologies.includes(technology)) {
      setSelectedTechnologies(selectedTechnologies.filter(tech => tech !== technology));
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
    // Send updated list to backend
    axios.post('/updateTechnologies', { selectedTechnologies })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error updating technologies:', error);
      });
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('aiml')} />
        AIML
      </label>
      {/* Add more checkboxes for other technologies */}
    </div>
  );
};

export default TechnologiesSelector;
