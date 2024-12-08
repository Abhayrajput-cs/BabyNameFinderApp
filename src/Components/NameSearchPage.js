import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/NameSearchPage.css';
import Loader from './Loader';
import Modal from './Modal';

// Assuming the names are initially loaded (you can keep your names list here)
const names = {
  boy: [
    { name: 'Ravi', meaning: 'Sun' },
    { name: 'Harit', meaning: 'Green' },
    { name: 'Shankar', meaning: 'Lord Shiva' },
    { name: 'Lakshman', meaning: 'Brother of Lord Ram' },
    { name: 'Prithvi', meaning: 'Earth' },
    { name: 'Keshav', meaning: 'Lord Krishna' },
    { name: 'Eshwar', meaning: 'God' },
    { name: 'Aaditya', meaning: 'Sun God' },
    { name: 'Ritvik', meaning: 'Priest' },
    { name: 'Arpit', meaning: 'Devoted' },
    { name: 'Vansh', meaning: 'Generation' },
    { name: 'Devesh', meaning: 'Lord of Gods' },
    { name: 'Ansh', meaning: 'Portion, Part' },
    { name: 'Madhav', meaning: 'Lord Krishna' },
    { name: 'Yashwant', meaning: 'Victorious' },
    { name: 'Girish', meaning: 'Lord of the Mountain' },
    { name: 'Advaith', meaning: 'Unique' },
    { name: 'Aaryan', meaning: 'Noble' },
    { name: 'Shivendra', meaning: 'Lord Shiva' },
    { name: 'Suryansh', meaning: 'Part of the Sun' },
    { name: 'Abhinav', meaning: 'Innovative, New' },
    { name: 'Prakhar', meaning: 'Sharp, Bright' },
    { name: 'Nayan', meaning: 'Eyes' },
    { name: 'Rishi', meaning: 'Sage' },
    { name: 'Tejas', meaning: 'Radiance, Power' },
    { name: 'Nikhil', meaning: 'Complete' },
    { name: 'Vedant', meaning: 'Ultimate Knowledge' },
    { name: 'Akshay', meaning: 'Eternal' },
    { name: 'Sidhant', meaning: 'Principles' },
    { name: 'Sumeet', meaning: 'Good Friend' },
    { name: 'Yogesh', meaning: 'God of Yoga' },
    { name: 'Tanmay', meaning: 'Engrossed' },
    { name: 'Amit', meaning: 'Limitless' },
    { name: 'Anshul', meaning: 'Radiant' },
    { name: 'Aman', meaning: 'Peace' },
    { name: 'Shaan', meaning: 'Pride' },
    { name: 'Kabir', meaning: 'Great, Powerful' },
    { name: 'Raghavendra', meaning: 'Lord Vishnu' },
    { name: 'Vishal', meaning: 'Great' },
    { name: 'Jatin', meaning: 'Lord Shiva' },
    { name: 'Mihir', meaning: 'Sunlight' },
    { name: 'Jeevan', meaning: 'Life' },
    { name: 'Yogendra', meaning: 'Lord of Yoga' },
    { name: 'Ramesh', meaning: 'Lord Vishnu' },
    { name: 'Viraj', meaning: 'Brilliance' },
    { name: 'Kunal', meaning: 'Lotus' },
    { name: 'Tushar', meaning: 'Snow' },
    { name: 'Aadesh', meaning: 'Command' },
    { name: 'Lalit', meaning: 'Elegant' },
    { name: 'Manish', meaning: 'God of Mind' },
    { name: 'Niraj', meaning: 'Lotus' },
    { name: 'Rohit', meaning: 'Red' },
    { name: 'Rajeev', meaning: 'Blue Lotus' },
    { name: 'Gautam', meaning: 'Buddha' },
    { name: 'Shashank', meaning: 'Moon' },
    { name: 'Saurabh', meaning: 'Fragrance' },
    { name: 'Chirag', meaning: 'Lamp' },
    { name: 'Arvind', meaning: 'Lotus' },
    { name: 'Vaibhav', meaning: 'Wealth' },
    { name: 'Parth', meaning: 'Arjun' },
    { name: 'Bhavesh', meaning: 'Lord of the World' },
    { name: 'Dhanush', meaning: 'Bow' },
    { name: 'Bhavin', meaning: 'Bright, Glowing' },
    { name: 'Krit', meaning: 'Work, Deed' },
    { name: 'Hardik', meaning: 'From the heart' },
    { name: 'Nashit', meaning: 'Conqueror' },
    { name: 'Himanshu', meaning: 'Moon' },
    { name: 'Mayank', meaning: 'Moon' },
    { name: 'Raghu', meaning: 'A King' },
    { name: 'Shubham', meaning: 'Auspicious' },
    { name: 'Chandresh', meaning: 'Lord of the Moon' },
    { name: 'Ishaan', meaning: 'Sun' },
    { name: 'Raj', meaning: 'King' },
    { name: 'Sandeep', meaning: 'Light' },
    { name: 'Abhishek', meaning: 'Ritual of Worship' },
    { name: 'Amol', meaning: 'Priceless' },
    { name: 'Gaurav', meaning: 'Pride' },
    { name: 'Ankit', meaning: 'Marked' },
    { name: 'Vikrant', meaning: 'Brave' },
    { name: 'Abhay', meaning: 'Fearless' },
    // Continue adding more names for boys
  ],

  girl: [
    { name: 'Anisha', meaning: 'Brightness' },
    { name: 'Divya', meaning: 'Divine' },
    { name: 'Radhika', meaning: 'Successful' },
    { name: 'Neha', meaning: 'Rain' },
    { name: 'Aaradhya', meaning: 'Worshipped' },
    { name: 'Pragya', meaning: 'Wisdom' },
    { name: 'Barkha', meaning: 'Rain' },
    { name: 'Sia', meaning: 'Goddess Sita' },
    { name: 'Ishita', meaning: 'Desire' },
    { name: 'Aditi', meaning: 'Boundless' },
    { name: 'Shanaya', meaning: 'Distinguished' },
    { name: 'Ritika', meaning: 'Movement' },
    { name: 'Aishwarya', meaning: 'Wealth, Prosperity' },
    { name: 'Asha', meaning: 'Hope' },
    { name: 'Vaidehi', meaning: 'Goddess Sita' },
    { name: 'Alisha', meaning: 'Protected by God' },
    { name: 'Disha', meaning: 'Direction' },
    { name: 'Kavya', meaning: 'Poetry' },
    { name: 'Simran', meaning: 'Remembrance' },
    { name: 'Khushboo', meaning: 'Fragrance' },
    { name: 'Rupa', meaning: 'Beauty' },
    { name: 'Anjali', meaning: 'Offering' },
    { name: 'Tanvi', meaning: 'Delicate' },
    { name: 'Shivani', meaning: 'Goddess Parvati' },
    { name: 'Suman', meaning: 'Good Hearted' },
    { name: 'Aarohi', meaning: 'A Musical Tune' },
    { name: 'Charulata', meaning: 'Beautiful Vine' },
    { name: 'Tanya', meaning: 'Fairy Queen' },
    { name: 'Shreya', meaning: 'Prosperous, Lucky' },
    { name: 'Pranjal', meaning: 'Simple, Honest' },
    { name: 'Pari', meaning: 'Fairy' },
    { name: 'Manvi', meaning: 'One of the people' },
    { name: 'Shruti', meaning: 'Musical notes' },
    { name: 'Prity', meaning: 'Love, Beauty' },
    { name: 'Kiran', meaning: 'Ray of Light' },
    { name: 'Rupa', meaning: 'Beautiful' },
    { name: 'Chandni', meaning: 'Moonlight' },
    { name: 'Neelam', meaning: 'Sapphire' },
    { name: 'Vandana', meaning: 'Worship' },
    { name: 'Shaila', meaning: 'Goddess Parvati' },
    { name: 'Jaya', meaning: 'Victory' },
    { name: 'Madhavi', meaning: 'Springtime' },
    { name: 'Yashika', meaning: 'Success, Fame' },
    { name: 'Nandita', meaning: 'Happy' },
    { name: 'Shalini', meaning: 'Modesty' },
    { name: 'Sonali', meaning: 'Golden' },
    { name: 'Kriti', meaning: 'Work of art' },
    { name: 'Sanika', meaning: 'Goddess Lakshmi' },
    { name: 'Aanya', meaning: 'Gracious' },
    { name: 'Simran', meaning: 'Remembrance' },
    { name: 'Sanya', meaning: 'Distinguished' },
    { name: 'Madhuri', meaning: 'Sweetness' },
    { name: 'Sujata', meaning: 'Well born' },
    { name: 'Vishakha', meaning: 'A Star' },
    { name: 'Shrishti', meaning: 'Creation' },
    { name: 'Prachi', meaning: 'East' },
    { name: 'Tanuja', meaning: 'Daughter' },
    { name: 'Lavanya', meaning: 'Grace' },
    { name: 'Nikita', meaning: 'Earth' },
    { name: 'Aarya', meaning: 'Noble' },
    { name: 'Kanika', meaning: 'Atom' },
    { name: 'Rupal', meaning: 'Silver' },
    { name: 'Arpita', meaning: 'Devoted' },
    { name: 'Naina', meaning: 'Eyes' },
    { name: 'Kavita', meaning: 'Poetry' },
    { name: 'Ritu', meaning: 'Season' },
    { name: 'Sakshi', meaning: 'Witness' },
    { name: 'Madhavi', meaning: 'Springtime' },
    { name: 'Ruchi', meaning: 'Interest' },
    { name: 'Manisha', meaning: 'Intellect' },
    { name: 'Vasundhara', meaning: 'Earth' },
    { name: 'Yamini', meaning: 'Night' },
    { name: 'Anvi', meaning: 'Goddess Lakshmi' },
    { name: 'Rupali', meaning: 'Beautiful' },
    { name: 'Gargi', meaning: 'Ancient Indian Scholar' },
    { name: 'Shivika', meaning: 'Goddess Parvati' },
    { name: 'Sonal', meaning: 'Golden' },
    { name: 'Nikita', meaning: 'Earth' },
    { name: 'Vanya', meaning: 'Goddess of the Forest' },
    // Continue adding more names for girls
  ],
};


function NameSearchPage() {
  const { gender } = useParams();
  const [query, setQuery] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedName, setSelectedName] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contributeName, setContributeName] = useState('');
  const [contributionMessage, setContributionMessage] = useState('');
  const [hoveredMeaning, setHoveredMeaning] = useState('');
  const [isAdding, setIsAdding] = useState(false);  // State to track if a name is being added

  // Function to fetch meaning of the name from an external API
  // const fetchMeaning = async (name) => {
  //   try {
  //     const response = await fetch(`https://api.api-ninjas.com/v1/name?name=${name}`, {
  //       headers: {
  //         'X-Api-Key': 'bcL1B1BkfCoartWT/mOpcQ==fJLwbu0l68DbOXQR', // Replace with your actual API key
  //       },
  //     });
  //     const data = await response.json();
  //     return data && data[0] ? data[0].meaning : 'Meaning not found';
  //   } catch (error) {
  //     console.error('Error fetching meaning:', error);
  //     return 'Meaning not found';
  //   }
  // };
// Function to fetch meaning of the name from an external API
const fetchMeaning = async (name) => {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/name?name=${name}`, {
      headers: {
        'X-Api-Key': 'bcL1B1BkfCoartWT/mOpcQ==fJLwbu0l68DbOXQR', // Replace with your actual API key
      },
    });

    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response:', data); // Log the API response to see its structure

    // Check if the name meaning is available
    if (data && data[0] && data[0].meaning) {
      return data[0].meaning; // Return the meaning from the response
    } else {
      return 'Meaning not found';
    }
  } catch (error) {
    console.error('Error fetching meaning:', error); // Log any errors
    return 'Meaning not found'; // Return a fallback message
  }
};

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    setLoading(true);

    if (searchQuery === '') {
      setFilteredNames([]);
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const result = names[gender].filter(({ name }) =>
        name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setFilteredNames(result);
      setLoading(false);
    }, 500);
  };

  const handleNameClick = (name) => {
    setSelectedName(name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteName = () => {
    const updatedNames = names[gender].filter(({ name }) => name !== selectedName.name);
    names[gender] = updatedNames;
    setFilteredNames(updatedNames.filter(({ name }) => name.toLowerCase().startsWith(query.toLowerCase())));
    closeModal();
  };

  // Handle name contribution
  const handleContributeSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = contributeName.trim();
    if (!trimmedName) {
      setContributionMessage('Please enter a valid name.');
      return;
    }

    if (names[gender].some(({ name }) => name === trimmedName)) {
      setContributionMessage(`The name "${trimmedName}" already exists in the list.`);
    } else {
      setIsAdding(true);  // Indicate that a name is being added
      const meaning = await fetchMeaning(trimmedName);  // Fetch meaning for the name
      names[gender].push({ name: trimmedName, meaning });
      setContributionMessage(`The name "${trimmedName}" has been successfully added.`);
      setContributeName('');
      setIsAdding(false);  // Stop indicating the name is being added
    }
  };

  const handleMouseEnter = (meaning) => {
    setHoveredMeaning(meaning);
  };

  const handleMouseLeave = () => {
    setHoveredMeaning('');
  };

  return (
    <div className="search-container">
      <Link to="/" className="home-button">Home</Link>
      <h1 className="search-title">{gender === 'boy' ? 'Baby Boy' : 'Baby Girl'} Names</h1>
      <input
        type="text"
        className="search-box"
        placeholder="Enter the first letter"
        value={query}
        onChange={handleSearch}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="name-grid">
          {filteredNames.length > 0 ? (
            filteredNames.map((item, index) => (
              <div
                key={index}
                className="name-item"
                onClick={() => handleNameClick(item)}
                onMouseEnter={() => handleMouseEnter(item.meaning)}
                onMouseLeave={handleMouseLeave}
              >
                {item.name}
              </div>
            ))
          ) : (
            query.length > 0 && <div className="no-results">No names found</div>
          )}
        </div>
      )}

      {/* Tooltip for displaying name meanings */}
      {hoveredMeaning && <div className="tooltip">{hoveredMeaning}</div>}

      {/* Modal for showing details */}
      <Modal
        isOpen={isModalOpen}
        name={selectedName?.name}
        meaning={selectedName?.meaning}
        onClose={closeModal}
        onDelete={deleteName}
      />

      {/* Contribute a name section */}
      <div className="contribute-section">
        <h2>Contribute a Name</h2>
        <form onSubmit={handleContributeSubmit}>
          <input
            type="text"
            className="contribute-input"
            placeholder={`Enter a new ${gender} name`}
            value={contributeName}
            onChange={(e) => setContributeName(e.target.value)}
          />
          <button type="submit" className="contribute-button" disabled={isAdding}>
            {isAdding ? 'Adding...' : 'Submit'}
          </button>
        </form>
        {contributionMessage && <div className="contribution-message">{contributionMessage}</div>}
      </div>
    </div>
  );
}

export default NameSearchPage;
